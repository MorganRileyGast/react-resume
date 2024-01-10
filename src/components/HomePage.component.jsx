import React from 'react';
import Profile from '../assets/Profile.png';
import { Divider } from './Divider.component';

export function HomePage() {
    return (
        <>
            <div className="horizontal-stack">
                <img
                    className="profile"
                    src={Profile}
                    alt="Profile of Morgan"
                />
                <div className="vertical-stack-center stack-text">
                    <h1>Morgan Gast</h1>
                    <h2>Front-End Web Developer</h2>
                </div>
            </div>

            <Divider />

            <div className="has-half-margin-horizontal">
                <p>
                    Hello, I am a front-end developer from Minnesota with 5 years of
                    professional experience using JavaScript, HTML, and CSS. I specialize
                    in the React framework, and it is my passion to write efficient,
                    quality components that promote the greatest user experience.
                </p>
                <p>
                    Some of my most notable accomplishments in past roles include:
                </p>
                <ul className="accomplishment-list">
                    <li>
                        Chosen as the team representative during meetings with the company&apos;s
                        largest client to ensure their needs were being met when we developed the
                        new features they commissioned for the proprietary system
                    </li>
                    <li>
                        Managed the entire front-end tech stack, including selecting and adding new
                        tools to make my dev team more efficient, upgrading existing tools, retiring
                        outdated tools the team no longer used, and adjusted configs as necessary
                    </li>
                    <li>
                        Assumed ownership of a large internal project to protect classified
                        information and streamline production
                    </li>
                </ul>
                <p>
                    Please visit the links in the navbar above for more detail, and thank you for
                    paying me a visit!
                </p>
            </div>
        </>
    );
}

export default HomePage;
