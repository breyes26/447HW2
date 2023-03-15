import ListEntry from "./ListEntry";

const UserList = ({
  users,
  onDelete,
  onUpdate,
  showUpdate,
  setShowUpdate,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div className="container flex align-items-center">
      <h2 className="text-center mb-4 text-light">Users</h2>
      {users.length > 0 ? (
        <>
          <div className="table-wrapper">
            <table className="container  table table-dark overflow-scroll">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Points</th>
                  <th scope="col">Actions</th>
                  <th scope=""></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id} className="align-middle">
                      <ListEntry
                        user={user}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        showUpdate={showUpdate}
                        setShowUpdate={setShowUpdate}
                        selectedUser={selectedUser}
                        setSelectedUser={setSelectedUser}
                      ></ListEntry>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h3 className="text-center mt-3 text-warning">No Users ... Add Some</h3>
      )}
    </div>
  );
};

export default UserList;
