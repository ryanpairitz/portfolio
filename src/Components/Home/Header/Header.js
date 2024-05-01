import { Link } from "react-router-dom";
import "./Header.css";
import Headshot from "./ryanpairitz-headshot.jpg";
import { useMedia } from "../../../Hooks/useMedia";

const Header = () => {
    // const introCopy = useMedia(['(min-width: 699px)', '(min-width: 487px)', '(min-width: 388px)'], ["Hi, I'm Ryan Pairitz", "Hi, I'm Ryan"], "I'm Ryan");

    return (
        <div className="hero-container">
            <Link className="hero-row-1" to="about">
                <div>
                    <img src={Headshot}
                        className="avatar"
                        alt="Ryan Pairitz smiling, standing for a studio portrait in front of a beige backdrop, wearing a cream sweater." />
                    {/* <h2>{introCopy}</h2> */}
                    <h2><span id="hi">Hi,&nbsp;</span>I'm Ryan&nbsp;<span id="pairitz">Pairitz</span></h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M12.8901 8.7804L21.1098 17L12.8901 25.2196" stroke="#525252" strokeWidth="1.38" strokeMiterlimit="10" />
                </svg>
            </Link>
            <div className="hero-row-2">
                <h1 className="hero-col-1">I design solutions* tailored for humans</h1>
                <div className="hero-col-2">
                    <p className="small">For a number of products and solutions, design is dismissed as a luxury, not an essential. However, design <em>is</em> the product. The best ones are the result of conscious design, focused on connecting to us as humans. That’s why my process is centered around people.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;