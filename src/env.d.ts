/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
    dataLayer: Record<string, any>[];
}

declare const dataLayer: Record<string, any>[];