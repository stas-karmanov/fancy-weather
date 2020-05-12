import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    forecast: {
        display: 'flex',
    },
    dayForecast: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 35,
    },
    day: {
        fontSize: 22,
        textTransform: 'uppercase',
    },
});
