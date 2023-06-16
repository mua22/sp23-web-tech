import React, { useState } from "react";

const SortExample = () => {
  const [names, setNames] = useState(["Zaid", "Hammad", "Ali"]);
  return (
    <div>
      <button
        onClick={(e) => {
          let ns = [...names];
          ns.sort();
          setNames(ns);
        }}
      >
        Sort
      </button>
      <ul>
        {names.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortExample;
