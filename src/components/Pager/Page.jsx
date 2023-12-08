import React   from 'react'
import Context from './Context.js'
import Button  from '../Button/Button.jsx'

const PagerPage = ({
  pageNo,
  text=pageNo,
  buttonClass,
  className=buttonClass,
  onClick
}) =>
  <Button
    text={text}
    className={className}
    onClick={onClick}
  />

export default Context.Consumer(PagerPage)

