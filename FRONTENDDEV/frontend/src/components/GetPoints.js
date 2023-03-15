import React, { useState } from "react";
import APIService from "./APIService";

const GetPoints = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [points, setPoints] = useState(null);
  const [message, setMessage] = useState("");

  const retrievePoints = async (first_name, last_name) => {
    const pointsFromServer = await APIService.GetPoints(first_name, last_name);
    setMessage(
      `${firstName} ${lastName} has ${pointsFromServer.points} points.`
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Fill out both boxes");
      return;
    }
    retrievePoints(firstName, lastName);
  };

  return (
    <div className="text-light">
      <h2 className="text-center text-light mb-4">Get A User's Points</h2>
      {message && (
        <h3 className="d-flex justify-content-center display-6">{message}</h3>
      )}
      <div className="container d-flex flex-column align-items-center"></div>
      <form
        onSubmit={onSubmit}
        className="container col-md-5 col-sm-7 text-light flex-column"
      >
        <div className="form-group mt-2">
          <label htmlFor="firstNameInput">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            id="firstNameInput"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="form-control"
            id="lastNameInput"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="mt-3 btn btn-success">
          Get Points
        </button>
      </form>
    </div>
  );
};

export default GetPoints;
