import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    let allIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_,index) => {
            return <BurgerIngredient key={ingredientKey+index} type={ingredientKey} />;
        });
    })
    .reduce((array, element) => {
        return array.concat(element)
    }, []);
    console.log(allIngredients);
    console.log("Inside of the burger");
    if(allIngredients.length === 0){
        allIngredients = <p>Please add items to your burger!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {allIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;