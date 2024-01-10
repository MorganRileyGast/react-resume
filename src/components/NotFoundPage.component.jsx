import React from 'react';
import HolyCrow from '../assets/HolyCrow.png';
import DATA from '../services/Data.service.json';
import { DetailsSection } from './DetailsSection.component';
import { PictureDetails } from './PictureDetails.component';
import { Divider } from './Divider.component';

export function NotFoundPage() {
    return (
        <>
            <PictureDetails pictureInfo={{
                path: HolyCrow,
                alt: 'A crow with halo holding a glowing piece of paper with the number 404, giving a sermon to other crows in the treetops',
                classes: 'holy-crow',
            }}
            >
                <div className="vertical-stack-center">
                    <h1>Holy Crow!</h1>
                    <h2>Looks like your page has been stolen!</h2>
                </div>
            </PictureDetails>

            <Divider />

            <div className="has-half-margin-horizontal">
                <p>
                    All my pages are listed in the site navbar, so give those links a try to find
                    your way around!
                </p>

                <div className="crow-facts">
                    <DetailsSection data={DATA.CROWS} />
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;
