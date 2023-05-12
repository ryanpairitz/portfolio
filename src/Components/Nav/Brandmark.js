import { animated } from "@react-spring/web";

const Brandmark = ({ className, style, accentStyle }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 35 31.9"
            className={className}>
            <animated.path opacity="0.62" style={style} d="M13.4,31L2.7,31.4c-0.3,0-0.7-0.3-0.7-0.6L0.5,9.3c0-0.3,0.2-0.6,0.6-0.7l10.7-0.4
	c0.3,0,0.7,0.3,0.7,0.6L14,30.3C14,30.7,13.7,31,13.4,31z"/>
<animated.circle opacity="0.62" style={accentStyle} cx="22.1" cy="12.9" r="12.4"/>
        </svg>
    );
};

export default Brandmark;