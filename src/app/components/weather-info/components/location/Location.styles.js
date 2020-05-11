import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    locationWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    location: {
        fontSize: 44,
        textTransform: 'uppercase',
    },
    time: {
        fontSize: 24,
    },
});
