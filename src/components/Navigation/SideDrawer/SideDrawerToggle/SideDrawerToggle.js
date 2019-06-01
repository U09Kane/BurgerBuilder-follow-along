import React from 'react';
import './SideDrawerToggle.css';

const sideDrawerToggle = (props) => (
    <div 
        className='DrawerToggle'
        onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggle;