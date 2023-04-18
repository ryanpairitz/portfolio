import { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';
import ProjectsMasonry from './ProjectsMasonry';

const ProjectList = [
	{
		id: 0,
		title: "ivi",
        logo: "",
		cardImg: "",
        private: false,
        personal: false,
        height: 610,
		tags: [
            // may also include subtags (e.g. graphic design > branding, logo design, ...)
			"graphic design",
			"ui/ux design",
			"frontend dev",
		],
		// below is all additional detail for the detail view
		theme: {
			neutral: "", // to be used in background
			darkNeutral: "", // to be used as background accent, like as bg for call to action	
			primary: "", // to be used most often, like greenparakeet color, in calls to action + links
			accent: ""
		},
        bannerImg: "",
        timeline: {
            start: "",
            end: "",
        },
        sections: [
            {
                title: "",
                toolsUsed: [
                    ""
                ]
            }
        ],
	},
    {
		id: 1,
        height: 987,
		title: "The Shirt",
        logo: "",
		cardImg: "",
        private: false,
        personal: false,
		tags: [
            // may also include subtags (e.g. graphic design > branding, logo design, ...)
			"graphic design",
		],
    },
    {
		id: 2,
        height: 610,
		title: "Partake",
        logo: "",
		cardImg: "",
        private: false,
        personal: false,
		tags: [
            // may also include subtags (e.g. graphic design > branding, logo design, ...)
			"graphic design",
			"ui/ux design",
			"frontend dev",
		],
    },
]

const Projects = () => {
    const filterList = useOutletContext();
    const location = useLocation();
    const [filterByPersonal, setFilterByPersonal] = useState(false);
    const [projectList, setProjectList] = useState(ProjectList);

    useEffect(() => {
        setFilterByPersonal(location.pathname === '/personal')
    },[location]);

    useEffect(() => {
        const projects = ProjectList.filter(project => {
            // check if ANY of the project's tags matches ANY of the set filters
            const noTagsMatchFilters = project.tags.every(tag => 
                !filterList.includes(tag)
            );
            // also check if project's personal bool matches filterByPersonal
            const isAHit = !noTagsMatchFilters && project.personal === filterByPersonal;
            return isAHit;
        });
        setProjectList(projects);
    },[filterList,filterByPersonal]);

    return (
        <div className="projects-container">
            {/* <h2>{filterByPersonal ?
                `Personal project list comp`
                :
                `Project list comp`}</h2> */}
            {/* <ul>
                {filterList.map((filter,index) => (
                    <li key={index}>{filter}</li>
                ))}
                {projectList.map((project,index) => (
                    <li key={index}>{project.title}</li>
                ))}
            </ul> */}
            <ProjectsMasonry projectList={projectList} />
        </div>
    );
};

export default Projects;