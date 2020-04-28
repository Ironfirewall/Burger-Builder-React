import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import RootContainer from '../../hoc/RootContainer';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_BASE_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.0,
    bacon: 0.6
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0 
        },
        totalPrice: 4,
        purchasable: false,
        orderButtonClicked: false
    }

    purchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(itemKey => {
            return ingredients[itemKey];
        })
        .reduce((sum, element) => {
            return sum + element;
        }, 0);
        this.setState({purchasable: sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_BASE_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredient});
        this.purchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_BASE_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients:updatedIngredient});
        this.purchaseState(updatedIngredient);
    }

    orderButtonClickedHandler = () => {
        this.setState({orderButtonClicked:true});
    }

    cancelOrderHandler = () => {
        this.setState({orderButtonClicked:false});
    }

    continueOrderHandler = () => {
        alert('Continue');
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        console.log(disabledInfo);
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return(
            <RootContainer>
                <Modal show={this.state.orderButtonClicked} closeModal={this.cancelOrderHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancelOrder = {this.cancelOrderHandler}
                        continueOrder = {this.continueOrderHandler}
                        totalPrice = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    prices={INGREDIENT_BASE_PRICE}
                    purchasable={this.state.purchasable}
                    orderClicked={this.orderButtonClickedHandler}
                />
            </RootContainer>
        );
    }
}

export default BurgerBuilder;