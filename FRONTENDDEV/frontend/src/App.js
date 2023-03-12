import { useEffect, useState } from "react";
import "./App.css";
import APIService from "./components/APIService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLinks from "./components/NavbarLinks";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

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

  return (
    <Router>
      <div className="d-flex bg-dark flex-column min-vh-100">
        <NavbarLinks></NavbarLinks>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>This is the homepage</h2>
              </>
            }
          ></Route>
          <Route
            path="/users"
            element={
              <>
                <UserList onDelete={deleteUser} users={users}></UserList>
                <AddUser
                  showAdd={showAdd}
                  onToggle={setShowAdd}
                  onAdd={addUser}
                ></AddUser>
              </>
            }
          ></Route>
        </Routes>

        <div className="py-2 d-flex justify-content-center align-items-center mt-auto bg-dark text-light">
          &copy;Bryant 2023
        </div>
      </div>
    </Router>
  );
}

export default App;
