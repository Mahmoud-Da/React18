import React, { useEffect, useState } from "react";
import axios from "axios";
interface Users {
  id: number;
  name: string;
  username: string;
}
const FetchData = () => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <h2>FetchData</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}*{user.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
