import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DELAY_TIME = 200;

class Animated extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: props.animate === true ? false : true };
  }

  componentDidMount() {
    const timeout = this.props.index * DELAY_TIME;
    this.timeout = setTimeout(() => {
      this.setState({ visible: true });
    }, timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div
        className={classNames(styles.container, {
          [styles.visible]: this.state.visible,
        })}
      >
        {children}
      </div>
    );
  }
}

Animated.defaultProps = {
  children: null,
  index: 0,
  animate: true,
};

Animated.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
  animate: PropTypes.bool,
};

export default Animated;

