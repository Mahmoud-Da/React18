import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const UpdatingData2 = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((a) => a.id != user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        setError(err);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const newUser: Users = {
      id: 0,
      name: "kiki",
      email: "mama",
    };

    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "lala" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users" + user.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controler.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controler.abort();
  }, []);
  return (
    <>
      <h2>UpdatingData2</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <button className="btn btn-primary mb-3" onClick={addUser}>
            Add
          </button>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="col">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Del
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className=" spinner-border"></div>}
    </>
  );
};

export default UpdatingData2;
