import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
    const searchHeight = 44;

    return {
        search: {
            display: 'flex',
            position: 'relative',
        },
        input: {
            width: 274,
            height: searchHeight,
            paddingLeft: '15px',
            backgroundColor: 'rgba(76, 82, 85, 0.4)',
            border: '1px solid rgba(228, 227, 227, 0.2)',
            boxSizing: 'border-box',
            borderRadius: '5px 0 0 5px',
            outline: 'none',
            color: '#fff',
            fontSize: 14,
            '&::placeholder': {
                color: '#fff',
            },
        },
        button: {
            width: 90,
            height: searchHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#b4b8bb',
            borderRadius: '0 5px 5px 0',
            outline: 'none',
            boxShadow: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 14,
            textTransform: 'uppercase',
            cursor: 'pointer',
        },
        microphone: {
            position: 'absolute',
            right: 0,
            top: 0,
            color: 'rgba(128, 128, 128, 0.6)',
            height: searchHeight,
            display: 'flex',
            alignItems: 'center',
            margin: '0 8px',
            fontSize: 20,
            cursor: 'pointer',
            '&:hover': {
                color: 'rgb(128, 128, 128)',
            },
        },
        inputWrapper: {
            position: 'relative',
        },
    };
});
