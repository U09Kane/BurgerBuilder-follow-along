import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div id='testthing'>Toolbar, SideDrawer, Backdrop</div>
        <main className='Layout'>
            {props.children}
        </main>
    </Aux>
);

export default layout;