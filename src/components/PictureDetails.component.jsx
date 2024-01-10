import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../assets/Profile.png';

export function PictureDetails({ pictureInfo, children }) {
    return (
        <div className="container">
            <div className="horizontal-stack vertical-stack-center">
                <div>
                    <img
                        src={pictureInfo.path}
                        alt={pictureInfo.alt}
                        className={pictureInfo.classes}
                    />
                </div>

                <div className="vertical-stack has-whole-margin-left-responsive-big">
                    {children}
                </div>
            </div>
        </div>
    );
}

PictureDetails.propTypes = {
    pictureInfo: PropTypes.shape({
        path: PropTypes.string,
        alt: PropTypes.string,
        classes: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
};

PictureDetails.defaultProps = {
    pictureInfo: {
        path: Profile,
        alt: 'Profile of Morgan',
        classes: 'profile',
    },
};

export default PictureDetails;
