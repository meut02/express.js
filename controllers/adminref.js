const rootDir = require('../util/path');
const path = require('path');
exports.getaddproduct=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

  exports.postaddproduct=(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }