import {
  isAfter,
} from 'utils/getDate';

export const isPublished = now => ({ frontmatter }) => {
  return frontmatter.date && isAfter(frontmatter.date, now);
};
export const hasTitle = ({ frontmatter }) => frontmatter.title.length > 0;

export const getPosts = (posts = [], now = new Date()) => posts
  .map(({ node }) => node)
  .filter(hasTitle)
  .filter(isPublished(now));
