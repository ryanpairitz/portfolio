import { ReactComponent as GoldenParrot } from "./goldenParrot.svg";
import { ReactComponent as TwitterIcon } from "../../img/icons_twitter.svg";
import Contact from "../../Contact/Contact";
import AnimatedLink from "../../Links/AnimatedLink";
import "./About.css";
import IconTwitter from "../../img/IconTwitter";
import IllustrationParrot from "./IllustrationParrot";
import AnimatedP from "./AnimatedP";

const About = () => {

    return (
        <div className="tab-container">
            <div className="about-container">
            {/* <div className="about-svg-container">
                <GoldenParrot />
            </div> */}
            {/* <span className="about-illustration-container"> */}
                <IllustrationParrot className="about-illustration-container" />
            {/* </span> */}
            <span className="about-text-container">
                {/* <IllustrationParrot className="about-illustration about-illustration-container" /> */}
                <AnimatedP>
                    <AnimatedLink href="https://twitter.com/ryanparrots" hasManyTypes={true}>
                        {"Hi! I'm Ryan Pairitz (".split('').map((value, index) => (
                            value === ' ' ?
                                <b key={index}>&nbsp;</b>
                                :
                                <b key={index}>{value}</b>
                        ))}
                        <IconTwitter className="icon-inline" />
                        <b>&#41;</b>
                    </AnimatedLink>, a designer, developer, and animator. I specialize in user experience, frontend development, and design, and I have been doing freelance work since I was 14.
                </AnimatedP>
                <AnimatedP>
                    A '22 grad, I studied Computer Science &#38; Engineering at the University of Notre Dame, where I was selected to serve as a designer for&nbsp;
                    <AnimatedLink to="#">
                        The Shirt
                    </AnimatedLink> — the highest-selling piece of collegiate apparel in the nation.
                </AnimatedP>
                <AnimatedP>
                    I have designed and developed multiple apps for web or mobile. One of which,&nbsp;
                    <AnimatedLink>
                        Partake
                    </AnimatedLink>, was granted an award by the University of Notre Dame. Another app,&nbsp;
                    <AnimatedLink>
                        ivi
                    </AnimatedLink>, earned a place in the 2022 Race to Revenue startup incubator cohort.
                </AnimatedP>
                <AnimatedP>
                    When I'm not designing or coding, I'm often playing guitar, writing music, at the gym, or finding new crafts to get into. Or I'm just thinking. &#40;Yanno, philosophically.&#41;
                </AnimatedP>
                <AnimatedP>
                    I also have a lot of friends.
                </AnimatedP>
                {/* <Contact /> */}
            </span>
            {/* <div className="about-svg-container-alt"><GoldenParrot /></div> */}
            </div>
            <Contact />
        </div>
    );
};

export default About;