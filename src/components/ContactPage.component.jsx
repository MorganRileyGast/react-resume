import React, { useState } from 'react';
import Letter from '../assets/kate-macate-unsplash.jpg';
import { PictureDetails } from './PictureDetails.component';

export function ContactPage() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <PictureDetails pictureInfo={{ path: Letter, alt: 'Blank letter on a white table', classes: 'picture' }}>
            <>
                <h2 className="header-text">Email me</h2>
                <ul>
                    <li>
                        {!showInfo && (
                            <>
                                <button
                                    className="btn btn-link"
                                    onClick={() => setShowInfo(true)}
                                    type="button"
                                >
                                    Click here
                                </button>
                                &nbsp;to reveal my email address
                            </>
                        )}
                        {showInfo && (
                            <a href="mailto:morganrileygast@gmail.com">morganrileygast@gmail.com</a>
                        )}
                    </li>
                </ul>

                <h2 className="header-text">Text Me</h2>
                <ul>
                    <li>
                        {!showInfo && (
                            <>
                                <button
                                    className="btn btn-link"
                                    onClick={() => setShowInfo(true)}
                                    type="button"
                                >
                                    Click here
                                </button>
                                &nbsp;to reveal my phone number
                            </>
                        )}
                        {showInfo && (
                            <a href="sms:612-354-6199">(612) 354-6199</a>
                        )}
                    </li>
                </ul>

                <h2 className="header-text">Call Me</h2>
                <ul>
                    <li>
                        {!showInfo && (
                            <>
                                <button
                                    className="btn btn-link"
                                    onClick={() => setShowInfo(true)}
                                    type="button"
                                >
                                    Click here
                                </button>
                                &nbsp;to reveal my phone number
                            </>
                        )}
                        {showInfo && (
                            <a href="tel:612-354-6199">(612) 354-6199</a>
                        )}
                    </li>
                </ul>

                <h2 className="header-text has-half-margin-top">Find me on LinkedIn</h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/morgan-riley-gast/">https://www.linkedin.com/in/morgan-riley-gast/</a>
                    </li>
                </ul>

                <h2 className="header-text has-half-margin-top">Check out my Github</h2>
                <ul>
                    <li>
                        <a href="https://github.com/MorganRileyGast">https://github.com/MorganRileyGast</a>
                    </li>
                </ul>
            </>
        </PictureDetails>
    );
}

export default ContactPage;
