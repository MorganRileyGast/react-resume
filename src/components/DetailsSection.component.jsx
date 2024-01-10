import React from 'react';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';

export function DetailsSection({ data }) {
    return (
        <>
            {data.map((item) => (
                <div key={`item-${item.id}`}>
                    <h2 className="header-text fold-left">{item.title}</h2>
                    <ul>
                        {
                            item.details.map((detail) => (
                                <li key={`detail-${item.id}-${detail.id}`}>
                                    {
                                        reactStringReplace(
                                            detail.text,
                                            detail.highlight,
                                            (match, i) => (
                                                <span
                                                    className="has-text-primary-extra-dark has-weight-600"
                                                    key={`${detail.highlight}-${i}`}
                                                >
                                                    {match}
                                                </span>
                                            ),
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))}
        </>
    );
}

DetailsSection.propTypes = {
    /** An array of objects used to create the details section */
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            /** A string to use as the header at the top of the section */
            title: PropTypes.string,
            /** A string used to ensure parent keys are unique */
            id: PropTypes.string,
            /** An array of objects, each one being a single bullet point */
            details: PropTypes.arrayOf(
                PropTypes.shape({
                    /** The raw string text for the bullet point */
                    text: PropTypes.string,
                    /** A substring used to highlight a portion of the raw text */
                    highlight: PropTypes.string,
                    /** A string used alongside parent id to ensure child keys are unique */
                    id: PropTypes.string,
                }),
            ),
        },
    )),
};

DetailsSection.defaultProps = {
    data: [],
};

export default DetailsSection;
