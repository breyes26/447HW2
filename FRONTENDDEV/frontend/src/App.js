import { useEffect, useState } from "react";
import "./App.css";
import APIService from "./components/APIService";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await APIService.GetUsers();
      setUsers(usersFromServer);
    };

    getUsers();
  }, []);

  return (
    <div className="container-fluid">
      {users &&
        users.map((user) => {
          return (
            <div key={user.id} className="container">
              <div className="container row align-items-center">
                <h2 className="col">{`${user.first_name} ${user.last_name}`}</h2>
                <p className="col">{`ID: ${user.id}`}</p>
                <p className="col">{`POINTS: ${user.points}`}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
