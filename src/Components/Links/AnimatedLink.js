import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useTrail, useSpring } from "react-spring";
import './Link.css';

const AnimatedLink = ({ to, children }) => {
    const chars = children.split("").map((value, index) => (
        { key: index, char: value }
    ));
    const [active, setActive] = useState(false);
    const trail = useTrail(chars.length, {
        loop: { reverse: active },
        opacity: active ? 0.38 : 1,
        transform: active ? 'translateY(-3px)' : 'translateY(0px)',
        from: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        delay: 100
    });
    const linkStyle = useSpring({
        to: {
            scale: active ? 1.09 : 1
        },
        delay: 100,
    });

    return (
        <animated.span className="link-container"
        style={linkStyle}>
            <Link onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="link-text"
                to={to}
            >
                {trail.map((style, index) => (
                    <animated.b key={index} style={style}>
                        {chars[index].char}
                    </animated.b>
                ))}
            </Link>
        </animated.span>
    );
};

export default AnimatedLink;