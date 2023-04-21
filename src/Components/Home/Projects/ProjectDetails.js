import { useParams } from "react-router-dom";
import { ProjectList } from "./Projects";

const ProjectDetails = () => {
    // const location = useLocation();
    // console.log(location)
    // const project = location.state?.project;
    const projectId = useParams().id;
    const project = ProjectList[projectId];
    // console.log(project.title)

    return (
        <div>
            {project.title}
        </div>
    );
};

export default ProjectDetails;