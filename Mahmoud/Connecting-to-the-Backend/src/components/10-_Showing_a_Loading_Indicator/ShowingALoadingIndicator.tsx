import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ShowingALoadingIndicator = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        // first way
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        // first way
        setLoading(false);
      });
    // second way
    // .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShowingALoadingIndicator;
