import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const inputChangeHandler = (event) => {
    event.preventDefault();

    setSearchItem(event.target.value);
  };
  return (
    <>
      <form id="form-container">
        <input
          type="text"
          placeholder="Write Something.."
          onChange={inputChangeHandler}
        />
      </form>
      {JSONDATA.filter((element) => {
        // ! İsme göre filter kullanma
        // if (searchItem === "") {
        //   return element;
        // } else if (
        //   element.first_name.toLowerCase().includes(searchItem.toLowerCase()) ||
        //   element.last_name.toLowerCase().includes(searchItem.toLowerCase())
        // ) {
        //   return element;
        // }
        // ! İd'si 100den küçük ise
        return element.id <= 100;
      }).map((element) => {
        return (
          <div className="user-lists">
            <p>
              {element.id}. {element.first_name} {element.last_name}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default App;
