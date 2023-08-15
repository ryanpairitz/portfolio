import AnimatedLink from "../../AnimatedLink";

const ProjectInfo = ({ title, detail, href, underlineColor }) => {
    return (
        <div className="info">
            <h3>
                {title}
            </h3>
            <h2>
                {href ?
                    <AnimatedLink href={href} underlineColor={underlineColor}>
                        {detail}
                    </AnimatedLink>
                    :
                    detail}
            </h2>
        </div>
    );
};

export default ProjectInfo;