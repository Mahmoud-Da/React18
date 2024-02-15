import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // and so
}
const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // axios.get("endpoint url")
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      // show all the response
      // .then((res) => console.log(res))
      // show only the data
      // .then((res) => console.log(res.data[0]));
      // no auto compliation
      // .then((res) => console.log(res.data[0].));
      // after add .get<User[]>
      // we can see the data
      // .then((res1) => console.log(res1.data[0].name));
      // store the data
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
