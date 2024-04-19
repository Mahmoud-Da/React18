import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const DeletingData = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); // フラグ

  // event Handler    (eventとは例：　データの『削除、保存、更新』など)
  const deleteUser = (user: Users) => {
    // originUsersの定義の理由：　バックアップの目的（途中で問題発生したら）
    const originalUsers = [...users];

    // まずlocalからの更新（削除）
    setUsers(users.filter((u) => u.id != user.id));

    // サーバーの削除処理
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err);
        // エラー発生したら、localのデータを削除しないこと
        setUsers(originalUsers);
      });
  };

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
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
    </>
  );
};

export default DeletingData;

// 1- 削除ボタンを作成
// <button className="btn btn-outline-danger">Delete</button>
// 2-　event削除を定義（利用方法：　楽観的更新）
//

// ******************************
// サーバーからデータを削除　（二つ方法ある）
// 　方法１(楽観的更新)　Optimoitic Update
//   方法２（悲観的な更新）Pessimisitc　Update
// 楽観的更新：
// 1- まずLocalのUI（User Interface）を更新
// 2- その後サーパーを呼び出して、サーパー上にデータの削除を行う
// 特徴：
// 1- とても早い
// 2- サーパの接続は切ることがないとき

// 悲観的な更新:
// 1- まずサーパーを呼び出して、サーパー上にデータの削除を行う
// 2- その後UI（User Interface）を更新
// 特徴：
// 1- 遅い
// 2- サーパの接続は切る可能性がある時

// 一般的に、楽観的更新の方法を利用する
// ******************************
