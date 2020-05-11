import React from 'react';
import PropTypes from 'prop-types';

export const Location = ({ location: { country, city } }) => {
    return (
        <div>
            <div>{`${city},${country}`}</div>
            <div>{Date.now()}</div>
        </div>
    );
};

Location.propTypes = {
    location: PropTypes.shape({
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
};
