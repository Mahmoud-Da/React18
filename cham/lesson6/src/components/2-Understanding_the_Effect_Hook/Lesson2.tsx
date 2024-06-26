import React, { useEffect, useRef } from "react";

const Lesson2 = () => {
  const ref = useRef<HTMLInputElement>(null);

  // side effect
  if (ref.current) ref.current.focus();

  // input Element が自分のページが存在したら、周りに青くして
  // after rendering
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  // DOMの変更
  useEffect(() => {
    document.title = "ウィウィ";
  });

  useEffect(() => {
    console.log("lili");
  });
  return (
    <>
      <div>
        <input ref={ref} type="text" className="form-control" />
        <input type="text" />
      </div>
    </>
  );
};

export default Lesson2;

//  imPureを利用例：
// データがローカル保存
// データを更新する（サーバから呼び出す）
// DOMを更新する

// useEffect + useRef + useState loop(for/while文)の中できない

// useEffect rendering終わる度に実行される（rendering終わってから）
// useEffect 同じcomponentで複数useEffect利用できる
