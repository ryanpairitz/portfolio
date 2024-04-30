import { animated } from "@react-spring/web";
import { useState } from "react";
import AnimatedLink from "../../AnimatedLink";
import { Link } from "react-router-dom";

const AnimatedReactLink = animated(Link);

const ProjectPreview = ({ to, cta, style, children }) => {
    const [hovering, setHovering] = useState(false);
    
    return (
        <AnimatedReactLink style={style} className="preview"
            to={to}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            {children}
            <AnimatedLink to={to} hoveringOnParent={hovering}>{cta}</AnimatedLink>
        </AnimatedReactLink>
    );
};

export default ProjectPreview;