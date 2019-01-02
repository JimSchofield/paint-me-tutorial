/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/paint-me.view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/MyCanvas.js":
/*!********************************!*\
  !*** ./assets/src/MyCanvas.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyCanvas; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar MyCanvas =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(MyCanvas, _React$Component);\n\n  function MyCanvas(props) {\n    var _this;\n\n    _classCallCheck(this, MyCanvas);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyCanvas).call(this, props));\n    _this.state = {\n      isDrawing: false,\n      inProgressPath: []\n    }; // need to bind this to the method so we can do\n    // things like 'setState'\n\n    _this.startDrawing = _this.startDrawing.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.endDrawing = _this.endDrawing.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  } // Whenever component mounts or update, re-render the canvas\n\n\n  _createClass(MyCanvas, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.updateCanvas();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.updateCanvas();\n    } // This should always re-render the canvas as if its a blank slate\n    // This means we need to store a \"history\" of all strokes that the user\n    // creates in the block\n\n  }, {\n    key: \"updateCanvas\",\n    value: function updateCanvas() {\n      var _this2 = this;\n\n      // Find the width/height of the canvas to use later\n      var width = this.refs.canvas.width;\n      var height = this.refs.canvas.height; // We're going to access the canvas as a ref so we can do things directly\n      // to the canvas.  If you aren't familiar with context, take a look at\n      // a canvas tutorial.  Basically, it's what you do most of your\n      // painting and work on\n\n      var canvas = this.refs.canvas;\n      var ctx = canvas.getContext(\"2d\"); // We're going to start by filling the canvas with orange\n\n      ctx.fillStyle = \"orange\";\n      ctx.fillRect(0, 0, width, height); // draw all the strokes\n\n      this.props.strokeList.forEach(function (stroke) {\n        console.log(stroke);\n\n        _this2.drawStrokes(stroke, ctx);\n      }); // draw any stroke that is in progress\n\n      if (this.state.isDrawing && this.state.inProgressPath.length > 1) {\n        this.drawStrokes(this.state.inProgressPath, ctx);\n      }\n    }\n  }, {\n    key: \"drawStrokes\",\n    value: function drawStrokes(strokes, context) {\n      var firstPoint = strokes[0];\n      context.moveTo(firstPoint.x, firstPoint.y);\n\n      for (var index = 1; index < strokes.length; index++) {\n        var nextPoint = strokes[index];\n        context.lineTo(nextPoint.x, nextPoint.y);\n      }\n\n      context.stroke();\n    }\n  }, {\n    key: \"startDrawing\",\n    value: function startDrawing() {\n      this.setState({\n        isDrawing: true\n      });\n    }\n  }, {\n    key: \"handleMouseMove\",\n    value: function handleMouseMove(event) {\n      if (this.state.isDrawing) {\n        var domRect = event.target.getBoundingClientRect();\n        var top = domRect.top;\n        var left = domRect.left;\n        var point = {\n          x: event.pageX - left,\n          y: event.pageY - top\n        };\n        this.setState({\n          inProgressPath: [].concat(_toConsumableArray(this.state.inProgressPath), [point])\n        });\n      }\n    }\n  }, {\n    key: \"endDrawing\",\n    value: function endDrawing() {\n      this.props.addStroke(this.state.inProgressPath);\n      this.setState({\n        isDrawing: false,\n        inProgressPath: []\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n        width: \"400\",\n        height: \"400\",\n        ref: \"canvas\",\n        onMouseDown: this.startDrawing,\n        onMouseMove: this.handleMouseMove,\n        onMouseUp: this.endDrawing\n      });\n    }\n  }]);\n\n  return MyCanvas;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./assets/src/MyCanvas.js?");

/***/ }),

/***/ "./assets/src/paint-me.view.js":
/*!*************************************!*\
  !*** ./assets/src/paint-me.view.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MyCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyCanvas */ \"./assets/src/MyCanvas.js\");\n// Even though they're not bundled, they need to be imported\n\n // Import our MyCanvas to call on later\n\n\nready(function () {\n  // There may be many of these, so query them all\n  var containers = document.querySelectorAll(\".paint-me\"); // turn into array instead of node list\n\n  var containersArray = Array.prototype.slice.call(containers);\n  containersArray.forEach(function (element) {\n    // get the props from this div\n    var strokeList = JSON.parse(element.dataset.strokeList); // Call react!\n\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyCanvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      strokeList: strokeList\n    }), // call MyCanvas and pass the strokeList as props\n    element // need to specify the element to render on\n    );\n  });\n}); // Thank you http://youmightnotneedjquery.com/\n// Very much like $.ready() from jQuery\n\nfunction ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener(\"DOMContentLoaded\", fn);\n  }\n}\n\n//# sourceURL=webpack:///./assets/src/paint-me.view.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });