import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as styles from './styles.module.scss';

const getValues = (props, currentValues = {}) => {
  return props.inputs.reduce((obj, input) => ({
    ...obj,
    [input.name]: currentValues[input.name] || input.value || '',
  }), {});
};

const getStringified = ({ children, ...props }) => JSON.stringify(props);

const hasChanged = (current, next) =>  getStringified(current) !== getStringified(next);

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: getValues(props),
      touched: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (hasChanged(this.props, nextProps)) {
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
    // e.preventDefault();
  };

  render() {
    const {
      inputs,
      headline,
      action,
      method,
      children,
      ...rest,
    } = this.props;

    const disabled = inputs.reduce((isDisabled, input) => {
      if (isDisabled) {
        return isDisabled;
      }

      return input.required && this.state.values[input.name] === '';
    }, false);

    return (
      <form
        className={styles.form}
        {...rest}
        action={action}
        method={method || 'post'}
        onSubmit={this.handleSubmit}
      >
        {headline && (
          <h3 data-drip-attribute="headline">{headline}</h3>
        )}
        {children}
        {inputs.map(input => (
          <div key={input.name}>
            <input
              type={input.type || 'text'}
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
      </form>
    );
  }
}

Form.propTypes = {
};

export default Form;
