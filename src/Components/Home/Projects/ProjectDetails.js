import { useParams } from "react-router-dom";
import CoverTheShirt from "./CoverShirt.png";
import CoverPartake from "./CoverPartake.png";
import CoverIvi from "./CoverIvi.png";
import CoverVinal from "./CoverVinal.png";
import ProjectTags from "./ProjectTags";
import Contact from "../../Contact/Contact";
import AnimatedP from "../../AnimatedP";

export const ProjectList = {
    0: {
        coverImg: <img src={CoverIvi}/>,
        title: "ivi",
        role: "Co-Founder, Product Designer, Developer",
        timeframe: "July 2021 - August 2022",
        tags: [
			"graphic design",
			"ui/ux design",
			"frontend dev",
        ],
		theme: {
			neutral: "#0c1f1f",
			raisedNeutral: "#011211",
			primary: "#00dbb5",
		},
    },
    1: {
        coverImg: <img src={CoverTheShirt}/>,
        title: "The Shirt (2020) (Notre Dame)",
        role: "The Shirt Designer",
        timeframe: "September 2019 - April 2020",
        tags: [
            "graphic design",
        ],
        theme: {
            neutral: "#010a12",
            raisedNeutral: "#0b131c",
            primary: "#9b5f17",
        },
    },
    2: {
        coverImg: <img src={CoverVinal}/>,
        title: "Vinal",
        role: "UI/UX Designer & Developer, Director of Branding",
        timeframe: "December 2022 - present",
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
		},
    },
    3: {
        coverImg: <img src={CoverPartake}/>,
        title: "Partake",
        role: "Graphic & UI/UX Designer, Frontend Developer",
        timeframe: "January 2022 - May 2022",
		tags: [
			"graphic design",
			"ui/ux design",
			"frontend dev",
		],
		theme: {
			neutral: "#1c1821",
			raisedNeutral: "#0d0d1a",
			primary: "#9bd2f2",
		},
    },
}

const ProjectDetails = () => {
    const projectId = useParams().id;
    const project = ProjectList[projectId];

    return (
        <div className="details-container" style={{
            backgroundColor: "#060707"
        }}>
            <div className="cover-container">
                <div className="cover-img">
                    {project.coverImg}
                </div>
                <div className="cover-content">
                    <div>
                        <h3>
                            Project
                        </h3>
                        <h2>
                            {project.title}
                        </h2>
                    </div>
                    <div>
                        <h3>
                            Role
                        </h3>
                        <h2>
                            {project.role}
                        </h2>
                    </div>
                    <div>
                        <h3>
                            timeframe
                        </h3>
                        <h2>
                            {project.timeframe}
                        </h2>
                    </div>
                </div>
            </div>
            <ProjectTags tags={project.tags}
                color={project.theme.primary}
                backgroundColor={"#101111"} />
            <Contact />
            <AnimatedP>
                I'm in the process of adding more details and projects to my website, but please contact me using the button above if you'd like to hear more about my experience!
            </AnimatedP>
        </div>
    );
};

export default ProjectDetails;