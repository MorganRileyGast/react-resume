import React from 'react';
import ThankYou from '../assets/ThankYou.png';
import { PictureDetails } from './PictureDetails.component';

export function CreditsPage() {
    return (
        <PictureDetails pictureInfo={{ path: ThankYou, alt: 'Hands forming a heart shape', classes: 'picture' }}>
            <div>
                <h2 className="header-text">Special thanks to</h2>
                <ul>
                    <li>
                        <a href="https://www.freepik.com/free-vector/paper-style-dynamic-lines-background_15273945.htm">
                            Freepik
                        </a>
                        {' '}
                        for providing the background image
                    </li>
                    <li>
                        <a href="https://unsplash.com/photos/white-paper-and-brown-envelope-xmddEHyCisc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kate Macate</a>
                        {' '}
                        for providing the image of the blank letter used on my contact page
                    </li>
                    <li>
                        <span className="has-text-primary-extra-dark has-weight-600">My friend Adrienne</span>
                        {' '}
                        for drawing me the Holy Crow for the 404 page
                    </li>
                    <li>
                        The
                        {' '}
                        <span className="has-text-primary-extra-dark has-weight-600">
                            package developers
                        </span>
                        {' '}
                        who made React and all the other npm dependencies of this site
                    </li>
                </ul>
            </div>
        </PictureDetails>
    );
}

export default CreditsPage;
