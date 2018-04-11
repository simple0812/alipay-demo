const bar = require('./bar');
const foo = require('./foo');
const alipay = require('./alipay');


module.exports = function(app) {
  app.use(bar.routes(), bar.allowedMethods());
  app.use(foo.routes(), foo.allowedMethods());
  app.use(alipay.routes(), alipay.allowedMethods());
};