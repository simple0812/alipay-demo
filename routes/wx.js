var router = require('koa-router')();
var Promise = require('bluebird');
var httpHelper = require('../utils/httpHelper');
var sign = require('../utils/sign');

let APPID = 'wx5127fd5d37542c49';
let APPSECRET = 'da7b160bcf2a9768d88e5ab6f2b4eca9';


router.get('/wx/config', async (ctx) => {

  console.log(decodeURIComponent(ctx.query.url));

  // 获取access_token
  // let tokenApi = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`;
  // let res = await httpHelper.request(tokenApi);
  // curl "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5127fd5d37542c49&secret=da7b160bcf2a9768d88e5ab6f2b4eca9"
  let accessToken = '22_Zd8Emhm80qM4d9WnZhBPK3bVuPqh-ko8USukZl_kBKmPlp0XCS2oIb1w7R4i1m8-eDruABbQYQv_ogr-o9tHVQo54Yi9SKRIHljS9LyW1dRaujiydVeoDTEdWDqy_KeEf__f1qUZrrgah9ltBBTjAIAVVN';

  // 获取ticke
  // let ticketApi = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`;
  // let xRes = await httpHelper.request(ticketApi);
  // if (xRes.errcode === 0) {
  //   ctx.body = xRes;
  // } else {
  //   ctx.body = {
  //     err: xRes.errmsg
  //   };
  // }

  let ticket = 'bxLdikRXVbTPdHSM05e5u-KGM3eaJaUmsFF5V94EEuSd12nE_pkjKI0sCLJgyaC2ghZ3CyZDmnV1jFvxkwti1w';

  ctx.body = sign(ticket, ctx.query.url || '');

 
});


module.exports = router;
