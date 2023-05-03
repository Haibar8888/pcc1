const isLogin = (req, res, next) => {
  if (req.session.users === null || req.session.users === undefined) {
    req.flash('alertMessage', 'session telah habis silahkan login');
    req.flash('alertStatus', 'danger');
    res.redirect('/admin/signin');
  } else {
    next();
  }
};

module.exports = isLogin;
