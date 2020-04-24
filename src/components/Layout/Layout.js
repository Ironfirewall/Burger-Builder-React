import React from 'react';
import RootContainer from '../../hoc/RootContainer';
import classes from './Layout.module.css';

const layout = (props) => (
    <RootContainer>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.layoutContent}>
            {props.children}
        </main>
    </RootContainer>

);

export default layout; 