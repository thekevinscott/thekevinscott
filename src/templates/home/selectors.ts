import {
  isAfter,
} from 'utils/getDate';

export const isPublished = now => ({ frontmatter }) => {
  if (process.env.NODE_ENV === 'production') {
    return isAfter(frontmatter.date, now);
  }

  return true;
};

export const hasDate = ({ frontmatter }) => frontmatter.date;

export const hasTitle = ({ frontmatter }) => frontmatter.title.length > 0;

export const getPosts = (posts = [], now = new Date()) => posts
  .map(({ node }) => node)
  .filter(hasTitle)
  .filter(hasDate)
  .filter(isPublished(now));
