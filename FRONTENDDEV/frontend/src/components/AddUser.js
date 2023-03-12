import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AddUser = ({ onAdd, showAdd, onToggle }) => {
  const [id, setId] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [points, setPoints] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!id || !first_name || !last_name || !points) {
      alert("Fill out each box");
      return;
    }
    onAdd({ id, first_name, last_name, points });
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <button
          onClick={() => onToggle(!showAdd)}
          type="submit"
          className="btn btn-lg btn-success mt-4 d-flex justify-content-center align-items-center"
        >
          {showAdd ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
        </button>
      </div>
      {showAdd && (
        <form
          onSubmit={onSubmit}
          className="container col-md-5 col-sm-7 text-light flex-column"
        >
          <div className="form-group">
            <label htmlFor="idInput">ID</label>
            <input
              type="number"
              className="form-control"
              id="idInput"
              placeholder="Enter ID Number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
          <div className="mt-2">
            <label htmlFor="firstNameInput">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              id="firstNameInput"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="lastNameInput">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
              id="lastNameInput"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="pointsInput">Points</label>
            <input
              type="number"
              placeholder="Enter Points"
              className="form-control"
              id="pointsInput"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Add User
          </button>
        </form>
      )}
    </>
  );
};

export default AddUser;
