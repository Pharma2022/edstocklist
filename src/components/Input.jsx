import React from 'react'
import { nanoid } from 'nanoid'
const Input = ({input,handleChange,dropDownVisible,stocklist,name}) => {
  return (
    <>
         <label htmlFor="input">Type a {name}</label>
                  <input
                    name="input"
                    type="search"
                    list="stock"
                    value={input}
                    onChange={handleChange}
                  />
   
              {!dropDownVisible && (
                <datalist id="stock">
                  {stocklist.map((item) => (
                    <option key={nanoid()}>{item}</option>
                  ))}
                </datalist>
              )}
    </>
  )
}

export default Input