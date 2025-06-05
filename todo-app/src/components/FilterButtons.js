import React from "react";

function FilterButtons({ currentFilter, setFilter }) {
  const filters = ["all", "pending", "completed"];

  return (
    <div id="filters">
      {filters.map((f) => (
        <button
          key={f}
          data-filter={f}
          className={f === currentFilter ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
