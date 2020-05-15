import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    temperatureWrapper: {
        display: 'flex',
    },
    temperature: {
        fontSize: args => args.tempFontSize,
    },
    degreesSign: {
        fontSize: args => args.degreesFontSize,
    },
});
