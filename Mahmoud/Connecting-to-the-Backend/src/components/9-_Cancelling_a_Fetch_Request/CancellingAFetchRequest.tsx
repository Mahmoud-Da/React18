import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const CancellingAFetchRequest = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // first step define AbortController() instance
    const controller = new AbortController();
    axios
      // second step pass AbortController() instante as second argument (signal) of axois get method
      // fourth step remove the x from the endpoint
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      // fifth step is fix the catch error statment
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // third step is return abort of AbortController() instante
    return () => controller.abort();
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

export default CancellingAFetchRequest;
