import AnimatedButton from "./Home/AnimatedButton";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="footer">
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