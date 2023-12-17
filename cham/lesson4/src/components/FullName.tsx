import { useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("LiLi");
  const [lastName, setLastName] = useState("dodo");

  // React 避ける書き方
  const fullName = firstName + " " + lastName;

  // 一番方法
  const [person, setPerson] = useState({
    firstName: "Lili",
    lastName: "dodo",
  });
  return (
    <>
      <div>
        {/*　方法１ */}
        {firstName} {lastName}
        <br />
        {/*　方法2 */}
        {fullName}
        <br />
        {/* ベスト方法1*/}
        {person.firstName} {person.lastName}
      </div>
    </>
  );
};

export default FullName;
