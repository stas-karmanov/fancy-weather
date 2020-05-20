import React, { useRef, useCallback, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Search.styles';
import { useClickOutside } from '../../../../common/useClickOutside';
import { useLocalization } from '../../../../common/useLocalization';

export const Search = React.memo(({ onSearch }) => {
    const [isRecognitionActive, setRecognitionState] = useState(false);
    const classes = useStyles({ isRecognitionActive });
    const localization = useLocalization();
    const input = useRef(null);
    const microphone = useRef(null);
    const recognition = useMemo(() => new SpeechRecognition(), []);

    useEffect(() => {
        recognition.onresult = ({ results }) => {
            const city = results[results.length - 1][0].transcript;
            setRecognitionState(false);

            if (city) {
                onSearch(city);
            }
        };

        recognition.onend = () => setRecognitionState(false);
    }, [recognition, onSearch]);

    useClickOutside(
        microphone,
        useCallback(() => {
            setRecognitionState(false);
            recognition.stop();
        }, [recognition]),
    );

    const handleSearch = useCallback(() => {
        const value = input.current.value;
        if (value) {
            input.current.value = '';
            onSearch(value);
        }
    }, [onSearch]);

    const onMicrophoneClick = useCallback(() => {
        if (isRecognitionActive) {
            recognition.stop();
        } else {
            recognition.start();
        }
        setRecognitionState(!isRecognitionActive);
    }, [recognition, isRecognitionActive]);

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
