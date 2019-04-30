import React from "react";
import Select from "react-select";

const SelectReact = ({ name, label, options, error, value, ...rest }) => {
  const optionsReact = options.map(option => {
    let newOption = {};
    newOption.value = option._id;
    newOption.label = option.name;
    return newOption;
  });

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <Select
        {...rest}
        value={optionsReact.filter(option => option.value === value)}
        name={name}
        id={name}
        options={optionsReact}
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectReact;
