(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/index/index.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./src/libs/taro-ui/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);






var _dec, _class;






var Index = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[/* connect */ "b"])(function (_ref) {
  var common = _ref.common;
  return {
    systemInfo: common.systemInfo
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component); // config: Config = {
  //   navigationBarTitleText: '首页'
  // }


  function Index(props) {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index).call(this, props));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      console.dir(this.props.systemInfo);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "index"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], null, "hello world")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtButton */ "a"], {
        type: "primary"
      }, "nihaa"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/libs/taro-ui/common/component.js":
/*!**********************************************!*\
  !*** ./src/libs/taro-ui/common/component.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtComponent; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var objectToString = function objectToString(style) {
  if (style && Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(style) === 'object') {
    var styleStr = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += "".concat(lowerCaseKey, ":").concat(style[key], ";");
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }

  return '';
};

var AtComponent = /*#__PURE__*/function (_Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtComponent, _Component);

  function AtComponent() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtComponent);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtComponent).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtComponent, [{
    key: "mergeStyle",

    /**
     * 合并 style
     * @param {Object|String} style1
     * @param {Object|String} style2
     * @returns {String}
     */
    value: function mergeStyle(style1, style2) {
      if (style1 && Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(style1) === 'object' && style2 && Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(style2) === 'object') {
        return Object.assign({}, style1, style2);
      }

      return objectToString(style1) + objectToString(style2);
    }
  }]);

  return AtComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtComponent, "options", {
  addGlobalClass: true
});



/***/ }),

/***/ "./src/libs/taro-ui/common/utils.ts":
/*!******************************************!*\
  !*** ./src/libs/taro-ui/common/utils.ts ***!
  \******************************************/
/*! exports provided: delay, delayQuerySelector, uuid, getEventDetail, initTestEnv, isTest, pxTransform, handleTouchScroll, delayGetClientRect, delayGetScrollOffset */
/*! exports used: delayGetClientRect, delayGetScrollOffset, delayQuerySelector, getEventDetail, handleTouchScroll, initTestEnv, isTest, pxTransform, uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* unused harmony export delay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return delayQuerySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEventDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return initTestEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pxTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleTouchScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delayGetClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delayGetScrollOffset; });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getEnv();

function delay() {
  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 25);
  });
}

function delayQuerySelector(_, selectorStr) {
  var delayTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.createSelectorQuery();
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function delayGetScrollOffset(_ref) {
  var _ref$delayTime = _ref.delayTime,
      delayTime = _ref$delayTime === void 0 ? 500 : _ref$delayTime;
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.createSelectorQuery().selectViewport().scrollOffset().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function delayGetClientRect(_ref2) {
  var _ = _ref2._,
      selectorStr = _ref2.selectorStr,
      _ref2$delayTime = _ref2.delayTime,
      delayTime = _ref2$delayTime === void 0 ? 500 : _ref2$delayTime;
  // const $scope =
  //   ENV === Taro.ENV_TYPE.WEB || ENV === Taro.ENV_TYPE.SWAN ? self : self.$scope
  var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.createSelectorQuery();
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function uuid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      value[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r; // rfc4122 requires these characters

    /* eslint-disable-next-line */

    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4'; // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return value.join('');
}

function getEventDetail(event) {
  var detail;

  switch (ENV) {
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;

    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }

  return detail;
}

function initTestEnv() {
  if (false) {}
}

function isTest() {
  return "development" === 'test';
}

var scrollTop = 0;

function handleTouchScroll(flag) {
  if (ENV !== _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.ENV_TYPE.WEB) {
    return;
  }

  if (flag) {
    scrollTop = document.documentElement.scrollTop; // 使body脱离文档流

    document.body.classList.add('at-frozen'); // 把脱离文档流的body拉上去！否则页面会回到顶部！

    document.body.style.top = "".concat(-scrollTop, "px");
  } else {
    document.body.style.top = '';
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}

function pxTransform(size) {
  if (!size) return '';
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.pxTransform(size);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/libs/taro-ui/components/accordion/index.js":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/accordion/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");













Object(_common_utils__WEBPACK_IMPORTED_MODULE_12__[/* initTestEnv */ "f"])(); // 文档

var AtAccordion = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtAccordion, _AtComponent);

  function AtAccordion() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtAccordion);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtAccordion).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function (event) {
      var open = _this.props.open;
      if (!_this.isCompleted) return;

      _this.props.onClick(!open, event);
    });

    _this.isCompleted = true;
    _this.startOpen = false;
    _this.state = {
      wrapperHeight: ''
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtAccordion, [{
    key: "toggleWithAnimation",
    value: function toggleWithAnimation() {
      var _this2 = this;

      var _this$props = this.props,
          open = _this$props.open,
          isAnimation = _this$props.isAnimation;
      if (!this.isCompleted || !isAnimation) return;
      this.isCompleted = false;
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_12__[/* delayQuerySelector */ "c"])(this, '.at-accordion__body', 0).then(function (rect) {
        var height = parseInt(rect[0].height);
        var startHeight = open ? height : 0;
        var endHeight = open ? 0 : height;
        _this2.startOpen = false;

        _this2.setState({
          wrapperHeight: startHeight
        }, function () {
          setTimeout(function () {
            _this2.setState({
              wrapperHeight: endHeight
            }, function () {
              setTimeout(function () {
                _this2.isCompleted = true;

                _this2.setState({});
              }, 700);
            });
          }, 100);
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.props.open) {
        this.startOpen = nextProps.open && nextProps.isAnimation;
        this.toggleWithAnimation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          title = _this$props2.title,
          icon = _this$props2.icon,
          hasBorder = _this$props2.hasBorder,
          open = _this$props2.open,
          note = _this$props2.note;
      var wrapperHeight = this.state.wrapperHeight;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-accordion', className);
      var prefixClass = icon && icon.prefixClass || 'at-icon';
      var iconCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_classNames, prefixClass, true), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_classNames, "".concat(prefixClass, "-").concat(icon && icon.value), icon && icon.value), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_classNames, 'at-accordion__icon', true), _classNames));
      var headerCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-accordion__header', {
        'at-accordion__header--noborder': !hasBorder
      });
      var arrowCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-accordion__arrow', {
        'at-accordion__arrow--folded': !!open
      });
      var contentCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-accordion__content', {
        'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
      });
      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && "".concat(icon.size, "px") || ''
      };
      var contentStyle = {
        height: "".concat(wrapperHeight, "px")
      };

      if (this.isCompleted) {
        contentStyle.height = '';
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: headerCls,
        onClick: this.handleClick
      }, icon && icon.value && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "m"], {
        className: iconCls,
        style: iconStyle
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-accordion__info"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-accordion__info__title"
      }, title), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-accordion__info__note"
      }, note)), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: arrowCls
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "m"], {
        className: "at-icon at-icon-chevron-down"
      }))), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        style: contentStyle,
        className: contentCls
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-accordion__body"
      }, this.props.children)));
    }
  }]);

  return AtAccordion;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: {},
  hasBorder: true,
  isAnimation: true,
  onClick: function onClick() {}
};
AtAccordion.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  open: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  isAnimation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  note: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  hasBorder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/action-sheet/body/index.js":
/*!****************************************************************!*\
  !*** ./src/libs/taro-ui/components/action-sheet/body/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtActionSheetBody; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");










var AtActionSheetBody = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtActionSheetBody, _AtComponent);

  function AtActionSheetBody() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtActionSheetBody);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtActionSheetBody).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtActionSheetBody, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()('at-action-sheet__body', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtActionSheetBody;
}(_common_component__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ "./src/libs/taro-ui/components/action-sheet/body/item/index.js":
/*!*********************************************************************!*\
  !*** ./src/libs/taro-ui/components/action-sheet/body/item/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/component */ "./src/libs/taro-ui/common/component.js");














var AtActionSheetItem = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtActionSheetItem, _AtComponent);

  function AtActionSheetItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtActionSheetItem);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtActionSheetItem)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onClick)) {
        var _this$props;

        (_this$props = _this.props).onClick.apply(_this$props, arguments);
      }
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtActionSheetItem, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-action-sheet__item', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: rootClass,
        onClick: this.handleClick
      }, this.props.children);
    }
  }]);

  return AtActionSheetItem;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtActionSheetItem.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/action-sheet/footer/index.js":
/*!******************************************************************!*\
  !*** ./src/libs/taro-ui/components/action-sheet/footer/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtActionSheetFooter; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");














var AtActionSheetFooter = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtActionSheetFooter, _AtComponent);

  function AtActionSheetFooter() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtActionSheetFooter);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtActionSheetFooter)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onClick)) {
        var _this$props;

        (_this$props = _this.props).onClick.apply(_this$props, arguments);
      }
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtActionSheetFooter, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-action-sheet__footer', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        onClick: this.handleClick,
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtActionSheetFooter;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtActionSheetFooter.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/action-sheet/header/index.js":
/*!******************************************************************!*\
  !*** ./src/libs/taro-ui/components/action-sheet/header/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtActionSheetHeader; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");










var AtActionSheetHeader = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtActionSheetHeader, _AtComponent);

  function AtActionSheetHeader() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtActionSheetHeader);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtActionSheetHeader).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtActionSheetHeader, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()('at-action-sheet__header', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtActionSheetHeader;
}(_common_component__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ "./src/libs/taro-ui/components/action-sheet/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/action-sheet/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _body_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/index */ "./src/libs/taro-ui/components/action-sheet/body/index.js");
/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/index */ "./src/libs/taro-ui/components/action-sheet/header/index.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/index */ "./src/libs/taro-ui/components/action-sheet/footer/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");

















var AtActionSheet = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtActionSheet, _AtComponent);

  function AtActionSheet(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtActionSheet);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtActionSheet).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClose", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onClose)) {
        _this.props.onClose();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleCancel", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onCancel)) {
        return _this.props.onCancel();
      }

      _this.close();
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "close", function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchMove", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtActionSheet, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
        !isOpened && this.handleClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          cancelText = _this$props.cancelText,
          className = _this$props.className;
      var _isOpened = this.state._isOpened;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-action-sheet', {
        'at-action-sheet--active': _isOpened
      }, className);
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootClass,
        onTouchMove: this.handleTouchMove
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        onClick: this.close,
        className: "at-action-sheet__overlay"
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-action-sheet__container"
      }, title && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_header_index__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null, title), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_body_index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null, this.props.children), cancelText && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_footer_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        onClick: this.handleCancel
      }, cancelText)));
    }
  }]);

  return AtActionSheet;
}(_common_component__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"]);


AtActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
};
AtActionSheet.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};

/***/ }),

/***/ "./src/libs/taro-ui/components/activity-indicator/index.js":
/*!*****************************************************************!*\
  !*** ./src/libs/taro-ui/components/activity-indicator/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtActivityIndicator; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loading_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/index */ "./src/libs/taro-ui/components/loading/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtActivityIndicator = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtActivityIndicator, _AtComponent);

  function AtActivityIndicator() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtActivityIndicator);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtActivityIndicator).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtActivityIndicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          size = _this$props.size,
          mode = _this$props.mode,
          content = _this$props.content,
          isOpened = _this$props.isOpened;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-activity-indicator', {
        'at-activity-indicator--center': mode === 'center',
        'at-activity-indicator--isopened': isOpened
      }, this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: rootClass
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-activity-indicator__body"
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_loading_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        size: size,
        color: color
      })), content && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
        className: "at-activity-indicator__content"
      }, content));
    }
  }]);

  return AtActivityIndicator;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtActivityIndicator.defaultProps = {
  size: 0,
  mode: '',
  color: '',
  content: '',
  className: '',
  isOpened: true
};
AtActivityIndicator.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

/***/ }),

/***/ "./src/libs/taro-ui/components/avatar/index.js":
/*!*****************************************************!*\
  !*** ./src/libs/taro-ui/components/avatar/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};

var AtAvatar = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtAvatar, _AtComponent);

  function AtAvatar() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtAvatar);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtAvatar).apply(this, arguments));
    _this.state = {
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.WEAPP
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtAvatar, [{
    key: "render",
    value: function render() {
      var _classObject;

      var _this$props = this.props,
          size = _this$props.size,
          circle = _this$props.circle,
          image = _this$props.image,
          text = _this$props.text,
          openData = _this$props.openData,
          customStyle = _this$props.customStyle;
      var rootClassName = ['at-avatar'];
      var classObject = (_classObject = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, "at-avatar--".concat(SIZE_CLASS[size]), SIZE_CLASS[size]), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-avatar--circle', circle), _classObject);
      var letter = '';
      if (text) letter = text[0];
      var elem;

      if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
        elem = nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* OpenData */ "f"], {
          type: openData.type
        });
      } else if (image) {
        elem = nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
          className: "at-avatar__img",
          src: image
        });
      } else {
        elem = nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
          className: "at-avatar__text"
        }, letter);
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(rootClassName, classObject, this.props.className),
        style: customStyle
      }, elem);
    }
  }]);

  return AtAvatar;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  openData: {},
  customStyle: {},
  className: ''
};
AtAvatar.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['large', 'normal', 'small']),
  circle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  text: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  openData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string])
};

/***/ }),

/***/ "./src/libs/taro-ui/components/badge/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/badge/index.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtBadge; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/_lodash@4.17.15@lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtBadge = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtBadge, _AtComponent);

  function AtBadge() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtBadge);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtBadge).apply(this, arguments));
    _this.state = {};
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtBadge, [{
    key: "formatValue",
    value: function formatValue(value, maxValue) {
      if (value === '' || value === null) return '';
      var numValue = +value;

      if (lodash_isNaN__WEBPACK_IMPORTED_MODULE_8___default()(numValue)) {
        return value;
      }

      return numValue > maxValue ? "".concat(maxValue, "+") : numValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dot = _this$props.dot,
          value = _this$props.value,
          maxValue = _this$props.maxValue,
          customStyle = _this$props.customStyle;
      var rootClassName = ['at-badge'];
      var val = this.formatValue(value, maxValue);
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(rootClassName, this.props.className),
        style: customStyle
      }, this.props.children, dot ? nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-badge__dot"
      }) : val !== '' && nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-badge__num"
      }, val));
    }
  }]);

  return AtBadge;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
};
AtBadge.propTypes = {
  dot: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  maxValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string])
};

/***/ }),

/***/ "./src/libs/taro-ui/components/button/index.js":
/*!*****************************************************!*\
  !*** ./src/libs/taro-ui/components/button/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtButton; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _loading_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/index */ "./src/libs/taro-ui/components/loading/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");













var SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
};

var AtButton = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtButton, _AtComponent);

  function AtButton() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtButton);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtButton).apply(this, arguments));
    _this.state = {
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.WEB,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.ALIPAY
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtButton, [{
    key: "onClick",
    value: function onClick() {
      if (!this.props.disabled) {
        var _this$props;

        this.props.onClick && (_this$props = this.props).onClick.apply(_this$props, arguments);
      }
    }
  }, {
    key: "onGetUserInfo",
    value: function onGetUserInfo() {
      var _this$props2;

      this.props.onGetUserInfo && (_this$props2 = this.props).onGetUserInfo.apply(_this$props2, arguments);
    }
  }, {
    key: "onContact",
    value: function onContact() {
      var _this$props3;

      this.props.onContact && (_this$props3 = this.props).onContact.apply(_this$props3, arguments);
    }
  }, {
    key: "onGetPhoneNumber",
    value: function onGetPhoneNumber() {
      var _this$props4;

      this.props.onGetPhoneNumber && (_this$props4 = this.props).onGetPhoneNumber.apply(_this$props4, arguments);
    }
  }, {
    key: "onError",
    value: function onError() {
      var _this$props5;

      this.props.onError && (_this$props5 = this.props).onError.apply(_this$props5, arguments);
    }
  }, {
    key: "onOpenSetting",
    value: function onOpenSetting() {
      var _this$props6;

      this.props.onOpenSetting && (_this$props6 = this.props).onOpenSetting.apply(_this$props6, arguments);
    }
  }, {
    key: "onSumit",
    value: function onSumit() {
      if (this.state.isWEAPP || this.state.isWEB) {
        this.$scope.triggerEvent('submit', arguments[0].detail, {
          bubbles: true,
          composed: true
        });
      }
    }
  }, {
    key: "onReset",
    value: function onReset() {
      if (this.state.isWEAPP || this.state.isWEB) {
        this.$scope.triggerEvent('reset', arguments[0].detail, {
          bubbles: true,
          composed: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classObject;

      var _this$props7 = this.props,
          _this$props7$size = _this$props7.size,
          size = _this$props7$size === void 0 ? 'normal' : _this$props7$size,
          _this$props7$type = _this$props7.type,
          type = _this$props7$type === void 0 ? '' : _this$props7$type,
          circle = _this$props7.circle,
          full = _this$props7.full,
          loading = _this$props7.loading,
          disabled = _this$props7.disabled,
          customStyle = _this$props7.customStyle,
          formType = _this$props7.formType,
          openType = _this$props7.openType,
          lang = _this$props7.lang,
          sessionFrom = _this$props7.sessionFrom,
          sendMessageTitle = _this$props7.sendMessageTitle,
          sendMessagePath = _this$props7.sendMessagePath,
          sendMessageImg = _this$props7.sendMessageImg,
          showMessageCard = _this$props7.showMessageCard,
          appParameter = _this$props7.appParameter;
      var _this$state = this.state,
          isWEAPP = _this$state.isWEAPP,
          isALIPAY = _this$state.isALIPAY,
          isWEB = _this$state.isWEB;
      var rootClassName = ['at-button'];
      var classObject = (_classObject = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, "at-button--".concat(SIZE_CLASS[size]), SIZE_CLASS[size]), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-button--disabled', disabled), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, "at-button--".concat(type), TYPE_CLASS[type]), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-button--circle', circle), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-button--full', full), _classObject);
      var loadingColor = type === 'primary' ? '#fff' : '';
      var loadingSize = size === 'small' ? '30' : 0;
      var component;

      if (loading) {
        component = nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: "at-button__icon"
        }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_loading_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
          color: loadingColor,
          size: loadingSize
        }));
        rootClassName.push('at-button--icon');
      }

      var webButton = nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
        className: "at-button__wxbutton",
        lang: lang,
        type: formType === 'submit' || formType === 'reset' ? formType : 'button'
      });
      var button = nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], {
        className: "at-button__wxbutton",
        formType: formType,
        openType: openType,
        lang: lang,
        sessionFrom: sessionFrom,
        sendMessageTitle: sendMessageTitle,
        sendMessagePath: sendMessagePath,
        sendMessageImg: sendMessageImg,
        showMessageCard: showMessageCard,
        appParameter: appParameter,
        onGetUserInfo: this.onGetUserInfo.bind(this),
        onGetPhoneNumber: this.onGetPhoneNumber.bind(this),
        onOpenSetting: this.onOpenSetting.bind(this),
        onError: this.onError.bind(this),
        onContact: this.onContact.bind(this)
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(rootClassName, classObject, this.props.className),
        style: customStyle,
        onClick: this.onClick.bind(this)
      }, isWEB && !disabled && webButton, isWEAPP && !disabled && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Form */ "b"], {
        reportSubmit: true,
        onSubmit: this.onSumit.bind(this),
        onReset: this.onReset.bind(this)
      }, button), isALIPAY && !disabled && button, component, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-button__text"
      }, this.props.children));
    }
  }]);

  return AtButton;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtButton.defaultProps = {
  size: 'normal',
  type: '',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  onClick: function onClick() {},
  // Button props
  formType: '',
  openType: '',
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
  onGetUserInfo: function onGetUserInfo() {},
  onContact: function onContact() {},
  onGetPhoneNumber: function onGetPhoneNumber() {},
  onError: function onError() {},
  onOpenSetting: function onOpenSetting() {}
};
AtButton.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['normal', 'small']),
  type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['primary', 'secondary', '']),
  circle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  full: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  formType: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['submit', 'reset', '']),
  openType: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', '']),
  lang: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  sessionFrom: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  sendMessageTitle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  sendMessagePath: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  sendMessageImg: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  showMessageCard: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  appParameter: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  onGetUserInfo: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onContact: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onGetPhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onOpenSetting: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/body/index.tsx":
/*!*************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/body/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtCalendarBody; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.8.21@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _ui_day_list_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/day-list/index */ "./src/libs/taro-ui/components/calendar/ui/day-list/index.tsx");
/* harmony import */ var _ui_date_list_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/date-list/index */ "./src/libs/taro-ui/components/calendar/ui/date-list/index.tsx");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/helper */ "./src/libs/taro-ui/components/calendar/common/helper.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/utils */ "./src/libs/taro-ui/common/utils.ts");















var ANIMTE_DURATION = 300;
var defaultProps = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
};

var AtCalendarBody = /*#__PURE__*/function (_React$Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCalendarBody, _React$Component);

  function AtCalendarBody(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCalendarBody);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCalendarBody).call(this, props));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "changeCount", 0);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "currentSwiperIndex", 1);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "startX", 0);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "swipeStartPoint", 0);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "isPreMonth", false);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "maxWidth", 0);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "isTouching", false);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "generateFunc", void 0);

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "getGroups", function (generateDate, selectedDate) {
      var dayjsDate = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(generateDate);
      var arr = [];

      var preList = _this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);

      var nowList = _this.generateFunc(generateDate, selectedDate, true);

      var nextList = _this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);

      var preListIndex = _this.currentSwiperIndex === 0 ? 2 : _this.currentSwiperIndex - 1;
      var nextListIndex = _this.currentSwiperIndex === 2 ? 0 : _this.currentSwiperIndex + 1;
      arr[preListIndex] = preList;
      arr[nextListIndex] = nextList;
      arr[_this.currentSwiperIndex] = nowList;
      return arr;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchStart", function (e) {
      if (!_this.props.isSwiper) {
        return;
      }

      _this.isTouching = true;
      _this.startX = e.touches[0].clientX;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchMove", function (e) {
      if (!_this.props.isSwiper) {
        return;
      }

      if (!_this.isTouching) return;
      var clientX = e.touches[0].clientX;
      var offsetSize = clientX - _this.startX;

      _this.setState({
        offsetSize: offsetSize
      });
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchEnd", function () {
      if (!_this.props.isSwiper) {
        return;
      }

      var offsetSize = _this.state.offsetSize;
      _this.isTouching = false;
      var isRight = offsetSize > 0;
      var breakpoint = _this.maxWidth / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        var res = isRight ? _this.maxWidth : -_this.maxWidth;
        return _this.animateMoveSlide(res, function () {
          _this.props.onSwipeMonth(isRight ? -1 : 1);
        });
      }

      _this.animateMoveSlide(0);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleChange", function (e) {
      var _e$detail = e.detail,
          current = _e$detail.current,
          source = _e$detail.source;

      if (source === 'touch') {
        _this.currentSwiperIndex = current;
        _this.changeCount = _this.changeCount + 1;
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleAnimateFinish", function () {
      if (_this.changeCount > 0) {
        _this.props.onSwipeMonth(_this.isPreMonth ? -_this.changeCount : _this.changeCount);

        _this.changeCount = 0;
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleSwipeTouchStart", function (e) {
      var _e$changedTouches$ = e.changedTouches[0],
          clientY = _e$changedTouches$.clientY,
          clientX = _e$changedTouches$.clientX;
      _this.swipeStartPoint = _this.props.isVertical ? clientY : clientX;
    });

    var validDates = props.validDates,
        marks = props.marks,
        format = props.format,
        minDate = props.minDate,
        maxDate = props.maxDate,
        _generateDate = props.generateDate,
        _selectedDate = props.selectedDate,
        selectedDates = props.selectedDates;
    _this.generateFunc = Object(_common_helper__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });

    var listGroup = _this.getGroups(_generateDate, _selectedDate);

    _this.state = {
      listGroup: listGroup,
      offsetSize: 0,
      isAnimate: false
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCalendarBody, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.receiveProps(nextProps);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.receiveProps(nextProps);
    }
  }, {
    key: "receiveProps",
    value: function receiveProps(nextProps) {
      var validDates = nextProps.validDates,
          marks = nextProps.marks,
          format = nextProps.format,
          minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          generateDate = nextProps.generateDate,
          selectedDate = nextProps.selectedDate,
          selectedDates = nextProps.selectedDates;
      this.generateFunc = Object(_common_helper__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])({
        validDates: validDates,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
        marks: marks,
        selectedDates: selectedDates
      });
      var listGroup = this.getGroups(generateDate, selectedDate);
      this.setState({
        offsetSize: 0,
        listGroup: listGroup
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_common_utils__WEBPACK_IMPORTED_MODULE_14__[/* delayQuerySelector */ "c"])(this, '.at-calendar-slider__main').then(function (res) {
        _this2.maxWidth = res[0].width;
      });
    }
  }, {
    key: "animateMoveSlide",
    value: function animateMoveSlide(offset, callback) {
      var _this3 = this;

      this.setState({
        isAnimate: true
      }, function () {
        _this3.setState({
          offsetSize: offset
        });

        setTimeout(function () {
          _this3.setState({
            isAnimate: false
          }, function () {
            callback && callback();
          });
        }, ANIMTE_DURATION);
      });
    }
  }, {
    key: "handleSwipeTouchEnd",
    value: function handleSwipeTouchEnd(e) {
      var _e$changedTouches$2 = e.changedTouches[0],
          clientY = _e$changedTouches$2.clientY,
          clientX = _e$changedTouches$2.clientX;
      this.isPreMonth = this.props.isVertical ? clientY - this.swipeStartPoint > 0 : clientX - this.swipeStartPoint > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var isSwiper = this.props.isSwiper;
      var _this$state = this.state,
          isAnimate = _this$state.isAnimate,
          offsetSize = _this$state.offsetSize,
          listGroup = _this$state.listGroup;

      if (!isSwiper) {
        return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('main', 'at-calendar-slider__main', "at-calendar-slider__main--".concat("weapp"))
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_ui_day_list_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "main__body body"
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "body__slider body__slider--now"
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_ui_date_list_index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          list: listGroup[1].list,
          onClick: this.props.onDayClick,
          onLongClick: this.props.onLongClick
        }))));
      }
      /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */


      if (false) {}

      return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('main', 'at-calendar-slider__main', "at-calendar-slider__main--".concat("weapp"))
      }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_ui_day_list_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Swiper */ "j"], {
        circular: true,
        current: 1,
        skipHiddenItemLayout: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('main__body'),
        onChange: this.handleChange,
        vertical: this.props.isVertical,
        onAnimationFinish: this.handleAnimateFinish,
        onTouchEnd: this.handleSwipeTouchEnd,
        onTouchStart: this.handleSwipeTouchStart
      }, listGroup.map(function (item, key) {
        return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* SwiperItem */ "k"], {
          key: item.value,
          itemId: key.toString()
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_ui_date_list_index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          list: item.list,
          onClick: _this4.props.onDayClick,
          onLongClick: _this4.props.onLongClick
        }));
      })));
    }
  }]);

  return AtCalendarBody;
}(nervjs__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtCalendarBody, "options", {
  addGlobalClass: true
});

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtCalendarBody, "defaultProps", defaultProps);



/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/common/constant.ts":
/*!*****************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/common/constant.ts ***!
  \*****************************************************************/
/*! exports provided: TYPE_PRE_MONTH, TYPE_NOW_MONTH, TYPE_NEXT_MONTH */
/*! exports used: TYPE_NEXT_MONTH, TYPE_NOW_MONTH, TYPE_PRE_MONTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TYPE_PRE_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPE_NOW_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TYPE_NEXT_MONTH; });
var TYPE_PRE_MONTH = -1;
var TYPE_NOW_MONTH = 0;
var TYPE_NEXT_MONTH = 1;

/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/common/helper.ts":
/*!***************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/common/helper.ts ***!
  \***************************************************************/
/*! exports provided: default, getGenerateDate */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateCalendarGroup; });
/* unused harmony export getGenerateDate */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.8.21@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/_lodash@4.17.15@lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins */ "./src/libs/taro-ui/components/calendar/common/plugins.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/libs/taro-ui/components/calendar/common/constant.ts");




var TOTAL = 7 * 6;

function getFullItem(item, options, selectedDate, isShowStatus) {
  if (!isShowStatus) return item;
  var bindedPlugins = _plugins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].map(function (fn) {
    return fn.bind(null, {
      options: options,
      selectedDate: selectedDate
    });
  });
  return lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()(bindedPlugins)(item);
}

function generateCalendarGroup(options) {
  return function (generateDate, selectedDate, isShowStatus) {
    var date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(generateDate);
    var format = options.format; // 获取生成日期的第一天 和 最后一天

    var firstDate = date.startOf('month');
    var lastDate = date.endOf('month');
    var preMonthDate = date.subtract(1, 'month');
    var list = [];
    var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天

    var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
    // 生成上个月的日期

    for (var _i = 1; _i <= preMonthLastDay + 1; _i++) {
      var thisDate = firstDate.subtract(_i, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: _constant__WEBPACK_IMPORTED_MODULE_3__[/* TYPE_PRE_MONTH */ "c"],
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }

    list.reverse(); // 生成这个月的日期

    for (var _i2 = 0; _i2 < nowMonthDays; _i2++) {
      var _thisDate = firstDate.add(_i2, 'day').startOf('day');

      var _item = {
        marks: [],
        _value: _thisDate,
        text: _thisDate.date(),
        type: _constant__WEBPACK_IMPORTED_MODULE_3__[/* TYPE_NOW_MONTH */ "b"],
        value: _thisDate.format(format)
      };
      _item = getFullItem(_item, options, selectedDate, isShowStatus);
      list.push(_item);
    } // 生成下个月的日期


    var i = 1;

    while (list.length < TOTAL) {
      var _thisDate2 = lastDate.add(i++, 'day').startOf('day');

      var _item2 = {
        marks: [],
        _value: _thisDate2,
        text: _thisDate2.date(),
        type: _constant__WEBPACK_IMPORTED_MODULE_3__[/* TYPE_NEXT_MONTH */ "a"],
        value: _thisDate2.format(format)
      };
      _item2 = getFullItem(_item2, options, selectedDate, isShowStatus);
      list.push(_item2);
    }

    return {
      list: list,
      value: generateDate
    };
  };
}
function getGenerateDate(date) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).startOf('month');
}

/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/common/plugins.ts":
/*!****************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/common/plugins.ts ***!
  \****************************************************************/
/*! exports provided: handleActive, handleMarks, handleDisabled, handleValid, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handleActive */
/* unused harmony export handleMarks */
/* unused harmony export handleDisabled */
/* unused harmony export handleValid */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.8.21@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/_lodash@4.17.15@lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);


function handleActive(args, item) {
  var selectedDate = args.selectedDate;
  var _value = item._value;
  var start = selectedDate.start,
      end = selectedDate.end;
  var dayjsEnd = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(end);
  var dayjsStart = start ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start) : dayjsEnd;
  item.isSelected = _value.isSame(dayjsEnd) || _value.isSame(dayjsStart) || _value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd);
  item.isSelectedHead = _value.isSame(dayjsStart);
  item.isSelectedTail = _value.isSame(dayjsEnd);
  item.isToday = _value.diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(Date.now()).startOf('day'), 'day') === 0;
  return item;
}
function handleMarks(args, item) {
  var options = args.options;
  var _value = item._value;
  var marks = options.marks;
  var markList = marks.filter(function (mark) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(mark.value).startOf('day').isSame(_value);
  });
  item.marks = markList.slice(0, 1);
  return item;
} // export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options
// if (selectedDates.length === 0) return args
// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item
//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }
//   const { start, end } = date
//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')
//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
//   item.isHead = item.isHead || _value.isSame(dayjsStart)
//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })
//   return item
// }

function handleDisabled(args, item) {
  var options = args.options;
  var _value = item._value;
  var minDate = options.minDate,
      maxDate = options.maxDate;
  var dayjsMinDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(minDate);
  var dayjsMaxDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(maxDate);
  item.isDisabled = !!(minDate && _value.isBefore(dayjsMinDate)) || !!(maxDate && _value.isAfter(dayjsMaxDate));
  return item;
}
function handleValid(args, item) {
  var options = args.options;
  var _value = item._value;
  var validDates = options.validDates;

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(validDates)) {
    var isInclude = validDates.some(function (date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date.value).startOf('day').isSame(_value);
    });
    item.isDisabled = !isInclude;
  }

  delete item._value;
  return item;
}
/* harmony default export */ __webpack_exports__["a"] = ([handleActive, handleMarks, handleDisabled, handleValid]);

/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/controller/index.tsx":
/*!*******************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/controller/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtCalendarController; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.8.21@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");











var AtCalendarController = /*#__PURE__*/function (_React$Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCalendarController, _React$Component);

  function AtCalendarController() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCalendarController);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCalendarController).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCalendarController, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          generateDate = _this$props.generateDate,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          monthFormat = _this$props.monthFormat,
          hideArrow = _this$props.hideArrow;
      var dayjsDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(generateDate);
      var dayjsMinDate = !!minDate && dayjs__WEBPACK_IMPORTED_MODULE_6___default()(minDate);
      var dayjsMaxDate = !!maxDate && dayjs__WEBPACK_IMPORTED_MODULE_6___default()(maxDate);
      var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
      var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
      var minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : '';
      var maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : '';
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-calendar__controller controller"
      }, hideArrow ? null : nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('controller__arrow controller__arrow--left', {
          'controller__arrow--disabled': isMinMonth
        }),
        onClick: this.props.onPreMonth.bind(this, isMinMonth)
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Picker */ "g"], {
        mode: "date",
        fields: "month",
        end: maxDateValue,
        start: minDateValue,
        onChange: this.props.onSelectDate,
        value: dayjsDate.format('YYYY-MM')
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "controller__info"
      }, dayjsDate.format(monthFormat))), hideArrow ? null : nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('controller__arrow controller__arrow--right', {
          'controller__arrow--disabled': isMaxMonth
        }),
        onClick: this.props.onNextMonth.bind(this, isMaxMonth)
      }));
    }
  }]);

  return AtCalendarController;
}(nervjs__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCalendarController, "options", {
  addGlobalClass: true
});



/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/index.tsx":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/_dayjs@1.8.21@dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _body_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/index */ "./src/libs/taro-ui/components/calendar/body/index.tsx");
/* harmony import */ var _controller_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controller/index */ "./src/libs/taro-ui/components/calendar/controller/index.tsx");














var defaultProps = {
  validDates: [],
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
};

var AtCalendar = /*#__PURE__*/function (_React$Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCalendar, _React$Component);

  function AtCalendar(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCalendar);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCalendar).call(this, props));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "getSingleSelectdState", function (value) {
      var generateDate = _this.state.generateDate;
      var stateValue = {
        selectedDate: _this.getSelectedDate(value.valueOf())
      };
      var dayjsGenerateDate = value.startOf('month');
      var generateDateValue = dayjsGenerateDate.valueOf();

      if (generateDateValue !== generateDate) {
        _this.triggerChangeDate(dayjsGenerateDate);

        stateValue.generateDate = generateDateValue;
      }

      return stateValue;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "getMultiSelectedState", function (value) {
      var selectedDate = _this.state.selectedDate;
      var end = selectedDate.end,
          start = selectedDate.start;
      var valueUnix = value.valueOf();
      var state = {
        selectedDate: selectedDate
      };

      if (end) {
        state.selectedDate = _this.getSelectedDate(valueUnix, 0);
      } else {
        state.selectedDate.end = Math.max(valueUnix, +start);
        state.selectedDate.start = Math.min(valueUnix, +start);
      }

      return state;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "triggerChangeDate", function (value) {
      var format = _this.props.format;
      if (!lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.onMonthChange)) return;

      _this.props.onMonthChange(value.format(format));
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "setMonth", function (vectorCount) {
      var format = _this.props.format;
      var generateDate = _this.state.generateDate;

      var _generateDate = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(generateDate).add(vectorCount, 'month');

      _this.setState({
        generateDate: _generateDate.valueOf()
      });

      if (vectorCount && lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.onMonthChange)) {
        _this.props.onMonthChange(_generateDate.format(format));
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClickPreMonth", function (isMinMonth) {
      if (isMinMonth === true) {
        return;
      }

      _this.setMonth(-1);

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.onClickPreMonth)) {
        _this.props.onClickPreMonth();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClickNextMonth", function (isMaxMonth) {
      if (isMaxMonth === true) {
        return;
      }

      _this.setMonth(1);

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.onClickNextMonth)) {
        _this.props.onClickNextMonth();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleSelectDate", function (e) {
      var value = e.detail.value;

      var _generateDate = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(value);

      var _generateDateValue = _generateDate.valueOf();

      if (_this.state.generateDate === _generateDateValue) return;

      _this.triggerChangeDate(_generateDate);

      _this.setState({
        generateDate: _generateDateValue
      });
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleDayClick", function (item) {
      var isMultiSelect = _this.props.isMultiSelect;
      var isDisabled = item.isDisabled,
          value = item.value;
      if (isDisabled) return;
      var dayjsDate = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(value);
      var stateValue = {};

      if (isMultiSelect) {
        stateValue = _this.getMultiSelectedState(dayjsDate);
      } else {
        stateValue = _this.getSingleSelectdState(dayjsDate);
      }

      _this.setState(stateValue, function () {
        _this.handleSelectedDate();
      });

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.onDayClick)) {
        _this.props.onDayClick({
          value: item.value
        });
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleDayLongClick", function (item) {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.onDayLongClick)) {
        _this.props.onDayLongClick({
          value: item.value
        });
      }
    });

    var _ref = props,
        currentDate = _ref.currentDate,
        _isMultiSelect = _ref.isMultiSelect;
    _this.state = _this.getInitializeState(currentDate, _isMultiSelect);
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCalendar, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.receiveProps(nextProps);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.receiveProps(nextProps);
    }
  }, {
    key: "receiveProps",
    value: function receiveProps(nextProps) {
      var currentDate = nextProps.currentDate,
          isMultiSelect = nextProps.isMultiSelect;
      if (!currentDate || currentDate === this.props.currentDate) return;

      if (isMultiSelect && this.props.isMultiSelect) {
        var _ref2 = currentDate,
            start = _ref2.start,
            end = _ref2.end;
        var _ref3 = this.props.currentDate,
            preStart = _ref3.start,
            preEnd = _ref3.end;

        if (start === preStart && preEnd === end) {
          return;
        }
      }

      var stateValue = this.getInitializeState(currentDate, isMultiSelect);
      this.setState(stateValue);
    }
  }, {
    key: "getSelectedDate",
    value: function getSelectedDate(start, end) {
      var stateValue = {
        start: start,
        end: start
      };

      if (typeof end !== 'undefined') {
        stateValue.end = end;
      }

      return stateValue;
    }
  }, {
    key: "getInitializeState",
    value: function getInitializeState(currentDate, isMultiSelect) {
      var end;
      var start;
      var generateDateValue;

      if (!currentDate) {
        var dayjsStart = dayjs__WEBPACK_IMPORTED_MODULE_8___default()();
        start = dayjsStart.startOf('day').valueOf();
        generateDateValue = dayjsStart.startOf('month').valueOf();
        return {
          generateDate: generateDateValue,
          selectedDate: {
            start: ''
          }
        };
      }

      if (isMultiSelect) {
        var _ref4 = currentDate,
            cStart = _ref4.start,
            cEnd = _ref4.end;

        var _dayjsStart = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(cStart);

        start = _dayjsStart.startOf('day').valueOf();
        generateDateValue = _dayjsStart.startOf('month').valueOf();
        end = cEnd ? dayjs__WEBPACK_IMPORTED_MODULE_8___default()(cEnd).startOf('day').valueOf() : start;
      } else {
        var _dayjsStart2 = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(currentDate);

        start = _dayjsStart2.startOf('day').valueOf();
        generateDateValue = _dayjsStart2.startOf('month').valueOf();
        end = start;
      }

      return {
        generateDate: generateDateValue,
        selectedDate: this.getSelectedDate(start, end)
      };
    }
  }, {
    key: "handleSelectedDate",
    value: function handleSelectedDate() {
      var selectDate = this.state.selectedDate;

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_10___default()(this.props.onSelectDate)) {
        var info = {
          start: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(selectDate.start).format(this.props.format)
        };

        if (selectDate.end) {
          info.end = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(selectDate.end).format(this.props.format);
        }

        this.props.onSelectDate({
          value: info
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          generateDate = _this$state.generateDate,
          selectedDate = _this$state.selectedDate;
      var _ref5 = this.props,
          validDates = _ref5.validDates,
          marks = _ref5.marks,
          format = _ref5.format,
          minDate = _ref5.minDate,
          maxDate = _ref5.maxDate,
          isSwiper = _ref5.isSwiper,
          className = _ref5.className,
          hideArrow = _ref5.hideArrow,
          isVertical = _ref5.isVertical,
          monthFormat = _ref5.monthFormat,
          selectedDates = _ref5.selectedDates;
      return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('at-calendar', className)
      }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_controller_index__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        minDate: minDate,
        maxDate: maxDate,
        hideArrow: hideArrow,
        monthFormat: monthFormat,
        generateDate: generateDate,
        onPreMonth: this.handleClickPreMonth,
        onNextMonth: this.handleClickNextMonth,
        onSelectDate: this.handleSelectDate
      }), nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_body_index__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        validDates: validDates,
        marks: marks,
        format: format,
        minDate: minDate,
        s: true,
        maxDate: maxDate,
        isSwiper: isSwiper,
        isVertical: isVertical,
        selectedDate: selectedDate,
        selectedDates: selectedDates,
        generateDate: generateDate,
        onDayClick: this.handleDayClick,
        onSwipeMonth: this.setMonth,
        onLongClick: this.handleDayLongClick
      }));
    }
  }]);

  return AtCalendar;
}(nervjs__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtCalendar, "options", {
  addGlobalClass: true
});

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtCalendar, "defaultProps", defaultProps);



/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/ui/date-list/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/ui/date-list/index.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtCalendarList; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/constant */ "./src/libs/taro-ui/components/calendar/common/constant.ts");








var _MAP;






var MAP = (_MAP = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_MAP, _common_constant__WEBPACK_IMPORTED_MODULE_11__[/* TYPE_PRE_MONTH */ "c"], 'pre'), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_MAP, _common_constant__WEBPACK_IMPORTED_MODULE_11__[/* TYPE_NOW_MONTH */ "b"], 'now'), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_MAP, _common_constant__WEBPACK_IMPORTED_MODULE_11__[/* TYPE_NEXT_MONTH */ "a"], 'next'), _MAP);

var AtCalendarList = /*#__PURE__*/function (_React$Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCalendarList, _React$Component);

  function AtCalendarList() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCalendarList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCalendarList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function (item) {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_8___default()(_this.props.onClick)) {
        _this.props.onClick(item);
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleLongClick", function (item) {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_8___default()(_this.props.onLongClick)) {
        _this.props.onLongClick(item);
      }
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCalendarList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = this.props.list;
      if (!list || list.length === 0) return null;
      return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-calendar__list flex"
      }, list.map(function (item) {
        return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          onClick: _this2.handleClick.bind(_this2, item),
          onLongPress: _this2.handleLongClick.bind(_this2, item),
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('flex__item', "flex__item--".concat(MAP[item.type]), {
            'flex__item--today': item.isToday,
            'flex__item--active': item.isActive,
            'flex__item--selected': item.isSelected,
            'flex__item--selected-head': item.isSelectedHead,
            'flex__item--selected-tail': item.isSelectedTail,
            'flex__item--blur': item.isDisabled || item.type === _common_constant__WEBPACK_IMPORTED_MODULE_11__[/* TYPE_PRE_MONTH */ "c"] || item.type === _common_constant__WEBPACK_IMPORTED_MODULE_11__[/* TYPE_NEXT_MONTH */ "a"]
          })
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "flex__item-container"
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "container-text"
        }, item.text)), nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "flex__item-extra extra"
        }, item.marks && item.marks.length > 0 ? nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "extra-marks"
        }, item.marks.map(function (mark, key) {
          return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "m"], {
            key: key,
            className: "mark"
          }, mark);
        })) : null));
      }));
    }
  }]);

  return AtCalendarList;
}(nervjs__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtCalendarList, "options", {
  addGlobalClass: true
});



/***/ }),

/***/ "./src/libs/taro-ui/components/calendar/ui/day-list/index.tsx":
/*!********************************************************************!*\
  !*** ./src/libs/taro-ui/components/calendar/ui/day-list/index.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtCalendarHeader; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);









var AtCalendarHeader = /*#__PURE__*/function (_React$Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCalendarHeader, _React$Component);

  function AtCalendarHeader() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCalendarHeader);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCalendarHeader).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCalendarHeader, [{
    key: "render",
    value: function render() {
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-calendar__header header"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u65E5"), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u4E00"), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u4E8C"), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u4E09"), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u56DB"), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u4E94"), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "header__flex-item"
      }, "\u516D")));
    }
  }]);

  return AtCalendarHeader;
}(nervjs__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCalendarHeader, "options", {
  addGlobalClass: true
});



/***/ }),

/***/ "./src/libs/taro-ui/components/card/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/card/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");















var AtCard = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtCard, _AtComponent);

  function AtCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtCard);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCard)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleClick", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.onClick)) {
        var _this$props;

        (_this$props = _this.props).onClick.apply(_this$props, arguments);
      }
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtCard, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          title = _this$props2.title,
          note = _this$props2.note,
          extra = _this$props2.extra,
          extraStyle = _this$props2.extraStyle,
          thumb = _this$props2.thumb,
          isFull = _this$props2.isFull,
          icon = _this$props2.icon;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-card', {
        'at-card--full': isFull
      }, this.props.className);
      var iconClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames = {
        'at-icon': true
      }, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_classNames, "at-icon-".concat(icon && icon.value), icon && icon.value), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_classNames, 'at-card__header-icon', true), _classNames));
      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && "".concat(icon.size, "px") || ''
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        onClick: this.handleClick,
        className: rootClass
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-card__header"
      }, thumb && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-card__header-thumb"
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "c"], {
        className: "at-card__header-thumb-info",
        mode: "scaleToFill",
        src: thumb
      })), this.props.renderIcon, !thumb && icon && icon.value && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: iconClass,
        style: iconStyle
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "at-card__header-title"
      }, title), extra && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        style: Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, extraStyle),
        className: "at-card__header-extra"
      }, extra)), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-card__content"
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-card__content-info"
      }, this.props.children), note && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-card__content-note"
      }, note)));
    }
  }]);

  return AtCard;
}(_common_component__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);


AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  icon: {},
  onClick: function onClick() {},
  renderIcon: '',
  extraStyle: {}
};
AtCard.propTypes = {
  note: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  isFull: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  thumb: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  extra: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  renderIcon: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.element]),
  extraStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object // 自定义extra样式

}; // AtCard.defaultProps = {
//   note: '',
//   isFull: false,
//   thumb: '',
//   title: '',
//   extra: '',
//   onClick: () => {},
// }

/***/ }),

/***/ "./src/libs/taro-ui/components/checkbox/index.js":
/*!*******************************************************!*\
  !*** ./src/libs/taro-ui/components/checkbox/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtCheckbox = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCheckbox, _AtComponent);

  function AtCheckbox() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtCheckbox);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCheckbox).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtCheckbox, [{
    key: "handleClick",
    value: function handleClick(idx) {
      var _this$props = this.props,
          selectedList = _this$props.selectedList,
          options = _this$props.options;
      var option = options[idx];
      var disabled = option.disabled,
          value = option.value;
      if (disabled) return;
      var selectedSet = new Set(selectedList);

      if (!selectedSet.has(value)) {
        selectedSet.add(value);
      } else {
        selectedSet.delete(value);
      }

      this.props.onChange(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(selectedSet));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          options = _this$props2.options,
          selectedList = _this$props2.selectedList;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-checkbox', className);
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, options.map(function (option, idx) {
        var value = option.value,
            disabled = option.disabled,
            label = option.label,
            desc = option.desc;
        var optionCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-checkbox__option', {
          'at-checkbox__option--disabled': disabled,
          'at-checkbox__option--selected': selectedList.includes(value)
        });
        return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: optionCls,
          key: value,
          onClick: _this.handleClick.bind(_this, idx)
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-checkbox__option-wrap"
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-checkbox__option-cnt"
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-checkbox__icon-cnt"
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
          className: "at-icon at-icon-check"
        })), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-checkbox__title"
        }, label)), desc && nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-checkbox__desc"
        }, desc)));
      }));
    }
  }]);

  return AtCheckbox;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtCheckbox.defaultProps = {
  customStyle: '',
  className: '',
  options: [],
  selectedList: [],
  onChange: function onChange() {}
};
AtCheckbox.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  options: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  selectedList: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/countdown/index.js":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/countdown/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item */ "./src/libs/taro-ui/components/countdown/item/index.js");












var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};

var AtCountdown = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCountdown, _AtComponent);

  function AtCountdown() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCountdown);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCountdown).apply(this, arguments));
    var _this$props = _this.props,
        day = _this$props.day,
        hours = _this$props.hours,
        minutes = _this$props.minutes,
        seconds = _this$props.seconds;
    _this.seconds = toSeconds(day, hours, minutes, seconds);

    var _this$calculateTime = _this.calculateTime(),
        _day = _this$calculateTime.day,
        _hours = _this$calculateTime.hours,
        _minutes = _this$calculateTime.minutes,
        _seconds = _this$calculateTime.seconds;

    _this.state = {
      _day: _day,
      _hours: _hours,
      _minutes: _minutes,
      _seconds: _seconds
    };
    _this.timer = null;
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCountdown, [{
    key: "setTimer",
    value: function setTimer() {
      if (!this.timer) this.countdonwn();
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: "calculateTime",
    value: function calculateTime() {
      var day = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;

      if (this.seconds > 0) {
        day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
        hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
        minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
        seconds = Math.floor(this.seconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
      }

      return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  }, {
    key: "countdonwn",
    value: function countdonwn() {
      var _this2 = this;

      var _this$calculateTime2 = this.calculateTime(),
          day = _this$calculateTime2.day,
          hours = _this$calculateTime2.hours,
          minutes = _this$calculateTime2.minutes,
          seconds = _this$calculateTime2.seconds;

      this.setState({
        _day: day,
        _hours: hours,
        _minutes: minutes,
        _seconds: seconds
      });
      this.seconds--;

      if (this.seconds < 0) {
        this.clearTimer();
        this.props.onTimeUp();
        return;
      }

      this.timer = setTimeout(function () {
        _this2.countdonwn();
      }, 1000);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;
      var day = nextProps.day,
          hours = nextProps.hours,
          minutes = nextProps.minutes,
          seconds = nextProps.seconds;
      this.seconds = toSeconds(day, hours, minutes, seconds);
      this.clearTimer();
      this.setTimer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      this.clearTimer();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.setTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          customStyle = _this$props2.customStyle,
          format = _this$props2.format,
          isShowDay = _this$props2.isShowDay,
          isCard = _this$props2.isCard,
          isShowHour = _this$props2.isShowHour;
      var _this$state = this.state,
          _day = _this$state._day,
          _hours = _this$state._hours,
          _minutes = _this$state._minutes,
          _seconds = _this$state._seconds;
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
          'at-countdown': true,
          'at-countdown--card': isCard
        }, className),
        style: customStyle
      }, isShowDay && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_item__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        num: _day,
        separator: format.day
      }), isShowHour && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_item__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        num: _hours,
        separator: format.hours
      }), nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_item__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        num: _minutes,
        separator: format.minutes
      }), nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_item__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        num: _seconds,
        separator: format.seconds
      }));
    }
  }]);

  return AtCountdown;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isCard: false,
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  onTimeUp: function onTimeUp() {}
};
AtCountdown.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  isCard: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  isShowDay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  isShowHour: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  format: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  day: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  hours: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  minutes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  seconds: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  onTimeUp: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/countdown/item/index.js":
/*!*************************************************************!*\
  !*** ./src/libs/taro-ui/components/countdown/item/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");










var AtCountdownItem = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCountdownItem, _AtComponent);

  function AtCountdownItem() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtCountdownItem);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtCountdownItem).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtCountdownItem, [{
    key: "formatNum",
    value: function formatNum(num) {
      return num <= 9 ? "0".concat(num) : "".concat(num);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          num = _this$props.num,
          separator = _this$props.separator;
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-countdown__item"
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-countdown__time-box"
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: "at-countdown__time"
      }, this.formatNum(num))), nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: "at-countdown__separator"
      }, separator));
    }
  }]);

  return AtCountdownItem;
}(_common_component__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);

AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
};
AtCountdownItem.propTypes = {
  num: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  separator: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (AtCountdownItem);

/***/ }),

/***/ "./src/libs/taro-ui/components/curtain/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/curtain/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtCurtain = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtCurtain, _AtComponent);

  function AtCurtain() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtCurtain);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtCurtain).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtCurtain, [{
    key: "onClose",
    value: function onClose(e) {
      var _this$props;

      e.stopPropagation();

      (_this$props = this.props).onClose.apply(_this$props, arguments);
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          customStyle = _this$props2.customStyle,
          isOpened = _this$props2.isOpened,
          closeBtnPosition = _this$props2.closeBtnPosition;
      var curtainClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        'at-curtain': true,
        'at-curtain--closed': !isOpened
      }, className);
      var btnCloseClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        'at-curtain__btn-close': true
      }, "at-curtain__btn-close--".concat(closeBtnPosition), closeBtnPosition));
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: curtainClass,
        style: customStyle,
        onClick: this._stopPropagation
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-curtain__container"
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-curtain__body"
      }, this.props.children, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: btnCloseClass,
        onClick: this.onClose.bind(this)
      }))));
    }
  }]);

  return AtCurtain;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  onClose: function onClose() {}
};
AtCurtain.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  closeBtnPosition: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/divider/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/divider/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_10__);












var AtDivider = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtDivider, _AtComponent);

  function AtDivider() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtDivider);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtDivider).apply(this, arguments));

    if (false) {}

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtDivider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          customStyle = _this$props.customStyle,
          content = _this$props.content,
          height = _this$props.height,
          fontColor = _this$props.fontColor,
          fontSize = _this$props.fontSize,
          lineColor = _this$props.lineColor;
      var rootStyle = {
        height: height ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.pxTransform(height)) : ''
      };
      var fontStyle = {
        'color': fontColor,
        'font-size': fontSize ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.pxTransform(fontSize)) : ''
      };
      var lineStyle = {
        'background-color': lineColor
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_10__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-divider', className),
        style: this.mergeStyle(rootStyle, customStyle)
      }, nervjs__WEBPACK_IMPORTED_MODULE_10__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-divider__content",
        style: fontStyle
      }, content === '' ? this.props.children : content), nervjs__WEBPACK_IMPORTED_MODULE_10__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-divider__line",
        style: lineStyle
      }));
    }
  }]);

  return AtDivider;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
};
AtDivider.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  fontColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  lineColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};

/***/ }),

/***/ "./src/libs/taro-ui/components/drawer/index.js":
/*!*****************************************************!*\
  !*** ./src/libs/taro-ui/components/drawer/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _list_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../list/index */ "./src/libs/taro-ui/components/list/index.js");
/* harmony import */ var _list_item_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../list/item/index */ "./src/libs/taro-ui/components/list/item/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");














var AtDrawer = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtDrawer, _AtComponent);

  function AtDrawer(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtDrawer);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtDrawer).apply(this, arguments));
    _this.state = {
      animShow: false,
      _show: props.show
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _show = this.state._show;
      if (_show) this.animShow();
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(index, e) {
      this.props.onItemClick && this.props.onItemClick(index);
      this.animHide(e, index);
    }
  }, {
    key: "onHide",
    value: function onHide() {
      var _this2 = this;

      this.setState({
        _show: false
      }, function () {
        _this2.props.onClose && _this2.props.onClose();
      });
    }
  }, {
    key: "animHide",
    value: function animHide() {
      var _arguments = arguments,
          _this3 = this;

      this.setState({
        animShow: false
      });
      setTimeout(function () {
        _this3.onHide.apply(_this3, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_arguments));
      }, 300);
    }
  }, {
    key: "animShow",
    value: function animShow() {
      var _this4 = this;

      this.setState({
        _show: true
      });
      setTimeout(function () {
        _this4.setState({
          animShow: true
        });
      }, 200);
    }
  }, {
    key: "onMaskClick",
    value: function onMaskClick() {
      this.animHide.apply(this, arguments);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var show = nextProps.show;

      if (show !== this.state._show) {
        show ? this.animShow() : this.animHide.apply(this, arguments);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          mask = _this$props.mask,
          width = _this$props.width,
          right = _this$props.right,
          items = _this$props.items;
      var _this$state = this.state,
          animShow = _this$state.animShow,
          _show = _this$state._show;
      var rootClassName = ['at-drawer'];
      var maskStyle = {
        display: mask ? 'block' : 'none',
        opacity: animShow ? 1 : 0
      };
      var listStyle = {
        width: width,
        transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
      };
      var classObject = {
        'at-drawer--show': animShow,
        'at-drawer--right': right,
        'at-drawer--left': !right
      };
      return _show && nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(rootClassName, classObject, this.props.className)
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-drawer__mask",
        style: maskStyle,
        onClick: this.onMaskClick.bind(this)
      }), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-drawer__content",
        style: listStyle
      }, items.length ? nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_list_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, items.map(function (name, index) {
        return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_list_item_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
          key: "".concat(name, "-").concat(index),
          "data-index": index,
          onClick: _this5.onItemClick.bind(_this5, index),
          title: name,
          arrow: "right"
        });
      })) : this.props.children));
    }
  }]);

  return AtDrawer;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: [],
  onItemClick: function onItemClick() {},
  onClose: function onClose() {}
};
AtDrawer.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string),
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/fab/index.js":
/*!**************************************************!*\
  !*** ./src/libs/taro-ui/components/fab/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtFab = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtFab, _AtComponent);

  function AtFab() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtFab);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtFab).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtFab, [{
    key: "onClick",
    value: function onClick() {
      var _this$props;

      this.props.onClick && (_this$props = this.props).onClick.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          className = _this$props2.className;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-fab', className, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "at-fab--".concat(size), size));
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: rootClass,
        onClick: this.onClick.bind(this)
      }, this.props.children);
    }
  }]);

  return AtFab;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtFab.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['normal', 'small']),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
AtFab.defaultProps = {
  size: 'normal',
  onClick: function onClick() {}
};

/***/ }),

/***/ "./src/libs/taro-ui/components/float-layout/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/float-layout/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");








/* eslint-disable taro/function-naming */








var AtFloatLayout = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtFloatLayout, _AtComponent);

  function AtFloatLayout(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtFloatLayout);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtFloatLayout).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClose", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onClose)) {
        _this.props.onClose();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "close", function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchMove", function (e) {
      e.stopPropagation();
    });

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtFloatLayout, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;

      if (this.props.isOpened !== isOpened) {
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_13__[/* handleTouchScroll */ "e"])(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _isOpened = this.state._isOpened;
      var _this$props = this.props,
          title = _this$props.title,
          scrollY = _this$props.scrollY,
          scrollX = _this$props.scrollX,
          scrollTop = _this$props.scrollTop,
          scrollLeft = _this$props.scrollLeft,
          upperThreshold = _this$props.upperThreshold,
          lowerThreshold = _this$props.lowerThreshold,
          scrollWithAnimation = _this$props.scrollWithAnimation;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-float-layout', {
        'at-float-layout--active': _isOpened
      }, this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootClass,
        onTouchMove: this.handleTouchMove
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        onClick: this.close,
        className: "at-float-layout__overlay"
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-float-layout__container layout"
      }, title ? nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "layout-header"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "layout-header__title"
      }, title), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "layout-header__btn-close",
        onClick: this.close
      })) : null, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "layout-body"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* ScrollView */ "h"], {
        scrollY: scrollY,
        scrollX: scrollX,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        upperThreshold: upperThreshold,
        lowerThreshold: lowerThreshold,
        scrollWithAnimation: scrollWithAnimation,
        onScroll: this.props.onScroll,
        onScrollToLower: this.props.onScrollToLower,
        onScrollToUpper: this.props.onScrollToUpper,
        className: "layout-body__content"
      }, this.props.children))));
    }
  }]);

  return AtFloatLayout;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,
  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false,
  onClose: function onClose() {},
  onScroll: function onScroll() {},
  onScrollToLower: function onScrollToLower() {},
  onScrollToUpper: function onScrollToUpper() {}
};
AtFloatLayout.propType = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  scrollY: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  scrollX: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  scrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  upperThreshold: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  lowerThreshold: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  scrollWithAnimation: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onScrollToLower: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onScrollToUpper: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/form/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/form/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtForm = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtForm, _AtComponent);

  function AtForm() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtForm);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtForm).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtForm, [{
    key: "onSubmit",
    value: function onSubmit() {
      var _this$props;

      (_this$props = this.props).onSubmit.apply(_this$props, arguments);
    }
  }, {
    key: "onReset",
    value: function onReset() {
      var _this$props2;

      (_this$props2 = this.props).onReset.apply(_this$props2, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          customStyle = _this$props3.customStyle,
          className = _this$props3.className,
          reportSubmit = _this$props3.reportSubmit;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-form', className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Form */ "b"], {
        className: rootCls,
        style: customStyle,
        onSubmit: this.onSubmit.bind(this),
        reportSubmit: reportSubmit,
        onReset: this.onReset.bind(this)
      }, this.props.children);
    }
  }]);

  return AtForm;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false,
  onSubmit: function onSubmit() {},
  onReset: function onReset() {}
};
AtForm.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  reportSubmit: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onReset: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/grid/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/grid/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/_lodash@4.17.15@lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/_lodash@4.17.15@lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
















var AtGrid = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtGrid, _AtComponent);

  function AtGrid() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function (item, index, row) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          columnNum = _this$props.columnNum;

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default()(onClick)) {
        /* prettier-ignore */
        var clickIndex = row * columnNum + index;

        for (var _len2 = arguments.length, arg = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
          arg[_key2 - 3] = arguments[_key2];
        }

        onClick.apply(void 0, [item, clickIndex].concat(arg));
      }
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtGrid, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          mode = _this$props2.mode,
          columnNum = _this$props2.columnNum,
          hasBorder = _this$props2.hasBorder;

      if (Array.isArray(data) && data.length === 0) {
        return null;
      }

      var gridGroup = lodash_chunk__WEBPACK_IMPORTED_MODULE_9___default()(data, columnNum);

      var bodyClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()(['at-grid__flex-item', 'at-grid-item', "at-grid-item--".concat(mode)], {
        'at-grid-item--no-border': !hasBorder
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-grid', this.props.className)
      }, gridGroup.map(function (item, i) {
        return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: "at-grid__flex",
          key: "at-grid-group-".concat(i)
        }, item.map(function (childItem, index) {
          return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
            key: "at-grid-item-".concat(index),
            className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(bodyClass, {
              'at-grid-item--last': index === columnNum - 1
            }),
            onClick: _this2.handleClick.bind(_this2, childItem, index, i),
            style: {
              flex: "0 0 ".concat(100 / columnNum, "%")
            }
          }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
            className: "at-grid-item__content"
          }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
            className: "at-grid-item__content-inner"
          }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
            className: "content-inner__icon"
          }, childItem.image && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
            className: "content-inner__img",
            src: childItem.image,
            mode: "scaleToFill"
          }), lodash_isObject__WEBPACK_IMPORTED_MODULE_12___default()(childItem.iconInfo) && !childItem.image && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(childItem.iconInfo.prefixClass || 'at-icon', Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, "".concat(childItem.iconInfo.prefixClass || 'at-icon', "-").concat(childItem.iconInfo.value), childItem.iconInfo.value), childItem.iconInfo.className),
            style: _this2.mergeStyle({
              color: childItem.iconInfo.color,
              fontSize: "".concat(childItem.iconInfo.size || 24, "px")
            }, childItem.iconInfo.customStyle)
          })), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
            className: "content-inner__text"
          }, childItem.value))));
        }));
      }));
    }
  }]);

  return AtGrid;
}(_common_component__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"]);


AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
};
AtGrid.propTypes = {
  mode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  hasBorder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  columnNum: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    iconInfo: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
      size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
      value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
      color: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
      prefixClass: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
      customStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
      className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string])
    })
  }))
};

/***/ }),

/***/ "./src/libs/taro-ui/components/icon/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/icon/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");













var AtIcon = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtIcon, _AtComponent);

  function AtIcon() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtIcon);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtIcon).apply(this, arguments));

    if (false) {}

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtIcon, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props;

      (_this$props = this.props).onClick.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          prefixClass = _this$props2.prefixClass,
          value = _this$props2.value,
          size = _this$props2.size,
          color = _this$props2.color;
      var rootStyle = {
        fontSize: "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.pxTransform(parseInt(size) * 2)),
        color: color
      };
      var iconName = value ? "".concat(prefixClass, "-").concat(value) : '';
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "m"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixClass, iconName, className),
        style: this.mergeStyle(rootStyle, customStyle),
        onClick: this.handleClick.bind(this)
      });
    }
  }]);

  return AtIcon;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtIcon, "defaultProps", {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24,
  onClick: function onClick() {}
});

Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtIcon, "propTypes", {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  prefixClass: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
});



/***/ }),

/***/ "./src/libs/taro-ui/components/image-picker/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/image-picker/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");








/* eslint-disable no-nested-ternary */






 // 生成 jsx 二维矩阵

var generateMatrix = function generateMatrix(files, col, showAddBtn) {
  var matrix = [];
  var length = showAddBtn ? files.length + 1 : files.length;
  var row = Math.ceil(length / col);

  for (var i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      var lastArr = files.slice(i * col);

      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({
            type: 'btn',
            uuid: Object(_common_utils__WEBPACK_IMPORTED_MODULE_13__[/* uuid */ "i"])()
          });
        } // 填补剩下的空列


        for (var j = lastArr.length; j < col; j++) {
          lastArr.push({
            type: 'blank',
            uuid: Object(_common_utils__WEBPACK_IMPORTED_MODULE_13__[/* uuid */ "i"])()
          });
        }
      }

      matrix.push(lastArr);
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col));
    }
  }

  return matrix;
};

var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv();

var AtImagePicker = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtImagePicker, _AtComponent);

  function AtImagePicker() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtImagePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtImagePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "chooseFile", function () {
      var _this$props = _this.props,
          _this$props$files = _this$props.files,
          files = _this$props$files === void 0 ? [] : _this$props$files,
          multiple = _this$props.multiple,
          count = _this$props.count,
          sizeType = _this$props.sizeType,
          sourceType = _this$props.sourceType;
      var filePathName = ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'; // const count = multiple ? 99 : 1

      var params = {};

      if (multiple) {
        params.count = 99;
      }

      if (count) {
        params.count = count;
      }

      if (sizeType) {
        params.sizeType = sizeType;
      }

      if (sourceType) {
        params.sourceType = sourceType;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.chooseImage(params).then(function (res) {
        var targetFiles = res.tempFilePaths.map(function (path, i) {
          return {
            url: path,
            file: res[filePathName][i]
          };
        });
        var newFiles = files.concat(targetFiles);

        _this.props.onChange(newFiles, 'add');
      }).catch(_this.props.onFail);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleImageClick", function (idx) {
      return _this.props.onImageClick(idx, _this.props.files[idx]);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleRemoveImg", function (idx) {
      var _this$props$files2 = _this.props.files,
          files = _this$props$files2 === void 0 ? [] : _this$props$files2;

      if (ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB) {
        window.URL.revokeObjectURL(files[idx].url);
      }

      var newFiles = files.filter(function (file, i) {
        return i !== idx;
      });

      _this.props.onChange(newFiles, 'remove', idx);
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtImagePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          customStyle = _this$props2.customStyle,
          files = _this$props2.files,
          mode = _this$props2.mode,
          length = _this$props2.length,
          showAddBtn = _this$props2.showAddBtn; // 行数

      var matrix = generateMatrix(files, length, showAddBtn);
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-image-picker', className);
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, matrix.map(function (row, i) {
        return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: "at-image-picker__flex-box",
          key: i + 1
        }, row.map(function (item, j) {
          return item.url ? nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "at-image-picker__flex-item",
            key: i * length + j
          }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "at-image-picker__item"
          }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "at-image-picker__remove-btn",
            onClick: _this2.handleRemoveImg.bind(_this2, i * length + j)
          }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "c"], {
            className: "at-image-picker__preview-img",
            mode: mode,
            src: item.url,
            onClick: _this2.handleImageClick.bind(_this2, i * length + j)
          }))) : nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "at-image-picker__flex-item",
            key: i * length + j
          }, item.type === 'btn' && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "at-image-picker__item at-image-picker__choose-btn",
            onClick: _this2.chooseFile
          }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "add-bar"
          }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
            className: "add-bar"
          })));
        }));
      }));
    }
  }]);

  return AtImagePicker;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtImagePicker.defaultProps = {
  isTest: false,
  className: '',
  customStyle: '',
  files: [],
  mode: 'aspectFill',
  showAddBtn: true,
  multiple: false,
  length: 4,
  onChange: function onChange() {},
  onImageClick: function onImageClick() {},
  onFail: function onFail() {}
};
AtImagePicker.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array]),
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object]),
  isTest: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  files: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']),
  showAddBtn: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  length: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onImageClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onFail: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  count: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  sizeType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  sourceType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./src/libs/taro-ui/components/indexes/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/indexes/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/_lodash@4.17.15@lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _components_list_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/list/index */ "./src/libs/taro-ui/components/list/index.js");
/* harmony import */ var _components_list_item_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/list/item/index */ "./src/libs/taro-ui/components/list/item/index.js");
/* harmony import */ var _components_toast_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/toast/index */ "./src/libs/taro-ui/components/toast/index.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");


















Object(_common_utils__WEBPACK_IMPORTED_MODULE_17__[/* initTestEnv */ "f"])();
var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv();

var AtIndexes = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtIndexes, _AtComponent);

  function AtIndexes() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtIndexes);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtIndexes).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function () {
      var _this$props;

      return (_this$props = _this.props).onClick.apply(_this$props, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchMove", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var list = _this.props.list;
      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);

      if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
        _this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-".concat(key);

        _this.jumpTarget(touchView, index);
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchEnd", function () {
      _this.currentIndex = -1;
    });

    _this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB
    }; // 右侧导航高度

    _this.menuHeight = 0; // 右侧导航距离顶部高度

    _this.startTop = 0; // 右侧导航元素高度

    _this.itemHeight = 0; // 当前索引

    _this.currentIndex = -1;
    _this.listId = Object(_common_utils__WEBPACK_IMPORTED_MODULE_17__[/* isTest */ "g"])() ? 'indexes-list-AOTU2018' : "list-".concat(Object(_common_utils__WEBPACK_IMPORTED_MODULE_17__[/* uuid */ "i"])());
    _this.timeoutTimer = null;
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtIndexes, [{
    key: "jumpTarget",
    value: function jumpTarget(_scrollIntoView, idx) {
      var _this2 = this;

      var _this$props2 = this.props,
          topKey = _this$props2.topKey,
          list = _this$props2.list;

      var _tipText = idx === 0 ? topKey : list[idx - 1].key;

      if (ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB) {
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_17__[/* delayQuerySelector */ "c"])(this, '.at-indexes', 0).then(function (rect) {
          var targetOffsetTop = _this2.listRef.childNodes[idx].offsetTop;

          var _scrollTop = targetOffsetTop - rect[0].top;

          _this2.updateState({
            _scrollTop: _scrollTop,
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText
          });
        });
        return;
      }

      this.updateState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText
      });
    }
  }, {
    key: "__jumpTarget",
    value: function __jumpTarget(key) {
      var list = this.props.list;

      var index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_12___default()(list, ['key', key]);

      var targetView = "at-indexes__list-".concat(key);
      this.jumpTarget(targetView, index + 1);
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      var _this3 = this;

      var _this$props3 = this.props,
          isShowToast = _this$props3.isShowToast,
          isVibrate = _this$props3.isVibrate;
      var _scrollIntoView = state._scrollIntoView,
          _tipText = state._tipText,
          _scrollTop = state._scrollTop;
      this.setState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText,
        _scrollTop: _scrollTop,
        _isShowToast: isShowToast
      }, function () {
        clearTimeout(_this3.timeoutTimer);
        _this3.timeoutTimer = setTimeout(function () {
          _this3.setState({
            _tipText: '',
            _isShowToast: false
          });
        }, 3000);
      });

      if (isVibrate) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.vibrateShort();
      }
    }
  }, {
    key: "initData",
    value: function initData() {
      var _this4 = this;

      Object(_common_utils__WEBPACK_IMPORTED_MODULE_17__[/* delayQuerySelector */ "c"])(this, '.at-indexes__menu').then(function (rect) {
        var len = _this4.props.list.length;
        _this4.menuHeight = rect[0].height;
        _this4.startTop = rect[0].top;
        _this4.itemHeight = Math.floor(_this4.menuHeight / (len + 1));
      });
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      if (e && e.detail) {
        this.state._scrollTop = e.detail.scrollTop;
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.list.length !== this.props.list.length) {
        this.initData();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB) {
        this.listRef = document.getElementById(this.listId);
      }

      this.initData();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.onScrollIntoView && this.props.onScrollIntoView(this.__jumpTarget.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          customStyle = _this$props4.customStyle,
          animation = _this$props4.animation,
          topKey = _this$props4.topKey,
          list = _this$props4.list;
      var _this$state = this.state,
          _scrollTop = _this$state._scrollTop,
          _scrollIntoView = _this$state._scrollIntoView,
          _tipText = _this$state._tipText,
          _isShowToast = _this$state._isShowToast,
          isWEB = _this$state.isWEB;
      var toastStyle = {
        minWidth: _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.pxTransform(100)
      };
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-indexes', className);
      var menuList = list.map(function (dataList, i) {
        var key = dataList.key;
        var targetView = "at-indexes__list-".concat(key);
        return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "at-indexes__menu-item",
          key: key,
          onClick: _this5.jumpTarget.bind(_this5, targetView, i + 1)
        }, key);
      });
      var indexesList = list.map(function (dataList) {
        return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          id: "at-indexes__list-".concat(dataList.key),
          className: "at-indexes__list",
          key: dataList.key
        }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          className: "at-indexes__list-title"
        }, dataList.title), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_list_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null, dataList.items && dataList.items.map(function (item) {
          return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_list_item_index__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
            key: item.name,
            title: item.name,
            onClick: _this5.handleClick.bind(_this5, item)
          });
        })));
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_toast_index__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        customStyle: toastStyle,
        isOpened: _isShowToast,
        text: _tipText,
        duration: 2000
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-indexes__menu",
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-indexes__menu-item",
        onClick: this.jumpTarget.bind(this, 'at-indexes__top', 0)
      }, topKey), menuList), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* ScrollView */ "h"], {
        className: "at-indexes__body",
        id: this.listId,
        scrollY: true,
        scrollWithAnimation: animation,
        scrollTop: isWEB && _scrollTop,
        scrollIntoView: !isWEB ? _scrollIntoView : '',
        onScroll: this.handleScroll.bind(this)
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-indexes__content",
        id: "at-indexes__top"
      }, this.props.children), indexesList));
    }
  }]);

  return AtIndexes;
}(_common_component__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);

AtIndexes.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  animation: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  isVibrate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  isShowToast: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  topKey: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onScrollIntoView: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
AtIndexes.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: [],
  onClick: function onClick() {},
  onScrollIntoView: function onScrollIntoView() {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (AtIndexes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/libs/taro-ui/components/input-number/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/input-number/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/toString */ "./node_modules/_lodash@4.17.15@lodash/toString.js");
/* harmony import */ var lodash_toString__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_toString__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");














 // 实现两数相加并保留小数点后最短尾数

function addNum(num1, num2) {
  var sq1, sq2;

  try {
    sq1 = lodash_toString__WEBPACK_IMPORTED_MODULE_12___default()(num1).split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  }

  try {
    sq2 = lodash_toString__WEBPACK_IMPORTED_MODULE_12___default()(num2).split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  }

  var m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
} // 格式化数字，处理01变成1,并且不处理1. 这种情况


function parseValue(num) {
  if (num === '') return '0';

  var numStr = lodash_toString__WEBPACK_IMPORTED_MODULE_12___default()(num);

  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return lodash_toString__WEBPACK_IMPORTED_MODULE_12___default()(parseFloat(num));
  }

  return lodash_toString__WEBPACK_IMPORTED_MODULE_12___default()(num);
}

Object(_common_utils__WEBPACK_IMPORTED_MODULE_14__[/* initTestEnv */ "f"])();

var AtInputNumber = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtInputNumber, _AtComponent);

  function AtInputNumber() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtInputNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtInputNumber)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleValue", function (value) {
      var _this$props = _this.props,
          max = _this$props.max,
          min = _this$props.min;
      var resultValue = value === '' ? min : value; // 此处不能使用 Math.max，会是字符串变数字，并丢失 .

      if (resultValue > max) {
        resultValue = max;

        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }

      if (resultValue < min) {
        resultValue = min;

        _this.handleError({
          type: 'LOW',
          errorValue: resultValue
        });
      }

      resultValue = parseValue(resultValue);
      return resultValue;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleInput", function (e) {
      var _this$props2;

      var value = e.target.value;
      var disabled = _this.props.disabled;
      if (disabled) return;

      var newValue = _this.handleValue(value);

      for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arg[_key2 - 1] = arguments[_key2];
      }

      (_this$props2 = _this.props).onChange.apply(_this$props2, [newValue, e].concat(arg));

      return newValue;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleBlur", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBlur.apply(_this$props3, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleError", function (errorValue) {
      if (!_this.props.onErrorInput) {
        return;
      }

      _this.props.onErrorInput(errorValue);
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtInputNumber, [{
    key: "handleClick",
    value: function handleClick(clickType) {
      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          value = _this$props4.value,
          min = _this$props4.min,
          max = _this$props4.max,
          step = _this$props4.step;
      var lowThanMin = clickType === 'minus' && value <= min;
      var overThanMax = clickType === 'plus' && value >= max;

      if (lowThanMin || overThanMax || disabled) {
        var _deltaValue = clickType === 'minus' ? -step : step;

        var errorValue = addNum(value, _deltaValue);

        if (disabled) {
          this.handleError({
            type: 'DISABLED',
            errorValue: errorValue
          });
        } else {
          this.handleError({
            type: lowThanMin ? 'LOW' : 'OVER',
            errorValue: errorValue
          });
        }

        return;
      }

      var deltaValue = clickType === 'minus' ? -step : step;
      var newValue = addNum(value, deltaValue);
      newValue = this.handleValue(newValue);
      this.props.onChange(newValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          customStyle = _this$props5.customStyle,
          className = _this$props5.className,
          width = _this$props5.width,
          disabled = _this$props5.disabled,
          value = _this$props5.value,
          type = _this$props5.type,
          min = _this$props5.min,
          max = _this$props5.max,
          size = _this$props5.size,
          disabledInput = _this$props5.disabledInput;
      var inputStyle = {
        width: width ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.pxTransform(width)) : ''
      };
      var inputValue = this.handleValue(value);
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-input-number', {
        'at-input-number--lg': size
      }, className);
      var minusBtnCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-input-number__btn', {
        'at-input-number--disabled': inputValue <= min || disabled
      });
      var plusBtnCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-input-number__btn', {
        'at-input-number--disabled': inputValue >= max || disabled
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: minusBtnCls,
        onClick: this.handleClick.bind(this, 'minus')
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "at-icon at-icon-subtract at-input-number__btn-subtract"
      })), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Input */ "d"], {
        className: "at-input-number__input",
        style: inputStyle,
        type: type,
        value: inputValue,
        disabled: disabledInput || disabled,
        onInput: this.handleInput,
        onBlur: this.handleBlur
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: plusBtnCls,
        onClick: this.handleClick.bind(this, 'plus')
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "at-icon at-icon-add at-input-number__btn-add"
      })));
    }
  }]);

  return AtInputNumber;
}(_common_component__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);

AtInputNumber.defaultProps = {
  customStyle: '',
  className: '',
  disabled: false,
  disabledInput: false,
  value: 1,
  type: 'number',
  width: 0,
  min: 0,
  max: 100,
  step: 1,
  size: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};
AtInputNumber.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['number', 'digit']),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  disabledInput: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onErrorInput: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};
/* unused harmony default export */ var _unused_webpack_default_export = (AtInputNumber);

/***/ }),

/***/ "./src/libs/taro-ui/components/input/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/input/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");













function getInputProps(props) {
  var actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false
  };

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number';
      actualProps.maxLength = 11;
      break;

    case 'password':
      actualProps.password = true;
      break;

    default:
      break;
  }

  if (!props.disabled && !props.editable) {
    actualProps.disabled = true;
  }

  return actualProps;
}

var AtInput = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtInput, _AtComponent);

  function AtInput() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onInput", function (event) {
      return _this.props.onChange(event.target.value, event);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onFocus", function (event) {
      return _this.props.onFocus(event.target.value, event);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onBlur", function (event) {
      _this.props.onBlur(event.target.value, event); // fix # 583 AtInput 不触发 onChange 的问题


      _this.props.onChange(event.target.value, event);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onConfirm", function (event) {
      return _this.props.onConfirm(event.target.value, event);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onClick", function () {
      return !_this.props.editable && _this.props.onClick();
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "clearValue", function () {
      // fix #840
      setTimeout(function () {
        _this.props.onChange('');
      }, 50);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onErrorClick", function () {
      return _this.props.onErrorClick();
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          customStyle = _this$props.customStyle,
          name = _this$props.name,
          cursorSpacing = _this$props.cursorSpacing,
          confirmType = _this$props.confirmType,
          cursor = _this$props.cursor,
          selectionStart = _this$props.selectionStart,
          selectionEnd = _this$props.selectionEnd,
          adjustPosition = _this$props.adjustPosition,
          border = _this$props.border,
          title = _this$props.title,
          error = _this$props.error,
          clear = _this$props.clear,
          placeholder = _this$props.placeholder,
          placeholderStyle = _this$props.placeholderStyle,
          placeholderClass = _this$props.placeholderClass,
          autoFocus = _this$props.autoFocus,
          focus = _this$props.focus,
          value = _this$props.value,
          required = _this$props.required;

      var _getInputProps = getInputProps(this.props),
          type = _getInputProps.type,
          maxLength = _getInputProps.maxLength,
          disabled = _getInputProps.disabled,
          password = _getInputProps.password;

      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-input', {
        'at-input--without-border': !border
      }, className);
      var containerCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-input__container', {
        'at-input--error': error,
        'at-input--disabled': disabled
      });
      var overlayCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-input__overlay', {
        'at-input__overlay--hidden': !disabled
      });
      var placeholderCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()('placeholder', placeholderClass);
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: containerCls
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: overlayCls,
        onClick: this.onClick
      }), title && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Label */ "e"], {
        className: "at-input__title ".concat(required && 'at-input__title--required'),
        for: name
      }, title), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
        className: "at-input__input",
        id: name,
        name: name,
        type: type,
        password: password,
        placeholderStyle: placeholderStyle,
        placeholderClass: placeholderCls,
        placeholder: placeholder,
        cursorSpacing: cursorSpacing,
        maxLength: maxLength,
        autoFocus: autoFocus,
        focus: focus,
        value: value,
        confirmType: confirmType,
        cursor: cursor,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        adjustPosition: adjustPosition,
        onInput: this.onInput // fix # 840 input 清除问题
        // onChange={this.onInput}
        ,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onConfirm: this.onConfirm
      }), clear && value && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-input__icon",
        onTouchEnd: this.clearValue
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "at-icon at-icon-close-circle at-input__icon-close"
      })), error && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-input__icon",
        onTouchStart: this.onErrorClick
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "at-icon at-icon-alert-circle at-input__icon-alert"
      })), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-input__children"
      }, this.props.children)));
    }
  }]);

  return AtInput;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: '完成',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxLength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  required: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {},
  onErrorClick: function onErrorClick() {},
  onClick: function onClick() {}
};
AtInput.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array]),
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  name: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  placeholderStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  placeholderClass: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  confirmType: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  cursor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  selectionStart: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  selectionEnd: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  adjustPosition: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  cursorSpacing: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  border: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  clear: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onErrorClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  required: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};

/***/ }),

/***/ "./src/libs/taro-ui/components/list/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/list/index.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtList; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtList = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtList, _AtComponent);

  function AtList() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtList);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtList).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtList, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-list', {
        'at-list--no-border': !this.props.hasBorder
      }, this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtList;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtList.defaultProps = {
  hasBorder: true
};
AtList.propTypes = {
  hasBorder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

/***/ }),

/***/ "./src/libs/taro-ui/components/list/item/index.js":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/list/item/index.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtListItem; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");














var AtListItem = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtListItem, _AtComponent);

  function AtListItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtListItem);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtListItem)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onClick) && !_this.props.disabled) {
        var _this$props;

        (_this$props = _this.props).onClick.apply(_this$props, arguments);
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleSwitchChange", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(_this.props.onSwitchChange) && !_this.props.disabled) {
        var _this$props2;

        (_this$props2 = _this.props).onSwitchChange.apply(_this$props2, arguments);
      }
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtListItem, [{
    key: "handleSwitchClick",
    value: function handleSwitchClick(e) {
      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          note = _this$props3.note,
          arrow = _this$props3.arrow,
          thumb = _this$props3.thumb,
          iconInfo = _this$props3.iconInfo,
          disabled = _this$props3.disabled,
          isSwitch = _this$props3.isSwitch,
          hasBorder = _this$props3.hasBorder,
          extraThumb = _this$props3.extraThumb,
          switchColor = _this$props3.switchColor,
          switchIsCheck = _this$props3.switchIsCheck;
      var _this$props4 = this.props,
          extraText = _this$props4.extraText,
          title = _this$props4.title;
      extraText = String(extraText);
      title = String(title);
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-list__item', {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder
      }, this.props.className);
      var iconClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()(iconInfo.prefixClass || 'at-icon', Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, "".concat(iconInfo.prefixClass || 'at-icon', "-").concat(iconInfo.value), iconInfo.value), iconInfo.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootClass,
        onClick: this.handleClick
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-list__item-container"
      }, thumb && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-list__item-thumb item-thumb"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
        className: "item-thumb__info",
        mode: "scaleToFill",
        src: thumb
      })), iconInfo.value && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-list__item-icon item-icon"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: iconClass,
        style: this.mergeStyle({
          color: iconInfo.color || '',
          fontSize: "".concat(iconInfo.size || 24, "px")
        }, iconInfo.customStyle)
      })), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-list__item-content item-content"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-content__info"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-content__info-title"
      }, title), note && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-content__info-note"
      }, note))), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-list__item-extra item-extra"
      }, extraText && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-extra__info"
      }, extraText), extraThumb && !extraText && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-extra__image"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
        className: "item-extra__image-info",
        mode: "aspectFit",
        src: extraThumb
      })), isSwitch && !extraThumb && !extraText && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-extra__switch",
        onClick: this.handleSwitchClick
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Switch */ "l"], {
        color: switchColor,
        disabled: disabled,
        checked: switchIsCheck,
        onChange: this.handleSwitchChange
      })), arrow ? nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "item-extra__icon"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "at-icon item-extra__icon-arrow at-icon-chevron-".concat(arrow)
      })) : null)));
    }
  }]);

  return AtListItem;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtListItem.defaultProps = {
  note: '',
  disabled: false,
  title: '',
  thumb: '',
  isSwitch: false,
  hasBorder: true,
  switchColor: '#6190E8',
  switchIsCheck: false,
  extraText: '',
  extraThumb: '',
  iconInfo: {},
  onSwitchChange: function onSwitchChange() {},
  onClick: function onClick() {}
};
AtListItem.propTypes = {
  note: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  thumb: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  isSwitch: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  hasBorder: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  switchColor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  switchIsCheck: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  extraText: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  extraThumb: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  onSwitchChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  arrow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['up', 'down', 'right']),
  iconInfo: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    size: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
    value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    prefixClass: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
    className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string])
  })
};

/***/ }),

/***/ "./src/libs/taro-ui/components/load-more/index.js":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/load-more/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_activity_indicator_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/activity-indicator/index */ "./src/libs/taro-ui/components/activity-indicator/index.js");
/* harmony import */ var _components_button_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/button/index */ "./src/libs/taro-ui/components/button/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");













var AtLoadMore = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtLoadMore, _AtComponent);

  function AtLoadMore() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtLoadMore);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtLoadMore).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtLoadMore, [{
    key: "onClick",
    value: function onClick() {
      var _this$props;

      (_this$props = this.props).onClick.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          customStyle = _this$props2.customStyle,
          loadingText = _this$props2.loadingText,
          moreText = _this$props2.moreText,
          status = _this$props2.status,
          moreBtnStyle = _this$props2.moreBtnStyle,
          noMoreTextStyle = _this$props2.noMoreTextStyle,
          noMoreText = _this$props2.noMoreText;
      var component = null;

      if (status === 'loading') {
        component = nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_activity_indicator_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
          mode: "center",
          content: loadingText
        });
      } else if (status === 'more') {
        component = nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: "at-load-more__cnt"
        }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_button_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          full: true,
          onClick: this.onClick.bind(this),
          customStyle: moreBtnStyle
        }, moreText));
      } else {
        component = nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
          className: "at-load-more__tip",
          style: noMoreTextStyle
        }, noMoreText);
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-load-more', className),
        style: customStyle
      }, component);
    }
  }]);

  return AtLoadMore;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


AtLoadMore.defaultProps = {
  customStyle: '',
  className: '',
  noMoreTextStyle: '',
  moreBtnStyle: '',
  status: 'more',
  loadingText: '加载中',
  moreText: '查看更多',
  noMoreText: '没有更多',
  onClick: function onClick() {}
};
AtLoadMore.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  noMoreTextStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  moreBtnStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  status: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['more', 'loading', 'noMore']),
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  moreText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  noMoreText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/loading/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/loading/index.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtLoading; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtLoading = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtLoading, _AtComponent);

  function AtLoading() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtLoading);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtLoading).apply(this, arguments));

    if (false) {}

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtLoading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          size = _this$props.size;
      var sizeStyle = {
        width: size ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.pxTransform(parseInt(size))) : '',
        height: size ? "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.pxTransform(parseInt(size))) : ''
      };
      var colorStyle = {
        'border': color ? "1px solid ".concat(color) : '',
        'borderColor': color ? "".concat(color, " transparent transparent transparent") : ''
      };
      var ringStyle = Object.assign({}, colorStyle, sizeStyle);
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-loading",
        style: sizeStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-loading__ring",
        style: ringStyle
      }), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-loading__ring",
        style: ringStyle
      }), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-loading__ring",
        style: ringStyle
      }));
    }
  }]);

  return AtLoading;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtLoading.defaultProps = {
  size: 0,
  color: ''
};
AtLoading.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number])
};

/***/ }),

/***/ "./src/libs/taro-ui/components/message/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/message/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtMessage = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtMessage, _AtComponent);

  function AtMessage() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtMessage);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtMessage).apply(this, arguments));
    _this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000
    };
    _this._timer = null;
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtMessage, [{
    key: "bindMessageListener",
    value: function bindMessageListener() {
      var _this2 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter.on('atMessage', function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var message = options.message,
            type = options.type,
            duration = options.duration;
        var newState = {
          _isOpened: true,
          _message: message,
          _type: type,
          _duration: duration || _this2.state._duration
        };

        _this2.setState(newState, function () {
          clearTimeout(_this2._timer);
          _this2._timer = setTimeout(function () {
            _this2.setState({
              _isOpened: false
            });
          }, _this2.state._duration);
        });
      }); // 绑定函数

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.atMessage = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter.trigger.bind(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter, 'atMessage');
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.bindMessageListener();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindMessageListener();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter.off('atMessage');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.eventCenter.off('atMessage');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          customStyle = _this$props.customStyle;
      var _this$state = this.state,
          _message = _this$state._message,
          _isOpened = _this$state._isOpened,
          _type = _this$state._type;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        'at-message': true,
        'at-message--show': _isOpened,
        'at-message--hidden': !_isOpened
      }, "at-message--".concat(_type), className);
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, _message);
    }
  }]);

  return AtMessage;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtMessage.defaultProps = {
  customStyle: '',
  className: ''
};
AtMessage.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string])
};

/***/ }),

/***/ "./src/libs/taro-ui/components/modal/action/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/modal/action/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModalAction; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtModalAction = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtModalAction, _AtComponent);

  function AtModalAction() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModalAction);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModalAction).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModalAction, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-modal__footer', {
        'at-modal__footer--simple': this.props.isSimple
      }, this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: rootClass
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-modal__action"
      }, this.props.children));
    }
  }]);

  return AtModalAction;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtModalAction.defaultProps = {
  isSimple: false
};
AtModalAction.propTypes = {
  isSimple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

/***/ }),

/***/ "./src/libs/taro-ui/components/modal/content/index.js":
/*!************************************************************!*\
  !*** ./src/libs/taro-ui/components/modal/content/index.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModalContent; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");










var AtModalContent = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtModalContent, _AtComponent);

  function AtModalContent() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModalContent);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModalContent).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModalContent, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()('at-modal__content', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "h"], {
        scrollY: true,
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtModalContent;
}(_common_component__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ "./src/libs/taro-ui/components/modal/header/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/modal/header/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtModalHeader; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");










var AtModalHeader = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtModalHeader, _AtComponent);

  function AtModalHeader() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModalHeader);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModalHeader).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModalHeader, [{
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()('at-modal__header', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtModalHeader;
}(_common_component__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ "./src/libs/taro-ui/components/modal/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/modal/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/index */ "./src/libs/taro-ui/components/modal/header/index.js");
/* harmony import */ var _action_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./action/index */ "./src/libs/taro-ui/components/modal/action/index.js");
/* harmony import */ var _content_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content/index */ "./src/libs/taro-ui/components/modal/content/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");



















var AtModal = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtModal, _AtComponent);

  function AtModal(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtModal);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtModal).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClickOverlay", function () {
      if (_this.props.closeOnClickOverlay) {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClose", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.onClose)) {
        _this.props.onClose();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleCancel", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.onCancel)) {
        _this.props.onCancel();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleConfirm", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.onConfirm)) {
        _this.props.onConfirm();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleTouchMove", function (e) {
      e.stopPropagation();
    });

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;

      if (this.props.isOpened !== isOpened) {
        Object(_common_utils__WEBPACK_IMPORTED_MODULE_17__[/* handleTouchScroll */ "e"])(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          _isOpened = _this$state._isOpened,
          isWEB = _this$state.isWEB;
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          cancelText = _this$props.cancelText,
          confirmText = _this$props.confirmText;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-modal', {
        'at-modal--active': _isOpened
      }, this.props.className);

      if (title || content) {
        var isRenderAction = cancelText || confirmText;
        return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: rootClass
        }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          onClick: this.handleClickOverlay,
          className: "at-modal__overlay"
        }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: "at-modal__container"
        }, title && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_header_index__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], null, title)), content && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_content_index__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: "content-simple"
        }, isWEB ? nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
          dangerouslySetInnerHTML: {
            __html: content.replace(/\n/g, '<br/>')
          }
        }) : nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], null, content))), isRenderAction && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_action_index__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          isSimple: true
        }, cancelText && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
          onClick: this.handleCancel
        }, cancelText), confirmText && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Button */ "a"], {
          onClick: this.handleConfirm
        }, confirmText))));
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        onTouchMove: this.handleTouchMove,
        className: rootClass
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-modal__overlay",
        onClick: this.handleClickOverlay
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-modal__container"
      }, this.props.children));
    }
  }]);

  return AtModal;
}(_common_component__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"]);


AtModal.defaultProps = {
  closeOnClickOverlay: true
};
AtModal.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  content: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  closeOnClickOverlay: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  confirmText: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};

/***/ }),

/***/ "./src/libs/taro-ui/components/nav-bar/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/nav-bar/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/_lodash@4.17.15@lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");















var AtNavBar = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtNavBar, _AtComponent);

  function AtNavBar() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, AtNavBar);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtNavBar).apply(this, arguments));

    if (false) {}

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtNavBar, [{
    key: "handleClickLeftView",
    value: function handleClickLeftView() {
      var _this$props;

      (_this$props = this.props).onClickLeftIcon.apply(_this$props, arguments);
    }
  }, {
    key: "handleClickSt",
    value: function handleClickSt() {
      var _this$props2;

      (_this$props2 = this.props).onClickRgIconSt.apply(_this$props2, arguments);
    }
  }, {
    key: "handleClickNd",
    value: function handleClickNd() {
      var _this$props3;

      (_this$props3 = this.props).onClickRgIconNd.apply(_this$props3, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          customStyle = _this$props4.customStyle,
          className = _this$props4.className,
          color = _this$props4.color,
          fixed = _this$props4.fixed,
          border = _this$props4.border,
          leftIconType = _this$props4.leftIconType,
          leftText = _this$props4.leftText,
          title = _this$props4.title,
          rightFirstIconType = _this$props4.rightFirstIconType,
          rightSecondIconType = _this$props4.rightSecondIconType;
      var linkStyle = {
        color: color
      };
      var defaultIconInfo = {
        customStyle: '',
        className: '',
        prefixClass: 'at-icon',
        value: '',
        color: '',
        size: 24
      };
      var leftIconInfo = lodash_isObject__WEBPACK_IMPORTED_MODULE_12___default()(leftIconType) ? Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, defaultIconInfo, {}, leftIconType) : Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, defaultIconInfo, {
        value: leftIconType
      });
      var leftIconClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()(leftIconInfo.prefixClass, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "".concat(leftIconInfo.prefixClass, "-").concat(leftIconInfo.value), leftIconInfo.value), leftIconInfo.className);
      var rightFirstIconInfo = lodash_isObject__WEBPACK_IMPORTED_MODULE_12___default()(rightFirstIconType) ? Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, defaultIconInfo, {}, rightFirstIconType) : Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, defaultIconInfo, {
        value: rightFirstIconType
      });
      var rightFirstIconClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()(rightFirstIconInfo.prefixClass, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "".concat(rightFirstIconInfo.prefixClass, "-").concat(rightFirstIconInfo.value), rightFirstIconInfo.value), rightFirstIconInfo.className);
      var rightSecondIconInfo = lodash_isObject__WEBPACK_IMPORTED_MODULE_12___default()(rightSecondIconType) ? Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, defaultIconInfo, {}, rightSecondIconType) : Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, defaultIconInfo, {
        value: rightSecondIconType
      });
      var rightSecondIconClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()(rightSecondIconInfo.prefixClass, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "".concat(rightSecondIconInfo.prefixClass, "-").concat(rightSecondIconInfo.value), rightSecondIconInfo.value), rightSecondIconInfo.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border
        }, className),
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-nav-bar__left-view",
        onClick: this.handleClickLeftView.bind(this),
        style: linkStyle
      }, leftIconType && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: leftIconClass,
        style: this.mergeStyle({
          color: leftIconInfo.color,
          fontSize: "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.pxTransform(parseInt(leftIconInfo.size) * 2))
        }, leftIconInfo.customStyle)
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "at-nav-bar__text"
      }, leftText)), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-nav-bar__title"
      }, title || this.props.children), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-nav-bar__right-view"
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
          'at-nav-bar__container': true,
          'at-nav-bar__container--hide': !rightSecondIconType
        }),
        style: linkStyle,
        onClick: this.handleClickNd.bind(this)
      }, rightSecondIconType && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: rightSecondIconClass,
        style: this.mergeStyle({
          color: rightSecondIconInfo.color,
          fontSize: "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.pxTransform(parseInt(rightSecondIconInfo.size) * 2))
        }, rightSecondIconInfo.customStyle)
      })), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()({
          'at-nav-bar__container': true,
          'at-nav-bar__container--hide': !rightFirstIconType
        }),
        style: linkStyle,
        onClick: this.handleClickSt.bind(this)
      }, rightFirstIconType && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: rightFirstIconClass,
        style: this.mergeStyle({
          color: rightFirstIconInfo.color,
          fontSize: "".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.pxTransform(parseInt(rightFirstIconInfo.size) * 2))
        }, rightFirstIconInfo.customStyle)
      }))));
    }
  }]);

  return AtNavBar;
}(_common_component__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);


AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeftIcon: function onClickLeftIcon() {},
  onClickRgIconSt: function onClickRgIconSt() {},
  onClickRgIconNd: function onClickRgIconNd() {}
};
AtNavBar.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  border: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  leftIconType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object]),
  leftText: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  rightFirstIconType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object]),
  rightSecondIconType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object]),
  onClickLeftIcon: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onClickRgIconSt: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onClickRgIconNd: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/noticebar/index.js":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/noticebar/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtNoticebar = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtNoticebar, _AtComponent);

  function AtNoticebar() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtNoticebar);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtNoticebar).apply(this, arguments));
    var animElemId = "J_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    _this.state = {
      show: true,
      animElemId: animElemId,
      dura: 15,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.ALIPAY,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtNoticebar, [{
    key: "onClose",
    value: function onClose() {
      var _this$props;

      this.setState({
        show: false
      });
      this.props.onClose && (_this$props = this.props).onClose.apply(_this$props, arguments);
    }
  }, {
    key: "onGotoMore",
    value: function onGotoMore() {
      var _this$props2;

      this.props.onGotoMore && (_this$props2 = this.props).onGotoMore.apply(_this$props2, arguments);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      if (!this.timeout) {
        this.interval && clearInterval(this.interval);
        this.initAnimation();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.marquee) return;
      this.initAnimation();
    }
  }, {
    key: "initAnimation",
    value: function initAnimation() {
      var _this2 = this;

      var _this$state = this.state,
          isWEAPP = _this$state.isWEAPP,
          isALIPAY = _this$state.isALIPAY;
      this.timeout = setTimeout(function () {
        _this2.timeout = null;

        if (_this2.state.isWEB) {
          var elem = document.querySelector(".".concat(_this2.state.animElemId));
          if (!elem) return;
          var width = elem.getBoundingClientRect().width;
          var dura = width / +_this2.props.speed;

          _this2.setState({
            dura: dura
          });
        } else if (isWEAPP || isALIPAY) {
          var query = isALIPAY ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createSelectorQuery() : _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createSelectorQuery();
          console.log(_this2.state.animElemId);
          query.select(".".concat(_this2.state.animElemId)).boundingClientRect().exec(function (res) {
            res = res[0];
            if (!res) return;
            var _res = res,
                width = _res.width;
            var dura = width / +_this2.props.speed;
            var animation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            });
            var resetAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var resetOpacityAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });

            var animBody = function animBody() {
              resetOpacityAnimation.opacity(0).step();

              _this2.setState({
                animationData: resetOpacityAnimation.export()
              });

              setTimeout(function () {
                resetAnimation.translateX(0).step();

                _this2.setState({
                  animationData: resetAnimation.export()
                });
              }, 300);
              setTimeout(function () {
                resetOpacityAnimation.opacity(1).step();

                _this2.setState({
                  animationData: resetOpacityAnimation.export()
                });
              }, 600);
              setTimeout(function () {
                animation.translateX(-width).step();

                _this2.setState({
                  animationData: animation.export()
                });
              }, 900);
            };

            animBody();
            _this2.interval = setInterval(animBody, dura * 1000 + 1000);
          });
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          single = _this$props3.single,
          icon = _this$props3.icon,
          marquee = _this$props3.marquee,
          customStyle = _this$props3.customStyle;
      var _this$props4 = this.props,
          showMore = _this$props4.showMore,
          close = _this$props4.close;
      var dura = this.state.dura;
      var rootClassName = ['at-noticebar'];
      var _moreText = this.props.moreText;
      if (!single) showMore = false;
      if (!_moreText) _moreText = '查看详情';
      var style = {};
      var innerClassName = ['at-noticebar__content-inner'];

      if (marquee) {
        close = false;
        style['animation-duration'] = "".concat(dura, "s");
        innerClassName.push(this.state.animElemId);
      }

      var classObject = {
        'at-noticebar--marquee': marquee,
        'at-noticebar--weapp': marquee && (this.state.isWEAPP || this.state.isALIPAY),
        'at-noticebar--single': !marquee && single
      };
      var iconClass = ['at-icon'];
      if (icon) iconClass.push("at-icon-".concat(icon));
      return this.state.show && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(rootClassName, classObject, this.props.className),
        style: customStyle
      }, close && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-noticebar__close",
        onClick: this.onClose.bind(this)
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "at-icon at-icon-close"
      })), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-noticebar__content"
      }, icon && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-noticebar__content-icon"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(iconClass, iconClass)
      })), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-noticebar__content-text"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        animation: this.state.animationData,
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(innerClassName),
        id: this.state.animElemId,
        style: style
      }, this.props.children))), showMore && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-noticebar__more",
        onClick: this.onGotoMore.bind(this)
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "text"
      }, _moreText), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-noticebar__more-icon"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "m"], {
        className: "at-icon at-icon-chevron-right"
      }))));
    }
  }]);

  return AtNoticebar;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {},
  onClose: function onClose() {},
  onGotoMore: function onGotoMore() {}
};
AtNoticebar.propTypes = {
  close: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  single: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  marquee: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  speed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  moreText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  showMore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onGotoMore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/libs/taro-ui/components/pagination/index.js":
/*!*********************************************************!*\
  !*** ./src/libs/taro-ui/components/pagination/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../button/index */ "./src/libs/taro-ui/components/button/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var MIN_MAXPAGE = 1;

var getMaxPage = function getMaxPage() {
  var maxPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (maxPage <= 0) return MIN_MAXPAGE;
  return maxPage;
};

var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (val, index) {
    return index + 1;
  });
  return range;
};

var AtPagination = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtPagination, _AtComponent);

  function AtPagination() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtPagination);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtPagination).apply(this, arguments));
    var _this$props = _this.props,
        current = _this$props.current,
        pageSize = _this$props.pageSize,
        total = _this$props.total;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    _this.state = {
      currentPage: current,
      maxPage: maxPage,
      pickerRange: createPickerRange(maxPage)
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtPagination, [{
    key: "onPrev",
    value: function onPrev() {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      currentPage -= 1;
      currentPage = Math.max(1, currentPage);
      if (originCur === currentPage) return;
      this.props.onPageChange && this.props.onPageChange({
        type: 'prev',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      var maxPage = this.state.maxPage;
      currentPage += 1;
      currentPage = Math.min(maxPage, currentPage);
      if (originCur === currentPage) return;
      this.props.onPageChange && this.props.onPageChange({
        type: 'next',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var total = props.total,
          pageSize = props.pageSize,
          current = props.current;
      var maxPage = getMaxPage(Math.ceil(total / pageSize));

      if (maxPage !== this.state.maxPage) {
        this.setState({
          maxPage: maxPage,
          pickerRange: createPickerRange(maxPage)
        });
      }

      if (current !== this.state.currentPage) {
        this.setState({
          currentPage: current
        });
      }
    } // onPickerChange (evt) {
    //   const { value } = evt.detail
    //   const current = +value + 1
    //   if (current === this.state.currentPage) return
    //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
    //   this.setState({
    //     currentPage: current,
    //   })
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          customStyle = _this$props2.customStyle;
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          maxPage = _this$state.maxPage;
      var rootClassName = ['at-pagination'];
      var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
      var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
      var classObject = {
        'at-pagination--icon': icon
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(rootClassName, classObject, this.props.className),
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-pagination__btn-prev"
      }, icon && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_button_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onClick: this.onPrev.bind(this),
        size: "small",
        disabled: prevDisabled
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
        className: "at-icon at-icon-chevron-left"
      })), !icon && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_button_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onClick: this.onPrev.bind(this),
        size: "small",
        disabled: prevDisabled
      }, "\u4E0A\u4E00\u9875")), nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-pagination__number"
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
        className: "at-pagination__number-current"
      }, currentPage), "/", maxPage), nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-pagination__btn-next"
      }, icon && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_button_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onClick: this.onNext.bind(this),
        size: "small",
        disabled: nextDisabled
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
        className: "at-icon at-icon-chevron-right"
      })), !icon && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_button_index__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onClick: this.onNext.bind(this),
        size: "small",
        disabled: nextDisabled
      }, "\u4E0B\u4E00\u9875")));
    }
  }]);

  return AtPagination;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  pickerSelect: false,
  customStyle: {},
  onPageChange: function onPageChange() {}
};
AtPagination.propTypes = {
  current: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  pickerSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/progress/index.js":
/*!*******************************************************!*\
  !*** ./src/libs/taro-ui/components/progress/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtProgress = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtProgress, _AtComponent);

  function AtProgress() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtProgress);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtProgress).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtProgress, [{
    key: "render",
    value: function render() {
      var color = this.props.color;
      var percent = this.props.percent;
      var _this$props = this.props,
          strokeWidth = _this$props.strokeWidth,
          status = _this$props.status,
          isHidePercent = _this$props.isHidePercent;

      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }

      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-progress', Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, "at-progress--".concat(status), !!status), this.props.className);
      var iconClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-icon', {
        'at-icon-close-circle': status === 'error',
        'at-icon-check-circle': status === 'success'
      });
      var progressStyle = {
        width: percent && "".concat(+percent, "%"),
        height: strokeWidth && "".concat(+strokeWidth, "px"),
        backgroundColor: color
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: rootClass
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-progress__outer"
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-progress__outer-inner"
      }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-progress__outer-inner-background",
        style: progressStyle
      }))), !isHidePercent && nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: "at-progress__content"
      }, !status || status === 'progress' ? "".concat(percent, "%") : nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
        className: iconClass
      })));
    }
  }]);

  return AtProgress;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtProgress.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  status: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  isHidePercent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

/***/ }),

/***/ "./src/libs/taro-ui/components/radio/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/radio/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtRadio = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtRadio, _AtComponent);

  function AtRadio() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtRadio);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtRadio).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtRadio, [{
    key: "handleClick",
    value: function handleClick(option) {
      var _this$props;

      if (option.disabled) return;

      (_this$props = this.props).onClick.apply(_this$props, [option.value].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          options = _this$props2.options,
          value = _this$props2.value;
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-radio', className),
        style: customStyle
      }, options.map(function (option) {
        return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          key: option.value,
          onClick: _this.handleClick.bind(_this, option),
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
            'at-radio__option': true,
            'at-radio__option--disabled': option.disabled
          })
        }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: "at-radio__option-wrap"
        }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: "at-radio__option-container"
        }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: "at-radio__title"
        }, option.label), nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
            'at-radio__icon': true,
            'at-radio__icon--checked': value === option.value
          })
        }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "m"], {
          className: "at-icon at-icon-check"
        }))), option.desc && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: "at-radio__desc"
        }, option.desc)));
      }));
    }
  }]);

  return AtRadio;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  onClick: function onClick() {}
};
AtRadio.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/range/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/range/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");















var AtRange = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtRange, _AtComponent);

  function AtRange(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtRange);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtRange).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleClick", function (event) {
      if (_this.currentSlider && !_this.props.disabled) {
        var sliderValue = 0;
        var detail = Object(_common_utils__WEBPACK_IMPORTED_MODULE_12__[/* getEventDetail */ "d"])(event);
        sliderValue = detail.x - _this.left;

        _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
      }
    });

    var max = props.max,
        min = props.min; // range 宽度

    _this.width = 0; // range 到屏幕左边的距离

    _this.left = 0;
    _this.deltaValue = max - min;
    _this.currentSlider = '';
    _this.state = {
      aX: 0,
      bX: 0
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtRange, [{
    key: "handleTouchMove",
    value: function handleTouchMove(sliderName, event) {
      if (this.props.disabled) return;
      event.stopPropagation();
      var clientX = event.touches[0].clientX;
      this.setSliderValue(sliderName, clientX - this.left, 'onChange');
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(sliderName) {
      if (this.props.disabled) return;
      this.currentSlider = sliderName;
      this.triggerEvent('onAfterChange');
    }
  }, {
    key: "setSliderValue",
    value: function setSliderValue(sliderName, targetValue, funcName) {
      var _this2 = this;

      var distance = Math.min(Math.max(targetValue, 0), this.width);
      var sliderValue = Math.floor(distance / this.width * 100);

      if (funcName) {
        this.setState(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({}, sliderName, sliderValue), function () {
          return _this2.triggerEvent(funcName);
        });
      } else {
        this.setState(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({}, sliderName, sliderValue));
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var aX = Math.round((value[0] - this.props.min) / this.deltaValue * 100); // fix issue #670

      var bX = Math.round((value[1] - this.props.min) / this.deltaValue * 100); // fix issue #670

      this.setState({
        aX: aX,
        bX: bX
      });
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(funcName) {
      var _this$state = this.state,
          aX = _this$state.aX,
          bX = _this$state.bX;
      var a = Math.round(aX / 100 * this.deltaValue) + this.props.min; // fix issue #670

      var b = Math.round(bX / 100 * this.deltaValue) + this.props.min; // fix issue #670

      var result = [a, b].sort(function (x, y) {
        return x - y;
      });

      if (funcName === 'onChange') {
        this.props.onChange(result);
      } else if (funcName === 'onAfterChange') {
        this.props.onAfterChange(result);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      if (this.props.value[0] !== value[0] && this.props.value[1] !== value[1]) {
        this.setValue(value);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var value = this.props.value;
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_12__[/* delayQuerySelector */ "c"])(this, '.at-range__container', 0).then(function (rect) {
        _this3.width = Math.round(rect[0].width);
        _this3.left = Math.round(rect[0].left);

        _this3.setValue(value);
      }); // this.triggerEvent('onChange')
      // this.triggerEvent('onAfterChange')
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          customStyle = _this$props.customStyle,
          sliderStyle = _this$props.sliderStyle,
          railStyle = _this$props.railStyle,
          trackStyle = _this$props.trackStyle,
          blockSize = _this$props.blockSize,
          disabled = _this$props.disabled;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-range', {
        'at-range--disabled': disabled
      }, className);
      var _this$state2 = this.state,
          aX = _this$state2.aX,
          bX = _this$state2.bX;
      var sliderCommonStyle = {
        width: blockSize ? "".concat(blockSize, "PX") : '',
        height: blockSize ? "".concat(blockSize, "PX") : '',
        marginLeft: blockSize ? "".concat(-blockSize / 2, "PX") : ''
      };

      var sliderAStyle = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sliderCommonStyle, {
        left: "".concat(aX, "%")
      });

      var sliderBStyle = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sliderCommonStyle, {
        left: "".concat(bX, "%")
      });

      var containerStyle = {
        height: blockSize ? "".concat(blockSize, "PX") : ''
      };
      var smallerX = Math.min(aX, bX);
      var deltaX = Math.abs(aX - bX);
      var atTrackStyle = {
        left: "".concat(smallerX, "%"),
        width: "".concat(deltaX, "%")
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: rootCls,
        style: customStyle,
        onClick: this.handleClick
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-range__container",
        style: containerStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-range__rail",
        style: railStyle
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-range__track",
        style: this.mergeStyle(atTrackStyle, trackStyle)
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-range__slider",
        style: this.mergeStyle(sliderAStyle, sliderStyle),
        onTouchMove: this.handleTouchMove.bind(this, 'aX'),
        onTouchEnd: this.handleTouchEnd.bind(this, 'aX')
      }), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: "at-range__slider",
        style: this.mergeStyle(sliderBStyle, sliderStyle),
        onTouchMove: this.handleTouchMove.bind(this, 'bX'),
        onTouchEnd: this.handleTouchEnd.bind(this, 'bX')
      })));
    }
  }]);

  return AtRange;
}(_common_component__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);


AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0,
  onChange: function onChange() {},
  onAfterChange: function onAfterChange() {}
};
AtRange.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  sliderStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  railStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  trackStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  isTest: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  min: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  blockSize: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onAfterChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/rate/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/rate/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtRate = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtRate, _AtComponent);

  function AtRate() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtRate);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtRate).apply(this, arguments));

    if (false) {}

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtRate, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props;

      (_this$props = this.props).onChange.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          value = _this$props2.value,
          max = _this$props2.max,
          size = _this$props2.size,
          margin = _this$props2.margin;
      var iconStyle = {
        marginRight: _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.pxTransform(margin)
      };
      var starIconStyle = {
        fontSize: size ? "".concat(size, "px") : ''
      }; // 生成星星颜色 className 数组，方便在jsx中直接map

      var classNameArr = [];
      var floorValue = Math.floor(value);
      var ceilValue = Math.ceil(value);

      for (var i = 0; i < max; i++) {
        if (floorValue > i) {
          classNameArr.push('at-rate__icon at-rate__icon--on');
        } else if (ceilValue - 1 === i) {
          classNameArr.push('at-rate__icon at-rate__icon--half');
        } else {
          classNameArr.push('at-rate__icon at-rate__icon--off');
        }
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-rate', className),
        style: customStyle
      }, classNameArr.map(function (cls, i) {
        return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: cls,
          key: "at-rate-star-".concat(i),
          style: iconStyle,
          onClick: _this2.handleClick.bind(_this2, i + 1)
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
          className: "at-icon at-icon-star-2",
          style: starIconStyle
        }), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-rate__left"
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
          className: "at-icon at-icon-star-2",
          style: starIconStyle
        })));
      }));
    }
  }]);

  return AtRate;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtRate.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5,
  onChange: function onChange() {}
};
AtRate.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/search-bar/index.js":
/*!*********************************************************!*\
  !*** ./src/libs/taro-ui/components/search-bar/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");













var AtSearchBar = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtSearchBar, _AtComponent);

  function AtSearchBar(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtSearchBar);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtSearchBar).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleFocus", function () {
      var _this$props;

      _this.setState({
        isFocus: true
      });

      (_this$props = _this.props).onFocus.apply(_this$props, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleBlur", function () {
      var _this$props2;

      _this.setState({
        isFocus: false
      });

      (_this$props2 = _this.props).onBlur.apply(_this$props2, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleChange", function (e) {
      var _this$props3;

      for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
      }

      return (_this$props3 = _this.props).onChange.apply(_this$props3, [e.target.value].concat(arg));
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClear", function () {
      if (_this.props.onClear) {
        _this.props.onClear();
      } else {
        var _this$props4;

        for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          arg[_key2] = arguments[_key2];
        }

        (_this$props4 = _this.props).onChange.apply(_this$props4, [''].concat(arg));
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleConfirm", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onConfirm.apply(_this$props5, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleActionClick", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onActionClick.apply(_this$props6, arguments);
    });

    _this.state = {
      isFocus: props.focus
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtSearchBar, [{
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          value = _this$props7.value,
          placeholder = _this$props7.placeholder,
          maxLength = _this$props7.maxLength,
          fixed = _this$props7.fixed,
          disabled = _this$props7.disabled,
          showActionButton = _this$props7.showActionButton,
          actionName = _this$props7.actionName,
          inputType = _this$props7.inputType,
          className = _this$props7.className,
          customStyle = _this$props7.customStyle;
      var isFocus = this.state.isFocus;
      var fontSize = 14;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-search-bar', {
        'at-search-bar--fixed': fixed
      }, className);
      var placeholderWrapStyle = {};
      var actionStyle = {};

      if (isFocus || !isFocus && value) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
        placeholderWrapStyle.flexGrow = 0;
      } else if (!isFocus && !value) {
        placeholderWrapStyle.flexGrow = 1;
        actionStyle.opacity = 0;
        actionStyle.marginRight = "-".concat((actionName.length + 1) * fontSize + fontSize / 2 + 10, "px");
      }

      if (showActionButton) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
      }

      var clearIconStyle = {
        display: 'flex'
      };
      var placeholderStyle = {
        visibility: 'hidden'
      };

      if (!value.length) {
        clearIconStyle.display = 'none';
        placeholderStyle.visibility = 'visible';
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-search-bar__input-cnt"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-search-bar__placeholder-wrap",
        style: placeholderWrapStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "at-icon at-icon-search"
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "at-search-bar__placeholder",
        style: placeholderStyle
      }, isFocus ? '' : placeholder)), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
        className: "at-search-bar__input",
        type: inputType,
        confirmType: "search",
        value: value,
        focus: isFocus,
        disabled: disabled,
        maxLength: maxLength,
        onInput: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onConfirm: this.handleConfirm
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-search-bar__clear",
        style: clearIconStyle,
        onTouchStart: this.handleClear
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: "at-icon at-icon-close-circle"
      }))), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-search-bar__action",
        style: actionStyle,
        onClick: this.handleActionClick
      }, actionName));
    }
  }]);

  return AtSearchBar;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);

AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  inputType: 'text',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {},
  onActionClick: function onActionClick() {}
};
AtSearchBar.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  showActionButton: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  actionName: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onActionClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onClear: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};
/* unused harmony default export */ var _unused_webpack_default_export = (AtSearchBar);

/***/ }),

/***/ "./src/libs/taro-ui/components/segmented-control/index.js":
/*!****************************************************************!*\
  !*** ./src/libs/taro-ui/components/segmented-control/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__[/* initTestEnv */ "f"])();

var AtSegmentedControl = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtSegmentedControl, _AtComponent);

  function AtSegmentedControl() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtSegmentedControl);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtSegmentedControl).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtSegmentedControl, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props;

      if (this.props.disable) return;

      (_this$props = this.props).onClick.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          values = _this$props2.values,
          selectedColor = _this$props2.selectedColor,
          current = _this$props2.current,
          color = _this$props2.color,
          fontSize = _this$props2.fontSize;
      var rootStyle = {
        borderColor: selectedColor
      };
      var itemStyle = {
        color: selectedColor,
        fontSize: Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__[/* pxTransform */ "h"])(fontSize),
        borderColor: selectedColor,
        backgroundColor: color
      };
      var selectedItemStyle = {
        color: color,
        fontSize: Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__[/* pxTransform */ "h"])(fontSize),
        borderColor: selectedColor,
        backgroundColor: selectedColor
      };
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-segmented-control', {
        'at-segmented-control--disabled': disabled
      }, className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: rootCls,
        style: this.mergeStyle(rootStyle, customStyle)
      }, values.map(function (value, i) {
        return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('at-segmented-control__item', {
            'at-segmented-control__item--active': current === i
          }),
          style: current === i ? selectedItemStyle : itemStyle,
          key: value,
          onClick: _this.handleClick.bind(_this, i)
        }, value);
      }));
    }
  }]);

  return AtSegmentedControl;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 0,
  disabled: false,
  selectedColor: '',
  values: [],
  onClick: function onClick() {}
};
AtSegmentedControl.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  current: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  values: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/slider/index.js":
/*!*****************************************************!*\
  !*** ./src/libs/taro-ui/components/slider/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtSlider = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtSlider, _AtComponent);

  function AtSlider(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtSlider);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtSlider).apply(this, arguments));
    var value = props.value,
        min = props.min,
        max = props.max;
    _this.state = {
      _value: AtSlider.clampNumber(value, min, max)
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtSlider, [{
    key: "handleChanging",
    value: function handleChanging(e) {
      var _value = this.state._value;
      var value = e.detail.value;

      if (value !== _value) {
        this.setState({
          _value: value
        });
      }

      this.props.onChanging({
        value: value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var value = e.detail.value;
      this.setState({
        _value: value
      });
      this.props.onChange({
        value: value
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var value = props.value,
          min = props.min,
          max = props.max;
      this.setState({
        _value: AtSlider.clampNumber(value, min, max)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _value = this.state._value;
      var _this$props = this.props,
          customStyle = _this$props.customStyle,
          className = _this$props.className,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          disabled = _this$props.disabled,
          activeColor = _this$props.activeColor,
          backgroundColor = _this$props.backgroundColor,
          blockSize = _this$props.blockSize,
          blockColor = _this$props.blockColor,
          showValue = _this$props.showValue;
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
          'at-slider': true,
          'at-slider--disabled': disabled
        }, className),
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-slider__inner"
      }, nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Slider */ "i"], {
        min: min,
        max: max,
        step: step,
        value: _value,
        disabled: disabled,
        activeColor: activeColor,
        backgroundColor: backgroundColor,
        blockSize: blockSize,
        blockColor: blockColor,
        onChanging: this.handleChanging.bind(this),
        onChange: this.handleChange.bind(this)
      })), showValue && nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: "at-slider__text"
      }, "".concat(_value)));
    }
  }], [{
    key: "clampNumber",
    value: function clampNumber(value, lower, upper) {
      return Math.max(lower, Math.min(upper, value));
    }
  }]);

  return AtSlider;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtSlider.defaultProps = {
  customStyle: '',
  className: '',
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  disabled: false,
  activeColor: '#6190e8',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false,
  onChange: function onChange() {},
  onChanging: function onChanging() {}
};
AtSlider.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  min: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  activeColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  blockSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  blockColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  showValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onChanging: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/steps/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/steps/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtSteps = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtSteps, _AtComponent);

  function AtSteps() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtSteps);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtSteps).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtSteps, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props;

      (_this$props = this.props).onChange.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          items = _this$props2.items,
          current = _this$props2.current;
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-steps', className),
        style: customStyle
      }, items.map(function (item, i) {
        var _classNames;

        return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          key: item.title,
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
            'at-steps__item': true,
            'at-steps__item--active': i === current,
            'at-steps__item--inactive': i !== current
          }),
          onClick: _this.handleClick.bind(_this, i)
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-steps__circular-wrap"
        }, i !== 0 && nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-steps__left-line"
        }), item.status ? nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
            'at-icon': true,
            'at-icon-check-circle': item.status === 'success',
            'at-icon-close-circle': item.status === 'error',
            'at-steps__single-icon': true,
            'at-steps__single-icon--success': item.status === 'success',
            'at-steps__single-icon--error': item.status === 'error'
          })
        }) : nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-steps__circular"
        }, item.icon ? nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-icon', (_classNames = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classNames, "at-icon-".concat(item.icon.value), item.icon.value), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classNames, 'at-steps__circle-icon', true), _classNames))
        }) : nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
          className: "at-steps__num"
        }, i + 1)), i !== items.length - 1 && nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-steps__right-line"
        })), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-steps__title"
        }, item.title), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-steps__desc"
        }, item.desc));
      }));
    }
  }]);

  return AtSteps;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  onChange: function onChange() {}
};
AtSteps.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  current: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  items: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/swipe-action/index.js":
/*!***********************************************************!*\
  !*** ./src/libs/taro-ui/components/swipe-action/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isNil */ "./node_modules/_lodash@4.17.15@lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/_lodash@4.17.15@lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/inRange */ "./node_modules/_lodash@4.17.15@lodash/inRange.js");
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_inRange__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _options_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./options/index */ "./src/libs/taro-ui/components/swipe-action/options/index.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");





















var AtSwipeAction = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AtSwipeAction, _AtComponent);

  function AtSwipeAction(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtSwipeAction);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtSwipeAction).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "computeTransform", function (value) {
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.ENV_TYPE.ALIPAY) {
        return !lodash_isNil__WEBPACK_IMPORTED_MODULE_13___default()(value) ? "translate3d(".concat(value, "px,0,0)") : null;
      }

      return value ? "translate3d(".concat(value, "px,0,0)") : null;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleOpened", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_16___default()(_this.props.onOpened) && !_this.state._isOpened) {
        _this.props.onOpened();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleClosed", function () {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_16___default()(_this.props.onClosed) && _this.state._isOpened) {
        _this.props.onClosed();
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleTouchStart", function (e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;
      if (_this.props.disabled) return;

      _this.getDomInfo();

      _this.startX = clientX;
      _this.startY = clientY;
      _this.isTouching = true;
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleTouchMove", function (e) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_14___default()(_this.domInfo)) {
        return;
      }

      var _assertThisInitialize = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this),
          startX = _assertThisInitialize.startX,
          startY = _assertThisInitialize.startY;

      var _this$domInfo = _this.domInfo,
          top = _this$domInfo.top,
          bottom = _this$domInfo.bottom,
          left = _this$domInfo.left,
          right = _this$domInfo.right;
      var _e$touches$2 = e.touches[0],
          clientX = _e$touches$2.clientX,
          clientY = _e$touches$2.clientY,
          pageX = _e$touches$2.pageX,
          pageY = _e$touches$2.pageY;
      var x = Math.abs(clientX - startX);
      var y = Math.abs(clientY - startY);

      var inDom = lodash_inRange__WEBPACK_IMPORTED_MODULE_15___default()(pageX, left, right) && lodash_inRange__WEBPACK_IMPORTED_MODULE_15___default()(pageY, top, bottom);

      if (!_this.isMoving && inDom) {
        _this.isMoving = y === 0 || x / y >= Math.tan(45 * Math.PI / 180).toFixed(2);
      }

      if (_this.isTouching && _this.isMoving) {
        e.preventDefault();
        var offsetSize = clientX - _this.startX;
        var isRight = offsetSize > 0;
        if (_this.state.offsetSize === 0 && isRight) return;
        var value = _this.endValue + offsetSize;

        _this.setState({
          offsetSize: value >= 0 ? 0 : value
        });
      }
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleTouchEnd", function () {
      _this.isTouching = false;
      var offsetSize = _this.state.offsetSize;
      _this.endValue = offsetSize;
      var breakpoint = _this.maxOffsetSize / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        _this._reset(true);

        return _this.handleOpened();
      }

      _this._reset();

      _this.handleClosed();
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleDomInfo", function (_ref) {
      var width = _ref.width;
      var _isOpened = _this.state._isOpened;
      _this.maxOffsetSize = width;

      _this._reset(_isOpened);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleClick", function (item, index) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          autoClose = _this$props.autoClose;

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_16___default()(onClick)) {
        for (var _len = arguments.length, arg = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          arg[_key - 2] = arguments[_key];
        }

        onClick.apply(void 0, [item, index].concat(arg));
      }

      if (autoClose) {
        _this._reset();

        _this.handleClosed();
      }
    });

    var isOpened = props.isOpened;
    _this.endValue = 0;
    _this.startX = null;
    _this.startY = null;
    _this.maxOffsetSize = 0;
    _this.domInfo = {};
    _this.isMoving = false;
    _this.isTouching = false;
    _this.state = {
      componentId: Object(_common_utils__WEBPACK_IMPORTED_MODULE_19__[/* isTest */ "g"])() ? 'tabs-AOTU2018' : Object(_common_utils__WEBPACK_IMPORTED_MODULE_19__[/* uuid */ "i"])(),
      offsetSize: 0,
      _isOpened: isOpened
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtSwipeAction, [{
    key: "getDomInfo",
    value: function getDomInfo() {
      var _this2 = this;

      this.domInfo = {};
      return Promise.all([Object(_common_utils__WEBPACK_IMPORTED_MODULE_19__[/* delayGetClientRect */ "a"])({
        self: this,
        delayTime: 0,
        selectorStr: "#swipeAction-".concat(this.state.componentId)
      }), Object(_common_utils__WEBPACK_IMPORTED_MODULE_19__[/* delayGetScrollOffset */ "b"])({
        delayTime: 0
      })]).then(function (_ref2) {
        var _ref3 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, 2),
            rect = _ref3[0],
            scrollOffset = _ref3[1];

        rect[0].top += scrollOffset[0].scrollTop;
        rect[0].bottom += scrollOffset[0].scrollTop;
        _this2.domInfo = rect[0];
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;
      var _isOpened = this.state._isOpened;

      if (isOpened !== _isOpened) {
        this._reset(isOpened);
      }
    }
  }, {
    key: "_reset",
    value: function _reset(isOpened) {
      this.isMoving = false;
      this.isTouching = false;

      if (isOpened) {
        this.endValue = -this.maxOffsetSize;
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      } else {
        this.endValue = 0;
        this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          offsetSize = _this$state.offsetSize,
          componentId = _this$state.componentId;
      var options = this.props.options;
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()('at-swipe-action', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        id: "swipeAction-".concat(componentId),
        className: rootClass,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart
      }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('at-swipe-action__content', {
          animtion: !this.isTouching
        }),
        style: {
          transform: this.computeTransform(offsetSize)
        }
      }, this.props.children), Array.isArray(options) && options.length > 0 ? nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_options_index__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        options: options,
        componentId: componentId,
        onQueryedDom: this.handleDomInfo
      }, options.map(function (item, key) {
        return nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "o"], {
          key: "".concat(item.text, "-").concat(key),
          style: item.style,
          onClick: _this3.handleClick.bind(_this3, item, key),
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('at-swipe-action__option', item.className)
        }, nervjs__WEBPACK_IMPORTED_MODULE_9__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "m"], {
          className: "option__text"
        }, item.text));
      })) : null);
    }
  }]);

  return AtSwipeAction;
}(_common_component__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"]);


AtSwipeAction.defaultProps = {
  isTest: false,
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false
};
AtSwipeAction.propTypes = {
  isTest: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  autoClose: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  options: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]),
    className: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array])
  })),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/swipe-action/options/index.js":
/*!*******************************************************************!*\
  !*** ./src/libs/taro-ui/components/swipe-action/options/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtSwiperActionOptions; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/utils */ "./src/libs/taro-ui/common/utils.ts");











var AtSwiperActionOptions = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtSwiperActionOptions, _AtComponent);

  function AtSwiperActionOptions() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtSwiperActionOptions);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtSwiperActionOptions).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtSwiperActionOptions, [{
    key: "trrigerOptionsDomUpadte",
    value: function trrigerOptionsDomUpadte() {
      var _this = this;

      Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__[/* delayQuerySelector */ "c"])(this, "#swipeActionOptions-".concat(this.props.componentId), 100).then(function (res) {
        _this.props.onQueryedDom(res[0]);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.trrigerOptionsDomUpadte();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.options !== this.props.options) {
        this.trrigerOptionsDomUpadte();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var rootClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()('at-swipe-action__options', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        id: "swipeActionOptions-".concat(this.props.componentId),
        className: rootClass
      }, this.props.children);
    }
  }]);

  return AtSwiperActionOptions;
}(_common_component__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);


AtSwiperActionOptions.defaultProps = {};
AtSwiperActionOptions.propTypes = {};

/***/ }),

/***/ "./src/libs/taro-ui/components/switch/index.js":
/*!*****************************************************!*\
  !*** ./src/libs/taro-ui/components/switch/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/_lodash@4.17.15@lodash/isUndefined.js");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");














var AtSwitch = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtSwitch, _AtComponent);

  function AtSwitch() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtSwitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleChange", function (event) {
      var _this$props;

      var _event$detail = event.detail,
          value = _event$detail.value,
          checked = _event$detail.checked;
      var state = lodash_isUndefined__WEBPACK_IMPORTED_MODULE_10___default()(value) ? checked : value;

      for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        arg[_key2 - 1] = arguments[_key2];
      }

      (_this$props = _this.props).onChange.apply(_this$props, [state, event].concat(arg));
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          border = _this$props2.border,
          title = _this$props2.title,
          checked = _this$props2.checked,
          color = _this$props2.color;
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-switch', {
        'at-switch--without-border': !border
      }, className);
      var containerCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-switch__container', {
        'at-switch--disabled': disabled
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-switch__title"
      }, title), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: containerCls
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-switch__mask"
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Switch */ "l"], {
        className: "at-switch__switch",
        checked: checked,
        color: color,
        onChange: this.handleChange
      })));
    }
  }]);

  return AtSwitch;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false,
  onChange: function onChange() {}
};
AtSwitch.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  border: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/tab-bar/index.js":
/*!******************************************************!*\
  !*** ./src/libs/taro-ui/components/tab-bar/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_badge_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/badge/index */ "./src/libs/taro-ui/components/badge/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");













var AtTabBar = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtTabBar, _AtComponent);

  function AtTabBar() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtTabBar);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtTabBar).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtTabBar, [{
    key: "handleClick",
    // constructor () {
    //   super(...arguments)
    //   this.state = {
    //     isIPhoneX: false
    //   }
    // }
    // componentDidMount () {
    //   const curEnv = Taro.getEnv()
    //   if (
    //     curEnv === Taro.ENV_TYPE.WEAPP &&
    //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
    //   ) {
    //     this.setState({ isIPhoneX: true })
    //   }
    // }
    value: function handleClick() {
      var _this$props;

      (_this$props = this.props).onClick.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          className = _this$props2.className,
          fixed = _this$props2.fixed,
          backgroundColor = _this$props2.backgroundColor,
          tabList = _this$props2.tabList,
          current = _this$props2.current,
          color = _this$props2.color,
          iconSize = _this$props2.iconSize,
          fontSize = _this$props2.fontSize,
          selectedColor = _this$props2.selectedColor; // const { isIPhoneX } = this.state

      var defaultStyle = {
        color: color || ''
      };
      var selectedStyle = {
        color: selectedColor || ''
      };
      var titleStyle = {
        fontSize: fontSize ? "".concat(fontSize, "px") : ''
      };
      var rootStyle = {
        backgroundColor: backgroundColor || ''
      };
      var imgStyle = {
        width: "".concat(iconSize, "px"),
        height: "".concat(iconSize, "px")
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
          'at-tab-bar': true,
          'at-tab-bar--fixed': fixed // 'at-tab-bar--ipx': isIPhoneX

        }, className),
        style: this.mergeStyle(rootStyle, customStyle)
      }, tabList.map(function (item, i) {
        var _classNames;

        return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-tab-bar__item', {
            'at-tab-bar__item--active': current === i
          }),
          style: current === i ? selectedStyle : defaultStyle,
          key: item.title,
          onClick: _this.handleClick.bind(_this, i)
        }, item.iconType ? nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_badge_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          dot: !!item.dot,
          value: item.text,
          maxValue: Number(item.max)
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-tab-bar__icon"
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "m"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("".concat(item.iconPrefixClass || 'at-icon'), (_classNames = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classNames, "".concat(item.iconPrefixClass || 'at-icon', "-").concat(item.selectedIconType), current === i && item.selectedIconType), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classNames, "".concat(item.iconPrefixClass || 'at-icon', "-").concat(item.iconType), !(current === i && item.selectedIconType)), _classNames)),
          style: {
            color: current === i ? selectedColor : color,
            fontSize: iconSize ? "".concat(iconSize, "px") : ''
          }
        }))) : null, item.image ? nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_badge_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          dot: !!item.dot,
          value: item.text,
          maxValue: Number(item.max)
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-tab-bar__icon"
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Image */ "c"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-tab-bar__inner-img', {
            'at-tab-bar__inner-img--inactive': current !== i
          }),
          mode: "widthFix",
          src: item.selectedImage || item.image,
          style: imgStyle
        }), nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Image */ "c"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('at-tab-bar__inner-img', {
            'at-tab-bar__inner-img--inactive': current === i
          }),
          mode: "widthFix",
          src: item.image,
          style: imgStyle
        }))) : null, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], null, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_components_badge_index__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          dot: item.iconType || item.image ? false : !!item.dot,
          value: item.iconType || item.image ? null : item.text,
          maxValue: item.iconType || item.image ? null : Number(item.max)
        }, nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
          className: "at-tab-bar__title",
          style: titleStyle
        }, item.title))));
      }));
    }
  }]);

  return AtTabBar;
}(_common_component__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);


AtTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  current: 0,
  scroll: false,
  tabList: [],
  onClick: function onClick() {}
};
AtTabBar.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  current: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  iconSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  selectedColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  tabList: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/tabs-pane/index.js":
/*!********************************************************!*\
  !*** ./src/libs/taro-ui/components/tabs-pane/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var AtTabsPane = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtTabsPane, _AtComponent);

  function AtTabsPane() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtTabsPane);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtTabsPane).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtTabsPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customStyle = _this$props.customStyle,
          className = _this$props.className,
          tabDirection = _this$props.tabDirection,
          index = _this$props.index,
          current = _this$props.current;
      return nervjs__WEBPACK_IMPORTED_MODULE_5__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()({
          'at-tabs-pane': true,
          'at-tabs-pane--vertical': tabDirection === 'vertical',
          'at-tabs-pane--active': index === current,
          'at-tabs-pane--inactive': index !== current
        }, className),
        style: customStyle
      }, this.props.children);
    }
  }]);

  return AtTabsPane;
}(_common_component__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);


AtTabsPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
};
AtTabsPane.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
  tabDirection: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['horizontal', 'vertical']),
  index: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  current: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};

/***/ }),

/***/ "./src/libs/taro-ui/components/tabs/index.js":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/components/tabs/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");














var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;

var AtTabs = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtTabs, _AtComponent);

  function AtTabs() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtTabs);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtTabs).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "updateState", function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV) {
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEAPP:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.ALIPAY:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);

              _this.setState({
                _scrollIntoView: "tab".concat(_this._tabId).concat(index)
              });

              break;
            }

          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB:
            {
              var _index = Math.max(idx - 1, 0);

              var prevTabItem = _this.tabHeaderRef.childNodes[_index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }

          default:
            console.warn('AtTab 组件在该环境还未适配');
            break;
        }
      }
    });

    _this.state = {
      _scrollLeft: '',
      _scrollTop: '',
      _scrollIntoView: ''
    };
    _this._tabId = Object(_common_utils__WEBPACK_IMPORTED_MODULE_12__[/* isTest */ "g"])() ? 'tabs-AOTU2018' : Object(_common_utils__WEBPACK_IMPORTED_MODULE_12__[/* uuid */ "i"])(); // 触摸时的原点

    _this._touchDot = 0; // 定时器

    _this._timer = null; // 滑动时间间隔

    _this._interval = 0; // 是否已经在滑动

    _this._isMoving = false;
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtTabs, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props;

      (_this$props = this.props).onClick.apply(_this$props, arguments);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      var _this2 = this;

      var _this$props2 = this.props,
          swipeable = _this$props2.swipeable,
          tabDirection = _this$props2.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return; // 获取触摸时的原点

      this._touchDot = e.touches[0].pageX; // 使用js计时器记录时间

      this._timer = setInterval(function () {
        _this2._interval++;
      }, 100);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var _this$props3 = this.props,
          swipeable = _this$props3.swipeable,
          tabDirection = _this$props3.tabDirection,
          current = _this$props3.current,
          tabList = _this$props3.tabList;
      if (!swipeable || tabDirection === 'vertical') return;
      var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this._touchDot;
      var maxIndex = tabList.length;

      if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current + 1); // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current - 1);
        }
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var _this$props4 = this.props,
          swipeable = _this$props4.swipeable,
          tabDirection = _this$props4.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return;
      clearInterval(this._timer);
      this._interval = 0;
      this._isMoving = false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scroll !== this.props.scroll) {
        this.getTabHeaderRef();
      }

      if (nextProps.current !== this.props.current) {
        this.updateState(nextProps.current);
      }
    }
  }, {
    key: "getTabHeaderRef",
    value: function getTabHeaderRef() {
      if (ENV === _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this._tabId);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTabHeaderRef();
      this.updateState(this.props.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tabHeaderRef = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _classNames;

      var _this$props5 = this.props,
          customStyle = _this$props5.customStyle,
          className = _this$props5.className,
          height = _this$props5.height,
          tabDirection = _this$props5.tabDirection,
          animated = _this$props5.animated,
          tabList = _this$props5.tabList,
          scroll = _this$props5.scroll,
          current = _this$props5.current;
      var _this$state = this.state,
          _scrollLeft = _this$state._scrollLeft,
          _scrollTop = _this$state._scrollTop,
          _scrollIntoView = _this$state._scrollIntoView;
      var heightStyle = {
        height: height
      };
      var underlineStyle = {
        height: tabDirection === 'vertical' ? "".concat(tabList.length * 100, "%") : '1PX',
        width: tabDirection === 'horizontal' ? "".concat(tabList.length * 100, "%") : '1PX'
      };
      var bodyStyle = {};
      var transformStyle = "translate3d(0px, -".concat(current * 100, "%, 0px)");

      if (tabDirection === 'horizontal') {
        transformStyle = "translate3d(-".concat(current * 100, "%, 0px, 0px)");
      }

      Object.assign(bodyStyle, {
        'transform': transformStyle,
        '-webkit-transform': transformStyle
      });

      if (!animated) {
        bodyStyle.transition = 'unset';
      }

      var tabItems = tabList.map(function (item, idx) {
        var itemCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx
        });
        return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: itemCls,
          id: "tab".concat(_this3._tabId).concat(idx),
          key: item.title,
          onClick: _this3.handleClick.bind(_this3, idx)
        }, item.title, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
          className: "at-tabs__item-underline"
        }));
      });
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames = {
        'at-tabs': true,
        'at-tabs--scroll': scroll
      }, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_classNames, "at-tabs--".concat(tabDirection), true), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_classNames, "at-tabs--".concat(ENV), true), _classNames), className);
      var scrollX = tabDirection === 'horizontal';
      var scrollY = tabDirection === 'vertical';
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: rootCls,
        style: this.mergeStyle(heightStyle, customStyle)
      }, scroll ? nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* ScrollView */ "h"], {
        id: this._tabId,
        className: "at-tabs__header",
        style: heightStyle,
        scrollX: scrollX,
        scrollY: scrollY,
        scrollWithAnimation: true,
        scrollLeft: _scrollLeft,
        scrollTop: _scrollTop,
        scrollIntoView: _scrollIntoView
      }, tabItems) : nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        id: this._tabId,
        className: "at-tabs__header"
      }, tabItems), nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-tabs__body",
        onTouchStart: this.handleTouchStart.bind(this),
        onTouchEnd: this.handleTouchEnd.bind(this),
        onTouchMove: this.handleTouchMove.bind(this),
        style: this.mergeStyle(bodyStyle, heightStyle)
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-tabs__underline",
        style: underlineStyle
      }), this.props.children));
    }
  }]);

  return AtTabs;
}(_common_component__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);


AtTabs.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: function onClick() {}
};
AtTabs.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  isTest: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  height: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  tabDirection: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['horizontal', 'vertical']),
  current: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  swipeable: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  animated: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  tabList: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/libs/taro-ui/components/tag/index.js":
/*!**************************************************!*\
  !*** ./src/libs/taro-ui/components/tag/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");











var SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary'
};

var AtTag = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtTag, _AtComponent);

  function AtTag() {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtTag);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtTag).apply(this, arguments));
    _this.state = {};
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtTag, [{
    key: "onClick",
    value: function onClick() {
      if (!this.props.disabled) {
        this.props.onClick && this.props.onClick({
          name: this.props.name,
          active: this.props.active
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classObject;

      var _this$props = this.props,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'normal' : _this$props$size,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? '' : _this$props$type,
          _this$props$circle = _this$props.circle,
          circle = _this$props$circle === void 0 ? false : _this$props$circle,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$active = _this$props.active,
          active = _this$props$active === void 0 ? false : _this$props$active,
          customStyle = _this$props.customStyle;
      var rootClassName = ['at-tag'];
      var classObject = (_classObject = {}, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, "at-tag--".concat(SIZE_CLASS[size]), SIZE_CLASS[size]), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, "at-tag--".concat(type), TYPE_CLASS[type]), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-tag--disabled', disabled), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-tag--active', active), Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classObject, 'at-tag--circle', circle), _classObject);
      return nervjs__WEBPACK_IMPORTED_MODULE_6__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(rootClassName, classObject, this.props.className),
        style: customStyle,
        onClick: this.onClick.bind(this)
      }, this.props.children);
    }
  }]);

  return AtTag;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {},
  onClick: function onClick() {}
};
AtTag.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['normal', 'small']),
  type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['', 'primary']),
  name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  circle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/components/textarea/index.js":
/*!*******************************************************!*\
  !*** ./src/libs/taro-ui/components/textarea/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/utils */ "./src/libs/taro-ui/common/utils.ts");








/* eslint-disable react/jsx-no-duplicate-props */








function getMaxLength(maxLength, textOverflowForbidden) {
  if (!textOverflowForbidden) {
    return maxLength + 500;
  }

  return maxLength;
}

var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv();
Object(_common_utils__WEBPACK_IMPORTED_MODULE_13__[/* initTestEnv */ "f"])();

var AtTextarea = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtTextarea, _AtComponent);

  function AtTextarea() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtTextarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtTextarea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleInput", function () {
      var _this$props;

      return (_this$props = _this.props).onChange.apply(_this$props, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleFocus", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onFocus.apply(_this$props2, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleBlur", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBlur.apply(_this$props3, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleConfirm", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onConfirm.apply(_this$props4, arguments);
    });

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleLinechange", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onLinechange.apply(_this$props5, arguments);
    });

    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtTextarea, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          customStyle = _this$props6.customStyle,
          className = _this$props6.className,
          value = _this$props6.value,
          cursorSpacing = _this$props6.cursorSpacing,
          placeholder = _this$props6.placeholder,
          placeholderStyle = _this$props6.placeholderStyle,
          placeholderClass = _this$props6.placeholderClass,
          maxLength = _this$props6.maxLength,
          count = _this$props6.count,
          disabled = _this$props6.disabled,
          autoFocus = _this$props6.autoFocus,
          focus = _this$props6.focus,
          showConfirmBar = _this$props6.showConfirmBar,
          selectionStart = _this$props6.selectionStart,
          selectionEnd = _this$props6.selectionEnd,
          fixed = _this$props6.fixed,
          textOverflowForbidden = _this$props6.textOverflowForbidden,
          height = _this$props6.height;

      var _maxLength = parseInt(maxLength);

      var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
      var textareaStyle = height ? "height:".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.pxTransform(height)) : '';
      var rootCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('at-textarea', "at-textarea--".concat(ENV), {
        'at-textarea--error': _maxLength < value.length
      }, className);
      var placeholderCls = classnames__WEBPACK_IMPORTED_MODULE_11___default()('placeholder', placeholderClass);
      return nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: rootCls,
        style: customStyle
      }, nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Textarea */ "n"], {
        className: "at-textarea__textarea",
        style: textareaStyle,
        placeholderStyle: placeholderStyle,
        placeholderClass: placeholderCls,
        cursorSpacing: cursorSpacing,
        value: value,
        confirmType: "\u5B8C\u6210"
        /* 兼容之前的版本 */
        ,
        maxlength: actualMaxLength,
        maxLength: actualMaxLength,
        placeholder: placeholder,
        disabled: disabled,
        autoFocus: autoFocus,
        focus: focus,
        showConfirmBar: showConfirmBar,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        fixed: fixed,
        onInput: this.handleInput,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onConfirm: this.handleConfirm,
        onLinechange: this.handleLinechange,
        showCount: false
      }), count && nervjs__WEBPACK_IMPORTED_MODULE_8__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "o"], {
        className: "at-textarea__counter"
      }, value.length, "/", _maxLength));
    }
  }]);

  return AtTextarea;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);

AtTextarea.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxLength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  focus: false,
  showConfirmBar: false,
  selectionStart: -1,
  selectionEnd: -1,
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
  onLinechange: function onLinechange() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {}
};
AtTextarea.propTypes = {
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  cursorSpacing: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number]),
  placeholderClass: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  placeholderStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  showConfirmBar: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  selectionStart: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  selectionEnd: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  count: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  textOverflowForbidden: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  height: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number]),
  onLinechange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};
/* unused harmony default export */ var _unused_webpack_default_export = (AtTextarea);

/***/ }),

/***/ "./src/libs/taro-ui/components/timeline/index.js":
/*!*******************************************************!*\
  !*** ./src/libs/taro-ui/components/timeline/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");












var AtTimeline = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtTimeline, _AtComponent);

  function AtTimeline() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AtTimeline);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtTimeline).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AtTimeline, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pending = _this$props.pending,
          items = _this$props.items,
          customStyle = _this$props.customStyle;
      var rootClassName = ['at-timeline'];
      if (pending) rootClassName.push('at-timeline--pending');
      var rootClassObject = {
        'at-timeline--pending': pending
      };
      var itemElems = items.map(function (item, index) {
        var _item$title = item.title,
            title = _item$title === void 0 ? '' : _item$title,
            color = item.color,
            icon = item.icon,
            _item$content = item.content,
            content = _item$content === void 0 ? [] : _item$content;
        var iconClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          'at-icon': true
        }, "at-icon-".concat(icon), icon));
        var itemRootClassName = ['at-timeline-item'];
        if (color) itemRootClassName.push("at-timeline-item--".concat(color));
        var dotClass = [];

        if (icon) {
          dotClass.push('at-timeline-item__icon');
        } else {
          dotClass.push('at-timeline-item__dot');
        }

        return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(itemRootClassName),
          key: "at-timeline-item-".concat(index)
        }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: "at-timeline-item__tail"
        }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(dotClass)
        }, icon && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
          className: iconClass
        })), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: "at-timeline-item__content"
        }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
          className: "at-timeline-item__content-item"
        }, title), content.map(function (sub, subIndex) {
          return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
            className: "at-timeline-item__content-item at-timeline-item__content--sub",
            key: subIndex
          }, sub);
        })));
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(rootClassName, rootClassObject, this.props.className),
        style: customStyle
      }, itemElems);
    }
  }]);

  return AtTimeline;
}(_common_component__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);


AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
};
AtTimeline.propTypes = {
  pending: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object),
  customStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string])
};

/***/ }),

/***/ "./src/libs/taro-ui/components/toast/img.json":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/toast/img.json ***!
  \****************************************************/
/*! exports provided: error, success, loading, default */
/*! exports used: default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGwtJREFUeAHtnUusndV1x7mAIYABG/MUYGzLBCUtFHcCtB3YZgISGaCodOQ4QGGSoJAgV5FiOTAALBowY6tFASoUmYyS0EoRYPEonUUKRETYKNhWEnCwFZvWEIzB/f3v/T773HPP2Wt/79da0v/uc85+rfVfa93vsff5zswpLpUwcPz48aUMvAKsTMpLKC8Ey0bKc3h9JjhjpOTlKUfBpyPlEV4fBAdGyv283gPeUzkzM/NnSpeSGZgpebzBDUciXITR1yW4NilXU54P6pTDTPYueBO8lZRvkjgf8tolJwOeIBmJIyGuoMs6sD7B8oxD1N18LxO+DHaqJGH+ULcCXZ7PE8TwXnKESBNC5ZeNLm2v3oWCacLs9CNM2F2eIBP4ISlu4uM7wM3gr0FfeTqObb8BL4EdJMv/ULqMMNBXx4+YGPeSpFhJyw0JdA0xRNE1zLMCyaKL/8HLoBOEpNCFtI4USox/AIPmA/tT0ZHldaBk0ZFFNwAGKYMLCJLiNDx9K/gG+Br4EnCZzsBfqPo5eAb8J8nyxfSm/asZTIKQGItwn44U3wdX1+TK/2WedxLsptTaxehaxiHej653aP1DMrouonWSJSBdQ9E6yqVANlyT4FzKOkQ2bAU6BfusjgmbnqP3CUJi6AhxN/gXsLwiwvcw7tsgTYbZkiB6v6L55g2LjZfxQZosaflVPlsxr2F5b/Yx1GPg37FRRxiXrjFA0CwGm8D7oGzZx4BPg43gyrZyI90SHaWrdC5bxK04XtxWDlyvMQZw1lKwBRwEZcl+BvoJuBd09g6XdE9skC2yqSwR1+Jc22tc2sgAzjkN3AcOgTJE/x0fB2vaaG8ZOsk28AQo6ygr7uUD3QhxaQsDOORG8CtQVD5mgOfArWAwTpatic2yXRwUFfnihrbEx2D1wAnLwHbwBcgr6rsT3AXquhvUWp/BwXkJFzspi/Iq3+ium0udDED6DLgbHAB55Qgdt4Gr6tS9S3OJm4QjcZVX5CP5qvd3TFvhW4i+HrwB8sphOj4MtE3dJYIBcQUeAeIur8hn10dM503yMAC5p4LN4BjII/pPpv5adHPJwYC4SzjMe+SW734ATs0xvXeZxgCEXgx+CfLIH+n0ANC391xKYEBcJpyK2zwiX15cgio+BESuBXkc8Qn9dG/e91pVFEbiNuFYXGcV+XRtRar1f1jI0ymVAvxzkFVeoMOq/rPUDgvFNRDnWUWnXPKxn3JlcSWEXQJeBFllLx1uzzKXty2PAXEP5IOsIl/roRYuFgMQtQ5kXdk9Sp+t4GxrfK+vlgF8oOsT+UI+ySLy+bpqtev46BC0AXyWhVXavgK+0nHTe6e+fAJeBVlEvtdXElzGGYAY3WnKsnKra5OHgJ+/jpPZkvfyTeKjLNeRioEHWmJC82pAxgx4DGQRHY7XN6+9axDDgHwFsp42KyaGvfoOAaeDH4Ms4hd0MVHZsjY4OM+NF8XG6S0zpR51MPxs8AsQKzpM+y3BetxTySz4T6dc8mGWUy7FyLBuvmDwBeANECu+qFRJyDYzKE7PuvirWLmgGW1rnlWGgrdArKjt5TWr6dNVzIB8CrLGQb+TBEJ0WpXlyPE67f1rnBUHa1PDy7dAPo4VxU4/T7cwTBfkWa45fkb7s5pyns9bDwPyMZCvY0Ux1K8LdwzSrdynYxmg3VNgMF95rScU2zuLfJ34nCJKFEv9uQWMMVnWOR5trytdsyoZIE4ejUqPuUZ6Llf3BVu0Qh4jWkG9v/sWuwVFGFAMAMVCjHR7xR0LN4BYYz05ikRWj/oSM0qSGFFsdXPvFopre0HsxkM/repRgJdhCrETe7qlGOvWLmAU1raC2L03T5VBqI/RPwaIoadAjCjWuvF9EhTVdoLYLzvp9p7frepfbJdikWIDxN4CVsy1f2c3Sm4BMaIFIl/nKCWU+juIYgTELiZuaTUTGKI9NjEb0bTFwFfIW+3N9iinWAEx21KO0W5tezQf0QTF9GgebSq0RG18b9UId/7SZkAxA2Ljq12PFEJxXXfEPLeqvRlu+8hbNMwAMaYzFMWQJYrF9lyPoMxmS+Okvt3niA0HgE9vM0AcxV7jbrZHq6EFCutZuTFZ/SLt2pPVNXDjU5TPgGIIKJYsUUw2+yxgFNAmRG1BtqQ796nL96mPWDIDBFvsOptis7lNjUyux9pborta/oCFkoNk6MMppkDMHdO7G+EK5ZaBmKd8P9iIgj5p7xkg/h4ElihG6/8RHybdbmlG/SvArzt6H6rNGKjYSmKMIijba9UQVW4A2kkZEj160p94WKtnhjeZYgwo1kKiWL2xFnaYSPtjYn4wc2stCvkkg2eAeNSzgC1RzFa/749J9DO/luylQT+/XD/4cGwfAYo1oJiz5L5KtWd27Yk5ZGlBvf8EQaWe8MHHGVDMRcSlYre6PYAM/sMIJV4YV97fOwN1MEBsxvyITzW7OZh8MThoJMgn1K+qgwyfo34G8K0W6J4B2jT4J/BT0Jqf0UaXVUAxGBLF8OLS2WPQTaFZk7pqsrOgNeh2JfgO+BH4JvDfLczIKZxpS5GSYlx02tKmJInZq7Upo/nh5hCgH2v8YJyZsff6r9K6wEOnr4OPxnR9h/fXha322pQBuFJyaMFtmjyftm26REHFqmIxJNr6VF6sMti3Q7Mldd9rmpzx+dFrORhPjtQUOfxvxvv4+/kMiCMQSg7xuX9+r2bfoc8DUsqQb5WiJZMsAtYtNBHYut8hR6fvgpB4kgSiBOJikkP8/j4wTO1V6KPfSbSSWjG9yFIuZhuInju03BjoyZmZmSNGmyaqLb21R+cliPIjyZh3Ek5e4uOYfUxq1xpJYvFJQyHFhmI7v0CSVs13gZAcpnJJ/lmq64led4UUH6nzI8mIG+Al9sghCnXh3rpH7qDTEqDYDIliO//qOp1vC42e1D08wm2rXqKfnoihC/IY8STBexCVJTlazRm2PBLh+NtyBy2D7zAmOEL9RbknqKEj+l0H5MgYabXDq6YLgnqTHOIKey4CitGQ7MjFKyPqEGUtumzLNXjNnbCjV46vgr6+coRd20BIFOPZLxHodE9oVOq0hbg1C0RW0KCrJ8kUkvrMjWIUKFZDcs8UaqZ/zGivhUakbuf03u2sQWdPkjHXDIETxSoIyWtjtITfMtJKYGXdneFR2lmLXZ4kiWuGwgV23glColiP30NI4y2h0aj7GJzbzhSwtUL3wSfJkDhQrALFbEji9xEyyu7QSNQ9Z4dhu1tgw2CTZIi2K2ZBSHZHRSwj3BQaJam7JWqwljfClsElyRBtVhhi9y1J7IaKvzNDlt5PhkagTjsh868+mhrU2wBbBpMkOWztzY5nxSxQ7IbE2p4ym2nWY+YfrzeEq58NxnqfJEOw0YoUOHg8lB3UvRkcgwZaebTuXq0JDtLRSuxWknwIYqRTK+4YlOUfgDjo5eZN7FpjOFexP31nCJV3GAO0at9/2bmI7VkCSUnS+lOQHDb1MjnSWIGP/SAkd6RtVY5vd18/WjnhdecWByfYMPUjtkn/msqbwcGpjU5WaBv4yzDd2iRJdIvdsi6bb044OGll/15ZMTw9ByDU2tp+b//4WmgRPHT+SKLkAL5Jc8y9cHIvCMmusS5zb+lxRahXUrd6Yucefoi9nU0SdPfkmBKTcLM6ieVQccWC7rTeEOpB3b4FnXr+ATZ3LknQ2ZPDiEvFMgjJiW8ajl6DTD/3mpvQOncz1OpeddeuSfC4rodeBjFfkx3KNcekwLNieWEuQK71YIaNk2Yawmdw0/ojSQ4de323KhSXcLURhGTvvP601PqHJVfO6zSwN5CT9dSltrtbbdatjWECX3qQoCUn10NoebPR+r02Glq3TnCUNUkq/y+NTq0/utXtp5j54O09EBLd7j+xDmL9t3s7ZtK+t+GaRFsRdH4au06iRwpZ3OamLRk7yzrH+sSG3HP2qKMV07N+Sy/SLSe+0yNiCpmSI0kqWUxMkiPLBbknx3zPWzE9L0Gund93wTtrsAUd+vxB00mSMTkO4AtPjoUBacX0yZyA8EMgJGsXju+fQFiWaxJtArSO1CapGefsxH4x0+gKGsDjWhCSQ7PT0mJpqFVSd1kFOvZiSPipLUmSubLsOC6ckL1w0gQj4PKyJLZDxVJ908raAnx4wvj+0QgDcFh5kiRzeHKM8F70JZxajyZdo4v0lcZEkzdvGZ2GVJ3xmuRCuMl0d0vJoT5AfS3RHTa/5rBYmqu3YnulEmSFMZZ1MWN0H0b1SJLootiS6CRJkkN3q2KSwy/ILebn11uxvUIJcun8PgveWVm2oMNQP0iSJPb7JGaSjBw5suytCn9tdKjOmWy3FduXKkEs8nv9LcLJvOX/tKwjyUhy+JEjvzusnlZsL4tJkJhVY0uRQdWPHElynW7lSA59E9CPHNmjzIrt2QSx/kPFODm7aj3vkTdJPDlqDQwrti/Ubd7fgpCcXFGsVfd+TAaxWW8Bx97KLWXhsR8s57MC31wbCnzqfqtTrMXG8HMrikYjr57MQI5rEuuIron0n89PqyZTnuVTK7YXK0HOMEb81Kj3aoOBjKdbxmieHBZBGeqt2D4jJkGOZpjQm05hoKQk8SPHFH5zfmzF9hm6BrEeC39Wzsm92wQG4FvXJLHXGTQ9IX7NMYHPIh/BrH7kNSQfK0GOhVpQ15sHVRchs8y+cJo1STw5ynRAMpZi24j9YzrFcukGA8e7oWa/tFSC2Odh/bK5UWt09ECB2I2Hqa66s6VvJvot95SRckrrBtVRJYh1JX9mObr4KDmTIyXOkyRlorzSiu1P/QhSHtnBkQomRzq2J0nKRDmlH0HK4bHYKCUlR6pEmiT+bcGUkfxl1BHkiDH+EqPeqwMMZEwOrXMIlihJMn3pyhpwoPVWbB/RKZa1o1HOcMnBQI7k0HdJ1gNPkhx85+hixfZBJYjlDOv7Ijn06n+XPMmh1XbwFux4ktQTIlZsH4g5gliD1GNKh2bJmxypiZ4kKROVl1Zszx5BrFMs6yu5lVvRpQmKJkdqqydJykSlpRXbs0eQDwwVrjbqvTphoKzkSAn1JEmZqKy0Ynu/TrH2GNNfY9R7NQyUnRwpqUmS6OLdulZUF7+7lRIXV1qxvUeOtR4c91HcXMNtpeQAsTt0c208rGOOoXkQTj8CIVmjBPFHjxaIDPirPDlS9eqcK52zryVcxj16VATQ2B9enSMSmgjYJubMQU3ru8DjWhCS2a/j6hpE8u5cMfWvda42tWNfK2A2y65cXT+U8h1yrkn0eB+/JikeWFZMz+ZEmiDWM5WswYqr26ERmkqOlCJPkpSJQqUV07M5kSaIVm9DYg0W6turuqaTIyXTkyRlIndpxfTJnMDp/iOeETwrOUCld6si1JjXBH30bKdW6TRPwZa+gbP3QEh0GjsntPKfgU7JmFLCUeuSI1W1zbqlOraphK9sPwMt5em0F4RkY5uMrFMXSGltcqQ8dEHHVNemS7jaCEKyJ9UxvQbRe/0GRUjWhyr7WgeLjdytysqnX5NkYsyK5YW5QCBsCKUUdfsyqdCDxkoO0Knz+y7qXHeoKJZBSDYs0InWV4R6JHWrF3Ts6QfY27nkSF3RZd1TG6oq4WZ1Esuh4vKJ89NjV6gXdfdO7NizD7Gzs8mRuqIPNqS2lFkqhkFI5v0s2+g1iPRYeO41Xzvr3G1+6w6+g7lOXHNY1Po1yVSGrBiengMExx2h1KLO+smqqVp1oULJATp1zWHx2kebLJtD9YphEJI7pvanl9ZDvgj1pm7N1AE6XIFdvUuO1B19ti21MaaEh78FIVHsXxQciwZvhkag7vHgAB2sxKbeJkfqjiHYmNo6rYSDJ0BIrD2JswuG20IjUPc+OG2aEl37HFt6nxypT4Zka2pzWipmgWI3JNvS9lNLet8UGiGpu3XqAB2qwJbBJEfqliHaLNux+9YkdkPFTSlPwZIRdodGoe654AAdqMSGwSVH6pYh2q6YBSHZnfJjloyyJTQSdfpVqnPNgVraAN0HmxypS4bEAbaeB6xfUtuScmOWDLYSWHez7jIHamED7Bp8cqRuGQoX2HkXCIlifWXKS1RJh9dCI1K3M2qgFjVCZ0+OMX8MgRPFKgjJq2O02G8Z7Z7QiNQp666yR2pHC3T15Jjiij5zoxgF1tnQPVOomf4xg54PPgEhsW+LTZ+ithoM8OQw2O4rR9hlLVsoxs836JlcTccdICRHqAyvPE4eurZP0c+TI5LtHFxdGzl0I80Um0AxGpIduZVj1NtCIyd1D+eeoOKO6OfJkZHjjJy9Q/uzMk5RW3N0ewRYcltuhRhZq4/WFvjDtLF+qSe3Dnk7otMl4E8gRrRB0X/SLCFbXIDYTZt35vVRlf3QfwlQbIZEsX1qIT0YwLpFJgU2F5qkgs7o9LQUixBPjgn8w1tskjwxoXvjH6H/5gjfF1+qYJJFwHqgwwHanNM4KyMKoM8fgCWeHCOcjb+EvJgk+e54v6bfo/c5QDEZEsX0olJ0ZaBvh2ZK6h4oZbKSBkEna9+/J0cE1/AYShI9HX15xDC1NkGnB4Al3ypNKWb6EvjAmPGPalfapAUHQpfnA/p6cmTgFx71cDpdkI+KkuPrGYappSk6KVYViyHRrt5yY5UBN4VmTOri97NUTBf6XAUmPbVeF+5+QZ6RfzhT4H0T/Ah8B1yZcYhamqPXFmDJptKVYcbF4KAxsxZdVpU+ec4B0eUq8FOgpNB/lWfAJTmH824tZwDfrgLW4rZieHElpjBwTHa+UMnkPqgzYDBAfL4ALKnuLIeZ9WtUk05bxpW63bDFq52BUhkgAG8fD8IJ7xW7S0udeHwwJrhvwsTjH+kW2tnjff29M1AFA4o1YC1FKEbvq2L+eWMyiVbXf6XZDNk6r6O/cQYqYoA43GrEoqoVs/U8S4GJbgTWFuKjtPlKRZz4sM7ALAOKMaBYC4li9YZaKWPC7SGNkrpXKIvtdanVKp+sSwwotsCrSayFiu2124U2y8CBkFZJ3UO1K+cTDoIB4uuhiPhTjC5rhBAmvjtCwc9ps74RBX3S3jKgmAKKLUvubowENJsBb1gaUq+lfV+ga8xT/ZpYsZTEFEVQFJszjVqPAteDY0E15ypfpPDrkUa91f3JFUNAsWSJYvL6VliMIpstbZP66lYxW8GEK1E1A8RRzG4OhdsPqtYlenyUUVb/UloZonPGtdEDe0NnYIQBxQ6Iue5QLLbrbAWFLgbWNmOazLaZ/BNXI2T4S2dglAHi5vIM8XXxaN/WvMaA2Ax/i7bV7olpDSuuSFEGFCtAMWOJrjvWFp2v0v4oGHuO+DptW/tEjEpJ8sGjGVCMAMVKjLT/GhcrYu8yyOCfgXr2x0S7xBu2hQHFRhIjFKbozla7rjumEYmisfepZfVT08bxz4fNgGJDARIh3Vtnw6h14LMI49Tk0WGHgls/zoBiIjJ2FGPrxvt34j2KbwDaSRkj93fCKFeycgYIlvtjAoY2iq0NlStU5QQYEPMIFvEhYz1JqnRGB8ZWDCSxQGFKqx41lZtezHzMNPVkAz/dys10tzsSArGnVYqWx7pt7Yj2GKNNjU/LqkjRxZnf3RrhsM8v5Wsgn8eKYqnZTYhlOwSDTge/iGWAdroF7OskZTuiZePJx4mvKaJEMXR6y8woRx0M05frY7bHp0xpgchX3Muhv3WjyLcgdhFQMaHY6ffDQDDwAhCzbYBms6K2vnerdeFdTCH5FGSNgwuKzdqR3hCjJMlyJNEmyLUdMc/VNBiQL4F8GiuKlWEkR8odBut0K8s1iTaibQHd2E6QGurlCQbku8SH8mWsKEb6fVp1gqGxFxiuC/csd7dEqvbc+Nd3x7hs+1v5LPEdRbQoNvp5QR7rMAiYAVnWScSu9t6sj53D2zXLgHyV+IwiWhQT/bqVW8QNkKEVd62mx4q+WfYg8FOuIsRX2Fe+SXwU8y1Ams6KYqAfK+Rlcwsx2rsVu8Fxlk3+vAr8CY5lO6PgePJJ4huKaJHvu723qiBvZncIynM41qMn9XzWYV7MmazW10A+SHwhn2QRnTZ3c1duffTOzQRReS7o5Iy9wH96oW6HJfOJ+8QHFJnEb7xk9Rn06vxVt3WznL+mXtEPqazKOqe3z8eAuAYxP16T+ict5Vu/dZ+P9rleEJh1USkl/5OE/HJ/rLGIMT3rC7/63UIFuLjOKr74W1Y8wLweKRTz3K1JTpIjvgda9TvuZXHTxDjiEuiuY5bVcJqfEPmynY/maYLQMuaEUJ1ybQZZVmFpfkL0lG/1X1KGPkMcQ9wlHMY81Z+mC0S+kw/81nxVAQS5ehaw9ubklcN0fBhcVJWOfRtXXCWcibu8Ip+141m5fXPQuD0QrdV3/fRC3v9kdD1+BGwDV42P7+/nGBA3CUfiKq/IR/KVr4rXHViQvgxsB1p9zSvquxPcCc6t24a2zScOEi52UhblVb5p5sdr2kZsk/rghBtAzA+L0iwoH1P7HLgFDOYrv7I1sVm2i4OiIl/c2GRM+NxjDOAQOVk/UX0IlCFa2X0crBmbqjdvZVtio2wtQ8S9fDCYfy6dCwacsxT8EBwEZcl+BvoJuBes7hwpicLSPbFBtsimskRcaz3Evx7dleDAWYvBJlDWf0eGOiH7ePU02AiubCsn0i3R8ceU0rlsEbfieHFbOSiqV+/vLOA8raT/M9gElhclbEr/PXz+NnhnFDMzM+/zvnLBxsuY5JoxfJX3K0AVso9B/xX8Gzb+pYoJ2jJm7xMkJZogWsRrbaX+Prg6/bzi8iPG3wWUOCr3g4PgQFIeovwUHB0peXnKGeDMkVKLm7obdGFS6huVXwZKCpXngTpkN5NsBc+SGJ/VMWHTcwwmQVKiSRRdQN4KvgG+BnyvFiQEREeIn4NnwH+RGJ8H2vauanAJMupBkkX/mf8RKFn+HgyaD+xP5Tgv/hsoKZ4nKXSkG6R4QCRuJ1lW8lKnYEJn71Ql5uQt3qXjs+A/SIrf5R2kT/08QSZ4k2S5iY//CdwM/gr0lScdKX4DXgY7SIo3KF1GGOir40dMLPaSZNGmxnVgfYK6LvCLKT69ty60lRDCTpLiw+lNvcYTJGMMkDBX0GU0YZZnHKLu5rolO5oQv69bgS7P5wlS0HvJEeY6hklxLa91DXN+waGzdj9MB11DvAXeTOFHCJgoIJ4gBcgLdSVxtO1iBViZlJdSai1jdD1DK9Ba8xDSdQ9ezlsX0RrJ/4HR9RO9/gDsAe+pJBH+TOlSMgP/D3W7PKH+6NniAAAAAElFTkSuQmCC\",\"success\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGfFJREFUeAHtnWusXmWVx3soFES0QAsFp+lQLuIFCHyZUjRDWz4pYIxA0SiUW4uGYRwlVRg6ZVRmxjBRHD/QSdPqSImXTjKSiKLggEIpycQBA8g9HO5QaAslU7BQOPP7H/bb8563736eZ99vayX/s/e7n9ta/7XW2ZdnX0ammBTCwNjY2AF0fBiYGy1nsZwJZvQt38v63mBa35LVKW+CHX3L7axvAZv7lptYfxKMajkyMvIKS5OcGRjJub/OdUciHITRx0U4NloeyXI6KFO2Mdjj4D5wf7S8j8R5mXWTlAxYgiQkjoSYTZOFYFGEOQm7KLv6Uwx4G7hdSxLmubIVaPJ4liAe70V7iF5CaPlBT5O6Fz+Kgr2Eud32MG53WYIM4YekmM/mxeAUcAxoK09j2PYA+G+wnmS5m6VJHwNtdXyfiWGrJMVcap4TQecQXRSdw6wTSBad/HdeOp0gJIVOpLWnUGJ8HHSaD+zvifYsG4CSRXsWXQDopHQuIEiKqXj6E+BccDrYB5jEM/Bnin4Brge/Ilneia/avpLOJAiJsRfu057icnBUSa7U3MUjEXT48hLon894jd/98x2a/5D0z4tonuT9oH/+RJeWdRh4dATNr5QhjzHIt4EOwd4qY8Cqx2h9gpAY2kNcCL4G5hRAuA5HlAQPR8teQjxCECkZChdsVPL0kqW3/FC0rQgfP03f14C12Kg9jEnTGCBo9gPLwQsgb3mYDq8DZ4Ky/nsndoF0i3SUrtI5bxG34ni/xMpZg2oYwFkHgJVgC8hLRuloLfgC+EA1lmUfVbqDzwPZMgryEnEtznV7jUkdGcA5U8Gl4FWQhzxGJ3J6ay/5yrbIRtmah4h7+UAXQkzqwgAOORHcA7LKVjpYBU6qi21l6YHN8yPbxUFWkS/mlaW7jRPDAE6YAVaDd0BaeZOGN4IzgK4YdVrgYBr4DBAn4iatyCfyjS4gmJTJAKSPgAvBZpBWXqbhClDbk+wyOR02FtzoH9CVQFylFflIviriatowtbu9DaKPBxtBWnmehl8FehbDJIABcQW+Ap4DaUU+Oz5gOKuShgHI3QPoP/5OkEZGafQl0PnDqDT8q424A18EoyCNyHfaI+2RVgdrN4QBCD0Y3ALSiK7/nwf2HNK1bUrBgLgES0DauRX58uAUQ1uTQQYgcgHQYVFS0bX5ZcD+Ww2SmtNvcQuWAnGdVOTTBTmp0r1uIE/kax7ibZBEdPVEE2F28l1S2MC1TubXAHGfRHTIJR/bP7EkvoKwWeC3IKn8kQadm8NIwm2RdeFecyn3JnUa9eVrvdTCxMcARC0ESe+f2kabvwM2g+sjuOBy+QB8GcgnSUQ+X1iwes3uHoLOAW8lYZW668Ghzba8fdrLJ+CnIInI93okwWSQAYi5DCQ5hn2d+rqN3aTGDOCjC8B2ECqKgctqbFK5qkGGZsWvCWUvqvcgS71MwaQBDOCrj4I/Rb4LXSgmuj37DgG6nv4foYxF9X7E0mbBG5AY/Sris31BUl+rfjfnryLCbmIZKtpNn99Puq03jwF8uAQkOeRSjOzbPEszaIzBBwLdmxMq2j1/JMOQ1rRGDODLD4MHQp1PPcXKgTUyoThVZCi4H4TKrVS0RzqLc0klPcun4DehQUA9xUy7kwQDdRyaZM/xE+rrDR8mLWQA3+4FfgxCRbHTzsMtDNMJeZJzju9Tv9tXMVqYFIMmycfgeyBUFEPtOnHHIJGgq0+hcuUgkfa73QwQGFeEBgf1FEvt+eeJMaHzHLp57aJ2h4JZF8cAvteTh4qBENF7uZovWKoZ8hB5g0qfbr7FZkEWBoiBTwHFQog0e8YdC3VvVcjtI7oHR+/JNTEGphALp4KQe/IUW828dwvFFwUaSTWbALS8mMwAMbEEhP5zXTi5dc1/YZie5wi9Zf3rNTfH1KuIAWJoOQgRxVoznidBUT0JGPqw07UVcW/DNoQBYuk7IEQUc/V/MhElV4ZYQ50bQHsu1TUk4JqmpmIErAMhsrLW9mHBAhDyDPmvqafvdZgYA14GFCvgZuATXSJe4O2wigooplfzPO+zgHK9t9VuV6/CSQ0eUzED/hf4RDFYr1cKoZDOO/SuI5/oOeUjG+wnU71CBoidI0DIs+6Kxfqcj6DMChAiZ1fIrw3dAgYIsrNCAo06K2phLoroXbk69vPJqloobEo0ngEC7TpfsFGumKz2XcAooCsMugXZJ3pflX1NtvGhWQ8DiKW9Qcj7txSb1V0pZXDdXOaT16hQ1ldl6+FB06JwBhRTQLHlk2refINWM0DI9zk+VzhbNkAnGSD+PuvLjihGy/+IDwOvDlBubSc9Z0aXxgAxuCYgDleXppAGQqF5wHcj2UvUsa+eluqZ7g2mGAOKNZcoVk8shR0Gmgo02eeT80pRyAbpPAME4hJfMFKumC3+3c0McmmAMndSp7qrB50PmW4RoFgDijmfXFooM4yu3dmrHi30oMuxhSpinRsDAwwo5oDvISvFbnGH/XR+FfDJdwd0t5/GQCkMEJght8YXc8cvg+tFX1s82fEc5e8rhQ0bxBgYYCCK0Wc9MaoYzv9FhHQa8nSX3Ws14DT7WS4DxOliT4KoeHmuWtHhPuBF9eyQjbkOap0ZAykZIEbvcsSpivSIbn63PtHZ36hXj5ya0h5rZgzkygBx+klPrKr4klwGpSM9zfWUenTIvbkMZp0YAzkxQKz65uoU09mfaqUTfULLJ2fmZJd1YwzkwgABe4YvaCm/INNgdKBZ80c9Az1EeX2e3spksTVuCwOKSaBP9blEsZ1+dp3Gp7l6j8rObQupZke7GCA+9WZPn5yW2mp6Xu/p/QnK2/Uq+tRsWcO6MaDYBIpRl6xPpTc97g/ecPVM2cWpOrdGxkBJDBCjyzwxrBjfP7E6NFrq6Xgr5Xsn7tgaGAMlMqAYBb47QJbGqeQ6ufadW/xsZGRkR1zHtt0YqAMDUYz+zKOLL9YnNyfj5gLfA1EnTW5lv4yBejJALM8HLlGsHz5M+7g9iL654Hqe43Ey024tGcaobasdA8Tq3Sj1uEMxxfoXhpW7EmRY/d62db0VWxoDDWHAF7NhH+JhV5N6d9QQokzNDjJAXKc6bRi2B/Hdsn4Xu6wnOsixmdxgBojZUdTf4DFh8WD5sAQ5ZbDSwO/rB37bzw4zwH9mPYb9cfCXDaDBd5i1yGkDRuoTBq6rVzsoTz6p4hzVCpvIAHHwHvBvA/Hye34fXld70G06UAzHiWL/oFj9KfQ9jXVHbGMr6AwDxIm+1fE7MEweYeN76koGuimJXTLpMGuPAUPcu5gpU24bqG8/O8YAkaWPH/0SnBxj+gfZHnZFKKaDgjff7ul/Ug5YgnjYsuIJBgKSo1f5hN5KDZe+f/KTEmSX/hg/27Xfoex1MG1XA1vpFAP43nVYNRg6K+tKjmIYbB9UeOD37J7+/XuQhb2NMcsNXCp7M6bMNreYAYLHd1jVb/1b/Ph5/4Y6rUcxfJdHp1250J8gw3ctEz35jt0matpaaxhImByyewVBeH/NCUh+mAURTw3sZgZ/zqu50aZezgwoOUDc1arB+NDvb+asQiHdoae+TuCSpyYNTM2DXLUp2wamTmpkP1rNAP5uZXLIaYrlKKZZxMrEfAhVTomt9m7Bza2OBjNuEgO4PGlyfGNSBw34gY03e2J+/I6S3jnIcR6bHvSUW3FLGFByYIprnmPQ0m9xznHV4MYG/PbF9HhOhCbIIw0w2FTMyEDK5KjtJV0PHb6YnthpQMwfPLubuFlTjw5W3BQGlBygdSfkcfxj68nAJX/Y1ZZavo/iHLKrsq20jgH8nzQ5vtV0ErD5EFd2KCfGbWRFtyu7ZFvTyTD94xnA8Z1Ljh4b2O7bMRygS14nuLKDsv/pdWjLdjGAbzubHPKkYtsT+yfoJH2ux+2+kxlPcyuuIwNKDvRKcrXqaq5W/UMdbcmgky+25ypBDvMM4OvE09yK68ZAiuTQpdy2JYfc4ovtw5QgvhPwR+vmYNMnPQMpk6Opl3J9RPli+xAlyAxPL5s85VbcEAZSJIcOq9qaHPKaL7ZnhCTIlob439R0MJAyOdp4WNXPki+2xxNkZn+LIeubh2yzTQ1iwJIj1lm+2J6pS10PAZdk/45brH5WUDQDOLbTl3Jd/MKNvr/pkoeUIM84amx3DWBl9WYAvyZNjm/W26L8tYMj1+O3zyhBNjkSZGv+KlmPZTCQIjkaf/tIGl7hSd+5iZNNSpBX4krZ/kKaQa1NtQzgt6R7jk4mh7ykGHfE/yuqoLeVxMnkRw+r9buNHsAAjrTkCOCpVwW+XI+av64E2RmXHWx/rNeRLevPAP6y5EjoJsW4I/53WoIkJLSu1S050nkmJEHsECsdt7VpZcmR3hVw5z3Ecp2kv5h+aGtZBgOWHNlYhr8XQZyMn6TbZd5sHFfWGq/aOUdG9uHQe5n36bj0YbtNFGZ0QFHNLTnyYVYx7oj/p3WS3rpbTbBpDvgYaOXHfrAr6Z6jczPkIekDj0G3mmygokt8z4uE6FJKHYw4AtzRZ8zbrF8LavtBl6TEYIslR1LSYurD5aHAJRu0B7nRVYOyY2L6r9Vm9NQnwR6NseU2tu9bK4VTKIMNSZOjszPkIfTC5zEx8dLbfKOeB/HeEx8yWA3qnIcOR8XosZDtN2F1Y5ME3ZM+Q97Wx2RjXJxqs+9hwS0hCTIr1dDlNzreM2RjkyRFcrT9SUCPq4OLfbG9WQnim+vQN+eaID47ZEPjkiRlcrT9ScC84tEX25uUIE96RjvaU16X4v9CkZ0ByjQmSSw5AryZrYovtp/USXprXhyHLVeAUKn1iTtG2Al5tuD3toZj74vjlCCtevUo9vwzCJVaJgnKW3J4wzt7BXje5gmUA8ZHoZLvHaWNmQuRQdjT2CRBd0uO7LHv7QGew15eHQVU6z5/0MQkseTwxnVuFeD6ZOCSSZ8/+IGrJmXLctOsxI7QuzF7EnS1PUe5sbHME/M/kDq6iiXxfbbXd7b/bi81+8tbAf8elf4lUK3Krm4pOdAxyYuk/6ml78oNdFUu1XwxPZETOKjVH/HEvtruSZQc4HcgVOz2kRzyA7KDPuI5PhSVW/8ZaGysXZKgU9LkuDqH2Oh8F/A+FfiuYB00iSgauB49pHjsryY1aOAPbKhNkqBL0uSwPUdOMQf384BLntxtKGr/0NWCsst3a9TADdhReZKgQ9LksD1HjrEG/74J5fET9ElD0ugc4JJbJjVo8A+MrCxJGNuSo+LYwQe3ugKdsnN2U5GNsz2N9GjitN0aNnQDtpSeJIxpyVFxvCiGgetNPhSP/cVQNSmIe+BIjSR/PbRhQzdiT2lJwliWHDWIE8UwcEn8Z9lo9e+ulpRdVQMbc1UBmwpPEsaw5MjVa+k7wxf/CFyyKrZ3Wi12taTs97GNG1yAXYUlCX1bctQoNvBH/zsL+LmbLI5Vl6qaD3lntyYTG3awOj22gwYXYFfuSUKflhw1ign8sT9QDMeJYn/y/Meg/lS4L651tH3pYJu2/Ma+3JKEviw5ahYY+GRpFMNxi/u8KtNSr8lxyZ3eThpcAcMzJwl9WHLUMAbwy52uwKbsWq/aVJrv6US7obnejhpcAftSJwltLTlq6Hv8cjhwnT5QPDY/SHUqur6ZoI7a/O3scY6wMXGS0MaSIyjCyq+kmAUuCf8WDr3k11n5XOQ2IjwkTZIkd+Xa7SO5ecrfEb7M758+nc0F+eyO/LrXukbCJKF6kFhylOh1PHKSxyuK9WSnDTTwndDET6iUaHwZQ8FFkj2JxxdjlhxlOK1vDByyyuOUO/qqh63Soe+SmL6rsHdYb82vha15JIklR8mhoBgFrm+AUDyWfOqCRtPBG2rtkItLtrfS4eAhS5JYclTgPXx2sSN+VaQYTzf5TcP16sEhT1C2ZwV2VzYk9qZJEkuOCjym2ASKUZesT60avZ7m6jkq2/3e+dQjNqMhdidJEkuOityKn84NiN/TUqtH53p213cL/IPU6b0dJfVYTWuIzSFJYslRkWMVk+Ah4BLFdrbYpYMLXCNEZWdWxEOlw2L71Q5uvlGpch0fHL+c5fBNr+iCzDTRk77j5nuhwz2ZB2poB3BzMtBn7J4Bz4FbwKKGmtMatfHBvcAlium9cjGYji5xjRSVfTKXwawTYyAjA8TjqQHxeknGYSaaM9g+wPXBdemzcaKFrRkD1TFALN6tgHTIC5Ttk6uGdLjcMWCvKP5prFy1sc6MgeEMEIhn94LRsVw+vHWGrQy2H9jiGFRFz4L9MgxjTY2B1AwQe+8DOg90iWK4mBil45WukaOy76S20BoaAxkYIP6+GxCfxT2qweD6GpXvYztvUeeYDHZaU2MgMQPE3LFAsecSxe67X41KPEJgAwa41KVBVKY3R4wEdmnVjIFMDCjWgC61++TSTAOFNEYDza7f49OE8iUh/VkdYyArA8TaeQHxqJidmnWsoPYMdCJ4x6PUJsqL3Z0FaWuV2syAYgy85IlFxeq8UnlgwNUepVS8plSlbLDOMUCMrQ2Iw9WlE4NSM8DmAOU+W7pyNmAnGCD2PhcQf4rRGZUQwsAXBij4GnWOqkRBG7S1DCimgGLLJxdWRgKa6erBRp+GlOvGsc48nluZQzoyMLGkW5/+CHyi2Kz2aioKHA92+jSl/LqO+M/MLJgBYmlVQLwpJo8vWJWw7lFkRYDCqnJWWI9WyxgYzgAxFHKvlWLtyuE9VLAVZfT0lp6D8Im+LHpEBSrakC1ggNg5EoScdygWsz0pmDdfKHQweB74RBM27817fOuv3QwoZoDvISjFnmLw4FqygWILwNvAJ7+iQj5Pc9WSCVMqTwYUK+DXvqCiXOcdC/IcO/e+UDDkjl/Zug5Ue4Uhd+utw7wZUIyAG0CIFHenbl6GYYXOR34bYg117Nb4vIhvaT/EyLWBsaSYq9d5R5xPUHQW0GONIfK1uH5se7cZIHi+HhJA1FGszWoUWyi8EPjuz6fK+E2Pdudvo7xbvLLExfkKjgBRjC0sXqMCRkDxc4Dvrl9xICNPLUAF67KBDBALp0cxwcIpiq1mv9kTAy5zmjhR+Aarn2qgP03lHBkgBj4NFAshclmOQ1fXFZZeE2ItdXSZLvvb7qoz1UbOwAC+vyiKARZeuSbDUPVqiqm6VPcjr8kTFa6olwWmTdEM4PorJ9zvXVMstWuKAIP2BDd5TZ+o8D1W20VC0VHWwP7lY/D9Cbd71xRD7fzkBobtC0Juj++x9GNWbMa9gYEfojK+nQZ+0nN2wFKxs29I342tg4EHgvsDyOhV+Q0rxbzoq7EsNl9x+RTc2nNywFIxc2DzLQ+wQIaCJHuSB6j/4YCurUoDGMCXHwF/AqGiWOlGcvT8h8E63EpyTrKd+jah2COwoUt8qFf0yJehohhp92FVnC8xXCfuSa5uidQfgm4SFkdkA7bjM92untTXqt/OE/JQn0GArmKEzpNQdVy0e/5o6BhWr1oG8NUxQJ/qSyKKCbuK2XMdZGjGPeS2lB7J2k2f32tvy3oygI/05pvXe04LWCoG2jFDnrdLIEb3bum+rCTyUyofkrcu1l82BvDJoWB9EkdSV75v9r1V2Wjzt4agRSD0Vnmqjouedf9bUM67V/1mdLaGfAC+DEKeHafaLpHPF3aWuCSGQ5SeJwl96GoXw6zomeX5ScayuvkxAPcngZD3VVFtksjXzXqeIz/a0vUEYXoycSUIecadartEx7BrQDWvm0xnbqNbwfVMsBYkOYek+rhv5eNmPAlYRy9Bnl4E8TxIKnon61Jg5BfkWHELlgF91iypyKcLClKtW91CpF4pFPLerWFOepiNS0C3r6fnGDLiMuJU3KYR+bKer+bJkadSu4JQ/bdaAXaCNDJKoy8Ce0dwSs+JO/AlMArSiHwnH9pePaUPvM0gV+8C1r05aUVfQf0KsJfXedl+t4K4Al8FaQ51aTYu8lk93pUbaHdjq0G0Zt81AaXzjLTyMg31kI6dzMdEAtzo5Fsciau0Ih/JVzYrHsNzYZshfQZYDZJePaHJLnmTtRvBZ8C0wpRtSMdwoMOoM4A4ETdpRT6Rb+wfUNW+xwnzQMiHRanmlK2UrgKdm0uRzZHt4iCryBcnVh0XNn4fAzhEM7j6RPWrIA95jE50jf7IvmFatSrbIhtlax4i7uUDu6OhrpGCc/TV06tAmmvzNBsqo2zVRNjnwQfqartPL+ke2SBbRkFeIq71z8S+auxzQl3KcdZ+YDlIel8XTbzyEDWuA2eCmXWxeVAP6RbpKF3TzlnQNFbErThu7SPRrb+ygPP2IXAuAsvBnMEgyuH3GH08Ah6OlrvWR0ZGtubQv7cLbNSJ8NED+FD0uwgfP03f/wrWYOOfWbZWiiCvlmQRRHo7im6lvhyU9dXdzYylhBEeBy+DLUDbtXwN7IjwJktBoqtpgiY1hfcDJYH2VloeBHRu1EuKsvZijzHmt8E6EuMtlq2XziRIz5Mkik4gPwHOBacD7WFM4hnQHuIX4HpwM4nxdnzV9pV0LkH6XUiy7M9vfVhUyfIx0Gk+sL8nOmy8Cygp/pOkeLVX0LWlBUTkcZJlLqs6BBNae2k3MjduocPAdeAGkuKJuEpd2m4JMsTbJMt8Np8NTgF6OURbedKe4gFwG1hPUmxkadLHQFsd32ditlWSRSfEC8GiCGWd4GdTPL61TrSVEMLtJIUuHJjEMGAJEkNM3GYSZjZl/QkzJ65uTbbrkmx/QjxbE70aoYYlSEY3RXuY4+imh2NZ1znM9IxdJ22+jQY6h7gf3NeD7SFgIoNYgmQgz9WUxNFtF4eBudHyEJaawxB68xmage6f89C6RPMhmh/pzY38H+v98ydafxE8CUa1JBFeYWmSMwP/D9ulVgFLdbgRAAAAAElFTkSuQmCC\",\"loading\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC\"}");

/***/ }),

/***/ "./src/libs/taro-ui/components/toast/index.js":
/*!****************************************************!*\
  !*** ./src/libs/taro-ui/components/toast/index.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtToast; });
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nervjs */ "./node_modules/_react@16.13.0@react/index.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.0-alpha.5@@tarojs/components/mini/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/_lodash@4.17.15@lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/component */ "./src/libs/taro-ui/common/component.js");
/* harmony import */ var _img_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img.json */ "./src/libs/taro-ui/components/toast/img.json");
var _img_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./img.json */ "./src/libs/taro-ui/components/toast/img.json", 1);















var AtToast = /*#__PURE__*/function (_AtComponent) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtToast, _AtComponent);

  function AtToast(props) {
    var _this;

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtToast);

    _this = Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtToast).apply(this, arguments));

    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          status = _this$props.status;

      if (status === 'loading') {
        return;
      }

      if (onClick) {
        return onClick();
      }

      _this.close();
    });

    var isOpened = props.isOpened,
        duration = props.duration;

    if (isOpened) {
      _this.makeTimer(duration);
    }

    _this._timer = null;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtToast, [{
    key: "clearTimmer",
    value: function clearTimmer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
  }, {
    key: "makeTimer",
    value: function makeTimer(duration) {
      var _this2 = this;

      if (duration === 0) {
        return;
      }

      this._timer = setTimeout(function () {
        _this2.close();
      }, +duration);
    }
  }, {
    key: "close",
    value: function close() {
      var _isOpened = this.state._isOpened;

      if (_isOpened) {
        this.setState({
          _isOpened: false
        }, this.handleClose);
        this.clearTimmer();
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_11___default()(this.props.onClose)) {
        this.props.onClose();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened,
          duration = nextProps.duration;

      if (!isOpened) {
        this.close();
        return;
      }

      if (!this.state._isOpened) {
        this.setState({
          _isOpened: true
        });
      } else {
        this.clearTimmer();
      }

      this.makeTimer(duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _isOpened = this.state._isOpened;
      var _this$props2 = this.props,
          customStyle = _this$props2.customStyle,
          text = _this$props2.text,
          icon = _this$props2.icon,
          status = _this$props2.status,
          image = _this$props2.image,
          hasMask = _this$props2.hasMask;
      var realImg = image || _img_json__WEBPACK_IMPORTED_MODULE_13__[status] || null;
      var isRenderIcon = !!(icon && !(image || _img_json__WEBPACK_IMPORTED_MODULE_13__[status]));
      var bodyClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()('toast-body', Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
        'at-toast__body--custom-image': image,
        'toast-body--text': !realImg && !icon
      }, "at-toast__body--".concat(status), !!status));
      var iconClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-icon', Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, "at-icon-".concat(icon), icon));
      return _isOpened ? nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('at-toast', this.props.className)
      }, hasMask && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "at-toast__overlay"
      }), nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: bodyClass,
        style: customStyle,
        onClick: this.handleClick
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "toast-body-content"
      }, realImg ? nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "toast-body-content__img"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
        className: "toast-body-content__img-item",
        src: realImg,
        mode: "scaleToFill"
      })) : null, isRenderIcon && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "toast-body-content__icon"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], {
        className: iconClass
      })), text && nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "o"], {
        className: "toast-body-content__info"
      }, nervjs__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "m"], null, text))))) : null;
    }
  }]);

  return AtToast;
}(_common_component__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]);


AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
};
AtToast.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  hasMask: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  image: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  isOpened: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  status: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['', 'error', 'loading', 'success']),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/***/ }),

/***/ "./src/libs/taro-ui/index.js":
/*!***********************************!*\
  !*** ./src/libs/taro-ui/index.js ***!
  \***********************************/
/*! exports provided: AtActionSheet, AtActionSheetItem, AtActivityIndicator, AtAvatar, AtBadge, AtButton, AtCard, AtCheckbox, AtDrawer, AtFloatLayout, AtForm, AtGrid, AtIcon, AtInput, AtInputNumber, AtList, AtListItem, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtNavBar, AtNoticebar, AtPagination, AtProgress, AtRadio, AtRate, AtSegmentedControl, AtSwitch, AtTabBar, AtTabs, AtTabsPane, AtTag, AtTextarea, AtTimeline, AtToast, AtAccordion, AtSlider, AtSwipeAction, AtSearchBar, AtLoadMore, AtDivider, AtCountdown, AtSteps, AtCurtain, AtMessage, AtImagePicker, AtRange, AtIndexes, AtCalendar, AtFab, AtLoading, AtComponent */
/*! exports used: AtButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ "./src/libs/taro-ui/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_themes_red_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/themes/red.scss */ "./src/libs/taro-ui/style/themes/red.scss");
/* harmony import */ var _style_themes_red_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_themes_red_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_themes_purple_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/themes/purple.scss */ "./src/libs/taro-ui/style/themes/purple.scss");
/* harmony import */ var _style_themes_purple_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_themes_purple_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_action_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action-sheet */ "./src/libs/taro-ui/components/action-sheet/index.js");
/* harmony import */ var _components_action_sheet_body_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/action-sheet/body/item */ "./src/libs/taro-ui/components/action-sheet/body/item/index.js");
/* harmony import */ var _components_activity_indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/activity-indicator */ "./src/libs/taro-ui/components/activity-indicator/index.js");
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/avatar */ "./src/libs/taro-ui/components/avatar/index.js");
/* harmony import */ var _components_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/badge */ "./src/libs/taro-ui/components/badge/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/button */ "./src/libs/taro-ui/components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components_button__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card */ "./src/libs/taro-ui/components/card/index.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkbox */ "./src/libs/taro-ui/components/checkbox/index.js");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/drawer */ "./src/libs/taro-ui/components/drawer/index.js");
/* harmony import */ var _components_float_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/float-layout */ "./src/libs/taro-ui/components/float-layout/index.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/form */ "./src/libs/taro-ui/components/form/index.js");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/grid */ "./src/libs/taro-ui/components/grid/index.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/icon */ "./src/libs/taro-ui/components/icon/index.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/input */ "./src/libs/taro-ui/components/input/index.js");
/* harmony import */ var _components_input_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/input-number */ "./src/libs/taro-ui/components/input-number/index.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/list */ "./src/libs/taro-ui/components/list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list/item */ "./src/libs/taro-ui/components/list/item/index.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modal */ "./src/libs/taro-ui/components/modal/index.js");
/* harmony import */ var _components_modal_header__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/modal/header */ "./src/libs/taro-ui/components/modal/header/index.js");
/* harmony import */ var _components_modal_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modal/content */ "./src/libs/taro-ui/components/modal/content/index.js");
/* harmony import */ var _components_modal_action__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modal/action */ "./src/libs/taro-ui/components/modal/action/index.js");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/nav-bar */ "./src/libs/taro-ui/components/nav-bar/index.js");
/* harmony import */ var _components_noticebar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/noticebar */ "./src/libs/taro-ui/components/noticebar/index.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pagination */ "./src/libs/taro-ui/components/pagination/index.js");
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/progress */ "./src/libs/taro-ui/components/progress/index.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/radio */ "./src/libs/taro-ui/components/radio/index.js");
/* harmony import */ var _components_rate__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/rate */ "./src/libs/taro-ui/components/rate/index.js");
/* harmony import */ var _components_segmented_control__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/segmented-control */ "./src/libs/taro-ui/components/segmented-control/index.js");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/switch */ "./src/libs/taro-ui/components/switch/index.js");
/* harmony import */ var _components_tab_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/tab-bar */ "./src/libs/taro-ui/components/tab-bar/index.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/tabs */ "./src/libs/taro-ui/components/tabs/index.js");
/* harmony import */ var _components_tabs_pane__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/tabs-pane */ "./src/libs/taro-ui/components/tabs-pane/index.js");
/* harmony import */ var _components_tag__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/tag */ "./src/libs/taro-ui/components/tag/index.js");
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/textarea */ "./src/libs/taro-ui/components/textarea/index.js");
/* harmony import */ var _components_timeline__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/timeline */ "./src/libs/taro-ui/components/timeline/index.js");
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/toast */ "./src/libs/taro-ui/components/toast/index.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/accordion */ "./src/libs/taro-ui/components/accordion/index.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/slider */ "./src/libs/taro-ui/components/slider/index.js");
/* harmony import */ var _components_swipe_action__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/swipe-action */ "./src/libs/taro-ui/components/swipe-action/index.js");
/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/search-bar */ "./src/libs/taro-ui/components/search-bar/index.js");
/* harmony import */ var _components_load_more__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/load-more */ "./src/libs/taro-ui/components/load-more/index.js");
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/divider */ "./src/libs/taro-ui/components/divider/index.js");
/* harmony import */ var _components_countdown__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/countdown */ "./src/libs/taro-ui/components/countdown/index.js");
/* harmony import */ var _components_steps__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/steps */ "./src/libs/taro-ui/components/steps/index.js");
/* harmony import */ var _components_curtain__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/curtain */ "./src/libs/taro-ui/components/curtain/index.js");
/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/message */ "./src/libs/taro-ui/components/message/index.js");
/* harmony import */ var _components_image_picker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/image-picker */ "./src/libs/taro-ui/components/image-picker/index.js");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/range */ "./src/libs/taro-ui/components/range/index.js");
/* harmony import */ var _components_indexes__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/indexes */ "./src/libs/taro-ui/components/indexes/index.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/calendar */ "./src/libs/taro-ui/components/calendar/index.tsx");
/* harmony import */ var _components_fab__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/fab */ "./src/libs/taro-ui/components/fab/index.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/loading */ "./src/libs/taro-ui/components/loading/index.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./common/component */ "./src/libs/taro-ui/common/component.js");




_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.initPxTransform({
  designWidth: 750
});



















































/* 私有的组件  */




/***/ }),

/***/ "./src/libs/taro-ui/style/index.scss":
/*!*******************************************!*\
  !*** ./src/libs/taro-ui/style/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/libs/taro-ui/style/themes/purple.scss":
/*!***************************************************!*\
  !*** ./src/libs/taro-ui/style/themes/purple.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/libs/taro-ui/style/themes/red.scss":
/*!************************************************!*\
  !*** ./src/libs/taro-ui/style/themes/red.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_Users_igola_taro_3_0_src_pages_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/index/index.tsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/index/index.tsx");


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_Users_igola_taro_3_0_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_Users_igola_taro_3_0_src_pages_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index'))



/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);
//# sourceMappingURL=index.js.map