import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './BackgroundRefresher.styles';

// eslint-disable-next-line react/display-name
export const BackgroundRefresher = React.memo(({ onRefresh }) => {
    const classes = useStyles();

    return (
        <div className={classes.refresher} onClick={() => onRefresh()}>
            <i className="ic-loop2"></i>
        </div>
    );
});

BackgroundRefresher.propTypes = {
    onRefresh: PropTypes.func.isRequired,
};
