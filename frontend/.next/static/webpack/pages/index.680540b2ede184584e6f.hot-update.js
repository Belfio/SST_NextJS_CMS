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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./pages/api/request.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar getProfile = /*#__PURE__*/function () {\n  var _ref = (0,_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    return _Users_alfredo_NonBackedUp_Code_SST_NextJS_CMS_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // function onClick() {\n            //   fetch(\"/api/count\", { method: \"POST\" })\n            //     .then((response) => response.text())\n            //     .then(setCount);\n            // }\n            // const { accessToken } = data;\n            (0,_request__WEBPACK_IMPORTED_MODULE_2__.default)({\n              url: \"https://ksqms6y0n0.execute-api.us-east-1.amazonaws.com\",\n              params: {},\n              method: \"GET\",\n              pathTemplate: \"\",\n              body: {},\n              additionalParams: {}\n            }).then(function (res) {\n              console.log(res);\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getProfile(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getProfile);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBLElBQU1DLFVBQVU7QUFBQSxpVkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFILFlBQUFBLGlEQUFXLENBQUM7QUFDVkksY0FBQUEsR0FBRyxFQUFFLHdEQURLO0FBRVZDLGNBQUFBLE1BQU0sRUFBRSxFQUZFO0FBR1ZDLGNBQUFBLE1BQU0sRUFBRSxLQUhFO0FBSVZDLGNBQUFBLFlBQVksRUFBRSxFQUpKO0FBS1ZDLGNBQUFBLElBQUksRUFBRSxFQUxJO0FBTVZDLGNBQUFBLGdCQUFnQixFQUFFO0FBTlIsYUFBRCxDQUFYLENBT0dDLElBUEgsQ0FPUSxVQUFDUCxHQUFELEVBQVM7QUFDZlEsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULEdBQVo7QUFDRCxhQVREOztBQVRpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWRixVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOztBQXFCQSwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcz9kZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWtlUmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5jb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gIC8vICAgZmV0Y2goXCIvYXBpL2NvdW50XCIsIHsgbWV0aG9kOiBcIlBPU1RcIiB9KVxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gIC8vICAgICAudGhlbihzZXRDb3VudCk7XG4gIC8vIH1cblxuICAvLyBjb25zdCB7IGFjY2Vzc1Rva2VuIH0gPSBkYXRhO1xuXG4gIG1ha2VSZXF1ZXN0KHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9rc3FtczZ5MG4wLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXCIsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgcGF0aFRlbXBsYXRlOiBcIlwiLFxuICAgIGJvZHk6IHt9LFxuICAgIGFkZGl0aW9uYWxQYXJhbXM6IHt9LFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb2ZpbGU7XG4iXSwibmFtZXMiOlsibWFrZVJlcXVlc3QiLCJnZXRQcm9maWxlIiwicmVxIiwicmVzIiwidXJsIiwicGFyYW1zIiwibWV0aG9kIiwicGF0aFRlbXBsYXRlIiwiYm9keSIsImFkZGl0aW9uYWxQYXJhbXMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/profile.js\n");

/***/ })

});