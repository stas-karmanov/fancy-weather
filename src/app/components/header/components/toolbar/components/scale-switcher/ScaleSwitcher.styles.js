import { createUseStyles } from 'react-jss';

import { SCALE } from './ScaleSwitcher.models';

const scale = {
    width: 44,
    height: 44,
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        cursor: 'pointer',
    },
};

export const useStyles = createUseStyles({
    scaleSwitcher: {
        display: 'flex',
    },
    fahrenheit: {
        ...scale,
        borderRadius: '5px 0 0 5px',
        backgroundColor: scale => (scale === SCALE.FAHRENHEIT ? 'rgba(174, 181, 185, 0.5)' : 'rgba(76, 82, 85, 0.4)'),
    },
    сelсius: {
        ...scale,
        borderRadius: '0 5px 5px 0',
        backgroundColor: scale => (scale === SCALE.CELCIUS ? 'rgba(174, 181, 185, 0.5)' : 'rgba(76, 82, 85, 0.4)'),
    },
});
