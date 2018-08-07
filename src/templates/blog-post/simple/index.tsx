import React from 'react';
import WebFont from 'webfontloader';
import Img from 'gatsby-image';
import ArticleHeader from './ArticleHeader';
import Header from 'components/Header';
import Footer from 'components/Footer';
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

const Simple: React.SFC<IProps> = ({
  children,
  data: {
    markdownRemark: post,
    site: {
      siteMetadata,
    },
  },
  visible,
  headerIsHovered,
}) => {
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
      <Header visible={visible} />
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
        <div className={styles.content}>
          {children}
          <hr className="line" />
        </div>
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

export default Simple;
