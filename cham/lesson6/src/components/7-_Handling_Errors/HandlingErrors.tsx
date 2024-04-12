import React, { useEffect, useState } from "react";
import axios from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const HandlingErrors = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      // エラーをシミレーションする（リンクの最後に"x"を追加する）
      .get<Users[]>("https://jsonplaceholder.typicode.com/usersx")
      .then((res) => setUsers(res.data))
      // サーバー側で問題発生したら、何する
      .catch((err) => setError(err.message));
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

export default HandlingErrors;
