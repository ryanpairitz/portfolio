import { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from 'react-router-dom';

const Projects = () => {
    const filters = useOutletContext();
    const location = useLocation();
    const [filterByPersonal, setFilterByPersonal] = useState(false);

    useEffect(() => {
        (location.pathname === '/personal' ?
            setFilterByPersonal(true) :
            setFilterByPersonal(false)
        );
    },[location, filterByPersonal]);

    return (
        <div className="projects-container">
            <h2>{filterByPersonal ?
                `Personal project list comp`
                :
                `Project list comp`}</h2>
            <ul>
                {filters["uidesign"] && (
                    <li>ui/ux design</li>
                )}
                {filters["frontenddev"] && (
                    <li>frontend dev</li>
                )}
                {filters["graphicdesign"] && (
                    <li>graphic design</li>
                )}
                {filters["animation"] && (
                    <li>animation</li>
                )}
            </ul>
        </div>
    );
};

export default Projects;