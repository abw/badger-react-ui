import React from 'react'
import Menu from './Menu.jsx'
import { ComponentsMenu, GettingStartedMenu, HooksMenu, ThemingMenu, UtilitiesMenu } from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...ComponentsMenu}/>
    <Menu {...UtilitiesMenu}/>
    <Menu {...HooksMenu}/>
    <Menu {...ThemingMenu}/>
  </>

export default Sidebar