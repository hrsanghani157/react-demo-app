import React from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {props.TableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
