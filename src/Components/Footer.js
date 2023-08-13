import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isHome, setIsHome] = useState(true);
    const [isDefault, setIsDefault] = useState(true);
    useLayoutEffect(() => {
        setIsHome(!location.pathname.includes("project"));
        setIsDefault(location.key === "default");
    }, [location]);
    const scrollToTop = () => {
        if (isHome) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        else if (isDefault) {
            navigate("/");
        }
        else {
            navigate(-1);
        }
    };
    return (
        <div className="footer" style={{
            backgroundColor: !isHome && "#101111",
            color: !isHome && "white"
        }}>
            <p>
                Copyright &copy; 2023&nbsp;
                <AnimatedButton onClickHandler={scrollToTop}
                    useSwatches={isHome} defaultUnderlineColor={location.state?.theme.primary} >
                <strong>
                    Ryan Pairitz
                </strong>
                </AnimatedButton>
                . All rights reserved.
            </p>
        </div>
    );
};

export default Footer;