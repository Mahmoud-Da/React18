let count = 0;

const Massege = () => {
  console.log("Message called", count);

  count++;

  return (
    <>
      <div>Massege {count}</div>
    </>
  );
};

export default Massege;
