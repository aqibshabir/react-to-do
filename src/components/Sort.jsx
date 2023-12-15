import React from "react";

function Sort() {
  return (
    <select className="sort" name="sort" id="sort">
      <option value="all">All</option>
      <option value="complete">Complete</option>
      <option value="not-complete">Not Complete</option>
    </select>
  );
}

export default Sort;
