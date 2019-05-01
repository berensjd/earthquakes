import React from "react";
import Select from "react-select";

const SelectReact = ({ name, label, options, value, ...rest }) => {
  const optionsReact = options.map(option => {
    let newOption = {};
    newOption.value = option;
    newOption.label = option;
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
    </div>
  );
};

export default SelectReact;
