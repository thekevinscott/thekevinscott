import React from 'react';
import classNames from 'classnames';
import WebFont from 'webfontloader';
import SubscribeForm from 'components/SubscribeForm';
import Img from 'gatsby-image';
import ArticleHeader from './ArticleHeader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from './Sidebar';
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from 'templates/blog-post/utils';
import * as styles from './styles.module.scss';

interface IProps {
  data: {
    markdownRemark: {
      html: any;
      htmlAst: any;
    }
    site: {
      siteMetadata: {
        title: string;
        author?: string;
        description?: string;
        keywords?: string;
        url: string;
      }
    }
  }
  children?: any;
  scroll: number;
  // visible: boolean;
  // headerIsHovered: boolean;
}

const getPosition = (element: HTMLElement | Element) => {
  let yPosition = 0;

  while(element) {
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return yPosition;
}

const getHeight = () => {
  const body = document.body;
  const html = document.documentElement;
  return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
}

type IInsertIntoChildrenFn = (child: any, index: number) => boolean;

const insertIntoChildren = (
  children: any,
  at: number | IInsertIntoChildrenFn,
  contents: any,
) => ({
  ...children,
  props: {
    ...children.props,
    children: React.Children.map(children.props.children, (child, index) => {
      if (
        (typeof at === 'function' && at(child, index)) ||
        typeof at !== 'function' && index === at
      ) {
        return [
          contents,
          child,
        ];
      }

      return child;
    }),
  },
});

const getAt = (tag: string, at: number = 0): IInsertIntoChildrenFn => {
  let count = 0;
  return (child, index) => {
    const currentCount = count;
    if (child.type === tag) {
      count++;

      return currentCount === at;
    }

    return false;
  };
};

interface IState {
  submitted: null | string;
}

class Simple extends React.Component<IProps, IState> {
  private content?: HTMLDivElement;
  private inlineSubscribeForm: React.RefObject<HTMLElement>;

  constructor(props: IProps) {
    super(props);

    this.inlineSubscribeForm = React.createRef();
    this.state = {
      submitted: null,
    };
  }

  getRef = (ref: HTMLDivElement) => {
    this.content = ref;
  }

  handleSubscribe = (submitted: string) => {
    this.setState({
      submitted,
    });
  }

  render() {
    const {
      submitted,
    } = this.state;
    const {
      children,
      data: {
        markdownRemark: post,
        site: {
          siteMetadata,
        },
      },
      scroll,
      // visible,
      // headerIsHovered,
    } = this.props;

    const {
      title,
      description,
      path,
      image,
      author,
      keywords,
      form,
      tags,
      credit,
      timeToRead,
      date,
      image_height,
    } = getPostData(post, siteMetadata);

    let sidebarShowHeight = 2500;
    if (this.inlineSubscribeForm && this.inlineSubscribeForm.current) {
      try {
        const c = this.inlineSubscribeForm.current;
        sidebarShowHeight = getPosition(c) + c.clientHeight;
      } catch(err) { }
    }
    const isSidebarVisible = scroll > sidebarShowHeight && scroll < getHeight() - 1000;

    return (
      <React.Fragment>
        <Header
          visible={true}
          subscriberTags={getSubscriberTags({
            post,
            siteMetadata,
          })}
        />
        <div className={styles.container}>
          {writeMetaTags({ post, siteMetadata })}
          <ArticleHeader
            headerIsVisible={false}
            image={image}
            caption={credit}
            title={title}
            timeToRead={timeToRead}
            date={date}
            imageHeight={image_height}
          />
          <div
            className={styles.content}
            ref={this.getRef}
          >
            <div className={styles.children}>
              {insertIntoChildren(
                children,
                getAt('h2'),
                (
                  <SubscribeForm
                    type="inline"
                    getRef={this.inlineSubscribeForm}
                    form={form}
                    onSubscribe={this.handleSubscribe}
                    active={!submitted || submitted === 'inline'}
                    subscriberTags={getSubscriberTags({
                      post,
                      siteMetadata,
                    })}
                  />
                )
              )}
            </div>
            <div
              className={classNames(styles.sidebarContainer, {
                [styles.visible]: isSidebarVisible,
              })}
            >
              <Sidebar
                descriptionPlacement="inside"
                showImage={false}
                form={form}
                container={this.content}
                onSubscribe={this.handleSubscribe}
                active={!submitted || submitted === 'sidebar'}
                subscriberTags={getSubscriberTags({
                  post,
                  siteMetadata,
                })}
              />
            </div>
          </div>
          <hr className="line" />
          <Footer
            path={path}
            form={form}
            onSubscribe={this.handleSubscribe}
            active={!submitted || submitted === 'footer'}
            subscriberTags={getSubscriberTags({
              post,
              siteMetadata,
            })}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Simple;
