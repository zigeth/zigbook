#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectRoot = resolve(__dirname, '..')
const args = ['vue-tsc', '--noEmit', '-p', 'tsconfig.typecheck.json', '--pretty', 'false']

const result = spawnSync('npx', args, {
    cwd: projectRoot,
    stdio: ['ignore', 'pipe', 'pipe'],
    encoding: 'utf-8'
})

if (result.status === 0) {
    process.stdout.write(result.stdout)
    process.exit(0)
}

const combinedOutput = `${result.stdout}${result.stderr}`
const blocks = combinedOutput
    .split(/\n(?=\S)/) // split on newlines that start a new statement
    .map((line) => line.trimEnd())
    .filter(Boolean)

const dependencyMarkers = ['node_modules/', '/.nuxt/']
const hasUserlandError = blocks.some((line) => {
    if (!line.includes('.ts') && !line.includes('.vue')) {
        return false
    }
    return !dependencyMarkers.some((marker) => line.includes(marker))
})

if (hasUserlandError) {
    process.stderr.write(combinedOutput)
    process.exit(result.status ?? 1)
}

process.stdout.write('TypeScript: only dependency diagnostics encountered; ignoring.\n')
process.exit(0)
