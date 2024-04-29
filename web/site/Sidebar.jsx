import React from 'react'
import Menu from './Menu.jsx'
import {
  ComponentsMenu, ElementsMenu, GettingStartedMenu, HooksMenu,
  TestingMenu, ThemingMenu, UtilitiesMenu
} from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...ComponentsMenu}/>
    <Menu {...ElementsMenu}/>
    <Menu {...UtilitiesMenu}/>
    <Menu {...HooksMenu}/>
    <Menu {...ThemingMenu}/>
    { Boolean(import.meta.env.DEV) &&
      <Menu {...TestingMenu}/>
    }
  </>

export default Sidebar