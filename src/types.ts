export type HobbyItem = {
    highlight?: boolean;
    title: string;
    image?: ImageMetadata;
    desc?: string;
    date: string;
    link: string;
    sources: Source[];
    techs: Tech[];
};

type Source = {
    id?: string;
    type: SourceType;
}

export type Tech = TechTypes | string;

export enum SourceType {
    GITHUB = 'github',
    CODEPEN = 'codepen',
    CODEPENPOST = 'codepenpost',
    SKILLSHARE = 'skillshare',
    CSSTRICKS = 'css-tricks',
    YOUTUBE = 'youtube',
    FREECODECAMP = 'freecodecamp',
}

export enum TechTypes {
    HTML = 'html',
    JAVASCRIPT = 'javascript',
    TYPESCRIPT = 'typescript',
    REACT = 'react',
    VUE = 'vue',
    SVG = 'svg',
    PUG = 'pug',
    CSS = 'css',
    RXJS = 'rxjs',
    THREEJS = 'threejs',
    CANVAS = 'canvas',
    ASTRO = 'astro',
}

export type ResumeItem = {
    highlight?: boolean;
    header: string;
    subheader: string;
    description?: string;
    location?: string;
    date: string;
    pic: ImageMetadata | string;
    link: string;
}