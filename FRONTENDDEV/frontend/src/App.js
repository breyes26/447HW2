import { useEffect, useState } from "react";
import "./App.css";
import APIService from "./components/APIService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLinks from "./components/NavbarLinks";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import GetPoints from "./components/GetPoints";

function App() {
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await APIService.GetUsers();
      setUsers(usersFromServer);
    };

    getUsers();
  }, []);

  const deleteUser = async (id) => {
    const deletedUser = await APIService.DeleteUser(id);
    setUsers(users.filter((user) => user.id !== deletedUser.id));
  };

  const addUser = async (user) => {
    const addedUser = await APIService.AddUser(user);
    setUsers([...users, addedUser]);
  };

  const updateUser = async ({ id, first_name, last_name, points }) => {
    const updatedUser = await APIService.UpdateUser(id, {
      first_name,
      last_name,
      points,
    });

    setUsers(
      users.map((user) => {
        return user.id === updatedUser.id ? updatedUser : user;
      })
    );

    setShowUpdate(false);
  };

  return (
    <Router>
      <div className="d-flex bg-dark flex-column min-vh-100">
        <NavbarLinks></NavbarLinks>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container d-flex flex-column align-items-center text-light ">
                <h2 className="mb-5">Welcome to Bryant's HW2</h2>
                <p className="col-7 text-center">
                  I didn't really have enough time to properly design this page.
                  So just imagine that this is a beautiful homescreen. Go ahead
                  and click the links to do stuff.
                </p>
                <div className="container"></div>
              </div>
            }
          ></Route>
          <Route
            path="/users"
            element={
              <>
                <UserList
                  onDelete={deleteUser}
                  users={users}
                  onUpdate={updateUser}
                  showUpdate={showUpdate}
                  setShowUpdate={setShowUpdate}
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                ></UserList>
                {selectedUser && showUpdate && (
                  <UpdateUser
                    user={selectedUser}
                    onUpdate={updateUser}
                  ></UpdateUser>
                )}
                <AddUser
                  showAdd={showAdd}
                  onToggle={setShowAdd}
                  onAdd={addUser}
                ></AddUser>
              </>
            }
          ></Route>
          <Route
            path="/points"
            element={
              <>
                <GetPoints></GetPoints>
              </>
            }
          ></Route>
        </Routes>

        <div className="py-2 d-flex justify-content-center align-items-center mt-auto py-3 bg-dark text-light">
          &copy; Bryant 2023
        </div>
      </div>
    </Router>
  );
}

export default App;
