import React from 'react';
import NavigationItems from '../NavigationsItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = props => {
    const drawerToggle = <DrawerToggle clicked={props.drawerToggleClicked} />;
    const navigationItems = <NavigationItems />;
    return (
        <header className={classes.Toolbar}>
            {props.isMobile && drawerToggle}
            {!props.isMobile && navigationItems}
        </header>
    );
};

export default toolbar;
