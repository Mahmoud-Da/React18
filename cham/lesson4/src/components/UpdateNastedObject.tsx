import { useState } from "react";

const UpdateNastedObject = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };
  return (
    <>
      {customer.name}, {customer.address.city}, {customer.address.zipCode}
      <br />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateNastedObject;
