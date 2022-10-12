import { ReactComponent as GoldenParrot } from "./goldenParrot.svg";
import { ReactComponent as TwitterIcon } from "../../img/icons_twitter.svg";
import Contact from "../../Contact/Contact";
import { Link } from 'react-router-dom';
import "./About.css";

const About = () => {
    return (
        <div className="about-container tab-container">
            <div className="about-svg-container">
                <GoldenParrot />
            </div>
            <div className="about-text-container">
                <p>
                    <a href="https://twitter.com/ryanparrots" target="_blank" rel="noopener noreferrer">
                        <b>
                            Hi! I’m Ryan Pairitz &#40;<TwitterIcon className="icon" />&#41;
                        </b>
                    </a>, a designer, developer, and animator. I specialize in user experience, frontend development, and design, and I have been doing freelance work since I was 14.</p>
                <p>I studied Computer Science &#38; Engineering at the University of Notre Dame, where I was selected to serve as a designer for&nbsp;
                    <Link>
                        <b>The Shirt</b>
                    </Link> — the highest-selling piece of collegiate apparel in the nation.</p>
                <p>I have designed and developed multiple apps for web or mobile. One of which,&nbsp;
                    <Link>
                        <b>Partake</b>
                    </Link>, was granted an award by the University of Notre Dame. Another app,&nbsp;
                    <Link>
                        <b>ivi</b>
                    </Link>, earned a place in the 2022 Race to Revenue startup incubator cohort.</p>
                <Contact />
            </div>
            <div className="about-svg-container-alt"><GoldenParrot /></div>
        </div>
    );
};

export default About;