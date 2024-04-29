import { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import { CardIvi } from './CardIvi';
import { CardTheShirt } from './CardTheShirt';
import { LogoVinal } from './LogoVinal';
import { LogoPartake } from './LogoPartake';
import { LogoTheShirt } from './LogoTheShirt';
import ProjectsMasonry from './ProjectsMasonry';
import { CardVinal } from './CardVinal';
import { CardPartake } from './CardPartake';

export const ProjectList = [
    {
        id: 3,
        height: 987,
        title: "Partake",
        logo: <LogoPartake />,
        cardImg: <CardPartake />,
        cardColor: "#805fba",
        private: false,
        personal: false,
        tags: [
            // may also include subtags (e.g. graphic design > branding, logo design, ...)
            "graphic design",
            "ui/ux design",
            "frontend dev",
        ],
        theme: {
            neutral: "#1c1821",
            raisedNeutral: "#0d0d1a",
            primary: "#9bd2f2",
            accent: ""
        },
    },
    {
        id: 2,
        height: 610,
        title: "Vinal",
        logo: <LogoVinal />,
        cardImg: <CardVinal />,
        cardColor: "linear-gradient(90deg, #e65845 0%, #E44C49 8%, #E23552 26%, #E02558 47%, #DF1B5B 69%, #df195d 100%)",
        private: false,
        personal: true,
        tags: [
            // may also include subtags (e.g. graphic design > branding, logo design, ...)
            "graphic design",
            "ui/ux design",
            "frontend dev",
            "animation",
        ],
        theme: {
            neutral: "#272727",
            raisedNeutral: "#161616",
            primary: "#df195d",
        },
    },
    {
        id: "notre-dame-the-shirt-2020",
        height: 987,
        title: "The Shirt 2020",
        logo: <LogoTheShirt />,
        cardImg: <CardTheShirt />,
        cardColor: "#0B1C18",
        private: false,
        personal: false,
        tags: [
            // may also include subtags (e.g. graphic design > branding, logo design, ...)
            "graphic design",
        ],
        theme: {
            neutral: "#010a12",
            raisedNeutral: "#0b131c",
            primary: "#9b5f17",
        },
    },
]

const Projects = () => {
    const [projectList, setProjectList] = useState(ProjectList);

    return (
        <ProjectsMasonry projectList={projectList} />
    );
};

export default Projects;