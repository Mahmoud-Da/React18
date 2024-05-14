import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";
import userService, { Users } from "../services/user-service";

interface Users {
  id: number;
  name: string;
  email: string;
}

const ExtractingTheUserService = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((a) => a.id != user.id));

    userService.deleteUser(user.id).catch((err) => {
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

    userService
      .creatUser(newUser)
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

    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);
  return (
    <>
      <h2>ExtractingTheUserService</h2>
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

export default ExtractingTheUserService;
