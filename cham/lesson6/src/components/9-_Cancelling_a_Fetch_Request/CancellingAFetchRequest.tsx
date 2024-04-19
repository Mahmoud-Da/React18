import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}

const CancellingAFetchRequest = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controler = new AbortController();
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controler.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
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

export default CancellingAFetchRequest;

// AbortController 利用終わったものに対して、fetchの処理を停止（サーバーの接続っぱなししない）
// 1- AbortControllerのインスタンスを定義
// 2- get method に　signal引数を渡して、AbortControllerのインスタンスのsignalに設定
// 3- return () => controler.abort(); をreturn する
// 4- エラーを分配する　if (err instanceof CanceledError) return;
