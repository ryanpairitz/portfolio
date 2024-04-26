import "./Footer.css";
import FooterButton from "./FooterButton";
import FooterNav from "./FooterNav";
import Brandmark from "./Nav/Brandmark";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-row">
                    <div className="footer-col-1">
                        <Brandmark />
                    </div>
                    <div className="footer-col-2">
                        <FooterButton />
                        <FooterNav />
                    </div>
                </div>
                <span className="meta">© Ryan Pairitz 2024</span>
            </div>
        </footer>
    );
};

export default Footer;