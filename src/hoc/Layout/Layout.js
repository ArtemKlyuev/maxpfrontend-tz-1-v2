import React, { useState, useEffect } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = (props) => {
    const [sideDrawerIsVisible, setsideDrawerIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkDimensions = () => {
        const width = window.innerWidth;

        if (width <= 460) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', checkDimensions);
        window.addEventListener('resize', checkDimensions);
    }, []);

    useEffect(
        () => () => window.removeEventListener('resize', checkDimensions),
        []
    );

    const sideDrawerClosedHandler = () => setsideDrawerIsVisible(false);

    const sideDrawerToggleHandler = () =>
        setsideDrawerIsVisible(!sideDrawerIsVisible);

    const sideDrawer = (
        <SideDrawer
            open={sideDrawerIsVisible}
            closed={sideDrawerClosedHandler}
        />
    );
    return (
        <React.Fragment>
            <Toolbar
                drawerToggleClicked={sideDrawerToggleHandler}
                isMobile={isMobile}
            />

            {isMobile && sideDrawer}

            <main className={classes.Content}>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
