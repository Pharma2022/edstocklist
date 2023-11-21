import React from 'react'
import stock from '../stock.json'
import useStock from '../hooks/useStock'
import Input from '../components/Input'
import Table from '../components/Table'
const Home = () => {
    const {input,handleChange,dropDownVisible,stocklist,tableRows}=useStock(stock)
  return (
    <div className="flex-col">
            <Input 
            name={'drug'}
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

export default Home