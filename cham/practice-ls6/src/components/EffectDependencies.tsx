import React, { useEffect, useState } from "react";

const EffectDependencies = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>(["dod"]);

  useEffect(() => {
    console.log("データ受領：", category);
    setProduct(["Clothing", "Household", "lal"]);
  }, [category]);

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default EffectDependencies;
