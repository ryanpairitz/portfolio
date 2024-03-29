import Contact from "../../Contact/Contact";
import AnimatedLink from "../../AnimatedLink";
import "./About.css";
import IconInstagram from "../../img/IconInstagram";
import IllustrationParrot from "./IllustrationParrot";
import AnimatedP from "../../AnimatedP";

const NoWrap = (props) => <span style={{ whiteSpace: "nowrap" }} {...props} />
const About = () => {
    return (
        <div className="tab-container">
            <div className="about-container">
                <IllustrationParrot className="about-illustration-container" />
                <span className="about-text-container">
                    <AnimatedP>
                        <NoWrap>
                            <AnimatedLink href="https://www.instagram.com/ryanpairitz/" hasManyTypes={true}>
                                {"Hi! I'm Ryan Pairitz (".split('').map((value, index) => (
                                    value === ' ' ?
                                        <b key={index}>&nbsp;</b>
                                        :
                                        <b key={index}>{value}</b>
                                ))}
                                <IconInstagram className="icon-inline" />
                                <b>&#41;</b>
                            </AnimatedLink>
                            ,</NoWrap>
                        &nbsp;a designer, developer, and animator. I specialize in user experience, frontend development, and design, and I have been doing freelance work since I was 14.
                    </AnimatedP>
                    <AnimatedP>
                        A '22 grad, I studied Computer Science &#38; Engineering at the University of Notre Dame, where I was selected to serve as a designer for&nbsp;
                        <AnimatedLink to="/project/1">
                            The Shirt
                        </AnimatedLink> — the highest-selling piece of collegiate apparel in the nation.
                    </AnimatedP>
                    <AnimatedP>
                        I have designed and developed multiple apps for web or mobile. One of which,&nbsp;
                        <NoWrap>
                            <AnimatedLink to="/project/3">
                                Partake
                            </AnimatedLink>
                            ,</NoWrap>
                        &nbsp;was granted an award by the University of Notre Dame. Another app,&nbsp;
                        <NoWrap>
                            <AnimatedLink to="/project/0">
                                ivi
                            </AnimatedLink>
                            ,</NoWrap>
                        &nbsp;earned a place in the 2022 Race to Revenue startup incubator cohort.
                    </AnimatedP>
                    <AnimatedP>
                        When I'm not designing or coding, I'm often playing guitar, writing music, at the gym, or finding new crafts to get into. Or I'm just thinking. &#40;Yanno, philosophically.&#41;
                    </AnimatedP>
                    <AnimatedP>
                        I also have a lot of friends.
                    </AnimatedP>
                </span>
            </div>
            <Contact />
        </div>
    );
};

export default About;