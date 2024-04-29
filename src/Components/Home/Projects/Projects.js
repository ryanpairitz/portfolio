import { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import CardTheShirt from './the-shirt-cover.jpg';
import { LogoVinal } from './LogoVinal';
import { LogoPartake } from './LogoPartake';
import { LogoTheShirt } from './LogoTheShirt';
import ProjectsMasonry from './ProjectsMasonry';
import ProjectsList from './ProjectList';
import CardVinal from './CoverVinal.png';
import CardPartake from './partake-mockup.jpg';
import CardPruun from './pruun-mockup.jpg';
import CardSlate from './slate-mockup.jpg';

export const ProjectList = [
    {
        id: "pruun",
        height: 987,
        title: "Pruun",
        description: "Designing a SaaS landscaping marketplace and CRM for scale. Won 2nd place and $15,000 at the University of Dayton Pitch Competition.",
        link: {
            label: "Get a sneak peek →",
        },
        // logo: <LogoVinal />,
        cardImg: <img src={CardPruun} alt="" />,
        private: false,
        personal: false,
    },
    {
        id: "slate",
        height: 987,
        title: "Slate",
        description: "Targeting poverty by curating opportunities and allocating training resources for low-wage workers, by extracting their transferable skills through conversational AI. This minimizes guesswork for workforce development programs and helps employers place talent in their hardest-to-fill roles.",
        link: {
            label: "Get a sneak peek →",
        },
        // logo: <LogoVinal />,
        cardImg: <img src={CardSlate} alt="" />,
        private: false,
        personal: false,
    },
    {
        id: "notre-dame-the-shirt-2020",
        height: 987,
        title: "The Shirt (2020)",
        description: "Designed Notre Dame’s The Shirt, which sells more than 160,000 units per year.",
        link: {
            label: "Read the case study →",
        },
        logo: <LogoTheShirt />,
        cardImg: <img src={CardTheShirt} alt="University of Notre Dame monogram in lockup with The Shirt logo, overlaying a scenic picture of the Notre Dame Hammes bookstore, which hangs a banner advertising 2020's edition of The Shirt above the main entrance." />,
        private: false,
        personal: false,
    },
    {
        id: "partake",
        height: 987,
        title: "Partake",
        description: "Mobile app for finding friends by participating in common hobbies.",
        link: {
            label: "Read the case study →",
        },
        logo: <LogoPartake />,
        cardImg: <img src={CardPartake} alt="Silhouetted against an ethereal blue background, a hand interacts with an iPhone displaying the profile of a fun- and friendly-looking young man on the app Partake." />,
        private: false,
        personal: false,
    },
    {
        id: "vinal-brand-guide",
        height: 610,
        title: "Vinal",
        description: "Brand guidelines for Vinal, a dApp people can use to express themselves through — and be rewarded for — the records they collect.",
        link: {
            label: "Check it out →",
        },
        logo: <LogoVinal />,
        cardImg: <img src={CardVinal} alt="" />,
        private: false,
        personal: true,
    },
]

const Projects = () => {
    const [projectList, setProjectList] = useState(ProjectList);

    return (
        // <ProjectsMasonry projectList={projectList} />
        <ProjectsList projectList={projectList} />
    );
};

export default Projects;