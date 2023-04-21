import EmailButton from "./EmailButton";
import "./Contact.css";
import AnimatedP from "../AnimatedP";

const Contact = () => {
    return (
        <div className="line-container">
            <AnimatedP className="line">
                <b>Want to talk? Reach out:</b>
                <EmailButton />
            </AnimatedP>
        </div>
    );
};

export default Contact;