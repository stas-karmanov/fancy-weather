import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    search: {
        display: 'flex',
    },
    input: {
        width: 274,
        padding: '10px 15px',
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
        padding: '10px 15px',
        backgroundColor: '#b4b8bb',
        borderRadius: '0 5px 5px 0',
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
        color: '#fff',
        fontSize: 14,
        '&:hover': {
            cursor: 'pointer',
        },
    },
});
