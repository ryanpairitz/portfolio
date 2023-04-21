import SocialIcon from "./SocialIcon";

const Socials = [
    {
        id: "twitter",
        href: "https://twitter.com/ryanparrots",
    },
    {
        id: "instagram",
        href: "https://www.instagram.com/ryanpairitz/",
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/ryan-pairitz-462440222/",
    },
    {
        id: "tiktok",
        href: "https://www.tiktok.com/@ryanpairitz",
    },
    {
        id: "github",
        href: "https://github.com/ryanpairitz",
    },
]

const SocialsList = () => {
    return (
        <div className="icons-container">
            {Socials.map((item, index) => (
                <SocialIcon item={item} className="icon" key={index} />
            ))}
        </div>
    );
};

export default SocialsList;