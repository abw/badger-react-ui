import React from 'react'
import Context from './Context.js'
import Icon from '@/components/Icon/Icon.jsx'

const SearchInput = ({
  input,
  onFocus,
  onBlur,
  onChange,
  reset,
  placeholder='Search',
  clearIcon='cross',
  searchIcon='search',
  searchingIcon='cog',
  inputsClass='inputs round',
  prefixClass='prefix',
  suffixClass='suffix',
  inputType='text',
  inputClass='',
  disabled,
  searching,
}) =>
  <div className={inputsClass}>
    <div className={prefixClass}>
      <Icon name={searchIcon}/>
    </div>
    <input
      type={inputType}
      placeholder={placeholder}
      value={input}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      disabled={disabled}
      className={inputClass}
    />
    <div className={suffixClass} onClick={reset}>
      <Icon name={searching ? searchingIcon : clearIcon}/>
    </div>
  </div>

export default Context.Consumer(SearchInput)
