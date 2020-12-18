(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/TID":
    /*!*****************************************!*\
      !*** ./src/app/models/fantome.model.ts ***!
      \*****************************************/

    /*! exports provided: FantomeModel */

    /***/
    function TID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FantomeModel", function () {
        return FantomeModel;
      });

      var FantomeModel = /*#__PURE__*/function () {
        function FantomeModel(couleur, coordoneesInitiale, coordoneesRode, carractere) {
          _classCallCheck(this, FantomeModel);

          this.couleur = couleur;
          this.coordonees = coordoneesInitiale;
          this.coordoneesRode = coordoneesRode;
          this.poursuitMode = 0; // 0 = rode, 1 = poursuite, -1 = panique

          this.libreDeSortir = false;
          this.calculNextDirection = carractere;
        }

        _createClass(FantomeModel, [{
          key: "calculNextDirection",
          value: function calculNextDirection(fantome, pacman, ser, option) {
            throw new Error('Pas de caractère défini');
          }
        }]);

        return FantomeModel;
      }();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\work\sources\_PRIVE\pacman\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "352s":
    /*!******************************************************!*\
      !*** ./src/app/labyrinthe/labyrinthe.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ligne {\n  display: flex;\n}\n\n.emptyTile {\n  width: 16px;\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhYnlyaW50aGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImxhYnlyaW50aGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlnbmUge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLmVtcHR5VGlsZSB7XHJcbiAgd2lkdGg6MTZweDtcclxuICBoZWlnaHQ6MTZweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "8QLm":
    /*!********************************************!*\
      !*** ./src/app/pacman/pacman.component.ts ***!
      \********************************************/

    /*! exports provided: PacmanComponent */

    /***/
    function QLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PacmanComponent", function () {
        return PacmanComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pacman_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pacman.component.html */
      "F9D/");
      /* harmony import */


      var _pacman_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pacman.component.scss */
      "kHM6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PacmanComponent = /*#__PURE__*/function () {
        function PacmanComponent() {
          _classCallCheck(this, PacmanComponent);
        }

        _createClass(PacmanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PacmanComponent;
      }();

      PacmanComponent.ctorParameters = function () {
        return [];
      };

      PacmanComponent.propDecorators = {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PacmanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pacman-pacman',
        template: _raw_loader_pacman_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pacman_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PacmanComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Cq81":
    /*!**************************************!*\
      !*** ./src/app/mur/mur.component.ts ***!
      \**************************************/

    /*! exports provided: MurComponent */

    /***/
    function Cq81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MurComponent", function () {
        return MurComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mur_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mur.component.html */
      "Nvwu");
      /* harmony import */


      var _mur_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mur.component.scss */
      "KNNn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MurComponent = /*#__PURE__*/function () {
        function MurComponent() {
          _classCallCheck(this, MurComponent);
        }

        _createClass(MurComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MurComponent;
      }();

      MurComponent.ctorParameters = function () {
        return [];
      };

      MurComponent.propDecorators = {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pacman-mur',
        template: _raw_loader_mur_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mur_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MurComponent);
      /***/
    },

    /***/
    "F9D/":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pacman/pacman.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function F9D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"pacman\" [ngClass]=\"'D'+direction\"></div>\r\n";
      /***/
    },

    /***/
    "H/tl":
    /*!****************************************************!*\
      !*** ./src/app/labyrinthe/labyrinthe.component.ts ***!
      \****************************************************/

    /*! exports provided: LabyrintheComponent */

    /***/
    function HTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabyrintheComponent", function () {
        return LabyrintheComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_labyrinthe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./labyrinthe.component.html */
      "o/HD");
      /* harmony import */


      var _labyrinthe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./labyrinthe.component.scss */
      "352s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _carte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../carte.service */
      "L0B2");

      var LabyrintheComponent = /*#__PURE__*/function () {
        function LabyrintheComponent(carteService) {
          _classCallCheck(this, LabyrintheComponent);

          this.carteService = carteService;
        } // tslint:disable: max-line-length


        _createClass(LabyrintheComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tiles = this.carteService.donneLaCarteTotale();
          }
        }]);

        return LabyrintheComponent;
      }();

      LabyrintheComponent.ctorParameters = function () {
        return [{
          type: _carte_service__WEBPACK_IMPORTED_MODULE_4__["CarteService"]
        }];
      };

      LabyrintheComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pacman-labyrinthe',
        template: _raw_loader_labyrinthe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_labyrinthe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_carte_service__WEBPACK_IMPORTED_MODULE_4__["CarteService"]])], LabyrintheComponent);
      /***/
    },

    /***/
    "KNNn":
    /*!****************************************!*\
      !*** ./src/app/mur/mur.component.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function KNNn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mur {\n  position: relative;\n  width: 16px;\n  height: 16px;\n}\n\n.BD::after {\n  content: \"\";\n  position: absolute;\n  border-top-left-radius: 14px;\n  border-top-style: solid;\n  border-left-style: solid;\n  border-width: 2px;\n  border-color: #0000FF;\n  top: 7px;\n  left: 7px;\n  width: 7px;\n  height: 7px;\n}\n\n.HD::after {\n  content: \"\";\n  position: absolute;\n  border-bottom-left-radius: 14px;\n  border-bottom-style: solid;\n  border-left-style: solid;\n  border-width: 2px;\n  border-color: #0000FF;\n  top: 0px;\n  left: 7px;\n  width: 7px;\n  height: 7px;\n}\n\n.BG::after {\n  content: \"\";\n  position: absolute;\n  border-top-right-radius: 14px;\n  border-top-style: solid;\n  border-right-style: solid;\n  border-width: 2px;\n  border-color: #0000FF;\n  top: 7px;\n  left: 0px;\n  width: 7px;\n  height: 7px;\n}\n\n.HG::after {\n  content: \"\";\n  position: absolute;\n  border-bottom-right-radius: 14px;\n  border-bottom-style: solid;\n  border-right-style: solid;\n  border-width: 2px;\n  border-color: #0000FF;\n  top: 0px;\n  left: 0px;\n  width: 7px;\n  height: 7px;\n}\n\n.HB::after {\n  content: \"\";\n  position: absolute;\n  border-left-style: solid;\n  border-width: 2px;\n  border-color: #0000FF;\n  top: 0px;\n  left: 7px;\n  width: 7px;\n  height: 16px;\n}\n\n.GD::after {\n  content: \"\";\n  position: absolute;\n  border-top-style: solid;\n  border-width: 2px;\n  border-color: #0000FF;\n  top: 7px;\n  left: 0px;\n  width: 16px;\n  height: 7px;\n}\n\n.WW::after {\n  content: \"\";\n  position: absolute;\n  border-top-style: solid;\n  border-width: 2px;\n  border-color: #FFCCCC;\n  top: 7px;\n  left: 0px;\n  width: 16px;\n  height: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG11ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTUYiLCJmaWxlIjoibXVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11ciB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgd2lkdGg6MTZweDtcclxuICBoZWlnaHQ6MTZweDtcclxufVxyXG4uQkQ6OmFmdGVyIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNHB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IzAwMDBGRjtcclxuICB0b3A6N3B4O1xyXG4gIGxlZnQ6N3B4O1xyXG4gIHdpZHRoOjdweDtcclxuICBoZWlnaHQ6N3B4O1xyXG59XHJcblxyXG4uSEQ6OmFmdGVyIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IzAwMDBGRjtcclxuICB0b3A6MHB4O1xyXG4gIGxlZnQ6N3B4O1xyXG4gIHdpZHRoOjdweDtcclxuICBoZWlnaHQ6N3B4O1xyXG59XHJcbi5CRzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxNHB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiMwMDAwRkY7XHJcbiAgdG9wOjdweDtcclxuICBsZWZ0OjBweDtcclxuICB3aWR0aDo3cHg7XHJcbiAgaGVpZ2h0OjdweDtcclxufVxyXG4uSEc6OmFmdGVyIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTRweDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1jb2xvcjojMDAwMEZGO1xyXG4gIHRvcDowcHg7XHJcbiAgbGVmdDowcHg7XHJcbiAgd2lkdGg6N3B4O1xyXG4gIGhlaWdodDo3cHg7XHJcbn1cclxuLkhCOjphZnRlciB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6IzAwMDBGRjtcclxuICB0b3A6MHB4O1xyXG4gIGxlZnQ6N3B4O1xyXG4gIHdpZHRoOjdweDtcclxuICBoZWlnaHQ6MTZweDtcclxufVxyXG4uR0Q6OmFmdGVyIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiMwMDAwRkY7XHJcbiAgdG9wOjdweDtcclxuICBsZWZ0OjBweDtcclxuICB3aWR0aDoxNnB4O1xyXG4gIGhlaWdodDo3cHg7XHJcbn1cclxuXHJcbi5XVzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6ICNGRkNDQ0M7XHJcbiAgdG9wOjdweDtcclxuICBsZWZ0OjBweDtcclxuICB3aWR0aDoxNnB4O1xyXG4gIGhlaWdodDo3cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "L0B2":
    /*!**********************************!*\
      !*** ./src/app/carte.service.ts ***!
      \**********************************/

    /*! exports provided: CarteService */

    /***/
    function L0B2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarteService", function () {
        return CarteService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // tslint:disable: max-line-length


      var CARTE_DU_JEU = [['BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG'], ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'], ['HB', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'HB'], ['HB', 'PS', 'HB', '  ', '  ', 'HB', 'PN', 'HB', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', 'HB', 'PN', 'HB', '  ', '  ', 'HB', 'PS', 'HB'], ['HB', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HB'], ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'], ['HB', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'HB'], ['HB', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HB'], ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'], ['HD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HD', 'GD', 'GD', 'BG', '  ', 'HB', 'HB', '  ', 'BD', 'GD', 'GD', 'HG', 'HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'HG'], ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'BD', 'GD', 'GD', 'HG', '  ', 'HD', 'HG', '  ', 'HD', 'GD', 'GD', 'BG', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', 'BD', 'GD', 'GD', 'WW', 'WW', 'GD', 'GD', 'BG', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '], ['GD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', '  ', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', '  ', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD'], ['  ', '  ', '  ', '  ', '  ', '  ', 'PN', '  ', '  ', '  ', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', '  ', '  ', '  ', 'PN', '  ', '  ', '  ', '  ', '  ', '  '], ['GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', '  ', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', '  ', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD'], ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '], ['BD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', '  ', 'HD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'HG', '  ', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'BG'], ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'], ['HB', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'HB'], ['HB', 'PN', 'HD', 'GD', 'BG', 'HB', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HB', 'BD', 'GD', 'HG', 'PN', 'HB'], ['HB', 'PS', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', '  ', '  ', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PS', 'HB'], ['HD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'HG'], ['BD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'BG'], ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'], ['HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'HG', 'HD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'GD', 'HG', 'HD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB'], ['HB', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HB'], ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'], ['HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG']];

      var CarteService = /*#__PURE__*/function () {
        function CarteService() {
          _classCallCheck(this, CarteService);

          this.cases = JSON.parse(JSON.stringify(CARTE_DU_JEU));
          this.mursListe = 'WW BD HD BG HG HB GD';
        }

        _createClass(CarteService, [{
          key: "donneLaCarteTotale",
          value: function donneLaCarteTotale() {
            return this.cases;
          }
        }, {
          key: "ilYaUnMur",
          value: function ilYaUnMur(position) {
            var libre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (libre) {
              return this.mursListe.substring(3).indexOf(this.cases[position.latitude][position.longitude]) >= 0;
            } else {
              return this.mursListe.indexOf(this.cases[position.latitude][position.longitude]) >= 0;
            }
          }
        }, {
          key: "ilYaUnePacgum",
          value: function ilYaUnePacgum(position) {
            return this.cases[position.latitude][position.longitude] === 'PN';
          }
        }, {
          key: "ilYaUneSuperPacgum",
          value: function ilYaUneSuperPacgum(position) {
            return this.cases[position.latitude][position.longitude] === 'PS';
          }
        }, {
          key: "videUneCase",
          value: function videUneCase(position) {
            this.cases[position.latitude][position.longitude] = '  ';
          }
        }, {
          key: "reinitialise",
          value: function reinitialise() {
            this.cases = JSON.parse(JSON.stringify(CARTE_DU_JEU));
          }
        }]);

        return CarteService;
      }();

      CarteService.ctorParameters = function () {
        return [];
      };

      CarteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CarteService);
      /***/
    },

    /***/
    "Nvwu":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mur/mur.component.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Nvwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"mur\" [ngClass]=\"direction\"></div>\r\n";
      /***/
    },

    /***/
    "SfR3":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fantome/fantome.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function SfR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fantome\" [ngStyle]=\"{'background':couleur}\"></div>\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_fantome_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./models/fantome.model */
      "/TID");
      /* harmony import */


      var _fantome_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fantome.service */
      "f0Ka");
      /* harmony import */


      var _carte_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./carte.service */
      "L0B2");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(fantomeService, carteService) {
          _classCallCheck(this, AppComponent);

          this.fantomeService = fantomeService;
          this.carteService = carteService;
          this.title = 'pacman';
          this.blinky = new _models_fantome_model__WEBPACK_IMPORTED_MODULE_4__["FantomeModel"]('#FF0000', {
            direction: 720,
            latitude: 11,
            longitude: 13,
            vitesse: 10
          }, {
            latitude: -3,
            longitude: 25
          }, this.fantomeService.chasseur);
          this.pinky = new _models_fantome_model__WEBPACK_IMPORTED_MODULE_4__["FantomeModel"]('#FFCCCC', {
            direction: 0,
            latitude: 13,
            longitude: 13,
            vitesse: 10
          }, {
            latitude: -3,
            longitude: 2
          }, this.fantomeService.piegeur);
          this.inky = new _models_fantome_model__WEBPACK_IMPORTED_MODULE_4__["FantomeModel"]('#00FFFF', {
            direction: 720,
            latitude: 14,
            longitude: 11,
            vitesse: 10
          }, {
            latitude: 32,
            longitude: 27
          }, this.fantomeService.timide);
          this.clyde = new _models_fantome_model__WEBPACK_IMPORTED_MODULE_4__["FantomeModel"]('#FFBB00', {
            direction: 720,
            latitude: 14,
            longitude: 15,
            vitesse: 10
          }, {
            latitude: 32,
            longitude: 0
          }, this.fantomeService.dedaignant);
          this.fantomes = [this.blinky, this.pinky, this.inky, this.clyde];
          this.pacman = {
            direction: 90,
            latitude: 23,
            longitude: 13
          };
          this.nbPacgumMangee = 0;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Calcul du mouvement des fantomes
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(0, 200).subscribe(function () {
              var _iterator = _createForOfIteratorHelper(_this.fantomes),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var fantome = _step.value;
                  fantome.coordonees = _this.fantomeService.projetePosition(fantome.coordonees, fantome.calculNextDirection(fantome, _this.pacman, _this.fantomeService, _this.blinky.coordonees));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            this.activeLeChangementDeMode();
          }
        }, {
          key: "reinitialise",
          value: function reinitialise() {
            this.blinky.coordonees = {
              direction: 720,
              latitude: 11,
              longitude: 13,
              vitesse: 10
            };
            this.pinky.coordonees = {
              direction: 0,
              latitude: 13,
              longitude: 13,
              vitesse: 10
            };
            this.inky.coordonees = {
              direction: 720,
              latitude: 14,
              longitude: 11,
              vitesse: 10
            };
            this.clyde.coordonees = {
              direction: 720,
              latitude: 14,
              longitude: 15,
              vitesse: 10
            };
            this.inky.libreDeSortir = false;
            this.clyde.libreDeSortir = false;
            this.pacman = {
              direction: 90,
              latitude: 23,
              longitude: 13
            };
            this.nbPacgumMangee = 0;
          }
        }, {
          key: "activeLeChangementDeMode",
          value: function activeLeChangementDeMode() {
            var _this2 = this;

            // Changement de mode rode/poursuite
            this.modeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(7000, 20000, 7000, 20000, 5000, 20000, 5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (val) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])('change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(val));
            })).subscribe(function (val) {
              var _iterator2 = _createForOfIteratorHelper(_this2.fantomes),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var fantome = _step2.value;
                  fantome.poursuitMode = fantome.poursuitMode ? 0 : 1;
                  fantome.coordonees.direction = _this2.fantomeService.directionOpposee(fantome.coordonees.direction);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            });
            this.pinky.libreDeSortir = true;
          }
        }, {
          key: "logicalToAbsolute",
          value: function logicalToAbsolute(logical) {
            return {
              direction: logical.direction,
              latitude: 16 * logical.latitude - 6,
              longitude: 16 * logical.longitude - 6,
              vitesse: logical.vitesse
            };
          }
        }, {
          key: "deplacePacMan",
          value: function deplacePacMan(keyEvent) {
            if (keyEvent.key === 'ArrowUp') {
              this.pacman.direction = 0;
            }

            if (keyEvent.key === 'ArrowDown') {
              this.pacman.direction = 180;
            }

            if (keyEvent.key === 'ArrowLeft') {
              this.pacman.direction = 270;
            }

            if (keyEvent.key === 'ArrowRight') {
              this.pacman.direction = 90;
            }

            var positionCandidate = this.fantomeService.projetePosition(this.pacman, this.pacman.direction);

            if (!this.carteService.ilYaUnMur(positionCandidate)) {
              this.pacman = positionCandidate;

              if (this.carteService.ilYaUnePacgum(positionCandidate)) {
                this.carteService.videUneCase(positionCandidate);
                this.nbPacgumMangee++;

                if (this.nbPacgumMangee > 30) {
                  this.inky.libreDeSortir = true;
                }

                if (this.nbPacgumMangee > 81) {
                  this.clyde.libreDeSortir = true;
                }

                if (this.nbPacgumMangee === 244) {
                  // Gangné !
                  this.carteService.reinitialise();
                  this.reinitialise();
                }
              }

              if (this.carteService.ilYaUneSuperPacgum(positionCandidate)) {
                this.carteService.videUneCase(positionCandidate);
                this.nbPacgumMangee++;

                if (this.nbPacgumMangee > 30) {
                  this.inky.libreDeSortir = true;
                }

                if (this.nbPacgumMangee > 81) {
                  this.clyde.libreDeSortir = true;
                }

                if (this.nbPacgumMangee === 244) {
                  // Gangné !
                  this.carteService.reinitialise();
                  this.reinitialise();
                }

                var _iterator3 = _createForOfIteratorHelper(this.fantomes),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var fantome = _step3.value;
                    fantome.poursuitMode = -1;
                    fantome.coordonees.direction = this.fantomeService.directionOpposee(fantome.coordonees.direction);
                    this.modeSubscription.unsubscribe();
                    this.activeLeChangementDeMode();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _fantome_service__WEBPACK_IMPORTED_MODULE_5__["FantomeService"]
        }, {
          type: _carte_service__WEBPACK_IMPORTED_MODULE_6__["CarteService"]
        }];
      };

      AppComponent.propDecorators = {
        deplacePacMan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:keydown', ['$event']]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pacman-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_fantome_service__WEBPACK_IMPORTED_MODULE_5__["FantomeService"], _carte_service__WEBPACK_IMPORTED_MODULE_6__["CarteService"]])], AppComponent);
      /***/
    },

    /***/
    "UWfi":
    /*!************************************************!*\
      !*** ./src/app/fantome/fantome.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function UWfi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.fantome {\n  position: relative;\n  width: 28px;\n  height: 28px;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  -webkit-clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n          clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  -webkit-animation: dress-animation 2s linear infinite;\n          animation: dress-animation 2s linear infinite;\n}\n.fantome::before {\n  content: \"°\";\n  font-size: 10px;\n  color: #0000FF;\n  position: absolute;\n  top: 6px;\n  right: 7px;\n  width: 5px;\n  height: 5px;\n  background: #FFFFFF;\n  border-radius: 50%;\n}\n.fantome::after {\n  content: \"°\";\n  font-size: 10px;\n  color: #0000FF;\n  position: absolute;\n  top: 6px;\n  left: 7px;\n  width: 5px;\n  height: 5px;\n  background: #FFFFFF;\n  border-radius: 50%;\n}\n@-webkit-keyframes dress-animation {\n  from {\n    -webkit-clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n            clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 90%, 10% 100%, 20% 90%, 30% 100%, 40% 90%, 50% 100%, 60% 90%, 70% 100%, 80% 90%, 90% 100%, 100% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n            clip-path: polygon(0% 90%, 10% 100%, 20% 90%, 30% 100%, 40% 90%, 50% 100%, 60% 90%, 70% 100%, 80% 90%, 90% 100%, 100% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  }\n  to {\n    -webkit-clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n            clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  }\n}\n@keyframes dress-animation {\n  from {\n    -webkit-clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n            clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 90%, 10% 100%, 20% 90%, 30% 100%, 40% 90%, 50% 100%, 60% 90%, 70% 100%, 80% 90%, 90% 100%, 100% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n            clip-path: polygon(0% 90%, 10% 100%, 20% 90%, 30% 100%, 40% 90%, 50% 100%, 60% 90%, 70% 100%, 80% 90%, 90% 100%, 100% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  }\n  to {\n    -webkit-clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n            clip-path: polygon(0% 90%, 0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%, 100% 0%, 0% 0%, 0% 90%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhbnRvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtS0FBQTtVQUFBLDJKQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0U7SUFDRSxtS0FBQTtZQUFBLDJKQUFBO0VBRUY7RUFBQTtJQUNFLHFLQUFBO1lBQUEsNkpBQUE7RUFFRjtFQUFBO0lBQ0UsbUtBQUE7WUFBQSwySkFBQTtFQUVGO0FBQ0Y7QUFYQTtFQUNFO0lBQ0UsbUtBQUE7WUFBQSwySkFBQTtFQUVGO0VBQUE7SUFDRSxxS0FBQTtZQUFBLDZKQUFBO0VBRUY7RUFBQTtJQUNFLG1LQUFBO1lBQUEsMkpBQUE7RUFFRjtBQUNGIiwiZmlsZSI6ImZhbnRvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmFudG9tZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgOTAlLCAwJSAxMDAlLCAxMCUgOTAlLCAyMCUgMTAwJSwgMzAlIDkwJSwgNDAlIDEwMCUsIDUwJSA5MCUsIDYwJSAxMDAlLCA3MCUgOTAlLCA4MCUgMTAwJSwgOTAlIDkwJSwgMTAwJSAxMDAlLCAxMDAlIDAlLCAwJSAwJSwgMCUgOTAlKTtcbiAgYW5pbWF0aW9uOiBkcmVzcy1hbmltYXRpb24gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uZmFudG9tZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLCsFwiO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMEZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICByaWdodDogN3B4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZmFudG9tZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsKwXCI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMwMDAwRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDdweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQGtleWZyYW1lcyBkcmVzcy1hbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgOTAlLCAwJSAxMDAlLCAxMCUgOTAlLCAyMCUgMTAwJSwgMzAlIDkwJSwgNDAlIDEwMCUsIDUwJSA5MCUsIDYwJSAxMDAlLCA3MCUgOTAlLCA4MCUgMTAwJSwgOTAlIDkwJSwgMTAwJSAxMDAlLCAxMDAlIDAlLCAwJSAwJSwgMCUgOTAlKTtcbiAgfVxuICA1MCUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSA5MCUsIDEwJSAxMDAlLCAyMCUgOTAlLCAzMCUgMTAwJSwgNDAlIDkwJSwgNTAlIDEwMCUsIDYwJSA5MCUsIDcwJSAxMDAlLCA4MCUgOTAlLCA5MCUgMTAwJSwgMTAwJSA5MCUsIDEwMCUgMTAwJSwgMTAwJSAwJSwgMCUgMCUsIDAlIDkwJSk7XG4gIH1cbiAgdG8ge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSA5MCUsIDAlIDEwMCUsIDEwJSA5MCUsIDIwJSAxMDAlLCAzMCUgOTAlLCA0MCUgMTAwJSwgNTAlIDkwJSwgNjAlIDEwMCUsIDcwJSA5MCUsIDgwJSAxMDAlLCA5MCUgOTAlLCAxMDAlIDEwMCUsIDEwMCUgMCUsIDAlIDAlLCAwJSA5MCUpO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\r\n  <pacman-pacman [direction]=\"pacman.direction\" [ngStyle]=\"{'position':'absolute', 'top':logicalToAbsolute(pacman).latitude+'px', 'left':logicalToAbsolute(pacman).longitude+'px'}\"></pacman-pacman>\r\n  <pacman-fantome *ngFor=\"let unFantome of fantomes\" [couleur]=\"unFantome.poursuitMode===-1?'#0000FF':unFantome.couleur\" [ngStyle]=\"{'position':'absolute', 'top':logicalToAbsolute(unFantome.coordonees).latitude+'px', 'left':logicalToAbsolute(unFantome.coordonees).longitude+'px'}\"></pacman-fantome>\r\n  <pacman-labyrinthe></pacman-labyrinthe>\r\n  <div class=\"ligne\">\r\n    <pacman-pacman direction=\"270\"></pacman-pacman>\r\n    <pacman-pacman direction=\"270\"></pacman-pacman>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "XtuB":
    /*!**********************************************!*\
      !*** ./src/app/fantome/fantome.component.ts ***!
      \**********************************************/

    /*! exports provided: FantomeComponent */

    /***/
    function XtuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FantomeComponent", function () {
        return FantomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fantome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fantome.component.html */
      "SfR3");
      /* harmony import */


      var _fantome_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fantome.component.scss */
      "UWfi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FantomeComponent = /*#__PURE__*/function () {
        function FantomeComponent() {
          _classCallCheck(this, FantomeComponent);
        }

        _createClass(FantomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FantomeComponent;
      }();

      FantomeComponent.ctorParameters = function () {
        return [];
      };

      FantomeComponent.propDecorators = {
        couleur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FantomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pacman-fantome',
        template: _raw_loader_fantome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fantome_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FantomeComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pacman_pacman_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pacman/pacman.component */
      "8QLm");
      /* harmony import */


      var _fantome_fantome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fantome/fantome.component */
      "XtuB");
      /* harmony import */


      var _pacgum_pacgum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pacgum/pacgum.component */
      "mswo");
      /* harmony import */


      var _labyrinthe_labyrinthe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./labyrinthe/labyrinthe.component */
      "H/tl");
      /* harmony import */


      var _mur_mur_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mur/mur.component */
      "Cq81");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pacman_pacman_component__WEBPACK_IMPORTED_MODULE_4__["PacmanComponent"], _fantome_fantome_component__WEBPACK_IMPORTED_MODULE_5__["FantomeComponent"], _pacgum_pacgum_component__WEBPACK_IMPORTED_MODULE_6__["PacgumComponent"], _labyrinthe_labyrinthe_component__WEBPACK_IMPORTED_MODULE_7__["LabyrintheComponent"], _mur_mur_component__WEBPACK_IMPORTED_MODULE_8__["MurComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "aYXw":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pacgum/pacgum.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function aYXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"pacgum-spacewrapper\">\r\n  <div class=\"pacgum\" [ngClass]=\"super\"></div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "f0Ka":
    /*!************************************!*\
      !*** ./src/app/fantome.service.ts ***!
      \************************************/

    /*! exports provided: FantomeService */

    /***/
    function f0Ka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FantomeService", function () {
        return FantomeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _carte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carte.service */
      "L0B2");

      var FantomeService = /*#__PURE__*/function () {
        function FantomeService(carteService) {
          _classCallCheck(this, FantomeService);

          this.carteService = carteService;
        }

        _createClass(FantomeService, [{
          key: "choisiLaPlusCourteDirection",
          value: function choisiLaPlusCourteDirection(positionActuelle, cible, directionsPossible) {
            var fuite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (directionsPossible.length === 1) {
              return directionsPossible[0];
            }

            var possibiliteChoisie;
            var distanceChoisie; // Challenge les possiblités

            var _iterator4 = _createForOfIteratorHelper(directionsPossible),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var possibilite = _step4.value;
                var challengeProjete = this.projetePosition(positionActuelle, possibilite);
                var distanceChallenge = Math.pow(challengeProjete.latitude - cible.latitude, 2) + Math.pow(challengeProjete.longitude - cible.longitude, 2);

                if (possibiliteChoisie === undefined) {
                  possibiliteChoisie = possibilite;
                  distanceChoisie = distanceChallenge;
                }

                if (distanceChallenge < distanceChoisie && !fuite || distanceChallenge > distanceChoisie && fuite) {
                  possibiliteChoisie = possibilite;
                  distanceChoisie = distanceChallenge;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return possibiliteChoisie;
          }
        }, {
          key: "directionOpposee",
          value: function directionOpposee(direction) {
            return direction + 180 >= 360 ? direction - 180 : direction + 180;
          }
        }, {
          key: "cacluleLeNombreDeCases",
          value: function cacluleLeNombreDeCases(positionActuelle, cible) {
            var compte = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (compte > 8) {
              return 9;
            }

            if (positionActuelle.latitude === cible.latitude && positionActuelle.longitude === cible.longitude) {
              return compte;
            } else {
              var directionsPossible = this.calculeDirectionsPossible(positionActuelle);
              return this.cacluleLeNombreDeCases(this.projetePosition(positionActuelle, this.choisiLaPlusCourteDirection(positionActuelle, cible, directionsPossible)), cible, compte + 1);
            }
          }
        }, {
          key: "calculeDirectionsPossible",
          value: function calculeDirectionsPossible(position) {
            var libre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var directions = [];

            for (var _i = 0, _arr = [0, 90, 180, 270]; _i < _arr.length; _i++) {
              var direction = _arr[_i];

              if (Math.abs(position.direction - direction) !== 180) {
                // Pas le droit de faire demi tour
                if (!this.carteService.ilYaUnMur(this.projetePosition(position, direction), libre)) {
                  directions.push(direction);
                } // Pas de mur

              }
            }

            return directions;
          }
        }, {
          key: "projetePosition",
          value: function projetePosition(positionActuelle, expectedDirection) {
            var increment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            if (expectedDirection === 0) {
              return {
                latitude: positionActuelle.latitude - increment,
                longitude: positionActuelle.longitude,
                direction: expectedDirection,
                vitesse: positionActuelle.vitesse
              };
            }

            if (expectedDirection === 90) {
              return {
                latitude: positionActuelle.latitude,
                longitude: positionActuelle.longitude + increment > 27 ? 0 : positionActuelle.longitude + increment,
                direction: expectedDirection,
                vitesse: positionActuelle.vitesse
              };
            }

            if (expectedDirection === 180) {
              return {
                latitude: positionActuelle.latitude + increment,
                longitude: positionActuelle.longitude,
                direction: expectedDirection,
                vitesse: positionActuelle.vitesse
              };
            }

            if (expectedDirection === 270) {
              return {
                latitude: positionActuelle.latitude,
                longitude: positionActuelle.longitude - increment < 0 ? 27 : positionActuelle.longitude - increment,
                direction: expectedDirection,
                vitesse: positionActuelle.vitesse
              };
            }
          }
        }, {
          key: "chasseur",
          value: function chasseur(fantome, pacman, ser, option) {
            var cible = fantome.coordoneesRode;

            if (fantome.poursuitMode === 1) {
              cible = pacman;
            } //    console.debug('rouge', cible);


            if (fantome.poursuitMode === -1) {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, pacman, ser.calculeDirectionsPossible(fantome.coordonees), true);
            } else {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees));
            }
          }
        }, {
          key: "piegeur",
          value: function piegeur(fantome, pacman, ser, option) {
            var cible = fantome.coordoneesRode;

            if (fantome.poursuitMode === 1) {
              cible = ser.projetePosition(pacman, pacman.direction, 4);
            } //    console.debug('rose', cible);


            if (fantome.poursuitMode === -1) {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, pacman, ser.calculeDirectionsPossible(fantome.coordonees), true);
            } else {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees, fantome.libreDeSortir));
            }
          }
        }, {
          key: "timide",
          value: function timide(fantome, pacman, ser, option) {
            var cible = fantome.coordoneesRode;

            if (fantome.poursuitMode === 1) {
              var projetedPacman = ser.projetePosition(pacman, pacman.direction, 2); // option devrait etre les coordonees de blinky

              cible = {
                latitude: option.latitude + 2 * (projetedPacman.latitude - option.latitude),
                longitude: pacman.longitude + 2 * (projetedPacman.longitude - option.longitude)
              };
            } //    console.debug('bleu', cible);


            if (fantome.poursuitMode === -1) {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, pacman, ser.calculeDirectionsPossible(fantome.coordonees), true);
            } else {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees, fantome.libreDeSortir));
            }
          }
        }, {
          key: "dedaignant",
          value: function dedaignant(fantome, pacman, ser, option) {
            var cible = fantome.coordoneesRode;

            if (fantome.poursuitMode === 1) {
              if (ser.cacluleLeNombreDeCases(fantome.coordonees, pacman) > 8) {
                cible = pacman;
              }
            } //    console.debug('orange', cible);


            if (fantome.poursuitMode === -1) {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, pacman, ser.calculeDirectionsPossible(fantome.coordonees), true);
            } else {
              return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees, fantome.libreDeSortir));
            }
          }
        }]);

        return FantomeService;
      }();

      FantomeService.ctorParameters = function () {
        return [{
          type: _carte_service__WEBPACK_IMPORTED_MODULE_2__["CarteService"]
        }];
      };

      FantomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_carte_service__WEBPACK_IMPORTED_MODULE_2__["CarteService"]])], FantomeService);
      /***/
    },

    /***/
    "kHM6":
    /*!**********************************************!*\
      !*** ./src/app/pacman/pacman.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function kHM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pacman {\n  position: relative;\n  width: 28px;\n  height: 28px;\n  background: #FFFF00;\n  border-radius: 50%;\n  -webkit-clip-path: polygon(50% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%);\n          clip-path: polygon(50% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%);\n  -webkit-animation: mouth-animation 1s linear infinite;\n          animation: mouth-animation 1s linear infinite;\n}\n\n.pacman::after {\n  content: \"\";\n  position: absolute;\n  top: 4px;\n  right: 12px;\n  width: 5px;\n  height: 5px;\n  background: #000000;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes mouth-animation {\n  from {\n    -webkit-clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n            clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n  }\n  50% {\n    -webkit-clip-path: polygon(50% 50%, 100% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 50%);\n            clip-path: polygon(50% 50%, 100% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 50%);\n  }\n  to {\n    -webkit-clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n            clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n  }\n}\n\n@keyframes mouth-animation {\n  from {\n    -webkit-clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n            clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n  }\n  50% {\n    -webkit-clip-path: polygon(50% 50%, 100% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 50%);\n            clip-path: polygon(50% 50%, 100% 50%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 50%);\n  }\n  to {\n    -webkit-clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n            clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%);\n  }\n}\n\n.D0 {\n  transform: rotate(-90deg);\n}\n\n.D180 {\n  transform: rotate(90deg);\n}\n\n.D270 {\n  transform: scale(-1, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhY21hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUVBQUE7VUFBQSwrREFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJGQUFBO1lBQUEsbUZBQUE7RUFDRjtFQUNBO0lBQ0UsMkZBQUE7WUFBQSxtRkFBQTtFQUNGO0VBQ0E7SUFDRSwyRkFBQTtZQUFBLG1GQUFBO0VBQ0Y7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsMkZBQUE7WUFBQSxtRkFBQTtFQUNGO0VBQ0E7SUFDRSwyRkFBQTtZQUFBLG1GQUFBO0VBQ0Y7RUFDQTtJQUNFLDJGQUFBO1lBQUEsbUZBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGIiwiZmlsZSI6InBhY21hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWNtYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYmFja2dyb3VuZDojRkZGRjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAxMDAlIDAlLCAwJSAwJSwgMCUgMTAwJSwxMDAlIDEwMCUpO1xyXG4gIGFuaW1hdGlvbjogbW91dGgtYW5pbWF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnBhY21hbjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW91dGgtYW5pbWF0aW9uIHtcclxuICBmcm9tIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTAlLCAxMDAlIDAlLCAxMDAlIDAlLCAwJSAwJSwgMCUgMTAwJSwgMTAwJSAxMDAlLDEwMCUgMTAwJSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUwJSwgMTAwJSA1MCUsIDEwMCUgMCUsIDAlIDAlLCAwJSAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgNTAlKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDEwMCUgMCUsIDEwMCUgMCUsIDAlIDAlLCAwJSAxMDAlLCAxMDAlIDEwMCUsMTAwJSAxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5EMCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG5cclxuLkQxODAge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLkQyNzAge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "mswo":
    /*!********************************************!*\
      !*** ./src/app/pacgum/pacgum.component.ts ***!
      \********************************************/

    /*! exports provided: PacgumComponent */

    /***/
    function mswo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PacgumComponent", function () {
        return PacgumComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pacgum_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pacgum.component.html */
      "aYXw");
      /* harmony import */


      var _pacgum_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pacgum.component.scss */
      "uqYi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PacgumComponent = /*#__PURE__*/function () {
        function PacgumComponent() {
          _classCallCheck(this, PacgumComponent);
        }

        _createClass(PacgumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PacgumComponent;
      }();

      PacgumComponent.ctorParameters = function () {
        return [];
      };

      PacgumComponent.propDecorators = {
        "super": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PacgumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pacman-pacgum',
        template: _raw_loader_pacgum_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pacgum_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PacgumComponent);
      /***/
    },

    /***/
    "o/HD":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/labyrinthe/labyrinthe.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function oHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ligne\" *ngFor=\"let ligne of tiles\">\r\n  <div class=\"ligne\" *ngFor=\"let tile of ligne\">\r\n    <div *ngIf=\"tile.startsWith(' ')\" class=\"emptyTile\"></div>\r\n    <pacman-mur *ngIf=\"!tile.startsWith('P')&&!tile.startsWith(' ')\" [direction]=\"tile\"></pacman-mur>\r\n    <pacman-pacgum *ngIf=\"tile.startsWith('P')\" [super]=\"tile.substring(1)\"></pacman-pacgum>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "uqYi":
    /*!**********************************************!*\
      !*** ./src/app/pacgum/pacgum.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function uqYi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pacgum-spacewrapper {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.pacgum {\n  border-radius: 50%;\n}\n\n.N {\n  width: 5px;\n  height: 5px;\n  background: #FFFFFF;\n}\n\n.S {\n  width: 12px;\n  height: 12px;\n  background: #FFFFAA;\n  -webkit-animation: pacgum-animation 5s linear infinite;\n          animation: pacgum-animation 5s linear infinite;\n}\n\n@-webkit-keyframes pacgum-animation {\n  from {\n    background: #FFFFAA;\n  }\n  50% {\n    background: #FFAAAA;\n  }\n  to {\n    background: #FFFFAA;\n  }\n}\n\n@keyframes pacgum-animation {\n  from {\n    background: #FFFFAA;\n  }\n  50% {\n    background: #FFAAAA;\n  }\n  to {\n    background: #FFFFAA;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhY2d1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFBO0VBQ0Y7RUFDQTtJQUNFLG1CQUFBO0VBQ0Y7RUFDQTtJQUNFLG1CQUFBO0VBQ0Y7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjtFQUNBO0lBQ0UsbUJBQUE7RUFDRjtFQUNBO0lBQ0UsbUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InBhY2d1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWNndW0tc3BhY2V3cmFwcGVyIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWNndW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG59XHJcblxyXG4uTiB7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbn1cclxuXHJcbi5TIHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDojRkZGRkFBO1xyXG4gIGFuaW1hdGlvbjogcGFjZ3VtLWFuaW1hdGlvbiA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGFjZ3VtLWFuaW1hdGlvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiNGRkZGQUE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiNGRkFBQUE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQ6I0ZGRkZBQTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ligne {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWduZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map