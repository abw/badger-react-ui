import React   from 'react'
import Context from './Context.js'
import Button  from '@/components/Button/Button'
import { pagerPageLabel } from './Utils.js'
import { maybeFunction } from '@abw/badger-utils'

const PagerPage = ({
  pageNo,
  text=pageNo,
  buttonClass,
  className=buttonClass,
  onClick,
  current,
  pageLabel=pagerPageLabel
}) =>
  <Button
    text={text}
    className={className}
    onClick={onClick}
    label={current ? null : maybeFunction(pageLabel, pageNo)}
    aria-current={current ? 'page' : null}
  />

export default Context.Consumer(PagerPage)

