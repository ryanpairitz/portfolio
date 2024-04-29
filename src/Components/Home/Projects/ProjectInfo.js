import AnimatedLink from "../../AnimatedLink";

const ProjectInfo = ({ title, detail, href }) => {
    return (
        <div className="info">
            <h4>
                {title}
            </h4>
            {href ?
                <AnimatedLink href={href} className="link">
                    {detail}
                </AnimatedLink>
                :
                detail}
        </div>
    );
};

export default ProjectInfo;