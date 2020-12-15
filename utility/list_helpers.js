const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return -1;
  }
  const result = blogs.reduce((acc, blog) => {
    return acc + blog.likes;
  }, 0);
  return result;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return -1;
  }
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > max) {
      max = blogs[i].likes;
      maxIndex = i;
    }
  }
  return blogs[maxIndex];
};

module.exports = { dummy, totalLikes, favoriteBlog };
