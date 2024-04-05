import React from 'react'
import Menu from './Menu.jsx'
import { ComponentsMenu, GettingStartedMenu, UtilitiesMenu } from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...ComponentsMenu}/>
    <Menu {...UtilitiesMenu}/>
  </>

export default Sidebar