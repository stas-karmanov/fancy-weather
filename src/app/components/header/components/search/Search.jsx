import React from 'react';
import { useStyles } from './Search.styles';

export const Search = () => {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <input className={classes.input} type="text" placeholder="Search city or ZIP" />
            <button className={classes.button}>SEARCH</button>
        </div>
    );
};
