import { defineFlatConfigs, createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default defineFlatConfigs(
    await createConfigForNuxt({
        features: {
            stylistic: false,
            tooling: false
        }
    }),
    {
        rules: {
            semi: ['error', 'never'],
            quotes: ['error', 'single']
        }
    }
)
