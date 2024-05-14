import React from 'react';
import './Table.css'

const Table = ({ data, columns }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
