import AnimatedNavLink from "./AnimatedNavLink";

const LinkList = [
    {
        id: "projects",
        to: "/",
    },
    {
        id: "personal",
        to: "personal",
    },
    {
        id: "about",
        to: "about",
    },
];

const HeaderTabs = () => {
    return (
        <nav>
            {LinkList.map((link, index) => (
                <AnimatedNavLink to={link.to} key={index}>
                    {link.id}
                </AnimatedNavLink>
            ))}
        </nav>
    );
};

export default HeaderTabs;