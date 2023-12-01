
const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Dashboard route - Get all user's posts
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add new blog post route
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    logged_in: true,
  });
});

// Other dashboard route handlers as needed

module.exports = router;
