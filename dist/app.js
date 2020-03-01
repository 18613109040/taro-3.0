require("./runtime");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/app.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/app.tsx ***!
  \*************************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.0@react-redux/es/index.js");
/* harmony import */ var _libs_dva__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/dva */ "./src/libs/dva.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__);









var dvaApp = _libs_dva__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].createApp({
  initialState: {},
  models: _models__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
});
var store = dvaApp.getStore();


var App = /*#__PURE__*/function (_Component) {
  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(App, _Component);

  function App() {
    Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App).apply(this, arguments));
  }

  Object(_Users_igola_taro_3_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {} // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[/* Provider */ "a"], {
        store: store
      }, this.props.children);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.0-alpha.5@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _Users_igola_taro_3_0_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_Users_igola_taro_3_0_src_app_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/app.tsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/app.tsx");


var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createReactApp"])(_Users_igola_taro_3_0_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_Users_igola_taro_3_0_src_app_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]))



/***/ }),

/***/ "./src/libs/dva.ts":
/*!*************************!*\
  !*** ./src/libs/dva.ts ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var dva_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dva-core */ "./node_modules/_dva-core@2.0.2@dva-core/dist/index.esm.js");
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-loading */ "./node_modules/_dva-loading@3.0.20@dva-loading/dist/index.esm.js");


var app;
var store;
var dispatch;
var registered;

function createApp(opt) {
  app = Object(dva_core__WEBPACK_IMPORTED_MODULE_0__[/* create */ "a"])(opt);
  app.use(Object(dva_loading__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({})); // // 适配支付宝小程序
  // if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
  //   global = {};
  // }
  // if (!global.registered) opt.models.forEach(model => app.model(model));
  // global.registered = true;

  if (!registered) opt.models.forEach(function (model) {
    return app.model(model);
  });
  registered = true;
  app.start();
  store = app._store;

  app.getStore = function () {
    return store;
  };

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
});

/***/ }),

/***/ "./src/models/common.ts":
/*!******************************!*\
  !*** ./src/models/common.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.0-alpha.5@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/_immutable@4.0.0-rc.12@immutable/dist/immutable.es.js");


var systemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getSystemInfoSync();
var initState = {
  systemInfo: systemInfo
};
/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'common',
  state: Object(immutable__WEBPACK_IMPORTED_MODULE_1__[/* fromJS */ "a"])(initState).toJS(),
  effects: {},
  reducers: {}
});

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");

/* harmony default export */ __webpack_exports__["a"] = ([_common__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]]);

/***/ })

},[["./src/app.tsx","runtime","vendors"]]]);;
//# sourceMappingURL=app.js.map