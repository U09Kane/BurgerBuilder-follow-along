import React, { Component }from 'react';
import PropTypes from 'prop-types'

import './BurgerIngredient.css'

class BurgerIngredient extends Component{

    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ('bread-top'):
                ingredient = (
                    <div className="BurgerIngredient_BreadTop">
                        <div className="BurgerIngredient_Seeds1"></div>
                        <div className="BurgerIngredient_Seeds2"></div>
                    </div>
                );
                break
            case ('bread-bottom'):
                ingredient = <div className='BurgerIngredient_BreadBottom'></div>;
                break
            case ('meat'):
                ingredient = <div className="BurgerIngredient_Meat"></div>
                break;
            case ('cheese'):
                ingredient = <div className="BurgerIngredient_Cheese"></div>
                break;
            case ('salad'):
                ingredient = <div className="BurgerIngredient_Salad"></div>
                break
            case ('bacon'):
                ingredient = <div className="BurgerIngredient_Bacon"></div>
                break
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient