import React from "react";

const CostList = ({ name, amount }) => {
  return (
    <li className="flex justify-between items-center mb-3">
      <span className="opacity-50 uppercase">{name}</span>
      <span className="font-bold text-2xxl">${amount.toLocaleString()}</span>
    </li>
  );
};

export default CostList;
