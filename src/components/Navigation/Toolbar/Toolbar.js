import React from 'react';
import NavigationItems from '../NavigationsItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <NavigationItems />
    </header>
);

export default toolbar;
