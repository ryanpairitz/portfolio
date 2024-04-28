import AnimatedLink from "./AnimatedLink";

const Links = [
    {
        category: "Hello",
        links: [
            {
                id: "About",
                to: "about"
            },
            {
                id: "Contact",
            },
        ],
    },
    {
        category: "What I do",
        links: [
            {
                id: "Portfolio",
                to: "/"
            },
            {
                id: "Resume",
                href: ""
            },
        ],
    },
    {
        category: "Connect",
        links: [
            {
                id: "LinkedIn",
                href: "https://www.linkedin.com/in/ryanpairitz/",
            },
            {
                id: "Instagram",
                href: "https://www.instagram.com/ryanpairitz/",
            },
            // {
            //     id: "X",
            //     href: "https://twitter.com/ryanparrots",
            // },
            {
                id: "TikTok",
                href: "https://www.tiktok.com/@ryanpairitz",
            },
            {
                id: "GitHub",
                href: "https://github.com/ryanpairitz",
            },
        ],
    },
];

const FooterNav = () => {
    return (
        <div className="footer-nav">
            {Links.map((cat, index) => (
                <div key={index}>
                    <h4>{cat.category.toUpperCase()}</h4>
                    <ul>
                        {cat.links.map((item, index) => (
                            <li key={index}>
                                <AnimatedLink label={item.id} to={item.to} href={item.href} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterNav;