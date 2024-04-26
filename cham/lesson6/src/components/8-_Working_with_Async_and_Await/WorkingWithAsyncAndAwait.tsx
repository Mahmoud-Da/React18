import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const WorkingWithAsyncAndAwait = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  // get -> promise -> result / error

  const fetchUser = async () => {
    try {
      const res = await axios.get<Users[]>(
        "https://jsonplaceholder.typicode.com/usersx"
      );
      setUsers(res.data);
    } catch (error) {
      setError((error as AxiosError).message);
    }

    // axoisを利用せずにの方法
    // try {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/usersx");
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const dowloadedUsers = await response.json();
    //   setUsers(dowloadedUsers);
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  useEffect(() => {
    fetchUser();
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
    </>
  );
};

export default WorkingWithAsyncAndAwait;
