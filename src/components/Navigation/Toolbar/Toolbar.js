import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../NavigationItems/Menu/Menu';

const toolbar = (props) => {
    return(
    <header className={classes.Toolbar}>
        <Menu open={props.open}/>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>);
}

export default toolbar;