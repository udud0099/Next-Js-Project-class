import React from "react";

const V9catchAll = async ({ params }) => {
  const { slug } = await params;
  return <div>
    
    V9catchAll {slug}</div>;
};

export default V9catchAll;
