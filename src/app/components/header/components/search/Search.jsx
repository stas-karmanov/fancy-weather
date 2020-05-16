import React, { useRef, useContext, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Search.styles';
import { LocaleContext } from '../../../../localizator/Localizator';
import { useClickOutside } from '../../../../common/click-outside';

// eslint-disable-next-line react/display-name
export const Search = React.memo(({ onSearch }) => {
    const classes = useStyles();
    const localization = useContext(LocaleContext);
    const input = useRef(null);
    const microphone = useRef(null);
    const recognition = useMemo(() => new SpeechRecognition(), []);

    useEffect(() => {
        recognition.onresult = event => console.log(event);
    }, [recognition]);

    useClickOutside(
        microphone,
        useCallback(() => recognition.stop(), [recognition]),
    );

    const handleSearch = useCallback(() => {
        const value = input.current.value;
        if (value) {
            input.current.value = '';
            onSearch(value);
        }
    }, [onSearch]);

    const onMicrophoneClick = useCallback(() => recognition.start(), [recognition]);

    return (
        <div className={classes.search}>
            <div className={classes.inputWrapper}>
                <input
                    ref={input}
                    className={classes.input}
                    type="text"
                    placeholder={localization.searchCity}
                    onKeyUp={({ keyCode }) => {
                        if (keyCode === 13) {
                            handleSearch();
                        }
                    }}
                />
                <div className={classes.microphone} onClick={onMicrophoneClick} ref={microphone}>
                    <i className="ic-mic"></i>
                </div>
            </div>
            <button className={classes.button} onClick={handleSearch}>
                {localization.search}
            </button>
        </div>
    );
});

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
