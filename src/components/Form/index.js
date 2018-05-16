import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import {
  DARK_BLUE,
  LIGHT_BLUE,
  LIGHT_GRAY,
} from '../../layouts/constants';

const Container = styled.form `
  margin: 0 auto 0 auto;
  max-width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-sizing: border-box;

  input {
    padding: 10px;
    font-size: 1.6rem;
    margin: 20px 0;
    padding: 10px 12px;
    height: auto;
    color: rgba(0,0,0,0.6);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    background-image: none;
    min-width: 0;
    min-height: 0;
    width: 300px;

    &[type=submit] {
      border-radius: 10px;
      color: white;
      transition-duration: 0.2s;
      background-color: ${LIGHT_BLUE};
      border: 2px solid white;
      font-size: 15px;
      width: 140px;
      cursor: pointer;
      display: inline-block;
      height: auto;
      padding: 15px;
      margin: 0;

      &:disabled {
        color: ${LIGHT_GRAY};
        border: 2px solid ${LIGHT_GRAY};
        background-color: white;
        cursor: default;
      }
    }
  }
`;

const getValues = (props, currentValues = {}) => {
  return props.inputs.reduce((obj, input) => {
    return {
      ...obj,
      [input.name]: currentValues[input.name] || "",
    };
  }, {});
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
