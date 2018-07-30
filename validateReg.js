/*********************************************************
 * All kinds of regular
 * @exports Object 
 */

export let validateReg = {
  phone: function(val) {
    let reg = /(^1[3|4|5|7|8|9][0-9]{9}$)/;
    return reg.test(val);
  },
  password: function(val) {
    return val.length > 5 ? false : true;
  },
  email: function(val) {
    let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    return reg.test(val);
  },
  enterPassword: function(val) { 
    return    (val.password == val.enterPassword)
  },
  noteCode: function(val) {
    // phone verification code
    return val.length < 6 ? false : true;
  },
  taxNumber: function(val) {
    // taxNumber verification
    let reg = /^[A-Za-z0-9]{15,}$/.test(val);
    return reg;
  },
  companyAddress: function(val) {
    let reg = /^[\(\)\（\）\u4e00-\u9fa5\w]{2,}$/.test(val);
    return reg;
  },
  telephone: function(val) {
    let reg = /^((\(\d{3,4}\)|\d{3,4}-)?\d{6,8})|(1[3|4|5|7|8|9][0-9]{9})$/.test(val) 
    return reg;
  },
  person: function(val) {
    return val.length >= 2  ? false : true;
  },
  ChineseCharacter: function(val) {
    let reg = /^[\u4e00-\u9fa5]+$/gi.test(val);
    return reg
  },
  qq: function(val) {
    let reg = /^[1-9][0-9]{4,14}$/.test(val.trim());
    return reg
  },
  wechat: function(val) {
    let reg = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/.test(val.trim());
    return reg
  },
  HongKongIdCard: function(val) {
    let reg = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(val.trim());
    return reg
  },
  passport: function(val) {
    let reg = /^[a-zA-Z]{5,17}$/.test(val.trim());
    let reg2 = /^[a-zA-Z0-9]{5,17}$/.test(val.trim());
    return (reg | reg2)
  },
  idcardNum: function(val) {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)$/.test(val.trim());
    return  reg
  },

};
