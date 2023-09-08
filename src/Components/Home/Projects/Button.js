import { useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
// import './Contact.css';

const Button = ({ label, href, color }) => {
    const [hovering, setHover] = useState(false);
    const buttonStyles = useSpring({
        from: {
            scale: 1,
            backgroundColor: "rgba(" + color + ",0.15)",
            color: "rgba(" + color + ",0.77)",
            fill: "rgba(" + color + ",0.77)",
        },
        to: {
            scale: hovering ? 1.0557 : 1,
            backgroundColor: hovering ? "rgba(" + color + ",0.382)" : "rgba(" + color + ",0.15)",
            color: hovering ? "rgba(" + color + ",1)" : "rgba(" + color + ",0.77)",
            fill: hovering ? "rgba(" + color + ",1)" : "rgba(" + color + ",0.77)",
        },
        delay: 100,
    });

    return (
        <animated.a className='button'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href={href}
            target="_blank" rel="noopener noreferrer"
            style={buttonStyles}
        >
            <h3><b>{label}</b></h3>
        </animated.a>
    );
};

export default Button;