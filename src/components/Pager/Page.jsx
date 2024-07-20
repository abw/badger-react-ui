import React   from 'react'
import Context from './Context.js'
import Button  from '../Button/Button.jsx'
import { pagerCurrentPageLabel, pagerPageLabel } from './Utils.js'
import { maybeFunction } from '@abw/badger-utils'

const PagerPage = ({
  pageNo,
  text=pageNo,
  buttonClass,
  className=buttonClass,
  onClick,
  current,
  pageLabel=current
    ? pagerCurrentPageLabel
    : pagerPageLabel
}) =>
  <Button
    text={text}
    className={className}
    onClick={onClick}
    label={maybeFunction(pageLabel, pageNo)}
    aria-current={current ? 'page' : null}
  />

export default Context.Consumer(PagerPage)

