import { useState } from "react";

const UpdatingNestedObject = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  // update the zipcode
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdatingNestedObject;
