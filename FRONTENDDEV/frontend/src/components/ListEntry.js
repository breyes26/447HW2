import React, { useState } from "react";
import UpdateUser from "./UpdateUser";

const ListEntry = ({ user, onDelete }) => {
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <>
      <th id={user.id} scope="row">
        {user.id}
      </th>
      <td>{`${user.first_name} ${user.last_name}`}</td>
      <td>{user.points}</td>
      <td>
        <div>
          <button
            onClick={() => {
              onDelete(user.id);
            }}
            className="btn me-3 btn-sm btn-danger"
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              setShowUpdate(!showUpdate);
            }}
            className={
              showUpdate ? "btn btn-sm btn-success" : "btn btn-sm btn-primary"
            }
          >
            {showUpdate ? "Confirm" : "Update"}
          </button>
        </div>
      </td>
      <td>
        {showUpdate && (
          <UpdateUser
            user={user}
            showUpdate={showUpdate}
            onUpdate={setShowUpdate}
          ></UpdateUser>
        )}
      </td>
    </>
  );
};

export default ListEntry;
