import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends React.Component {
    state = { showSideDrawer: false, isMobile: false };

    checkDimensions = () => {
        const width = window.innerWidth;

        if (width <= 460) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    };

    componentDidMount() {
        window.addEventListener('DOMContentLoaded', this.checkDimensions);
        window.addEventListener('resize', this.checkDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkDimensions);
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        const sideDrawer = (
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}
            />
        );
        return (
            <React.Fragment>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    isMobile={this.state.isMobile}
                />

                {this.state.isMobile && sideDrawer}

                <main className={classes.Content}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;
