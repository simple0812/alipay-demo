var router = require('koa-router')();

var path = require('path');
var Alipay = require('../utils/alipay');
var utl = require('../utils/utl');
var outTradeId = Date.now().toString();

var ali = new Alipay({
  appId: '2016091100486755',
  notifyUrl: 'http://10.0.1.162:3008/',
  returnUrl: 'https://m.alipay.com/Gk8NF23',
  rsaPrivate: path.resolve('./config/pem/app_private_key_nonjava.pem'),
  rsaPublic: path.resolve('./config/pem/alipay_public_key_nonjava.pem'),
  sandbox: true,
  signType: 'RSA2'
});


router.get('/api/pay', (ctx, next) => {
  var url = ali.wapPay({
    body: "ttt",
    subject: "ttt1",
    outTradeId: "201503200101010222",
    timeout: '90m',
    amount: "0.1",
    sellerId: '',
    product_code: 'FAST_INSTANT_TRADE_PAY',
    goods_type: "1"
    // return_url:"https://m.alipay.com/Gk8NF23",
  })

  ctx.body = {
    url
  };
});


module.exports = router;
