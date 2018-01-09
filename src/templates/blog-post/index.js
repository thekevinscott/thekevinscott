import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const Post = styled.div `
  transition-duration: 0.4s;
  // left: ${props => props.visible ? '0px' : '100px'};
  opacity: ${props => props.visible ? '1' : '0'};

  h1 {
    font-size: 38px;
    // margin-left: -2.63px;
    line-height: 1.04;
    letter-spacing: -.015em;
  }
`;

export default class Template extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { visible: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true,
      });
    });
  }

  render() {
    const {
      data: {
        markdownRemark: post,
      },
    } = this.props;

    return (
      <Post visible={this.state.visible}>
        <Helmet title={`${post.frontmatter.title}`} />
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Post>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
