import { animated, useSpring } from "@react-spring/web";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectTags from "./ProjectTags";
import lottie from 'lottie-web';

const AnimatedLink = animated(Link);

const ProjectCard = ({ project }) => {
    const animationData = project.cardAnimationData ? project.cardAnimationData : null;
    const container = useRef(null);
    const anim = useRef(null);
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
            opacity: !hovering ? 1 : 0,
            y: !hovering ? 0 : 89
        },
    });

    useEffect(() => {
        if (container.current){
            anim.current = lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: animationData,
            });

            return () => {
                anim.current?.destroy();
            }
        }
    }, [animationData]);
    useEffect(() => {
        anim.current?.setDirection(hovering ? 1 : -1);
        anim.current?.play();
    }, [hovering]);

    return (
        <AnimatedLink
            to={`/project/${project.id}`}
            state={{ theme: project.theme }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                ...cardStyle,
                backgroundColor: project.id === 1 ? '#9B5F17' : project.theme.raisedNeutral,
            }}>
            <animated.div className="card-img" 
                style={{
                    ...imgStyle,
                    background: project.cardColor,
                }} 
                ref={animationData ? container : null}>
                {animationData === null &&
                project.cardImg}
            </animated.div>
            <animated.div className="card-content" style={contentStyle}>
                <div className="logo">{project.logo}</div>
                <ProjectTags tags={project.tags} 
                    color={project.theme.primary}
                    backgroundColor={project.theme.raisedNeutral} />
            </animated.div>
        </AnimatedLink>
    );
};

export default ProjectCard;