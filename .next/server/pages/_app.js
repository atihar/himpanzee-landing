(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GoTop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Shredder\\Desktop\\himpanzee\\himpanzee-landing\\components\\Shared\\GoTop.js";

class GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {
      is_visible
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "scroll-to-top",
      children: is_visible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "fas fa-chevron-up",
        onClick: () => this.scrollToTop()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Shredder\\Desktop\\himpanzee\\himpanzee-landing\\components\\Shared\\Loader.js";


class Loader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `preloader ${this.props.loading ? '' : 'preloader-deactivate'}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "loader",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "shadow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "box",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 320 100",
              width: "320",
              height: "100",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
                children: "Loader svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 116
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                id: "Layer_2",
                "data-name": "Layer 2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                  id: "Artwork",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-2",
                    d: "M52.32,24.51a15.94,15.94,0,0,0-2.2.15l-1.67.27V37.76H37.05V28.43c0-1.56-.35-2.6-1.06-3.13a5.82,5.82,0,0,0-3.44-.79,15.65,15.65,0,0,0-2.15.15l-1.67.27V53.6a4,4,0,0,0,1,3.08,5.41,5.41,0,0,0,3.47.85,17.67,17.67,0,0,0,2.23-.14,10.88,10.88,0,0,0,1.64-.29V44.33h11.4V53.6a3.92,3.92,0,0,0,1,3.08,5.41,5.41,0,0,0,3.47.85,17.67,17.67,0,0,0,2.23-.14,10.88,10.88,0,0,0,1.64-.29V28.53c0-1.55-.35-2.61-1.06-3.18A5.48,5.48,0,0,0,52.32,24.51Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-3",
                    d: "M65.73,31.5a13.41,13.41,0,0,0-3.61.48V53.76c0,1.49.35,2.49,1,3a5.81,5.81,0,0,0,3.41.77,15.07,15.07,0,0,0,2.12-.14,8.9,8.9,0,0,0,1.49-.29V35.32a3.65,3.65,0,0,0-1-3A5.7,5.7,0,0,0,65.73,31.5Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 503
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-4",
                    d: "M66.15,20a4.35,4.35,0,0,0-3.26,1.27,4.49,4.49,0,0,0,0,6.2,4.79,4.79,0,0,0,6.52,0,4.47,4.47,0,0,0,0-6.2A4.35,4.35,0,0,0,66.15,20Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 738
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-5",
                    d: "M79.29,57.53a15.33,15.33,0,0,0,2.13-.14,9,9,0,0,0,1.48-.29V38.23a12.91,12.91,0,0,1,1.48-.66,5.63,5.63,0,0,1,2-.34,4.07,4.07,0,0,1,2.59.82,3,3,0,0,1,1.06,2.57V53.76c0,1.49.35,2.49,1,3a5.87,5.87,0,0,0,3.42.77,15.29,15.29,0,0,0,2.12-.14,10.78,10.78,0,0,0,1.53-.29V39.61c0-.18,0-.35,0-.53s0-.35-.08-.53a6.36,6.36,0,0,1,1.67-.95,5.26,5.26,0,0,1,2-.37,3.81,3.81,0,0,1,2.59.82,3.2,3.2,0,0,1,1,2.57V53.76c0,1.49.34,2.49,1,3a5.87,5.87,0,0,0,3.42.77,15.18,15.18,0,0,0,2.12-.14,11,11,0,0,0,1.54-.29V40.41A10.26,10.26,0,0,0,112.5,36a8.29,8.29,0,0,0-2.3-3,9.07,9.07,0,0,0-3.32-1.64,15,15,0,0,0-3.95-.5,14.26,14.26,0,0,0-4.77.71,16.33,16.33,0,0,0-3.6,1.78,11.44,11.44,0,0,0-3.63-1.89,14.52,14.52,0,0,0-4.21-.6,19.05,19.05,0,0,0-5.38.74,14.4,14.4,0,0,0-4.32,2,6.29,6.29,0,0,0-1.65,1.59,3.83,3.83,0,0,0-.58,2.22V53.76c0,1.49.35,2.49,1.06,3A6,6,0,0,0,79.29,57.53Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 913
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-6",
                    d: "M122.28,67.07a13.66,13.66,0,0,0,2.12-.16,12.24,12.24,0,0,0,1.48-.32V57.1a13.26,13.26,0,0,0,2.12.61,12.7,12.7,0,0,0,2.55.24,15,15,0,0,0,5.19-.87,11.55,11.55,0,0,0,4.14-2.6,12.05,12.05,0,0,0,2.73-4.29,16.64,16.64,0,0,0,1-5.91,16,16,0,0,0-1-6.05,11,11,0,0,0-2.89-4.18,11.58,11.58,0,0,0-4.42-2.42,19.8,19.8,0,0,0-5.65-.76,21.51,21.51,0,0,0-5.51.66A14.71,14.71,0,0,0,120,33.2a5.6,5.6,0,0,0-1.64,1.56,4,4,0,0,0-.59,2.25V63.25a3.61,3.61,0,0,0,1.06,3A5.84,5.84,0,0,0,122.28,67.07Zm3.55-28.89a11.21,11.21,0,0,1,1.64-.66,6.75,6.75,0,0,1,2.12-.29,5.43,5.43,0,0,1,4.22,1.64c1,1.09,1.51,2.9,1.51,5.41s-.52,4.25-1.57,5.45a5.5,5.5,0,0,1-4.42,1.81,7,7,0,0,1-1.91-.24,7.2,7.2,0,0,1-1.59-.66Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 1806
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-7",
                    d: "M154.45,41.57q-4.5.48-6.68,2.39a7,7,0,0,0-2.17,5.56,7.11,7.11,0,0,0,3.23,6.39c2.16,1.4,5.06,2.09,8.7,2.09a24.58,24.58,0,0,0,5.4-.53,13,13,0,0,0,4-1.53,6.63,6.63,0,0,0,1.72-1.41,3.22,3.22,0,0,0,.72-2.2v-12a9.53,9.53,0,0,0-.88-4.24,7.9,7.9,0,0,0-2.46-3,10.91,10.91,0,0,0-3.84-1.72,21,21,0,0,0-5-.55,27.41,27.41,0,0,0-4,.29,16.47,16.47,0,0,0-3.58.87,3.45,3.45,0,0,0-2.44,3.34,4,4,0,0,0,.45,1.88,3.25,3.25,0,0,0,1.09,1.3,24.9,24.9,0,0,1,3.47-1.11,16.3,16.3,0,0,1,4-.48,8,8,0,0,1,4,.8,2.67,2.67,0,0,1,1.38,2.49v.58Zm7.1,4.72v4.88a5.42,5.42,0,0,1-1.72.61,11.88,11.88,0,0,1-2.3.23,5.13,5.13,0,0,1-3.13-.74,2.39,2.39,0,0,1-1-2,2,2,0,0,1,1-1.83,6.59,6.59,0,0,1,2.73-.77Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 2527
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-8",
                    d: "M178.2,57.53a15.29,15.29,0,0,0,2.12-.14,9,9,0,0,0,1.48-.29V38.34a11.48,11.48,0,0,1,2-.8,8.23,8.23,0,0,1,2.34-.31,4.57,4.57,0,0,1,3,.9,3.31,3.31,0,0,1,1.12,2.75V53.76c0,1.49.34,2.49,1,3a5.87,5.87,0,0,0,3.42.77,15.18,15.18,0,0,0,2.12-.14,11,11,0,0,0,1.54-.29V40.67a8.81,8.81,0,0,0-3.16-7.26c-2.1-1.7-5.08-2.54-8.93-2.54a21.94,21.94,0,0,0-5.91.74,13.74,13.74,0,0,0-4.37,2,6.29,6.29,0,0,0-1.65,1.59,3.91,3.91,0,0,0-.58,2.22V53.76c0,1.49.36,2.49,1.06,3A6,6,0,0,0,178.2,57.53Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 3235
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-9",
                    d: "M202.08,51.62a4.37,4.37,0,0,0-.45,1.93,4.5,4.5,0,0,0,.45,2,5.43,5.43,0,0,0,1.19,1.59h17.6a2.71,2.71,0,0,0,2-.75,3.22,3.22,0,0,0,.77-2.43,6,6,0,0,0-.26-1.75,5.08,5.08,0,0,0-.59-1.33H211.64L221.45,39a8.88,8.88,0,0,0,1.14-1.77,4.29,4.29,0,0,0,.45-1.88,4.33,4.33,0,0,0-.48-2.07,5.91,5.91,0,0,0-1.22-1.59H204.59a2.74,2.74,0,0,0-2,.74,3.26,3.26,0,0,0-.77,2.44,5.15,5.15,0,0,0,.29,1.78,11.12,11.12,0,0,0,.56,1.35h10.49l-10,11.87A9.24,9.24,0,0,0,202.08,51.62Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 3752
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-10",
                    d: "M228.87,54.48a12.64,12.64,0,0,0,4.56,2.6,18.37,18.37,0,0,0,5.77.87,24.59,24.59,0,0,0,3.9-.29,12.11,12.11,0,0,0,3.07-.9,5.72,5.72,0,0,0,2-1.51,3.21,3.21,0,0,0,.75-2.12,3.49,3.49,0,0,0-.53-1.86,4.74,4.74,0,0,0-1.33-1.38,13.78,13.78,0,0,1-3.18,1.35,13.92,13.92,0,0,1-4.19.61,9.47,9.47,0,0,1-4.29-.92,5.17,5.17,0,0,1-2.6-3.16l13.78-2.06a4.71,4.71,0,0,0,2.55-1.12,3.32,3.32,0,0,0,.9-2.54,11.18,11.18,0,0,0-.9-4.51A10.45,10.45,0,0,0,246.65,34a11.5,11.5,0,0,0-3.87-2.3,14.28,14.28,0,0,0-4.95-.82,15.57,15.57,0,0,0-4.85.76,11.57,11.57,0,0,0-4.19,2.42,11.82,11.82,0,0,0-2.92,4.13,14.7,14.7,0,0,0-1.08,5.88,15.79,15.79,0,0,0,1.08,6.1A12,12,0,0,0,228.87,54.48Zm5.22-16.22a5.34,5.34,0,0,1,3.79-1.41,4.22,4.22,0,0,1,4.56,3.82l-10.13,1.64A6.16,6.16,0,0,1,234.09,38.26Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 4250
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    className: "cls-2 svg-elem-11",
                    d: "M286,46.39c-6.08-3-8.75,1.75-12,3.53a14.11,14.11,0,0,1-7.11,1.93,8.86,8.86,0,0,1-4.29-.92,5.17,5.17,0,0,1-2.6-3.16l13.79-2.06a4.71,4.71,0,0,0,2.54-1.12,3.32,3.32,0,0,0,.9-2.54c0-.25,0-.5,0-.74h0c0-5.13-2.86-7.42-2.86-7.42-1-.54.38-1,1.79-.66a4.86,4.86,0,0,0,4.13-.94,1.71,1.71,0,0,0,.44-.56,1.79,1.79,0,0,0,.31-1.19.71.71,0,0,0-.39-.47,1.25,1.25,0,0,0-.15-.19c-1.88-1.79-.87-4.59-.87-4.59a1.61,1.61,0,0,0-1-1.6h0a5.21,5.21,0,0,0-4.12-2,4.82,4.82,0,0,0-4.66,2.88,3.11,3.11,0,0,1-2.3,2.07c-8.3,1.82-15.93,6-15.65,17.09,0,.12,0,.23,0,.34a15.79,15.79,0,0,0,1.08,6.1,12,12,0,0,0,3,4.32,12.64,12.64,0,0,0,4.56,2.6,18.39,18.39,0,0,0,5.78.87,14.88,14.88,0,0,0,7.08-1.58c3.67-1.9,4.23-2.82,6.9-4.45,4.66-2.84,10.89,7.4.95,20.46-14.65,19.24-70.07,7-123.83,0s-72.24-3.2-78.64-1.16-5.72,12.39,5.49,9.69,48.73-9.7,135.21,2.93S293.34,50,286,46.39Zm-17.61-8.32a4.35,4.35,0,0,1,1.22,2.6l-10.07,1.64a6.16,6.16,0,0,1,1.77-4.05,5.33,5.33,0,0,1,3.77-1.4A4.29,4.29,0,0,1,268.41,38.07Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 5052
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 65
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/bootstrap.min.css */ "./assets/css/bootstrap.min.css");
/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/fontawesome.min.css */ "./assets/css/fontawesome.min.css");
/* harmony import */ var _assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/animate.min.css */ "./assets/css/animate.min.css");
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/flaticon.css */ "./assets/css/flaticon.css");
/* harmony import */ var _assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/css/boxicons.min.css */ "./assets/css/boxicons.min.css");
/* harmony import */ var _assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ "./node_modules/react-modal-video/css/modal-video.min.css");
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/css/responsive.css */ "./assets/css/responsive.css");
/* harmony import */ var _assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");



var _jsxFileName = "C:\\Users\\Shredder\\Desktop\\himpanzee\\himpanzee-landing\\pages\\_app.js",
    _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_16___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_17__.initStore)((_temp = class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_14___default()) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: true
    });
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({
      loading: false
    }), 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_15___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Himpanzee"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_13__.Provider, {
        store: store,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_18__.default, {
        loading: this.state.loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_19__.default, {
        scrollStepInPx: "50",
        delayInMs: "16.66"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, this)]
    }, void 0, true);
  }

}, _temp)));

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TO_CART": function() { return /* binding */ ADD_TO_CART; },
/* harmony export */   "REMOVE_ITEM": function() { return /* binding */ REMOVE_ITEM; },
/* harmony export */   "SUB_QUANTITY": function() { return /* binding */ SUB_QUANTITY; },
/* harmony export */   "ADD_QUANTITY": function() { return /* binding */ ADD_QUANTITY; },
/* harmony export */   "ADD_SHIPPING": function() { return /* binding */ ADD_SHIPPING; },
/* harmony export */   "ADD_QUANTITY_WITH_NUMBER": function() { return /* binding */ ADD_QUANTITY_WITH_NUMBER; },
/* harmony export */   "ORDER_FORM": function() { return /* binding */ ORDER_FORM; },
/* harmony export */   "CHECKOUT_CHARGE": function() { return /* binding */ CHECKOUT_CHARGE; },
/* harmony export */   "RESET_CART": function() { return /* binding */ RESET_CART; }
/* harmony export */ });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initStore": function() { return /* binding */ initStore; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initState = {
  products: [{
    id: 1,
    title: "Novel Bunch",
    price: 455.50,
    image: "/images/shop/item1.jpg",
    imageHover: "/images/shop/item1-hover.jpg"
  }, {
    id: 2,
    title: "Book Chicks",
    price: 541.50,
    image: "/images/shop/item2.jpg",
    imageHover: "/images/shop/item2-hover.jpg"
  }, {
    id: 3,
    title: "Book Divas",
    price: 140.50,
    image: "/images/shop/item3.jpg",
    imageHover: "/images/shop/item3-hover.jpg"
  }, {
    id: 4,
    title: "Book Smart",
    price: 600.00,
    image: "/images/shop/item4.jpg",
    imageHover: "/images/shop/item4-hover.jpg"
  }, {
    id: 5,
    title: "Book Broads",
    price: 655.50,
    image: "/images/shop/item5.jpg",
    imageHover: "/images/shop/item5-hover.jpg"
  }, {
    id: 6,
    title: "Page Turners",
    price: 415.00,
    image: "/images/shop/item6.jpg",
    imageHover: "/images/shop/item6-hover.jpg"
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_QUANTITY_WITH_NUMBER) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.SUB_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_SHIPPING) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.RESET_CART) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(cartReducer, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)()));
};

/***/ }),

/***/ "./assets/css/animate.min.css":
/*!************************************!*\
  !*** ./assets/css/animate.min.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./assets/css/bootstrap.min.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./assets/css/boxicons.min.css ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/flaticon.css":
/*!*********************************!*\
  !*** ./assets/css/flaticon.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/fontawesome.min.css":
/*!****************************************!*\
  !*** ./assets/css/fontawesome.min.css ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/responsive.css":
/*!***********************************!*\
  !*** ./assets/css/responsive.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlrZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyLmpzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3RhaWtlci8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIl0sIm5hbWVzIjpbIkdvVG9wIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaXNfdmlzaWJsZSIsImNvbXBvbmVudERpZE1vdW50Iiwic2Nyb2xsQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNldFN0YXRlIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicmVuZGVyIiwiTG9hZGVyIiwibG9hZGluZyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwiTXlBcHAiLCJ0aW1lckhhbmRsZSIsInNldFRpbWVvdXQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFyVGltZW91dCIsInN0b3JlIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfSVRFTSIsIlNVQl9RVUFOVElUWSIsIkFERF9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiaW5pdFN0YXRlIiwicHJvZHVjdHMiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJpbWFnZSIsImltYWdlSG92ZXIiLCJhZGRlZEl0ZW1zIiwidG90YWwiLCJzaGlwcGluZyIsImNhcnRSZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiZXhpc3RlZF9pdGVtIiwicXVhbnRpdHkiLCJuZXdUb3RhbCIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUdBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBRWUsTUFBTUEsS0FBTixTQUFvQkMsNENBQXBCLENBQThCO0FBQ3pDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsZ0JBQVUsRUFBRTtBQURILEtBQWI7QUFHSDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDaEIsUUFBSUMsZUFBZSxHQUFHLElBQXRCO0FBQ0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDSCxxQkFBZSxDQUFDSSxnQkFBaEI7QUFDSCxLQUZEO0FBR0g7O0FBRURBLGtCQUFnQixHQUFHO0FBQ2YsUUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzFCLFdBQUtDLFFBQUwsQ0FBYztBQUNWVCxrQkFBVSxFQUFFO0FBREYsT0FBZDtBQUdILEtBSkQsTUFJTztBQUNILFdBQUtTLFFBQUwsQ0FBYztBQUNWVCxrQkFBVSxFQUFFO0FBREYsT0FBZDtBQUdIO0FBQ0o7O0FBRURVLGFBQVcsR0FBRztBQUNWSCxVQUFNLENBQUNJLFFBQVAsQ0FBZ0I7QUFDWkMsU0FBRyxFQUFFLENBRE87QUFFWkMsY0FBUSxFQUFFO0FBRkUsS0FBaEI7QUFJSDs7QUFFREMsUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFZDtBQUFGLFFBQWlCLEtBQUtELEtBQTVCO0FBQ0Esd0JBQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNLQyxVQUFVLGlCQUNQO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFpQyxlQUFPLEVBQUUsTUFBTSxL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RUFFZGEsWUFGYyxFQUdkRSw2RUFBbUIsQ0FBQ0Msc0RBQWUsRUFBaEIsQ0FITCxDQUFsQjtBQUtILENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlMUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGdEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29Ub3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzX3Zpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBzY3JvbGxDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNjcm9sbENvbXBvbmVudC50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNfdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiPlxuICAgICAgICAgICAgICAgIHtpc192aXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tdXBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNjcm9sbFRvVG9wKCl9PjwvaT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByZWxvYWRlciAke3RoaXMucHJvcHMubG9hZGluZyA/ICcnIDogJ3ByZWxvYWRlci1kZWFjdGl2YXRlJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDEwMFwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMTAwXCI+PHRpdGxlPkxvYWRlciBzdmc8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj48ZyBpZD1cIkFydHdvcmtcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImNscy0yIHN2Zy1lbGVtLTJcIiBkPVwiTTUyLjMyLDI0LjUxYTE1Ljk0LDE1Ljk0LDAsMCwwLTIuMi4xNWwtMS42Ny4yN1YzNy43NkgzNy4wNVYyOC40M2MwLTEuNTYtLjM1LTIuNi0xLjA2LTMuMTNhNS44Miw1LjgyLDAsMCwwLTMuNDQtLjc5LDE1LjY1LDE1LjY1LDAsMCwwLTIuMTUuMTVsLTEuNjcuMjdWNTMuNmE0LDQsMCwwLDAsMSwzLjA4LDUuNDEsNS40MSwwLDAsMCwzLjQ3Ljg1LDE3LjY3LDE3LjY3LDAsMCwwLDIuMjMtLjE0LDEwLjg4LDEwLjg4LDAsMCwwLDEuNjQtLjI5VjQ0LjMzaDExLjRWNTMuNmEzLjkyLDMuOTIsMCwwLDAsMSwzLjA4LDUuNDEsNS40MSwwLDAsMCwzLjQ3Ljg1LDE3LjY3LDE3LjY3LDAsMCwwLDIuMjMtLjE0LDEwLjg4LDEwLjg4LDAsMCwwLDEuNjQtLjI5VjI4LjUzYzAtMS41NS0uMzUtMi42MS0xLjA2LTMuMThBNS40OCw1LjQ4LDAsMCwwLDUyLjMyLDI0LjUxWlwiPjwvcGF0aD48cGF0aCBjbGFzc05hbWU9XCJjbHMtMiBzdmctZWxlbS0zXCIgZD1cIk02NS43MywzMS41YTEzLjQxLDEzLjQxLDAsMCwwLTMuNjEuNDhWNTMuNzZjMCwxLjQ5LjM1LDIuNDksMSwzYTUuODEsNS44MSwwLDAsMCwzLjQxLjc3LDE1LjA3LDE1LjA3LDAsMCwwLDIuMTItLjE0LDguOSw4LjksMCwwLDAsMS40OS0uMjlWMzUuMzJhMy42NSwzLjY1LDAsMCwwLTEtM0E1LjcsNS43LDAsMCwwLDY1LjczLDMxLjVaXCI+PC9wYXRoPjxwYXRoIGNsYXNzTmFtZT1cImNscy0yIHN2Zy1lbGVtLTRcIiBkPVwiTTY2LjE1LDIwYTQuMzUsNC4zNSwwLDAsMC0zLjI2LDEuMjcsNC40OSw0LjQ5LDAsMCwwLDAsNi4yLDQuNzksNC43OSwwLDAsMCw2LjUyLDAsNC40Nyw0LjQ3LDAsMCwwLDAtNi4yQTQuMzUsNC4zNSwwLDAsMCw2Ni4xNSwyMFpcIj48L3BhdGg+PHBhdGggY2xhc3NOYW1lPVwiY2xzLTIgc3ZnLWVsZW0tNVwiIGQ9XCJNNzkuMjksNTcuNTNhMTUuMzMsMTUuMzMsMCwwLDAsMi4xMy0uMTQsOSw5LDAsMCwwLDEuNDgtLjI5VjM4LjIzYTEyLjkxLDEyLjkxLDAsMCwxLDEuNDgtLjY2LDUuNjMsNS42MywwLDAsMSwyLS4zNCw0LjA3LDQuMDcsMCwwLDEsMi41OS44MiwzLDMsMCwwLDEsMS4wNiwyLjU3VjUzLjc2YzAsMS40OS4zNSwyLjQ5LDEsM2E1Ljg3LDUuODcsMCwwLDAsMy40Mi43NywxNS4yOSwxNS4yOSwwLDAsMCwyLjEyLS4xNCwxMC43OCwxMC43OCwwLDAsMCwxLjUzLS4yOVYzOS42MWMwLS4xOCwwLS4zNSwwLS41M3MwLS4zNS0uMDgtLjUzYTYuMzYsNi4zNiwwLDAsMSwxLjY3LS45NSw1LjI2LDUuMjYsMCwwLDEsMi0uMzcsMy44MSwzLjgxLDAsMCwxLDIuNTkuODIsMy4yLDMuMiwwLDAsMSwxLDIuNTdWNTMuNzZjMCwxLjQ5LjM0LDIuNDksMSwzYTUuODcsNS44NywwLDAsMCwzLjQyLjc3LDE1LjE4LDE1LjE4LDAsMCwwLDIuMTItLjE0LDExLDExLDAsMCwwLDEuNTQtLjI5VjQwLjQxQTEwLjI2LDEwLjI2LDAsMCwwLDExMi41LDM2YTguMjksOC4yOSwwLDAsMC0yLjMtMyw5LjA3LDkuMDcsMCwwLDAtMy4zMi0xLjY0LDE1LDE1LDAsMCwwLTMuOTUtLjUsMTQuMjYsMTQuMjYsMCwwLDAtNC43Ny43MSwxNi4zMywxNi4zMywwLDAsMC0zLjYsMS43OCwxMS40NCwxMS40NCwwLDAsMC0zLjYzLTEuODksMTQuNTIsMTQuNTIsMCwwLDAtNC4yMS0uNiwxOS4wNSwxOS4wNSwwLDAsMC01LjM4Ljc0LDE0LjQsMTQuNCwwLDAsMC00LjMyLDIsNi4yOSw2LjI5LDAsMCwwLTEuNjUsMS41OSwzLjgzLDMuODMsMCwwLDAtLjU4LDIuMjJWNTMuNzZjMCwxLjQ5LjM1LDIuNDksMS4wNiwzQTYsNiwwLDAsMCw3OS4yOSw1Ny41M1pcIj48L3BhdGg+PHBhdGggY2xhc3NOYW1lPVwiY2xzLTIgc3ZnLWVsZW0tNlwiIGQ9XCJNMTIyLjI4LDY3LjA3YTEzLjY2LDEzLjY2LDAsMCwwLDIuMTItLjE2LDEyLjI0LDEyLjI0LDAsMCwwLDEuNDgtLjMyVjU3LjFhMTMuMjYsMTMuMjYsMCwwLDAsMi4xMi42MSwxMi43LDEyLjcsMCwwLDAsMi41NS4yNCwxNSwxNSwwLDAsMCw1LjE5LS44NywxMS41NSwxMS41NSwwLDAsMCw0LjE0LTIuNiwxMi4wNSwxMi4wNSwwLDAsMCwyLjczLTQuMjksMTYuNjQsMTYuNjQsMCwwLDAsMS01LjkxLDE2LDE2LDAsMCwwLTEtNi4wNSwxMSwxMSwwLDAsMC0yLjg5LTQuMTgsMTEuNTgsMTEuNTgsMCwwLDAtNC40Mi0yLjQyLDE5LjgsMTkuOCwwLDAsMC01LjY1LS43NiwyMS41MSwyMS41MSwwLDAsMC01LjUxLjY2QTE0LjcxLDE0LjcxLDAsMCwwLDEyMCwzMy4yYTUuNiw1LjYsMCwwLDAtMS42NCwxLjU2LDQsNCwwLDAsMC0uNTksMi4yNVY2My4yNWEzLjYxLDMuNjEsMCwwLDAsMS4wNiwzQTUuODQsNS44NCwwLDAsMCwxMjIuMjgsNjcuMDdabTMuNTUtMjguODlhMTEuMjEsMTEuMjEsMCwwLDEsMS42NC0uNjYsNi43NSw2Ljc1LDAsMCwxLDIuMTItLjI5LDUuNDMsNS40MywwLDAsMSw0LjIyLDEuNjRjMSwxLjA5LDEuNTEsMi45LDEuNTEsNS40MXMtLjUyLDQuMjUtMS41Nyw1LjQ1YTUuNSw1LjUsMCwwLDEtNC40MiwxLjgxLDcsNywwLDAsMS0xLjkxLS4yNCw3LjIsNy4yLDAsMCwxLTEuNTktLjY2WlwiPjwvcGF0aD48cGF0aCBjbGFzc05hbWU9XCJjbHMtMiBzdmctZWxlbS03XCIgZD1cIk0xNTQuNDUsNDEuNTdxLTQuNS40OC02LjY4LDIuMzlhNyw3LDAsMCwwLTIuMTcsNS41Niw3LjExLDcuMTEsMCwwLDAsMy4yMyw2LjM5YzIuMTYsMS40LDUuMDYsMi4wOSw4LjcsMi4wOWEyNC41OCwyNC41OCwwLDAsMCw1LjQtLjUzLDEzLDEzLDAsMCwwLDQtMS41Myw2LjYzLDYuNjMsMCwwLDAsMS43Mi0xLjQxLDMuMjIsMy4yMiwwLDAsMCwuNzItMi4ydi0xMmE5LjUzLDkuNTMsMCwwLDAtLjg4LTQuMjQsNy45LDcuOSwwLDAsMC0yLjQ2LTMsMTAuOTEsMTAuOTEsMCwwLDAtMy44NC0xLjcyLDIxLDIxLDAsMCwwLTUtLjU1LDI3LjQxLDI3LjQxLDAsMCwwLTQsLjI5LDE2LjQ3LDE2LjQ3LDAsMCwwLTMuNTguODcsMy40NSwzLjQ1LDAsMCwwLTIuNDQsMy4zNCw0LDQsMCwwLDAsLjQ1LDEuODgsMy4yNSwzLjI1LDAsMCwwLDEuMDksMS4zLDI0LjksMjQuOSwwLDAsMSwzLjQ3LTEuMTEsMTYuMywxNi4zLDAsMCwxLDQtLjQ4LDgsOCwwLDAsMSw0LC44LDIuNjcsMi42NywwLDAsMSwxLjM4LDIuNDl2LjU4Wm03LjEsNC43MnY0Ljg4YTUuNDIsNS40MiwwLDAsMS0xLjcyLjYxLDExLjg4LDExLjg4LDAsMCwxLTIuMy4yMyw1LjEzLDUuMTMsMCwwLDEtMy4xMy0uNzQsMi4zOSwyLjM5LDAsMCwxLTEtMiwyLDIsMCwwLDEsMS0xLjgzLDYuNTksNi41OSwwLDAsMSwyLjczLS43N1pcIj48L3BhdGg+PHBhdGggY2xhc3NOYW1lPVwiY2xzLTIgc3ZnLWVsZW0tOFwiIGQ9XCJNMTc4LjIsNTcuNTNhMTUuMjksMTUuMjksMCwwLDAsMi4xMi0uMTQsOSw5LDAsMCwwLDEuNDgtLjI5VjM4LjM0YTExLjQ4LDExLjQ4LDAsMCwxLDItLjgsOC4yMyw4LjIzLDAsMCwxLDIuMzQtLjMxLDQuNTcsNC41NywwLDAsMSwzLC45LDMuMzEsMy4zMSwwLDAsMSwxLjEyLDIuNzVWNTMuNzZjMCwxLjQ5LjM0LDIuNDksMSwzYTUuODcsNS44NywwLDAsMCwzLjQyLjc3LDE1LjE4LDE1LjE4LDAsMCwwLDIuMTItLjE0LDExLDExLDAsMCwwLDEuNTQtLjI5VjQwLjY3YTguODEsOC44MSwwLDAsMC0zLjE2LTcuMjZjLTIuMS0xLjctNS4wOC0yLjU0LTguOTMtMi41NGEyMS45NCwyMS45NCwwLDAsMC01LjkxLjc0LDEzLjc0LDEzLjc0LDAsMCwwLTQuMzcsMiw2LjI5LDYuMjksMCwwLDAtMS42NSwxLjU5LDMuOTEsMy45MSwwLDAsMC0uNTgsMi4yMlY1My43NmMwLDEuNDkuMzYsMi40OSwxLjA2LDNBNiw2LDAsMCwwLDE3OC4yLDU3LjUzWlwiPjwvcGF0aD48cGF0aCBjbGFzc05hbWU9XCJjbHMtMiBzdmctZWxlbS05XCIgZD1cIk0yMDIuMDgsNTEuNjJhNC4zNyw0LjM3LDAsMCwwLS40NSwxLjkzLDQuNSw0LjUsMCwwLDAsLjQ1LDIsNS40Myw1LjQzLDAsMCwwLDEuMTksMS41OWgxNy42YTIuNzEsMi43MSwwLDAsMCwyLS43NSwzLjIyLDMuMjIsMCwwLDAsLjc3LTIuNDMsNiw2LDAsMCwwLS4yNi0xLjc1LDUuMDgsNS4wOCwwLDAsMC0uNTktMS4zM0gyMTEuNjRMMjIxLjQ1LDM5YTguODgsOC44OCwwLDAsMCwxLjE0LTEuNzcsNC4yOSw0LjI5LDAsMCwwLC40NS0xLjg4LDQuMzMsNC4zMywwLDAsMC0uNDgtMi4wNyw1LjkxLDUuOTEsMCwwLDAtMS4yMi0xLjU5SDIwNC41OWEyLjc0LDIuNzQsMCwwLDAtMiwuNzQsMy4yNiwzLjI2LDAsMCwwLS43NywyLjQ0LDUuMTUsNS4xNSwwLDAsMCwuMjksMS43OCwxMS4xMiwxMS4xMiwwLDAsMCwuNTYsMS4zNWgxMC40OWwtMTAsMTEuODdBOS4yNCw5LjI0LDAsMCwwLDIwMi4wOCw1MS42MlpcIj48L3BhdGg+PHBhdGggY2xhc3NOYW1lPVwiY2xzLTIgc3ZnLWVsZW0tMTBcIiBkPVwiTTIyOC44Nyw1NC40OGExMi42NCwxMi42NCwwLDAsMCw0LjU2LDIuNiwxOC4zNywxOC4zNywwLDAsMCw1Ljc3Ljg3LDI0LjU5LDI0LjU5LDAsMCwwLDMuOS0uMjksMTIuMTEsMTIuMTEsMCwwLDAsMy4wNy0uOSw1LjcyLDUuNzIsMCwwLDAsMi0xLjUxLDMuMjEsMy4yMSwwLDAsMCwuNzUtMi4xMiwzLjQ5LDMuNDksMCwwLDAtLjUzLTEuODYsNC43NCw0Ljc0LDAsMCwwLTEuMzMtMS4zOCwxMy43OCwxMy43OCwwLDAsMS0zLjE4LDEuMzUsMTMuOTIsMTMuOTIsMCwwLDEtNC4xOS42MSw5LjQ3LDkuNDcsMCwwLDEtNC4yOS0uOTIsNS4xNyw1LjE3LDAsMCwxLTIuNi0zLjE2bDEzLjc4LTIuMDZhNC43MSw0LjcxLDAsMCwwLDIuNTUtMS4xMiwzLjMyLDMuMzIsMCwwLDAsLjktMi41NCwxMS4xOCwxMS4xOCwwLDAsMC0uOS00LjUxQTEwLjQ1LDEwLjQ1LDAsMCwwLDI0Ni42NSwzNGExMS41LDExLjUsMCwwLDAtMy44Ny0yLjMsMTQuMjgsMTQuMjgsMCwwLDAtNC45NS0uODIsMTUuNTcsMTUuNTcsMCwwLDAtNC44NS43NiwxMS41NywxMS41NywwLDAsMC00LjE5LDIuNDIsMTEuODIsMTEuODIsMCwwLDAtMi45Miw0LjEzLDE0LjcsMTQuNywwLDAsMC0xLjA4LDUuODgsMTUuNzksMTUuNzksMCwwLDAsMS4wOCw2LjFBMTIsMTIsMCwwLDAsMjI4Ljg3LDU0LjQ4Wm01LjIyLTE2LjIyYTUuMzQsNS4zNCwwLDAsMSwzLjc5LTEuNDEsNC4yMiw0LjIyLDAsMCwxLDQuNTYsMy44MmwtMTAuMTMsMS42NEE2LjE2LDYuMTYsMCwwLDEsMjM0LjA5LDM4LjI2WlwiPjwvcGF0aD48cGF0aCBjbGFzc05hbWU9XCJjbHMtMiBzdmctZWxlbS0xMVwiIGQ9XCJNMjg2LDQ2LjM5Yy02LjA4LTMtOC43NSwxLjc1LTEyLDMuNTNhMTQuMTEsMTQuMTEsMCwwLDEtNy4xMSwxLjkzLDguODYsOC44NiwwLDAsMS00LjI5LS45Miw1LjE3LDUuMTcsMCwwLDEtMi42LTMuMTZsMTMuNzktMi4wNmE0LjcxLDQuNzEsMCwwLDAsMi41NC0xLjEyLDMuMzIsMy4zMiwwLDAsMCwuOS0yLjU0YzAtLjI1LDAtLjUsMC0uNzRoMGMwLTUuMTMtMi44Ni03LjQyLTIuODYtNy40Mi0xLS41NC4zOC0xLDEuNzktLjY2YTQuODYsNC44NiwwLDAsMCw0LjEzLS45NCwxLjcxLDEuNzEsMCwwLDAsLjQ0LS41NiwxLjc5LDEuNzksMCwwLDAsLjMxLTEuMTkuNzEuNzEsMCwwLDAtLjM5LS40NywxLjI1LDEuMjUsMCwwLDAtLjE1LS4xOWMtMS44OC0xLjc5LS44Ny00LjU5LS44Ny00LjU5YTEuNjEsMS42MSwwLDAsMC0xLTEuNmgwYTUuMjEsNS4yMSwwLDAsMC00LjEyLTIsNC44Miw0LjgyLDAsMCwwLTQuNjYsMi44OCwzLjExLDMuMTEsMCwwLDEtMi4zLDIuMDdjLTguMywxLjgyLTE1LjkzLDYtMTUuNjUsMTcuMDksMCwuMTIsMCwuMjMsMCwuMzRhMTUuNzksMTUuNzksMCwwLDAsMS4wOCw2LjEsMTIsMTIsMCwwLDAsMyw0LjMyLDEyLjY0LDEyLjY0LDAsMCwwLDQuNTYsMi42LDE4LjM5LDE4LjM5LDAsMCwwLDUuNzguODcsMTQuODgsMTQuODgsMCwwLDAsNy4wOC0xLjU4YzMuNjctMS45LDQuMjMtMi44Miw2LjktNC40NSw0LjY2LTIuODQsMTAuODksNy40Ljk1LDIwLjQ2LTE0LjY1LDE5LjI0LTcwLjA3LDctMTIzLjgzLDBzLTcyLjI0LTMuMi03OC42NC0xLjE2LTUuNzIsMTIuMzksNS40OSw5LjY5LDQ4LjczLTkuNywxMzUuMjEsMi45M1MyOTMuMzQsNTAsMjg2LDQ2LjM5Wm0tMTcuNjEtOC4zMmE0LjM1LDQuMzUsMCwwLDEsMS4yMiwyLjZsLTEwLjA3LDEuNjRhNi4xNiw2LjE2LDAsMCwxLDEuNzctNC4wNSw1LjMzLDUuMzMsMCwwLDEsMy43Ny0xLjRBNC4yOSw0LjI5LDAsMCwxLDI2OC40MSwzOC4wN1pcIj48L3BhdGg+PC9nPjwvZz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgJy4uL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9hc3NldHMvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9hc3NldHMvY3NzL2FuaW1hdGUubWluLmNzcyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MvZmxhdGljb24uY3NzJztcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9ib3hpY29ucy5taW4uY3NzJztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9zY3NzL21vZGFsLXZpZGVvLnNjc3MnO1xuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJztcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzJztcblxuaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyJztcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKFxuICAgIGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcblxuICAgICAgICAvLyBQcmVsb2FkZXJcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy50aW1lckhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pLCAyMDAwKTsgXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lckhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGFuZGxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVySGFuZGxlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkhpbXBhbnplZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcmVsb2FkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBHbyBUb3AgQnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCI1MFwiIGRlbGF5SW5Ncz1cIjE2LjY2XCIgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9ICdBRERfVE9fQ0FSVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU0gPSAnUkVNT1ZFX0lURU0nO1xuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWSA9ICdBRERfUVVBTlRJVFknO1xuZXhwb3J0IGNvbnN0IEFERF9TSElQUElORyA9ICdBRERfU0hJUFBJTkcnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xuZXhwb3J0IGNvbnN0IE9SREVSX0ZPUk0gPSAnT1JERVJfRk9STSc7XG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfQ0hBUkdFID0gJ0NIRUNLT1VUX0NIQVJHRSc7XG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5cbmltcG9ydCB7IFxuICAgIEFERF9UT19DQVJULFxuICAgIFJFTU9WRV9JVEVNLFxuICAgIFNVQl9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFksIFxuICAgIEFERF9TSElQUElORyxcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgUkVTRVRfQ0FSVFxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMnXG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vdmVsIEJ1bmNoXCIsXG4gICAgICAgICAgICBwcmljZTogNDU1LjUwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wL2l0ZW0xLmpwZ1wiLFxuICAgICAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL3Nob3AvaXRlbTEtaG92ZXIuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICB0aXRsZTogXCJCb29rIENoaWNrc1wiLFxuICAgICAgICAgICAgcHJpY2U6IDU0MS41MCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC9pdGVtMi5qcGdcIixcbiAgICAgICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9zaG9wL2l0ZW0yLWhvdmVyLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6IFwiQm9vayBEaXZhc1wiLFxuICAgICAgICAgICAgcHJpY2U6IDE0MC41MCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC9pdGVtMy5qcGdcIixcbiAgICAgICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9zaG9wL2l0ZW0zLWhvdmVyLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgdGl0bGU6IFwiQm9vayBTbWFydFwiLFxuICAgICAgICAgICAgcHJpY2U6IDYwMC4wMCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC9pdGVtNC5qcGdcIixcbiAgICAgICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9zaG9wL2l0ZW00LWhvdmVyLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgdGl0bGU6IFwiQm9vayBCcm9hZHNcIixcbiAgICAgICAgICAgIHByaWNlOiA2NTUuNTAsXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Nob3AvaXRlbTUuanBnXCIsXG4gICAgICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvc2hvcC9pdGVtNS1ob3Zlci5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIHRpdGxlOiBcIlBhZ2UgVHVybmVyc1wiLFxuICAgICAgICAgICAgcHJpY2U6IDQxNS4wMCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC9pdGVtNi5qcGdcIixcbiAgICAgICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9zaG9wL2l0ZW02LWhvdmVyLmpwZ1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGFkZGVkSXRlbXM6W10sXG4gICAgdG90YWw6IDAsXG4gICAgc2hpcHBpbmc6IDBcbn1cblxuY29uc3QgY2FydFJlZHVjZXI9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICBcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFTU9WRV9JVEVNKXtcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLnByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFNVQl9RVUFOVElUWSl7ICBcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICBpZihhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpe1xuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLnByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5wcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSA2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVTRVRfQ0FSVCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBzaGlwcGluZzogMFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gaW5pdFN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICBjYXJ0UmVkdWNlcixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxuICAgIClcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==