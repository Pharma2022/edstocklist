import React from 'react'

const Table = ({name,tableRows,thLeft,thRight,}) => {
  return (
    <div className="container flex-col">

                  <table>
                    <thead>
                      <tr>
                        <th>{thLeft}</th>
                        <th>{thRight}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.length > 0 ? (tableRows) : (
                      <tr>
                        <td colSpan="2">No matching {name} found</td>
                      </tr>)}
                    </tbody>
            </table>
              </div>
  )
}

export default Table