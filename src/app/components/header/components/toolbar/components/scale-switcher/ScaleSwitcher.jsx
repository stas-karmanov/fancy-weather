import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './ScaleSwitcher.styles';
import { SCALE } from './ScaleSwitcher.models';

// eslint-disable-next-line react/display-name
export const ScaleSwitcher = React.memo(({ scale, onChange }) => {
    const classes = useStyles(scale);

    return (
        <div className={classes.scaleSwitcher}>
            <div className={classes.fahrenheit} onClick={() => onChange(SCALE.FAHRENHEIT)}>
                °F
            </div>
            <div className={classes.сelсius} onClick={() => onChange(SCALE.CELCIUS)}>
                °C
            </div>
        </div>
    );
});

ScaleSwitcher.propTypes = {
    scale: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
