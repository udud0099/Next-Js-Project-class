import React from "react";

const ProductId = async ({ params }) => {
  const { productId } = await params;
  return <div>ProductId {productId}</div>;
};

export default ProductId;
