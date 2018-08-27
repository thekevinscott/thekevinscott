import React from 'react';
import WebFont from 'webfontloader';
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
  visible: boolean;
  headerIsHovered: boolean;
}

class Simple extends React.Component<IProps> {
  private content?: HTMLDivElement;

  getRef = (ref: HTMLDivElement) => {
    this.content = ref;
  }

  render() {
    const {
      children,
      data: {
        markdownRemark: post,
        site: {
          siteMetadata,
        },
      },
      visible,
      headerIsHovered,
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

    return (
      <React.Fragment>
        <Header
          visible={visible}
          subscriberTags={getSubscriberTags({
            post,
            siteMetadata,
          })}
        />
        <div className={styles.container}>
          {writeMetaTags({ post, siteMetadata })}
          <ArticleHeader
            headerIsVisible={headerIsHovered}
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
              {children}
            </div>
            <div className={styles.sidebarContainer}>
              <Sidebar
                descriptionPlacement="inside"
                showImage={false}
                form={form}
                container={this.content}
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
