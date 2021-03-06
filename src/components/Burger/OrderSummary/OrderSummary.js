import React from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                {igKey.toUpperCase()}: {props.ingredients[igKey]}
                </li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                buttonType='Danger'
                clicked={props.purchaseCanceled}>
                CANCEL
            </Button>
            <Button
                buttonType='Success'
                clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary