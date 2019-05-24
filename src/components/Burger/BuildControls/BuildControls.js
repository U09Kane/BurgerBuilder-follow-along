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
        {controls.map(elm => (
            <BuildControl
                key={elm.label}
                label={elm.label}
                added={() => props.ingredientAdded(elm.type)}
                removed={() => props.ingredientRemoved(elm.type)}
                disabled={props.disabled[elm.type]}
            />
        ))}
    </div>
);

export default buildControls;