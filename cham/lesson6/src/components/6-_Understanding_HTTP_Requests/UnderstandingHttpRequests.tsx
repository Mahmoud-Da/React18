import React, { useEffect, useState } from "react";
import axios from "axios";

interface Users {
  id: number;
  name: string;
  email: string;
}
const UnderstandingHttpRequests = () => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
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
    </>
  );
};

export default UnderstandingHttpRequests;

// 日本語
// GET => データの取得
// POST => 新しデータをサーバーに送信するとき
// PUT => データをサーバーに更新するとこ (object 全体)
// PATCH => データをサーバーに更新するとこ　(property 全体)
// DELETE => delete an object

// 英語
// GET => getting data
// POST =>  creating data
// PUT => updating data (full object)
// PATCH => updating data (only porperties)
// DELETE => delete an object

// id => 種別番号

// HTTP
// 1- HEADER  => metadata (リクエスト自体のデータ)
// 2- BODY => data
// ex:
// metadata => Network-Headres
//  Request Method:  GET
// Status Code: 200 OK
//
// data => Network-Response
// [
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   ]
