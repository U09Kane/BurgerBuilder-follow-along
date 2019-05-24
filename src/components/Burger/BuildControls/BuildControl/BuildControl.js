import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className='BuildControl'>
        <div>{props.label}</div>
        <button
            className='BuildControl-button'
            id='Less'
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <button
            className='BuildControl-button'
            id='More'
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;