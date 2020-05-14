import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Refresher.styles';

// eslint-disable-next-line react/display-name
export const Refresher = React.memo(({ onRefresh }) => {
    const classes = useStyles();

    return (
        <div className={classes.refresher} onClick={() => onRefresh()}>
            <i className="ic-loop2"></i>
        </div>
    );
});

Refresher.propTypes = {
    onRefresh: PropTypes.func.isRequired,
};
