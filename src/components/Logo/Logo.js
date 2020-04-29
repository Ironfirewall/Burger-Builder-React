import React from 'react';
import classes from './Logo.module.css';
import Image from '../../assets/images/original.png';

const logo = (props) => {
    return (    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Image} alt="BurgerLogo"/>
    </div>);

}

export default logo;