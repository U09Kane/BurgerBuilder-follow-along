import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';



const toolbar = (props) => (
    <header className='Toolbar'>
        <SideDrawerToggle clicked={props.toggleSideDrawer}/>
        <Logo height='80%'/>
        <nav className='DesktopOnly'>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;