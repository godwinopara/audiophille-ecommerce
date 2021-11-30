import React from "react";

const Table = ({ items }) => {
  return (
    <table className="md:flex-1 border-none">
      <tbody>
        {items.map((item, id) => {
          return (
            <tr className="pb-3" key={id}>
              <td className="font-bold text-brown-100 pr-8">{item.quantity}X</td>
              <td className="opacity-50">{item.item}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
