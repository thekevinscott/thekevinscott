import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from 'components/Header';
import styles from './styles.module.scss';

const threshold = 340;
const getIsOverThreshold = () => window.scrollY > threshold;

interface IProps {
  children: (visible: boolean, headerIsHovered: boolean) => JSX.Element;
}

const TemplateWrapper:React.SFC<IProps> = ({
  children,
  ...props
}) => {
    const [scroll, setScroll] = React.useState<number>(0);

    React.useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      console.log('check that scroll works');
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
      <div className={styles.container}>
        {children({
          ...props,
          scroll,
        })}
      </div>
    );
  }
};

export default TemplateWrapper;
