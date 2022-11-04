import { ReactComponent as Brandmark } from '../img/icons_brandmark.svg';
import { ReactComponent as InstagramIcon } from '../img/icons_instagram.svg';
import { ReactComponent as TwitterIcon } from '../img/icons_twitter.svg';
import { ReactComponent as TikTokIcon } from '../img/icons_tiktok.svg';
import { ReactComponent as LinkedInIcon } from '../img/icons_linkedin.svg';
import { ReactComponent as GitHubIcon } from '../img/icons_github.svg';
import './HomeBar.css';

const HomeBar = () => {
    return (
        <div className='home-bar'>
            <span className='icons-container'>
                <Brandmark
                    width={34}
                    className='home-bar-icon'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                />
            </span>
            <div className='icons-container'>
                <a href="https://www.instagram.com/ryanpairitz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='icon-container'
                >
                    <InstagramIcon width={21} className='home-bar-icon' />
                </a>
                <a href="https://twitter.com/ryanparrots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='icon-container'
                >
                    <TwitterIcon height={21} className='home-bar-icon' />
                </a>
                <a href="https://www.tiktok.com/@ryanpairitz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='icon-container'
                >
                    <TikTokIcon width={21} className='home-bar-icon' />
                </a>
                <a href="https://www.linkedin.com/in/ryan-pairitz-462440222/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='icon-container'
                >
                    <LinkedInIcon width={21} className='home-bar-icon' />
                </a>
                <a href="https://github.com/ryanpairitz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='icon-container'
                >
                    <GitHubIcon width={21} className='home-bar-icon' />
                </a>
            </div>
        </div>
    );
};

export default HomeBar;