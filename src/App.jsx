import { useState, useEffect } from 'react';
import stock from './stock.json';
import './App.css';
import { nanoid } from 'nanoid';

function App() {
  const [input, setInput] = useState("");
  const [stocks, setStocks] = useState(stock);
  const [stocklist, setStockList] = useState(Object.keys(stocks));
  const [tableRows, setTableRows] = useState([]);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    setDropDownVisible(true); // Show dropdown on input change
  };

  useEffect(() => {
    // Filter stocklist based on the input
    const filteredStockList = stocklist.filter(item =>
      item.toLowerCase().includes(input.toLowerCase())
    );

    // Create table rows based on the filtered stocklist
    const rows = filteredStockList.map(item => {
      const locations = stocks[item].map((location, index) => (
        <div key={index}>{location}</div>
      ));

      return (


        <tr key={nanoid()}>
          <td>{item}</td>
          <td>{locations}</td>
        </tr>
      );
    });

    setTableRows(rows );
  }, [input, stocks, stocklist]);

  return (
    <div className="App">
      <div className="flex-col">
<h1>NMUH Drug Locations</h1>
        <label htmlFor="input">Type a medicine</label>
        <input
          name="input"
          type="text"
          list="stock"
          value={input}
          onChange={handleChange}
        />
      </div>
      {!dropDownVisible && (
        <datalist id="stock">
          {stocklist.map((item) => (
            <option key={nanoid()}>{item}</option>
          ))}
        </datalist>
      )}
      <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.length > 0 ? (
            tableRows
          ) : (
            <tr>
              <td colSpan="2">No matching drugs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
