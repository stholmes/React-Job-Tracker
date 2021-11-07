import React, { Fragment } from 'react';
import classes from './MainHeader.module.css';
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <h1><span className={classes.react_color}>React</span> Job Tracker</h1>
            </div>


        </header>
    )
};

export default MainHeader;