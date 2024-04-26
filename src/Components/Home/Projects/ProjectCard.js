import { animated, useSpring } from "@react-spring/web";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AnimatedLink = animated(Link);

const ProjectCard = ({ project }) => {
    const [hovering, setHovering] = useState(false);
    const cardStyle = useSpring({
        to: {
            scale: hovering ? 1.0557 : 1,
        },
    });
    const contentStyle = useSpring({
        to: {
            opacity: !hovering ? 1 : 0,
            y: !hovering ? 0 : 89
        },
    });

    return (
        <AnimatedLink
            to={`/project/${project.id}`}
            state={{ theme: project.theme }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                ...cardStyle,
            }}>
            <animated.div className="card-img" >
                {project.cardImg}
            </animated.div>
            <animated.div className="card-content" style={contentStyle}>
                <div className="logo">{project.title}</div>
            </animated.div>
        </AnimatedLink>
    );
};

export default ProjectCard;