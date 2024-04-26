import { animated } from "@react-spring/web";

const Brandmark = ({ className, style, accentStyle }) => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="45" height="42"
            viewBox="0 0 34 34" enableBackground="new 0 0 34 34" xmlSpace="preserve">
            <animated.path style={style} fill="#282828" d="M13,31.6L2.6,32C2.3,32,2,31.7,2,31.4L0.5,10.6c0-0.3,0.2-0.6,0.6-0.6l10.4-0.4c0.3,0,0.6,0.3,0.7,0.6
	L13.6,31C13.6,31.3,13.4,31.6,13,31.6z"/>
            <animated.circle style={accentStyle} fill="#8F7C8C" cx="21.5" cy="14.1" r="12" />
        </svg>
    );
};

export default Brandmark;