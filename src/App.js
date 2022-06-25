import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // Display Alert
      // setAlert({ show: true, msg: "Please Enter Value", type: "danger" });

      showAlert(true, "Please Enter Value", "danger");
    } else if (name && isEditing) {
      //  Deal with edit
    } else {
      // Show Alert

      showAlert(true, "Item Added Succesfully", "success");

      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = function (show = false, msg = "", type = "") {
    setAlert({ show: show, type: type, msg: msg });
  };

  const clearList = () => {
    showAlert(true, "All List Clear", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "Item Removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert alertProp={alert} removeAlert={showAlert} list={list}></Alert>
        )}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g Eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem}>
            {" "}
          </List>
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
