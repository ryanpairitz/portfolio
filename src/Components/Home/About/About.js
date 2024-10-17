import "./About.css";
import AnimatedP from "../../AnimatedP";
import AnimatedSection from "../../AnimatedSection";
import Headshot from "./ryanpairitz-headshot.jpeg";

const Contents = [
    "I'm a product & experience designer bridging the gap between design and development. With a background in freelance graphic design and a bachelor's degree in Computer Science & Engineering from the University of Notre Dame, I bring a unique blend of creative and technical expertise to the table, making product handoffs especially seamless. This rare skillset also allows me to quickly ship a wide variety of high-quality projects I’ve both designed and developed — such as this portfolio.",
    "I’ve always had an appreciation for aesthetics, but it was during my time at Notre Dame working on award-winning software projects and ivi — a networking app I created and member of the 2022 Race to Revenue cohort — that I realized the pivotal role design plays in business success and social impact. I learned the best products don’t undervalue design as the icing on top of the cake; instead, thoughtful, deliberate design is baked in, ensuring the product successfully addresses our needs as humans.",
    "As a designer and SWE who spends far too much time in front of a screen (by trade) in an increasingly digitized world, I’m driven by what is real. My approach is firmly grounded in consciously reframing a product’s potential consumers or users as real people — real people, who have real problems, which present real opportunities. I genuinely believe this reminder can help to not only create functional products, but to foster meaningful connections between people and innovative solutions they’ll want to adopt.",
    "When I’m offline, you can find me on the golf course, hitting the gym, plucking away at my guitar, building things, delving into existentialist philosophy, or painting commissioned murals. Or, I’m watching the game: I'm an avid supporter of Notre Dame athletics, as well as a major Cubs, Bears, and Bucks fan.",
    "I’m most interested in dignifying all users as people behind screens and building solutions that truly solve our problems, rather than vye for our ever-diminishing attention. Life’s to be lived, so let’s make living easier and more enjoyable, not more noisy. If this sounds like something you’d be interested in, send me a message!",
    "Don’t have any design needs at the moment? Recommend a book — philosophy and self growth are my favorite genres — or a movie — I’m big into Tarantino, the Coen brothers, A24, Sundance, avant-garde, French New Wave, and a lot of things in between. Or ask me how I feel about the state of the Bears — they're losing me — or Giannis' injury going into the post-season — it hurts (and not just him). Or ask what albums I recommend on vinyl. (You’ll find I have a very wide-ranging taste in music — and I absolutely love being put on to new music of all kinds.)",
];

// const NoWrap = (props) => <span style={{ whiteSpace: "nowrap" }} {...props} />
const About = () => {
    return (
        <AnimatedSection className="about">
            {/* <div className="col-1"> */}
                <img src={Headshot}
                    className="col-1 headshot"
                    alt="Ryan Pairitz smiling, standing for a studio portrait in front of a beige backdrop, wearing a cream sweater." />
            {/* </div> */}
            <div className="col-2">
                <div>
                <h2>How about an introduction? I’ll start.</h2>
                <h1>I’m Ryan Pairitz.</h1>
                </div>
                {Contents.map((item,index) => (
                    <AnimatedP key={index} className={index === Contents.length - 1 ? "small" : ""}>{item}</AnimatedP>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default About;