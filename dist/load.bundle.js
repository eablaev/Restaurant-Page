"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["load"],{

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
function content(state) {
    const contentElement = document.getElementById('content')
    
    


    
    

    const heading = document.createElement('h1');
    heading.textContent = "Worst Restaurant in the World!";
    heading.classList.add('heading')


    const image = document.createElement('img');
    image.src = "../media/img.jpeg";
    image.classList.add('image');

    const description = document.createElement('h3');
    description.textContent = "Are you tired of gourmet meals and Michelin-star dining experiences? Come dine with us at the Worst Restaurant in the World! Our menu is a mystery, our ingredients questionable, and our chefs questionable, but one thing's for sure, you'll never forget your dining experience with us. And if you do, just ask our friendly waitstaff, they`ll be more than happy to remind you. Reservations not recommended, unless you`re brave enough to face the unknown. See you soon!" 
    description.classList.add('description');


    const menu = document.createElement('button');
    menu.textContent = "Menu";
    menu.classList.add('menu');



    contentElement.appendChild(heading);
    contentElement.appendChild(image);
    contentElement.appendChild(description);
    contentElement.appendChild(menu)

    menu.addEventListener('click',function(){
        state = 'menu'
        console.log(state)
    })

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGVudChzdGF0ZSkge1xuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIFxuICAgIFxuXG5cbiAgICBcbiAgICBcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldvcnN0IFJlc3RhdXJhbnQgaW4gdGhlIFdvcmxkIVwiO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpXG5cblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9tZWRpYS9pbWcuanBlZ1wiO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkFyZSB5b3UgdGlyZWQgb2YgZ291cm1ldCBtZWFscyBhbmQgTWljaGVsaW4tc3RhciBkaW5pbmcgZXhwZXJpZW5jZXM/IENvbWUgZGluZSB3aXRoIHVzIGF0IHRoZSBXb3JzdCBSZXN0YXVyYW50IGluIHRoZSBXb3JsZCEgT3VyIG1lbnUgaXMgYSBteXN0ZXJ5LCBvdXIgaW5ncmVkaWVudHMgcXVlc3Rpb25hYmxlLCBhbmQgb3VyIGNoZWZzIHF1ZXN0aW9uYWJsZSwgYnV0IG9uZSB0aGluZydzIGZvciBzdXJlLCB5b3UnbGwgbmV2ZXIgZm9yZ2V0IHlvdXIgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCB1cy4gQW5kIGlmIHlvdSBkbywganVzdCBhc2sgb3VyIGZyaWVuZGx5IHdhaXRzdGFmZiwgdGhleWBsbCBiZSBtb3JlIHRoYW4gaGFwcHkgdG8gcmVtaW5kIHlvdS4gUmVzZXJ2YXRpb25zIG5vdCByZWNvbW1lbmRlZCwgdW5sZXNzIHlvdWByZSBicmF2ZSBlbm91Z2ggdG8gZmFjZSB0aGUgdW5rbm93bi4gU2VlIHlvdSBzb29uIVwiIFxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cblxuXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChtZW51KVxuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgc3RhdGUgPSAnbWVudSdcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgfSlcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==