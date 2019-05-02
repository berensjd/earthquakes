import React from "react";

const SearchBox = ({ value, onChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor="query">{label}</label>
      <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search.."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
