import React from 'react';
import { PictureDetails } from '../components/PictureDetails.component';
import HolyCrow from '../assets/HolyCrow.png';

const meta = {
    title: 'Components/PictureDetails',
    component: PictureDetails,
};

export default meta;

export const WithData = {
    args: {
        pictureInfo: {
            path: HolyCrow,
            alt: 'A crow with halo holding a glowing piece of paper with the number 404, giving a sermon to other crows in the treetops',
            classes: 'holy-crow',
        },
        children: [
            <button className="btn btn-link" type="button">
                Click me!
            </button>,
        ],
    },
};
