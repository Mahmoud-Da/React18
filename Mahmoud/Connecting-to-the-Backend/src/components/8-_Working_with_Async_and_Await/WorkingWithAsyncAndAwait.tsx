import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const WorkingWithAsyncAndAwait = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // useEffect(async () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUser();
    // writing this code without then and catch method
    // .then((res) => setUsers(res.data))
    // .catch((err) =>
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default WorkingWithAsyncAndAwait;
