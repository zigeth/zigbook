/* eslint-disable @typescript-eslint/no-explicit-any */
declare function useI18n(): any
declare function useLocalePath(): (route?: any, locale?: any) => string
declare function useSwitchLocalePath(): (locale: any) => string

declare module '@nuxt/schema' {
    interface NuxtConfig {
        i18n?: any
    }

    interface NuxtOptions {
        i18n?: any
    }
}
