import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    app: {
        height: '100vh',
        position: 'relative',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '2% 6% 0 6%',
    },
    header: {
        marginBottom: 40,
        width: '100%',
    },
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
});

var a = 4;
