import React from 'react';
import classNames from 'classnames';
import SubscribeForm from 'components/SubscribeForm';
import * as styles from './styles.module.scss';

interface IProps {
  form: string;
  descriptionPlacement?: string;
  showImage?: boolean;
  container?: HTMLDivElement;
  subscriberTags?: {
    [index: string]: string;
  };
}

interface IState {
  fixed: boolean;
}

const marginTop = 240;

const getIsOverThreshold = (threshold: number) => window.scrollY > threshold;

class Sidebar extends React.Component<IProps, IState> {
  state = {
    fixed: false,
  };

  private top?: number;

  handleScroll = (e: any) => {
    if (this.top && this.props.container) {
      const top = this.props.container.getBoundingClientRect().top;
      const threshold = top + window.scrollY;
      if (getIsOverThreshold(threshold) && this.state.fixed === false) {
        this.setState({
          fixed: true,
        });
      } else if (!getIsOverThreshold(threshold) && this.state.fixed === true) {
        this.setState({
          fixed: false,
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getRef = (ref: HTMLDivElement) => {
    if (this.state.fixed === false) {
      this.top = ref.getBoundingClientRect().top + window.scrollY;
    }
  }

  render() {
    const {
      form,
      subscriberTags,
      descriptionPlacement,
      showImage,
      container,
    } = this.props;

    return (
      <div
        className={classNames(styles.sidebar, {
          [styles.fixed]: this.state.fixed,
        })}
        ref={this.getRef}
        style={{
          marginTop: this.state.fixed ? 0 : marginTop,
          top: this.state.fixed ? marginTop : 0,
        }}
      >
        <SubscribeForm
          compact={true}
          descriptionPlacement={descriptionPlacement}
          form={form}
          showImage={showImage}
          subscriberTags={{
            ...(subscriberTags || {}),
            formPosition: 'sidebar',
          }}
        />
      </div>
    );
  }
}

export default Sidebar;
