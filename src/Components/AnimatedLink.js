import { Children, useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useTrail, useSpring } from "@react-spring/web";
import AnimatedButton from './AnimatedButton';
import './Link.css';

const AnimatedLink = ({ to, href, hasManyTypes, children }) => {
    const items = (hasManyTypes ? Children.toArray(children) :
        children.split("").map((value, index) => (
            { key: index, char: value }
        ))
    );
    const [active, setActive] = useState(false);
    const trail = useTrail(items.length, {
        config: { mass: items.length / 2.618, tension: 233, friction: 34 },
        loop: { reverse: active },
        from: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        opacity: active ? 0.618 : 1,
        transform: active ? 'translateY(-3px)' : 'translateY(0px)',
        delay: 100
    });
    const linkStyle = useSpring({
        to: {
            scale: active ? 1.0557 : 1
        },
        delay: 100,
    });

    return (
        <AnimatedButton reverse={true}>
            <animated.span className="link-container"
                style={linkStyle}>
                {href ?
                    <a onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                        className="link-text"
                        href={href}
                        target="_blank" rel="noopener noreferrer"
                    >
                        {hasManyTypes ?
                            trail.map((style, index) => (
                                <animated.span key={index} style={style}>
                                    {items[index]}
                                </animated.span>
                            ))
                            :
                            trail.map((style, index) => (
                                items[index].char === ' ' ?
                                    <animated.b key={index} style={style}>
                                        &nbsp;
                                    </animated.b>
                                    :
                                    <animated.b key={index} style={style}>
                                        {items[index].char}
                                    </animated.b>
                            ))
                        }
                    </a> :
                    <Link onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                        className="link-text"
                        to={to}
                    >
                        {hasManyTypes ?
                            trail.map((style, index) => (
                                <animated.span key={index} style={style}>
                                    {items[index]}
                                </animated.span>
                            ))
                            :
                            trail.map((style, index) => (
                                items[index].char === ' ' ?
                                    <animated.b key={index} style={style}>
                                        &nbsp;
                                    </animated.b>
                                    :
                                    <animated.b key={index} style={style}>
                                        {items[index].char}
                                    </animated.b>
                            ))
                        }
                    </Link>
                }
            </animated.span>
        </AnimatedButton>
    );
};

export default AnimatedLink;