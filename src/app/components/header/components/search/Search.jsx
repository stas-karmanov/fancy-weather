import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Search.styles';
import { LocaleContext } from '../../../../localizator/Localizator';

// eslint-disable-next-line react/display-name
export const Search = React.memo(({ onSearch }) => {
    const classes = useStyles();
    const localization = useContext(LocaleContext);
    const input = useRef(null);

    return (
        <div className={classes.search}>
            <input ref={input} className={classes.input} type="text" placeholder={localization.searchCity} />
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
                {localization.search}
            </button>
        </div>
    );
});

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
