
const seedUserData = require('./userData.json');
const seedPostData = require('./postData.json');
const seedCommentData = require('./commentData.json');

const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUserData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(seedPostData);

  for (const comment of seedCommentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: posts[Math.floor(Math.random() * posts.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
