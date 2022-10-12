import { useState } from 'react';
import { ReactComponent as EmailIcon } from '../img/icons_email.svg';
import './Contact.css';

const EmailButton = () => {
    const [showEmail, setShowEmail] = useState(false);

    return (
        <a className='button'
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            href={showEmail ? "mailto:ryn.pair@me.com" : "#"}
        >
            {showEmail ?
                <span className='button-text'>
                    ryn.pair@me.com
                </span>
                : <></>
            }
            <EmailIcon className="email-icon" />
        </a>
    );
};

export default EmailButton;