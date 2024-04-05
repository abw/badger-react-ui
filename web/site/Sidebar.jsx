import React from 'react'
import Menu from './Menu.jsx'
import { ComponentsMenu, GettingStartedMenu, ThemingMenu, UtilitiesMenu } from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...ComponentsMenu}/>
    <Menu {...UtilitiesMenu}/>
    <Menu {...ThemingMenu}/>
  </>

export default Sidebar