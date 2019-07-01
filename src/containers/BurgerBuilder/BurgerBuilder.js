import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        // const ingredients = {...this.state.ingredients}
        const sum = Object.values(ingredients)
            .reduce((sum, elm) => sum + elm, 0);

        this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] - 1
        if (newCount < 0 ) {
            return
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => this.setState(
        (prevState) => ({purchasing: !prevState.purchasing})
    )

    purchaseContinueHandler = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'Dave',
                email: 'test@email.com',
                deliveryMethod: 'fast',
                address: {
                    street: '1600 Pennsylvania Ave NW',
                    city: 'Washington D.C.',
                    state: 'DC',
                    country: 'USA'
                }
            }
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render () {
        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    checkoutDisabled={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;