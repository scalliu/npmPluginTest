import { defaultMsgWarn } from "./defaultMsgWarn";
import { validateReg } from "./validateReg";

/**************************************************************************
 * @function validate
 * Return  the verfy failed information
 * @param {String} value
 * @param {Array} type
 * @param {String} msgWarn    Your can  custom error message or  use defaultMsgWran
 * @return {Array | Boolean}
 */

function validate(value, type , msgWarn  = defaultMsgWarn  ) {
  // 一对多验证
  if (Array.isArray(type)) {
    var result = [];
    for (var p in type) {
      if (!validateReg[type[p]]) {
        throw "检测类型不存在";
      } else if (!validateReg[type[p]](value)) {
          console.log('企业热不',value,msgWarn ,msgWarn  |  msgWarn[type[p]] )
        result.push({ [type[p]]:msgWarn  ||  msgWarn[type[p]] });
      }
    }
  } else {
    throw "检查类型只能为数组";
  }
  return result.length > 0 ? result : true;
}


/**************************************************************************
 * @function validateObject
 * Returns the verify failed informations
 * @param {Object} value
 * @return {Array}
 *
 * @example
 * validateObject({email: "1@qq.com"})
 * //return [{email: "邮箱不正确"},{phone: "手机号码不正确"}]
 *
 */

function validateObject(value) {
  if (value instanceof Object) {
    var result = [];
    for (var p in value) {
      if (!validateReg[p]) {
        throw "检测类型不存在";
      }
      if (!validateReg[p](value[p])) {
        //筛选报错的信息
        result.push({ [p]: defaultMsgWarn[p] });
      }
    }
  } else {
    throw "检查类型只能为对象";
  }
//   console.log(" 对象传入结果判断", result);
  return result.length > 0 ? result : true;
}

/**************************************************************************
 * @function  Detect is constructor funtion
 * Returns the verify failed informations
 * @param {Object} value
 * @return
 */

let Detect = function() {
  this.result = [];
};


/**************************************************************************
 * @function Detect#detectAll
 *  Suitable for individual validate value
 * @param {String} value
 * @param {Array} type
 * @param {String} customMsgWran   Your can  custom error message , if value verify failed informations
 * @return {Array} verify failed informations
 *
 * @example
 *  var _c = Detect#detectAll('1231414241',['phone'],'custom Message Wran'  )
 *  var  _a = Detect#detectAll('22@qq.com',['email']  )
 *  Detect#getAllResult()
 * //return   [{phone: "custom Message Wran"}]
 * @example
 * Detect#getAllResult({'email':'22@qq.com,'phone':'1231414241'})
 * //return   [{phone: "手机号码不正确"}]
 */

Detect.prototype.detectAll = function(value, type,customMsgWran) {
  let _result = validate(value, type,customMsgWran); //return Array
  this.result.push(..._result);
  return _result;
};

/**************************************************************************
 *  @function Detect#getAllResult
 * Returns the verify failed informations
 * @param {Object|undefined} value
 * @return     {Array} verify failed informations
 * @example
 * allDetect#getAllResult({'email':'qq@cc.com','phone':'123'})
 * //return   [{phone: "手机号码不正确"}]
 */

Detect.prototype.getAllResult = function(value) {
  //判断是否全部为true
  //   console.log(this.result, "数组结果");
  // 判断是否为对象
  if (!Array.isArray(value) && value instanceof Object) {
    return validateObject(value);
  } else {
    // let _result = this.result[0];
    //返回第一个错误
    return this.result;
  }
};

let allDetect = new Detect();

export { validate, allDetect };
