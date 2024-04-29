import axios from "axios";
import React, { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const CreatingData1 = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
  });
  return (
    <>
      <h2>CreatingData1</h2>
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
              <th scope="col">{user.id}</th>
              <td>user.name</td>
              <td>user.email</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CreatingData1;
