const getTitle = post => {
  const postPath = post.split("/").pop();
  return postPath.split(/[-_]+/).map(part => {
    return `${part[0].toUpperCase()}${part.substring(1)}`;
  }).join(" ");
};

module.exports = getTitle;
