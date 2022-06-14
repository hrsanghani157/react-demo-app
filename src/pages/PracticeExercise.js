import React, { useEffect, useState } from "react";
import Form from "../component/Form";
import Table from "../component/Table";




function PracticeExercise() {
  const [count, setCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(1);
  useEffect(() => {
    setUpdateCount(() => count * 2);
  }, [count]);
  const [inputData, setInputData] = useState([]);
  const [textAreaData, setTextAreaData] = useState([]);

  const [formData, setFormData] = useState([
    {
      id: 1,
      name: "hardik",
    },
  ]);
  const [showComponent, setShowComponent] = useState(true);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "hardik",
      work: {
        language: "html",
        position: "PMS",
      },
    },
    {
      id: 2,
      name: "kk",
    },
    {
      id: 3,
      name: "atul",
      work: {
        language: "Full Stake",
        position: "CTO",
      },
    },
  ]);

  

  return (
    <>
      
      <div className="container">
        {/* excercise-1 */}
        <div>
          <button onClick={() => setCount((click) => click + 1)}>
            Count ++
          </button>
          <h1>{updateCount}</h1>
        </div>
        {/* excercise-2 */}
        <input
          type="text"
          value={inputData}
          onChange={(event) => {
            setInputData(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setTextAreaData([inputData]);
          }}
        >
          submit text
        </button>
        <br />
        <textarea
          value={textAreaData}
          onChange={(event) => {
            setTextAreaData(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setInputData([textAreaData]);
          }}
        >
          submit text
        </button>
        <br />
        <br />
        {/* excercise-3 "Ternary Operator" with 'if and else' and 'hide show'*/}
        {!showComponent ? (
          <button onClick={() => setShowComponent(true)}>show Table</button>
        ) : (
          <button onClick={() => setShowComponent(false)}>hide Table</button>
        )}

        {showComponent && (
          <div>
            <Table TableData={formData} />
            <Form FormData={setFormData} />
          </div>
        )}
        <br />
        {/* excercise-4 'table to show data' with "Ternary Operator"*/}
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>language</th>
              <th>position</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id || "-"}</td>
                  <td>{data.name || "-"}</td>
                  <td>{data?.work?.language || "-"}</td>
                  <td>{data?.work?.position || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PracticeExercise;
