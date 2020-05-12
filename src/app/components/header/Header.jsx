import React from 'react';

import { Search } from './components';
import { useStyles } from './Header.styles';

export const Header = () => {
    const { header } = useStyles();

    return (
        <div className={header}>
            <Search />
        </div>
    );
};
