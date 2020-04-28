import React from 'react';
import RootContainer from '../../../hoc/RootContainer';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
        return <li key={ingredientKey}><span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}</li>
    });
    return (
        <RootContainer>
            <h3>Your Order</h3>
            <p>Your burger:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue To Checkout</p>
            <Button clicked={props.cancelOrder} btnType={"Danger"}>RETURN</Button>
            <Button clicked={props.continueOrder} btnType={"Success"}>CONTINUE</Button>
        </RootContainer>
    );
};

export default orderSummary;