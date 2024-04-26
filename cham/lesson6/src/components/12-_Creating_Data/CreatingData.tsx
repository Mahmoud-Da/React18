import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const CreatingData = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    // 1
    const originalUsers = [...users];

    const newUser: Users = {
      id: 0, // データのID：0またnil => このデータまだ登録されていないです。
      name: "Lili",
      email: "wehweh@chamcham.com",
    };

    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
    // 確認
    // .then((res) => console.log(res.data));
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
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
    </>
  );
};

export default CreatingData;

// 1- まずデータを保存すること
