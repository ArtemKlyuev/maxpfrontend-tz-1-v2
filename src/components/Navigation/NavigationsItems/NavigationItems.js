import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <nav className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            Главная
        </NavigationItem>
        <NavigationItem link="/login">Авторизация</NavigationItem>
        <NavigationItem link="/news">Новости</NavigationItem>
        <NavigationItem link="/profile">Профиль</NavigationItem>
    </nav>
);

export default navigationItems;
