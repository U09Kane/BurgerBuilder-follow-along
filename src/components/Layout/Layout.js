import React from 'react'

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import './Layout.css'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div id='testthing'>Toolbar, SideDrawer, Backdrop</div>
        <main className='Layout'>
            {props.children}
        </main>
    </Aux>
)

export default layout;