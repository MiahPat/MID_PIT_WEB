(()=>{"use strict";var __webpack_modules__=({"./resources/scripts/frontend/components/side-cart.js":
/*!************************************************************!*\
  !*** ./resources/scripts/frontend/components/side-cart.js ***!
  \************************************************************/
((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");var jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);var SideCart=function SideCart(){var _=this;this.init=function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click','.header-cart-link',function(e){e.preventDefault();jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cfw-side-cart-floating-button').trigger('click')})};this.init()};var sideCart=new SideCart()}),"./resources/scripts/frontend/pages/shop.js":
/*!**************************************************!*\
  !*** ./resources/scripts/frontend/pages/shop.js ***!
  \**************************************************/
((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");var jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);var SideCart=function SideCart(sel){var _=this;_.$page=jquery__WEBPACK_IMPORTED_MODULE_0___default()(sel);this.init=function(){};_.isNumeric=function(str){if(typeof str!="string")return!1;return!isNaN(str)&&!isNaN(parseFloat(str))};if(_.$page.length){this.init()}};var sideCart=new SideCart('.post-type-archive-product, .tax-product_cat')}),"jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
((module)=>{module.exports=jQuery})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports}var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports}(()=>{__webpack_require__.n=(module)=>{var getter=module&&module.__esModule?()=>(module['default']):()=>(module);__webpack_require__.d(getter,{a:getter});return getter}})();(()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})}}}})();(()=>{__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))})();(()=>{__webpack_require__.r=(exports)=>{if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'})}Object.defineProperty(exports,'__esModule',{value:!0})}})();var __webpack_exports__={};(()=>{
/*!***************************************!*\
  !*** ./resources/scripts/frontend.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);var _frontend_components_side_cart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./frontend/components/side-cart */"./resources/scripts/frontend/components/side-cart.js");var _frontend_pages_shop_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./frontend/pages/shop.js */"./resources/scripts/frontend/pages/shop.js")})()})()