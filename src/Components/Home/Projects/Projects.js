import { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import CardTheShirt from './the-shirt-cover.jpg';
import { LogoVinal } from './LogoVinal';
import { LogoPartake } from './LogoPartake';
import { LogoTheShirt } from './LogoTheShirt';
import ProjectsMasonry from './ProjectsMasonry';
import CardVinal from './CoverVinal.png';
import CardPartake from './partake-mockup.jpg';

export const ProjectList = [
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
        cardColor: "#805fba",
        private: false,
        personal: false,
    },
    {
        id: "vinal-brand-guide",
        height: 610,
        title: "Vinal",
        description: "Brand guidelines for Vinal, a dApp used to express yourself through — and be rewarded for — the records you collect.",
        link: {
            label: "Check it out →",
        },
        logo: <LogoVinal />,
        cardImg: <img src={CardVinal} alt="" />,
        cardColor: "linear-gradient(90deg, #e65845 0%, #E44C49 8%, #E23552 26%, #E02558 47%, #DF1B5B 69%, #df195d 100%)",
        private: false,
        personal: true,
    },
    {
        id: "notre-dame-the-shirt-2020",
        height: 987,
        title: "The Shirt 2020",
        description: "Designed Notre Dame’s The Shirt, which sells more than 160,000 units per year.",
        link: {
            label: "Read the case study →",
        },
        logo: <LogoTheShirt />,
        cardImg: <img src={CardTheShirt} alt="University of Notre Dame monogram in lockup with The Shirt logo, overlaying a scenic picture of the Notre Dame Hammes bookstore, which hangs a banner advertising 2020's edition of The Shirt above the main entrance." />,
        cardColor: "#0B1C18",
        private: false,
        personal: false,
    },
]

const Projects = () => {
    const [projectList, setProjectList] = useState(ProjectList);

    return (
        <ProjectsMasonry projectList={projectList} />
    );
};

export default Projects;