import React, { useState } from "react";

function Form(props) {
  const [id, setId] = useState();
  const [name, setName] = useState();
  return (
    <form>
      <label>id</label>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          props.FormData((data) => [...data, { name: name, id: id }]);
        }}
      >
        submit
      </button>
    </form>
  );
}

export default Form;
