(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-buttons-buttons-module"],{

/***/ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js ***!
  \*******************************************************************************************/
/*! exports provided: WebStorageService, isStorageAvailable, InMemoryStorageService, SESSION_STORAGE, LOCAL_STORAGE, sessionStorageFactory, localStorageFactory, StorageServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageService", function() { return WebStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStorageAvailable", function() { return isStorageAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryStorageService", function() { return InMemoryStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE", function() { return SESSION_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function() { return LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorageFactory", function() { return sessionStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageFactory", function() { return localStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageServiceModule", function() { return StorageServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * An implementation of `StorageService` interface that uses an underlying (web) `Storage` object, such as `localStorage` and
 * `sessionStorage`, as backing data store. This class basically wraps the `Storage` object so it can be accessed through the
 * `StorageService` interface.
 */
var WebStorageService = (function () {
    /**
     * Creates a new `WebStorageService` instance that uses the specified (web) storage object as underlying backing storage.
     *
     * @param storage Storage object which is to be wrapped in a class that implements the `StorageService` interface.
     */
    function WebStorageService(storage) {
        this.storage = storage;
    }
    /**
     * Retrieves the value stored for the entry that is associated with the specified key. If no such entry exists or if the service for
     * some reason is unable to fetch the value of the entry then `null` will be returned.
     *
     * @param   key Identifier of the entry whose value is to be retrieved.
     * @returns     Value of the entry that is identified by the specified key or `null` if the entry does not exist or cannot be loaded.
     */
    WebStorageService.prototype.get = function (key) {
        try {
            return JSON.parse(this.storage.getItem(key));
        }
        catch (error) {
            return null;
        }
    };
    /**
     * Creates or updates the entry identified by the specified key with the given value. Storing a value into the storage service will
     * ensure that an equivalent of the value can be read back, i.e. the data and structure of the value will be the same. It, however, does
     * not necessarily return the same value, i.e. the same reference.
     *
     * @param key   Identifier of the entry which is to be created or updated.
     * @param value Value which is to be stored.
     */
    WebStorageService.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `null`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    WebStorageService.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    return WebStorageService;
}());
/**
 * Checks whether the specified (web) storage is available and functional. This might not be the case for older browsers. However even
 * certain browsers that do support the web storage API can, under some circumstances, have non functional storage objects. For example,
 * Safari is known to have `localStorage` and `sessionStorage` throw exceptions in private mode.
 *
 * @param storage Storage object which is to be tested for availability.
 */
function isStorageAvailable(storage) {
    // Check if storage is available.
    if (!storage) {
        return false;
    }
    // Check if the storage can actually be accessed.
    try {
        var now = Date.now();
        var testItemKey = "storage-test-entry-" + now;
        var testItemValue = "storage-test-value-" + now;
        storage.setItem(testItemKey, testItemValue);
        var retrievedItemValue = storage.getItem(testItemKey);
        storage.removeItem(testItemKey);
        return retrievedItemValue === testItemValue;
    }
    catch (error) {
        return false;
    }
}

/**
 * A volatile `StorageService` implementation. This service guarantees that data stored will remain available as long as the application
 * instance is active. After the application is terminated all data will be lost.
 */
var InMemoryStorageService = (function () {
    function InMemoryStorageService() {
        this.storage = new Map();
    }
    /**
     * Retrieves the value stored for the entry that is associated with the specified key. If no such entry exists or if the service for
     * some reason is unable to fetch the value of the entry then `null` will be returned.
     *
     * @param   key Identifier of the entry whose value is to be retrieved.
     * @returns     Value of the entry that is identified by the specified key or `null` if the entry does not exist or cannot be loaded.
     */
    InMemoryStorageService.prototype.get = function (key) {
        if (!this.storage.has(key)) {
            return null;
        }
        return this.storage.get(key);
    };
    /**
     * Creates or updates the entry identified by the specified key with the given value. Storing a value into the storage service will
     * ensure that an equivalent of the value can be read back, i.e. the data and structure of the value will be the same. It, however, does
     * not necessarily return the same value, i.e. the same reference.
     *
     * @param key   Identifier of the entry which is to be created or updated.
     * @param value Value which is to be stored.
     */
    InMemoryStorageService.prototype.set = function (key, value) {
        this.storage.set(key, value);
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `null`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    InMemoryStorageService.prototype.remove = function (key) {
        this.storage.delete(key);
    };
    return InMemoryStorageService;
}());

/** Injection token for the session storage service. */
var SESSION_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SESSION_STORAGE');
/** Injection token for the local storage service. */
var LOCAL_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LOCAL_STORAGE');
function sessionStorageFactory() {
    if (!isStorageAvailable(sessionStorage)) {
        return new InMemoryStorageService();
    }
    return new WebStorageService(sessionStorage);
}
function localStorageFactory() {
    if (!isStorageAvailable(localStorage)) {
        return new InMemoryStorageService();
    }
    return new WebStorageService(localStorage);
}
var StorageServiceModule = (function () {
    function StorageServiceModule() {
    }
    return StorageServiceModule;
}());
StorageServiceModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    { provide: SESSION_STORAGE, useFactory: sessionStorageFactory },
                    { provide: LOCAL_STORAGE, useFactory: localStorageFactory }
                ]
            },] },
];
/** @nocollapse */
StorageServiceModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/accessroll/accessroll.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/accessroll/accessroll.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accessroll works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>adminusercreate works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>adminuserlist works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/appusers/appusers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/appusers/appusers.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <!--/.row-->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Doctor List\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-bordered table-striped table-sm\">\n              <thead>\n                <tr>\n                  <th>S.No</th>\n                  <th>DR Name</th>\n                  <th>Email ID</th>\n                  <th>Phone Number</th>\n                  <th>Password</th>\n                  <th>Logintype</th>\n                  <th>Last Login</th>\n                 \n                 \n                 \n                  \n                  <th>Type</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let item of Doctor_List; let i = index;\">\n\n                    <tr>\n                        <td>{{i+1}}</td>\n                        <td>{{item.Name}}</td>\n                        <td>{{item.Email}}</td>\n                        <td>{{item.Phone}}</td>\n                        <td>{{item.Password}}</td>\n                        <td>{{item.Logintype | date}}</td>\n                        <td>{{item.Lastlogin | date}}</td>\n                        <td *ngIf=\"item.Type == 1\">\n                            <span class=\"badge badge-success\">Doctor</span>\n                        </td>\n                        <td *ngIf=\"item.Type == 0\">\n                            <span class=\"badge badge-secondary\">Patient</span>\n                        </td>\n                        <td>\n                           <button (click)=\"DeleteUser(item._id)\">Delete</button>\n                          </td>\n                      </tr>\n                    </ng-container>\n              </tbody>\n            </table>\n            <nav>\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n                <li class=\"page-item active\">\n                  <a class=\"page-link\" href=\"#\">1</a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n              </ul>\n            </nav>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n    </div>\n    <!--/.row-->\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/home-banner/home-banner.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/home-banner/home-banner.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <!--/.row-->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Home Banner List\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-bordered table-striped table-sm\">\n              <thead>\n                <tr>\n                  <th>S.No</th>\n                  <th>Specializations</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                    <td></td>\n                    <td><input type=\"file\" (change)=\"fileupload1($event)\"></td>\n                    <td><button (click)=\"addfiles1()\">Add</button></td>\n                </tr>\n              </tbody>\n              <tbody>\n                <ng-container *ngFor=\"let item of Banner_List; let i = index;\">\n                  <tr>\n                    <td>{{i+1}}</td>\n                    <td><img src=\"{{item.Image_link}}\" style=\"width:40%\" ></td>\n                    <td><button (click)=\"Deletbanners(item._id)\">Delete</button></td>\n                  </tr>\n                  </ng-container>\n              </tbody>\n            </table>\n            <nav>\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n                <li class=\"page-item active\">\n                  <a class=\"page-link\" href=\"#\">1</a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n              </ul>\n            </nav>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n    </div>\n    <!--/.row-->\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/specializations/specializations.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/specializations/specializations.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <!--/.row-->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Specializations List\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-bordered table-striped table-sm\">\n              <thead>\n                <tr>\n                  <th>S.No</th>\n                  <th>Specializations</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                    <td></td>\n                    <td><input type=\"text\"  [(ngModel)]=\"Specialisation\" name =\"Specialisation\"></td>\n                    <td><button (click)=\"addSpecialisation()\">Add</button></td>\n                </tr>\n\n              </tbody>\n              <tbody>\n                <ng-container *ngFor=\"let item of Specialisation_List; let i = index;\">\n                  <tr>\n                    <td>{{i+1}}</td>\n                    <td>{{item.Specialization}}</td>\n                    <td><button (click)=\"DeleteSpecialisation(item._id)\">Delete</button></td>\n                  </tr>\n                  </ng-container>\n              </tbody>\n            </table>\n            <nav>\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n                <li class=\"page-item active\">\n                  <a class=\"page-link\" href=\"#\">1</a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n              </ul>\n            </nav>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n    </div>\n    <!--/.row-->\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>subcatdoctor works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/symptoms/symptoms.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/symptoms/symptoms.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <!--/.row-->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Symptoms List\n          </div>\n\n          <div class=\"card-body\">\n            <table class=\"table table-bordered table-striped table-sm\">\n              <thead>\n                <tr>\n                  <th>S.No</th>\n                  <th>Symptoms Icon</th>\n                  <th>Symptoms</th>\n                  <th>Specializations</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                    <td></td>\n                    <td><input type=\"file\" (change)=\"fileupload1($event)\"></td>\n                    <td><input type=\"text\"  [(ngModel)]=\"Symptoms_Shown\" name =\"Symptoms_Shown\"></td>\n                    <td></td>\n                    <td><button (click)=\"addfiles1()\">Add</button></td>\n                </tr>\n\n              </tbody>\n              <tbody>\n                <ng-container *ngFor=\"let item of Symptoms_list; let i = index;\">\n                  <tr>\n                    <td>{{i+1}}</td>\n                    <td><img src=\"{{item.Symptoms_image}}\"></td>\n                    <td>{{item.Symptoms_Shown}}</td>\n                    \n                    <td>                \n                        <ng-container *ngFor=\"let items of item.Specializations;\">\n                           <p>{{items}}</p>\n                        </ng-container>\n                        <select  class=\"form-control\"  (change)=\"ChangingValue($event.target.value)\" >\n                            <ng-container *ngFor=\"let items of item.Specialisation_List;\">\n                            <option value=\"{{items.Specialization}}\">{{items.Specialization}}</option>\n                            </ng-container>\n                        </select>  \n                        <button (click)=\"addspecialisatin(i)\">Add</button>\n                    </td>\n\n                    <td><button (click)=\"DeleteSpecialisation(item._id)\">Delete</button></td>\n                  </tr>\n                  </ng-container>\n              </tbody>\n            </table>\n            <nav>\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n                <li class=\"page-item active\">\n                  <a class=\"page-link\" href=\"#\">1</a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n              </ul>\n            </nav>\n          </div>\n        </div>\n      </div>\n      <!--/.col-->\n    </div>\n    <!--/.row-->\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkin/checkin.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/checkin/checkin.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>Check-In</strong>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\"> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Model</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"VehicleModel\" disabled=\"true\" name =\"VehicleModel\" id=\"text-input\" class=\"form-control\" placeholder=\"Vehicle Model\">\n                    </div>\n                  </div>  \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Floor Name</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"FloorName\" disabled=\"true\"  name =\"FloorName\" id=\"text-input\"  class=\"form-control\" placeholder=\"FloorName\">\n                    </div>\n                  </div>    \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Block Name</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" [(ngModel)]=\"SubFloorName\" disabled=\"true\" name =\"SubFloorName\" id=\"text-input\"  class=\"form-control\" placeholder=\"Block Name\">\n                    </div>\n                  </div>    \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Slot Number</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" [(ngModel)]=\"SlotNumber\" disabled=\"true\" name =\"SlotNumber\" id=\"text-input\"  class=\"form-control\" placeholder=\"Slot Number\">\n                    </div>\n                  </div>  \n                     \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Duration</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\"  name =\"ActualBookingDuration\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking Duration\">\n                    </div>\n                  </div>    \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">CheckIn Time</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\"  name =\"ActualBookingDuration\" id=\"text-input\"  class=\"form-control\" placeholder=\"CheckIn Time\">\n                    </div>\n                  </div>  \n                  <div class=\"form-group row\">\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Amount</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\" disabled=\"true\"  name =\"ActualBookingAmount\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking Amount\">\n                    </div>\n                  </div>   \n                </div>     \n                <div class=\"col-md-6\"> \n                    <div class=\"form-group row\">\n                        <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Manufacturer</label>\n                        <div class=\"col-md-6\">\n                          <input type=\"text\" [(ngModel)]=\"VehicleManufacturer\" disabled=\"true\"  name =\"VehicleManufacturer\" id=\"text-input\"  class=\"form-control\" placeholder=\"Vehicle Manufacturer\">\n                        </div>\n                      </div>  \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Date</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\" [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\n                        \n                      </div>\n                  </div>  \n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Start Time</label>\n                      <div class=\"col-md-6\">\n                        <input type=\"text\" [(ngModel)]=\"ActualBookingStartTime\"  disabled=\"true\" name =\"ActualBookingStartTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking Start Time\">\n                      </div>\n                    </div>      \n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking End Time</label>\n                      <div class=\"col-md-6\">\n                       <input type=\"text\" [(ngModel)]=\"ActualBookingEndTime\" disabled=\"true\" name =\"ActualBookingEndTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking End Time\">\n                      </div>\n                    </div>    \n                    \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Image Upload</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"file\" [(ngModel)]=\"NomineePanCard\"  name =\"NomineePanCard\" id=\"text-input\"  class=\"form-control\" placeholder=\"Nominee PanCard\">\n                    </div>\n                  </div>      \n                  </div>                 \n            </div> \n            </form>\n        </div>\n      </div>\n    </div><!--/.row-->\n  </div>\n        \n        <!-- <div class=\"row\">                \n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                  <button (click)=\"createEmployees()\" class=\"btn btn-sm btn-primary float-right mt-5\" ><i class=\"fa fa-dot-circle-o\"></i> Submit</button>                \n                  </div>                  \n          </div> \n           <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                    <button type=\"reset\"  class=\"btn btn-sm btn-danger mt-5\"><i class=\"fa fa-ban\"></i> Reset</button>  \n              </div>                  \n          </div> \n      </div> -->\n  </div>\n  \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkout/checkout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/checkout/checkout.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n    <div class=\"animated fadeIn\" >\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>Check-Out</strong>\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"\">\n             \n            \n    <!-- <img class=\"card-img-top watermarked\" src=\"https://www.google.co.in/images/srpr/logo11w.png\" alt=\"\"> -->\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <!-- <div class=\"watermark\"></div> -->\n              <div class=\"form-group row\">\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\"> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Model</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"VehicleModel\" disabled=\"true\" name =\"VehicleModel\" id=\"text-input\" class=\"form-control\" placeholder=\"Vehicle Model\">\n                    </div>\n                  </div>  \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Floor Name</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"FloorName\" disabled=\"true\"  name =\"FloorName\" id=\"text-input\"  class=\"form-control\" placeholder=\"FloorName\">\n                    </div>\n                  </div>  \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Slot Number</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" [(ngModel)]=\"SlotNumber\" disabled=\"true\" name =\"SlotNumber\" id=\"text-input\"  class=\"form-control\" placeholder=\"Slot Number\">\n                    </div>\n                  </div>  \n                     \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Date</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\" [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\n                        \n                      </div>\n                  </div>  \n                   \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Start Time</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingStartTime\"  disabled=\"true\" name =\"ActualBookingStartTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking Start Time\">\n                    </div>\n                  </div> \n                  \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">CheckIn Time</label>\n                    <div class=\"col-md-6\">\n                     <input  type=\"time\" [(ngModel)]=\"ActualBookingEndTime\" disabled=\"true\" name =\"ActualBookingEndTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking End Time\">\n                    </div>\n                  </div>   \n                  <div class=\"form-group row\">\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Amount</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\" disabled=\"true\"  name =\"ActualBookingAmount\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking Amount\">\n                    </div>\n                  </div>   \n                  <div  class=\"form-group row\">\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Final Payable Amount </label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"300\"   disabled=\"true\" name =\"ActualBookingEndTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Final Payable Amount \">\n                    </div>\n                  </div>   \n                  <div class=\"form-group row\">\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Total Amount </label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"800\"  disabled=\"true\" name =\"ActualBookingEndTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Total Amount\">\n                    </div>\n                  </div>   \n                </div>     \n                <div class=\"col-md-6\"> \n                    <div class=\"form-group row\">\n                        <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Manufacturer</label>\n                        <div class=\"col-md-6\">\n                          <input type=\"text\" [(ngModel)]=\"VehicleManufacturer\" disabled=\"true\"  name =\"VehicleManufacturer\" id=\"text-input\"  class=\"form-control\" placeholder=\"Vehicle Manufacturer\">\n                        </div>\n                      </div>  \n                         \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Block Name</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" [(ngModel)]=\"SubFloorName\" disabled=\"true\" name =\"SubFloorName\" id=\"text-input\"  class=\"form-control\" placeholder=\"Block Name\">\n                    </div>\n                  </div>   \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Duration</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"text\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\"  name =\"ActualBookingDuration\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking Duration\">\n                    </div>\n                  </div>     \n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking End Time</label>\n                      <div class=\"col-md-6\">\n                       <input type=\"text\" [(ngModel)]=\"ActualBookingEndTime\" disabled=\"true\" name =\"ActualBookingEndTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Actual Booking End Time\">\n                      </div>\n                    </div>  \n                    <div class=\"form-group row\">\n                      <label class=\"col-md-5 col-form-label\" for=\"text-input\">Checkout Time</label>\n                      <div class=\"col-md-6\">\n                       <input type=\"time\" [(ngModel)]=\"ActualBookingEndTime\" disabled=\"true\" name =\"ActualBookingEndTime\" id=\"text-input\"  class=\"form-control\" placeholder=\"Checkout Time\">\n                      </div>\n                    </div>   \n                       \n                  \n                    \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Image Upload</label>\n                    <div class=\"col-md-6\">\n                     <input type=\"file\" [(ngModel)]=\"NomineePanCard\"  name =\"NomineePanCard\" id=\"text-input\"  class=\"form-control\" placeholder=\"Nominee PanCard\">\n                    </div>\n                  </div>      \n                  </div>                 \n            </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div><!--/.row-->\n  </div>\n\n        \n        <!-- <div class=\"row\">                \n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                  <button (click)=\"createEmployees()\" class=\"btn btn-sm btn-primary float-right mt-5\" ><i class=\"fa fa-dot-circle-o\"></i> Submit</button>                \n                  </div>                  \n          </div> \n           <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                    <button type=\"reset\"  class=\"btn btn-sm btn-danger mt-5\"><i class=\"fa fa-ban\"></i> Reset</button>  \n              </div>                  \n          </div> \n      </div> -->\n  </div>\n  \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <div class=\"card\">\n            <div class=\"card-header head-color\">\n                <h4 class=\"card-title\">TN09 CJ 5259</h4><h6>(REFNORMAL-602134)</h6>\n              </div>\n          </div> \n         </div>\n       </div>\n    <div class=\"row mt-3\">\n     <div class=\"col-md-8\">\n        <div class=\"card\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Uploaded Documents</h4>\n            <input type=\"file\" name=\"fileupload\" id=\"fileupload\">\n          </div>\n       </div> \n      </div>\n    </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <h4 class=\"card-title\">Estimation</h4>\n                        <h5 class=\"card-title\">Total OLA Approved amount: Rs.0</h5>\n                    </div>\n                    <div class=\"col-md-4\">                        \n                <div class=\"input-group date\" id=\"reservationdate_to\" data-target-input=\"nearest\">\n                    <input type=\"text\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\" required/>\n                    <div class=\"input-group-append\" data-target=\"#reservationdate_to\" data-toggle=\"datetimepicker\">\n                        <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\n                    </div>\n                </div>\n                    </div>\n                </div>\n                <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th colspan=\"2\" style=\"text-align: center;\">Unit Price</th>\n                        <th></th>\n                        <th></th>\n                      </tr>\n                      \n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th></th>\n                            <th>Description</th>\n                            <th>Status</th>\n                            <th>Quantity</th>\n                            <th>Part</th>\n                            <th>Labour</th>\n                            <th>Total</th>\n                            <th></th>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>Diesel</td>\n                            <td><span class=\"badge badge-danger\">Rejected</span></td>\n                            <td>0</td>\n                            <td>0</td>\n                            <td>200.00</td>\n                            <td>200.00</td>\n                            <td><button><li class=\"fa fa-remove\"></li></button></td>\n                         </tr>\n                         <tr>\n                            <td></td>\n                            <td>Diesel</td>\n                            <td><span class=\"badge badge-danger\">Rejected</span></td>\n                            <td>0</td>\n                            <td>0</td>\n                            <td>200.00</td>\n                            <td>200.00</td>\n                            <td><button><li class=\"fa fa-remove\"></li></button></td>\n                         </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                          <th style=\"text-align: right;\" id=\"total\" colspan=\"6\">Total :</th>\n                          <td>400</td>\n                        </tr>\n                       </tfoot>\n                  </table>\n              </div>\n           </div> \n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Details</h4>\n                    <div class=\"form-group\">\n                        <label>ODO Reading(in kms)</label>\n                         <input type=\"text\" id=\"category_id\" value=\"11234\" disabled name=\"category_id\"class=\"form-control\">\n                        </div>\n                  <div class=\"form-group\">\n                    <label>Select Service Advisor</label>\n                    <select name=\"service\" class=\"form-control\" disabled>\n                        <option value=\"Prabhu\">Prabhu</option>\n                    </select>\n                    </div>\n                    \n                  </div>\n              </div>\n          </div>\n      </div>\n   \n     \n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <select name=\"service\" class=\"form-control\">\n            <option value=\"\">Vehicle_Type</option>\n            <option value=\"car\">Car</option>\n            <option value=\"bike\">Bike</option>\n        </select>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <select name=\"service\" class=\"form-control\">\n            <option value=\"\">Status</option>\n            <option value=\"Upcoming\">Upcoming</option>\n            <option value=\"checkin\">Check-In</option>\n            <option value=\"checkout\">Check-Out</option>\n        </select>\n        </div>\n    </div>\n    \n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <input type=\"date\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\" required/>       \n    </div>\n    </div>\n     <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"BookingId\" placeholder=\"Booking Id\"/>       \n    </div>\n    </div>\n    \n   <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"VehicleNumber\" placeholder=\"Vehicle Number\"/>       \n  </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"form-group\">\n      <button (click)=\"VehicleModal_save()\" class=\"btn btn-sm btn-primary\" ><i class=\"fa fa-search\"></i>Search</button>               \n    </div> \n  </div>\n  </div>\n  <div class=\"row\">\n    <ng-container *ngFor=\"let item of Booking_List; let i = index;\">\n   <div class=\"col-sm-6 col-lg-3\">\n   <div class=\"card\">\n      <div class=\"card-header\">\n        <button style=\"width: 210px; height:40px;\"  class=\"btn btn-success\">Upcoming</button>\n        <!-- <select style=\"width: 210px; height:40px;\" (change)=changestatus($event) class=\"form-group btn btn-primary\">\n          <option selected disabled class=\"hideoption\" >{{item.Booking_Status}}</option>\n          <option value=\"\">Booking Confirmed</option>\n          <option value=\"\">checkIn</option>\n          <option value=\"\">CheckOut</option>\n        </select> -->\n      </div>\n      <div class=\"card-body\">  \n        <h6 (click)=\"bookingacceptance(item)\">Booking ID : {{item.Booking_id}}</h6>\n        <p>Vehicle Type : Two Wheeler</p>\n        <h4>{{item.Vehicle_No}}</h4>\n        <p>{{item.Customer_Phone}}</p>\n        <p>Checkin Time : 02.00 PM</p>\n        <p>Checkout Time : 03.45 PM</p>   \n        <p>12 July 2020</p>\n        <p>Estimated Time : 1 Hour 45m</p>\n        <p><li class=\"icon-clock\"><span>6 days ago</span></li></p>\n        </div>\n    </div> \n    </div>\n  </ng-container>\n  <div class=\"col-sm-6 col-lg-3\">\n    <div class=\"card\">\n       <div class=\"card-header\">\n        <button style=\"width: 210px; height:40px;\"  class=\"btn btn-success\" (click)=\"checkinpage()\">CheckIn</button>\n       </div>\n       <div class=\"card-body\">  \n         <h6 (click)=\"bookingacceptance(item)\">Booking ID : 123CVX</h6>\n         <p>Vehicle Type : Two Wheeler</p>\n         <h4>TN 36 X1234</h4>\n         <p>9988776655</p>         \n         <p>Checkin Time : 02.00 PM</p>\n         <p>Checkout Time : 03.45 PM</p>\n         \n         <p>12 July 2020</p>\n         <p>Estimated Time : 1 Hour 45m</p>\n         <p><li class=\"icon-clock\"><span>6 days ago</span></li></p>\n         </div>\n     </div> \n     </div>\n     <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card\">\n         <div class=\"card-header\">\n           <button style=\"width: 210px; height:40px;\"  class=\"btn btn-success\" (click)=\"checkoutpage()\">CheckOut</button>\n         </div>\n         <div class=\"card-body\">  \n          <div class=\"watermarked\">\n          <h6 (click)=\"bookingacceptance(item)\">Booking ID : 123CVX</h6>\n         <p>Vehicle Type : Two Wheeler</p>\n         <h4>TN 36 X1234</h4>\n         <p>9988776655</p>\n         <p>Checkin Time : 02.00 PM</p>\n         <p>Checkout Time : 03.45 PM</p>         \n         <p>Estimated Time : 1 Hour 45m</p>\n         <p>12 July 2020</p>\n         <p style=\"color: red;\">Extended Time : 2 Hour</p>\n           <p><li class=\"icon-clock\"><span>6 days ago</span></li></p>\n           </div>\n           </div>\n       </div> \n       </div>\n       <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"card\">\n           <div class=\"card-header\">\n             <button style=\"width: 210px; height:40px;\"  class=\"btn btn-success\" (click)=\"checkoutpage()\">CheckOut</button>\n           </div>\n           <div class=\"card-body\">  \n            <div class=\"watermarked\">\n            <h6 (click)=\"bookingacceptance(item)\">Booking ID : 123CVX</h6>\n           <p>Vehicle Type : Two Wheeler</p>\n           <h4>TN 36 X1234</h4>\n           <p>9988776655</p>\n           <p>Checkin Time : 02.00 PM</p>\n           <p>Checkout Time : 03.45 PM</p>         \n           <p>Estimated Time : 1 Hour 45m</p>\n           <p>12 July 2020</p>\n             <p><li class=\"icon-clock\"><span>6 days ago</span></li></p>\n             </div>\n             </div>\n         </div> \n         </div>\n       \n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/downloads/downloads.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/downloads/downloads.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-body\">            \n            <h4 class=\"card-title pb-4\">Downloads</h4>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Request Id\">\n      </div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"status\">\n      </div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Downlad\">\n      </div>\n      \n    </div>\n    <!-- <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4 class=\"card-title pt-4\">Notifications</h4>\n                <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Vehicle Number</th>\n                        <th>Booking Id</th>\n                        <th>Invoice</th>\n                        <th>Payment Status</th>\n                        <th>UTR</th>\n                        <th>Invoice Number</th>\n                        <th>Invoice Date</th>\n                      </tr>\n                      \n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>TN 36 9876</td>\n                            <td>RE1234C</td>\n                            <td>Include</td>\n                            <td><span class=\"badge badge-success\">Success</span></td>\n                            <td>0</td>\n                            <td>IVR1234</td>\n                            <td>27-05-2020</td>\n                         </tr>\n                    </tbody>\n                  </table>\n                </div>\n    </div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/notifications/notifications.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/notifications/notifications.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-body\">            \n            <h4 class=\"card-title pb-4\">Notifications</h4>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"input-group date\" id=\"reservationdate_to\" data-target-input=\"nearest\">\n          <input type=\"text\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\" required/>\n          <div class=\"input-group-append\" data-target=\"#reservationdate_to\" data-toggle=\"datetimepicker\">\n              <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\n          </div>\n      </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <select name=\"service\" class=\"form-control\">\n              <option value=\"\">Status</option>\n          </select>\n          </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <select name=\"service\" class=\"form-control\">\n              <option value=\"\">Booking Type</option>\n          </select>\n          </div>\n      </div>\n      <div class=\"col-md-3\">\n        <form class=\"form-inline\">\n            <div class=\"input-group input-group-sm\">\n              <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-navbar\" type=\"submit\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </div>\n            </div>\n          </form>\n      </div> \n    </div>\n    <!-- <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4 class=\"card-title pt-4\">Notifications</h4>\n                <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>Vehicle Number</th>\n                        <th>Booking Id</th>\n                        <th>Invoice</th>\n                        <th>Payment Status</th>\n                        <th>UTR</th>\n                        <th>Invoice Number</th>\n                        <th>Invoice Date</th>\n                      </tr>\n                      \n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>TN 36 9876</td>\n                            <td>RE1234C</td>\n                            <td>Include</td>\n                            <td><span class=\"badge badge-success\">Success</span></td>\n                            <td>0</td>\n                            <td>IVR1234</td>\n                            <td>27-05-2020</td>\n                         </tr>\n                    </tbody>\n                  </table>\n                </div>\n    </div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/otplogin/otplogin.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/otplogin/otplogin.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"\">\n    <div class=\"\">\n  \n        <div class=\"login_box\">\n            <div class=\"login_box_inner\">\n  \n                <div class=\"container_login_form\">\n                    <!-- <div class=\"logo\">\n            <img\n              src=\"../../../assets/img/brand/logo2.png\"\n              alt=\"\">\n          </div> -->\n                    <div class=\"login_form\">\n                        <div _ngcontent-c5=\"\" class=\"col-md-12 grid-margin\">\n                            <div _ngcontent-c5=\"\" class=\"card\">\n                                \n                                <div _ngcontent-c5=\"\" class=\"card-body text-center\">\n                                    <div class=\"logo\">\n                                        <img src=\"../../../assets/img/brand/logo-png.png\" alt=\"\">\n                                    </div>\n  \n                                    <!-- <h4 _ngcontent-c5=\"\" class=\"card-title\">Login</h4> -->\n                                     <div >\n                                          <div class=\"text-danger\"></div>\n                                         </div>\n  \n                                         <!-- <div  *ngIf = \"loginError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n                                              {{loginErrorMsg}}\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                              <span aria-hidden=\"true\">&times;</span>\n                                            </button>\n                                          </div> -->\n                                    <form  class=\"my-form forms-sample ng-untouched ng-pristine ng-valid\">\n                                        <div class=\"form-group\">\n                                            <label>Enter Email Address or Phone number</label>\n                                            <input  \n                                                class=\"form-control\"\n                                                placeholder=\"Email Address or Phone number\"\n                                                type=\"text\" \n                                                \n                                                >\n                                                \n                                            \n                                        </div>\n                                        \n                                      \n                                        <button class=\"btn btn-success  mr-2\" >Send OTP </button>\n                                    </form>\n  \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n  \n            </div>\n        </div>\n  \n    </div>\n  </div>\n  <!-- <div class=\"alert-msgs\" *ngIf=\"alertcon\">\n    <div class=\"alert-msg\">\n        <div class=\"alert-msg-con\">\n  \n            <div class=\"alert-img\" *ngIf=\"success\">\n                <img src=\"assets/img/alert/success.png\" width=\"45px\" alt=\"\">\n            </div>\n            <div class=\"alert-img\" *ngIf=\"warning\">\n                <img src=\"assets/img/alert/waring.png\" width=\"45px\" alt=\"\">\n            </div>\n            <h4>\n                {{alertmsg}}\n            </h4>\n            <p>{{alertcont}}</p>\n  \n            <button class=\"alert-btn {{button}}\" type=\"button\" (click)=\"hidealert()\"> ok </button>\n        </div>\n    </div>\n  </div>\n  <script>\n    // Automatically trigger the loading animation on click\n  Ladda.bind('button[type=submit]');\n  \n  // Same as the above but automatically stops after two seconds\n  Ladda.bind('button[type=submit]', { timeout: 2000 } );\n  \n  </script> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/payments/payments.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/payments/payments.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"input-group date\" id=\"reservationdate_to\" data-target-input=\"nearest\">\n          <input type=\"text\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\" required/>\n          <div class=\"input-group-append\" data-target=\"#reservationdate_to\" data-toggle=\"datetimepicker\">\n              <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\n          </div>\n      </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <select name=\"service\" class=\"form-control\">\n              <option value=\"\">Status</option>\n          </select>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <select name=\"service\" class=\"form-control\">\n              <option value=\"\">Booking Type</option>\n          </select>\n          </div>\n      </div>\n      <div class=\"col-md-3\">\n        <form class=\"form-inline\">\n            <div class=\"input-group input-group-sm\">\n              <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-navbar\" type=\"submit\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </div>\n            </div>\n          </form>\n      </div>      \n      <div class=\"col-md-2\">\n        <button><li class=\"fa fa-download\"></li></button>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4 class=\"card-title pt-4\">Payments</h4>\n                <table class=\"table table-bordered table-striped table-sm\">\n                    <thead>\n                      <tr>\n                        <th>S.No</th>\n                        <th>Check_In_Date_Time</th>\n                        <th>Check_Out_Date_Time</th>\n                        <th>Total_Amount_Paid</th>\n                        <th>UTR</th>\n                        <th>Amount_Paid_Date_to_Vendor</th>\n                      </tr>\n                      \n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>TN 36 9876</td>\n                            <td>15-07-2020 3.45PM</td>\n                            <td>15-07-2020 6.45PM</td>\n                            <td>1200</td>\n                            <td>0</td>\n                            <td>27-05-2020</td>\n                         </tr>\n                    </tbody>\n                  </table>\n                </div>\n    </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>QR Code Generation </strong>\n        </div>\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Vendor Id</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Vendor Id\">\n                    </div>\n                  </div> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Vendor Name</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"VendorName\" name =\"VendorName\" id=\"text-input\" class=\"form-control\" placeholder=\"VendorName\">\n                    </div>\n                  </div> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Parking Area Name</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Parking Area Name\">\n                    </div>\n                  </div> \n                   <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Block Name</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Block Name\">\n                    </div>\n                  </div> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Latitude</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Latitude\">\n                    </div>\n                  </div> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Longitude</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Longitude\">\n                    </div>\n                  </div> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Entry</label>\n                    <div class=\"col-md-6\">\n                      <select class=\"form-control\">\n                        <option>Select Option</option>\n                        <option>CehckIn</option>\n                        <option>CheckOut</option>\n                      </select>\n                    </div>\n                  </div> \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-4 col-form-label\" for=\"text-input\">Date and Time</label>\n                    <div class=\"col-md-3\">\n                      <input type=\"date\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Longitude\">\n                    </div>\n                    <div class=\"col-md-3\">\n                        <input type=\"time\" [(ngModel)]=\"Title\" name =\"Title\" id=\"text-input\" class=\"form-control\" placeholder=\"Longitude\">\n                      </div>\n                  </div> \n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group row\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                    <img height=\"300px\" width=\"300px\" src=\"../../../../../assets/img/brand/qrcode.png\">\n                    </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n              </div>\n                \n                 \n                 \n             \n                  <div class=\"row\">                \n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <button (click)=\"Banner_save()\" class=\"btn btn-sm btn-primary float-right mt-5\" ><i class=\"fa fa-save\"></i>Save</button>               \n                        </div>                  \n                    </div>  \n                     <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                              <button type=\"reset\"  class=\"btn btn-sm btn-danger mt-5\"><i class=\"fa fa-ban\"></i> Reset</button>  \n                        </div>                  \n                    </div> \n                </div>\n            </form>\n            \n          </div>\n        </div>\n      </div>\n    </div><!--/.row-->\n \n  </div>\n\n  \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <select name=\"service\" class=\"form-control\">\n                <option value=\"\">Status</option>\n                <option value=\"checkin\">Block</option>\n                <option value=\"checkout\">Revoke</option>\n            </select>\n            </div>\n        </div>\n        \n       \n         <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"Floor\" placeholder=\"Floor\"/>       \n        </div>\n        </div>\n        \n       <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"SubFloor\" placeholder=\"Sub Floor\"/>       \n      </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"SlotNumber\" placeholder=\"Slot Number\"/>       \n      </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <button (click)=\"VehicleModal_save()\" class=\"btn btn-sm btn-primary\" ><i class=\"fa fa-search\"></i>Search</button>               \n        </div> \n      </div>\n      </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Car Slot Bloking</strong>\n                </div>\n                <div class=\"card-body\">\n                    <table class=\"table table-bordered table-striped table-sm\">\n                        <thead>\n                          <tr>\n                            <th>S.No</th>\n                            <th>Area </th>\n                            <th>Floor</th>\n                            <th>Slot</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                \n                          <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\"> -->\n                              <tr>\n                            <td>1</td>\n                            <td>Chennai </td>\n                            <td>2nd Floor</td>\n                            <td>B-1</td>\n                            <td>\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Revoke</button></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Bike Slot Bloking</strong>\n                </div>\n                <div class=\"card-body\">\n                    <table class=\"table table-bordered table-striped table-sm\">\n                        <thead>\n                          <tr>\n                            <th>S.No</th>\n                            <th>Area </th>\n                            <th>Floor</th>\n                            <th>Slot</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                \n                          <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\"> -->\n                              <tr>\n                            <td>1</td>\n                            <td>Chennai </td>\n                            <td>2nd Floor</td>\n                            <td>B-1</td>\n                            <td>\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Revoke</button></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <select name=\"service\" class=\"form-control\">\n                <option value=\"\">Status</option>\n                <option value=\"checkin\">Block</option>\n                <option value=\"checkout\">Revoke</option>\n            </select>\n            </div>\n        </div>\n        \n       \n         <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"Floor\" placeholder=\"Floor\"/>       \n        </div>\n        </div>\n        \n       <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"SubFloor\" placeholder=\"Sub Floor\"/>       \n      </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"SlotNumber\" placeholder=\"Slot Number\"/>       \n      </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <button (click)=\"VehicleModal_save()\" class=\"btn btn-sm btn-primary\" ><i class=\"fa fa-search\"></i>Search</button>               \n        </div> \n      </div>\n      </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Bike Slot Booking</strong>\n                    <button (click)=\"showbikeslot()\" class=\"btn btn-sm btn-primary float-right\">Add More</button>\n                </div>\n                <div class=\"card-body\">\n                    <div  *ngIf=\"bikeslot\">\n                            \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Bike Slots</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [(ngModel)]=\"bikeslots\" name=\"bikeslots\" id=\"text-input\"\n                                    class=\"form-control\" placeholder=\"Bike Slots\">\n                            </div>\n                            <div class=\"col-md-3\">\n                                <button (click)=\"addbikeslot()\" class=\"btn btn-primary\">Create</button>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"text-input\"></label>\n                            <div class=\"col-md-6 mt-3\">\n                                <table class=\"table table-bordered table-striped table-sm\">\n                                    <thead>\n                                        <tr>\n                                            <th>S.No</th>\n                                            <th>Area </th>\n                                            <th>Floor</th>\n                                            <th>Slot</th>\n                                        <th>Add_Action</th>\n                                        <th>Delete_Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n    \n                                        <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\">\n                                            <td>{{i+1}}</td>\n                                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\"\n                                                    class=\"form-control\" placeholder=\"Area\"></td>\n                                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\"\n                                                    class=\"form-control\" placeholder=\"Floor\"></td>\n                                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\"\n                                                    class=\"form-control\" placeholder=\"Slot Number\"></td>\n                                            <td> <button (click)=\"addcar(i)\" class=\"btn btn-sm btn-primary\">Add</button>\n                                                    </td>\n                                                    <td> <button (click)=\"deletcar(i)\"\n                                                            class=\"btn btn-sm btn-primary\">Delete</button></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                            </div>\n                    <table class=\"table table-bordered table-striped table-sm\">\n                        \n                        <thead>\n                          <tr>\n                            <th>S.No</th>\n                            <th>Area </th>\n                            <th>Floor</th>\n                            <th>Slot</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Phoneix mall</td>\n                                <td>2nd Floor</td>\n                                <td>3</td>\n                                 <td> <button (click)=\"addcar(i)\" class=\"btn btn-sm btn-primary\">Block</button>\n                                </td>\n\n                            </tr>\n                \n                          <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\">\n                            <td>{{i+1}}</td>\n                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\" class=\"form-control\"\n                                placeholder=\"Area\"></td>\n                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\" class=\"form-control\"\n                                placeholder=\"Floor\"></td>\n                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\" class=\"form-control\"\n                                placeholder=\"Slot Number\"></td>\n                            <td>\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Block</button></td>\n                          </tr> -->\n                        </tbody>\n                      </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Car Slot Booking</strong>\n                    <button (click)=\"showcarslot()\" class=\"btn btn-sm btn-primary float-right\">Add More</button>\n                </div>\n                <div class=\"card-body\">\n                    <div *ngIf=\"carslot\"> <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label\" for=\"text-input\">Car Slots</label>\n                        <div class=\"col-md-6\">\n                            <input type=\"text\" [(ngModel)]=\"carslots\" name=\"carslots\" id=\"text-input\"\n                                class=\"form-control\" placeholder=\"Car Slots\">\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button (click)=\"addcarslot()\" class=\"btn btn-primary\">Create</button>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label\" for=\"text-input\"></label>\n                        <div class=\"col-md-6 mt-3\">\n                            <table class=\"table table-bordered table-striped table-sm\">\n                                <thead>\n                                    <tr>\n                                        <th>S.No</th>\n                                        <th>Select</th>\n                                        <th>Area </th>\n                                        <th>Floor</th>\n                                        <th>Slot</th>\n                                        <th>Add_Action</th>\n                                        <th>Delete_Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n         \n                                    <tr *ngFor=\"let dynamic5 of include_bike2; let i = index;\">\n                                        <td>{{i+1}}</td>\n                                        <td><input type=\"checkbox\" name=\"\" [(ngModel)]=\"name\"> </td>\n                                        <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\"\n                                                class=\"form-control\" placeholder=\"Area\"></td>\n                                        <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\"\n                                                class=\"form-control\" placeholder=\"Floor\"></td>\n                                        <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\"\n                                                class=\"form-control\" placeholder=\"Slot Number\"></td>\n                                        <td> <button (click)=\"addcar(i)\" class=\"btn btn-sm btn-primary\">Add</button>\n                                        </td>\n                                        <td> <button (click)=\"deletcar(i)\"\n                                                class=\"btn btn-sm btn-primary\">Delete</button></td>\n                                    </tr> \n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                            </div>\n                    <table class=\"table table-bordered table-striped table-sm\">\n                        \n                        <thead>\n                          <tr>\n                            <th>S.No</th>\n                            <th>Area </th>\n                            <th>Floor</th>\n                            <th>Slot</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>Phoneix mall</td>\n                                <td>2nd Floor</td>\n                                <td>3</td>\n                                 <td> <button (click)=\"addcar(i)\" class=\"btn btn-sm btn-primary\">Block</button>\n                                </td>\n\n                            </tr>\n                            \n<!--                 \n                          <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\">\n                            <td>{{i+1}}</td>\n                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\" class=\"form-control\"\n                                placeholder=\"Area\"></td>\n                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\" class=\"form-control\"\n                                placeholder=\"Floor\"></td>\n                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\" class=\"form-control\"\n                                placeholder=\"Slot Number\"></td>\n                            <td>\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Block</button></td>\n                          </tr> -->\n                        </tbody>\n                      </table>\n                   \n                   \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/buttons/admin/accessroll/accessroll.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/buttons/admin/accessroll/accessroll.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vYWNjZXNzcm9sbC9hY2Nlc3Nyb2xsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/buttons/admin/accessroll/accessroll.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/buttons/admin/accessroll/accessroll.component.ts ***!
  \************************************************************************/
/*! exports provided: AccessrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessrollComponent", function() { return AccessrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccessrollComponent = /** @class */ (function () {
    function AccessrollComponent() {
    }
    AccessrollComponent.prototype.ngOnInit = function () {
    };
    AccessrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accessroll',
            template: __webpack_require__(/*! raw-loader!./accessroll.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/accessroll/accessroll.component.html"),
            styles: [__webpack_require__(/*! ./accessroll.component.scss */ "./src/app/views/buttons/admin/accessroll/accessroll.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccessrollComponent);
    return AccessrollComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vYWRtaW51c2VyY3JlYXRlL2FkbWludXNlcmNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminusercreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusercreateComponent", function() { return AdminusercreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminusercreateComponent = /** @class */ (function () {
    function AdminusercreateComponent() {
    }
    AdminusercreateComponent.prototype.ngOnInit = function () {
    };
    AdminusercreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminusercreate',
            template: __webpack_require__(/*! raw-loader!./adminusercreate.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.html"),
            styles: [__webpack_require__(/*! ./adminusercreate.component.scss */ "./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminusercreateComponent);
    return AdminusercreateComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vYWRtaW51c2VybGlzdC9hZG1pbnVzZXJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminuserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminuserlistComponent", function() { return AdminuserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminuserlistComponent = /** @class */ (function () {
    function AdminuserlistComponent() {
    }
    AdminuserlistComponent.prototype.ngOnInit = function () {
    };
    AdminuserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminuserlist',
            template: __webpack_require__(/*! raw-loader!./adminuserlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.html"),
            styles: [__webpack_require__(/*! ./adminuserlist.component.scss */ "./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminuserlistComponent);
    return AdminuserlistComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/appusers/appusers.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/buttons/admin/appusers/appusers.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vYXBwdXNlcnMvYXBwdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/buttons/admin/appusers/appusers.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/buttons/admin/appusers/appusers.component.ts ***!
  \********************************************************************/
/*! exports provided: AppusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppusersComponent", function() { return AppusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");



// import { ApiService } from '../../../api/userApi/api.service';

var AppusersComponent = /** @class */ (function () {
    function AppusersComponent(router, _api) {
        this.router = router;
        this._api = _api;
    }
    AppusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._api.UserList().subscribe(function (response) {
            console.log(response);
            _this.Doctor_List = response.data;
        });
    };
    AppusersComponent.prototype.DeleteUser = function (i) {
        var _this = this;
        this._api.DeleteUser(i).subscribe(function (response) {
            console.log(response);
            alert("User Deleted successfully");
            _this.ngOnInit();
        });
    };
    AppusersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    AppusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appusers',
            template: __webpack_require__(/*! raw-loader!./appusers.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/appusers/appusers.component.html"),
            styles: [__webpack_require__(/*! ./appusers.component.scss */ "./src/app/views/buttons/admin/appusers/appusers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AppusersComponent);
    return AppusersComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/home-banner/home-banner.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/buttons/admin/home-banner/home-banner.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vaG9tZS1iYW5uZXIvaG9tZS1iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/buttons/admin/home-banner/home-banner.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/buttons/admin/home-banner/home-banner.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBannerComponent", function() { return HomeBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");




// import { ApiService } from '../../../api/userApi/api.service';


var HomeBannerComponent = /** @class */ (function () {
    function HomeBannerComponent(storage, router, _api, http) {
        this.storage = storage;
        this.router = router;
        this._api = _api;
        this.http = http;
        this.Banner_List = [];
        this.Banner_path = '';
    }
    HomeBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._api.Banner_List().subscribe(function (response) {
            console.log(response);
            _this.Banner_List = response.Data;
        });
    };
    HomeBannerComponent.prototype.fileupload1 = function (event) {
        this.selectedAudio1 = event.target.files[0];
    };
    HomeBannerComponent.prototype.addfiles1 = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
        this.http.post('http://54.214.141.11:3000/upload', fd)
            .subscribe(function (res) {
            console.log(res);
            _this.Banner_path = res.Data;
            _this.addbanners();
        });
    };
    HomeBannerComponent.prototype.addbanners = function () {
        var _this = this;
        if (this.Banner_path == "") {
            alert('Enter Specialisation');
        }
        else {
            var data = {
                "Image_link": this.Banner_path,
                "Added_by": "Admin",
                "UpdatedAt": "" + new Date()
            };
            this._api.CreateBanner(data).subscribe(function (response) {
                console.log(response);
                if (response.Code == 300) {
                    alert("There Was a Problem in register this doctor try it again");
                }
                else {
                    alert('Data Uploaded SuccessFully');
                    _this.Banner_path = '';
                    _this.ngOnInit();
                }
            });
        }
    };
    HomeBannerComponent.prototype.Deletbanners = function (i) {
        var _this = this;
        this._api.DeleteBanner(i).subscribe(function (response) {
            console.log(response);
            alert(response.message);
            _this.ngOnInit();
        });
    };
    HomeBannerComponent.prototype.saveInLocal = function (key, val) {
        this.storage.set(key, val);
    };
    HomeBannerComponent.prototype.getFromLocal = function (key) {
        return this.storage.get(key);
    };
    HomeBannerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    HomeBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-banner',
            template: __webpack_require__(/*! raw-loader!./home-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/home-banner/home-banner.component.html"),
            styles: [__webpack_require__(/*! ./home-banner.component.scss */ "./src/app/views/buttons/admin/home-banner/home-banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeBannerComponent);
    return HomeBannerComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/specializations/specializations.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/buttons/admin/specializations/specializations.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vc3BlY2lhbGl6YXRpb25zL3NwZWNpYWxpemF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/buttons/admin/specializations/specializations.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/buttons/admin/specializations/specializations.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SpecializationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecializationsComponent", function() { return SpecializationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");



// import { ApiService } from '../../../api/userApi/api.service';


var SpecializationsComponent = /** @class */ (function () {
    function SpecializationsComponent(storage, router, _api) {
        this.storage = storage;
        this.router = router;
        this._api = _api;
        this.Specialisation_List = [];
        this.Specialisation = '';
    }
    SpecializationsComponent.prototype.ViewDoctors = function (data) {
        this.saveInLocal('Doctor_Details', data);
        console.log(data);
        this.router.navigateByUrl('/Home/buttons/view_doctors');
    };
    SpecializationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._api.specializationList().subscribe(function (response) {
            console.log(response);
            _this.Specialisation_List = response.Data;
        });
    };
    SpecializationsComponent.prototype.addSpecialisation = function () {
        var _this = this;
        if (this.Specialisation == "") {
            alert('Enter Specialisation');
        }
        else {
            var check = 0;
            for (var a = 0; a < this.Specialisation_List.length; a++) {
                if (this.Specialisation_List[a].Specialization == this.Specialisation) {
                    check = 1;
                }
            }
            if (check == 0) {
                var data = { "Specialization": this.Specialisation };
                this._api.Createspecialization(data).subscribe(function (response) {
                    console.log(response);
                    if (response.Code == 300) {
                        alert("There Was a Problem in register this doctor try it again");
                    }
                    else {
                        alert('Data Uploaded SuccessFully');
                        _this.Specialisation = '';
                        _this.ngOnInit();
                    }
                });
            }
            else {
                alert('This Specialisation already Exists');
            }
        }
    };
    SpecializationsComponent.prototype.DeleteSpecialisation = function (i) {
        var _this = this;
        var a = {
            "Specialization_id": i
        };
        this._api.DeleteSpecialisation(a).subscribe(function (response) {
            console.log(response);
            alert(response.Message);
            _this.ngOnInit();
        });
    };
    SpecializationsComponent.prototype.saveInLocal = function (key, val) {
        this.storage.set(key, val);
    };
    SpecializationsComponent.prototype.getFromLocal = function (key) {
        return this.storage.get(key);
    };
    SpecializationsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    SpecializationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specializations',
            template: __webpack_require__(/*! raw-loader!./specializations.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/specializations/specializations.component.html"),
            styles: [__webpack_require__(/*! ./specializations.component.scss */ "./src/app/views/buttons/admin/specializations/specializations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SpecializationsComponent);
    return SpecializationsComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vc3ViY2F0ZG9jdG9yL3N1YmNhdGRvY3Rvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubcatdoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatdoctorComponent", function() { return SubcatdoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubcatdoctorComponent = /** @class */ (function () {
    function SubcatdoctorComponent() {
    }
    SubcatdoctorComponent.prototype.ngOnInit = function () {
    };
    SubcatdoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcatdoctor',
            template: __webpack_require__(/*! raw-loader!./subcatdoctor.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.html"),
            styles: [__webpack_require__(/*! ./subcatdoctor.component.scss */ "./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubcatdoctorComponent);
    return SubcatdoctorComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/admin/symptoms/symptoms.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/buttons/admin/symptoms/symptoms.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYWRtaW4vc3ltcHRvbXMvc3ltcHRvbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/buttons/admin/symptoms/symptoms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/buttons/admin/symptoms/symptoms.component.ts ***!
  \********************************************************************/
/*! exports provided: SymptomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function() { return SymptomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { ApiService } from '../../../api/userApi/api.service';



var SymptomsComponent = /** @class */ (function () {
    function SymptomsComponent(storage, router, _api, http) {
        this.storage = storage;
        this.router = router;
        this._api = _api;
        this.http = http;
        this.Symptoms_image = "";
        this.Symptoms_Shown = "";
        this.Specializations = [];
        this.addbuttonshow = true;
        this.Specialisation = '';
        this.Symptoms_list = [];
        this.reSymptoms_list = [];
        this.Specialisation_List = [];
    }
    SymptomsComponent.prototype.fileupload1 = function (event) {
        this.selectedAudio1 = event.target.files[0];
    };
    SymptomsComponent.prototype.addfiles1 = function () {
        var _this = this;
        if (this.selectedAudio1 == undefined) {
            alert('Upload Image');
        }
        else if (this.Symptoms_Shown == "") {
            alert('Enter Symptoms');
        }
        else {
            var fd = new FormData();
            fd.append('sampleFile', this.selectedAudio1, this.selectedAudio1.name);
            this.http.post('http://54.214.141.11:3000/upload', fd)
                .subscribe(function (res) {
                console.log(res);
                _this.Symptoms_image = res.Data;
                _this.addbanners();
            });
        }
    };
    SymptomsComponent.prototype.addbanners = function () {
        var _this = this;
        if (this.Symptoms_Shown == "") {
            alert('Enter Symptoms');
        }
        else {
            var data = {
                "Symptoms_image": this.Symptoms_image,
                "Symptoms_Shown": this.Symptoms_Shown,
                "Specializations": []
            };
            this._api.CreateSymptoms(data).subscribe(function (response) {
                console.log(response);
                if (response.Code == 300) {
                    alert("There Was a Problem in register this doctor try it again");
                }
                else {
                    alert('Data Uploaded SuccessFully');
                    _this.Symptoms_image = '';
                    _this.Symptoms_Shown = '';
                    _this.Specialisation = '';
                    _this.Specialisation_List = [];
                    _this.Symptoms_list = [];
                    _this.reSymptoms_list = [];
                    _this.ngOnInit();
                }
            });
        }
    };
    SymptomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._api.Symptoms_list().subscribe(function (response) {
            console.log(response);
            _this.reSymptoms_list = response.Data;
            _this._api.specializationList().subscribe(function (response) {
                console.log(response);
                _this.Specialisation_List = response.Data;
                for (var a = 0; a < _this.reSymptoms_list.length; a++) {
                    var j = {
                        "Specializations": _this.reSymptoms_list[a].Specializations,
                        "Symptoms_Shown": _this.reSymptoms_list[a].Symptoms_Shown,
                        "Symptoms_image": _this.reSymptoms_list[a].Symptoms_image,
                        "__v": _this.reSymptoms_list[a].__v,
                        "_id": _this.reSymptoms_list[a]._id,
                        "Specialisation_List": _this.Specialisation_List,
                    };
                    _this.Symptoms_list.push(j);
                }
                console.log(_this.Symptoms_list);
            });
        });
    };
    SymptomsComponent.prototype.addspecialisatin = function (i) {
        var _this = this;
        console.log(i);
        if (this.Specialisation == '') {
            alert("Please Select Specialisations");
        }
        else {
            var check = 0;
            var sp_data = this.Symptoms_list[i].Specializations;
            for (var a = 0; a < sp_data.length; a++) {
                if (sp_data[a] == this.Specialisation) {
                    check = 1;
                }
            }
            if (check == 0) {
                this.Symptoms_list[i].Specializations.push(this.Specialisation);
                var data = {
                    "Specializations": this.Symptoms_list[i].Specializations,
                    "Symptoms_Shown": this.Symptoms_list[i].Symptoms_Shown,
                    "Symptoms_image": this.Symptoms_list[i].Symptoms_image,
                    "__v": this.Symptoms_list[i].__v,
                    "Symptoms_id": this.Symptoms_list[i]._id
                };
                this._api.editSymptoms(data).subscribe(function (response) {
                    console.log(response);
                    if (response.Code == 300) {
                        alert("There Was a Problem in register this doctor try it again");
                    }
                    else {
                        alert('Data Uploaded SuccessFully');
                        _this.Specialisation = '';
                        _this.Specialisation_List = [];
                        _this.Symptoms_list = [];
                        _this.reSymptoms_list = [];
                        _this.ngOnInit();
                    }
                });
            }
            else {
                alert("this Specialisations is already in the Table");
            }
        }
    };
    SymptomsComponent.prototype.ChangingValue = function (i) {
        console.log(i);
        this.Specialisation = i;
    };
    SymptomsComponent.prototype.DeleteSpecialisation = function (i) {
        var _this = this;
        console.log(i);
        var a = {
            "Symptoms_id": i
        };
        this._api.deleteSymptoms(a).subscribe(function (response) {
            console.log(response);
            alert(response.Message);
            _this.Specialisation = '';
            _this.Specialisation_List = [];
            _this.Symptoms_list = [];
            _this.reSymptoms_list = [];
            _this.ngOnInit();
        });
    };
    SymptomsComponent.prototype.saveInLocal = function (key, val) {
        this.storage.set(key, val);
    };
    SymptomsComponent.prototype.getFromLocal = function (key) {
        return this.storage.get(key);
    };
    SymptomsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    SymptomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-symptoms',
            template: __webpack_require__(/*! raw-loader!./symptoms.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/symptoms/symptoms.component.html"),
            styles: [__webpack_require__(/*! ./symptoms.component.scss */ "./src/app/views/buttons/admin/symptoms/symptoms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SymptomsComponent);
    return SymptomsComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/bookings/checkin/checkin.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/buttons/bookings/checkin/checkin.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYm9va2luZ3MvY2hlY2tpbi9jaGVja2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/buttons/bookings/checkin/checkin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/buttons/bookings/checkin/checkin.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckinComponent = /** @class */ (function () {
    function CheckinComponent() {
    }
    CheckinComponent.prototype.ngOnInit = function () {
    };
    CheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__(/*! raw-loader!./checkin.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkin/checkin.component.html"),
            styles: [__webpack_require__(/*! ./checkin.component.scss */ "./src/app/views/buttons/bookings/checkin/checkin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/bookings/checkout/checkout.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/checkout/checkout.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYm9va2luZ3MvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/buttons/bookings/checkout/checkout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/buttons/bookings/checkout/checkout.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/views/buttons/bookings/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-color {\n  background-color: #45c37a;\n  text-align: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2VzdGltYXRpb24vRTpcXFBhcmtpbmdWZW5kb3JQYW5lbC9zcmNcXGFwcFxcdmlld3NcXGJ1dHRvbnNcXGJvb2tpbmdzXFx2aWV3Ym9va2luZ2VzdGltYXRpb25cXHZpZXdib29raW5nZXN0aW1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2VzdGltYXRpb24vdmlld2Jvb2tpbmdlc3RpbWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9idXR0b25zL2Jvb2tpbmdzL3ZpZXdib29raW5nZXN0aW1hdGlvbi92aWV3Ym9va2luZ2VzdGltYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZC1jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NWMzN2EgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSIsIi5oZWFkLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YzM3YTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ViewbookingestimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewbookingestimationComponent", function() { return ViewbookingestimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewbookingestimationComponent = /** @class */ (function () {
    function ViewbookingestimationComponent() {
    }
    ViewbookingestimationComponent.prototype.ngOnInit = function () {
    };
    ViewbookingestimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewbookingestimation',
            template: __webpack_require__(/*! raw-loader!./viewbookingestimation.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.html"),
            styles: [__webpack_require__(/*! ./viewbookingestimation.component.scss */ "./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewbookingestimationComponent);
    return ViewbookingestimationComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-color {\n  background-color: #45c37a;\n  text-align: center;\n  font-weight: 600;\n}\n\nli {\n  list-style-type: none;\n}\n\nspan {\n  margin-left: 10px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:hover {\n  color: black;\n}\n\n.hideoption {\n  display: none;\n  visibility: hidden;\n  height: 0;\n  font-size: 0;\n}\n\n.watermarked {\n  position: relative;\n}\n\n.watermarked:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-image: url('checkout.jpg');\n  background-size: 200px 200px;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2Zvcm0vRTpcXFBhcmtpbmdWZW5kb3JQYW5lbC9zcmNcXGFwcFxcdmlld3NcXGJ1dHRvbnNcXGJvb2tpbmdzXFx2aWV3Ym9va2luZ2Zvcm1cXHZpZXdib29raW5nZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2Zvcm0vdmlld2Jvb2tpbmdmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFFSSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBRUksWUFBQTtBQ0VKOztBREFBO0VBQWMsYUFBQTtFQUFjLGtCQUFBO0VBQW1CLFNBQUE7RUFBVSxZQUFBO0FDT3pEOztBRE5BO0VBQ0ksa0JBQUE7QUNTSjs7QURORTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2Zvcm0vdmlld2Jvb2tpbmdmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtY29sb3Jcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDVjMzdhIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxubGlcclxue1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYTpob3ZlclxyXG57XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uaGlkZW9wdGlvbiB7IGRpc3BsYXk6bm9uZTsgdmlzaWJpbGl0eTpoaWRkZW47IGhlaWdodDowOyBmb250LXNpemU6MDsgfVxyXG4ud2F0ZXJtYXJrZWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAud2F0ZXJtYXJrZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnJhbmQvY2hlY2tvdXQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4iLCIuaGVhZC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWMzN2E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGlkZW9wdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDA7XG59XG5cbi53YXRlcm1hcmtlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndhdGVybWFya2VkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9icmFuZC9jaGVja291dC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMjAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDAuMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewbookingformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewbookingformComponent", function() { return ViewbookingformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");






var ViewbookingformComponent = /** @class */ (function () {
    function ViewbookingformComponent(router, http, _api, storage) {
        this.router = router;
        this.http = http;
        this._api = _api;
        this.storage = storage;
        this.selectedValue = '';
    }
    ViewbookingformComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ph = this.getFromLocal('phnumber');
        var t = this.getFromLocal('token');
        var data = {
            "Primary_Contact": ph
        };
        console.log(data);
        this._api.DoctorListlets().subscribe(function (response) {
            console.log("*****");
            console.log(response);
        });
        this._api.BookingList(data).subscribe(function (response) {
            console.log(response);
            _this.Booking_List = response.Data;
        });
    };
    ViewbookingformComponent.prototype.checkoutpage = function () {
        this.router.navigate(['Home/buttons/checkout']);
    };
    ViewbookingformComponent.prototype.checkinpage = function () {
        this.router.navigate(['Home/buttons/checkin']);
    };
    ViewbookingformComponent.prototype.bookingacceptance = function (data) {
        this.saveInLocal('Booking_list', data);
        console.log(data);
        this.router.navigate(['Home/buttons/bookingacceptance']);
    };
    ViewbookingformComponent.prototype.DeleteDoctor = function (i) {
        var _this = this;
        this._api.DeleteDoctor(i).subscribe(function (response) {
            console.log(response);
            alert(response.message);
            _this.ngOnInit();
        });
    };
    ViewbookingformComponent.prototype.saveInLocal = function (key, val) {
        this.storage.set(key, val);
    };
    ViewbookingformComponent.prototype.getFromLocal = function (key) {
        return this.storage.get(key);
    };
    ViewbookingformComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"],] }] }
    ]; };
    ViewbookingformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewbookingform',
            template: __webpack_require__(/*! raw-loader!./viewbookingform.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.html"),
            styles: [__webpack_require__(/*! ./viewbookingform.component.scss */ "./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], Object])
    ], ViewbookingformComponent);
    return ViewbookingformComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/buttons-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/buttons/buttons-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsRoutingModule", function() { return ButtonsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/home-banner/home-banner.component */ "./src/app/views/buttons/admin/home-banner/home-banner.component.ts");
/* harmony import */ var _admin_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/adminuserlist/adminuserlist.component */ "./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.ts");
/* harmony import */ var _admin_adminusercreate_adminusercreate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/adminusercreate/adminusercreate.component */ "./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.ts");
/* harmony import */ var _admin_accessroll_accessroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/accessroll/accessroll.component */ "./src/app/views/buttons/admin/accessroll/accessroll.component.ts");
/* harmony import */ var _admin_subcatdoctor_subcatdoctor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/subcatdoctor/subcatdoctor.component */ "./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.ts");
/* harmony import */ var _admin_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/symptoms/symptoms.component */ "./src/app/views/buttons/admin/symptoms/symptoms.component.ts");
/* harmony import */ var _admin_specializations_specializations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/specializations/specializations.component */ "./src/app/views/buttons/admin/specializations/specializations.component.ts");
/* harmony import */ var _admin_appusers_appusers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/appusers/appusers.component */ "./src/app/views/buttons/admin/appusers/appusers.component.ts");
/* harmony import */ var _bookings_viewbookingform_viewbookingform_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookings/viewbookingform/viewbookingform.component */ "./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.ts");
/* harmony import */ var _bookings_viewbookingestimation_viewbookingestimation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bookings/viewbookingestimation/viewbookingestimation.component */ "./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.ts");
/* harmony import */ var _otplogin_otplogin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./otplogin/otplogin.component */ "./src/app/views/buttons/otplogin/otplogin.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/views/buttons/payments/payments.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/views/buttons/notifications/notifications.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/views/buttons/downloads/downloads.component.ts");
/* harmony import */ var _bookings_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bookings/checkin/checkin.component */ "./src/app/views/buttons/bookings/checkin/checkin.component.ts");
/* harmony import */ var _bookings_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bookings/checkout/checkout.component */ "./src/app/views/buttons/bookings/checkout/checkout.component.ts");
/* harmony import */ var _slotmanagement_slot_booking_slot_booking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./slotmanagement/slot-booking/slot-booking.component */ "./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.ts");
/* harmony import */ var _slotmanagement_slot_blocking_slot_blocking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./slotmanagement/slot-blocking/slot-blocking.component */ "./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.ts");
/* harmony import */ var _qrcode_qrcodegeneration_qrcodegeneration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./qrcode/qrcodegeneration/qrcodegeneration.component */ "./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.ts");






















var routes = [
    {
        path: '',
        data: {
            title: 'Buttons'
        },
        children: [
            {
                path: '',
                redirectTo: 'buttons'
            },
            {
                path: 'Home_banner',
                component: _admin_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_3__["HomeBannerComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'admin_user_list',
                component: _admin_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_4__["AdminuserlistComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'admin_user_create',
                component: _admin_adminusercreate_adminusercreate_component__WEBPACK_IMPORTED_MODULE_5__["AdminusercreateComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'accessroll',
                component: _admin_accessroll_accessroll_component__WEBPACK_IMPORTED_MODULE_6__["AccessrollComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'subcatdoctor',
                component: _admin_subcatdoctor_subcatdoctor_component__WEBPACK_IMPORTED_MODULE_7__["SubcatdoctorComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'symptoms',
                component: _admin_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_8__["SymptomsComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'specializations',
                component: _admin_specializations_specializations_component__WEBPACK_IMPORTED_MODULE_9__["SpecializationsComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'Appuserlist',
                component: _admin_appusers_appusers_component__WEBPACK_IMPORTED_MODULE_10__["AppusersComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'view_bookings',
                component: _bookings_viewbookingform_viewbookingform_component__WEBPACK_IMPORTED_MODULE_11__["ViewbookingformComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'view_estimation',
                component: _bookings_viewbookingestimation_viewbookingestimation_component__WEBPACK_IMPORTED_MODULE_12__["ViewbookingestimationComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'checkin',
                component: _bookings_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_17__["CheckinComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'checkout',
                component: _bookings_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__["CheckoutComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'slotbooking',
                component: _slotmanagement_slot_booking_slot_booking_component__WEBPACK_IMPORTED_MODULE_19__["SlotBookingComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'slotblocking',
                component: _slotmanagement_slot_blocking_slot_blocking_component__WEBPACK_IMPORTED_MODULE_20__["SlotBlockingComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'login_1',
                component: _otplogin_otplogin_component__WEBPACK_IMPORTED_MODULE_13__["OtploginComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'QRCodeGeneration',
                component: _qrcode_qrcodegeneration_qrcodegeneration_component__WEBPACK_IMPORTED_MODULE_21__["QrcodegenerationComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'payments',
                component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_14__["PaymentsComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__["NotificationsComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
            {
                path: 'downloads',
                component: _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_16__["DownloadsComponent"],
                data: {
                    title: 'Brand buttons'
                }
            },
        ]
    }
];
var ButtonsRoutingModule = /** @class */ (function () {
    function ButtonsRoutingModule() {
    }
    ButtonsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ButtonsRoutingModule);
    return ButtonsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/buttons/buttons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/buttons/buttons.module.ts ***!
  \*************************************************/
/*! exports provided: ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _buttons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons-routing.module */ "./src/app/views/buttons/buttons-routing.module.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _admin_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/adminuserlist/adminuserlist.component */ "./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.ts");
/* harmony import */ var _admin_adminusercreate_adminusercreate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/adminusercreate/adminusercreate.component */ "./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.ts");
/* harmony import */ var _admin_accessroll_accessroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/accessroll/accessroll.component */ "./src/app/views/buttons/admin/accessroll/accessroll.component.ts");
/* harmony import */ var _admin_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/home-banner/home-banner.component */ "./src/app/views/buttons/admin/home-banner/home-banner.component.ts");
/* harmony import */ var _admin_subcatdoctor_subcatdoctor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/subcatdoctor/subcatdoctor.component */ "./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.ts");
/* harmony import */ var _admin_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/symptoms/symptoms.component */ "./src/app/views/buttons/admin/symptoms/symptoms.component.ts");
/* harmony import */ var _admin_specializations_specializations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/specializations/specializations.component */ "./src/app/views/buttons/admin/specializations/specializations.component.ts");
/* harmony import */ var _admin_appusers_appusers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/appusers/appusers.component */ "./src/app/views/buttons/admin/appusers/appusers.component.ts");
/* harmony import */ var _bookings_viewbookingform_viewbookingform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bookings/viewbookingform/viewbookingform.component */ "./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.ts");
/* harmony import */ var _otplogin_otplogin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./otplogin/otplogin.component */ "./src/app/views/buttons/otplogin/otplogin.component.ts");
/* harmony import */ var _bookings_viewbookingestimation_viewbookingestimation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bookings/viewbookingestimation/viewbookingestimation.component */ "./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/views/buttons/payments/payments.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/views/buttons/notifications/notifications.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/views/buttons/downloads/downloads.component.ts");
/* harmony import */ var _slotmanagement_slot_blocking_slot_blocking_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./slotmanagement/slot-blocking/slot-blocking.component */ "./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.ts");
/* harmony import */ var _slotmanagement_slot_booking_slot_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slotmanagement/slot-booking/slot-booking.component */ "./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.ts");
/* harmony import */ var _bookings_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bookings/checkin/checkin.component */ "./src/app/views/buttons/bookings/checkin/checkin.component.ts");
/* harmony import */ var _bookings_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bookings/checkout/checkout.component */ "./src/app/views/buttons/bookings/checkout/checkout.component.ts");
/* harmony import */ var _qrcode_qrcodegeneration_qrcodegeneration_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./qrcode/qrcodegeneration/qrcodegeneration.component */ "./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.ts");




// Dropdowns Component

// Buttons Routing





















// Angular
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"],
                _buttons_routing_module__WEBPACK_IMPORTED_MODULE_5__["ButtonsRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _admin_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_7__["AdminuserlistComponent"],
                _admin_adminusercreate_adminusercreate_component__WEBPACK_IMPORTED_MODULE_8__["AdminusercreateComponent"],
                _admin_accessroll_accessroll_component__WEBPACK_IMPORTED_MODULE_9__["AccessrollComponent"],
                _admin_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_10__["HomeBannerComponent"],
                _admin_subcatdoctor_subcatdoctor_component__WEBPACK_IMPORTED_MODULE_11__["SubcatdoctorComponent"],
                _admin_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_12__["SymptomsComponent"],
                _admin_specializations_specializations_component__WEBPACK_IMPORTED_MODULE_13__["SpecializationsComponent"],
                _admin_appusers_appusers_component__WEBPACK_IMPORTED_MODULE_14__["AppusersComponent"],
                _bookings_viewbookingform_viewbookingform_component__WEBPACK_IMPORTED_MODULE_15__["ViewbookingformComponent"],
                _otplogin_otplogin_component__WEBPACK_IMPORTED_MODULE_16__["OtploginComponent"],
                _bookings_viewbookingestimation_viewbookingestimation_component__WEBPACK_IMPORTED_MODULE_17__["ViewbookingestimationComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_18__["PaymentsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_19__["NotificationsComponent"],
                _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_20__["DownloadsComponent"],
                _slotmanagement_slot_blocking_slot_blocking_component__WEBPACK_IMPORTED_MODULE_21__["SlotBlockingComponent"],
                _slotmanagement_slot_booking_slot_booking_component__WEBPACK_IMPORTED_MODULE_22__["SlotBookingComponent"],
                _bookings_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_23__["CheckinComponent"],
                _bookings_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_24__["CheckoutComponent"],
                _qrcode_qrcodegeneration_qrcodegeneration_component__WEBPACK_IMPORTED_MODULE_25__["QrcodegenerationComponent"],
            ]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());



/***/ }),

/***/ "./src/app/views/buttons/downloads/downloads.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/buttons/downloads/downloads.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/buttons/downloads/downloads.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/buttons/downloads/downloads.component.ts ***!
  \****************************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent() {
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    DownloadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! raw-loader!./downloads.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.scss */ "./src/app/views/buttons/downloads/downloads.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/notifications/notifications.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/buttons/notifications/notifications.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/buttons/notifications/notifications.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/buttons/notifications/notifications.component.ts ***!
  \************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/views/buttons/notifications/notifications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/otplogin/otplogin.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/buttons/otplogin/otplogin.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_box {\n  position: relative;\n  top: 0px;\n  width: 100%;\n  height: 100vh;\n  max-height: 100vh;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f1f1f1;\n  background-image: url('Professional-Car-Mechanic.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.login_box_inner {\n  display: contents;\n  background-color: #fff;\n  padding: 50px;\n  border-radius: 8px;\n  box-shadow: 0px 0px 10px 0px #dadada;\n}\n\n.form-control {\n  border: 1px solid #323b92;\n}\n\n.login_form {\n  margin: 10px 0px;\n}\n\n.card .card-body {\n  text-align: left !important;\n}\n\n.form-control {\n  width: 300px !important;\n}\n\n.logo img {\n  margin: 0px 0px 24px 32%;\n  width: 100px;\n}\n\n.justify-center {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9vdHBsb2dpbi9FOlxcUGFya2luZ1ZlbmRvclBhbmVsL3NyY1xcYXBwXFx2aWV3c1xcYnV0dG9uc1xcb3RwbG9naW5cXG90cGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9idXR0b25zL290cGxvZ2luL290cGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsMkJBQUE7QUNHSjs7QURDRTtFQUNFLHVCQUFBO0FDRUo7O0FEQUU7RUFDRSx3QkFBQTtFQUNDLFlBQUE7QUNHTDs7QURDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYnV0dG9ucy9vdHBsb2dpbi9vdHBsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYnJhbmQvUHJvZmVzc2lvbmFsLUNhci1NZWNoYW5pYy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbl9ib3hfaW5uZXIge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggI2RhZGFkYTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzYjkyO1xyXG4gIH1cclxuICAubG9naW5fZm9ybSB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIH1cclxuICAuY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAvLyBib3gtc2hhZG93OiAwIDAgMzZweCAjZmYwMDAwO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubG9nbyBpbWcge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDI0cHggMzIlO1xyXG4gICAgIHdpZHRoOiAxMDBweDtcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAuanVzdGlmeS1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAvLyAubG9nbyB7XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICB3aWR0aDogNTAwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDIwMHB4O1xyXG4gIC8vICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9icmFuZC9sb2dvMS5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vIH1cclxuICAvLyAubG9nbzpob3ZlciB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JyYW5kL2xvZ28yLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgLy8gfSIsIi5sb2dpbl9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JyYW5kL1Byb2Zlc3Npb25hbC1DYXItTWVjaGFuaWMuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubG9naW5fYm94X2lubmVyIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjZGFkYWRhO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyM2I5Mjtcbn1cblxuLmxvZ2luX2Zvcm0ge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIGltZyB7XG4gIG1hcmdpbjogMHB4IDBweCAyNHB4IDMyJTtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uanVzdGlmeS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/buttons/otplogin/otplogin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/buttons/otplogin/otplogin.component.ts ***!
  \**************************************************************/
/*! exports provided: OtploginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtploginComponent", function() { return OtploginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OtploginComponent = /** @class */ (function () {
    function OtploginComponent() {
    }
    OtploginComponent.prototype.ngOnInit = function () {
    };
    OtploginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otplogin',
            template: __webpack_require__(/*! raw-loader!./otplogin.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/otplogin/otplogin.component.html"),
            styles: [__webpack_require__(/*! ./otplogin.component.scss */ "./src/app/views/buttons/otplogin/otplogin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OtploginComponent);
    return OtploginComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/payments/payments.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/buttons/payments/payments.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/buttons/payments/payments.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/buttons/payments/payments.component.ts ***!
  \**************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent() {
    }
    PaymentsComponent.prototype.ngOnInit = function () {
    };
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! raw-loader!./payments.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/views/buttons/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvcXJjb2RlL3FyY29kZWdlbmVyYXRpb24vcXJjb2RlZ2VuZXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: QrcodegenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodegenerationComponent", function() { return QrcodegenerationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QrcodegenerationComponent = /** @class */ (function () {
    function QrcodegenerationComponent() {
    }
    QrcodegenerationComponent.prototype.ngOnInit = function () {
    };
    QrcodegenerationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qrcodegeneration',
            template: __webpack_require__(/*! raw-loader!./qrcodegeneration.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.html"),
            styles: [__webpack_require__(/*! ./qrcodegeneration.component.scss */ "./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QrcodegenerationComponent);
    return QrcodegenerationComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvc2xvdG1hbmFnZW1lbnQvc2xvdC1ibG9ja2luZy9zbG90LWJsb2NraW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SlotBlockingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotBlockingComponent", function() { return SlotBlockingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlotBlockingComponent = /** @class */ (function () {
    function SlotBlockingComponent() {
    }
    SlotBlockingComponent.prototype.ngOnInit = function () {
    };
    SlotBlockingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slot-blocking',
            template: __webpack_require__(/*! raw-loader!./slot-blocking.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.html"),
            styles: [__webpack_require__(/*! ./slot-blocking.component.scss */ "./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlotBlockingComponent);
    return SlotBlockingComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvc2xvdG1hbmFnZW1lbnQvc2xvdC1ib29raW5nL3Nsb3QtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SlotBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotBookingComponent", function() { return SlotBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");






var SlotBookingComponent = /** @class */ (function () {
    function SlotBookingComponent(router, http, _api, storage) {
        this.router = router;
        this.http = http;
        this._api = _api;
        this.storage = storage;
        this.Included_new = [];
        this.include_list = [];
        this.Included_new1 = [];
        this.include_list1 = [];
        this.Included_new2 = [];
        this.include_list2 = [];
        this.Included_new3 = [];
        this.include_list3 = [];
        this.Included_new4 = [];
        this.include_list4 = [];
        this.Included_new5 = [];
        this.include_list5 = [];
        this.Included_new6 = [];
        this.include_list6 = [];
        this.Included_new7 = [];
        this.include_list7 = [];
        this.bike_inlcude1 = [];
        this.bike_inlcude2 = [];
        this.include_bike1 = [];
        this.include_bike2 = [];
    }
    SlotBookingComponent.prototype.ngOnInit = function () {
        this.carslot = false;
        this.bikeslot = false;
        this.VehicleType = " ";
        this.AreaName = " ";
        this.SubAreaName = "";
        this.RentperTime = "";
        this.SlotNumber = "";
        this.timefor = "";
    };
    SlotBookingComponent.prototype.showbikeslot = function () {
        this.bikeslot = true;
    };
    SlotBookingComponent.prototype.showcarslot = function () {
        this.carslot = true;
    };
    SlotBookingComponent.prototype.openmechanicbookings = function () {
        this.router.navigate(['Home/buttons/slotblocking']);
    };
    SlotBookingComponent.prototype.addbikeslot = function () {
        this.bikeslot1 = this.bikeslots;
        for (var a = 0; a < this.bikeslot1; a++) {
            this.include_bike1.push(this.bikeslot1);
            console.log(this.include_bike1);
        }
        this.bikeslots = "";
    };
    SlotBookingComponent.prototype.deletebike = function (i) {
        this.include_bike1.splice(i, 1);
    };
    SlotBookingComponent.prototype.addcarslot = function () {
        this.bikeslot2 = this.carslots;
        for (var a = 0; a < this.bikeslot2; a++) {
            this.include_bike2.push(this.bikeslot2);
            console.log(this.include_bike2);
        }
        this.carslots = "";
    };
    SlotBookingComponent.prototype.deletcar = function (i) {
        this.include_bike2.splice(i, 1);
    };
    SlotBookingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"],] }] }
    ]; };
    SlotBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slot-booking',
            template: __webpack_require__(/*! raw-loader!./slot-booking.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.html"),
            styles: [__webpack_require__(/*! ./slot-booking.component.scss */ "./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], Object])
    ], SlotBookingComponent);
    return SlotBookingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-buttons-buttons-module.js.map