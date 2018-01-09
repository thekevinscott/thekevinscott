import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DELAY_TIME = 10;

const Container = styled.div `
  transition-duration: 0.4s;
  transition-timing-function: ease-out;

  opacity: ${props => props.visible ? '1' : '0'};
  padding-top: ${props => props.visible ? '0px' : '10px'};
`;

class Animated extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, this.props.index * DELAY_TIME);
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
};

Animated.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
};

export default Animated;

