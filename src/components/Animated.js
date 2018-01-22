import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DELAY_TIME = 200;

const Container = styled.div `
  display: flex;
  max-width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;

  opacity: ${props => props.visible ? '1' : '0'};
  padding-top: ${props => props.visible ? '0px' : '10px'};
`;

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
      <Container visible={this.state.visible}>
        {children}
      </Container>
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

