// Middleware to check if the user is logged in
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // Redirect to login if not logged in
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
