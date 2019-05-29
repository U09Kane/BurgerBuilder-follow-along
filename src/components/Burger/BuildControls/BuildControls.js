import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(elm => (
            <BuildControl
                key={elm.label}
                label={elm.label}
                added={() => props.ingredientAdded(elm.type)}
                removed={() => props.ingredientRemoved(elm.type)}
                disabled={props.disabled[elm.type]}
            />
        ))}
        <button
            className='OrderButton'
            disabled={!props.checkoutDisabled}
            onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;