import EmailButton from "./EmailButton";
import "./Contact.css";

const Contact = () => {
    return (
        <p className="line">
            <b>Feel free to reach out:</b>
            <EmailButton />
        </p>
    );
};

export default Contact;