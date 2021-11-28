import React from "react";

const Table = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => {
          return (
            <tr className="pb-3">
              <td className="font-bold text-brown-100 pr-10">{item.quantity}X</td>
              <td className="opacity-50">{item.item}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
