import React, { useEffect, useState } from "react";

const EffectDependencies = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>(["dsad"]);

  useEffect(() => {
    console.log("データ受領: ", category);
    setProduct(["Clothing", "Household"]);
  }, [category]);

  return (
    <>
      <div></div>
    </>
  );
};

export default EffectDependencies;

// simulation
// シミュレーシ

// interface の書き方
// 方法１：（objectいっぱいある時）
// interface Props {
//   category: string;
//   object2: numebr;
//  object3: string;
// }
// const EffectDependencies = ({ category }: Props) => {
// 方法2：（object一個がある時）
// const EffectDependencies = ({ category }: { category: string }) => {

// useEffect()の2番目渡す引数が変わったら、rendringする
// 例1 [category]の場合は、categoryが変わったら
// useEffect(() => {
//   console.log("データ受領: ", category);
//   setProduct(["Clothing", "Household"]);
// }, [category]);

// 例2 []の場合は、一回目だけrendering
