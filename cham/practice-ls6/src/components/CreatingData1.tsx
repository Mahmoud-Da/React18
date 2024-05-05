import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface Albums {
  id: number;
  title: string;
}

const CreatingData1 = () => {
  const [users, setUsers] = useState<Albums[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    axios
      .get<Albums[]>("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controler.abort();
  }, []);
  return (
    <>
      <h2>CreatingData1</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="col">{user.id}</th>
              <td>{user.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default CreatingData1;
