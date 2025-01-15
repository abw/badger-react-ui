import React from 'react'
import Context from './Context.js'
import Icon from '@/components/Icon/Icon'

const SearchInput = ({
  input,
  onFocus,
  onBlur,
  onChange,
  clear,
  autocomplete,
  autoComplete=autocomplete,
  placeholder='Search',
  clearIcon='cross',
  searchIcon='search',
  searchingIcon='cog.spin',
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
      autoComplete={autoComplete}
    />
    <div className={suffixClass} onClick={disabled ? null : clear}>
      <Icon name={searching ? searchingIcon : clearIcon}/>
    </div>
  </div>

export default Context.Consumer(SearchInput)
