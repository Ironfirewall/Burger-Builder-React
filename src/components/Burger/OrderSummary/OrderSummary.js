import React, {Component} from 'react';
import RootContainer from '../../../hoc/RootContainer';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate(){
        console.log('[OrderSummary] did update');
    }

    render (){

        const ingredientSummary = Object.keys(this.props.ingredients).map(ingredientKey => {
            return <li key={ingredientKey}><span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}</li>
        });

        return (
            <RootContainer>
            <h3>Your Order</h3>
            <p>Your burger:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue To Checkout</p>
            <Button clicked={this.props.cancelOrder} btnType={"Danger"}>RETURN</Button>
            <Button clicked={this.props.continueOrder} btnType={"Success"}>CONTINUE</Button>
        </RootContainer>
        );
    }
}

export default OrderSummary;