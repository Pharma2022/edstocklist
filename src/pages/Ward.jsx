import React from 'react'
import wardstocklist from '../wardstocklist.json'
import useStock from '../hooks/useStock'
import Input from '../components/Input'
import Table from '../components/Table'
const Ward = () => {

    const {input,handleChange,dropDownVisible,stocklist,tableRows}=useStock(wardstocklist)
  return (
    <div className="flex-col">
        <Input 
        name={'ward'}
        dropDownVisible={dropDownVisible} 
        handleChange={handleChange} 
        stocklist={stocklist} 
        input={input}
        />
        <Table 
        name={'Drug'} 
        tableRows={tableRows} 
        thLeft={'Drug Name'} 
        thRight={'Location'}
        />
    </div>
  )
}

export default Ward