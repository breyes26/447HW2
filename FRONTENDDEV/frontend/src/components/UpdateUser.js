import React from "react";

const UpdateUser = ({ user, showUpdate, onUpdate }) => {
  const onSubmit = () => {
    console.log("Update");
  };

  return (
    <form onSubmit={onSubmit} className="d-flex col-md-5 col-sm-7 text-light">
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.points}</div>
    </form>
  );
};

export default UpdateUser;
