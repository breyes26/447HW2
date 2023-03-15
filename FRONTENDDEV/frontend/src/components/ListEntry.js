import React from "react";

const ListEntry = ({
  user,
  onDelete,
  showUpdate,
  setShowUpdate,

  setSelectedUser,
}) => {
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
              setSelectedUser(user);
            }}
            className="btn btn-sm btn-primary"
          >
            Update
          </button>
        </div>
      </td>
    </>
  );
};

export default ListEntry;
