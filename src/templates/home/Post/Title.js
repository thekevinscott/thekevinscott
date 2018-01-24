import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTitle = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    max-width: 100%;
    min-height: 200px;
    z-index: 1;
    max-height: 200px;
    object-fit: cover;
  }

  ${props => props.loaded ? `
  `: null}

  ${props => props.image ? `
    margin: 30px 0 20px 0;

    h2 {
      box-sizing: border-box;
      transition-duration: 0.6s;
      opacity: 0;
      position: absolute;
      width: 100%;
      margin-top: 20px;
      bottom: 5px;
      background: rgba(255, 255, 255, 0.0);
    }
  ` : null}

  ${props => props.loaded && `
    h2 {
      opacity: 1;
      bottom: 20px;
      background: rgba(255, 255, 255, 0.85);
    }
  `}
`;

class Title extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <StyledTitle
        {...this.props}
        loaded={this.state.loaded}
      >
        {this.props.children}
      </StyledTitle>
    );
  }
}

export default Title;
