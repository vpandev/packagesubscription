function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/angular-material/angular-material.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/angular-material/angular-material.module.ts ***!
    \*************************************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AngularMaterialModule = /*#__PURE__*/function () {
      function AngularMaterialModule(matIconRegistry) {
        _classCallCheck(this, AngularMaterialModule);

        this.matIconRegistry = matIconRegistry;
      }

      _createClass(AngularMaterialModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: AngularMaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]]
          };
        }
      }]);

      return AngularMaterialModule;
    }();

    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularMaterialModule
    });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularMaterialModule_Factory(t) {
        return new (t || AngularMaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]));
      },
      providers: [],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]],
        exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]],
          exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]],
          declarations: [],
          providers: []
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_payment_fail_payment_fail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/payment-fail/payment-fail.component */
    "./src/app/components/payment-fail/payment-fail.component.ts");
    /* harmony import */


    var _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/payment-success/payment-success.component */
    "./src/app/components/payment-success/payment-success.component.ts");
    /* harmony import */


    var _components_recommended_subscription_recommended_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/recommended-subscription/recommended-subscription.component */
    "./src/app/components/recommended-subscription/recommended-subscription.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: 'recommended-subscription',
      component: _components_recommended_subscription_recommended_subscription_component__WEBPACK_IMPORTED_MODULE_5__["RecommendedSubscriptionComponent"],
      pathMatch: 'full'
    }, {
      path: 'payment-success',
      component: _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_4__["PaymentSuccessComponent"],
      pathMatch: 'full'
    }, {
      path: 'payment-fail',
      component: _components_payment_fail_payment_fail_component__WEBPACK_IMPORTED_MODULE_3__["PaymentFailComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/__ivy_ngcc__/fesm2015/ng-block-ui.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ClientApp';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      consts: [["role", "main"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "block-ui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [ng_block_ui__WEBPACK_IMPORTED_MODULE_1__["BlockUIComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/__ivy_ngcc__/fesm2015/ng-block-ui.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_confirm_subscription_confirm_subscription_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/confirm-subscription/confirm-subscription.component */
    "./src/app/components/confirm-subscription/confirm-subscription.component.ts");
    /* harmony import */


    var _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/payment-success/payment-success.component */
    "./src/app/components/payment-success/payment-success.component.ts");
    /* harmony import */


    var _components_payment_fail_payment_fail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/payment-fail/payment-fail.component */
    "./src/app/components/payment-fail/payment-fail.component.ts");
    /* harmony import */


    var _components_recommended_subscription_recommended_subscription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/recommended-subscription/recommended-subscription.component */
    "./src/app/components/recommended-subscription/recommended-subscription.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUIModule"].forRoot({
        message: "Please wait...",
        delayStop: 500
      })], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_confirm_subscription_confirm_subscription_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmSubscriptionComponent"], _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_11__["PaymentSuccessComponent"], _components_payment_fail_payment_fail_component__WEBPACK_IMPORTED_MODULE_12__["PaymentFailComponent"], _components_recommended_subscription_recommended_subscription_component__WEBPACK_IMPORTED_MODULE_13__["RecommendedSubscriptionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUIModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_confirm_subscription_confirm_subscription_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmSubscriptionComponent"], _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_11__["PaymentSuccessComponent"], _components_payment_fail_payment_fail_component__WEBPACK_IMPORTED_MODULE_12__["PaymentFailComponent"], _components_recommended_subscription_recommended_subscription_component__WEBPACK_IMPORTED_MODULE_13__["RecommendedSubscriptionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUIModule"].forRoot({
            message: "Please wait...",
            delayStop: 500
          })],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]],
          providers: [],
          entryComponents: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/confirm-subscription/confirm-subscription.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/confirm-subscription/confirm-subscription.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConfirmSubscriptionComponent */

  /***/
  function srcAppComponentsConfirmSubscriptionConfirmSubscriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmSubscriptionComponent", function () {
      return ConfirmSubscriptionComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_enums_subscription_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/enums/subscription-type.enum */
    "./src/app/enums/subscription-type.enum.ts");
    /* harmony import */


    var src_app_helpers_errors_handling_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/errors-handling-helper */
    "./src/app/helpers/errors-handling-helper.ts");
    /* harmony import */


    var src_app_services_package_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/package.service */
    "./src/app/services/package.service.ts");
    /* harmony import */


    var src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/payment.service */
    "./src/app/services/payment.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ConfirmSubscriptionComponent_form_0_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getValidationMessage(ctx_r1.myForm, "username"), " ");
      }
    }

    function ConfirmSubscriptionComponent_form_0_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getValidationMessage(ctx_r2.myForm, "packageName"), " ");
      }
    }

    function ConfirmSubscriptionComponent_form_0_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getValidationMessage(ctx_r3.myForm, "subscriptionTypName"), " ");
      }
    }

    function ConfirmSubscriptionComponent_form_0_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.getValidationMessage(ctx_r4.myForm, "price"), " ");
      }
    }

    function ConfirmSubscriptionComponent_form_0_mat_error_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getValidationMessage(ctx_r5.myForm, "amount"), " ");
      }
    }

    function ConfirmSubscriptionComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirm subscription");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfirmSubscriptionComponent_form_0_mat_error_6_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ConfirmSubscriptionComponent_form_0_mat_error_9_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ConfirmSubscriptionComponent_form_0_mat_error_12_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ConfirmSubscriptionComponent_form_0_mat_error_15_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ConfirmSubscriptionComponent_form_0_mat_error_18_Template, 2, 1, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-dialog-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmSubscriptionComponent_form_0_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmSubscriptionComponent_form_0_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.confirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.myForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myForm.controls.username.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myForm.controls.packageName.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myForm.controls.subscriptionTypName.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myForm.controls.price.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myForm.controls.amount.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.myForm.invalid);
      }
    }

    var ConfirmSubscriptionComponent = /*#__PURE__*/function () {
      function ConfirmSubscriptionComponent(dialogRef, data, packageService, paymentService) {
        _classCallCheck(this, ConfirmSubscriptionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.packageService = packageService;
        this.paymentService = paymentService;
        this.showForm = false;
        this.getValidationMessage = src_app_helpers_errors_handling_helper__WEBPACK_IMPORTED_MODULE_5__["ErrorsHandlingHelper"].getValidationMessage;
      }

      _createClass(ConfirmSubscriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var usr = sessionStorage.getItem('loggedUser');

          if (!!usr) {
            this.user = JSON.parse(usr);
          }

          var subscriptionName = this.data.subscriptionType == src_app_enums_subscription_type_enum__WEBPACK_IMPORTED_MODULE_4__["SubscriptionTypeEnum"].Monthly ? "Monthly" : "Annual";
          var price = this.data.subscriptionType == src_app_enums_subscription_type_enum__WEBPACK_IMPORTED_MODULE_4__["SubscriptionTypeEnum"].Monthly ? this.data.model.monthlyPrice : this.data.model.annualPrice;
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            packageId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.model.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            packageName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.model.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            subscriptionType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.subscriptionType, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            subscriptionTypName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](subscriptionName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.calculateTotalPrice();
        }
      }, {
        key: "confirm",
        value: function confirm() {
          var _this = this;

          // this.packageService.subscribeForPackage(this.myForm.value)
          //   .subscribe((response: any) => {
          //     this.dialogRef.close(response);
          //   }, (error) => {
          //     alert(error);
          //     this.dialogRef.close();
          //   })
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.set('userId', this.myForm.controls.userId.value);
          params = params.set('packageId', this.myForm.controls.packageId.value);
          params = params.set('subscriptionType', this.myForm.controls.subscriptionType.value);
          params = params.set('amount', this.myForm.controls.amount.value);
          this.paymentService.createPayment(params).subscribe(function (response) {
            if (response.succeeded) {
              window.location = response.data;
            }
          }, function (error) {
            alert(error);

            _this.dialogRef.close();
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }, {
        key: "calculateTotalPrice",
        value: function calculateTotalPrice() {
          var _this2 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.set('packageId', this.data.model.id);
          params = params.set('subscriptionType', this.data.subscriptionType);
          this.packageService.calculateTotalPrice(params).subscribe(function (response) {
            _this2.myForm.controls.amount.setValue(response);

            _this2.showForm = true;
          }, function (error) {
            alert(error);

            _this2.dialogRef.close();
          });
        }
      }]);

      return ConfirmSubscriptionComponent;
    }();

    ConfirmSubscriptionComponent.ɵfac = function ConfirmSubscriptionComponent_Factory(t) {
      return new (t || ConfirmSubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_package_service__WEBPACK_IMPORTED_MODULE_6__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]));
    };

    ConfirmSubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfirmSubscriptionComponent,
      selectors: [["app-confirm-subscription"]],
      decls: 1,
      vars: 1,
      consts: [["autocomplete", "off", 3, "formGroup", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup"], ["mat-dialog-title", ""], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username", "readonly", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Package", "formControlName", "packageName", "readonly", ""], ["type", "text", "matInput", "", "placeholder", "Subscription type", "formControlName", "subscriptionTypName", "readonly", ""], ["type", "text", "matInput", "", "placeholder", "Price", "formControlName", "price", "readonly", ""], ["type", "text", "matInput", "", "placeholder", "Amount with VAT", "formControlName", "amount", "readonly", ""], ["type", "hidden", "formControlName", "id"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"]],
      template: function ConfirmSubscriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConfirmSubscriptionComponent_form_0_Template, 25, 7, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXN1YnNjcmlwdGlvbi9jb25maXJtLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmSubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-confirm-subscription',
          templateUrl: './confirm-subscription.component.html',
          styleUrls: ['./confirm-subscription.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_services_package_service__WEBPACK_IMPORTED_MODULE_6__["PackageService"]
        }, {
          type: src_app_services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_errors_handling_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/helpers/errors-handling-helper */
    "./src/app/helpers/errors-handling-helper.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getValidationMessage(ctx_r0.myForm, "username"), " ");
      }
    }

    function LoginComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getValidationMessage(ctx_r1.myForm, "password"), " ");
      }
    }

    function LoginComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.error);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, toastr, router) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.getValidationMessage = src_app_helpers_errors_handling_helper__WEBPACK_IMPORTED_MODULE_2__["ErrorsHandlingHelper"].getValidationMessage;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clearSessionStorage();
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "clearSessionStorage",
        value: function clearSessionStorage() {
          var user = sessionStorage.getItem('loggedUser');

          if (!!user) {
            sessionStorage.removeItem('loggedUser');
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          this.error = null;
          this.userService.loginUser(this.myForm.value).subscribe(function (response) {
            if (response) {
              _this3.toastr.open("Successfully logged user!", null, {
                duration: 5000,
                verticalPosition: 'bottom',
                horizontalPosition: 'right'
              });

              sessionStorage.setItem('loggedUser', JSON.stringify(response));

              _this3.router.navigate(['recommended-subscription']);
            }
          }, function (error) {
            _this3.error = error;
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.error = null;
          this.myForm.reset();
          this.myForm.markAsUntouched();
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
          e.preventDefault();
          this.submit();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 18,
      vars: 5,
      consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username", "required", ""], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "required", ""], ["class", "error-msg", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [1, "error-msg"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener($event) {
            return ctx.handleSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_mat_error_8_Template, 2, 1, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_mat_error_11_Template, 2, 1, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls.username.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls.password.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myForm.invalid || !ctx.myForm.dirty);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/payment-fail/payment-fail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/payment-fail/payment-fail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PaymentFailComponent */

  /***/
  function srcAppComponentsPaymentFailPaymentFailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentFailComponent", function () {
      return PaymentFailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var PaymentFailComponent = /*#__PURE__*/function () {
      function PaymentFailComponent() {
        _classCallCheck(this, PaymentFailComponent);
      }

      _createClass(PaymentFailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentFailComponent;
    }();

    PaymentFailComponent.ɵfac = function PaymentFailComponent_Factory(t) {
      return new (t || PaymentFailComponent)();
    };

    PaymentFailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentFailComponent,
      selectors: [["app-payment-fail"]],
      decls: 4,
      vars: 0,
      consts: [[1, "example-card", 2, "background", "red"]],
      template: function PaymentFailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Payment failed. Please contact support! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWZhaWwvcGF5bWVudC1mYWlsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentFailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payment-fail',
          templateUrl: './payment-fail.component.html',
          styleUrls: ['./payment-fail.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/payment-success/payment-success.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/payment-success/payment-success.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PaymentSuccessComponent */

  /***/
  function srcAppComponentsPaymentSuccessPaymentSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function () {
      return PaymentSuccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var PaymentSuccessComponent = /*#__PURE__*/function () {
      function PaymentSuccessComponent() {
        _classCallCheck(this, PaymentSuccessComponent);
      }

      _createClass(PaymentSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentSuccessComponent;
    }();

    PaymentSuccessComponent.ɵfac = function PaymentSuccessComponent_Factory(t) {
      return new (t || PaymentSuccessComponent)();
    };

    PaymentSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentSuccessComponent,
      selectors: [["app-payment-success"]],
      decls: 4,
      vars: 0,
      consts: [[1, "example-card", 2, "background", "green"]],
      template: function PaymentSuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Payment successfull. Your package subscription is completed! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXN1Y2Nlc3MvcGF5bWVudC1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payment-success',
          templateUrl: './payment-success.component.html',
          styleUrls: ['./payment-success.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recommended-subscription/recommended-subscription.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/recommended-subscription/recommended-subscription.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RecommendedSubscriptionComponent */

  /***/
  function srcAppComponentsRecommendedSubscriptionRecommendedSubscriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendedSubscriptionComponent", function () {
      return RecommendedSubscriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_enums_subscription_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/enums/subscription-type.enum */
    "./src/app/enums/subscription-type.enum.ts");
    /* harmony import */


    var _confirm_subscription_confirm_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../confirm-subscription/confirm-subscription.component */
    "./src/app/components/confirm-subscription/confirm-subscription.component.ts");
    /* harmony import */


    var src_app_services_package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/package.service */
    "./src/app/services/package.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RecommendedSubscriptionComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recommended package");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedSubscriptionComponent_mat_card_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.subscribeMonthly();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SUBSCRIBE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendedSubscriptionComponent_mat_card_0_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.subscribeAnnual();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SUBSCRIBE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.model.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImageUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.model.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Monthly price: ", ctx_r0.model.monthlyPrice, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Annual price: ", ctx_r0.model.annualPrice, " ");
      }
    }

    var RecommendedSubscriptionComponent = /*#__PURE__*/function () {
      function RecommendedSubscriptionComponent(packageService, dialog, toastr) {
        _classCallCheck(this, RecommendedSubscriptionComponent);

        this.packageService = packageService;
        this.dialog = dialog;
        this.toastr = toastr;
      }

      _createClass(RecommendedSubscriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPackage();
        }
      }, {
        key: "getPackage",
        value: function getPackage() {
          var _this4 = this;

          this.packageService.getRecommendedPackage().subscribe(function (response) {
            if (response) {
              _this4.model = response;
            }
          }, function (error) {
            alert(error);
          });
        }
      }, {
        key: "getImageUrl",
        value: function getImageUrl() {
          return "../../../assets/images/" + this.model.packageType + ".jfif";
        }
      }, {
        key: "subscribeMonthly",
        value: function subscribeMonthly() {
          this.confirmSubscription(src_app_enums_subscription_type_enum__WEBPACK_IMPORTED_MODULE_1__["SubscriptionTypeEnum"].Monthly);
        }
      }, {
        key: "subscribeAnnual",
        value: function subscribeAnnual() {
          this.confirmSubscription(src_app_enums_subscription_type_enum__WEBPACK_IMPORTED_MODULE_1__["SubscriptionTypeEnum"].Annual);
        }
      }, {
        key: "confirmSubscription",
        value: function confirmSubscription(subscriptionType) {
          var _this5 = this;

          var data = {
            model: this.model,
            subscriptionType: subscriptionType
          };
          var dialogRef = this.dialog.open(_confirm_subscription_confirm_subscription_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmSubscriptionComponent"], {
            width: '500px',
            disableClose: true,
            data: data
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this5.toastr.open("Successfully subscribed!", null, {
                duration: 5000,
                verticalPosition: 'bottom',
                horizontalPosition: 'right'
              });
            }
          });
        }
      }]);

      return RecommendedSubscriptionComponent;
    }();

    RecommendedSubscriptionComponent.ɵfac = function RecommendedSubscriptionComponent_Factory(t) {
      return new (t || RecommendedSubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    RecommendedSubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecommendedSubscriptionComponent,
      selectors: [["app-recommended-subscription"]],
      decls: 1,
      vars: 1,
      consts: [["class", "example-card", 4, "ngIf"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", 3, "src"], [1, "prices"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function RecommendedSubscriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecommendedSubscriptionComponent_mat_card_0_Template, 20, 5, "mat-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.model);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 700px;\r\n    margin-top:100px !important;\r\n  }\r\n  \r\n  .example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('logoNew.png');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .mat-card-subtitle[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n  \r\n  .prices[_ngcontent-%COMP%]{\r\n  display:inline;\r\n  margin:50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZGVkLXN1YnNjcmlwdGlvbi9yZWNvbW1lbmRlZC1zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxvQ0FBMkQ7SUFDM0Qsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0FBQ3BCOztFQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJyZWNvbW1lbmRlZC1zdWJzY3JpcHRpb24vcmVjb21tZW5kZWQtc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb05ldy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnByaWNlc3tcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBtYXJnaW46NTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedSubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recommended-subscription',
          templateUrl: './recommended-subscription.component.html',
          styleUrls: ['./recommended-subscription.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/enums/subscription-type.enum.ts":
  /*!*************************************************!*\
    !*** ./src/app/enums/subscription-type.enum.ts ***!
    \*************************************************/

  /*! exports provided: SubscriptionTypeEnum */

  /***/
  function srcAppEnumsSubscriptionTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionTypeEnum", function () {
      return SubscriptionTypeEnum;
    });

    var SubscriptionTypeEnum;

    (function (SubscriptionTypeEnum) {
      SubscriptionTypeEnum[SubscriptionTypeEnum["Monthly"] = 1] = "Monthly";
      SubscriptionTypeEnum[SubscriptionTypeEnum["Annual"] = 2] = "Annual";
    })(SubscriptionTypeEnum || (SubscriptionTypeEnum = {}));
    /***/

  },

  /***/
  "./src/app/helpers/errors-handling-helper.ts":
  /*!***************************************************!*\
    !*** ./src/app/helpers/errors-handling-helper.ts ***!
    \***************************************************/

  /*! exports provided: ErrorsHandlingHelper */

  /***/
  function srcAppHelpersErrorsHandlingHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorsHandlingHelper", function () {
      return ErrorsHandlingHelper;
    });

    var ErrorsHandlingHelper = /*#__PURE__*/function () {
      function ErrorsHandlingHelper() {
        _classCallCheck(this, ErrorsHandlingHelper);
      }

      _createClass(ErrorsHandlingHelper, null, [{
        key: "getValidationMessage",
        value: function getValidationMessage(formGroup, controlName) {
          var control = formGroup.get(controlName);

          if (control) {
            if (control.errors.required) {
              return 'REQUIRED FIELD';
            }

            if (control.errors.maxlength) {
              return 'MAXIMUM LENGTH IS ' + control.errors.maxlength.requiredLength;
            }

            if (control.errors.email) {
              return 'INVALID E-MAIL ADDRESS';
            }

            if (control.errors.max) {
              return 'MAXIMUM VALUE IS ' + control.errors.max.max;
            }

            if (control.errors.min) {
              return 'MINIMUM VALUE IS ' + control.errors.min.min;
            }
          }
        }
      }]);

      return ErrorsHandlingHelper;
    }();
    /***/

  },

  /***/
  "./src/app/services/package.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/package.service.ts ***!
    \*********************************************/

  /*! exports provided: PackageService */

  /***/
  function srcAppServicesPackageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageService", function () {
      return PackageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/__ivy_ngcc__/fesm2015/ng-block-ui.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PackageService = /*#__PURE__*/function () {
      function PackageService(http) {
        _classCallCheck(this, PackageService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.baseUrl = 'http://localhost:64888/api';
      }

      _createClass(PackageService, [{
        key: "getRecommendedPackage",
        value: function getRecommendedPackage() {
          var _this6 = this;

          this.blockUI.start();
          return this.http.get(this.baseUrl + '/GetRecommendedPackage').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this6.blockUI.stop();

            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return _this6.handleError(error);
          }));
        }
      }, {
        key: "subscribeForPackage",
        value: function subscribeForPackage(formData) {
          var _this7 = this;

          this.blockUI.start();
          return this.http.post(this.baseUrl + '/SubscribeForPackage', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this7.blockUI.stop();

            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return _this7.handleError(error);
          }));
        }
      }, {
        key: "calculateTotalPrice",
        value: function calculateTotalPrice(params) {
          var _this8 = this;

          this.blockUI.start();
          return this.http.get(this.baseUrl + '/CalculateTotalPrice?' + params.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this8.blockUI.stop();

            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return _this8.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          this.blockUI.stop();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.error);
        }
      }]);

      return PackageService;
    }();

    PackageService.ɵfac = function PackageService_Factory(t) {
      return new (t || PackageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PackageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PackageService,
      factory: PackageService.ɵfac,
      providedIn: 'root'
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])()], PackageService.prototype, "blockUI", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PackageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        blockUI: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/payment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/payment.service.ts ***!
    \*********************************************/

  /*! exports provided: PaymentService */

  /***/
  function srcAppServicesPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/__ivy_ngcc__/fesm2015/ng-block-ui.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PaymentService = /*#__PURE__*/function () {
      function PaymentService(http) {
        _classCallCheck(this, PaymentService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.baseUrl = 'http://localhost:64888/api';
      }

      _createClass(PaymentService, [{
        key: "createPayment",
        value: function createPayment(params) {
          var _this9 = this;

          this.blockUI.start();
          return this.http.get(this.baseUrl + '/CreatePayment?' + params.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this9.blockUI.stop();

            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return _this9.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          this.blockUI.stop();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.error);
        }
      }]);

      return PaymentService;
    }();

    PaymentService.ɵfac = function PaymentService_Factory(t) {
      return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PaymentService,
      factory: PaymentService.ɵfac,
      providedIn: 'root'
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])()], PaymentService.prototype, "blockUI", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        blockUI: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/__ivy_ngcc__/fesm2015/ng-block-ui.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.baseUrl = 'http://localhost:64888/api';
      }

      _createClass(UserService, [{
        key: "loginUser",
        value: function loginUser(formData) {
          var _this10 = this;

          this.blockUI.start();
          return this.http.post(this.baseUrl + '/LoginUser', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this10.blockUI.stop();

            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return _this10.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(errorResponse) {
          this.blockUI.stop();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse.error);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])()], UserService.prototype, "blockUI", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        blockUI: []
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Projects\.NET Core\PackageSubscription\PackageSubscription.Web\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map