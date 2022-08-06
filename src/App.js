import { useState } from "react";

import Item from "./Components/Item";

import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    setList([...list, value]);
    setValue("");
  };

  const deleteValue = (id) => {
    const newList = list.filter((val, ind) => ind != id);

    setList(newList);
  };

  const editValue = (id) => {
    const updatedValue = prompt("Update Value of index no # " + id + "  :");

    setList([
      ...list.slice(0, id),
      updatedValue,
      ...list.slice(id + 1, list.length),
    ]);
  };

  return (
    <div className="App">
      <Navbar />

      {/* ADD Tasks */}
      <section className="container">

        <input type="text" value={value} onChange={changeValue} />
        <button onClick={addValue}>Add</button>

        {/* <div className="Items"> */}
          <ul className="ul">
            {list.map((val, ind) => (
              <Item
                key={ind}
                id={ind}
                value={val}
                del={deleteValue}
                edit={editValue}
              />
            ))}
          </ul>
        {/* </div> */}

      </section>

      {/* Show Tasks */}
    </div>
  );
}

export default App;
