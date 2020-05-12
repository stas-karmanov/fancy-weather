import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Search.styles';

// eslint-disable-next-line react/display-name
export const Search = React.memo(({ onSearch }) => {
    const classes = useStyles();
    const input = useRef(null);

    return (
        <div className={classes.search}>
            <input ref={input} className={classes.input} type="text" placeholder="Search city or ZIP" />
            <button
                className={classes.button}
                onClick={() => {
                    const value = input.current.value;

                    if (!value) {
                        return;
                    }

                    input.current.value = '';
                    onSearch(value);
                }}
            >
                SEARCH
            </button>
        </div>
    );
});

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
