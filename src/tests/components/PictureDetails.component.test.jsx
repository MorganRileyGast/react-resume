import React from 'react';
import { render, screen } from '@testing-library/react';
import { PictureDetails } from '../../components/PictureDetails.component';
import HolyCrow from '../../assets/HolyCrow.png';

describe('Picture Details', () => {
    it('should mount', () => {
        const infoObject = {
            path: HolyCrow,
            alt: 'A crow with halo holding a glowing piece of paper with the number 404, giving a sermon to other crows in the treetops',
            classes: 'holy-crow',
        };
        const { container } = render(
            <PictureDetails pictureInfo={infoObject}>
                <button className="btn btn-link" type="button">
                    Click me!
                </button>
            </PictureDetails>
        );
        expect(screen.getByText('Click me!')).toBeInTheDocument();
        expect(container.getElementsByClassName('holy-crow')).toHaveLength(1);
    });
});
