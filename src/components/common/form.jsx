import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SelectReact from "./selectReact";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    //Prevents the default summission of form
    e.preventDefault();
    console.log("Form has been submitted");
    //get oreturned object errors to validate after a form submision
    const errors = this.validate();
    // set the set which will force a rerendering of affected dom elements
    //if obj errors is truthy then use object "errors" or set {}
    this.setState({ errors: errors || {} });
    //if there are any errors then return
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  mapToNameValueObj = (name, value) => {
    const NameValueObj = { currentTarget: { name, value } };
    return NameValueObj;
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", autoFocus = false) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        autoFocus={autoFocus}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <SelectReact
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={({ value }) =>
          this.handleChange(this.mapToNameValueObj(name, value))
        }
        error={errors[name]}
      />
    );
  }
}

export default Form;
