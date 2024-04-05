import React, { useEffect, useState } from "react";
import axios from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const FetchData = () => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    // axios.get("endpoint URL")
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      // .then((res) => console.log(res.data[0].email));
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}-{user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;

// axios を利用する
// useStateでデータを保存する
// useEffect を定義して、中身でデータのやり取り処理を書く

// エンドポイント：ローカルとサーバーの接続ポイント
// https://jsonplaceholder.typicode.com/users

// ローカル => エンドポイント <= サーバー

// 非同期処理とは: ある処理が実行されてから終わるまで待たずに、次に控えている別の処理を行うことです。
// promise: PromiseとはJavaScriptにおいて、非同期処理の操作が完了したときに結果を返すものです。

// データ表示
// 1- interfaceを定義する
// 2- useStateの定義<interfaseを設定>
// 3- .get<interfaseを設定>
// 4- .then((res) => set”インターファイスの命名”(res.data));
// 5- return のなかで呼び出す
// 6- <ul>
// {users.map((user) => (
//   <li key={user.id}>
//     {user.name}-{user.email}
//   </li>
// ))}
// </ul>
