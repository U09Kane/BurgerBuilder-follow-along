import React from '.React';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='BurgerIngredient_BreadBotton'></div>;
            break
        case ('bread-top'):
            ingredient = (
                <div className="BurgerIngredient_BreadTop">
                    <div className="BurgerIngredient_Seeds1"></div>
                    <div className="BurgerIngredient_Seeds2"></div>
                </div>
            );
            break
        case ('meat'):
            ingredient = <div className="BurgerIngredient_Meat"></div>
            break;

    }

};

export default burgerIngredient