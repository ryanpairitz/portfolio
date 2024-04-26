import "./About.css";
import AnimatedP from "../../AnimatedP";
import AnimatedSection from "../../AnimatedSection";

// const NoWrap = (props) => <span style={{ whiteSpace: "nowrap" }} {...props} />
const About = () => {
    return (
        <AnimatedSection>
            <AnimatedP>Hi I'm Ryan Pairitz, a visual and motion designer and software engineer. I specialize in user experience and visual design, and I have been doing freelance work since I was 14.
            </AnimatedP>
            <AnimatedP>
                A '22 grad, I studied Computer Science &#38; Engineering at the University of Notre Dame, where I was selected to serve as a designer for&nbsp;
                — the highest-selling piece of collegiate apparel in the nation.
            </AnimatedP>
            <AnimatedP>
                I have designed and developed multiple apps for web or mobile. One of which,&nbsp;
                was granted an award by the University of Notre Dame. Another app,&nbsp;
                was among the top 5% of Notre Dame ventures to earn a place in the 2022 Race to Revenue startup incubator cohort.
            </AnimatedP>
            <AnimatedP>
                When I'm not designing or coding, I'm often playing guitar, writing music, at the gym, or watching the game.
            </AnimatedP>
        </AnimatedSection>
    );
};

export default About;