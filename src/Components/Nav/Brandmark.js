import { animated } from "@react-spring/web";

const Brandmark = ({ className, style, accentStyle }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 35 31.9"
            className={className}>
            <animated.path opacity="0.38" style={style} d="M14,30.3c0,0.3-0.2,0.6-0.6,0.6L2.7,31.4c-0.4,0-0.7-0.3-0.7-0.6L0.5,9.3
	c0-0.4,0.2-0.6,0.6-0.7l9.5-0.3c-0.6,1.4-0.9,3-0.9,4.6c0,3.5,1.4,6.6,3.7,8.8L14,30.3z"/>
            <animated.circle opacity="0.62" style={accentStyle} cx="22.1" cy="12.9" r="12.4" />
        </svg>
    );
};

export default Brandmark;