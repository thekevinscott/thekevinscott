import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from 'components/Header';
import WebFont from 'webfontloader';
import styles from './styles.module.scss';

const TYPEKIT_ID = 'zip7tcb';
const FONTS = {
  google: {
    families: [
      'Lato:400,500,600,700,800,900',
    ],
  },
  typekit: {
    id: TYPEKIT_ID,
  }
};
const threshold = 340;
const getIsOverThreshold = () => window.scrollY > threshold;

interface IProps {
}

interface IState {
  headerIsVisible: boolean;
  headerIsHovered: boolean;
  startMouse: number | null;
}

class TemplateWrapper extends Component {
  state: IState = {
    headerIsVisible: false,
    headerIsHovered: false,
    startMouse: null,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      headerIsVisible: false,
      headerIsHovered: false,
      startMouse: null,
    };
  }

  handleScroll = (e: any) => {
    this.setState({
      headerIsHovered: false,
      startMouse: null,
    });
    if (getIsOverThreshold() && this.state.headerIsVisible === false) {
      this.setState({
        headerIsVisible: true,
      });
    } else if (!getIsOverThreshold() && this.state.headerIsVisible === true) {
      this.setState({
        headerIsVisible: false,
      });
    }
  }

  mouseMove = (e: React.MouseEvent) => {
    if (!getIsOverThreshold()) {
      if (this.state.startMouse === null) {
        this.setState({
          startMouse: e.clientY,
        });
      } else if (Math.abs(this.state.startMouse - e.clientY) > 20) {
        this.setState({
          headerIsHovered: true,
        });
      }
    } else if (this.state.headerIsHovered === true) {
      this.setState({
        startMouse: null,
        headerIsHovered: false,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.mouseMove);
    WebFont.load(FONTS);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.mouseMove);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.children({
          ...this.props,
          visible: this.state.headerIsVisible || this.state.headerIsHovered,
          headerIsHovered: this.state.headerIsHovered,
        })}
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
