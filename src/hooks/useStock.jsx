import { useEffect,useState } from "react"
import { nanoid } from "nanoid";

const useStock = (data) => {

    const [input, setInput] = useState("");
  const [stocks, setStocks] = useState(data);
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


  return  {input,handleChange,dropDownVisible,stocklist,tableRows}
}

export default useStock