import React from "react";
import { useState } from "react";

const UpdateUser = ({ user, onUpdate }) => {
  const [first_name, setFirstname] = useState(user.first_name);
  const [last_name, setLastname] = useState(user.last_name);
  const [points, setPoints] = useState(user.points);
  const [id] = useState(user.id);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id, first_name, last_name, points });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="container col-md-5 col-sm-7 text-light flex-column"
    >
      <div className="mt-2 form-group">
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
        <label htmlFor="lastNameInput">Points</label>
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
        Update
      </button>
    </form>
  );
};

export default UpdateUser;
