"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./pages/api/request.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar url = \"https://ksqms6y0n0.execute-api.us-east-1.amazonaws.com\";\nvar path = \"/profile\";\n\nvar getProfile = /*#__PURE__*/function () {\n  var _ref = (0,_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    return _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"andiamo\");\n            fetch(url + path, {\n              method: \"GET\"\n            }).then(function (response) {\n              return response.text();\n            }).then(function (res) {\n              return console.log(\"qualcosa successo\", res);\n            }); // makeRequest({\n            //   url: \"https://ksqms6y0n0.execute-api.us-east-1.amazonaws.com\",\n            //   params: {},\n            //   method: \"GET\",\n            //   pathTemplate: \"\",\n            //   body: {},\n            //   additionalParams: {},\n            // }).then((res) => {\n            //   console.log(res);\n            // });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getProfile(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getProfile);\n\nvar createProfile = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(profile) {\n    return _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function createProfile(_x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsR0FBRyxHQUFHLHdEQUFaO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFVBQWI7O0FBQ0EsSUFBTUMsVUFBVTtBQUFBLGlWQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUVBQyxZQUFBQSxLQUFLLENBQUNQLEdBQUcsR0FBR0MsSUFBUCxFQUFhO0FBQUVPLGNBQUFBLE1BQU0sRUFBRTtBQUFWLGFBQWIsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLHFCQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLGFBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNMLEdBQUQ7QUFBQSxxQkFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEdBQWpDLENBQVQ7QUFBQSxhQUZSLEVBSGlCLENBT2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkYsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFtQkEsK0RBQWVBLFVBQWY7O0FBRUEsSUFBTVUsYUFBYTtBQUFBLGtWQUFHLGtCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYkQsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcz9kZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWtlUmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9rc3FtczZ5MG4wLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXCI7XG5jb25zdCBwYXRoID0gXCIvcHJvZmlsZVwiO1xuY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhcImFuZGlhbW9cIik7XG5cbiAgZmV0Y2godXJsICsgcGF0aCwgeyBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhcInF1YWxjb3NhIHN1Y2Nlc3NvXCIsIHJlcykpO1xuXG4gIC8vIG1ha2VSZXF1ZXN0KHtcbiAgLy8gICB1cmw6IFwiaHR0cHM6Ly9rc3FtczZ5MG4wLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXCIsXG4gIC8vICAgcGFyYW1zOiB7fSxcbiAgLy8gICBtZXRob2Q6IFwiR0VUXCIsXG4gIC8vICAgcGF0aFRlbXBsYXRlOiBcIlwiLFxuICAvLyAgIGJvZHk6IHt9LFxuICAvLyAgIGFkZGl0aW9uYWxQYXJhbXM6IHt9LFxuICAvLyB9KS50aGVuKChyZXMpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhyZXMpO1xuICAvLyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb2ZpbGU7XG5cbmNvbnN0IGNyZWF0ZVByb2ZpbGUgPSBhc3luYyAocHJvZmlsZSkgPT4ge1xuICAvLyBjb25zdCBnZXRQYXJhbXMgPSB7XG4gIC8vICAgLy8gR2V0IHRoZSB0YWJsZSBuYW1lIGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlXG4gIC8vICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5UQUJMRV9OQU1FLFxuICAvLyAgIC8vIEdldCB0aGUgcm93IHdoZXJlIHRoZSBjb3VudGVyIGlzIGNhbGxlZCBcImhpdHNcIlxuICAvLyAgIEtleToge1xuICAvLyAgICAgY291bnRlcjogXCJoaXRzXCIsXG4gIC8vICAgfSxcbiAgLy8gfTtcbiAgLy8gY29uc3QgcmVzdWx0cyA9IGF3YWl0IGR5bmFtb0RiLmdldChnZXRQYXJhbXMpLnByb21pc2UoKTtcbiAgLy8gLy8gSWYgdGhlcmUgaXMgYSByb3csIHRoZW4gZ2V0IHRoZSB2YWx1ZSBvZiB0aGVcbiAgLy8gLy8gY29sdW1uIGNhbGxlZCBcInRhbGx5XCJcbiAgLy8gbGV0IGNvdW50ID0gcmVzdWx0cy5JdGVtID8gcmVzdWx0cy5JdGVtLnRhbGx5IDogMDtcbiAgLy8gY29uc3QgcHV0UGFyYW1zID0ge1xuICAvLyAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuVEFCTEVfTkFNRSxcbiAgLy8gICBLZXk6IHtcbiAgLy8gICAgIGNvdW50ZXI6IFwiaGl0c1wiLFxuICAvLyAgIH0sXG4gIC8vICAgLy8gVXBkYXRlIHRoZSBcInRhbGx5XCIgY29sdW1uXG4gIC8vICAgVXBkYXRlRXhwcmVzc2lvbjogXCJTRVQgdGFsbHkgPSA6Y291bnRcIixcbiAgLy8gICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gIC8vICAgICAvLyBJbmNyZWFzZSB0aGUgY291bnRcbiAgLy8gICAgIFwiOmNvdW50XCI6ICsrY291bnQsXG4gIC8vICAgfSxcbiAgLy8gfTtcbiAgLy8gYXdhaXQgZHluYW1vRGIudXBkYXRlKHB1dFBhcmFtcykucHJvbWlzZSgpO1xuICAvLyByZXMuc3RhdHVzKDIwMCkuc2VuZChjb3VudCk7XG59O1xuIl0sIm5hbWVzIjpbIm1ha2VSZXF1ZXN0IiwidXJsIiwicGF0aCIsImdldFByb2ZpbGUiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiY3JlYXRlUHJvZmlsZSIsInByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/profile.js\n");

/***/ })

});