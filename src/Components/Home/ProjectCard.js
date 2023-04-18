import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardTheShirt } from "./CardTheShirt";

const AnimatedLink = animated(Link);

// const CardImage = (image) => image;
// const AnimatedCardImage = animated(CardImage);

const ProjectCard = ({ project }) => {
    const [hovering, setHovering] = useState(false);
    const cardStyle = useSpring({
        to: {
            scale: hovering ? 1.0557 : 1,
        },
    });
    const imgStyle = useSpring({
        to: {
            opacity: hovering ? 1 : 0.382,
        },
    });
    const contentStyle = useSpring({
        to: {
            opacity: hovering ? 1 : 0,
            y: hovering ? 0 : 89
        },
    });
    return (
        <AnimatedLink
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                ...cardStyle,
                backgroundColor: project.theme.raisedNeutral,
            }}>
            <animated.div className="card-img" style={imgStyle}>
                {project.cardImg}
            </animated.div>
            {/* <AnimatedCardImage image={project.cardImg} style={imgStyle}/> */}
            <animated.div className="card-content" style={contentStyle}>
                <h1 className="card-title">{project.title}</h1>
                <ul className="tags">
                    {project.tags.map((tag, index) => (
                        <li key={index} style={{
                            background: project.theme.neutral ? project.theme.neutral : "#001412",
                            color: project.theme.primary,
                        }}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </animated.div>
        </AnimatedLink>
    );
};

export default ProjectCard;