import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    toolbar: {
        display: 'flex',
        '& > div': {
            marginRight: 10,
        },
    },
});
