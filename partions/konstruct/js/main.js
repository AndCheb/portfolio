/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst body = document.querySelector('.page__body');\r\nconst burger = document.querySelector('.burger');\r\nconst burgerOveraly = document.querySelector('.burger__overlay');\r\nconst burgerOpenButton = document.querySelector('.burger__open');\r\nconst burgerCloseButton = document.querySelector('.burger__close');\r\nconst burgerLinks = document.querySelectorAll('.burger__link'); \r\n\r\nconst burgerOpen = () => {\r\n  body.classList.add('scroll-none');\r\n  burger.classList.add('burger--visible');\r\n  burgerCloseButton.classList.add('burger__close--visible');\r\n  burgerOveraly.classList.add('burger__overlay--active');\r\n  burgerLinks.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n      burgerClose();\r\n    });\r\n  });\r\n}\r\n\r\nconst burgerClose = () => {\r\n  body.classList.remove('scroll-none');\r\n  burger.classList.remove('burger--visible');\r\n  burgerOveraly.classList.remove('burger__overlay--active');\r\n}\r\n\r\nburgerOpenButton.addEventListener('click', () => {\r\n  burgerOpen();\r\n});\r\n\r\nburgerCloseButton.addEventListener('click', () => {\r\n  burgerClose();\r\n});\r\n\r\nburgerOveraly.addEventListener('click', () => {\r\n  burgerClose();\r\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;