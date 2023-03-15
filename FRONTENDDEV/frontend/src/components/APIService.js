export default class APIService {
  static GetUsers = async () => {
    const res = await fetch("http://localhost:5000/get");
    const data = await res.json();
    return data;
  };

  static GetUser = async (id) => {
    const res = await fetch(`http://localhost:5000/get/${id}`);
    const data = await res.json();
    return data;
  };

  static AddUser = async (body) => {
    const res = await fetch(`http://localhost:5000/add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  };

  static DeleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };

  static UpdateUser = async (id, body) => {
    const res = await fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  };

  static GetPoints = async (first_name, last_name) => {
    const res = await fetch(
      `http://localhost:5000/get_points/${first_name}/${last_name}`
    );
    const data = await res.json();
    return data;
  };
}
