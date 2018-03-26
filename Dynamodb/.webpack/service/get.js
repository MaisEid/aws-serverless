(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./get.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./get.js":
/*!****************!*\
  !*** ./get.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.scanGet = exports.queryGet = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"babel-runtime/helpers/asyncToGenerator\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\n/*\nA query operation searches only primary key attribute values , the only filter opertaion allowoed is equle \nA scan operation scans the entire table.You can specify filters to apply to the results to refine the values \nreturned to you, after the complete scan */\n\n/*good practice to design your table for applications to use Query instead of Scan. \nBecause a scan operation always scan the entire table before it filters out the desired values, \nwhich means it takes more time and space to process data operations\n such as read, write and delete*/\n\n//Get data using Query operation \nvar queryGet = exports.queryGet = function () {\n  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, context, callback) {\n    var queryParams, result;\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            queryParams = {\n              TableName: \"Quotes\",\n              // 'KeyConditionExpression' defines the condition for the query\n              // - 'userId = :userId': only return items with matching 'userId'\n              //   partition key\n              // 'ExpressionAttributeValues' defines the value in the condition\n              // - ':userId': defines 'userId' \n              KeyConditionExpression: \"quoteId = :quoteId\",\n              ExpressionAttributeValues: {\n                \":quoteId\": event.pathParameters.quoteId\n              }\n            };\n            _context.prev = 1;\n            _context.next = 4;\n            return dynamoDbLib.call(\"query\", queryParams);\n\n          case 4:\n            result = _context.sent;\n\n            callback(null, (0, _responseLib.success)(result));\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n\n            callback(null, (0, _responseLib.failure)({ status: false }));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[1, 8]]);\n  }));\n\n  return function queryGet(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//Get data using scan operation \n// we get get all data in table using scan opertion by just pass table name in params \n\n\nvar scanGet = exports.scanGet = function () {\n  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event, context, callback) {\n    var scanParams, result;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            scanParams = {\n              TableName: 'Quotes',\n              FilterExpression: \"quoteId = :quoteId\",\n              ExpressionAttributeValues: {\n                \":quoteId\": event.pathParameters.quoteId\n              }\n            };\n            _context2.prev = 1;\n            _context2.next = 4;\n            return dynamoDbLib.call(\"scan\", scanParams);\n\n          case 4:\n            result = _context2.sent;\n\n            // Return the matching list of items in response body\n            console.log(result);\n            callback(null, (0, _responseLib.success)(result));\n            _context2.next = 12;\n            break;\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](1);\n\n            callback(null, (0, _responseLib.failure)({ status: false }));\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[1, 9]]);\n  }));\n\n  return function scanGet(_x4, _x5, _x6) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _dynamodbLib = __webpack_require__(/*! ./libs/dynamodb-lib */ \"./libs/dynamodb-lib.js\");\n\nvar dynamoDbLib = _interopRequireWildcard(_dynamodbLib);\n\nvar _responseLib = __webpack_require__(/*! ./libs/response-lib */ \"./libs/response-lib.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./get.js?");

/***/ }),

/***/ "./libs/dynamodb-lib.js":
/*!******************************!*\
  !*** ./libs/dynamodb-lib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.call = call;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_awsSdk2.default.config.update({ region: \"us-east-1\" });\n\nfunction call(action, params) {\n  var dynamoDb = new _awsSdk2.default.DynamoDB.DocumentClient();\n  return dynamoDb[action](params).promise();\n}\n\n//# sourceURL=webpack:///./libs/dynamodb-lib.js?");

/***/ }),

/***/ "./libs/response-lib.js":
/*!******************************!*\
  !*** ./libs/response-lib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nexports.success = success;\nexports.failure = failure;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction success(body) {\n  return buildResponse(200, body);\n}\n\nfunction failure(body) {\n  return buildResponse(500, body);\n}\n\nfunction buildResponse(statusCode, body) {\n  return {\n    statusCode: statusCode,\n    headers: {\n      \"Access-Control-Allow-Origin\": \"*\",\n      \"Access-Control-Allow-Credentials\": true\n    },\n    body: (0, _stringify2.default)(body)\n  };\n}\n\n//# sourceURL=webpack:///./libs/response-lib.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ })

/******/ })));