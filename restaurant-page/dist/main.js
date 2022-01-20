/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\n    const contact = document.createElement(\"div\");\n    contact.setAttribute(\"id\", \"page\");\n    const phoneAndMsg = document.createElement(\"div\");\n    phoneAndMsg.textContent = \"00 966 123 456 7890\";\n    contact.appendChild(phoneAndMsg);\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\n    const home = document.createElement(\"div\");\n    home.appendChild(header(\"The Bean Stop\"));\n    home.setAttribute(\"id\", \"page\");\n    // ADD CLASS HERE FOR CSS STYLING\n    return home;\n}\n\nfunction header(string) {\n    const header = document.createElement(\"h1\");\n    header.textContent = string;\n    // ADD CLASS HERE FOR CSS STYLING\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\n\n\nfunction init() {\n    const main = document.getElementById(\"content\");\n    const hmpg = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const navb = (0,_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    main.appendChild(navb);\n    main.appendChild(hmpg);\n    addEvents();\n}\n\nfunction addEvents() {\n    const btns = document.querySelectorAll(\"button\");\n    const main = document.getElementById(\"content\");\n    console.log(page);\n    btns.forEach(elem => {\n        elem.addEventListener(\"click\", () => {\n            document.getElementById(\"page\").remove();\n            if (elem.dataset.what == 1) main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n            if (elem.dataset.what == 2) main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n            if (elem.dataset.what == 3) main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n        })\n    });\n}\n\ninit();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\n    const menu = document.createElement(\"div\");\n    menu.appendChild(makeMenu());\n    menu.setAttribute(\"id\", \"page\");\n    // ADD CLASS HERE FOR STYLING\n    return menu;\n}\n\nfunction makeItem(itemName) {\n    const item = document.createElement(\"div\");\n    const name = document.createElement(\"h4\");\n    const desc = document.createElement(\"p\");\n    \n    // ADD CLASS FOR ALL THREE ABOVE ELEMENTS CSS STYLING\n    name.textContent = itemName;\n    item.appendChild(name);\n    return item;\n}\n\nfunction makeMenu() {\n    const items = document.createElement(\"div\");\n    // ADD CLASS FOR STYLING\n    // REMOVE SOME??\n    items.append(makeItem(\"Black beans\"));\n    items.append(makeItem(\"Cannellini Beans\"));\n    items.append(makeItem(\"Chickpeas\"));\n    items.append(makeItem(\"Kidney beans\"));\n    items.append(makeItem(\"Lima beans\"));\n    items.append(makeItem(\"Great Nothern beans\"));\n    items.append(makeItem(\"Pinto beans\"));\n    items.append(makeItem(\"Soy beans\"));\n    return items;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction navbar() {\n    const navbar = document.createElement(\"div\");\n    navbar.appendChild(makeBtn(\"home\", 1));\n    navbar.appendChild(makeBtn(\"menu\", 2));\n    navbar.appendChild(makeBtn(\"contact\", 3));\n    // ADD CLASS HERE FOR STYLING IN CSS\n    return navbar;\n}\n\nfunction makeBtn(string, num) {\n    const button = document.createElement(\"button\");\n    button.textContent = string;\n    button.setAttribute(\"data-what\", num);\n    return button;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;