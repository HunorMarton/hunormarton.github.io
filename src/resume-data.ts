import { type ResumeItem } from './types'
import googleLogo from "./logos/google.svg?raw";
import unuLogo from "./logos/unu.svg?raw";
import leoLogo from "./logos/leo.svg?raw";
import sapLogo from "./logos/sap.svg?raw";
import universityLogo from "./logos/university.png";
import codebarLogo from "./logos/codebar.png";
import upLogo from "./logos/up.png";

export const experience: ResumeItem[] = [
    {
        highlight: true,
        header: "Google",
        subheader: "UX Engineer (temporary staff)",
        pic: googleLogo,
        link: "https://google.com",
        sub1: "Berlin & Paris",
        sub2: "2021 - 2022",
    },
    {
        highlight: true,
        header: "unu",
        subheader: "Full stack developer",
        pic: unuLogo,
        link: "https://unumotors.com",
        sub1: "Berlin, Germany",
        sub2: "2019 - 2020",
    },
    {
        highlight: true,
        header: "LEO Innovation Lab",
        subheader: "Full stack developer",
        pic: leoLogo,
        link: "https://www.linkedin.com/company/leo-innovation-lab/about/",
        sub1: "Copenhagen, Denmark",
        sub2: "2017 - 2018",
    },
    {
        header: "SAP",
        subheader: "Full stack developer, UX Designer",
        pic: sapLogo,
        link: "https://www.sap.com/hungary/",
        sub1: "Budapest, Hungary",
        sub2: "2012 - 2017",
    }
];

export const education: ResumeItem[] = [
    {
        header: "Budapest University of Technology and Economics",
        subheader: "Bachelor's Degree",
        pic: universityLogo,
        link: "https://www.bme.hu/",
        sub1: "Computer Science",
        sub2: "2007 - 2012",
    },
];

export const volunteering: ResumeItem[] = [
    {
        header: "codebar",
        subheader: "Coach",
        pic: codebarLogo,
        link: "https://codebar.io/berlin",
        sub1: "Coaching future web developers",
        sub2: "2019 - 2020",
    },
    {
        header: "Budapest UP!",
        subheader: "Founder",
        pic: upLogo,
        link: "https://www.facebook.com/budapest.up",
        sub1: "Organizing urban playground events",
        sub2: "2011 - 2016",
    }
];
