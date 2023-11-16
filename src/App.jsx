import { useState,useEffect } from 'react'
import stock from './stock.json'
import './App.css'
import {nanoid} from 'nanoid'
function App() {


  const [input, setInput] = useState("");
  const [stocks,setStocks]=useState(stock)
  const [stocklist,setStockList]=useState(Object.keys(stocks))
  const [tableHtml,setTableHtml]=useState([])
  const [dropDownVisible, setdropDownVisible] = useState(false)
  const handleChange = ({target:{value}}) => setInput(value)
  const showDropDown = ()=>setdropDownVisible(true)
  console.log(stocklist)

  useEffect(()=>{},[stocks])
  return (
    <div className="App">
       <div className="flex-col">
        <label htmlFor="input">Type a medicine</label>
        <input
            name="input"
            type="text"
            list="stock"
            value={input}
            onChange={handleChange}
            onSelect={()=>{}}
            
        />
      </div>
      {dropDownVisible && (
        <datalist id="stock">
          {stocklist.map((item) => (
            <option  key={nanoid()}>
              {item}
            </option>
          ))}
        </datalist>
      )}
        <table>
            <tr>
              <th>Drug Name</th>
              <th>Location</th>
            </tr>
            {/* 
            dynamically render a list of rows in the format
            
            // step 1 get drug name- filter stocklist
            
            // step 2 get drug stock locations 
            <tr>
            stock.get(['Drug Name])- will return an array- iterate over array
            
            <td>{****DRUG NAME***}</td>
              <td><****DRUG LOCATION***}</td>
            </tr>
            
            
            */}
        </table>
    </div>
  )
}

export default App
