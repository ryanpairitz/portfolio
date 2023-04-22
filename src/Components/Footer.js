import { useLocation } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const Footer = () => {
    const { state } = useLocation();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="footer" style={{
            backgroundColor: state?.theme.raisedNeutral
        }}>
            <p>
                Copyright &copy; 2022&nbsp;
                <AnimatedButton onClickHandler={scrollToTop}
                    useSwatches={true}>
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