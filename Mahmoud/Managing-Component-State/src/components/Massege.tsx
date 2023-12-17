let count = 0;

const Massege = () => {
  // if we update our component here our component will inPure
  count++;

  // to make it pure we can define a varible and update it inside the funttion
  let count2 = 0;
  count2++;
  return (
    <>
      <div>
        <p>InPure</p>
        Massege {count}
      </div>
      <br />
      <div>
        <p>Pure</p>
        Massege {count}
      </div>
    </>
  );
};

export default Massege;
