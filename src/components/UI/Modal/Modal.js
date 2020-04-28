import React from 'react';
import RootContainer from '../../../hoc/RootContainer';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <RootContainer>
        <Backdrop show={props.show} clickedBackdrop={props.closeModal}/>
        <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        >
            {props.children}
        </div>
    </RootContainer>
);

export default modal;