import { useParams } from "react-router-dom";
import CoverTheShirt from "./CoverShirt.png";
import CoverPartake from "./CoverPartake.png";
import CoverIvi from "./CoverIvi.png";
import CoverVinal from "./CoverVinal.png";
import ProjectTags from "./ProjectTags";
import Contact from "../../Contact/Contact";
import AnimatedP from "../../AnimatedP";
import ProjectInfo from "./ProjectInfo";
import AnimatedSection from "../../AnimatedSection";
import Button from "./Button";

import TheShirtFrontSketch from "./the-shirt-conception_sketch_front.png";
import { ReactComponent as TheShirtFrontDraft1 } from "./the-shirt-front-draft_1.svg";
import { ReactComponent as TheShirtFrontDraft2 } from "./the-shirt-front-draft_2.svg";
import { ReactComponent as TheShirtFrontDraft3 } from "./the-shirt-front-draft_3.svg";
import TheShirtFrontMockup from "./the-shirt-front-mockup.png";

export const ProjectList = {
    0: {
        coverImg: <img src={CoverIvi} alt="The ivi logo above the slogan, &#8220;Connect with the world around you.&#8221; Surrounding are two iPhones exemplifying the &#8220;Near You&#8221; and &#8220;Missed&#8221; views, respectively, within the ivi app, which showcase the profile cards of example users in their twenties." />,
        title: "ivi",
        description: "ivi (EYE-vee) is an app for mitigating missed connections via hyperlocal networking",
        role: "Co-Founder, Product Designer, Developer",
        timeframe: "July 2021 - August 2022",
        team: "Tommy Han",
        recognition: "2022 Race to Revenue Cohort",
        tags: [
            "graphic design",
            "ui/ux design",
            "frontend dev",
        ],
        theme: {
            neutral: "#0c1f1f",
            raisedNeutral: "#011211",
            primary: "#00dbb5",
            primaryRGB: [
                0,
                219,
                181
            ],
        },
        overview: [
            "Say you're single, and — in a chance encounter — you think you've found the one. However, something comes up that prevents you from ever getting the person's information. There is no reliable solution by which users can easily recover missed connections, so the chances are that you will never see that person again.",
            "If only there were a way to offset this issue, to prevent you — and millions of others who have experienced this problem — from wondering, \"What if…?\"",
        ],
    },
    1: {
        coverImg: <img src={CoverTheShirt} alt="Notre Dame's The Shirt logo, overlaying a banner hung above the entrance to the University of Notre Dame's Hammes Bookstore, advertising the 31st edition of The Shirt (2020)." />,
        title: "The Shirt (2020) (Notre Dame)",
        description: "The 31st edition of The Shirt (2020) at the University of Notre Dame",
        role: "The Shirt Designer",
        timeframe: "September 2019 - April 2020",
        team: "Anna Frericks, Irene Valdes Salazar",
        organization: "The Shirt (Notre Dame)",
        organizationURL: "https://theshirt.nd.edu",
        tags: [
            "graphic design",
        ],
        theme: {
            neutral: "#010a12",
            raisedNeutral: "#0b131c",
            primary: "#9b5f17",
            primaryRGB: [
                155,
                95,
                23
            ],
        },
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
                title: "Conception",
                content: [
                    "I suggested we start with a dark, spruce-green fabric as a base. Then, we could fill the design elements with an understated navy blue and a pure white accent, to evoke the feeling of a winter walk on God Quad, where a light dusting of snow coats the trees. Complementing the cool tones with a rich gold would create the same sense of warmth as candles burning at the Grotto.",
                ],
            },
            {
                img: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
            },
            {
                content: [
                    "So, in one of my initial digital sketches, I decided to draw up the word \"Irish\" in a style inspired by a traditional Celtic typeface, which featured a letter ’S’ whose lower curve formed a perfect circle and wrapped back into the spine.",
                    "If we were to make the rest of the design form another ellipse around the ’S’ ring, both rings could represent the railings of the third and fourth floors of the Main Building (directly beneath the Golden Dome), where trumpets famously play the Notre Dame Victory March and Alma Mater before every home game. As a nod to the tradition, it was only appropriate to adorn both rings with trumpet players.",
                    "I also thought we could add the Gothic-styled \"University of Notre Dame\" — as it appears inside the Hammes Bookstore on campus — to the very top of the design.",
                    "Finally, since the rest of the design became visually centered around a circle of negative space, we could fill it with a monogram or something significant to Notre Dame.",
                ],
            },
            {
                img: <img src={TheShirtFrontSketch} alt="The initial sketch of the University of Notre Dame's 2020 edition of The Shirt." />
            },
            {
                content: [
                    "Altogether, that’s what became the basis for the front of 2020’s The Shirt.",
                ],
            },
            {
                title: "Design Iterations",
                content: [
                    "After converting the rough sketch into vector art for an initial draft (at which point I thought it would be a cool little Easter egg to specifically include 11 trumpets in the outer loop and 7 in the inner one, for the respective 11 national championships and 7 Heisman trophies the football program has brought Notre Dame)…",
                ],
            },
            {
                img: <TheShirtFrontDraft1 />,
            },
            {
                content: [
                    "…then revising with the other designers and the rest of the Committee…",
                ],
            },
            {
                img: <TheShirtFrontDraft2 />,
            },
            {
                content: [
                    "…and making adjustments with the Notre Dame Licensing team…",
                ],
            },
            {
                img: <TheShirtFrontDraft3 />,
            },
            {
                content: [
                    "…and revising some more in Los Angeles with the team at Colosseum — the vendor we chose to produce The Shirt — we ended up with the final product (below).",
                ],
            },
            {
                img: <img src={TheShirtFrontMockup} alt="Mockup showing the front of the University of Notre Dame's 2020 edition of The Shirt." />
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
    2: {
        coverImg: <img src={CoverVinal} alt="The Vinal logo above the slogan, &#8220;You, in music.&#8221; The graphic overlays the grooves of a vinyl record." />,
        title: "Vinal (Brand Guide)",
        description: "Brand guidelines for Vinal, a dapp used to express yourself through — and be rewarded for — the records you collect",
        role: "UI/UX Designer & Developer, Director of Branding",
        timeframe: "February 2023 - April 2023",
        tags: [
            "graphic design",
            "ui/ux design",
            "frontend dev",
            "animation"
        ],
        theme: {
            neutral: "#272727",
            raisedNeutral: "#161616",
            primary: "#df195d",
            primaryRGB: [
                223,
                25,
                93
            ],
        },
        link: {
            label: "visit",
            href: "https://brand.vinal.io",
        },
        overview: [
            "Collecting vinyl records is a way music lovers can show their dedication to their favorite albums and artists. But what if there were a way that they could earn exclusive perks from musicians by buying and trading their records digitally? What if artists could also make more money from their record sales? That's the mission of Vinal.",
        ],
    },
    3: {
        coverImg: <img src={CoverPartake} alt="The Partake logo above the slogan, &#8220;Make friends by doing.&#8221; To the left is an iPhone on the main view of the Partake app, portraying a user's profile card, which shows their name, bio, common interests, and an option to &#8220;Recruit&#8221; them, and to the right is an iPhone demonstrating the chat feature." />,
        title: "Partake",
        description: "Partake is an app for finding friends by participating in common hobbies",
        role: "Graphic & UI/UX Designer, Frontend Developer",
        timeframe: "January 2022 - May 2022",
        team: "Keegan MacDonell, Maggie Farrell",
        recognition: "Best App Third Runner Up, Advanced Database Projects, University of Notre Dame",
        tags: [
            "graphic design",
            "ui/ux design",
            "frontend dev",
        ],
        theme: {
            neutral: "#1c1821",
            raisedNeutral: "#0d0d1a",
            primary: "#9bd2f2",
            primaryRGB: [
                155,
                210,
                242
            ],
        },
        overview: [
            "There’s a stigma around online dating, but there’s certainly a greater one surrounding finding friends online. As a young adult, swiping on profiles of random people and practically asking them to be friends feels forced and unnatural. The people who resort to apps like Bumble BFF that offer such services do so out of desperation, usually after moving to a new city by themselves. But what if they had better options, through which they could make friends organically?",
        ],
    },
}

const ProjectDetails = () => {
    const projectId = useParams().id;
    const project = ProjectList[projectId];
    const color = "" + project.theme.primaryRGB.map(val => val); // append to "" to make array string; will automatically join array elements with ","

    return (
        <div className="details-container" style={{
            backgroundColor: "#060707"
        }}>
            <AnimatedSection className="cover-container">
                <div className="cover-img">
                    {project.coverImg}
                </div>
                <div className="cover-content">
                    <ProjectInfo title="description" detail={project.description} />
                    <ProjectTags tags={project.tags}
                        color={project.theme.primary}
                        backgroundColor={"#101111"} />
                </div>
            </AnimatedSection>
            <AnimatedSection className="section">
                <div className="key-info">
                    <ProjectInfo title="timeframe" detail={project.timeframe} />
                    {project.team &&
                        <ProjectInfo title="team" detail={project.team} />
                    }
                    <ProjectInfo title="role" detail={project.role} />
                    {project.organization &&
                        <ProjectInfo title="organization" detail={project.organization}
                            href={project.organizationURL} underlineColor={project.theme.primary} />
                    }
                    {project.recognition &&
                        <>
                            <hr />
                            <ProjectInfo title="recognition" detail={project.recognition} />
                        </>
                    }
                    {project.link &&
                        <Button label={project.link.label}
                            href={project.link.href}
                            color={color} />
                    }
                </div>
                <div>
                    {project.overview.map((p, index) => (
                        <AnimatedP key={index}>
                            {p}
                        </AnimatedP>
                    ))}
                </div>
            </AnimatedSection>
            {project.sections?.map((section, index) => (
                <AnimatedSection key={index} className={section.img ? "section img" : "section"}>
                    {section.title &&
                        <div className="subheading">
                            {section.title} —
                        </div>
                    }
                    {section.content &&
                        <div>
                            {section.content.map((p, index) => (
                                <AnimatedP key={index}>
                                    {p}
                                </AnimatedP>
                            ))}
                        </div>
                    }
                    {section.img &&
                        section.img
                    }
                </AnimatedSection>
            ))}
            <Contact color={color} />
            <AnimatedP className="notice">
                I'm in the process of adding more details and projects to my website, but please contact me using the button above if you'd like to hear more about my experience!
            </AnimatedP>
        </div>
    );
};

export default ProjectDetails;