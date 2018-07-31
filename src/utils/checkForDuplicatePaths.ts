interface IPost {
  node: {
    frontmatter: IFrontmatter;
  };
}

interface IFrontmatter {
  title: string;
  date: string;
  path: string;
};

const dump = ({
  title,
  date,
  path,
}: IFrontmatter) => [
  title,
  date,
  path,
].join(' | ');

const checkForDuplicatePaths = (posts: IPost[]) => {
  const postPaths = {};
  posts.forEach(({
    node: {
      frontmatter,
    },
  }) => {
    if (!postPaths[frontmatter.path]) {
      postPaths[frontmatter.path] = frontmatter;
    } else {
      const msg = `Duplicate posts:

        ${dump(frontmatter)}
        ${dump(postPaths[frontmatter.path])}
        `;
      throw new Error(msg);
    }
  });

  return null;
};

export default checkForDuplicatePaths;
