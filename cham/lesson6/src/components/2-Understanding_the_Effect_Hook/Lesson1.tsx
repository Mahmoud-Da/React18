const Lesson1 = () => {
  // Pureメソッド
  const add = (a: number, b: number) => {
    return a + b;
  };

  // imPureメソッド
  let total = 0;
  const addToTotal = (value: number) => {
    total += value;
  };

  return (
    <>
      {/* Pureメソッドの例 */}
      <h1></h1>
      <div>{add(1, 4)}</div>

      {/* imPureメソッドの例 */}
      <h1></h1>
      <div>{addToTotal(1)}</div>
    </>
  );
};

export default Lesson1;

// Pureメソッド（清いメソッド）
// メソッド：input + output
// いつも同じinputちゃんと同じoutputを出す

// => の時（Requestを送信）
// <= の時（ Responseを受領）
// Browser => Server
// Browser <= Server
