import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const ShowingALoadingIndicator = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); // フラグ
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
    // 方法２
    // .finally(() => setLoading(false));

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
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
    </>
  );
};

export default ShowingALoadingIndicator;
