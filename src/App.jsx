
import stock from './stock.json';
import wards from './wardstocklist.json'
import './App.css';
import { nanoid } from 'nanoid';
import useStock from './hooks/useStock';

function App() {
  
    const {input,handleChange,dropDownVisible,stocklist,tableRows}=useStock(stock)

  return (
    <div className="App">

      {/* OOH STOCKLIST / WARD STOCKLIST*/}
      <div className="flex-col">

        {/* BrowserRouter */}

          <h1>NMUH Drug Locations</h1>
              <label htmlFor="input">Type a medicine</label>
                  <input
                    name="input"
                    type="text"
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

              <div className="container flex-col">

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
      </div>
    </div>
  );
}

export default App;
