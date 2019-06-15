const bar = require('./bar');
const foo = require('./foo');
const alipay = require('./alipay');
const wx = require('./wx');


module.exports = function(app) {
  app.use(bar.routes(), bar.allowedMethods());
  app.use(foo.routes(), foo.allowedMethods());
  app.use(alipay.routes(), alipay.allowedMethods());
  app.use(wx.routes(), wx.allowedMethods());
};