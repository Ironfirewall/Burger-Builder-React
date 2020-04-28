import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {console.log(props.prices)}
        {controls.map(item => (
            <BuildControl 
            key={item.label} 
            label={item.label}
            added={() => props.ingredientAdded(item.type)}
            removed={() => props.ingredientRemoved(item.type)}
            disabled={props.disabled[item.type]}
            itemPrice={props.prices[item.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.orderClicked}>Place Order</button>
    </div>
);

export default buildControls;