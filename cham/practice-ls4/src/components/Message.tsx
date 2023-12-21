let count1 = 0;
const Message = () => {
  count1++;
  let count2 = 0;
  count2++;
  return (
    <>
      <div>InPure Message, {count1}</div>
      <div>Pure Message, {count2}</div>
    </>
  );
};

export default Message;
