import { useState } from "react";

const FooterButton = () => {
    const [hovering, setHovering] = useState(false);

    return (
        <a className="footer-button"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            href={hovering ? "mailto:ryn.pair@me.com" : "#"}
        >
            <h2>Say hi</h2>
            <div>
                Ask me about my experience or process, to grab a coffee, etc.
                <div className="footer-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 22 22" fill="none">
                        <g clipPath="url(#clip0_647_315)">
                            <path d="M0.908477 5.64821C0.626252 5.45755 0.454731 5.11546 0.510496 4.73852C0.578912 4.27607 1.01205 3.95349 1.47954 3.95349H20.5206C20.9878 3.95349 21.4208 4.27577 21.4894 4.73795C21.5454 5.11468 21.3743 5.45666 21.0925 5.64755L11.5196 12.1324C11.2058 12.345 10.7942 12.345 10.4804 12.1324L0.908477 5.64821ZM21.5 17.8506C21.5 18.3622 21.0852 18.777 20.5735 18.777H1.42647C0.914795 18.777 0.5 18.3622 0.5 17.8506V8.77401C0.5 8.27862 1.05391 7.98481 1.46405 8.26265L9.44115 13.6665C9.90307 13.9794 10.4421 14.1448 11 14.1448C11.5579 14.1448 12.0969 13.9794 12.5588 13.6665L20.5359 8.26263C20.9461 7.98479 21.5 8.27861 21.5 8.77399V17.8506Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_647_315">
                                <rect width="21" height="21" fill="white" transform="translate(0.5 0.865234)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </a>
    )
};

export default FooterButton;