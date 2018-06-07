import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import Container from "./Container";

const getValues = (props, currentValues = {}) => {
  return props.inputs.reduce((obj, input) => ({
    ...obj,
    [input.name]: currentValues[input.name] || input.value || "",
  }), {});
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: getValues(props),
      touched: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.setState({
        values: getValues(nextProps, this.state.values),
      });
    }
  }

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    // console.log('stop');
    // e.preventDefault();
  };

  render() {
    const {
      inputs,
      headline,
      action,
      method,
      ...rest,
    } = this.props;

    const disabled = inputs.reduce((isDisabled, input) => {
      if (isDisabled) {
        return isDisabled;
      }

      return input.required && this.state.values[input.name] === "";
    }, false);

    return (
      <Container
        {...rest}
        action={action}
        method={method || "post"}
        onSubmit={this.handleSubmit}
      >
        {headline && (
          <h3 data-drip-attribute="headline">{headline}</h3>
        )}
        {inputs.map(input => (
          <div key={input.name}>
            <input
              type={input.type || "text"}
              id={input.id}
              name={input.name}
              placeholder={input.placeholder}
              value={this.state.values[input.name]}
              onChange={this.handleChange}
            />
          </div>
        ))}
        <div>
          <input
            type="submit"
            value="Sign Up"
            data-drip-attribute="sign-up-button"
            disabled={disabled}
          />
        </div>
      </Container>
    );
  }
}

Form.propTypes = {
};

export default Form;
