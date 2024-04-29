import { useParams } from "react-router-dom";
import CoverTheShirt from "./CoverShirt.png";
import CoverPartake from "./CoverPartake.jpg";
import CoverIvi from "./CoverIvi.png";
import CoverVinal from "./CoverVinal.png";
import AnimatedP from "../../AnimatedP";
import ProjectInfo from "./ProjectInfo";
import AnimatedSection from "../../AnimatedSection";
import Button from "./Button";

import TheShirtFrontSketch from "./the-shirt-conception_sketch_front.png";
import { ReactComponent as TheShirtFrontDraft1 } from "./the-shirt-front-draft_1.svg";
import { ReactComponent as TheShirtFrontDraft2 } from "./the-shirt-front-draft_2.svg";
import { ReactComponent as TheShirtFrontDraft3 } from "./the-shirt-front-draft_3.svg";
import TheShirtFrontMockup from "./the-shirt-front-mockup.png";

import PartakeDeck from "./partake-processDeck.pdf";
import AnimatedDiv from "../../AnimatedDiv";

export const ProjectList = {
    "notre-dame-the-shirt-2020": {
        coverImg: <img src={CoverTheShirt} alt="Notre Dame's The Shirt logo, overlaying a banner hung above the entrance to the University of Notre Dame's Hammes Bookstore, advertising the 31st edition of The Shirt (2020)." />,
        details: [
            {
                category: "Description",
                value: "The 31st edition of The Shirt (2020) at the University of Notre Dame",
            },
            {
                category: "Timeframe",
                value: "September 2019 - April 2020",
            },
            {
                category: "Role",
                value: "The Shirt Designer",
            },
            {
                category: "Team",
                value: "Anna Frericks, Irene Valdes Salazar",
            },
            {
                category: "Organization",
                value: "The Shirt (Notre Dame)",
                url: "https://theshirt.nd.edu",
            },
        ],
        title: "The Shirt (2020) (Notre Dame)",
        overview: [
            "At the beginning of my sophomore year in 2020, I was selected out of hundreds of applicants to serve as one of three designers for The Shirt, the annual football shirt sold at the University of Notre Dame to raise money for student clubs and activities.",
            "In its 31-year history, The Shirt has sold more than three million shirts and raised over $12 million. And, with more than 160,000 units sold each year, it is the highest-selling article of collegiate apparel in the nation.",
            "The stakes for The Shirt are greater than just sales, however. For Notre Dame students and fans, The Shirt is a pervasive symbol of the Notre Dame experience.",
        ],
        sections: [
            {
                title: "Challenge",
                content: [
                    "To continue in that tradition, the goal for each edition of The Shirt is to include elements specific to Notre Dame, to evoke the unique experience of gameday on campus or life as a Notre Dame student.",
                    "So rather than just put out another standard football shirt with a slight twist, each year a new committee is formed to design, promote, and organize distribution for The Shirt. Special emphasis and care is placed on the design process, which spans several months and consists of much drafting and deliberation.",
                    "Again, the goal is to ensure the design elements have significance to all those who call Notre Dame their home. If they accomplish that, The Shirt is considered a success.",
                ],
            },
            {
                title: "Inspiration",
                content: [
                    "I grew up a fan of Notre Dame football and about half an hour from campus. Gameday on campus was a typical Saturday for me, even if I didn’t get to go into the game. I experienced all the gameday traditions — from the playing of Cathy Richardson’s “Here Come The Irish” at kickoff to the trumpets playing under the golden dome — for years before I even became a student.",
                    "One of the traditions that impacted me most was The Shirt Unveiling itself. Whenever The Shirt was revealed and my parents would buy me one immediately after, it felt like I was receiving a gift on Christmas.",
                    "That was a feeling I hoped to translate in the 2020 edition of The Shirt.",
                ],
            },
            {
                title: "Ideation",
                content: [
                    "I suggested we start with a dark, spruce-green fabric as a base. Then, we could fill the design elements with an understated navy blue and a pure white accent, to evoke the feeling of a winter walk on God Quad, where a light dusting of snow coats the trees. Complementing the cool tones with a rich gold would create the same sense of warmth as candles burning at the Grotto.",
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 610 233" preserveAspectRatio='xMidYMid meet'
                        style={{ backgroundColor: "rgba(11,24,28,0.5)" }}>
                        {/* <rect opacity="0.5" fill="#0B1C18" width="610" height="233"/> */}
                        <path fill="#0B1C18" d="M358,225H12c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h346c2.2,0,4,1.8,4,4v209C362,223.2,360.2,225,358,225z" />
                        <path fill="#9B5F17" d="M449.5,225H374c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h75.5c2.2,0,4,1.8,4,4v209
               C453.5,223.2,451.7,225,449.5,225z"/>
                        <path fill="#0D1319" d="M541,225h-75.5c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4H541c2.2,0,4,1.8,4,4v209C545,223.2,543.2,225,541,225z"
                        />
                        <path fill="#FFFFFF" d="M598,225h-41c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h41c2.2,0,4,1.8,4,4v209C602,223.2,600.2,225,598,225z" />
                    </svg>,
                    "So, in one of my initial digital sketches, I decided to draw up the word \"Irish\" in a style inspired by a traditional Celtic typeface, which featured a letter ’S’ whose lower curve formed a perfect circle and wrapped back into the spine.",
                    "If we were to make the rest of the design form another ellipse around the ’S’ ring, both rings could represent the railings of the third and fourth floors of the Main Building (directly beneath the Golden Dome), where trumpets famously play the Notre Dame Victory March and Alma Mater before every home game. As a nod to the tradition, it was only appropriate to adorn both rings with trumpet players.",
                    "I also thought we could add the Gothic-styled \"University of Notre Dame\" — as it appears inside the Hammes Bookstore on campus — to the very top of the design.",
                    "Finally, since the rest of the design became visually centered around a circle of negative space, we could fill it with a monogram or something significant to Notre Dame.",
                    <img src={TheShirtFrontSketch} alt="The initial sketch of the University of Notre Dame's 2020 edition of The Shirt." />,
                    "Altogether, that’s what became the basis for the front of 2020’s The Shirt.",
                ],
            },
            {
                title: "Design Iterations",
                content: [
                    "After converting the rough sketch into vector art for an initial draft (at which point I thought it would be a cool little Easter egg to specifically include 11 trumpets in the outer loop and 7 in the inner one, for the respective 11 national championships and 7 Heisman trophies the football program has brought Notre Dame)…",
                    <TheShirtFrontDraft1 />,
                    "…then revising with the other designers and the rest of the Committee…",
                    <TheShirtFrontDraft2 />,
                    "…and making adjustments with the Notre Dame Licensing team…",
                    <TheShirtFrontDraft3 />,
                    "…and revising some more in Los Angeles with the team at Colosseum — the vendor we chose to produce The Shirt — we ended up with the final product (below).",
                    <img src={TheShirtFrontMockup} alt="Mockup showing the front of the University of Notre Dame's 2020 edition of The Shirt." />,
                ],
            },
            {
                title: "Takeaways",
                content: [
                    "It was an honor and a privilege to be selected to help in the direction and creation of perhaps the most anticipated annual collegiate shirt in the nation. Working as a part of The Shirt Committee taught me a lot more about the collaborative design process and showed me how much room I have for improvement as a designer.",
                    "As such, it was extremely gratifying and humbling to see the product through the lens of national coverage during Notre Dame Football's successful 2020 season, when they defeated #1 Clemson and made their second College Football Playoff and National Semifinal appearance.",
                ],
            },
        ],
    },
    "vinal-brand-guide": {
        coverImg: <img src={CoverVinal} alt="The Vinal logo above the slogan, &#8220;You, in music.&#8221; The graphic overlays the grooves of a vinyl record." />,
        title: "Vinal (Brand Guide)",
        details: [
            {
                category: "Description",
                value: "Brand guidelines for Vinal, a dapp used to express yourself through — and be rewarded for — the records you collect",
            },
            {
                category: "Timeframe",
                value: "February 2023 - April 2023",
            },
            {
                category: "Role",
                value: "UI/UX Designer & Engineer, Director of Branding",
            },
        ],
        link: {
            label: "visit",
            href: "https://brand.vinal.io",
        },
        overview: [
            "Collecting vinyl records is a way music lovers can show their dedication to their favorite albums and artists. But what if there were a way that they could earn exclusive perks from musicians by buying and trading their records digitally? What if artists could also make more money from their record sales? That's the mission of Vinal.",
        ],
    },
    "partake": {
        coverImg: <img src={CoverPartake} alt="The Partake logo above the slogan, &#8220;Make friends by doing.&#8221; To the left is an iPhone on the main view of the Partake app, portraying a user's profile card, which shows their name, bio, common interests, and an option to &#8220;Recruit&#8221; them, and to the right is an iPhone demonstrating the chat feature." />,
        title: "Partake",
        details: [
            {
                category: "Description",
                value: "Partake is an app for finding friends by participating in common hobbies",
            },
            {
                category: "Timeframe",
                value: "January 2022 - May 2022",
            },
            {
                category: "Role",
                value: "Graphic & UI/UX Designer, Frontend Developer",
            },
            {
                category: "Team",
                value: "Keegan MacDonell, Maggie Farrell",
            },
            {
                category: "Recognition",
                value: "Best App Runner Up, University of Notre Dame",
            },
        ],
        link: {
            label: "process deck",
            href: PartakeDeck,
        },
        overview: [
            "There’s a stigma attached to online dating, but there’s certainly a greater one surrounding finding friends online. Partake's social platform aims to solve that problem by allowing users to find friends IRL by participating in their favorite hobbies. Before starting the development process with my team, I followed a user-centric product development cycle to design a prototype — to ensure our solution adequately allows users to not only find others with common interests, but also discover events at which they can exercise those interests."
        ],
    },
}

const ProjectDetails = () => {
    const projectId = useParams().id;
    const project = ProjectList[projectId];

    return (
        <article className="details-container">
            <AnimatedDiv className="cover-container">
                <div className="cover-img">
                    {project.coverImg}
                </div>
            </AnimatedDiv>
            <AnimatedDiv className="header">
                <h2>{project.title}</h2>
            </AnimatedDiv>
            <div className="details-content">
                <AnimatedSection className="details">
                    <div className="key-info">
                        {project.details?.map((item, index) => (
                            <ProjectInfo key={index} title={item.category} detail={item.value} href={item.url} />
                        ))}
                        {project.link &&
                            <Button label={project.link.label}
                                href={project.link.href} />
                        }
                    </div>
                </AnimatedSection>
                <div className="body">
                    <AnimatedSection className="overview">
                        {project.overview.map((p, index) => (
                            <AnimatedP key={index}>
                                {p}
                            </AnimatedP>
                        ))}
                    </AnimatedSection>
                    {project.sections?.map((section, index) => (
                        <AnimatedSection key={index}>
                            {section.title &&
                                <h3>{section.title}</h3>
                            }
                            {section.content &&
                                section.content.map((item, index) => (
                                    typeof (item) === "string" ?
                                        <AnimatedP key={index}>
                                            {item}
                                        </AnimatedP>
                                        :
                                        <AnimatedDiv key={index} className="img">
                                            {item}
                                        </AnimatedDiv>
                                ))
                            }
                        </AnimatedSection>
                    ))}
                </div>
            </div>
            <AnimatedP className="notice">
                I'm in the process of adding more details and projects to my website, but please contact me using the button below if you'd like to hear more about my experience!
            </AnimatedP>
        </article>
    );
};

export default ProjectDetails;