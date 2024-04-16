import type { CollectionEntry } from "astro:content";

export function getPrimaryLink(entry: CollectionEntry<"hobbies">, embed = false) {
    if (entry.data.sources.web) {
        return { href: entry.data.sources.web, label: "Open Website" };
    } else if (entry.data.sources.vercel) {
        return { href: `https://${entry.data.sources.vercel}.vercel.app/`, label: "View on Vercel" };
    } else if (entry.data.sources.codepen) {
        if (embed) {
            return { href: `https://codepen.io/HunorMarton/embed/${entry.data.sources.codepen}?default-tab=result&theme-id=light`, label: 'Open on CodePen' };
        } else {
            return { href: `https://codepen.io/HunorMarton/full/${entry.data.sources.codepen}`, label: 'Open on CodePen' };
        }
    } else if (entry.data.sources.github) {
        return { href: `https://hunormarton.github.io/${entry.data.sources.github}/`, label: 'Open on GitHub Pages' };
    } else if (entry.data.sources.skillshare) {
        return { href: `https://skl.sh/${entry.data.sources.skillshare}`, label: 'View on Skillshare' };
    } else if (entry.data.sources["css-tricks"]) {
        return { href: `https://css-tricks.com/${entry.data.sources["css-tricks"]}/`, label: 'Read on CSS-Tricks' };
    } else {
        throw Error("No source found");
    }
}