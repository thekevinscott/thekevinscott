import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as styles from './styles.module.scss';

const getValues = (props, currentValues = {}) => {
  return props.inputs.reduce((obj, input) => ({
    ...obj,
    [input.name]: currentValues[input.name] || input.value || '',
  }), {});
};

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const getStringified = ({ children, ...props }) => JSON.stringify(props, getCircularReplacer());

const hasChanged = (current, next) =>  getStringified(current) !== getStringified(next);

interface IProps {
  inputs: any;
  headline?: string
  action: string;
  method?: string;
  compact?: boolean;
  children: JSX.Element;
  handleSubmit?: Function;
  submitting?: boolean;
  error?: string | JSX.Element;
  success?: string | JSX.Element;
}

class Form extends Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      values: getValues(props),
      touched: {},
    };
  }

  componentWillReceiveProps(nextProps: IProps) {
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
    if (this.props.handleSubmit) {
      this.props.handleSubmit(e);
    }
    // e.preventDefault();
  };

  render() {
    const {
      inputs,
      headline,
      action,
      method,
      compact,
      children,
      submitting,
      error,
      success,
      handleSubmit,
      ...rest
    } = this.props;

    const disabled = submitting || inputs.reduce((isDisabled: boolean, input) => {
      if (isDisabled) {
        return isDisabled;
      }

      return input.required && this.state.values[input.name] === '';
    }, false);

    return (
      <form
        className={classNames(styles.form, {
          [styles.compact]: compact,
        })}
        {...rest}
        action={action}
        method={method || 'post'}
        onSubmit={this.handleSubmit}
      >
        {headline && (
          <h3 data-drip-attribute="headline">{headline}</h3>
        )}
        {children}
        <div className={classNames(styles.inputs, {
          [styles.hasError]: error,
          [styles.hasSuccess]: success,
        })}>
          {inputs.map(input => (
          <div
            className={classNames(styles.input, {
              [styles.hidden]: input.type === 'hidden',
            })}
            key={input.name}
          >
              <input
                type={input.type || 'text'}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                value={this.state.values[input.name]}
                onChange={this.handleChange}
                disabled={submitting}
              />
            </div>
          ))}
          <div className={styles.submit}>
            <input
              type="submit"
              value={submitting ? 'Submitting...' : 'Sign Up'}
              data-drip-attribute="sign-up-button"
              disabled={disabled}
            />
          </div>
        </div>

        {success && (<p className={styles.success}>Check your email ({success}) to confirm</p>)}
        {error && (<p className={styles.error}>{error}</p>)}
      </form>
    );
  }
}

export default Form;
