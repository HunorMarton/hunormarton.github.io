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
        description: "I joined as a temporary staff to create a React prototype.After the project's success, I joined a team and dived deep into Google-specific technologies. I also worked on a VS Code extension and updated some of the tooling documentation. I started the Berlin pushup group.",
        pic: googleLogo,
        link: "https://google.com",
        location: "Berlin & Paris",
        date: "2021 - 2022",
    },
    {
        highlight: true,
        header: "unu",
        subheader: "Full stack developer",
        description: "Worked both on the customer-facing website and an internal web app. Primarily responsible for frontend development, code reviews, and mentoring a junior backend developer. Occasionally giving tech talks.",
        pic: unuLogo,
        link: "https://unumotors.com",
        location: "Berlin, Germany",
        date: "2019 - 2020",
    },
    {
        highlight: true,
        header: "LEO Innovation Lab",
        subheader: "Full stack developer",
        description: "I joined a small team as the only developer. Due to the small team and flexible setup, I also designed the appearance and behavior of many features. My responsibilities quickly evolved from a simple website to a system of multiple sites serving four different personas and a Node.js middle layer that took care of the business logic and the database.",
        pic: leoLogo,
        link: "https://www.linkedin.com/company/leo-innovation-lab/about/",
        location: "Copenhagen, Denmark",
        date: "2017 - 2018",
    },
    {
        header: "SAP",
        subheader: "Full stack developer, UX Designer",
        description: "Junior Developer, then Developer and User Experience Advocate. Various tasks with SAP-specific technologies, including being the lead developer of a JavaScript project and taking on a UX designer role for a year.",
        pic: sapLogo,
        link: "https://www.sap.com/hungary/",
        location: "Budapest, Hungary",
        date: "2012 - 2017",
    }
];

export const education: ResumeItem[] = [
    {
        header: "Budapest University of Technology and Economics",
        subheader: "Bachelor's Degree",
        pic: universityLogo,
        link: "https://www.bme.hu/",
        description: "Computer Science",
        date: "2007 - 2012",
    },
];

export const volunteering: ResumeItem[] = [
    {
        header: "codebar",
        subheader: "Coach",
        pic: codebarLogo,
        link: "https://codebar.io/berlin",
        description: "Coaching future web developers",
        date: "2019 - 2020",
    },
    {
        header: "Budapest UP!",
        subheader: "Founder",
        pic: upLogo,
        link: "https://www.facebook.com/budapest.up",
        description: "Organizing urban playground events",
        date: "2011 - 2016",
    }
];
