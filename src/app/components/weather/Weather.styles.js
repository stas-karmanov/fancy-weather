import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    weather: {
        width: 500,
        minHeight: 1,
    },
    todayWeatherInfo: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    weatherInfo: {
        paddingBottom: 70,
    },
});
