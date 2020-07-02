webpackHotUpdate(2,{

/***/ "./components/index/IndexBlogContent.js":
/*!**********************************************!*\
  !*** ./components/index/IndexBlogContent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexBlogContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _general_LazyArtikel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/LazyArtikel */ \"./components/general/LazyArtikel.js\");\nvar _jsxFileName = \"/Users/munirap/Work/personal-blog/components/index/IndexBlogContent.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar listArtikel = [{\n  id: 1,\n  link: \"/blog\",\n  imageSrc: \"http://picsum.photos/200/100\",\n  title: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit\",\n  caption: \"Maxime perferendis consectetur rem vitae veritatis deleniti porro namsunt consequuntur expedita sequi, assumenda excepturi aliquam dolor adipisci, quae illo\",\n  author: \"Munir AP\",\n  date: \"2020-01-01\"\n}, {\n  id: 2,\n  link: \"/blog\",\n  imageSrc: \"http://picsum.photos/200/100\",\n  title: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit\",\n  caption: \"Maxime perferendis consectetur rem vitae veritatis deleniti porro namsunt consequuntur expedita sequi, assumenda excepturi aliquam dolor adipisci, quae illo\",\n  author: \"Munir AP\",\n  date: \"2020-01-01\"\n}, {\n  id: 3,\n  link: \"/blog\",\n  imageSrc: \"http://picsum.photos/200/100\",\n  title: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit\",\n  caption: \"Maxime perferendis consectetur rem vitae veritatis deleniti porro namsunt consequuntur expedita sequi, assumenda excepturi aliquam dolor adipisci, quae illo\",\n  author: \"Munir AP\",\n  date: \"2020-01-01\"\n}];\nfunction IndexBlogContent(_ref) {\n  var _this = this;\n\n  var classExtend = _ref.classExtend,\n      listFeaturedArtikel = _ref.listFeaturedArtikel;\n  return __jsx(\"div\", {\n    className: \"content-wrapper pb-20 \".concat(classExtend),\n    id: \"blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"content-bg icon-blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"container pt-5 \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content-body\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \"Blog\"), __jsx(\"div\", {\n    className: \"mt-5 flex flex-wrapper items-center flex-col\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, listArtikel.map(function (item) {\n    return __jsx(_general_LazyArtikel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: item.id,\n      id: item.id,\n      link: item.link,\n      imageSrc: item.imageSrc,\n      title: item.title,\n      caption: item.caption,\n      author: item.author,\n      date: item.date,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    });\n  }), __jsx(\"button\", {\n    className: \"btn btn-model2 mt-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"See All Post \\u279D\")))));\n}\n_c = IndexBlogContent;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexBlogContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4L0luZGV4QmxvZ0NvbnRlbnQuanM/MDIzMiJdLCJuYW1lcyI6WyJsaXN0QXJ0aWtlbCIsImlkIiwibGluayIsImltYWdlU3JjIiwidGl0bGUiLCJjYXB0aW9uIiwiYXV0aG9yIiwiZGF0ZSIsIkluZGV4QmxvZ0NvbnRlbnQiLCJjbGFzc0V4dGVuZCIsImxpc3RGZWF0dXJlZEFydGlrZWwiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLFVBQVEsRUFBRSw4QkFIWjtBQUlFQyxPQUFLLEVBQUUsMERBSlQ7QUFLRUMsU0FBTyxFQUNMLDhKQU5KO0FBT0VDLFFBQU0sRUFBRSxVQVBWO0FBUUVDLE1BQUksRUFBRTtBQVJSLENBRGtCLEVBV2xCO0FBQ0VOLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLFVBQVEsRUFBRSw4QkFIWjtBQUlFQyxPQUFLLEVBQUUsMERBSlQ7QUFLRUMsU0FBTyxFQUNMLDhKQU5KO0FBT0VDLFFBQU0sRUFBRSxVQVBWO0FBUUVDLE1BQUksRUFBRTtBQVJSLENBWGtCLEVBcUJsQjtBQUNFTixJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxVQUFRLEVBQUUsOEJBSFo7QUFJRUMsT0FBSyxFQUFFLDBEQUpUO0FBS0VDLFNBQU8sRUFDTCw4SkFOSjtBQU9FQyxRQUFNLEVBQUUsVUFQVjtBQVFFQyxNQUFJLEVBQUU7QUFSUixDQXJCa0IsQ0FBcEI7QUFpQ2UsU0FBU0MsZ0JBQVQsT0FBZ0U7QUFBQTs7QUFBQSxNQUFwQ0MsV0FBb0MsUUFBcENBLFdBQW9DO0FBQUEsTUFBdkJDLG1CQUF1QixRQUF2QkEsbUJBQXVCO0FBQzdFLFNBQ0U7QUFBSyxhQUFTLGtDQUEyQkQsV0FBM0IsQ0FBZDtBQUF3RCxNQUFFLEVBQUMsTUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUssYUFBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsV0FBVyxDQUFDVyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN6QixXQUNFLE1BQUMsNERBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ1gsRUFEWjtBQUVFLFFBQUUsRUFBRVcsSUFBSSxDQUFDWCxFQUZYO0FBR0UsVUFBSSxFQUFFVyxJQUFJLENBQUNWLElBSGI7QUFJRSxjQUFRLEVBQUVVLElBQUksQ0FBQ1QsUUFKakI7QUFLRSxXQUFLLEVBQUVTLElBQUksQ0FBQ1IsS0FMZDtBQU1FLGFBQU8sRUFBRVEsSUFBSSxDQUFDUCxPQU5oQjtBQU9FLFlBQU0sRUFBRU8sSUFBSSxDQUFDTixNQVBmO0FBUUUsVUFBSSxFQUFFTSxJQUFJLENBQUNMLElBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBWUQsR0FiQSxDQURILEVBZUU7QUFBUSxhQUFTLEVBQUMsc0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZkYsQ0FGRixDQURGLENBRkYsQ0FERjtBQTZCRDtLQTlCdUJDLGdCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbmRleC9JbmRleEJsb2dDb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhenlBcnRpa2VsIGZyb20gXCIuLi9nZW5lcmFsL0xhenlBcnRpa2VsXCI7XG5cbmNvbnN0IGxpc3RBcnRpa2VsID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbGluazogXCIvYmxvZ1wiLFxuICAgIGltYWdlU3JjOiBcImh0dHA6Ly9waWNzdW0ucGhvdG9zLzIwMC8xMDBcIixcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgIGNhcHRpb246XG4gICAgICBcIk1heGltZSBwZXJmZXJlbmRpcyBjb25zZWN0ZXR1ciByZW0gdml0YWUgdmVyaXRhdGlzIGRlbGVuaXRpIHBvcnJvIG5hbXN1bnQgY29uc2VxdXVudHVyIGV4cGVkaXRhIHNlcXVpLCBhc3N1bWVuZGEgZXhjZXB0dXJpIGFsaXF1YW0gZG9sb3IgYWRpcGlzY2ksIHF1YWUgaWxsb1wiLFxuICAgIGF1dGhvcjogXCJNdW5pciBBUFwiLFxuICAgIGRhdGU6IFwiMjAyMC0wMS0wMVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbGluazogXCIvYmxvZ1wiLFxuICAgIGltYWdlU3JjOiBcImh0dHA6Ly9waWNzdW0ucGhvdG9zLzIwMC8xMDBcIixcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgIGNhcHRpb246XG4gICAgICBcIk1heGltZSBwZXJmZXJlbmRpcyBjb25zZWN0ZXR1ciByZW0gdml0YWUgdmVyaXRhdGlzIGRlbGVuaXRpIHBvcnJvIG5hbXN1bnQgY29uc2VxdXVudHVyIGV4cGVkaXRhIHNlcXVpLCBhc3N1bWVuZGEgZXhjZXB0dXJpIGFsaXF1YW0gZG9sb3IgYWRpcGlzY2ksIHF1YWUgaWxsb1wiLFxuICAgIGF1dGhvcjogXCJNdW5pciBBUFwiLFxuICAgIGRhdGU6IFwiMjAyMC0wMS0wMVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbGluazogXCIvYmxvZ1wiLFxuICAgIGltYWdlU3JjOiBcImh0dHA6Ly9waWNzdW0ucGhvdG9zLzIwMC8xMDBcIixcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdFwiLFxuICAgIGNhcHRpb246XG4gICAgICBcIk1heGltZSBwZXJmZXJlbmRpcyBjb25zZWN0ZXR1ciByZW0gdml0YWUgdmVyaXRhdGlzIGRlbGVuaXRpIHBvcnJvIG5hbXN1bnQgY29uc2VxdXVudHVyIGV4cGVkaXRhIHNlcXVpLCBhc3N1bWVuZGEgZXhjZXB0dXJpIGFsaXF1YW0gZG9sb3IgYWRpcGlzY2ksIHF1YWUgaWxsb1wiLFxuICAgIGF1dGhvcjogXCJNdW5pciBBUFwiLFxuICAgIGRhdGU6IFwiMjAyMC0wMS0wMVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhCbG9nQ29udGVudCh7IGNsYXNzRXh0ZW5kLCBsaXN0RmVhdHVyZWRBcnRpa2VsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtd3JhcHBlciBwYi0yMCAke2NsYXNzRXh0ZW5kfWB9IGlkPVwiYmxvZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJnIGljb24tYmxvZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+QmxvZzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4IGZsZXgtd3JhcHBlciBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIHtsaXN0QXJ0aWtlbC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGF6eUFydGlrZWxcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgbGluaz17aXRlbS5saW5rfVxuICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e2l0ZW0uaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGNhcHRpb249e2l0ZW0uY2FwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgPjwvTGF6eUFydGlrZWw+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1tb2RlbDIgbXQtMTJcIj5cbiAgICAgICAgICAgICAgU2VlIEFsbCBQb3N0ICYjMTAxNDE7XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index/IndexBlogContent.js\n");

/***/ })

})