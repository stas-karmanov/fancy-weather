import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    temperatureInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    infoRecord: {
        fontSize: 22,
        textTransform: 'uppercase',
    },
});
