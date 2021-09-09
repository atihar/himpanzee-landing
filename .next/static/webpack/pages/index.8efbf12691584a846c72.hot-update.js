self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HoneThree/Banner.js":
/*!****************************************!*\
  !*** ./components/HoneThree/Banner.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_HoneThree_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HoneThree/Banner */ "./components/HoneThree/Banner.js");
/* harmony import */ var _components_HoneThree_Banner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_HoneThree_Banner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_HoneThree_FeaturedServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HoneThree/FeaturedServices */ "./components/HoneThree/FeaturedServices.js");
/* harmony import */ var _components_Common_Partner_PartnerSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/Partner/PartnerSlider */ "./components/Common/Partner/PartnerSlider.js");
/* harmony import */ var _components_HoneThree_OurServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/HoneThree/OurServices */ "./components/HoneThree/OurServices.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\Shredder\\Desktop\\himpanzee\\himpanzee-landing\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Index3 = /*#__PURE__*/function (_Component) {
  (0,C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Index3, _Component);

  var _super = _createSuper(Index3);

  function Index3() {
    (0,C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Index3);

    return _super.apply(this, arguments);
  }

  (0,C_Users_Shredder_Desktop_himpanzee_himpanzee_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Index3, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_HoneThree_Banner__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HoneThree_FeaturedServices__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HoneThree_OurServices__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Partner_PartnerSlider__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }]);

  return Index3;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsMEJBQ0k7QUFBQSxnQ0FDSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSSw4REFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0ksOERBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQU1JLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQSxzQkFESjtBQVVIOzs7O0VBWmdCQyw0Qzs7QUFlckIsK0RBQWVELE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGVmYmYxMjY5MTU4NGE4NDZjNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhcic7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9uZVRocmVlL0Jhbm5lcic7XG5pbXBvcnQgRmVhdHVyZWRTZXJ2aWNlcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbmVUaHJlZS9GZWF0dXJlZFNlcnZpY2VzJztcbmltcG9ydCBQYXJ0bmVyU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhcnRuZXIvUGFydG5lclNsaWRlcic7XG5pbXBvcnQgT3VyU2VydmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib25lVGhyZWUvT3VyU2VydmljZXMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuXG5jbGFzcyBJbmRleDMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+IFxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgICAgICA8QmFubmVyIC8+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVkU2VydmljZXMgLz4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE91clNlcnZpY2VzIC8+XG4gICAgICAgICAgICAgICAgPFBhcnRuZXJTbGlkZXIgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4MztcbiJdLCJzb3VyY2VSb290IjoiIn0=