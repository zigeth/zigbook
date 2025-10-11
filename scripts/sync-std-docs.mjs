#!/usr/bin/env node

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const STD_DIR = path.join(ROOT, 'std')
const CONTENT_ROOT = path.join(ROOT, 'content', 'docs', 'std')

const categoriesConfig = [
    {
        key: 'collections',
        label: 'Collections & Containers',
        navTitle: 'Collections',
        badge: 'Collections',
        icon: 'i-lucide-layers',
        description: 'Data structures, buffer managers, and container abstractions for high-performance Zig code.',
        descriptor: 'collections and data-structure utilities',
        modules: [
            'array_hash_map',
            'array_list',
            'bit_set',
            'BitStack',
            'BufMap',
            'BufSet',
            'hash_map',
            'heap',
            'MultiArrayList',
            'PriorityDequeue',
            'PriorityQueue',
            'SegmentedList',
            'SinglyLinkedList',
            'DoublyLinkedList',
            'Treap',
            'static_string_map'
        ]
    },
    {
        key: 'algorithms',
        label: 'Algorithms & Numerics',
        navTitle: 'Algorithms',
        badge: 'Algorithms',
        icon: 'i-lucide-function-square',
        description: 'Sorting, randomization, math helpers, and SIMD acceleration primitives.',
        descriptor: 'algorithms, numerics, and performance primitives',
        modules: ['sort', 'Random', 'math', 'simd']
    },
    {
        key: 'encodings',
        label: 'Text & Encoding',
        navTitle: 'Text & Encoding',
        badge: 'Encoding',
        icon: 'i-lucide-binary',
        description: 'Formatting, serialization, and text-processing helpers for structured data.',
        descriptor: 'formatting, serialization, and text-processing helpers',
        modules: ['ascii', 'base64', 'fmt', 'unicode', 'Uri', 'json']
    },
    {
        key: 'crypto',
        label: 'Cryptography & Hashing',
        navTitle: 'Crypto & Hashing',
        badge: 'Crypto',
        icon: 'i-lucide-shield-check',
        description: 'Cryptographic primitives, hashing utilities, and secure random helpers.',
        descriptor: 'cryptographic primitives and hashing utilities',
        modules: ['crypto', 'hash']
    },
    {
        key: 'systems',
        label: 'Core Systems',
        navTitle: 'Systems',
        badge: 'Systems',
        icon: 'i-lucide-cpu',
        description: 'Low-level concurrency, metaprogramming, memory, and language runtime building blocks.',
        descriptor: 'low-level systems primitives and metaprogramming utilities',
        modules: ['atomic', 'builtin', 'mem', 'meta', 'once', 'Thread', 'enums']
    },
    {
        key: 'platform',
        label: 'Platform & Runtime',
        navTitle: 'Platform',
        badge: 'Platform',
        icon: 'i-lucide-server-cog',
        description: 'Operating system bindings, filesystem helpers, timers, and IO abstractions.',
        descriptor: 'operating system, filesystem, and runtime services',
        modules: ['fs', 'os', 'posix', 'process', 'time', 'tz', 'Io', 'gpu']
    },
    {
        key: 'observability',
        label: 'Diagnostics & Observability',
        navTitle: 'Observability',
        badge: 'Observability',
        icon: 'i-lucide-activity',
        description: 'Logging, debugging, tracing, and progress reporting utilities.',
        descriptor: 'logging, debugging, and instrumentation helpers',
        modules: ['debug', 'log', 'Progress']
    },
    {
        key: 'networking',
        label: 'Networking & Protocols',
        navTitle: 'Networking',
        badge: 'Networking',
        icon: 'i-lucide-globe',
        description: 'Transport stacks, HTTP client utilities, and URI helpers for networked applications.',
        descriptor: 'networking protocols and transport abstractions',
        modules: ['net', 'http']
    },
    {
        key: 'toolchain',
        label: 'Toolchain & Binaries',
        navTitle: 'Toolchain',
        badge: 'Toolchain',
        icon: 'i-lucide-hammer',
        description: 'Build orchestration, target metadata, dynamic libraries, and binary format tooling.',
        descriptor: 'build coordination, targets, and binary tooling',
        modules: [
            'Build',
            'Target',
            'c',
            'DynLib',
            'zig',
            'start',
            'pie',
            'macho',
            'elf',
            'coff',
            'dwarf',
            'pdb',
            'wasm',
            'valgrind'
        ]
    },
    {
        key: 'formats',
        label: 'Binary & Archive Formats',
        navTitle: 'Formats',
        badge: 'Formats',
        icon: 'i-lucide-package',
        description: 'Utilities for structured file formats, archives, and semantic versioning.',
        descriptor: 'binary parsing, archive handling, and structured formats',
        modules: ['tar', 'zip', 'zon', 'leb', 'compress', 'SemanticVersion']
    },
    {
        key: 'testing',
        label: 'Testing & Quality',
        navTitle: 'Testing',
        badge: 'Testing',
        icon: 'i-lucide-flask-round',
        description: 'Testing harnesses, assertions, and quality-of-life helpers for validation.',
        descriptor: 'testing utilities and validation helpers',
        modules: ['testing']
    }
]

const categoryMap = new Map()
for (const category of categoriesConfig) {
    for (const moduleName of category.modules) {
        if (categoryMap.has(moduleName)) {
            throw new Error(`Module "${moduleName}" is assigned to multiple categories`)
        }
        categoryMap.set(moduleName, category)
    }
}

const humanize = (value) => {
    const noExt = value.replace(/\.md$/, '')
    const snakeToSpace = noExt.replace(/_/g, ' ')
    const withSpaces = snakeToSpace.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    return withSpaces
        .split(' ')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

const toSlug = (value) => {
    const base = value.replace(/\.md$/, '')
    return base
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .toLowerCase()
}

const quote = (value) => `"${value.replace(/"/g, '\\"')}"`

const stripTopMatter = (content) => {
    const lines = content.split(/\r?\n/)
    if (lines[0]?.startsWith('#')) {
        lines.shift()
    }
    while (lines[0]?.trim() === '') {
        lines.shift()
    }
    const cleaned = []
    for (const line of lines) {
        if (line.trim() === '[← Back to index](index.md)' || line.trim() === '[<- Back to index](index.md)') {
            continue
        }
        cleaned.push(line)
    }
    return cleaned.join('\n').trimStart()
}

const ensureDir = async (dir) => {
    await fs.mkdir(dir, { recursive: true })
}

const writeFile = async (filePath, contents) => {
    await ensureDir(path.dirname(filePath))
    await fs.writeFile(filePath, contents, 'utf8')
}

const buildModuleFrontMatter = (meta) => {
    const { moduleTitle, navTitle, category, tags, sourcePath, lastUpdated, description } = meta
    return [
        '---',
        `title: ${quote(moduleTitle)}`,
        `description: ${quote(description)}`,
        'navigation:',
        `  title: ${quote(navTitle)}`,
        `  icon: ${category.icon}`,
        `  badge: ${quote(category.badge)}`,
        `badge: ${quote(category.badge)}`,
        `category: ${quote(category.key)}`,
        'tags:',
        ...tags.map((tag) => `  - ${quote(tag)}`),
        `source: ${quote(sourcePath)}`,
        `githubPath: ${quote(sourcePath)}`,
        `lastUpdated: ${quote(lastUpdated)}`,
        'seo:',
        `  title: ${quote(`${moduleTitle} · Zig 0.15.1 standard library reference`)}`,
        `  description: ${quote(description)}`,
        '---',
        ''
    ].join('\n')
}

const buildCallout = (sourcePath) => `::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from \`${sourcePath}\` in the repository. Edit the source file to update this reference.
::

`

const buildCategoryDirFile = (category, order) => {
    return [
        `title: ${quote(category.label)}`,
        'navigation:',
        `  title: ${quote(category.navTitle)}`,
        `  icon: ${category.icon}`,
        `  order: ${order + 1}`,
        `description: ${quote(category.description)}`,
        ''
    ].join('\n')
}

const buildCategoryIndex = (category, modulesMeta) => {
    const items = modulesMeta
        .map((item) => `- [${item.navTitle}](./${item.slug}) — ${item.description}`)
        .join('\n')

    return [
        '---',
        `title: ${quote(category.label)}`,
        `description: ${quote(category.description)}`,
        'navigation:',
        '  title: "Overview"',
        'seo:',
        `  title: ${quote(`${category.label} · Zig 0.15.1 standard library reference`)}`,
        `  description: ${quote(category.description)}`,
        '---',
        '',
        `${category.description}`,
        '',
        '## Modules',
        '',
        items,
        ''
    ].join('\n')
}

const buildRootDirFile = () => {
    return [
        'title: "Standard Library"',
        'navigation:',
        '  title: "Standard Library"',
        '  icon: i-lucide-library',
        '  order: 3',
        'description: "Zig 0.15.1 standard library reference grouped by domain."',
        ''
    ].join('\n')
}

const buildRootIndex = (categories) => {
    const items = categories
        .map((category) => `- [${category.label}](./${category.key}/) — ${category.description}`)
        .join('\n')

    return [
        '---',
        'title: "Zig 0.15.1 Standard Library"',
        'description: "Explore the Zig standard library modules grouped by domain and kept in sync with the upstream documentation."',
        'navigation:',
        '  title: "Overview"',
        'seo:',
        '  title: "Zig 0.15.1 Standard Library · Zigbook"',
        '  description: "Explore curated categories for the Zig 0.15.1 standard library reference."',
        '---',
        '',
        'The Zigbook documentation syncs the upstream standard library references and groups them by domain for faster discovery.',
        '',
        '## Categories',
        '',
        items,
        ''
    ].join('\n')
}

async function main() {
    await ensureDir(CONTENT_ROOT)
    await writeFile(path.join(CONTENT_ROOT, '_dir.yml'), buildRootDirFile())

    const stdEntries = await fs.readdir(STD_DIR)
    const moduleFiles = stdEntries.filter((file) => file.endsWith('.md') && file !== 'index.md')

    const categoryData = new Map(categoriesConfig.map((cat) => [cat.key, []]))

    for (const category of categoriesConfig) {
        const categoryDir = path.join(CONTENT_ROOT, category.key)
        await ensureDir(categoryDir)
        await writeFile(path.join(categoryDir, '_dir.yml'), buildCategoryDirFile(category, categoriesConfig.indexOf(category)))
    }

    for (const fileName of moduleFiles) {
        const moduleKey = fileName.replace(/\.md$/, '')
        const category = categoryMap.get(moduleKey)
        if (!category) {
            throw new Error(`Module "${moduleKey}" is missing a category assignment.`)
        }

        const filePath = path.join(STD_DIR, fileName)
        const raw = await fs.readFile(filePath, 'utf8')
        const stat = await fs.stat(filePath)

        const moduleTitleMatch = raw.match(/^#\s+(.+)$/m)
        const moduleTitle = moduleTitleMatch ? moduleTitleMatch[1].trim() : `std.${moduleKey.replace(/_/g, '.')}`
        const navTitle = humanize(moduleKey)
        const slug = toSlug(fileName)
        const description = `Comprehensive reference for Zig's ${moduleTitle} module covering ${category.descriptor}.`

        const moduleMeta = {
            moduleTitle,
            navTitle,
            slug,
            category,
            tags: ['zig', 'standard-library', category.key],
            sourcePath: `std/${fileName}`,
            lastUpdated: stat.mtime.toISOString(),
            description
        }

        const frontMatter = buildModuleFrontMatter(moduleMeta)
        const callout = buildCallout(moduleMeta.sourcePath)
        const body = stripTopMatter(raw)

        const outPath = path.join(CONTENT_ROOT, category.key, `${slug}.md`)
        await writeFile(outPath, `${frontMatter}${callout}${body}\n`)

        categoryData.get(category.key).push(moduleMeta)
    }

    for (const category of categoriesConfig) {
        const modulesMeta = categoryData.get(category.key).sort((a, b) => a.navTitle.localeCompare(b.navTitle))
        const indexPath = path.join(CONTENT_ROOT, category.key, 'index.md')
        await writeFile(indexPath, buildCategoryIndex(category, modulesMeta))
    }

    await writeFile(path.join(CONTENT_ROOT, 'index.md'), buildRootIndex(categoriesConfig))
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
