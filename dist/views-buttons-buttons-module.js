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

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var MILLISECONDS_IN_MINUTE = 60000

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
module.exports = function getTimezoneOffsetInMilliseconds (dirtyDate) {
  var date = new Date(dirtyDate.getTime())
  var baseTimezoneOffset = date.getTimezoneOffset()
  date.setSeconds(0, 0)
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}


/***/ }),

/***/ "./node_modules/date-fns/add_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/add_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "./node_modules/date-fns/add_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_hours/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ "./node_modules/date-fns/add_iso_years/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/add_iso_years/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var setISOYear = __webpack_require__(/*! ../set_iso_year/index.js */ "./node_modules/date-fns/set_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @returns {Date} the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
}

module.exports = addISOYears


/***/ }),

/***/ "./node_modules/date-fns/add_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/add_milliseconds/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/add_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/add_minutes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ "./node_modules/date-fns/add_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/add_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "./node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "./node_modules/date-fns/add_quarters/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/add_quarters/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(/*! ../add_months/index.js */ "./node_modules/date-fns/add_months/index.js")

/**
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @returns {Date} the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters


/***/ }),

/***/ "./node_modules/date-fns/add_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/add_seconds/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ "./node_modules/date-fns/add_weeks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_weeks/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ "./node_modules/date-fns/add_years/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_years/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(/*! ../add_months/index.js */ "./node_modules/date-fns/add_months/index.js")

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}

module.exports = addYears


/***/ }),

/***/ "./node_modules/date-fns/are_ranges_overlapping/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/are_ranges_overlapping/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
}

module.exports = areRangesOverlapping


/***/ }),

/***/ "./node_modules/date-fns/closest_index_to/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/closest_index_to/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}

module.exports = closestIndexTo


/***/ }),

/***/ "./node_modules/date-fns/closest_to/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/closest_to/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}

module.exports = closestTo


/***/ }),

/***/ "./node_modules/date-fns/compare_asc/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/compare_asc/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "./node_modules/date-fns/compare_desc/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/compare_desc/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft > timeRight) {
    return -1
  } else if (timeLeft < timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareDesc


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  var timestampLeft = startOfISOWeekLeft.getTime() -
    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfISOWeekRight.getTime() -
    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarISOWeeks


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_iso_years/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_iso_years/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)
}

module.exports = differenceInCalendarISOYears


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_months/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_months/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

  return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_quarters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_quarters/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getQuarter = __webpack_require__(/*! ../get_quarter/index.js */ "./node_modules/date-fns/get_quarter/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)

  return yearDiff * 4 + quarterDiff
}

module.exports = differenceInCalendarQuarters


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_weeks/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_weeks/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

  var timestampLeft = startOfWeekLeft.getTime() -
    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfWeekRight.getTime() -
    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarWeeks


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_years/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_years/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  return dateLeft.getFullYear() - dateRight.getFullYear()
}

module.exports = differenceInCalendarYears


/***/ }),

/***/ "./node_modules/date-fns/difference_in_days/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/difference_in_days/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js")

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ "./node_modules/date-fns/difference_in_hours/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_hours/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInHours


/***/ }),

/***/ "./node_modules/date-fns/difference_in_iso_years/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_iso_years/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInCalendarISOYears = __webpack_require__(/*! ../difference_in_calendar_iso_years/index.js */ "./node_modules/date-fns/difference_in_calendar_iso_years/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js")
var subISOYears = __webpack_require__(/*! ../sub_iso_years/index.js */ "./node_modules/date-fns/sub_iso_years/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))
  dateLeft = subISOYears(dateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastISOYearNotFull)
}

module.exports = differenceInISOYears


/***/ }),

/***/ "./node_modules/date-fns/difference_in_milliseconds/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_milliseconds/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/difference_in_minutes/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_minutes/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ "./node_modules/date-fns/difference_in_months/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_months/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInCalendarMonths = __webpack_require__(/*! ../difference_in_calendar_months/index.js */ "./node_modules/date-fns/difference_in_calendar_months/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastMonthNotFull)
}

module.exports = differenceInMonths


/***/ }),

/***/ "./node_modules/date-fns/difference_in_quarters/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_quarters/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMonths = __webpack_require__(/*! ../difference_in_months/index.js */ "./node_modules/date-fns/difference_in_months/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInQuarters


/***/ }),

/***/ "./node_modules/date-fns/difference_in_seconds/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_seconds/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "./node_modules/date-fns/difference_in_weeks/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_weeks/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInDays = __webpack_require__(/*! ../difference_in_days/index.js */ "./node_modules/date-fns/difference_in_days/index.js")

/**
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 2
 */
function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInWeeks


/***/ }),

/***/ "./node_modules/date-fns/difference_in_years/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_years/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInCalendarYears = __webpack_require__(/*! ../difference_in_calendar_years/index.js */ "./node_modules/date-fns/difference_in_calendar_years/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastYearNotFull)
}

module.exports = differenceInYears


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(/*! ../compare_desc/index.js */ "./node_modules/date-fns/compare_desc/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__(/*! ../difference_in_seconds/index.js */ "./node_modules/date-fns/difference_in_seconds/index.js")
var differenceInMonths = __webpack_require__(/*! ../difference_in_months/index.js */ "./node_modules/date-fns/difference_in_months/index.js")
var enLocale = __webpack_require__(/*! ../locale/en/index.js */ "./node_modules/date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', minutes, localizeOptions)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return localize('aboutXHours', hours, localizeOptions)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', nearestMonth, localizeOptions)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions)

    // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions)
    }
  }
}

module.exports = distanceInWords


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words_strict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words_strict/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(/*! ../compare_desc/index.js */ "./node_modules/date-fns/compare_desc/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__(/*! ../difference_in_seconds/index.js */ "./node_modules/date-fns/difference_in_seconds/index.js")
var enLocale = __webpack_require__(/*! ../locale/en/index.js */ "./node_modules/date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_YEAR = 525600

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWordsStrict(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {unit: 'm'}
 * )
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 28 January 2015, in months, rounded up?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 28),
 *   new Date(2015, 0, 1),
 *   {unit: 'M', partialMethod: 'ceil'}
 * )
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsStrict(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var unit
  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']
  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = mathPartial(seconds / 60) - offset
  var hours, days, months, years

  if (options.unit) {
    unit = String(options.unit)
  } else {
    if (minutes < 1) {
      unit = 's'
    } else if (minutes < 60) {
      unit = 'm'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'h'
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'd'
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'M'
    } else {
      unit = 'Y'
    }
  }

  // 0 up to 60 seconds
  if (unit === 's') {
    return localize('xSeconds', seconds, localizeOptions)

  // 1 up to 60 mins
  } else if (unit === 'm') {
    return localize('xMinutes', minutes, localizeOptions)

  // 1 up to 24 hours
  } else if (unit === 'h') {
    hours = mathPartial(minutes / 60)
    return localize('xHours', hours, localizeOptions)

  // 1 up to 30 days
  } else if (unit === 'd') {
    days = mathPartial(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 up to 12 months
  } else if (unit === 'M') {
    months = mathPartial(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', months, localizeOptions)

  // 1 year up to max Date
  } else if (unit === 'Y') {
    years = mathPartial(minutes / MINUTES_IN_YEAR)
    return localize('xYears', years, localizeOptions)
  }

  throw new Error('Unknown unit: ' + unit)
}

module.exports = distanceInWordsStrict


/***/ }),

/***/ "./node_modules/date-fns/distance_in_words_to_now/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/distance_in_words_to_now/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var distanceInWords = __webpack_require__(/*! ../distance_in_words/index.js */ "./node_modules/date-fns/distance_in_words/index.js")

/**
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = distanceInWordsToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = distanceInWordsToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = distanceInWordsToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWordsToNow (dirtyDate, dirtyOptions) {
  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
}

module.exports = distanceInWordsToNow


/***/ }),

/***/ "./node_modules/date-fns/each_day/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/each_day/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the first date
 * @param {Date|String|Number} endDate - the last date
 * @param {Number} [step=1] - the step between each day
 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDay(
 *   new Date(2014, 9, 6),
 *   new Date(2014, 9, 10)
 * )
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)
  var step = dirtyStep !== undefined ? dirtyStep : 1

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The first date cannot be after the second date')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(parse(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
  }

  return dates
}

module.exports = eachDay


/***/ }),

/***/ "./node_modules/date-fns/end_of_day/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/end_of_day/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ "./node_modules/date-fns/end_of_hour/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_hour/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(59, 59, 999)
  return date
}

module.exports = endOfHour


/***/ }),

/***/ "./node_modules/date-fns/end_of_iso_week/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/end_of_iso_week/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var endOfWeek = __webpack_require__(/*! ../end_of_week/index.js */ "./node_modules/date-fns/end_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek (dirtyDate) {
  return endOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = endOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/end_of_iso_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/end_of_iso_year/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * var result = endOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}

module.exports = endOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/end_of_minute/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/end_of_minute/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(59, 999)
  return date
}

module.exports = endOfMinute


/***/ }),

/***/ "./node_modules/date-fns/end_of_month/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/end_of_month/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "./node_modules/date-fns/end_of_quarter/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/end_of_quarter/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfQuarter


/***/ }),

/***/ "./node_modules/date-fns/end_of_second/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/end_of_second/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond


/***/ }),

/***/ "./node_modules/date-fns/end_of_today/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/end_of_today/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var endOfDay = __webpack_require__(/*! ../end_of_day/index.js */ "./node_modules/date-fns/end_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday () {
  return endOfDay(new Date())
}

module.exports = endOfToday


/***/ }),

/***/ "./node_modules/date-fns/end_of_tomorrow/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/end_of_tomorrow/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 *
 * @description
 * Return the end of tomorrow.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfTomorrow


/***/ }),

/***/ "./node_modules/date-fns/end_of_week/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_week/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "./node_modules/date-fns/end_of_year/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_year/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYear


/***/ }),

/***/ "./node_modules/date-fns/end_of_yesterday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/end_of_yesterday/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of yesterday.
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYesterday


/***/ }),

/***/ "./node_modules/date-fns/format/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/format/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(/*! ../get_day_of_year/index.js */ "./node_modules/date-fns/get_day_of_year/index.js")
var getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ "./node_modules/date-fns/get_iso_week/index.js")
var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var isValid = __webpack_require__(/*! ../is_valid/index.js */ "./node_modules/date-fns/is_valid/index.js")
var enLocale = __webpack_require__(/*! ../locale/en/index.js */ "./node_modules/date-fns/locale/en/index.js")

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ "./node_modules/date-fns/get_date/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_date/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ "./node_modules/date-fns/get_day/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/get_day/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/get_day_of_year/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfYear = __webpack_require__(/*! ../start_of_year/index.js */ "./node_modules/date-fns/start_of_year/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_month/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "./node_modules/date-fns/get_days_in_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_year/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isLeapYear = __webpack_require__(/*! ../is_leap_year/index.js */ "./node_modules/date-fns/is_leap_year/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear (dirtyDate) {
  return isLeapYear(dirtyDate) ? 366 : 365
}

module.exports = getDaysInYear


/***/ }),

/***/ "./node_modules/date-fns/get_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/get_hours/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours


/***/ }),

/***/ "./node_modules/date-fns/get_iso_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_day/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}

module.exports = getISODay


/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "./node_modules/date-fns/get_iso_weeks_in_year/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/get_iso_weeks_in_year/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")
var addWeeks = __webpack_require__(/*! ../add_weeks/index.js */ "./node_modules/date-fns/add_weeks/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear (dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear


/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "./node_modules/date-fns/get_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/get_milliseconds/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds (dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/get_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_minutes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes


/***/ }),

/***/ "./node_modules/date-fns/get_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/get_month/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "./node_modules/date-fns/get_overlapping_days_in_ranges/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/get_overlapping_days_in_ranges/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

/**
 * @category Range Helpers
 * @summary Get the number of days that overlap in two date ranges
 *
 * @description
 * Get the number of days that overlap in two date ranges
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Number} the number of days that overlap in two date ranges
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges adds 1 for each started overlapping day:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping date ranges returns 0:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> 0
 */
function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime

  if (!isOverlapping) {
    return 0
  }

  var overlapStartDate = comparedStartTime < initialStartTime
    ? initialStartTime
    : comparedStartTime

  var overlapEndDate = comparedEndTime > initialEndTime
    ? initialEndTime
    : comparedEndTime

  var differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}

module.exports = getOverlappingDaysInRanges


/***/ }),

/***/ "./node_modules/date-fns/get_quarter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_quarter/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter


/***/ }),

/***/ "./node_modules/date-fns/get_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/get_seconds/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds (dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds


/***/ }),

/***/ "./node_modules/date-fns/get_time/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_time/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime (dirtyDate) {
  var date = parse(dirtyDate)
  var timestamp = date.getTime()
  return timestamp
}

module.exports = getTime


/***/ }),

/***/ "./node_modules/date-fns/get_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_year/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "./node_modules/date-fns/index.js":
/*!****************************************!*\
  !*** ./node_modules/date-fns/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  addDays: __webpack_require__(/*! ./add_days/index.js */ "./node_modules/date-fns/add_days/index.js"),
  addHours: __webpack_require__(/*! ./add_hours/index.js */ "./node_modules/date-fns/add_hours/index.js"),
  addISOYears: __webpack_require__(/*! ./add_iso_years/index.js */ "./node_modules/date-fns/add_iso_years/index.js"),
  addMilliseconds: __webpack_require__(/*! ./add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js"),
  addMinutes: __webpack_require__(/*! ./add_minutes/index.js */ "./node_modules/date-fns/add_minutes/index.js"),
  addMonths: __webpack_require__(/*! ./add_months/index.js */ "./node_modules/date-fns/add_months/index.js"),
  addQuarters: __webpack_require__(/*! ./add_quarters/index.js */ "./node_modules/date-fns/add_quarters/index.js"),
  addSeconds: __webpack_require__(/*! ./add_seconds/index.js */ "./node_modules/date-fns/add_seconds/index.js"),
  addWeeks: __webpack_require__(/*! ./add_weeks/index.js */ "./node_modules/date-fns/add_weeks/index.js"),
  addYears: __webpack_require__(/*! ./add_years/index.js */ "./node_modules/date-fns/add_years/index.js"),
  areRangesOverlapping: __webpack_require__(/*! ./are_ranges_overlapping/index.js */ "./node_modules/date-fns/are_ranges_overlapping/index.js"),
  closestIndexTo: __webpack_require__(/*! ./closest_index_to/index.js */ "./node_modules/date-fns/closest_index_to/index.js"),
  closestTo: __webpack_require__(/*! ./closest_to/index.js */ "./node_modules/date-fns/closest_to/index.js"),
  compareAsc: __webpack_require__(/*! ./compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js"),
  compareDesc: __webpack_require__(/*! ./compare_desc/index.js */ "./node_modules/date-fns/compare_desc/index.js"),
  differenceInCalendarDays: __webpack_require__(/*! ./difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js"),
  differenceInCalendarISOWeeks: __webpack_require__(/*! ./difference_in_calendar_iso_weeks/index.js */ "./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js"),
  differenceInCalendarISOYears: __webpack_require__(/*! ./difference_in_calendar_iso_years/index.js */ "./node_modules/date-fns/difference_in_calendar_iso_years/index.js"),
  differenceInCalendarMonths: __webpack_require__(/*! ./difference_in_calendar_months/index.js */ "./node_modules/date-fns/difference_in_calendar_months/index.js"),
  differenceInCalendarQuarters: __webpack_require__(/*! ./difference_in_calendar_quarters/index.js */ "./node_modules/date-fns/difference_in_calendar_quarters/index.js"),
  differenceInCalendarWeeks: __webpack_require__(/*! ./difference_in_calendar_weeks/index.js */ "./node_modules/date-fns/difference_in_calendar_weeks/index.js"),
  differenceInCalendarYears: __webpack_require__(/*! ./difference_in_calendar_years/index.js */ "./node_modules/date-fns/difference_in_calendar_years/index.js"),
  differenceInDays: __webpack_require__(/*! ./difference_in_days/index.js */ "./node_modules/date-fns/difference_in_days/index.js"),
  differenceInHours: __webpack_require__(/*! ./difference_in_hours/index.js */ "./node_modules/date-fns/difference_in_hours/index.js"),
  differenceInISOYears: __webpack_require__(/*! ./difference_in_iso_years/index.js */ "./node_modules/date-fns/difference_in_iso_years/index.js"),
  differenceInMilliseconds: __webpack_require__(/*! ./difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js"),
  differenceInMinutes: __webpack_require__(/*! ./difference_in_minutes/index.js */ "./node_modules/date-fns/difference_in_minutes/index.js"),
  differenceInMonths: __webpack_require__(/*! ./difference_in_months/index.js */ "./node_modules/date-fns/difference_in_months/index.js"),
  differenceInQuarters: __webpack_require__(/*! ./difference_in_quarters/index.js */ "./node_modules/date-fns/difference_in_quarters/index.js"),
  differenceInSeconds: __webpack_require__(/*! ./difference_in_seconds/index.js */ "./node_modules/date-fns/difference_in_seconds/index.js"),
  differenceInWeeks: __webpack_require__(/*! ./difference_in_weeks/index.js */ "./node_modules/date-fns/difference_in_weeks/index.js"),
  differenceInYears: __webpack_require__(/*! ./difference_in_years/index.js */ "./node_modules/date-fns/difference_in_years/index.js"),
  distanceInWords: __webpack_require__(/*! ./distance_in_words/index.js */ "./node_modules/date-fns/distance_in_words/index.js"),
  distanceInWordsStrict: __webpack_require__(/*! ./distance_in_words_strict/index.js */ "./node_modules/date-fns/distance_in_words_strict/index.js"),
  distanceInWordsToNow: __webpack_require__(/*! ./distance_in_words_to_now/index.js */ "./node_modules/date-fns/distance_in_words_to_now/index.js"),
  eachDay: __webpack_require__(/*! ./each_day/index.js */ "./node_modules/date-fns/each_day/index.js"),
  endOfDay: __webpack_require__(/*! ./end_of_day/index.js */ "./node_modules/date-fns/end_of_day/index.js"),
  endOfHour: __webpack_require__(/*! ./end_of_hour/index.js */ "./node_modules/date-fns/end_of_hour/index.js"),
  endOfISOWeek: __webpack_require__(/*! ./end_of_iso_week/index.js */ "./node_modules/date-fns/end_of_iso_week/index.js"),
  endOfISOYear: __webpack_require__(/*! ./end_of_iso_year/index.js */ "./node_modules/date-fns/end_of_iso_year/index.js"),
  endOfMinute: __webpack_require__(/*! ./end_of_minute/index.js */ "./node_modules/date-fns/end_of_minute/index.js"),
  endOfMonth: __webpack_require__(/*! ./end_of_month/index.js */ "./node_modules/date-fns/end_of_month/index.js"),
  endOfQuarter: __webpack_require__(/*! ./end_of_quarter/index.js */ "./node_modules/date-fns/end_of_quarter/index.js"),
  endOfSecond: __webpack_require__(/*! ./end_of_second/index.js */ "./node_modules/date-fns/end_of_second/index.js"),
  endOfToday: __webpack_require__(/*! ./end_of_today/index.js */ "./node_modules/date-fns/end_of_today/index.js"),
  endOfTomorrow: __webpack_require__(/*! ./end_of_tomorrow/index.js */ "./node_modules/date-fns/end_of_tomorrow/index.js"),
  endOfWeek: __webpack_require__(/*! ./end_of_week/index.js */ "./node_modules/date-fns/end_of_week/index.js"),
  endOfYear: __webpack_require__(/*! ./end_of_year/index.js */ "./node_modules/date-fns/end_of_year/index.js"),
  endOfYesterday: __webpack_require__(/*! ./end_of_yesterday/index.js */ "./node_modules/date-fns/end_of_yesterday/index.js"),
  format: __webpack_require__(/*! ./format/index.js */ "./node_modules/date-fns/format/index.js"),
  getDate: __webpack_require__(/*! ./get_date/index.js */ "./node_modules/date-fns/get_date/index.js"),
  getDay: __webpack_require__(/*! ./get_day/index.js */ "./node_modules/date-fns/get_day/index.js"),
  getDayOfYear: __webpack_require__(/*! ./get_day_of_year/index.js */ "./node_modules/date-fns/get_day_of_year/index.js"),
  getDaysInMonth: __webpack_require__(/*! ./get_days_in_month/index.js */ "./node_modules/date-fns/get_days_in_month/index.js"),
  getDaysInYear: __webpack_require__(/*! ./get_days_in_year/index.js */ "./node_modules/date-fns/get_days_in_year/index.js"),
  getHours: __webpack_require__(/*! ./get_hours/index.js */ "./node_modules/date-fns/get_hours/index.js"),
  getISODay: __webpack_require__(/*! ./get_iso_day/index.js */ "./node_modules/date-fns/get_iso_day/index.js"),
  getISOWeek: __webpack_require__(/*! ./get_iso_week/index.js */ "./node_modules/date-fns/get_iso_week/index.js"),
  getISOWeeksInYear: __webpack_require__(/*! ./get_iso_weeks_in_year/index.js */ "./node_modules/date-fns/get_iso_weeks_in_year/index.js"),
  getISOYear: __webpack_require__(/*! ./get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js"),
  getMilliseconds: __webpack_require__(/*! ./get_milliseconds/index.js */ "./node_modules/date-fns/get_milliseconds/index.js"),
  getMinutes: __webpack_require__(/*! ./get_minutes/index.js */ "./node_modules/date-fns/get_minutes/index.js"),
  getMonth: __webpack_require__(/*! ./get_month/index.js */ "./node_modules/date-fns/get_month/index.js"),
  getOverlappingDaysInRanges: __webpack_require__(/*! ./get_overlapping_days_in_ranges/index.js */ "./node_modules/date-fns/get_overlapping_days_in_ranges/index.js"),
  getQuarter: __webpack_require__(/*! ./get_quarter/index.js */ "./node_modules/date-fns/get_quarter/index.js"),
  getSeconds: __webpack_require__(/*! ./get_seconds/index.js */ "./node_modules/date-fns/get_seconds/index.js"),
  getTime: __webpack_require__(/*! ./get_time/index.js */ "./node_modules/date-fns/get_time/index.js"),
  getYear: __webpack_require__(/*! ./get_year/index.js */ "./node_modules/date-fns/get_year/index.js"),
  isAfter: __webpack_require__(/*! ./is_after/index.js */ "./node_modules/date-fns/is_after/index.js"),
  isBefore: __webpack_require__(/*! ./is_before/index.js */ "./node_modules/date-fns/is_before/index.js"),
  isDate: __webpack_require__(/*! ./is_date/index.js */ "./node_modules/date-fns/is_date/index.js"),
  isEqual: __webpack_require__(/*! ./is_equal/index.js */ "./node_modules/date-fns/is_equal/index.js"),
  isFirstDayOfMonth: __webpack_require__(/*! ./is_first_day_of_month/index.js */ "./node_modules/date-fns/is_first_day_of_month/index.js"),
  isFriday: __webpack_require__(/*! ./is_friday/index.js */ "./node_modules/date-fns/is_friday/index.js"),
  isFuture: __webpack_require__(/*! ./is_future/index.js */ "./node_modules/date-fns/is_future/index.js"),
  isLastDayOfMonth: __webpack_require__(/*! ./is_last_day_of_month/index.js */ "./node_modules/date-fns/is_last_day_of_month/index.js"),
  isLeapYear: __webpack_require__(/*! ./is_leap_year/index.js */ "./node_modules/date-fns/is_leap_year/index.js"),
  isMonday: __webpack_require__(/*! ./is_monday/index.js */ "./node_modules/date-fns/is_monday/index.js"),
  isPast: __webpack_require__(/*! ./is_past/index.js */ "./node_modules/date-fns/is_past/index.js"),
  isSameDay: __webpack_require__(/*! ./is_same_day/index.js */ "./node_modules/date-fns/is_same_day/index.js"),
  isSameHour: __webpack_require__(/*! ./is_same_hour/index.js */ "./node_modules/date-fns/is_same_hour/index.js"),
  isSameISOWeek: __webpack_require__(/*! ./is_same_iso_week/index.js */ "./node_modules/date-fns/is_same_iso_week/index.js"),
  isSameISOYear: __webpack_require__(/*! ./is_same_iso_year/index.js */ "./node_modules/date-fns/is_same_iso_year/index.js"),
  isSameMinute: __webpack_require__(/*! ./is_same_minute/index.js */ "./node_modules/date-fns/is_same_minute/index.js"),
  isSameMonth: __webpack_require__(/*! ./is_same_month/index.js */ "./node_modules/date-fns/is_same_month/index.js"),
  isSameQuarter: __webpack_require__(/*! ./is_same_quarter/index.js */ "./node_modules/date-fns/is_same_quarter/index.js"),
  isSameSecond: __webpack_require__(/*! ./is_same_second/index.js */ "./node_modules/date-fns/is_same_second/index.js"),
  isSameWeek: __webpack_require__(/*! ./is_same_week/index.js */ "./node_modules/date-fns/is_same_week/index.js"),
  isSameYear: __webpack_require__(/*! ./is_same_year/index.js */ "./node_modules/date-fns/is_same_year/index.js"),
  isSaturday: __webpack_require__(/*! ./is_saturday/index.js */ "./node_modules/date-fns/is_saturday/index.js"),
  isSunday: __webpack_require__(/*! ./is_sunday/index.js */ "./node_modules/date-fns/is_sunday/index.js"),
  isThisHour: __webpack_require__(/*! ./is_this_hour/index.js */ "./node_modules/date-fns/is_this_hour/index.js"),
  isThisISOWeek: __webpack_require__(/*! ./is_this_iso_week/index.js */ "./node_modules/date-fns/is_this_iso_week/index.js"),
  isThisISOYear: __webpack_require__(/*! ./is_this_iso_year/index.js */ "./node_modules/date-fns/is_this_iso_year/index.js"),
  isThisMinute: __webpack_require__(/*! ./is_this_minute/index.js */ "./node_modules/date-fns/is_this_minute/index.js"),
  isThisMonth: __webpack_require__(/*! ./is_this_month/index.js */ "./node_modules/date-fns/is_this_month/index.js"),
  isThisQuarter: __webpack_require__(/*! ./is_this_quarter/index.js */ "./node_modules/date-fns/is_this_quarter/index.js"),
  isThisSecond: __webpack_require__(/*! ./is_this_second/index.js */ "./node_modules/date-fns/is_this_second/index.js"),
  isThisWeek: __webpack_require__(/*! ./is_this_week/index.js */ "./node_modules/date-fns/is_this_week/index.js"),
  isThisYear: __webpack_require__(/*! ./is_this_year/index.js */ "./node_modules/date-fns/is_this_year/index.js"),
  isThursday: __webpack_require__(/*! ./is_thursday/index.js */ "./node_modules/date-fns/is_thursday/index.js"),
  isToday: __webpack_require__(/*! ./is_today/index.js */ "./node_modules/date-fns/is_today/index.js"),
  isTomorrow: __webpack_require__(/*! ./is_tomorrow/index.js */ "./node_modules/date-fns/is_tomorrow/index.js"),
  isTuesday: __webpack_require__(/*! ./is_tuesday/index.js */ "./node_modules/date-fns/is_tuesday/index.js"),
  isValid: __webpack_require__(/*! ./is_valid/index.js */ "./node_modules/date-fns/is_valid/index.js"),
  isWednesday: __webpack_require__(/*! ./is_wednesday/index.js */ "./node_modules/date-fns/is_wednesday/index.js"),
  isWeekend: __webpack_require__(/*! ./is_weekend/index.js */ "./node_modules/date-fns/is_weekend/index.js"),
  isWithinRange: __webpack_require__(/*! ./is_within_range/index.js */ "./node_modules/date-fns/is_within_range/index.js"),
  isYesterday: __webpack_require__(/*! ./is_yesterday/index.js */ "./node_modules/date-fns/is_yesterday/index.js"),
  lastDayOfISOWeek: __webpack_require__(/*! ./last_day_of_iso_week/index.js */ "./node_modules/date-fns/last_day_of_iso_week/index.js"),
  lastDayOfISOYear: __webpack_require__(/*! ./last_day_of_iso_year/index.js */ "./node_modules/date-fns/last_day_of_iso_year/index.js"),
  lastDayOfMonth: __webpack_require__(/*! ./last_day_of_month/index.js */ "./node_modules/date-fns/last_day_of_month/index.js"),
  lastDayOfQuarter: __webpack_require__(/*! ./last_day_of_quarter/index.js */ "./node_modules/date-fns/last_day_of_quarter/index.js"),
  lastDayOfWeek: __webpack_require__(/*! ./last_day_of_week/index.js */ "./node_modules/date-fns/last_day_of_week/index.js"),
  lastDayOfYear: __webpack_require__(/*! ./last_day_of_year/index.js */ "./node_modules/date-fns/last_day_of_year/index.js"),
  max: __webpack_require__(/*! ./max/index.js */ "./node_modules/date-fns/max/index.js"),
  min: __webpack_require__(/*! ./min/index.js */ "./node_modules/date-fns/min/index.js"),
  parse: __webpack_require__(/*! ./parse/index.js */ "./node_modules/date-fns/parse/index.js"),
  setDate: __webpack_require__(/*! ./set_date/index.js */ "./node_modules/date-fns/set_date/index.js"),
  setDay: __webpack_require__(/*! ./set_day/index.js */ "./node_modules/date-fns/set_day/index.js"),
  setDayOfYear: __webpack_require__(/*! ./set_day_of_year/index.js */ "./node_modules/date-fns/set_day_of_year/index.js"),
  setHours: __webpack_require__(/*! ./set_hours/index.js */ "./node_modules/date-fns/set_hours/index.js"),
  setISODay: __webpack_require__(/*! ./set_iso_day/index.js */ "./node_modules/date-fns/set_iso_day/index.js"),
  setISOWeek: __webpack_require__(/*! ./set_iso_week/index.js */ "./node_modules/date-fns/set_iso_week/index.js"),
  setISOYear: __webpack_require__(/*! ./set_iso_year/index.js */ "./node_modules/date-fns/set_iso_year/index.js"),
  setMilliseconds: __webpack_require__(/*! ./set_milliseconds/index.js */ "./node_modules/date-fns/set_milliseconds/index.js"),
  setMinutes: __webpack_require__(/*! ./set_minutes/index.js */ "./node_modules/date-fns/set_minutes/index.js"),
  setMonth: __webpack_require__(/*! ./set_month/index.js */ "./node_modules/date-fns/set_month/index.js"),
  setQuarter: __webpack_require__(/*! ./set_quarter/index.js */ "./node_modules/date-fns/set_quarter/index.js"),
  setSeconds: __webpack_require__(/*! ./set_seconds/index.js */ "./node_modules/date-fns/set_seconds/index.js"),
  setYear: __webpack_require__(/*! ./set_year/index.js */ "./node_modules/date-fns/set_year/index.js"),
  startOfDay: __webpack_require__(/*! ./start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js"),
  startOfHour: __webpack_require__(/*! ./start_of_hour/index.js */ "./node_modules/date-fns/start_of_hour/index.js"),
  startOfISOWeek: __webpack_require__(/*! ./start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js"),
  startOfISOYear: __webpack_require__(/*! ./start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js"),
  startOfMinute: __webpack_require__(/*! ./start_of_minute/index.js */ "./node_modules/date-fns/start_of_minute/index.js"),
  startOfMonth: __webpack_require__(/*! ./start_of_month/index.js */ "./node_modules/date-fns/start_of_month/index.js"),
  startOfQuarter: __webpack_require__(/*! ./start_of_quarter/index.js */ "./node_modules/date-fns/start_of_quarter/index.js"),
  startOfSecond: __webpack_require__(/*! ./start_of_second/index.js */ "./node_modules/date-fns/start_of_second/index.js"),
  startOfToday: __webpack_require__(/*! ./start_of_today/index.js */ "./node_modules/date-fns/start_of_today/index.js"),
  startOfTomorrow: __webpack_require__(/*! ./start_of_tomorrow/index.js */ "./node_modules/date-fns/start_of_tomorrow/index.js"),
  startOfWeek: __webpack_require__(/*! ./start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js"),
  startOfYear: __webpack_require__(/*! ./start_of_year/index.js */ "./node_modules/date-fns/start_of_year/index.js"),
  startOfYesterday: __webpack_require__(/*! ./start_of_yesterday/index.js */ "./node_modules/date-fns/start_of_yesterday/index.js"),
  subDays: __webpack_require__(/*! ./sub_days/index.js */ "./node_modules/date-fns/sub_days/index.js"),
  subHours: __webpack_require__(/*! ./sub_hours/index.js */ "./node_modules/date-fns/sub_hours/index.js"),
  subISOYears: __webpack_require__(/*! ./sub_iso_years/index.js */ "./node_modules/date-fns/sub_iso_years/index.js"),
  subMilliseconds: __webpack_require__(/*! ./sub_milliseconds/index.js */ "./node_modules/date-fns/sub_milliseconds/index.js"),
  subMinutes: __webpack_require__(/*! ./sub_minutes/index.js */ "./node_modules/date-fns/sub_minutes/index.js"),
  subMonths: __webpack_require__(/*! ./sub_months/index.js */ "./node_modules/date-fns/sub_months/index.js"),
  subQuarters: __webpack_require__(/*! ./sub_quarters/index.js */ "./node_modules/date-fns/sub_quarters/index.js"),
  subSeconds: __webpack_require__(/*! ./sub_seconds/index.js */ "./node_modules/date-fns/sub_seconds/index.js"),
  subWeeks: __webpack_require__(/*! ./sub_weeks/index.js */ "./node_modules/date-fns/sub_weeks/index.js"),
  subYears: __webpack_require__(/*! ./sub_years/index.js */ "./node_modules/date-fns/sub_years/index.js")
}


/***/ }),

/***/ "./node_modules/date-fns/is_after/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_after/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),

/***/ "./node_modules/date-fns/is_before/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_before/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_date/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "./node_modules/date-fns/is_equal/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_equal/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),

/***/ "./node_modules/date-fns/is_first_day_of_month/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/is_first_day_of_month/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth (dirtyDate) {
  return parse(dirtyDate).getDate() === 1
}

module.exports = isFirstDayOfMonth


/***/ }),

/***/ "./node_modules/date-fns/is_friday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_friday/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday (dirtyDate) {
  return parse(dirtyDate).getDay() === 5
}

module.exports = isFriday


/***/ }),

/***/ "./node_modules/date-fns/is_future/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_future/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture (dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture


/***/ }),

/***/ "./node_modules/date-fns/is_last_day_of_month/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/is_last_day_of_month/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var endOfDay = __webpack_require__(/*! ../end_of_day/index.js */ "./node_modules/date-fns/end_of_day/index.js")
var endOfMonth = __webpack_require__(/*! ../end_of_month/index.js */ "./node_modules/date-fns/end_of_month/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth


/***/ }),

/***/ "./node_modules/date-fns/is_leap_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_leap_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear


/***/ }),

/***/ "./node_modules/date-fns/is_monday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_monday/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday (dirtyDate) {
  return parse(dirtyDate).getDay() === 1
}

module.exports = isMonday


/***/ }),

/***/ "./node_modules/date-fns/is_past/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_past/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date in the past?
 *
 * @description
 * Is the given date in the past?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast (dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast


/***/ }),

/***/ "./node_modules/date-fns/is_same_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_same_day/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "./node_modules/date-fns/is_same_hour/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_same_hour/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfHour = __webpack_require__(/*! ../start_of_hour/index.js */ "./node_modules/date-fns/start_of_hour/index.js")

/**
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
function isSameHour (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}

module.exports = isSameHour


/***/ }),

/***/ "./node_modules/date-fns/is_same_iso_week/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_same_iso_week/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__(/*! ../is_same_week/index.js */ "./node_modules/date-fns/is_same_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
}

module.exports = isSameISOWeek


/***/ }),

/***/ "./node_modules/date-fns/is_same_iso_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_same_iso_year/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}

module.exports = isSameISOYear


/***/ }),

/***/ "./node_modules/date-fns/is_same_minute/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_same_minute/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfMinute = __webpack_require__(/*! ../start_of_minute/index.js */ "./node_modules/date-fns/start_of_minute/index.js")

/**
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}

module.exports = isSameMinute


/***/ }),

/***/ "./node_modules/date-fns/is_same_month/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/is_same_month/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "./node_modules/date-fns/is_same_quarter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_same_quarter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfQuarter = __webpack_require__(/*! ../start_of_quarter/index.js */ "./node_modules/date-fns/start_of_quarter/index.js")

/**
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}

module.exports = isSameQuarter


/***/ }),

/***/ "./node_modules/date-fns/is_same_second/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_same_second/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__(/*! ../start_of_second/index.js */ "./node_modules/date-fns/start_of_second/index.js")

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ "./node_modules/date-fns/is_same_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_same_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js")

/**
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   {weekStartsOn: 1}
 * )
 * //=> false
 */
function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}

module.exports = isSameWeek


/***/ }),

/***/ "./node_modules/date-fns/is_same_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_same_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

module.exports = isSameYear


/***/ }),

/***/ "./node_modules/date-fns/is_saturday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_saturday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday (dirtyDate) {
  return parse(dirtyDate).getDay() === 6
}

module.exports = isSaturday


/***/ }),

/***/ "./node_modules/date-fns/is_sunday/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/is_sunday/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday (dirtyDate) {
  return parse(dirtyDate).getDay() === 0
}

module.exports = isSunday


/***/ }),

/***/ "./node_modules/date-fns/is_this_hour/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_this_hour/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameHour = __webpack_require__(/*! ../is_same_hour/index.js */ "./node_modules/date-fns/is_same_hour/index.js")

/**
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour (dirtyDate) {
  return isSameHour(new Date(), dirtyDate)
}

module.exports = isThisHour


/***/ }),

/***/ "./node_modules/date-fns/is_this_iso_week/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_this_iso_week/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameISOWeek = __webpack_require__(/*! ../is_same_iso_week/index.js */ "./node_modules/date-fns/is_same_iso_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek (dirtyDate) {
  return isSameISOWeek(new Date(), dirtyDate)
}

module.exports = isThisISOWeek


/***/ }),

/***/ "./node_modules/date-fns/is_this_iso_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/is_this_iso_year/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameISOYear = __webpack_require__(/*! ../is_same_iso_year/index.js */ "./node_modules/date-fns/is_same_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Is the given date in the same ISO week-numbering year as the current date?
 *
 * @description
 * Is the given date in the same ISO week-numbering year as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week-numbering year
 *
 * @example
 * // If today is 25 September 2014,
 * // is 30 December 2013 in this ISO week-numbering year?
 * var result = isThisISOYear(new Date(2013, 11, 30))
 * //=> true
 */
function isThisISOYear (dirtyDate) {
  return isSameISOYear(new Date(), dirtyDate)
}

module.exports = isThisISOYear


/***/ }),

/***/ "./node_modules/date-fns/is_this_minute/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_this_minute/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameMinute = __webpack_require__(/*! ../is_same_minute/index.js */ "./node_modules/date-fns/is_same_minute/index.js")

/**
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */
function isThisMinute (dirtyDate) {
  return isSameMinute(new Date(), dirtyDate)
}

module.exports = isThisMinute


/***/ }),

/***/ "./node_modules/date-fns/is_this_month/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/is_this_month/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameMonth = __webpack_require__(/*! ../is_same_month/index.js */ "./node_modules/date-fns/is_same_month/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth (dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth


/***/ }),

/***/ "./node_modules/date-fns/is_this_quarter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_this_quarter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameQuarter = __webpack_require__(/*! ../is_same_quarter/index.js */ "./node_modules/date-fns/is_same_quarter/index.js")

/**
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter (dirtyDate) {
  return isSameQuarter(new Date(), dirtyDate)
}

module.exports = isThisQuarter


/***/ }),

/***/ "./node_modules/date-fns/is_this_second/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_this_second/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameSecond = __webpack_require__(/*! ../is_same_second/index.js */ "./node_modules/date-fns/is_same_second/index.js")

/**
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond (dirtyDate) {
  return isSameSecond(new Date(), dirtyDate)
}

module.exports = isThisSecond


/***/ }),

/***/ "./node_modules/date-fns/is_this_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_this_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__(/*! ../is_same_week/index.js */ "./node_modules/date-fns/is_same_week/index.js")

/**
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
 * //=> false
 */
function isThisWeek (dirtyDate, dirtyOptions) {
  return isSameWeek(new Date(), dirtyDate, dirtyOptions)
}

module.exports = isThisWeek


/***/ }),

/***/ "./node_modules/date-fns/is_this_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_this_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSameYear = __webpack_require__(/*! ../is_same_year/index.js */ "./node_modules/date-fns/is_same_year/index.js")

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear (dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear


/***/ }),

/***/ "./node_modules/date-fns/is_thursday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_thursday/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday (dirtyDate) {
  return parse(dirtyDate).getDay() === 4
}

module.exports = isThursday


/***/ }),

/***/ "./node_modules/date-fns/is_today/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_today/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),

/***/ "./node_modules/date-fns/is_tomorrow/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_tomorrow/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow (dirtyDate) {
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()
}

module.exports = isTomorrow


/***/ }),

/***/ "./node_modules/date-fns/is_tuesday/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/is_tuesday/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 2
}

module.exports = isTuesday


/***/ }),

/***/ "./node_modules/date-fns/is_valid/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/is_valid/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ "./node_modules/date-fns/is_wednesday/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_wednesday/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 3
}

module.exports = isWednesday


/***/ }),

/***/ "./node_modules/date-fns/is_weekend/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/is_weekend/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ "./node_modules/date-fns/is_within_range/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/is_within_range/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange


/***/ }),

/***/ "./node_modules/date-fns/is_yesterday/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/is_yesterday/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date yesterday?
 *
 * @description
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday (dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()
}

module.exports = isYesterday


/***/ }),

/***/ "./node_modules/date-fns/last_day_of_iso_week/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_iso_week/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var lastDayOfWeek = __webpack_require__(/*! ../last_day_of_week/index.js */ "./node_modules/date-fns/last_day_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek (dirtyDate) {
  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = lastDayOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/last_day_of_iso_year/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_iso_year/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}

module.exports = lastDayOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/last_day_of_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_month/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfMonth


/***/ }),

/***/ "./node_modules/date-fns/last_day_of_quarter/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_quarter/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfQuarter


/***/ }),

/***/ "./node_modules/date-fns/last_day_of_week/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_week/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = lastDayOfWeek


/***/ }),

/***/ "./node_modules/date-fns/last_day_of_year/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/last_day_of_year/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfYear


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en/build_format_locale/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(/*! ../../_lib/build_formatting_tokens_reg_exp/index.js */ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ "./node_modules/date-fns/locale/en/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/locale/en/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(/*! ./build_distance_in_words_locale/index.js */ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js")
var buildFormatLocale = __webpack_require__(/*! ./build_format_locale/index.js */ "./node_modules/date-fns/locale/en/build_format_locale/index.js")

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ "./node_modules/date-fns/max/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/max/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ "./node_modules/date-fns/min/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/min/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var earliestTimestamp = Math.min.apply(null, dates)
  return new Date(earliestTimestamp)
}

module.exports = min


/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTimezoneOffsetInMilliseconds = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js")
var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE
    } else {
      var fullTime = timestamp + time
      var fullTimeDate = new Date(fullTime)

      offset = getTimezoneOffsetInMilliseconds(fullTimeDate)

      // Adjust time when it's coming from DST
      var fullTimeDateNextDay = new Date(fullTime)
      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)
      var offsetDiff =
        getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -
        getTimezoneOffsetInMilliseconds(fullTimeDate)
      if (offsetDiff > 0) {
        offset += offsetDiff
      }
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "./node_modules/date-fns/set_date/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/set_date/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "./node_modules/date-fns/set_day/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/set_day/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")

/**
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay (dirtyDate, dirtyDay, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = date.getDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay


/***/ }),

/***/ "./node_modules/date-fns/set_day_of_year/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/set_day_of_year/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear (dirtyDate, dirtyDayOfYear) {
  var date = parse(dirtyDate)
  var dayOfYear = Number(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear


/***/ }),

/***/ "./node_modules/date-fns/set_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/set_hours/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ "./node_modules/date-fns/set_iso_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_iso_day/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")
var getISODay = __webpack_require__(/*! ../get_iso_day/index.js */ "./node_modules/date-fns/get_iso_day/index.js")

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay (dirtyDate, dirtyDay) {
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}

module.exports = setISODay


/***/ }),

/***/ "./node_modules/date-fns/set_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/set_iso_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var getISOWeek = __webpack_require__(/*! ../get_iso_week/index.js */ "./node_modules/date-fns/get_iso_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek (dirtyDate, dirtyISOWeek) {
  var date = parse(dirtyDate)
  var isoWeek = Number(dirtyISOWeek)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

module.exports = setISOWeek


/***/ }),

/***/ "./node_modules/date-fns/set_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/set_iso_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear (dirtyDate, dirtyISOYear) {
  var date = parse(dirtyDate)
  var isoYear = Number(dirtyISOYear)
  var diff = differenceInCalendarDays(date, startOfISOYear(date))
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear


/***/ }),

/***/ "./node_modules/date-fns/set_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/set_milliseconds/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds setted
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds (dirtyDate, dirtyMilliseconds) {
  var date = parse(dirtyDate)
  var milliseconds = Number(dirtyMilliseconds)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/set_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_minutes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ "./node_modules/date-fns/set_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/set_month/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "./node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ "./node_modules/date-fns/set_quarter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_quarter/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var setMonth = __webpack_require__(/*! ../set_month/index.js */ "./node_modules/date-fns/set_month/index.js")

/**
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter setted
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter (dirtyDate, dirtyQuarter) {
  var date = parse(dirtyDate)
  var quarter = Number(dirtyQuarter)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}

module.exports = setQuarter


/***/ }),

/***/ "./node_modules/date-fns/set_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_seconds/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, dirtySeconds) {
  var date = parse(dirtyDate)
  var seconds = Number(dirtySeconds)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds


/***/ }),

/***/ "./node_modules/date-fns/set_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/set_year/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/start_of_day/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "./node_modules/date-fns/start_of_hour/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_hour/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}

module.exports = startOfHour


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_minute/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/start_of_minute/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ "./node_modules/date-fns/start_of_month/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_month/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "./node_modules/date-fns/start_of_quarter/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/start_of_quarter/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfQuarter


/***/ }),

/***/ "./node_modules/date-fns/start_of_second/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/start_of_second/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ "./node_modules/date-fns/start_of_today/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_today/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ "./node_modules/date-fns/start_of_tomorrow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_tomorrow/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfTomorrow


/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_week/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_year/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_year/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_yesterday/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/start_of_yesterday/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of yesterday.
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYesterday


/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/sub_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "./node_modules/date-fns/sub_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_hours/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addHours = __webpack_require__(/*! ../add_hours/index.js */ "./node_modules/date-fns/add_hours/index.js")

/**
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @returns {Date} the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addHours(dirtyDate, -amount)
}

module.exports = subHours


/***/ }),

/***/ "./node_modules/date-fns/sub_iso_years/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/sub_iso_years/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addISOYears = __webpack_require__(/*! ../add_iso_years/index.js */ "./node_modules/date-fns/add_iso_years/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * var result = subISOYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addISOYears(dirtyDate, -amount)
}

module.exports = subISOYears


/***/ }),

/***/ "./node_modules/date-fns/sub_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/sub_milliseconds/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

/**
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/sub_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/sub_minutes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMinutes = __webpack_require__(/*! ../add_minutes/index.js */ "./node_modules/date-fns/add_minutes/index.js")

/**
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @returns {Date} the new date with the mintues subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes


/***/ }),

/***/ "./node_modules/date-fns/sub_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/sub_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(/*! ../add_months/index.js */ "./node_modules/date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "./node_modules/date-fns/sub_quarters/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/sub_quarters/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addQuarters = __webpack_require__(/*! ../add_quarters/index.js */ "./node_modules/date-fns/add_quarters/index.js")

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @returns {Date} the new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * var result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters


/***/ }),

/***/ "./node_modules/date-fns/sub_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/sub_seconds/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addSeconds = __webpack_require__(/*! ../add_seconds/index.js */ "./node_modules/date-fns/add_seconds/index.js")

/**
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted
 * @returns {Date} the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds


/***/ }),

/***/ "./node_modules/date-fns/sub_weeks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_weeks/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__(/*! ../add_weeks/index.js */ "./node_modules/date-fns/add_weeks/index.js")

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ "./node_modules/date-fns/sub_years/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_years/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addYears = __webpack_require__(/*! ../add_years/index.js */ "./node_modules/date-fns/add_years/index.js")

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addYears(dirtyDate, -amount)
}

module.exports = subYears


/***/ }),

/***/ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ngx-slimscroll */ "./node_modules/ngx-slimscroll/dist/bundles/ngx-slimscroll.umd.js")) :
	undefined;
}(this, (function (exports,core,forms,dateFns,common,ngxSlimscroll) { 'use strict';

var counter = 0;
var isNil = function (value) {
    return (typeof value === 'undefined') || (value === null);
};
var NgDatepickerComponent = /** @class */ (function () {
    function NgDatepickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.headless = false;
        this.isOpened = false;
        this.position = 'bottom-right';
        this.positions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.scrollOptions = {
            barBackground: '#DFE3E9',
            gridBackground: '#FFFFFF',
            barBorderRadius: '3',
            gridBorderRadius: '3',
            barWidth: '6',
            gridWidth: '6',
            barMargin: '0',
            gridMargin: '0'
        };
    }
    NgDatepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Object.defineProperty(NgDatepickerComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            this.innerValue = val;
            this.onChangeCallback(this.innerValue);
        },
        enumerable: true,
        configurable: true
    });
    NgDatepickerComponent.prototype.ngOnInit = function () {
        this.view = 'days';
        this.date = new Date();
        this.setOptions();
        this.initDayNames();
        this.initYears();
        if (this.positions.indexOf(this.position) === -1) {
            throw new TypeError("ng-datepicker: invalid position property value '" + this.position + "' (expected: " + this.positions.join(', ') + ")");
        }
    };
    NgDatepickerComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes) {
            this.setOptions();
            this.initDayNames();
            this.init();
            this.initYears();
        }
    };
    Object.defineProperty(NgDatepickerComponent.prototype, "defaultFieldId", {
        get: function () {
            var value = "datepicker-" + counter++;
            Object.defineProperty(this, 'defaultFieldId', { value: value });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    NgDatepickerComponent.prototype.setOptions = function () {
        var today = new Date();
        this.minYear = this.options && this.options.minYear || dateFns.getYear(today) - 30;
        this.maxYear = this.options && this.options.maxYear || dateFns.getYear(today) + 30;
        this.displayFormat = this.options && this.options.displayFormat || 'MMM D[,] YYYY';
        this.barTitleFormat = this.options && this.options.barTitleFormat || 'MMMM YYYY';
        this.dayNamesFormat = this.options && this.options.dayNamesFormat || 'ddd';
        this.barTitleIfEmpty = this.options && this.options.barTitleIfEmpty || 'Click to select a date';
        this.firstCalendarDay = this.options && this.options.firstCalendarDay || 0;
        this.locale = this.options && { locale: this.options.locale } || {};
        this.placeholder = this.options && this.options.placeholder || '';
        this.addClass = this.options && this.options.addClass || {};
        this.addStyle = this.options && this.options.addStyle || {};
        this.fieldId = this.options && this.options.fieldId || this.defaultFieldId;
        this.useEmptyBarTitle = this.options && 'useEmptyBarTitle' in this.options ? this.options.useEmptyBarTitle : true;
    };
    NgDatepickerComponent.prototype.nextMonth = function () {
        this.date = dateFns.addMonths(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.prevMonth = function () {
        this.date = dateFns.subMonths(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.setDate = function (i) {
        this.date = this.days[i].date;
        this.value = this.date;
        this.init();
        this.close();
    };
    NgDatepickerComponent.prototype.setYear = function (i) {
        this.date = dateFns.setYear(this.date, this.years[i].year);
        this.init();
        this.initYears();
        this.view = 'days';
    };
    NgDatepickerComponent.prototype.isDateSelectable = function (date) {
        if (isNil(this.options)) {
            return true;
        }
        var minDateSet = !isNil(this.options.minDate);
        var maxDateSet = !isNil(this.options.maxDate);
        var timestamp = date.valueOf();
        if (minDateSet && (timestamp < this.options.minDate.valueOf())) {
            return false;
        }
        if (maxDateSet && (timestamp > this.options.maxDate.valueOf())) {
            return false;
        }
        return true;
    };
    NgDatepickerComponent.prototype.init = function () {
        var _this = this;
        var actualDate = this.date || new Date();
        var start = dateFns.startOfMonth(actualDate);
        var end = dateFns.endOfMonth(actualDate);
        this.days = dateFns.eachDay(start, end).map(function (date) {
            return {
                date: date,
                day: dateFns.getDate(date),
                month: dateFns.getMonth(date),
                year: dateFns.getYear(date),
                inThisMonth: true,
                isToday: dateFns.isToday(date),
                isSelected: dateFns.isSameDay(date, _this.innerValue) && dateFns.isSameMonth(date, _this.innerValue) && dateFns.isSameYear(date, _this.innerValue),
                isSelectable: _this.isDateSelectable(date)
            };
        });
        var tmp = dateFns.getDay(start) - this.firstCalendarDay;
        var prevDays = tmp < 0 ? 7 - this.firstCalendarDay : tmp;
        for (var i = 1; i <= prevDays; i++) {
            var date = dateFns.subDays(start, i);
            this.days.unshift({
                date: date,
                day: dateFns.getDate(date),
                month: dateFns.getMonth(date),
                year: dateFns.getYear(date),
                inThisMonth: false,
                isToday: dateFns.isToday(date),
                isSelected: dateFns.isSameDay(date, this.innerValue) && dateFns.isSameMonth(date, this.innerValue) && dateFns.isSameYear(date, this.innerValue),
                isSelectable: this.isDateSelectable(date)
            });
        }
        if (this.innerValue) {
            this.displayValue = dateFns.format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = dateFns.format(start, this.barTitleFormat, this.locale);
        }
        else {
            this.displayValue = '';
            this.barTitle = this.useEmptyBarTitle ? this.barTitleIfEmpty : dateFns.format(start, this.barTitleFormat, this.locale);
        }
    };
    NgDatepickerComponent.prototype.initYears = function () {
        var _this = this;
        var range = this.maxYear - this.minYear;
        this.years = Array.from(new Array(range), function (x, i) { return i + _this.minYear; }).map(function (year) {
            return { year: year, isThisYear: year === dateFns.getYear(_this.date) };
        });
    };
    NgDatepickerComponent.prototype.initDayNames = function () {
        this.dayNames = [];
        var start = this.firstCalendarDay;
        for (var i = start; i <= 6 + start; i++) {
            var date = dateFns.setDay(new Date(), i);
            this.dayNames.push(dateFns.format(date, this.dayNamesFormat, this.locale));
        }
    };
    NgDatepickerComponent.prototype.toggleView = function () {
        this.view = this.view === 'days' ? 'years' : 'days';
    };
    NgDatepickerComponent.prototype.toggle = function () {
        this.isOpened = !this.isOpened;
        if (!this.isOpened && this.view === 'years') {
            this.toggleView();
        }
    };
    NgDatepickerComponent.prototype.close = function () {
        this.isOpened = false;
        if (this.view === 'years') {
            this.toggleView();
        }
    };
    NgDatepickerComponent.prototype.reset = function (fireValueChangeEvent) {
        if (fireValueChangeEvent === void 0) { fireValueChangeEvent = false; }
        this.date = null;
        this.innerValue = null;
        this.init();
        if (fireValueChangeEvent && this.onChangeCallback) {
            this.onChangeCallback(this.innerValue);
        }
    };
    NgDatepickerComponent.prototype.writeValue = function (val) {
        if (val) {
            this.date = val;
            this.innerValue = val;
            this.init();
            this.displayValue = dateFns.format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = dateFns.format(dateFns.startOfMonth(val), this.barTitleFormat, this.locale);
        }
    };
    NgDatepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgDatepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgDatepickerComponent.prototype.onBlur = function (e) {
        if (!this.isOpened) {
            return;
        }
        var input = this.elementRef.nativeElement.querySelector('.ngx-datepicker-input');
        if (input == null) {
            return;
        }
        if (e.target === input || input.contains((e.target))) {
            return;
        }
        var container = this.elementRef.nativeElement.querySelector('.ngx-datepicker-calendar-container');
        if (container && container !== e.target && !container.contains((e.target)) && !((e.target)).classList.contains('year-unit')) {
            this.close();
        }
    };
    return NgDatepickerComponent;
}());
NgDatepickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ng-datepicker',
                template: "<div class=\"ngx-datepicker-container\">\n  <input type=\"text\" *ngIf=\"!headless\" class=\"ngx-datepicker-input\" [(ngModel)]=\"displayValue\" readonly [placeholder]=\"placeholder\"\n    [ngClass]=\"addClass\" [ngStyle]=\"addStyle\" [id]=\"fieldId\" [disabled]=\"disabled\" (click)=\"toggle()\" />\n  <ng-content></ng-content>\n  <div class=\"ngx-datepicker-calendar-container ngx-datepicker-position-{{position}}\" *ngIf=\"isOpened\">\n    <div class=\"topbar-container\">\n      <svg width=\"7px\" height=\"10px\" viewBox=\"0 0 7 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        (click)=\"prevMonth()\">\n        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g transform=\"translate(-923.000000, -1882.000000)\" fill=\"#CED0DA\">\n            <g transform=\"translate(80.000000, 1361.000000)\">\n              <g transform=\"translate(0.000000, 430.000000)\">\n                <g transform=\"translate(825.000000, 0.000000)\">\n                  <g transform=\"translate(0.000000, 72.000000)\">\n                    <g transform=\"translate(18.000000, 15.000000)\">\n                      <polygon id=\"Back\" points=\"6.015 4 0 9.013 6.015 14.025\"></polygon>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n        </g>\n      </svg>\n      <span class=\"topbar-title\" (click)=\"toggleView()\">{{ barTitle }}</span>\n      <svg width=\"7px\" height=\"10px\" viewBox=\"0 0 6 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        (click)=\"nextMonth()\">\n        <g id=\"Source-Sans---UI-Elements-Kit\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"White-Layout\" transform=\"translate(-1182.000000, -1882.000000)\" fill=\"#CED0DA\">\n            <g id=\"Dropdowns-&amp;-Selector\" transform=\"translate(80.000000, 1361.000000)\">\n              <g id=\"Dropdowns\" transform=\"translate(0.000000, 430.000000)\">\n                <g id=\"Calendar\" transform=\"translate(825.000000, 0.000000)\">\n                  <g transform=\"translate(0.000000, 72.000000)\" id=\"Top-Bar-Nav\">\n                    <g transform=\"translate(18.000000, 15.000000)\">\n                      <polygon id=\"Forward\" transform=\"translate(262.007500, 9.012500) scale(-1, 1) translate(-262.007500, -9.012500) \" points=\"265.015 4 259 9.013 265.015 14.025\"></polygon>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </div>\n    <div class=\"main-calendar-container\" *ngIf=\"view === 'days'\">\n      <div class=\"main-calendar-day-names\">\n        <span class=\"day-name-unit\" *ngFor=\"let name of dayNames\">{{ name }}</span>\n      </div>\n      <div class=\"main-calendar-days\">\n        <span class=\"day-unit\" *ngFor=\"let day of days; let i = index;\" [ngClass]=\"{ 'is-prev-month': !day.inThisMonth, 'is-today': day.isToday, 'is-selected': day.isSelected, 'is-disabled': !day.isSelectable }\"\n          (click)=\"day.isSelectable && setDate(i)\">\n          {{ day.day }}\n        </span>\n      </div>\n    </div>\n    <div class=\"main-calendar-container\" *ngIf=\"view === 'years'\">\n      <div class=\"main-calendar-years\" slimScroll [options]=\"scrollOptions\">\n        <span class=\"year-unit\" *ngFor=\"let year of years; let i = index;\" [ngClass]=\"{ 'is-selected': year.isThisYear }\" (click)=\"setYear(i)\">{{ year.year }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".ngx-datepicker-position-bottom-left{top:40px;right:0}.ngx-datepicker-position-bottom-right{top:40px;left:0}.ngx-datepicker-position-top-left{bottom:40px;right:0}.ngx-datepicker-position-top-right{bottom:40px;left:0}.ngx-datepicker-container{position:relative}.ngx-datepicker-container .ngx-datepicker-input{padding:5px 10px;font-size:14px;width:200px;outline:0;border:1px solid #dfe3e9}.ngx-datepicker-container .ngx-datepicker-calendar-container{position:absolute;width:300px;background:#fff;-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.08);box-shadow:0 1px 4px 0 rgba(0,0,0,.08);border:1px solid #dfe3e9;border-radius:4px}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container{width:100%;height:50px;padding:15px;border-bottom:1px solid #dfe3e9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container svg{cursor:pointer}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container svg g{fill:#ced0da}.ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container .topbar-title{color:#3d495c;font-size:14px;font-weight:600;cursor:pointer}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container{width:100%;height:100%;padding:15px 10px 0;font-size:12px;font-weight:500}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-day-names{color:#a4a9b1;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-day-names .day-name-unit{width:calc(100% / 7);text-transform:uppercase;text-align:center}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years{padding:15px 0;width:100%;display:inline-block;max-height:275px;overflow:hidden}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit{width:calc(100% / 7);height:40px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;float:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;color:#3d495c}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-prev-month,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-prev-month,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-prev-month,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-prev-month{color:#a4a9b1}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-today,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit:hover{background:#a4a9b1;color:#fff}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-selected,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-selected,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-selected,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-selected{background:#1a91eb;color:#fff}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-disabled,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-disabled,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-disabled,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-disabled{cursor:not-allowed;color:#a4a9b1}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-disabled:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-disabled:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-disabled:hover,.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-disabled:hover{background:0 0}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years{height:210px;display:block;padding:0}.ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit{width:calc(100% / 3);border-radius:10px}"],
                providers: [
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return NgDatepickerComponent; }), multi: true }
                ]
            },] },
];
NgDatepickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
NgDatepickerComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "headless": [{ type: core.Input },],
    "isOpened": [{ type: core.Input },],
    "position": [{ type: core.Input },],
    "onBlur": [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
};
var NgDatepickerModule = /** @class */ (function () {
    function NgDatepickerModule() {
    }
    return NgDatepickerModule;
}());
NgDatepickerModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [NgDatepickerComponent],
                imports: [common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule],
                exports: [NgDatepickerComponent, common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule]
            },] },
];

exports.NgDatepickerModule = NgDatepickerModule;
exports.NgDatepickerComponent = NgDatepickerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-datepicker.umd.js.map


/***/ }),

/***/ "./node_modules/ngx-slimscroll/dist/bundles/ngx-slimscroll.umd.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-slimscroll/dist/bundles/ngx-slimscroll.umd.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js")) :
    undefined;
}(this, (function (exports,core,common,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SlimScrollEvent = (function () {
        function SlimScrollEvent(obj) {
            this.type = obj.type;
            this.y = obj && obj.y ? obj.y : 0;
            this.percent = obj && obj.percent ? obj.percent : 0;
            this.duration = obj && obj.duration ? obj.duration : 0;
            this.easing = obj && obj.easing ? obj.easing : 'linear';
        }
        return SlimScrollEvent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ SLIMSCROLL_DEFAULTS = new core.InjectionToken('NGX_SLIMSCROLL_DEFAULTS');
    var SlimScrollOptions = (function () {
        function SlimScrollOptions(obj) {
            this.position = obj && obj.position ? obj.position : 'right';
            this.barBackground = obj && obj.barBackground ? obj.barBackground : '#343a40';
            this.barOpacity = obj && obj.barOpacity ? obj.barOpacity : '1';
            this.barWidth = obj && obj.barWidth ? obj.barWidth : '12';
            this.barBorderRadius = obj && obj.barBorderRadius ? obj.barBorderRadius : '5';
            this.barMargin = obj && obj.barMargin ? obj.barMargin : '1px 0';
            this.gridBackground = obj && obj.gridBackground ? obj.gridBackground : '#adb5bd';
            this.gridOpacity = obj && obj.gridOpacity ? obj.gridOpacity : '1';
            this.gridWidth = obj && obj.gridWidth ? obj.gridWidth : '8';
            this.gridBorderRadius = obj && obj.gridBorderRadius ? obj.gridBorderRadius : '10';
            this.gridMargin = obj && obj.gridMargin ? obj.gridMargin : '1px 2px';
            this.alwaysVisible = obj && typeof obj.alwaysVisible !== 'undefined' ? obj.alwaysVisible : true;
            this.visibleTimeout = obj && obj.visibleTimeout ? obj.visibleTimeout : 1000;
        }
        /**
         * @param {?=} obj
         * @return {?}
         */
        SlimScrollOptions.prototype.merge = /**
         * @param {?=} obj
         * @return {?}
         */
            function (obj) {
                var /** @type {?} */ result = new SlimScrollOptions();
                result.position = obj && obj.position ? obj.position : this.position;
                result.barBackground = obj && obj.barBackground ? obj.barBackground : this.barBackground;
                result.barOpacity = obj && obj.barOpacity ? obj.barOpacity : this.barOpacity;
                result.barWidth = obj && obj.barWidth ? obj.barWidth : this.barWidth;
                result.barBorderRadius = obj && obj.barBorderRadius ? obj.barBorderRadius : this.barBorderRadius;
                result.barMargin = obj && obj.barMargin ? obj.barMargin : this.barMargin;
                result.gridBackground = obj && obj.gridBackground ? obj.gridBackground : this.gridBackground;
                result.gridOpacity = obj && obj.gridOpacity ? obj.gridOpacity : this.gridBackground;
                result.gridWidth = obj && obj.gridWidth ? obj.gridWidth : this.gridWidth;
                result.gridBorderRadius = obj && obj.gridBorderRadius ? obj.gridBorderRadius : this.gridBorderRadius;
                result.gridMargin = obj && obj.gridMargin ? obj.gridMargin : this.gridMargin;
                result.alwaysVisible = obj && typeof obj.alwaysVisible !== 'undefined' ? obj.alwaysVisible : this.alwaysVisible;
                result.visibleTimeout = obj && obj.visibleTimeout ? obj.visibleTimeout : this.visibleTimeout;
                return result;
            };
        return SlimScrollOptions;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SlimScrollState = (function () {
        function SlimScrollState(obj) {
            this.scrollPosition = obj && obj.scrollPosition ? obj.scrollPosition : 0;
            this.isScrollAtStart = obj && typeof obj.isScrollAtStart !== 'undefined' ? obj.isScrollAtStart : true;
            this.isScrollAtEnd = obj && typeof obj.isScrollAtEnd !== 'undefined' ? obj.isScrollAtEnd : false;
        }
        return SlimScrollState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ easing = {
        linear: function (t) { return t; },
        inQuad: function (t) { return t * t; },
        outQuad: function (t) { return t * (2 - t); },
        inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
        inCubic: function (t) { return t * t * t; },
        outCubic: function (t) { return (--t) * t * t + 1; },
        inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
        inQuart: function (t) { return t * t * t * t; },
        outQuart: function (t) { return 1 - (--t) * t * t * t; },
        inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
        inQuint: function (t) { return t * t * t * t * t; },
        outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
        inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; }
    };
    var SlimScrollDirective = (function () {
        function SlimScrollDirective(viewContainer, renderer, document, optionsDefaults) {
            var _this = this;
            this.viewContainer = viewContainer;
            this.renderer = renderer;
            this.document = document;
            this.optionsDefaults = optionsDefaults;
            this.enabled = true;
            this.scrollChanged = new core.EventEmitter();
            this.barVisibilityChange = new core.EventEmitter();
            this.initWheel = function () {
                var /** @type {?} */ dommousescroll = rxjs.fromEvent(_this.el, 'DOMMouseScroll');
                var /** @type {?} */ mousewheel = rxjs.fromEvent(_this.el, 'mousewheel');
                var /** @type {?} */ wheelSubscription = rxjs.merge.apply(void 0, __spread([dommousescroll, mousewheel])).subscribe(function (e) {
                    var /** @type {?} */ delta = 0;
                    if (e.wheelDelta) {
                        delta = -e.wheelDelta / 120;
                    }
                    if (e.detail) {
                        delta = e.detail / 3;
                    }
                    _this.scrollContent(delta, true, false);
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                });
                _this.interactionSubscriptions.add(wheelSubscription);
            };
            this.initDrag = function () {
                var /** @type {?} */ bar = _this.bar;
                var /** @type {?} */ mousemove = rxjs.fromEvent(_this.document.documentElement, 'mousemove');
                var /** @type {?} */ touchmove = rxjs.fromEvent(_this.document.documentElement, 'touchmove');
                var /** @type {?} */ mousedown = rxjs.fromEvent(bar, 'mousedown');
                var /** @type {?} */ touchstart = rxjs.fromEvent(_this.el, 'touchstart');
                var /** @type {?} */ mouseup = rxjs.fromEvent(_this.document.documentElement, 'mouseup');
                var /** @type {?} */ touchend = rxjs.fromEvent(_this.document.documentElement, 'touchend');
                var /** @type {?} */ mousedrag = mousedown
                    .pipe(operators.mergeMap(function (e) {
                    _this.pageY = e.pageY;
                    _this.top = parseFloat(getComputedStyle(bar).top);
                    return mousemove
                        .pipe(operators.map(function (emove) {
                        emove.preventDefault();
                        return _this.top + emove.pageY - _this.pageY;
                    }), operators.takeUntil(mouseup));
                }));
                var /** @type {?} */ touchdrag = touchstart
                    .pipe(operators.mergeMap(function (e) {
                    _this.pageY = e.targetTouches[0].pageY;
                    _this.top = -parseFloat(getComputedStyle(bar).top);
                    return touchmove
                        .pipe(operators.map(function (tmove) {
                        return -(_this.top + tmove.targetTouches[0].pageY - _this.pageY);
                    }), operators.takeUntil(touchend));
                }));
                var /** @type {?} */ dragSubscription = rxjs.merge.apply(void 0, __spread([mousedrag, touchdrag])).subscribe(function (top) {
                    _this.body.addEventListener('selectstart', _this.preventDefaultEvent, false);
                    _this.renderer.setStyle(_this.body, 'touch-action', 'pan-y');
                    _this.renderer.setStyle(_this.body, 'user-select', 'none');
                    _this.renderer.setStyle(_this.bar, 'top', top + "px");
                    var /** @type {?} */ over = _this.scrollContent(0, true, false);
                    var /** @type {?} */ maxTop = _this.el.offsetHeight - _this.bar.offsetHeight;
                    if (over && over < 0 && -over <= maxTop) {
                        _this.renderer.setStyle(_this.el, 'paddingTop', -over + 'px');
                    }
                    else if (over && over > 0 && over <= maxTop) {
                        _this.renderer.setStyle(_this.el, 'paddingBottom', over + 'px');
                    }
                });
                var /** @type {?} */ dragEndSubscription = rxjs.merge.apply(void 0, __spread([mouseup, touchend])).subscribe(function () {
                    _this.body.removeEventListener('selectstart', _this.preventDefaultEvent, false);
                    var /** @type {?} */ paddingTop = parseInt(_this.el.style.paddingTop, 10);
                    var /** @type {?} */ paddingBottom = parseInt(_this.el.style.paddingBottom, 10);
                    _this.renderer.setStyle(_this.body, 'touch-action', 'unset');
                    _this.renderer.setStyle(_this.body, 'user-select', 'default');
                    if (paddingTop > 0) {
                        _this.scrollTo(0, 300, 'linear');
                    }
                    else if (paddingBottom > 0) {
                        _this.scrollTo(0, 300, 'linear');
                    }
                });
                _this.interactionSubscriptions.add(dragSubscription);
                _this.interactionSubscriptions.add(dragEndSubscription);
            };
            this.preventDefaultEvent = function (e) {
                e.preventDefault();
                e.stopPropagation();
            };
            this.viewContainer = viewContainer;
            this.el = viewContainer.element.nativeElement;
            this.body = this.document.querySelector('body');
            this.mutationThrottleTimeout = 50;
        }
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // setup if no changes for enabled for the first time
                if (!this.interactionSubscriptions && this.enabled) {
                    this.setup();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        SlimScrollDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["enabled"]) {
                    if (this.enabled) {
                        this.setup();
                    }
                    else {
                        this.destroy();
                    }
                }
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy();
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.setup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.interactionSubscriptions = new rxjs.Subscription();
                if (this.optionsDefaults) {
                    this.options = new SlimScrollOptions(this.optionsDefaults).merge(this.options);
                }
                else {
                    this.options = new SlimScrollOptions(this.options);
                }
                this.setStyle();
                this.wrapContainer();
                this.initGrid();
                this.initBar();
                this.getBarHeight();
                this.initWheel();
                this.initDrag();
                if (!this.options.alwaysVisible) {
                    this.hideBarAndGrid();
                }
                if (MutationObserver) {
                    if (this.mutationObserver) {
                        this.mutationObserver.disconnect();
                    }
                    this.mutationObserver = new MutationObserver(function () {
                        if (_this.mutationThrottleTimeout) {
                            clearTimeout(_this.mutationThrottleTimeout);
                            _this.mutationThrottleTimeout = setTimeout(_this.onMutation.bind(_this), 50);
                        }
                    });
                    this.mutationObserver.observe(this.el, { subtree: true, childList: true });
                }
                if (this.scrollEvents && this.scrollEvents instanceof core.EventEmitter) {
                    var /** @type {?} */ scrollSubscription = this.scrollEvents.subscribe(function (event) { return _this.handleEvent(event); });
                    this.interactionSubscriptions.add(scrollSubscription);
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SlimScrollDirective.prototype.handleEvent = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.type === 'scrollToBottom') {
                    var /** @type {?} */ y = this.el.scrollHeight - this.el.clientHeight;
                    this.scrollTo(y, e.duration, e.easing);
                }
                else if (e.type === 'scrollToTop') {
                    var /** @type {?} */ y = 0;
                    this.scrollTo(y, e.duration, e.easing);
                }
                else if (e.type === 'scrollToPercent' && (e.percent >= 0 && e.percent <= 100)) {
                    var /** @type {?} */ y = Math.round(((this.el.scrollHeight - this.el.clientHeight) / 100) * e.percent);
                    this.scrollTo(y, e.duration, e.easing);
                }
                else if (e.type === 'scrollTo') {
                    var /** @type {?} */ y = e.y;
                    if (y <= this.el.scrollHeight - this.el.clientHeight && y >= 0) {
                        this.scrollTo(y, e.duration, e.easing);
                    }
                }
                else if (e.type === 'recalculate') {
                    this.getBarHeight();
                }
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.setStyle = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ el = this.el;
                this.renderer.setStyle(el, 'overflow', 'hidden');
                this.renderer.setStyle(el, 'position', 'relative');
                this.renderer.setStyle(el, 'display', 'block');
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.onMutation = /**
         * @return {?}
         */
            function () {
                this.getBarHeight();
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.wrapContainer = /**
         * @return {?}
         */
            function () {
                this.wrapper = this.renderer.createElement('div');
                var /** @type {?} */ wrapper = this.wrapper;
                var /** @type {?} */ el = this.el;
                this.renderer.addClass(wrapper, 'slimscroll-wrapper');
                this.renderer.setStyle(wrapper, 'position', 'relative');
                this.renderer.setStyle(wrapper, 'overflow', 'hidden');
                this.renderer.setStyle(wrapper, 'display', 'inline-block');
                this.renderer.setStyle(wrapper, 'margin', getComputedStyle(el).margin);
                this.renderer.setStyle(wrapper, 'width', '100%');
                this.renderer.setStyle(wrapper, 'height', getComputedStyle(el).height);
                this.renderer.insertBefore(el.parentNode, wrapper, el);
                this.renderer.appendChild(wrapper, el);
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.initGrid = /**
         * @return {?}
         */
            function () {
                this.grid = this.renderer.createElement('div');
                var /** @type {?} */ grid = this.grid;
                this.renderer.addClass(grid, 'slimscroll-grid');
                this.renderer.setStyle(grid, 'position', 'absolute');
                this.renderer.setStyle(grid, 'top', '0');
                this.renderer.setStyle(grid, 'bottom', '0');
                this.renderer.setStyle(grid, this.options.position, '0');
                this.renderer.setStyle(grid, 'width', this.options.gridWidth + "px");
                this.renderer.setStyle(grid, 'background', this.options.gridBackground);
                this.renderer.setStyle(grid, 'opacity', this.options.gridOpacity);
                this.renderer.setStyle(grid, 'display', 'block');
                this.renderer.setStyle(grid, 'cursor', 'pointer');
                this.renderer.setStyle(grid, 'z-index', '99');
                this.renderer.setStyle(grid, 'border-radius', this.options.gridBorderRadius + "px");
                this.renderer.setStyle(grid, 'margin', this.options.gridMargin);
                this.renderer.appendChild(this.wrapper, grid);
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.initBar = /**
         * @return {?}
         */
            function () {
                this.bar = this.renderer.createElement('div');
                var /** @type {?} */ bar = this.bar;
                this.renderer.addClass(bar, 'slimscroll-bar');
                this.renderer.setStyle(bar, 'position', 'absolute');
                this.renderer.setStyle(bar, 'top', '0');
                this.renderer.setStyle(bar, this.options.position, '0');
                this.renderer.setStyle(bar, 'width', this.options.barWidth + "px");
                this.renderer.setStyle(bar, 'background', this.options.barBackground);
                this.renderer.setStyle(bar, 'opacity', this.options.barOpacity);
                this.renderer.setStyle(bar, 'display', 'block');
                this.renderer.setStyle(bar, 'cursor', 'pointer');
                this.renderer.setStyle(bar, 'z-index', '100');
                this.renderer.setStyle(bar, 'border-radius', this.options.barBorderRadius + "px");
                this.renderer.setStyle(bar, 'margin', this.options.barMargin);
                this.renderer.appendChild(this.wrapper, bar);
                this.barVisibilityChange.emit(true);
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.getBarHeight = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ elHeight = this.el.offsetHeight;
                var /** @type {?} */ barHeight = Math.max((elHeight / this.el.scrollHeight) * elHeight, 30) + 'px';
                var /** @type {?} */ display = parseInt(barHeight, 10) === elHeight ? 'none' : 'block';
                if (this.wrapper.offsetHeight !== elHeight) {
                    this.renderer.setStyle(this.wrapper, 'height', elHeight + 'px');
                }
                this.renderer.setStyle(this.bar, 'height', barHeight);
                this.renderer.setStyle(this.bar, 'display', display);
                this.renderer.setStyle(this.grid, 'display', display);
                this.barVisibilityChange.emit(display !== 'none');
            };
        /**
         * @param {?} y
         * @param {?} duration
         * @param {?} easingFunc
         * @return {?}
         */
        SlimScrollDirective.prototype.scrollTo = /**
         * @param {?} y
         * @param {?} duration
         * @param {?} easingFunc
         * @return {?}
         */
            function (y, duration, easingFunc) {
                var _this = this;
                var /** @type {?} */ start = Date.now();
                var /** @type {?} */ from = this.el.scrollTop;
                var /** @type {?} */ maxTop = this.el.offsetHeight - this.bar.offsetHeight;
                var /** @type {?} */ maxElScrollTop = this.el.scrollHeight - this.el.clientHeight;
                var /** @type {?} */ barHeight = Math.max((this.el.offsetHeight / this.el.scrollHeight) * this.el.offsetHeight, 30);
                var /** @type {?} */ paddingTop = parseInt(this.el.style.paddingTop, 10) || 0;
                var /** @type {?} */ paddingBottom = parseInt(this.el.style.paddingBottom, 10) || 0;
                var /** @type {?} */ scroll = function (timestamp) {
                    var /** @type {?} */ currentTime = Date.now();
                    var /** @type {?} */ time = Math.min(1, ((currentTime - start) / duration));
                    var /** @type {?} */ easedTime = easing[easingFunc](time);
                    if (paddingTop > 0 || paddingBottom > 0) {
                        var /** @type {?} */ fromY = null;
                        if (paddingTop > 0) {
                            fromY = -paddingTop;
                            fromY = -((easedTime * (y - fromY)) + fromY);
                            _this.renderer.setStyle(_this.el, 'paddingTop', fromY + "px");
                        }
                        if (paddingBottom > 0) {
                            fromY = paddingBottom;
                            fromY = ((easedTime * (y - fromY)) + fromY);
                            _this.renderer.setStyle(_this.el, 'paddingBottom', fromY + "px");
                        }
                    }
                    else {
                        _this.el.scrollTop = (easedTime * (y - from)) + from;
                    }
                    var /** @type {?} */ percentScroll = _this.el.scrollTop / maxElScrollTop;
                    if (paddingBottom === 0) {
                        var /** @type {?} */ delta = Math.round(Math.round(_this.el.clientHeight * percentScroll) - barHeight);
                        if (delta > 0) {
                            _this.renderer.setStyle(_this.bar, 'top', delta + "px");
                        }
                    }
                    if (time < 1) {
                        requestAnimationFrame(scroll);
                    }
                };
                requestAnimationFrame(scroll);
            };
        /**
         * @param {?} y
         * @param {?} isWheel
         * @param {?} isJump
         * @return {?}
         */
        SlimScrollDirective.prototype.scrollContent = /**
         * @param {?} y
         * @param {?} isWheel
         * @param {?} isJump
         * @return {?}
         */
            function (y, isWheel, isJump) {
                var _this = this;
                var /** @type {?} */ delta = y;
                var /** @type {?} */ maxTop = this.el.offsetHeight - this.bar.offsetHeight;
                var /** @type {?} */ hiddenContent = this.el.scrollHeight - this.el.offsetHeight;
                var /** @type {?} */ percentScroll;
                var /** @type {?} */ over = null;
                if (isWheel) {
                    delta = parseInt(getComputedStyle(this.bar).top, 10) + y * 20 / 100 * this.bar.offsetHeight;
                    if (delta < 0 || delta > maxTop) {
                        over = delta > maxTop ? delta - maxTop : delta;
                    }
                    delta = Math.min(Math.max(delta, 0), maxTop);
                    delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
                    this.renderer.setStyle(this.bar, 'top', delta + 'px');
                }
                percentScroll = parseInt(getComputedStyle(this.bar).top, 10) / (this.el.offsetHeight - this.bar.offsetHeight);
                delta = percentScroll * hiddenContent;
                this.el.scrollTop = delta;
                this.showBarAndGrid();
                if (!this.options.alwaysVisible) {
                    if (this.visibleTimeout) {
                        clearTimeout(this.visibleTimeout);
                    }
                    this.visibleTimeout = setTimeout(function () {
                        _this.hideBarAndGrid();
                    }, this.options.visibleTimeout);
                }
                var /** @type {?} */ isScrollAtStart = delta === 0;
                var /** @type {?} */ isScrollAtEnd = delta === hiddenContent;
                var /** @type {?} */ scrollPosition = Math.ceil(delta);
                var /** @type {?} */ scrollState = new SlimScrollState({ scrollPosition: scrollPosition, isScrollAtStart: isScrollAtStart, isScrollAtEnd: isScrollAtEnd });
                this.scrollChanged.emit(scrollState);
                return over;
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.showBarAndGrid = /**
         * @return {?}
         */
            function () {
                this.renderer.setStyle(this.grid, 'background', this.options.gridBackground);
                this.renderer.setStyle(this.bar, 'background', this.options.barBackground);
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.hideBarAndGrid = /**
         * @return {?}
         */
            function () {
                this.renderer.setStyle(this.grid, 'background', 'transparent');
                this.renderer.setStyle(this.bar, 'background', 'transparent');
            };
        /**
         * @return {?}
         */
        SlimScrollDirective.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.mutationObserver) {
                    this.mutationObserver.disconnect();
                    this.mutationObserver = null;
                }
                if (this.el.parentElement.classList.contains('slimscroll-wrapper')) {
                    var /** @type {?} */ wrapper = this.el.parentElement;
                    var /** @type {?} */ bar = wrapper.querySelector('.slimscroll-bar');
                    wrapper.removeChild(bar);
                    var /** @type {?} */ grid = wrapper.querySelector('.slimscroll-grid');
                    wrapper.removeChild(grid);
                    this.unwrap(wrapper);
                }
                if (this.interactionSubscriptions) {
                    this.interactionSubscriptions.unsubscribe();
                }
            };
        /**
         * @param {?} wrapper
         * @return {?}
         */
        SlimScrollDirective.prototype.unwrap = /**
         * @param {?} wrapper
         * @return {?}
         */
            function (wrapper) {
                var /** @type {?} */ docFrag = document.createDocumentFragment();
                while (wrapper.firstChild) {
                    var /** @type {?} */ child = wrapper.removeChild(wrapper.firstChild);
                    docFrag.appendChild(child);
                }
                wrapper.parentNode.replaceChild(docFrag, wrapper);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SlimScrollDirective.prototype.onResize = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.getBarHeight();
            };
        SlimScrollDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[slimScroll]',
                        // tslint:disable-line
                        exportAs: 'slimScroll'
                    },] },
        ];
        /** @nocollapse */
        SlimScrollDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef, decorators: [{ type: core.Inject, args: [core.ViewContainerRef,] },] },
                { type: core.Renderer2, decorators: [{ type: core.Inject, args: [core.Renderer2,] },] },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] },] },
                { type: undefined, decorators: [{ type: core.Inject, args: [SLIMSCROLL_DEFAULTS,] }, { type: core.Optional },] },
            ];
        };
        SlimScrollDirective.propDecorators = {
            "enabled": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "scrollEvents": [{ type: core.Input },],
            "scrollChanged": [{ type: core.Output, args: ['scrollChanged',] },],
            "barVisibilityChange": [{ type: core.Output, args: ['barVisibilityChange',] },],
            "onResize": [{ type: core.HostListener, args: ['window:resize', ['$event'],] },],
        };
        return SlimScrollDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgSlimScrollModule = (function () {
        function NgSlimScrollModule() {
        }
        NgSlimScrollModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SlimScrollDirective
                        ],
                        exports: [
                            SlimScrollDirective
                        ]
                    },] },
        ];
        return NgSlimScrollModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SlimScrollEvent = SlimScrollEvent;
    exports.SLIMSCROLL_DEFAULTS = SLIMSCROLL_DEFAULTS;
    exports.SlimScrollOptions = SlimScrollOptions;
    exports.easing = easing;
    exports.SlimScrollDirective = SlimScrollDirective;
    exports.NgSlimScrollModule = NgSlimScrollModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNsaW1zY3JvbGwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtc2xpbXNjcm9sbC9hcHAvbmd4LXNsaW1zY3JvbGwvY2xhc3Nlcy9zbGltc2Nyb2xsLWV2ZW50LmNsYXNzLnRzIiwibmc6Ly9uZ3gtc2xpbXNjcm9sbC9hcHAvbmd4LXNsaW1zY3JvbGwvY2xhc3Nlcy9zbGltc2Nyb2xsLW9wdGlvbnMuY2xhc3MudHMiLG51bGwsIm5nOi8vbmd4LXNsaW1zY3JvbGwvYXBwL25neC1zbGltc2Nyb2xsL2NsYXNzZXMvc2xpbXNjcm9sbC1zdGF0ZS5jbGFzcy50cyIsIm5nOi8vbmd4LXNsaW1zY3JvbGwvYXBwL25neC1zbGltc2Nyb2xsL2RpcmVjdGl2ZXMvc2xpbXNjcm9sbC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1zbGltc2Nyb2xsL2FwcC9uZ3gtc2xpbXNjcm9sbC9tb2R1bGUvbmd4LXNsaW1zY3JvbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVNsaW1TY3JvbGxFdmVudCB7XG4gIHR5cGU6ICdzY3JvbGxUb0JvdHRvbScgfCAnc2Nyb2xsVG9Ub3AnIHwgJ3Njcm9sbFRvUGVyY2VudCcgfCAnc2Nyb2xsVG8nIHwgJ3JlY2FsY3VsYXRlJztcbiAgeT86IG51bWJlcjtcbiAgcGVyY2VudD86IG51bWJlcjtcbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIGVhc2luZz86ICdsaW5lYXInIHwgJ2luUXVhZCcgfCAnb3V0UXVhZCcgfCAnaW5PdXRRdWFkJyB8ICdpbkN1YmljJyB8XG4gICAgJ291dEN1YmljJyB8ICdpbk91dEN1YmljJyB8ICdpblF1YXJ0JyB8ICdvdXRRdWFydCcgfCAnaW5PdXRRdWFydCcgfFxuICAgICdpblF1aW50JyB8ICdvdXRRdWludCcgfCAnaW5PdXRRdWludCc7XG59XG5cbmV4cG9ydCBjbGFzcyBTbGltU2Nyb2xsRXZlbnQgaW1wbGVtZW50cyBJU2xpbVNjcm9sbEV2ZW50IHtcbiAgdHlwZTogJ3Njcm9sbFRvQm90dG9tJyB8ICdzY3JvbGxUb1RvcCcgfCAnc2Nyb2xsVG9QZXJjZW50JyB8ICdzY3JvbGxUbycgfCAncmVjYWxjdWxhdGUnO1xuICB5PzogbnVtYmVyO1xuICBwZXJjZW50PzogbnVtYmVyO1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgZWFzaW5nOiAnbGluZWFyJyB8ICdpblF1YWQnIHwgJ291dFF1YWQnIHwgJ2luT3V0UXVhZCcgfCAnaW5DdWJpYycgfFxuICAgICdvdXRDdWJpYycgfCAnaW5PdXRDdWJpYycgfCAnaW5RdWFydCcgfCAnb3V0UXVhcnQnIHwgJ2luT3V0UXVhcnQnIHxcbiAgICAnaW5RdWludCcgfCAnb3V0UXVpbnQnIHwgJ2luT3V0UXVpbnQnO1xuXG4gIGNvbnN0cnVjdG9yKG9iaj86IElTbGltU2Nyb2xsRXZlbnQpIHtcbiAgICB0aGlzLnR5cGUgPSBvYmoudHlwZTtcbiAgICB0aGlzLnkgPSBvYmogJiYgb2JqLnkgPyBvYmoueSA6IDA7XG4gICAgdGhpcy5wZXJjZW50ID0gb2JqICYmIG9iai5wZXJjZW50ID8gb2JqLnBlcmNlbnQgOiAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSBvYmogJiYgb2JqLmR1cmF0aW9uID8gb2JqLmR1cmF0aW9uIDogMDtcbiAgICB0aGlzLmVhc2luZyA9IG9iaiAmJiBvYmouZWFzaW5nID8gb2JqLmVhc2luZyA6ICdsaW5lYXInO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJU2xpbVNjcm9sbE9wdGlvbnMgfSBmcm9tICcuL3NsaW1zY3JvbGwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBJU2xpbVNjcm9sbEV2ZW50IH0gZnJvbSAnLi9zbGltc2Nyb2xsLWV2ZW50LmNsYXNzJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaW1TY3JvbGxPcHRpb25zIHtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIGJhckJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIGJhck9wYWNpdHk/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogc3RyaW5nO1xuICBiYXJCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XG4gIGJhck1hcmdpbj86IHN0cmluZztcbiAgZ3JpZEJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIGdyaWRPcGFjaXR5Pzogc3RyaW5nO1xuICBncmlkV2lkdGg/OiBzdHJpbmc7XG4gIGdyaWRCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XG4gIGdyaWRNYXJnaW4/OiBzdHJpbmc7XG4gIGFsd2F5c1Zpc2libGU/OiBib29sZWFuO1xuICB2aXNpYmxlVGltZW91dD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNMSU1TQ1JPTExfREVGQVVMVFM6IEluamVjdGlvblRva2VuPElTbGltU2Nyb2xsT3B0aW9ucz5cbiAgICA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkdYX1NMSU1TQ1JPTExfREVGQVVMVFMnKTtcblxuZXhwb3J0IGNsYXNzIFNsaW1TY3JvbGxPcHRpb25zIGltcGxlbWVudHMgSVNsaW1TY3JvbGxPcHRpb25zIHtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIGJhckJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIGJhck9wYWNpdHk/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogc3RyaW5nO1xuICBiYXJCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XG4gIGJhck1hcmdpbj86IHN0cmluZztcbiAgZ3JpZEJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIGdyaWRPcGFjaXR5Pzogc3RyaW5nO1xuICBncmlkV2lkdGg/OiBzdHJpbmc7XG4gIGdyaWRCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XG4gIGdyaWRNYXJnaW4/OiBzdHJpbmc7XG4gIGFsd2F5c1Zpc2libGU/OiBib29sZWFuO1xuICB2aXNpYmxlVGltZW91dD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvYmo/OiBJU2xpbVNjcm9sbE9wdGlvbnMpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gb2JqICYmIG9iai5wb3NpdGlvbiA/IG9iai5wb3NpdGlvbiA6ICdyaWdodCc7XG4gICAgdGhpcy5iYXJCYWNrZ3JvdW5kID0gb2JqICYmIG9iai5iYXJCYWNrZ3JvdW5kID8gb2JqLmJhckJhY2tncm91bmQgOiAnIzM0M2E0MCc7XG4gICAgdGhpcy5iYXJPcGFjaXR5ID0gb2JqICYmIG9iai5iYXJPcGFjaXR5ID8gb2JqLmJhck9wYWNpdHkgOiAnMSc7XG4gICAgdGhpcy5iYXJXaWR0aCA9IG9iaiAmJiBvYmouYmFyV2lkdGggPyBvYmouYmFyV2lkdGggOiAnMTInO1xuICAgIHRoaXMuYmFyQm9yZGVyUmFkaXVzID0gb2JqICYmIG9iai5iYXJCb3JkZXJSYWRpdXMgPyBvYmouYmFyQm9yZGVyUmFkaXVzIDogJzUnO1xuICAgIHRoaXMuYmFyTWFyZ2luID0gb2JqICYmIG9iai5iYXJNYXJnaW4gPyBvYmouYmFyTWFyZ2luIDogJzFweCAwJztcbiAgICB0aGlzLmdyaWRCYWNrZ3JvdW5kID0gb2JqICYmIG9iai5ncmlkQmFja2dyb3VuZCA/IG9iai5ncmlkQmFja2dyb3VuZCA6ICcjYWRiNWJkJztcbiAgICB0aGlzLmdyaWRPcGFjaXR5ID0gb2JqICYmIG9iai5ncmlkT3BhY2l0eSA/IG9iai5ncmlkT3BhY2l0eSA6ICcxJztcbiAgICB0aGlzLmdyaWRXaWR0aCA9IG9iaiAmJiBvYmouZ3JpZFdpZHRoID8gb2JqLmdyaWRXaWR0aCA6ICc4JztcbiAgICB0aGlzLmdyaWRCb3JkZXJSYWRpdXMgPSBvYmogJiYgb2JqLmdyaWRCb3JkZXJSYWRpdXMgPyBvYmouZ3JpZEJvcmRlclJhZGl1cyA6ICcxMCc7XG4gICAgdGhpcy5ncmlkTWFyZ2luID0gb2JqICYmIG9iai5ncmlkTWFyZ2luID8gb2JqLmdyaWRNYXJnaW4gOiAnMXB4IDJweCc7XG4gICAgdGhpcy5hbHdheXNWaXNpYmxlID0gb2JqICYmIHR5cGVvZiBvYmouYWx3YXlzVmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvYmouYWx3YXlzVmlzaWJsZSA6IHRydWU7XG4gICAgdGhpcy52aXNpYmxlVGltZW91dCA9IG9iaiAmJiBvYmoudmlzaWJsZVRpbWVvdXQgPyBvYmoudmlzaWJsZVRpbWVvdXQgOiAxMDAwO1xuICB9XG5cbiAgcHVibGljIG1lcmdlKG9iaj86IElTbGltU2Nyb2xsT3B0aW9ucyk6IFNsaW1TY3JvbGxPcHRpb25zIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2xpbVNjcm9sbE9wdGlvbnMoKTtcblxuICAgIHJlc3VsdC5wb3NpdGlvbiA9IG9iaiAmJiBvYmoucG9zaXRpb24gPyBvYmoucG9zaXRpb24gOiB0aGlzLnBvc2l0aW9uO1xuICAgIHJlc3VsdC5iYXJCYWNrZ3JvdW5kID0gb2JqICYmIG9iai5iYXJCYWNrZ3JvdW5kID8gb2JqLmJhckJhY2tncm91bmQgOiB0aGlzLmJhckJhY2tncm91bmQ7XG4gICAgcmVzdWx0LmJhck9wYWNpdHkgPSBvYmogJiYgb2JqLmJhck9wYWNpdHkgPyBvYmouYmFyT3BhY2l0eSA6IHRoaXMuYmFyT3BhY2l0eTtcbiAgICByZXN1bHQuYmFyV2lkdGggPSBvYmogJiYgb2JqLmJhcldpZHRoID8gb2JqLmJhcldpZHRoIDogdGhpcy5iYXJXaWR0aDtcbiAgICByZXN1bHQuYmFyQm9yZGVyUmFkaXVzID0gb2JqICYmIG9iai5iYXJCb3JkZXJSYWRpdXMgPyBvYmouYmFyQm9yZGVyUmFkaXVzIDogdGhpcy5iYXJCb3JkZXJSYWRpdXM7XG4gICAgcmVzdWx0LmJhck1hcmdpbiA9IG9iaiAmJiBvYmouYmFyTWFyZ2luID8gb2JqLmJhck1hcmdpbiA6IHRoaXMuYmFyTWFyZ2luO1xuICAgIHJlc3VsdC5ncmlkQmFja2dyb3VuZCA9IG9iaiAmJiBvYmouZ3JpZEJhY2tncm91bmQgPyBvYmouZ3JpZEJhY2tncm91bmQgOiB0aGlzLmdyaWRCYWNrZ3JvdW5kO1xuICAgIHJlc3VsdC5ncmlkT3BhY2l0eSA9IG9iaiAmJiBvYmouZ3JpZE9wYWNpdHkgPyBvYmouZ3JpZE9wYWNpdHkgOiB0aGlzLmdyaWRCYWNrZ3JvdW5kO1xuICAgIHJlc3VsdC5ncmlkV2lkdGggPSBvYmogJiYgb2JqLmdyaWRXaWR0aCA/IG9iai5ncmlkV2lkdGggOiB0aGlzLmdyaWRXaWR0aDtcbiAgICByZXN1bHQuZ3JpZEJvcmRlclJhZGl1cyA9IG9iaiAmJiBvYmouZ3JpZEJvcmRlclJhZGl1cyA/IG9iai5ncmlkQm9yZGVyUmFkaXVzIDogdGhpcy5ncmlkQm9yZGVyUmFkaXVzO1xuICAgIHJlc3VsdC5ncmlkTWFyZ2luID0gb2JqICYmIG9iai5ncmlkTWFyZ2luID8gb2JqLmdyaWRNYXJnaW4gOiB0aGlzLmdyaWRNYXJnaW47XG4gICAgcmVzdWx0LmFsd2F5c1Zpc2libGUgPSBvYmogJiYgdHlwZW9mIG9iai5hbHdheXNWaXNpYmxlICE9PSAndW5kZWZpbmVkJyA/IG9iai5hbHdheXNWaXNpYmxlIDogdGhpcy5hbHdheXNWaXNpYmxlO1xuICAgIHJlc3VsdC52aXNpYmxlVGltZW91dCA9IG9iaiAmJiBvYmoudmlzaWJsZVRpbWVvdXQgPyBvYmoudmlzaWJsZVRpbWVvdXQgOiB0aGlzLnZpc2libGVUaW1lb3V0O1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVNsaW1TY3JvbGxTdGF0ZSB7XG4gICAgc2Nyb2xsUG9zaXRpb246IG51bWJlcjtcbiAgICBpc1Njcm9sbEF0U3RhcnQ6IGJvb2xlYW47XG4gICAgaXNTY3JvbGxBdEVuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFNsaW1TY3JvbGxTdGF0ZSBpbXBsZW1lbnRzIElTbGltU2Nyb2xsU3RhdGUge1xuICAgIHNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG4gICAgaXNTY3JvbGxBdFN0YXJ0OiBib29sZWFuO1xuICAgIGlzU2Nyb2xsQXRFbmQ6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3Iob2JqPzogSVNsaW1TY3JvbGxTdGF0ZSkge1xuICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gb2JqICYmIG9iai5zY3JvbGxQb3NpdGlvbiA/IG9iai5zY3JvbGxQb3NpdGlvbiA6IDA7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxBdFN0YXJ0ID0gb2JqICYmIHR5cGVvZiBvYmouaXNTY3JvbGxBdFN0YXJ0ICE9PSAndW5kZWZpbmVkJyA/IG9iai5pc1Njcm9sbEF0U3RhcnQgOiB0cnVlO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsQXRFbmQgPSBvYmogJiYgdHlwZW9mIG9iai5pc1Njcm9sbEF0RW5kICE9PSAndW5kZWZpbmVkJyA/IG9iai5pc1Njcm9sbEF0RW5kIDogZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2xpbVNjcm9sbE9wdGlvbnMsIElTbGltU2Nyb2xsT3B0aW9ucywgU0xJTVNDUk9MTF9ERUZBVUxUUyB9IGZyb20gJy4uL2NsYXNzZXMvc2xpbXNjcm9sbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IElTbGltU2Nyb2xsRXZlbnQsIFNsaW1TY3JvbGxFdmVudCB9IGZyb20gJy4uL2NsYXNzZXMvc2xpbXNjcm9sbC1ldmVudC5jbGFzcyc7XG5pbXBvcnQgeyBTbGltU2Nyb2xsU3RhdGUsIElTbGltU2Nyb2xsU3RhdGUgfSBmcm9tICcuLi9jbGFzc2VzL3NsaW1zY3JvbGwtc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBlYXNpbmc6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb24gfSA9IHtcbiAgbGluZWFyOiAodDogbnVtYmVyKSA9PiB0LFxuICBpblF1YWQ6ICh0OiBudW1iZXIpID0+IHQgKiB0LFxuICBvdXRRdWFkOiAodDogbnVtYmVyKSA9PiB0ICogKDIgLSB0KSxcbiAgaW5PdXRRdWFkOiAodDogbnVtYmVyKSA9PiB0IDwgLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdCxcbiAgaW5DdWJpYzogKHQ6IG51bWJlcikgPT4gdCAqIHQgKiB0LFxuICBvdXRDdWJpYzogKHQ6IG51bWJlcikgPT4gKC0tdCkgKiB0ICogdCArIDEsXG4gIGluT3V0Q3ViaWM6ICh0OiBudW1iZXIpID0+IHQgPCAuNSA/IDQgKiB0ICogdCAqIHQgOiAodCAtIDEpICogKDIgKiB0IC0gMikgKiAoMiAqIHQgLSAyKSArIDEsXG4gIGluUXVhcnQ6ICh0OiBudW1iZXIpID0+IHQgKiB0ICogdCAqIHQsXG4gIG91dFF1YXJ0OiAodDogbnVtYmVyKSA9PiAxIC0gKC0tdCkgKiB0ICogdCAqIHQsXG4gIGluT3V0UXVhcnQ6ICh0OiBudW1iZXIpID0+IHQgPCAuNSA/IDggKiB0ICogdCAqIHQgKiB0IDogMSAtIDggKiAoLS10KSAqIHQgKiB0ICogdCxcbiAgaW5RdWludDogKHQ6IG51bWJlcikgPT4gdCAqIHQgKiB0ICogdCAqIHQsXG4gIG91dFF1aW50OiAodDogbnVtYmVyKSA9PiAxICsgKC0tdCkgKiB0ICogdCAqIHQgKiB0LFxuICBpbk91dFF1aW50OiAodDogbnVtYmVyKSA9PiB0IDwgLjUgPyAxNiAqIHQgKiB0ICogdCAqIHQgKiB0IDogMSArIDE2ICogKC0tdCkgKiB0ICogdCAqIHQgKiB0XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2xpbVNjcm9sbF0nLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIGV4cG9ydEFzOiAnc2xpbVNjcm9sbCdcbn0pXG5leHBvcnQgY2xhc3MgU2xpbVNjcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBlbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgb3B0aW9uczogU2xpbVNjcm9sbE9wdGlvbnM7XG4gIEBJbnB1dCgpIHNjcm9sbEV2ZW50czogRXZlbnRFbWl0dGVyPElTbGltU2Nyb2xsRXZlbnQ+O1xuICBAT3V0cHV0KCdzY3JvbGxDaGFuZ2VkJykgc2Nyb2xsQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SVNsaW1TY3JvbGxTdGF0ZT4oKTtcbiAgQE91dHB1dCgnYmFyVmlzaWJpbGl0eUNoYW5nZScpIGJhclZpc2liaWxpdHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZWw6IEhUTUxFbGVtZW50O1xuICB3cmFwcGVyOiBIVE1MRWxlbWVudDtcbiAgZ3JpZDogSFRNTEVsZW1lbnQ7XG4gIGJhcjogSFRNTEVsZW1lbnQ7XG4gIGJvZHk6IEhUTUxFbGVtZW50O1xuICBwYWdlWTogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgZHJhZ2dpbmc6IGJvb2xlYW47XG4gIG11dGF0aW9uVGhyb3R0bGVUaW1lb3V0OiBudW1iZXI7XG4gIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIGxhc3RUb3VjaFBvc2l0aW9uWTogbnVtYmVyO1xuICB2aXNpYmxlVGltZW91dDogYW55O1xuICBpbnRlcmFjdGlvblN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChWaWV3Q29udGFpbmVyUmVmKSBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChTTElNU0NST0xMX0RFRkFVTFRTKSBAT3B0aW9uYWwoKSBwcml2YXRlIG9wdGlvbnNEZWZhdWx0czogSVNsaW1TY3JvbGxPcHRpb25zXG4gICkge1xuICAgIHRoaXMudmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgdGhpcy5lbCA9IHZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYm9keSA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMubXV0YXRpb25UaHJvdHRsZVRpbWVvdXQgPSA1MDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHNldHVwIGlmIG5vIGNoYW5nZXMgZm9yIGVuYWJsZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgaWYgKCF0aGlzLmludGVyYWN0aW9uU3Vic2NyaXB0aW9ucyAmJiB0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZW5hYmxlZCkge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuaW50ZXJhY3Rpb25TdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGlmICh0aGlzLm9wdGlvbnNEZWZhdWx0cykge1xuICAgICAgdGhpcy5vcHRpb25zID0gbmV3IFNsaW1TY3JvbGxPcHRpb25zKHRoaXMub3B0aW9uc0RlZmF1bHRzKS5tZXJnZSh0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgU2xpbVNjcm9sbE9wdGlvbnModGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy53cmFwQ29udGFpbmVyKCk7XG4gICAgdGhpcy5pbml0R3JpZCgpO1xuICAgIHRoaXMuaW5pdEJhcigpO1xuICAgIHRoaXMuZ2V0QmFySGVpZ2h0KCk7XG4gICAgdGhpcy5pbml0V2hlZWwoKTtcbiAgICB0aGlzLmluaXREcmFnKCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hbHdheXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLmhpZGVCYXJBbmRHcmlkKCk7XG4gICAgfVxuXG4gICAgaWYgKE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25UaHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tdXRhdGlvblRocm90dGxlVGltZW91dCk7XG4gICAgICAgICAgdGhpcy5tdXRhdGlvblRocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5vbk11dGF0aW9uLmJpbmQodGhpcyksIDUwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLCB7IHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxFdmVudHMgJiYgdGhpcy5zY3JvbGxFdmVudHMgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFN1YnNjcmlwdGlvbiA9IHRoaXMuc2Nyb2xsRXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IFNsaW1TY3JvbGxFdmVudCkgPT4gdGhpcy5oYW5kbGVFdmVudChldmVudCkpO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvblN1YnNjcmlwdGlvbnMuYWRkKHNjcm9sbFN1YnNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZTogU2xpbVNjcm9sbEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbFRvQm90dG9tJykge1xuICAgICAgY29uc3QgeSA9IHRoaXMuZWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5lbC5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLnNjcm9sbFRvKHksIGUuZHVyYXRpb24sIGUuZWFzaW5nKTtcbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbFRvVG9wJykge1xuICAgICAgY29uc3QgeSA9IDA7XG4gICAgICB0aGlzLnNjcm9sbFRvKHksIGUuZHVyYXRpb24sIGUuZWFzaW5nKTtcbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbFRvUGVyY2VudCcgJiYgKGUucGVyY2VudCA+PSAwICYmIGUucGVyY2VudCA8PSAxMDApKSB7XG4gICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCgoKHRoaXMuZWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5lbC5jbGllbnRIZWlnaHQpIC8gMTAwKSAqIGUucGVyY2VudCk7XG4gICAgICB0aGlzLnNjcm9sbFRvKHksIGUuZHVyYXRpb24sIGUuZWFzaW5nKTtcbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbFRvJykge1xuICAgICAgY29uc3QgeSA9IGUueTtcbiAgICAgIGlmICh5IDw9IHRoaXMuZWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5lbC5jbGllbnRIZWlnaHQgJiYgeSA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oeSwgZS5kdXJhdGlvbiwgZS5lYXNpbmcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAncmVjYWxjdWxhdGUnKSB7XG4gICAgICB0aGlzLmdldEJhckhlaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0eWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIG9uTXV0YXRpb24oKSB7XG4gICAgdGhpcy5nZXRCYXJIZWlnaHQoKTtcbiAgfVxuXG4gIHdyYXBDb250YWluZXIoKTogdm9pZCB7XG4gICAgdGhpcy53cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gdGhpcy53cmFwcGVyO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mod3JhcHBlciwgJ3NsaW1zY3JvbGwtd3JhcHBlcicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUod3JhcHBlciwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh3cmFwcGVyLCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh3cmFwcGVyLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHdyYXBwZXIsICdtYXJnaW4nLCBnZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW4pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUod3JhcHBlciwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHdyYXBwZXIsICdoZWlnaHQnLCBnZXRDb21wdXRlZFN0eWxlKGVsKS5oZWlnaHQpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoZWwucGFyZW50Tm9kZSwgd3JhcHBlciwgZWwpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgZWwpO1xuICB9XG5cbiAgaW5pdEdyaWQoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncmlkID0gdGhpcy5ncmlkO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhncmlkLCAnc2xpbXNjcm9sbC1ncmlkJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGdyaWQsICd0b3AnLCAnMCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZ3JpZCwgJ2JvdHRvbScsICcwJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCB0aGlzLm9wdGlvbnMucG9zaXRpb24sICcwJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCAnd2lkdGgnLCBgJHt0aGlzLm9wdGlvbnMuZ3JpZFdpZHRofXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCAnYmFja2dyb3VuZCcsIHRoaXMub3B0aW9ucy5ncmlkQmFja2dyb3VuZCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCAnb3BhY2l0eScsIHRoaXMub3B0aW9ucy5ncmlkT3BhY2l0eSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCAnZGlzcGxheScsICdibG9jaycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZ3JpZCwgJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShncmlkLCAnei1pbmRleCcsICc5OScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZ3JpZCwgJ2JvcmRlci1yYWRpdXMnLCBgJHt0aGlzLm9wdGlvbnMuZ3JpZEJvcmRlclJhZGl1c31weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZ3JpZCwgJ21hcmdpbicsIHRoaXMub3B0aW9ucy5ncmlkTWFyZ2luKTtcblxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyLCBncmlkKTtcbiAgfVxuXG4gIGluaXRCYXIoKTogdm9pZCB7XG4gICAgdGhpcy5iYXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJhciA9IHRoaXMuYmFyO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhiYXIsICdzbGltc2Nyb2xsLWJhcicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYmFyLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGJhciwgJ3RvcCcsICcwJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShiYXIsIHRoaXMub3B0aW9ucy5wb3NpdGlvbiwgJzAnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGJhciwgJ3dpZHRoJywgYCR7dGhpcy5vcHRpb25zLmJhcldpZHRofXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShiYXIsICdiYWNrZ3JvdW5kJywgdGhpcy5vcHRpb25zLmJhckJhY2tncm91bmQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYmFyLCAnb3BhY2l0eScsIHRoaXMub3B0aW9ucy5iYXJPcGFjaXR5KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGJhciwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGJhciwgJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShiYXIsICd6LWluZGV4JywgJzEwMCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoYmFyLCAnYm9yZGVyLXJhZGl1cycsIGAke3RoaXMub3B0aW9ucy5iYXJCb3JkZXJSYWRpdXN9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGJhciwgJ21hcmdpbicsIHRoaXMub3B0aW9ucy5iYXJNYXJnaW4pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIsIGJhcik7XG4gICAgdGhpcy5iYXJWaXNpYmlsaXR5Q2hhbmdlLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBnZXRCYXJIZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgZWxIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBiYXJIZWlnaHQgPSBNYXRoLm1heCgoZWxIZWlnaHQgLyB0aGlzLmVsLnNjcm9sbEhlaWdodCkgKiBlbEhlaWdodCwgMzApICsgJ3B4JztcbiAgICBjb25zdCBkaXNwbGF5ID0gcGFyc2VJbnQoYmFySGVpZ2h0LCAxMCkgPT09IGVsSGVpZ2h0ID8gJ25vbmUnIDogJ2Jsb2NrJztcblxuICAgIGlmICh0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0ICE9PSBlbEhlaWdodCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyYXBwZXIsICdoZWlnaHQnLCBlbEhlaWdodCArICdweCcpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYXIsICdoZWlnaHQnLCBiYXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYXIsICdkaXNwbGF5JywgZGlzcGxheSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdyaWQsICdkaXNwbGF5JywgZGlzcGxheSk7XG4gICAgdGhpcy5iYXJWaXNpYmlsaXR5Q2hhbmdlLmVtaXQoZGlzcGxheSAhPT0gJ25vbmUnKTtcbiAgfVxuXG4gIHNjcm9sbFRvKHk6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZWFzaW5nRnVuYzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGZyb20gPSB0aGlzLmVsLnNjcm9sbFRvcDtcbiAgICBjb25zdCBtYXhUb3AgPSB0aGlzLmVsLm9mZnNldEhlaWdodCAtIHRoaXMuYmFyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBtYXhFbFNjcm9sbFRvcCA9IHRoaXMuZWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5lbC5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgYmFySGVpZ2h0ID0gTWF0aC5tYXgoKHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC8gdGhpcy5lbC5zY3JvbGxIZWlnaHQpICogdGhpcy5lbC5vZmZzZXRIZWlnaHQsIDMwKTtcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gcGFyc2VJbnQodGhpcy5lbC5zdHlsZS5wYWRkaW5nVG9wLCAxMCkgfHwgMDtcbiAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQodGhpcy5lbC5zdHlsZS5wYWRkaW5nQm90dG9tLCAxMCkgfHwgMDtcblxuICAgIGNvbnN0IHNjcm9sbCA9ICh0aW1lc3RhbXA6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgdGltZSA9IE1hdGgubWluKDEsICgoY3VycmVudFRpbWUgLSBzdGFydCkgLyBkdXJhdGlvbikpO1xuICAgICAgY29uc3QgZWFzZWRUaW1lID0gZWFzaW5nW2Vhc2luZ0Z1bmNdKHRpbWUpO1xuXG4gICAgICBpZiAocGFkZGluZ1RvcCA+IDAgfHwgcGFkZGluZ0JvdHRvbSA+IDApIHtcbiAgICAgICAgbGV0IGZyb21ZID0gbnVsbDtcblxuICAgICAgICBpZiAocGFkZGluZ1RvcCA+IDApIHtcbiAgICAgICAgICBmcm9tWSA9IC1wYWRkaW5nVG9wO1xuICAgICAgICAgIGZyb21ZID0gLSgoZWFzZWRUaW1lICogKHkgLSBmcm9tWSkpICsgZnJvbVkpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmdUb3AnLCBgJHtmcm9tWX1weGApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhZGRpbmdCb3R0b20gPiAwKSB7XG4gICAgICAgICAgZnJvbVkgPSBwYWRkaW5nQm90dG9tO1xuICAgICAgICAgIGZyb21ZID0gKChlYXNlZFRpbWUgKiAoeSAtIGZyb21ZKSkgKyBmcm9tWSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZ0JvdHRvbScsIGAke2Zyb21ZfXB4YCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2Nyb2xsVG9wID0gKGVhc2VkVGltZSAqICh5IC0gZnJvbSkpICsgZnJvbTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGVyY2VudFNjcm9sbCA9IHRoaXMuZWwuc2Nyb2xsVG9wIC8gbWF4RWxTY3JvbGxUb3A7XG4gICAgICBpZiAocGFkZGluZ0JvdHRvbSA9PT0gMCkge1xuICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGgucm91bmQoTWF0aC5yb3VuZCh0aGlzLmVsLmNsaWVudEhlaWdodCAqIHBlcmNlbnRTY3JvbGwpIC0gYmFySGVpZ2h0KTtcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYXIsICd0b3AnLCBgJHtkZWx0YX1weGApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lIDwgMSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XG4gIH1cblxuICBzY3JvbGxDb250ZW50KHk6IG51bWJlciwgaXNXaGVlbDogYm9vbGVhbiwgaXNKdW1wOiBib29sZWFuKTogbnVsbCB8IG51bWJlciB7XG4gICAgbGV0IGRlbHRhID0geTtcbiAgICBjb25zdCBtYXhUb3AgPSB0aGlzLmVsLm9mZnNldEhlaWdodCAtIHRoaXMuYmFyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBoaWRkZW5Db250ZW50ID0gdGhpcy5lbC5zY3JvbGxIZWlnaHQgLSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICBsZXQgcGVyY2VudFNjcm9sbDogbnVtYmVyO1xuICAgIGxldCBvdmVyID0gbnVsbDtcblxuICAgIGlmIChpc1doZWVsKSB7XG4gICAgICBkZWx0YSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5iYXIpLnRvcCwgMTApICsgeSAqIDIwIC8gMTAwICogdGhpcy5iYXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAoZGVsdGEgPCAwIHx8IGRlbHRhID4gbWF4VG9wKSB7XG4gICAgICAgIG92ZXIgPSBkZWx0YSA+IG1heFRvcCA/IGRlbHRhIC0gbWF4VG9wIDogZGVsdGE7XG4gICAgICB9XG5cbiAgICAgIGRlbHRhID0gTWF0aC5taW4oTWF0aC5tYXgoZGVsdGEsIDApLCBtYXhUb3ApO1xuICAgICAgZGVsdGEgPSAoeSA+IDApID8gTWF0aC5jZWlsKGRlbHRhKSA6IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmJhciwgJ3RvcCcsIGRlbHRhICsgJ3B4Jyk7XG4gICAgfVxuXG4gICAgcGVyY2VudFNjcm9sbCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5iYXIpLnRvcCwgMTApIC8gKHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy5iYXIub2Zmc2V0SGVpZ2h0KTtcbiAgICBkZWx0YSA9IHBlcmNlbnRTY3JvbGwgKiBoaWRkZW5Db250ZW50O1xuXG4gICAgdGhpcy5lbC5zY3JvbGxUb3AgPSBkZWx0YTtcblxuICAgIHRoaXMuc2hvd0JhckFuZEdyaWQoKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmFsd2F5c1Zpc2libGUpIHtcbiAgICAgIGlmICh0aGlzLnZpc2libGVUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnZpc2libGVUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52aXNpYmxlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGVCYXJBbmRHcmlkKCk7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMudmlzaWJsZVRpbWVvdXQpO1xuICAgIH1cbiAgICBjb25zdCBpc1Njcm9sbEF0U3RhcnQgPSBkZWx0YSA9PT0gMDtcbiAgICBjb25zdCBpc1Njcm9sbEF0RW5kID0gZGVsdGEgPT09IGhpZGRlbkNvbnRlbnQ7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBNYXRoLmNlaWwoZGVsdGEpO1xuICAgIGNvbnN0IHNjcm9sbFN0YXRlID0gbmV3IFNsaW1TY3JvbGxTdGF0ZSh7IHNjcm9sbFBvc2l0aW9uLCBpc1Njcm9sbEF0U3RhcnQsIGlzU2Nyb2xsQXRFbmQgfSk7XG4gICAgdGhpcy5zY3JvbGxDaGFuZ2VkLmVtaXQoc2Nyb2xsU3RhdGUpO1xuXG4gICAgcmV0dXJuIG92ZXI7XG4gIH1cblxuICBpbml0V2hlZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9tbW91c2VzY3JvbGwgPSBmcm9tRXZlbnQodGhpcy5lbCwgJ0RPTU1vdXNlU2Nyb2xsJyk7XG4gICAgY29uc3QgbW91c2V3aGVlbCA9IGZyb21FdmVudCh0aGlzLmVsLCAnbW91c2V3aGVlbCcpO1xuXG4gICAgY29uc3Qgd2hlZWxTdWJzY3JpcHRpb24gPSBtZXJnZSguLi5bZG9tbW91c2VzY3JvbGwsIG1vdXNld2hlZWxdKS5zdWJzY3JpYmUoKGU6IE1vdXNlV2hlZWxFdmVudCkgPT4ge1xuICAgICAgbGV0IGRlbHRhID0gMDtcblxuICAgICAgaWYgKGUud2hlZWxEZWx0YSkge1xuICAgICAgICBkZWx0YSA9IC1lLndoZWVsRGVsdGEgLyAxMjA7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmRldGFpbCkge1xuICAgICAgICBkZWx0YSA9IGUuZGV0YWlsIC8gMztcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxDb250ZW50KGRlbHRhLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaW50ZXJhY3Rpb25TdWJzY3JpcHRpb25zLmFkZCh3aGVlbFN1YnNjcmlwdGlvbik7XG4gIH1cblxuICBpbml0RHJhZyA9ICgpID0+IHtcbiAgICBjb25zdCBiYXIgPSB0aGlzLmJhcjtcblxuICAgIGNvbnN0IG1vdXNlbW92ZSA9IGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlbW92ZScpO1xuICAgIGNvbnN0IHRvdWNobW92ZSA9IGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ3RvdWNobW92ZScpO1xuXG4gICAgY29uc3QgbW91c2Vkb3duID0gZnJvbUV2ZW50KGJhciwgJ21vdXNlZG93bicpO1xuICAgIGNvbnN0IHRvdWNoc3RhcnQgPSBmcm9tRXZlbnQodGhpcy5lbCwgJ3RvdWNoc3RhcnQnKTtcbiAgICBjb25zdCBtb3VzZXVwID0gZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnbW91c2V1cCcpO1xuICAgIGNvbnN0IHRvdWNoZW5kID0gZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAndG91Y2hlbmQnKTtcblxuICAgIGNvbnN0IG1vdXNlZHJhZyA9IG1vdXNlZG93blxuICAgICAgLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5wYWdlWSA9IGUucGFnZVk7XG4gICAgICAgICAgdGhpcy50b3AgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoYmFyKS50b3ApO1xuXG4gICAgICAgICAgcmV0dXJuIG1vdXNlbW92ZVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgoZW1vdmU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbW92ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvcCArIGVtb3ZlLnBhZ2VZIC0gdGhpcy5wYWdlWTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHRha2VVbnRpbChtb3VzZXVwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBjb25zdCB0b3VjaGRyYWcgPSB0b3VjaHN0YXJ0XG4gICAgICAucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnBhZ2VZID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgIHRoaXMudG9wID0gLXBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShiYXIpLnRvcCk7XG5cbiAgICAgICAgICByZXR1cm4gdG91Y2htb3ZlXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKCh0bW92ZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAtKHRoaXMudG9wICsgdG1vdmUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIHRoaXMucGFnZVkpO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRvdWNoZW5kKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBjb25zdCBkcmFnU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4uW21vdXNlZHJhZywgdG91Y2hkcmFnXSkuc3Vic2NyaWJlKCh0b3A6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50LCBmYWxzZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYm9keSwgJ3RvdWNoLWFjdGlvbicsICdwYW4teScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmJvZHksICd1c2VyLXNlbGVjdCcsICdub25lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYmFyLCAndG9wJywgYCR7dG9wfXB4YCk7XG4gICAgICBjb25zdCBvdmVyID0gdGhpcy5zY3JvbGxDb250ZW50KDAsIHRydWUsIGZhbHNlKTtcbiAgICAgIGNvbnN0IG1heFRvcCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0IC0gdGhpcy5iYXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAob3ZlciAmJiBvdmVyIDwgMCAmJiAtb3ZlciA8PSBtYXhUb3ApIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZ1RvcCcsIC1vdmVyICsgJ3B4Jyk7XG4gICAgICB9IGVsc2UgaWYgKG92ZXIgJiYgb3ZlciA+IDAgJiYgb3ZlciA8PSBtYXhUb3ApIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZ0JvdHRvbScsIG92ZXIgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRyYWdFbmRTdWJzY3JpcHRpb24gPSBtZXJnZSguLi5bbW91c2V1cCwgdG91Y2hlbmRdKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50LCBmYWxzZSk7XG4gICAgICBjb25zdCBwYWRkaW5nVG9wID0gcGFyc2VJbnQodGhpcy5lbC5zdHlsZS5wYWRkaW5nVG9wLCAxMCk7XG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQodGhpcy5lbC5zdHlsZS5wYWRkaW5nQm90dG9tLCAxMCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYm9keSwgJ3RvdWNoLWFjdGlvbicsICd1bnNldCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmJvZHksICd1c2VyLXNlbGVjdCcsICdkZWZhdWx0Jyk7XG5cbiAgICAgIGlmIChwYWRkaW5nVG9wID4gMCkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvKDAsIDMwMCwgJ2xpbmVhcicpO1xuICAgICAgfSBlbHNlIGlmIChwYWRkaW5nQm90dG9tID4gMCkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvKDAsIDMwMCwgJ2xpbmVhcicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnRlcmFjdGlvblN1YnNjcmlwdGlvbnMuYWRkKGRyYWdTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25TdWJzY3JpcHRpb25zLmFkZChkcmFnRW5kU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHNob3dCYXJBbmRHcmlkKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ncmlkLCAnYmFja2dyb3VuZCcsIHRoaXMub3B0aW9ucy5ncmlkQmFja2dyb3VuZCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmJhciwgJ2JhY2tncm91bmQnLCB0aGlzLm9wdGlvbnMuYmFyQmFja2dyb3VuZCk7XG4gIH1cblxuICBoaWRlQmFyQW5kR3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ3JpZCwgJ2JhY2tncm91bmQnLCAndHJhbnNwYXJlbnQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYmFyLCAnYmFja2dyb3VuZCcsICd0cmFuc3BhcmVudCcpO1xuICB9XG5cbiAgcHJldmVudERlZmF1bHRFdmVudCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGltc2Nyb2xsLXdyYXBwZXInKSkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuZWwucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGJhciA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNsaW1zY3JvbGwtYmFyJyk7XG4gICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGJhcik7XG4gICAgICBjb25zdCBncmlkID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2xpbXNjcm9sbC1ncmlkJyk7XG4gICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGdyaWQpO1xuICAgICAgdGhpcy51bndyYXAod3JhcHBlcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25TdWJzY3JpcHRpb25zKSB7XG4gICAgICB0aGlzLmludGVyYWN0aW9uU3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVud3JhcCh3cmFwcGVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgY29uc3QgY2hpbGQgPSB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgICBkb2NGcmFnLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgd3JhcHBlci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChkb2NGcmFnLCB3cmFwcGVyKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZ2V0QmFySGVpZ2h0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbGltU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9zbGltc2Nyb2xsLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNsaW1TY3JvbGxEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNsaW1TY3JvbGxEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NsaW1TY3JvbGxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJFdmVudEVtaXR0ZXIiLCJmcm9tRXZlbnQiLCJtZXJnZSIsIm1lcmdlTWFwIiwibWFwIiwidGFrZVVudGlsIiwiU3Vic2NyaXB0aW9uIiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIkluamVjdCIsIlJlbmRlcmVyMiIsIkRPQ1VNRU5UIiwiT3B0aW9uYWwiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBVUE7UUFTRSx5QkFBWSxHQUFzQjtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUN6RDs4QkF6Qkg7UUEwQkM7Ozs7OztBQ3hCRCx5QkFrQmEsbUJBQW1CLEdBQzFCLElBQUlBLG1CQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUVwRCxRQUFBO1FBZUUsMkJBQVksR0FBd0I7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzlFLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1lBQzlFLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDaEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM3RTs7Ozs7UUFFTSxpQ0FBSzs7OztzQkFBQyxHQUF3QjtnQkFDbkMscUJBQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztnQkFFdkMsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUN6RixNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDN0UsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxlQUFlLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNqRyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekUsTUFBTSxDQUFDLGNBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzdGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUNwRixNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekUsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDckcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzdFLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNoSCxNQUFNLENBQUMsY0FBYyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFFN0YsT0FBTyxNQUFNLENBQUM7O2dDQXZFbEI7UUF5RUM7O0lDekVEOzs7Ozs7Ozs7Ozs7OztBQWNBLG9CQWlHdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVEO1FBQ0ksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUM5SEQsSUFBQTtRQUlJLHlCQUFZLEdBQXNCO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsZUFBZSxLQUFLLFdBQVcsR0FBRyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN0RyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxhQUFhLEtBQUssV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQ3BHOzhCQWRMO1FBZUMsQ0FBQTs7Ozs7O3lCQ09ZLE1BQU0sR0FBZ0M7UUFDakQsTUFBTSxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxHQUFBO1FBQ3hCLE1BQU0sRUFBRSxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEdBQUE7UUFDNUIsT0FBTyxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQTtRQUNuQyxTQUFTLEVBQUUsVUFBQyxDQUFTLElBQUssT0FBQSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFBO1FBQ25FLE9BQU8sRUFBRSxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBO1FBQ2pDLFFBQVEsRUFBRSxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUE7UUFDMUMsVUFBVSxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUE7UUFDM0YsT0FBTyxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBO1FBQ3JDLFFBQVEsRUFBRSxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBO1FBQzlDLFVBQVUsRUFBRSxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUE7UUFDakYsT0FBTyxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBQTtRQUN6QyxRQUFRLEVBQUUsVUFBQyxDQUFTLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUE7UUFDbEQsVUFBVSxFQUFFLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBO0tBQzVGLENBQUM7O1FBMEJBLDZCQUNvQyxlQUNQLFVBQ0QsVUFDdUI7WUFKbkQsaUJBVUM7WUFUbUMsa0JBQWEsR0FBYixhQUFhO1lBQ3BCLGFBQVEsR0FBUixRQUFRO1lBQ1QsYUFBUSxHQUFSLFFBQVE7WUFDZSxvQkFBZSxHQUFmLGVBQWU7MkJBdkIvQyxJQUFJO2lDQUdrQixJQUFJQyxpQkFBWSxFQUFvQjt1Q0FDeEIsSUFBSUEsaUJBQVksRUFBVzs2QkE0UnBFO2dCQUNWLHFCQUFNLGNBQWMsR0FBR0MsY0FBUyxDQUFDLEtBQUksQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDNUQscUJBQU0sVUFBVSxHQUFHQSxjQUFTLENBQUMsS0FBSSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFcEQscUJBQU0saUJBQWlCLEdBQUdDLFVBQUssd0JBQUksQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLEdBQUUsU0FBUyxDQUFDLFVBQUMsQ0FBa0I7b0JBQzVGLHFCQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBRWQsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO3dCQUNoQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztxQkFDN0I7b0JBRUQsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO3dCQUNaLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztxQkFDdEI7b0JBRUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUV2QyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7d0JBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDcEI7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN0RDs0QkFFVTtnQkFDVCxxQkFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQztnQkFFckIscUJBQU0sU0FBUyxHQUFHRCxjQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ3hFLHFCQUFNLFNBQVMsR0FBR0EsY0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUV4RSxxQkFBTSxTQUFTLEdBQUdBLGNBQVMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzlDLHFCQUFNLFVBQVUsR0FBR0EsY0FBUyxDQUFDLEtBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3BELHFCQUFNLE9BQU8sR0FBR0EsY0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRSxxQkFBTSxRQUFRLEdBQUdBLGNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFFdEUscUJBQU0sU0FBUyxHQUFHLFNBQVM7cUJBQ3hCLElBQUksQ0FDSEUsa0JBQVEsQ0FBQyxVQUFDLENBQWE7b0JBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDckIsS0FBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRWpELE9BQU8sU0FBUzt5QkFDYixJQUFJLENBQ0hDLGFBQUcsQ0FBQyxVQUFDLEtBQWlCO3dCQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3ZCLE9BQU8sS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7cUJBQzVDLENBQUMsRUFDRkMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FDbkIsQ0FBQztpQkFDTCxDQUFDLENBQ0gsQ0FBQztnQkFFSixxQkFBTSxTQUFTLEdBQUcsVUFBVTtxQkFDekIsSUFBSSxDQUNIRixrQkFBUSxDQUFDLFVBQUMsQ0FBYTtvQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdEMsS0FBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFbEQsT0FBTyxTQUFTO3lCQUNiLElBQUksQ0FDSEMsYUFBRyxDQUFDLFVBQUMsS0FBaUI7d0JBQ3BCLE9BQU8sRUFBRSxLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDaEUsQ0FBQyxFQUNGQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUNwQixDQUFDO2lCQUNMLENBQUMsQ0FDSCxDQUFDO2dCQUVKLHFCQUFNLGdCQUFnQixHQUFHSCxVQUFLLHdCQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxVQUFDLEdBQVc7b0JBQzlFLEtBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDM0UsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzNELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBSyxHQUFHLE9BQUksQ0FBQyxDQUFDO29CQUNwRCxxQkFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxxQkFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7b0JBRTVELElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO3dCQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDN0Q7eUJBQU0sSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO3dCQUM3QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7cUJBQy9EO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxxQkFBTSxtQkFBbUIsR0FBR0EsVUFBSyx3QkFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRSxTQUFTLENBQUM7b0JBQ2xFLEtBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDOUUscUJBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzFELHFCQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNoRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRTVELElBQUksVUFBVSxHQUFHLENBQUMsRUFBRTt3QkFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNqQzt5QkFBTSxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7d0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDakM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3hEO3VDQVlxQixVQUFDLENBQWE7Z0JBQ2xDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3JCO1lBMVhDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO1NBQ25DOzs7O1FBRUQsc0NBQVE7OztZQUFSOztnQkFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDthQUNGOzs7OztRQUVELHlDQUFXOzs7O1lBQVgsVUFBWSxPQUFzQjtnQkFDaEMsSUFBSSxPQUFPLGFBQVU7b0JBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNkO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDaEI7aUJBQ0Y7YUFDRjs7OztRQUVELHlDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7Ozs7UUFFRCxtQ0FBSzs7O1lBQUw7Z0JBQUEsaUJBcUNDO2dCQXBDQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSUksaUJBQVksRUFBRSxDQUFDO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEY7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN2QjtnQkFFRCxJQUFJLGdCQUFnQixFQUFFO29CQUNwQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUNwQztvQkFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQzt3QkFDM0MsSUFBSSxLQUFJLENBQUMsdUJBQXVCLEVBQUU7NEJBQ2hDLFlBQVksQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs0QkFDM0MsS0FBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt5QkFDM0U7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQzVFO2dCQUVELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxZQUFZTixpQkFBWSxFQUFFO29CQUNsRSxxQkFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQztvQkFDNUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUN2RDthQUNGOzs7OztRQUVELHlDQUFXOzs7O1lBQVgsVUFBWSxDQUFrQjtnQkFDNUIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGdCQUFnQixFQUFFO29CQUMvQixxQkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QztxQkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUNuQyxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QztxQkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBRTtvQkFDL0UscUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QztxQkFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO29CQUNoQyxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0Y7cUJBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjthQUNGOzs7O1FBRUQsc0NBQVE7OztZQUFSO2dCQUNFLHFCQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEOzs7O1FBRUQsd0NBQVU7OztZQUFWO2dCQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7OztRQUVELDJDQUFhOzs7WUFBYjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IscUJBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDOzs7O1FBRUQsc0NBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxPQUFJLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsT0FBSSxDQUFDLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvQzs7OztRQUVELHFDQUFPOzs7WUFBUDtnQkFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsT0FBSSxDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsZUFBZSxFQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxPQUFJLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDOzs7O1FBRUQsMENBQVk7OztZQUFaO2dCQUNFLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdEMscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLElBQUksUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDcEYscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEtBQUssUUFBUSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7Z0JBRXhFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssUUFBUSxFQUFFO29CQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ2pFO2dCQUVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDO2FBQ25EOzs7Ozs7O1FBRUQsc0NBQVE7Ozs7OztZQUFSLFVBQVMsQ0FBUyxFQUFFLFFBQWdCLEVBQUUsVUFBa0I7Z0JBQXhELGlCQThDQztnQkE3Q0MscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDekIscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUMvQixxQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQzVELHFCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDbkUscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDckcscUJBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxxQkFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXJFLHFCQUFNLE1BQU0sR0FBRyxVQUFDLFNBQWlCO29CQUMvQixxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMvQixxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLFFBQVEsRUFBRSxDQUFDO29CQUM3RCxxQkFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUUzQyxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTt3QkFDdkMscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFFakIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFOzRCQUNsQixLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUM7NEJBQ3BCLEtBQUssR0FBRyxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQzs0QkFDN0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUssS0FBSyxPQUFJLENBQUMsQ0FBQzt5QkFDN0Q7d0JBRUQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFOzRCQUNyQixLQUFLLEdBQUcsYUFBYSxDQUFDOzRCQUN0QixLQUFLLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDOzRCQUM1QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBSyxLQUFLLE9BQUksQ0FBQyxDQUFDO3lCQUNoRTtxQkFDRjt5QkFBTTt3QkFDTCxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO3FCQUNyRDtvQkFFRCxxQkFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO29CQUN6RCxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7d0JBQ3ZCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7d0JBQ3ZGLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTs0QkFDYixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBSyxLQUFLLE9BQUksQ0FBQyxDQUFDO3lCQUN2RDtxQkFDRjtvQkFFRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7d0JBQ1oscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQy9CO2lCQUNGLENBQUM7Z0JBRUYscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0I7Ozs7Ozs7UUFFRCwyQ0FBYTs7Ozs7O1lBQWIsVUFBYyxDQUFTLEVBQUUsT0FBZ0IsRUFBRSxNQUFlO2dCQUExRCxpQkEwQ0M7Z0JBekNDLHFCQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUM1RCxxQkFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2xFLHFCQUFJLGFBQXFCLENBQUM7Z0JBQzFCLHFCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBRWhCLElBQUksT0FBTyxFQUFFO29CQUNYLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFFNUYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7d0JBQy9CLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUNoRDtvQkFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0MsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDdkQ7Z0JBRUQsYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlHLEtBQUssR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUV0QyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO29CQUMvQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ25DO29CQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO3dCQUMvQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQ3ZCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDakM7Z0JBQ0QscUJBQU0sZUFBZSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLHFCQUFNLGFBQWEsR0FBRyxLQUFLLEtBQUssYUFBYSxDQUFDO2dCQUM5QyxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMscUJBQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsY0FBYyxnQkFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUVyQyxPQUFPLElBQUksQ0FBQzthQUNiOzs7O1FBd0dELDRDQUFjOzs7WUFBZDtnQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzVFOzs7O1FBRUQsNENBQWM7OztZQUFkO2dCQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQzthQUMvRDs7OztRQU9ELHFDQUFPOzs7WUFBUDtnQkFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2lCQUM5QjtnQkFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRTtvQkFDbEUscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN0QyxxQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNyRCxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixxQkFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUN2RCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QjtnQkFFRCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtvQkFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUM3QzthQUNGOzs7OztRQUVELG9DQUFNOzs7O1lBQU4sVUFBTyxPQUFvQjtnQkFDekIscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNsRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQ3pCLHFCQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUI7Z0JBQ0QsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ25EOzs7OztRQUdELHNDQUFROzs7O3NCQUFDLE1BQVc7Z0JBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7O29CQXpidkJPLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzs7d0JBQ3hCLFFBQVEsRUFBRSxZQUFZO3FCQUN2Qjs7Ozs7d0JBdkNDQyxxQkFBZ0IsdUJBNkRiQyxXQUFNLFNBQUNELHFCQUFnQjt3QkF4RDFCRSxjQUFTLHVCQXlETkQsV0FBTSxTQUFDQyxjQUFTO3dEQUNoQkQsV0FBTSxTQUFDRSxlQUFRO3dEQUNmRixXQUFNLFNBQUMsbUJBQW1CLGNBQUdHLGFBQVE7Ozs7Z0NBdkJ2Q0MsVUFBSztnQ0FDTEEsVUFBSztxQ0FDTEEsVUFBSztzQ0FDTEMsV0FBTSxTQUFDLGVBQWU7NENBQ3RCQSxXQUFNLFNBQUMscUJBQXFCO2lDQThhNUJDLGlCQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztrQ0E3ZDNDOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUU7NEJBQ1osbUJBQW1CO3lCQUNwQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsbUJBQW1CO3lCQUNwQjtxQkFDRjs7aUNBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-api.js":
/*!***************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-api.js ***!
  \***************************************************/
/*! exports provided: ConfirmationService, Footer, Header, MessageService, PrimeNGConfig, PrimeTemplate, SharedModule, TreeDragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNGConfig", function() { return PrimeNGConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeTemplate", function() { return PrimeTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return TreeDragDropService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var PrimeNGConfig = /** @class */ (function () {
    function PrimeNGConfig() {
        this.ripple = false;
    }
    PrimeNGConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PrimeNGConfig_Factory() { return new PrimeNGConfig(); }, token: PrimeNGConfig, providedIn: "root" });
    PrimeNGConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    return PrimeNGConfig;
}());

var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    ConfirmationService.prototype.confirm = function (confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    };
    ConfirmationService.prototype.close = function () {
        this.requireConfirmationSource.next(null);
        return this;
    };
    ConfirmationService.prototype.onAccept = function () {
        this.acceptConfirmationSource.next();
    };
    ConfirmationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ConfirmationService;
}());

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
    }
    MessageService.prototype.add = function (message) {
        if (message) {
            this.messageSource.next(message);
        }
    };
    MessageService.prototype.addAll = function (messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    };
    MessageService.prototype.clear = function (key) {
        this.clearSource.next(key || null);
    };
    MessageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return MessageService;
}());

var Header = /** @class */ (function () {
    function Header() {
    }
    Header.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'p-header',
                    template: '<ng-content></ng-content>'
                },] }
    ];
    return Header;
}());
var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'p-footer',
                    template: '<ng-content></ng-content>'
                },] }
    ];
    return Footer;
}());
var PrimeTemplate = /** @class */ (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    PrimeTemplate.prototype.getType = function () {
        return this.name;
    };
    PrimeTemplate.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    PrimeTemplate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pTemplate]',
                    host: {}
                },] }
    ];
    PrimeTemplate.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    PrimeTemplate.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['pTemplate',] }]
    };
    return PrimeTemplate;
}());
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    exports: [Header, Footer, PrimeTemplate],
                    declarations: [Header, Footer, PrimeTemplate]
                },] }
    ];
    return SharedModule;
}());

var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return TreeDragDropService;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-api.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-button.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-button.js ***!
  \******************************************************/
/*! exports provided: Button, ButtonDirective, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/fesm5/primeng-ripple.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");






var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.iconPos = 'left';
    }
    ButtonDirective.prototype.ngAfterViewInit = function () {
        this._initialStyleClass = this.el.nativeElement.className;
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            var iconElement = document.createElement("span");
            iconElement.className = 'p-button-icon';
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = this.label ? 'p-button-icon-' + this.iconPos : null;
            if (iconPosClass) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addClass(iconElement, iconPosClass);
            }
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addMultipleClasses(iconElement, this.icon);
            this.el.nativeElement.appendChild(iconElement);
        }
        var labelElement = document.createElement("span");
        if (this.icon && !this.label) {
            labelElement.setAttribute('aria-hidden', 'true');
        }
        labelElement.className = 'p-button-label';
        labelElement.appendChild(document.createTextNode(this.label || '&nbsp;'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    ButtonDirective.prototype.getStyleClass = function () {
        var styleClass = 'p-button p-component';
        if (this.icon && !this.label) {
            styleClass = styleClass + ' p-button-icon-only';
        }
        return styleClass;
    };
    ButtonDirective.prototype.setStyleClass = function () {
        var styleClass = this.getStyleClass();
        this.el.nativeElement.className = styleClass + ' ' + this._initialStyleClass;
    };
    Object.defineProperty(ButtonDirective.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            this._label = val;
            if (this.initialized) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-label').textContent = this._label || '&nbsp;';
                this.setStyleClass();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            if (this.initialized) {
                if (this.iconPos)
                    primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-icon').className = 'p-button-icon p-button-icon-' + this.iconPos + ' ' + this._icon;
                else
                    primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.p-button-icon').className = 'p-button-icon ' + this._icon;
                this.setStyleClass();
            }
        },
        enumerable: false,
        configurable: true
    });
    ButtonDirective.prototype.ngOnDestroy = function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    ButtonDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ButtonDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pButton]'
                },] }
    ];
    ButtonDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ButtonDirective.propDecorators = {
        iconPos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ButtonDirective;
}());
var Button = /** @class */ (function () {
    function Button() {
        this.type = "button";
        this.iconPos = 'left';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Button.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.contentTemplate = item.template;
                    break;
            }
        });
    };
    Button.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'p-button',
                    template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [ngStyle]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'p-button p-component':true,\n                        'p-button-icon-only': (icon && !label),\n                        'p-button-vertical': (iconPos === 'top' || iconPos === 'bottom') && label}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\" pRipple>\n            <ng-content></ng-content>\n            <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            <span [ngClass]=\"{'p-button-icon': true,\n                        'p-button-icon-left': iconPos === 'left' && label,\n                        'p-button-icon-right': iconPos === 'right' && label,\n                        'p-button-icon-top': iconPos === 'top' && label,\n                        'p-button-icon-bottom': iconPos === 'bottom' && label}\"\n                        [class]=\"icon\" *ngIf=\"icon\" [attr.aria-hidden]=\"true\"></span>\n            <span class=\"p-button-label\" [attr.aria-hidden]=\"icon && !label\">{{label||'&nbsp;'}}</span>\n            <span [ngClass]=\"'p-badge'\" *ngIf=\"badge\" [class]=\"badgeClass\">{{badge}}</span>\n        </button>\n    ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] }
    ];
    Button.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        iconPos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        badgeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"],] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return Button;
}());
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_3__["RippleModule"]],
                    exports: [ButtonDirective, Button],
                    declarations: [ButtonDirective, Button]
                },] }
    ];
    return ButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-button.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-calendar.js ***!
  \********************************************************/
/*! exports provided: CALENDAR_VALUE_ACCESSOR, Calendar, CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VALUE_ACCESSOR", function() { return CALENDAR_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/fesm5/primeng-ripple.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var CALENDAR_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return Calendar; }),
    multi: true
};
var Calendar = /** @class */ (function () {
    function Calendar(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.dateFormat = 'mm/dd/yy';
        this.multipleSeparator = ',';
        this.rangeSeparator = '-';
        this.inline = false;
        this.showOtherMonths = true;
        this.icon = 'pi pi-calendar';
        this.shortYearCutoff = '+10';
        this.hourFormat = '24';
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.showSeconds = false;
        this.showOnFocus = true;
        this.showWeek = false;
        this.dataType = 'date';
        this.selectionMode = 'single';
        this.todayButtonStyleClass = 'p-button-text';
        this.clearButtonStyleClass = 'p-button-text';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.keepInvalid = false;
        this.hideOnDateTimeSelect = true;
        this.numberOfMonths = 1;
        this.view = 'date';
        this.timeSeparator = ":";
        this.focusTrap = true;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTodayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._locale = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'mm/dd/yy',
            weekHeader: 'Wk'
        };
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.inputFieldValue = null;
        this.navigationState = null;
        this.convertTo24Hour = function (hours, pm) {
            if (this.hourFormat == '12') {
                if (hours === 12) {
                    return (pm ? 12 : 0);
                }
                else {
                    return (pm ? hours + 12 : hours);
                }
            }
            return hours;
        };
    }
    Object.defineProperty(Calendar.prototype, "content", {
        set: function (content) {
            var _this = this;
            this.contentViewChild = content;
            if (this.contentViewChild) {
                if (this.isMonthNavigate) {
                    Promise.resolve(null).then(function () { return _this.updateFocus(); });
                    this.isMonthNavigate = false;
                }
                else {
                    this.initFocusableCell();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Calendar.prototype, "minDate", {
        get: function () {
            return this._minDate;
        },
        set: function (date) {
            this._minDate = date;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "maxDate", {
        get: function () {
            return this._maxDate;
        },
        set: function (date) {
            this._maxDate = date;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "disabledDates", {
        get: function () {
            return this._disabledDates;
        },
        set: function (disabledDates) {
            this._disabledDates = disabledDates;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "disabledDays", {
        get: function () {
            return this._disabledDays;
        },
        set: function (disabledDays) {
            this._disabledDays = disabledDays;
            if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
                this.createMonths(this.currentMonth, this.currentYear);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "yearRange", {
        get: function () {
            return this._yearRange;
        },
        set: function (yearRange) {
            this._yearRange = yearRange;
            if (yearRange) {
                var years = yearRange.split(':');
                var yearStart = parseInt(years[0]);
                var yearEnd = parseInt(years[1]);
                this.populateYearOptions(yearStart, yearEnd);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "showTime", {
        get: function () {
            return this._showTime;
        },
        set: function (showTime) {
            this._showTime = showTime;
            if (this.currentHour === undefined) {
                this.initTime(this.value || new Date());
            }
            this.updateInputfield();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (newLocale) {
            this._locale = newLocale;
            if (this.view === 'date') {
                this.createWeekDays();
                this.createMonths(this.currentMonth, this.currentYear);
            }
            else if (this.view === 'month') {
                this.createMonthPickerValues();
            }
        },
        enumerable: false,
        configurable: true
    });
    Calendar.prototype.ngOnInit = function () {
        var date = this.defaultDate || new Date();
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        if (this.view === 'date') {
            this.createWeekDays();
            this.initTime(date);
            this.createMonths(this.currentMonth, this.currentYear);
            this.ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);
        }
        else if (this.view === 'month') {
            this.createMonthPickerValues();
        }
    };
    Calendar.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'date':
                    _this.dateTemplate = item.template;
                    break;
                case 'disabledDate':
                    _this.disabledDateTemplate = item.template;
                    break;
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                default:
                    _this.dateTemplate = item.template;
                    break;
            }
        });
    };
    Calendar.prototype.populateYearOptions = function (start, end) {
        this.yearOptions = [];
        for (var i = start; i <= end; i++) {
            this.yearOptions.push(i);
        }
    };
    Calendar.prototype.createWeekDays = function () {
        this.weekDays = [];
        var dayIndex = this.locale.firstDayOfWeek;
        for (var i = 0; i < 7; i++) {
            this.weekDays.push(this.locale.dayNamesMin[dayIndex]);
            dayIndex = (dayIndex == 6) ? 0 : ++dayIndex;
        }
    };
    Calendar.prototype.createMonthPickerValues = function () {
        this.monthPickerValues = [];
        for (var i = 0; i <= 11; i++) {
            this.monthPickerValues.push(this.locale.monthNamesShort[i]);
        }
    };
    Calendar.prototype.createMonths = function (month, year) {
        this.months = this.months = [];
        for (var i = 0; i < this.numberOfMonths; i++) {
            var m = month + i;
            var y = year;
            if (m > 11) {
                m = m % 11 - 1;
                y = year + 1;
            }
            this.months.push(this.createMonth(m, y));
        }
    };
    Calendar.prototype.getWeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    };
    Calendar.prototype.createMonth = function (month, year) {
        var dates = [];
        var firstDay = this.getFirstDayOfMonthIndex(month, year);
        var daysLength = this.getDaysCountInMonth(month, year);
        var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        var dayNo = 1;
        var today = new Date();
        var weekNumbers = [];
        var monthRows = Math.ceil((daysLength + firstDay) / 7);
        for (var i = 0; i < monthRows; i++) {
            var week = [];
            if (i == 0) {
                for (var j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    var prev = this.getPreviousMonthAndYear(month, year);
                    week.push({ day: j, month: prev.month, year: prev.year, otherMonth: true,
                        today: this.isToday(today, j, prev.month, prev.year), selectable: this.isSelectable(j, prev.month, prev.year, true) });
                }
                var remainingDaysLength = 7 - week.length;
                for (var j = 0; j < remainingDaysLength; j++) {
                    week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                        selectable: this.isSelectable(dayNo, month, year, false) });
                    dayNo++;
                }
            }
            else {
                for (var j = 0; j < 7; j++) {
                    if (dayNo > daysLength) {
                        var next = this.getNextMonthAndYear(month, year);
                        week.push({ day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                            today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                            selectable: this.isSelectable((dayNo - daysLength), next.month, next.year, true) });
                    }
                    else {
                        week.push({ day: dayNo, month: month, year: year, today: this.isToday(today, dayNo, month, year),
                            selectable: this.isSelectable(dayNo, month, year, false) });
                    }
                    dayNo++;
                }
            }
            if (this.showWeek) {
                weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
            }
            dates.push(week);
        }
        return {
            month: month,
            year: year,
            dates: dates,
            weekNumbers: weekNumbers
        };
    };
    Calendar.prototype.initTime = function (date) {
        this.pm = date.getHours() > 11;
        if (this.showTime) {
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            this.setCurrentHourPM(date.getHours());
        }
        else if (this.timeOnly) {
            this.currentMinute = 0;
            this.currentHour = 0;
            this.currentSecond = 0;
        }
    };
    Calendar.prototype.navBackward = function (event) {
        var _this = this;
        event.stopPropagation();
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.isMonthNavigate = true;
        if (this.view === 'month') {
            this.decrementYear();
            setTimeout(function () {
                _this.updateFocus();
            }, 1);
        }
        else {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.decrementYear();
            }
            else {
                this.currentMonth--;
            }
            this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
            this.createMonths(this.currentMonth, this.currentYear);
        }
    };
    Calendar.prototype.navForward = function (event) {
        var _this = this;
        event.stopPropagation();
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.isMonthNavigate = true;
        if (this.view === 'month') {
            this.incrementYear();
            setTimeout(function () {
                _this.updateFocus();
            }, 1);
        }
        else {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.incrementYear();
            }
            else {
                this.currentMonth++;
            }
            this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
            this.createMonths(this.currentMonth, this.currentYear);
        }
    };
    Calendar.prototype.decrementYear = function () {
        this.currentYear--;
        if (this.yearNavigator && this.currentYear < this.yearOptions[0]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] - difference, this.yearOptions[this.yearOptions.length - 1] - difference);
        }
    };
    Calendar.prototype.incrementYear = function () {
        this.currentYear++;
        if (this.yearNavigator && this.currentYear > this.yearOptions[this.yearOptions.length - 1]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] + difference, this.yearOptions[this.yearOptions.length - 1] + difference);
        }
    };
    Calendar.prototype.onDateSelect = function (event, dateMeta) {
        var _this = this;
        if (this.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }
        if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
            this.value = this.value.filter(function (date, i) {
                return !_this.isDateEquals(date, dateMeta);
            });
            if (this.value.length === 0) {
                this.value = null;
            }
            this.updateModel(this.value);
        }
        else {
            if (this.shouldSelectDate(dateMeta)) {
                this.selectDate(dateMeta);
            }
        }
        if (this.isSingleSelection() && this.hideOnDateTimeSelect) {
            setTimeout(function () {
                event.preventDefault();
                _this.hideOverlay();
                if (_this.mask) {
                    _this.disableModality();
                }
                _this.cd.markForCheck();
            }, 150);
        }
        this.updateInputfield();
        event.preventDefault();
    };
    Calendar.prototype.shouldSelectDate = function (dateMeta) {
        if (this.isMultipleSelection())
            return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
        else
            return true;
    };
    Calendar.prototype.onMonthSelect = function (event, index) {
        if (!primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-disabled')) {
            this.onDateSelect(event, { year: this.currentYear, month: index, day: 1, selectable: true });
        }
    };
    Calendar.prototype.updateInputfield = function () {
        var formattedValue = '';
        if (this.value) {
            if (this.isSingleSelection()) {
                formattedValue = this.formatDateTime(this.value);
            }
            else if (this.isMultipleSelection()) {
                for (var i = 0; i < this.value.length; i++) {
                    var dateAsString = this.formatDateTime(this.value[i]);
                    formattedValue += dateAsString;
                    if (i !== (this.value.length - 1)) {
                        formattedValue += this.multipleSeparator + ' ';
                    }
                }
            }
            else if (this.isRangeSelection()) {
                if (this.value && this.value.length) {
                    var startDate = this.value[0];
                    var endDate = this.value[1];
                    formattedValue = this.formatDateTime(startDate);
                    if (endDate) {
                        formattedValue += ' ' + this.rangeSeparator + ' ' + this.formatDateTime(endDate);
                    }
                }
            }
        }
        this.inputFieldValue = formattedValue;
        this.updateFilledState();
        if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
            this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
        }
    };
    Calendar.prototype.formatDateTime = function (date) {
        var formattedValue = null;
        if (date) {
            if (this.timeOnly) {
                formattedValue = this.formatTime(date);
            }
            else {
                formattedValue = this.formatDate(date, this.getDateFormat());
                if (this.showTime) {
                    formattedValue += ' ' + this.formatTime(date);
                }
            }
        }
        return formattedValue;
    };
    Calendar.prototype.setCurrentHourPM = function (hours) {
        if (this.hourFormat == '12') {
            this.pm = hours > 11;
            if (hours >= 12) {
                this.currentHour = (hours == 12) ? 12 : hours - 12;
            }
            else {
                this.currentHour = (hours == 0) ? 12 : hours;
            }
        }
        else {
            this.currentHour = hours;
        }
    };
    Calendar.prototype.selectDate = function (dateMeta) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        if (this.showTime) {
            if (this.hourFormat == '12') {
                if (this.currentHour === 12)
                    date.setHours(this.pm ? 12 : 0);
                else
                    date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
            }
            else {
                date.setHours(this.currentHour);
            }
            date.setMinutes(this.currentMinute);
            date.setSeconds(this.currentSecond);
        }
        if (this.minDate && this.minDate > date) {
            date = this.minDate;
            this.setCurrentHourPM(date.getHours());
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        }
        if (this.maxDate && this.maxDate < date) {
            date = this.maxDate;
            this.setCurrentHourPM(date.getHours());
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
        }
        if (this.isSingleSelection()) {
            this.updateModel(date);
        }
        else if (this.isMultipleSelection()) {
            this.updateModel(this.value ? __spread(this.value, [date]) : [date]);
        }
        else if (this.isRangeSelection()) {
            if (this.value && this.value.length) {
                var startDate = this.value[0];
                var endDate = this.value[1];
                if (!endDate && date.getTime() >= startDate.getTime()) {
                    endDate = date;
                }
                else {
                    startDate = date;
                    endDate = null;
                }
                this.updateModel([startDate, endDate]);
            }
            else {
                this.updateModel([date, null]);
            }
        }
        this.onSelect.emit(date);
    };
    Calendar.prototype.updateModel = function (value) {
        var _this = this;
        this.value = value;
        if (this.dataType == 'date') {
            this.onModelChange(this.value);
        }
        else if (this.dataType == 'string') {
            if (this.isSingleSelection()) {
                this.onModelChange(this.formatDateTime(this.value));
            }
            else {
                var stringArrValue = null;
                if (this.value) {
                    stringArrValue = this.value.map(function (date) { return _this.formatDateTime(date); });
                }
                this.onModelChange(stringArrValue);
            }
        }
    };
    Calendar.prototype.getFirstDayOfMonthIndex = function (month, year) {
        var day = new Date();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);
        var dayIndex = day.getDay() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    };
    Calendar.prototype.getDaysCountInMonth = function (month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    };
    Calendar.prototype.getDaysCountInPrevMonth = function (month, year) {
        var prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
    };
    Calendar.prototype.getPreviousMonthAndYear = function (month, year) {
        var m, y;
        if (month === 0) {
            m = 11;
            y = year - 1;
        }
        else {
            m = month - 1;
            y = year;
        }
        return { 'month': m, 'year': y };
    };
    Calendar.prototype.getNextMonthAndYear = function (month, year) {
        var m, y;
        if (month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
            y = year;
        }
        return { 'month': m, 'year': y };
    };
    Calendar.prototype.getSundayIndex = function () {
        return this.locale.firstDayOfWeek > 0 ? 7 - this.locale.firstDayOfWeek : 0;
    };
    Calendar.prototype.isSelected = function (dateMeta) {
        var e_1, _a;
        if (this.value) {
            if (this.isSingleSelection()) {
                return this.isDateEquals(this.value, dateMeta);
            }
            else if (this.isMultipleSelection()) {
                var selected = false;
                try {
                    for (var _b = __values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var date = _c.value;
                        selected = this.isDateEquals(date, dateMeta);
                        if (selected) {
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return selected;
            }
            else if (this.isRangeSelection()) {
                if (this.value[1])
                    return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
                else
                    return this.isDateEquals(this.value[0], dateMeta);
            }
        }
        else {
            return false;
        }
    };
    Calendar.prototype.isMonthSelected = function (month) {
        var day = this.value ? (Array.isArray(this.value) ? this.value[0].getDate() : this.value.getDate()) : 1;
        return this.isSelected({ year: this.currentYear, month: month, day: day, selectable: true });
    };
    Calendar.prototype.isDateEquals = function (value, dateMeta) {
        if (value)
            return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
            return false;
    };
    Calendar.prototype.isDateBetween = function (start, end, dateMeta) {
        var between = false;
        if (start && end) {
            var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
        }
        return between;
    };
    Calendar.prototype.isSingleSelection = function () {
        return this.selectionMode === 'single';
    };
    Calendar.prototype.isRangeSelection = function () {
        return this.selectionMode === 'range';
    };
    Calendar.prototype.isMultipleSelection = function () {
        return this.selectionMode === 'multiple';
    };
    Calendar.prototype.isToday = function (today, day, month, year) {
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    };
    Calendar.prototype.isSelectable = function (day, month, year, otherMonth) {
        var validMin = true;
        var validMax = true;
        var validDate = true;
        var validDay = true;
        if (otherMonth && !this.selectOtherMonths) {
            return false;
        }
        if (this.minDate) {
            if (this.minDate.getFullYear() > year) {
                validMin = false;
            }
            else if (this.minDate.getFullYear() === year) {
                if (this.minDate.getMonth() > month) {
                    validMin = false;
                }
                else if (this.minDate.getMonth() === month) {
                    if (this.minDate.getDate() > day) {
                        validMin = false;
                    }
                }
            }
        }
        if (this.maxDate) {
            if (this.maxDate.getFullYear() < year) {
                validMax = false;
            }
            else if (this.maxDate.getFullYear() === year) {
                if (this.maxDate.getMonth() < month) {
                    validMax = false;
                }
                else if (this.maxDate.getMonth() === month) {
                    if (this.maxDate.getDate() < day) {
                        validMax = false;
                    }
                }
            }
        }
        if (this.disabledDates) {
            validDate = !this.isDateDisabled(day, month, year);
        }
        if (this.disabledDays) {
            validDay = !this.isDayDisabled(day, month, year);
        }
        return validMin && validMax && validDate && validDay;
    };
    Calendar.prototype.isDateDisabled = function (day, month, year) {
        var e_2, _a;
        if (this.disabledDates) {
            try {
                for (var _b = __values(this.disabledDates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var disabledDate = _c.value;
                    if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                        return true;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return false;
    };
    Calendar.prototype.isDayDisabled = function (day, month, year) {
        if (this.disabledDays) {
            var weekday = new Date(year, month, day);
            var weekdayNumber = weekday.getDay();
            return this.disabledDays.indexOf(weekdayNumber) !== -1;
        }
        return false;
    };
    Calendar.prototype.onInputFocus = function (event) {
        this.focus = true;
        if (this.showOnFocus) {
            this.showOverlay();
        }
        this.onFocus.emit(event);
    };
    Calendar.prototype.onInputClick = function () {
        if (this.overlay && this.autoZIndex) {
            this.overlay.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex));
        }
        if (this.showOnFocus && !this.overlayVisible) {
            this.showOverlay();
        }
    };
    Calendar.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onBlur.emit(event);
        if (!this.keepInvalid) {
            this.updateInputfield();
        }
        this.onModelTouched();
    };
    Calendar.prototype.onButtonClick = function (event, inputfield) {
        if (!this.overlayVisible) {
            inputfield.focus();
            this.showOverlay();
        }
        else {
            this.hideOverlay();
        }
    };
    Calendar.prototype.onPrevButtonClick = function (event) {
        this.navigationState = { backward: true, button: true };
        this.navBackward(event);
    };
    Calendar.prototype.onNextButtonClick = function (event) {
        this.navigationState = { backward: false, button: true };
        this.navForward(event);
    };
    Calendar.prototype.onContainerButtonKeydown = function (event) {
        switch (event.which) {
            //tab
            case 9:
                if (!this.inline) {
                    this.trapFocus(event);
                }
                break;
            //escape
            case 27:
                this.overlayVisible = false;
                event.preventDefault();
                break;
            default:
                //Noop
                break;
        }
    };
    Calendar.prototype.onInputKeydown = function (event) {
        this.isKeydown = true;
        if (event.keyCode === 9 && this.contentViewChild) {
            this.trapFocus(event);
        }
        else if (event.keyCode === 27) {
            if (this.overlayVisible) {
                this.overlayVisible = false;
                event.preventDefault();
            }
        }
    };
    Calendar.prototype.onDateCellKeydown = function (event, date, groupIndex) {
        var cellContent = event.currentTarget;
        var cell = cellContent.parentElement;
        switch (event.which) {
            //down arrow
            case 40: {
                cellContent.tabIndex = '-1';
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(cell);
                var nextRow = cell.parentElement.nextElementSibling;
                if (nextRow) {
                    var focusCell = nextRow.children[cellIndex].children[0];
                    if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(focusCell, 'p-disabled')) {
                        this.navigationState = { backward: false };
                        this.navForward(event);
                    }
                    else {
                        nextRow.children[cellIndex].children[0].tabIndex = '0';
                        nextRow.children[cellIndex].children[0].focus();
                    }
                }
                else {
                    this.navigationState = { backward: false };
                    this.navForward(event);
                }
                event.preventDefault();
                break;
            }
            //up arrow
            case 38: {
                cellContent.tabIndex = '-1';
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(cell);
                var prevRow = cell.parentElement.previousElementSibling;
                if (prevRow) {
                    var focusCell = prevRow.children[cellIndex].children[0];
                    if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(focusCell, 'p-disabled')) {
                        this.navigationState = { backward: true };
                        this.navBackward(event);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    this.navigationState = { backward: true };
                    this.navBackward(event);
                }
                event.preventDefault();
                break;
            }
            //left arrow
            case 37: {
                cellContent.tabIndex = '-1';
                var prevCell = cell.previousElementSibling;
                if (prevCell) {
                    var focusCell = prevCell.children[0];
                    if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(focusCell, 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(focusCell.parentElement, 'p-datepicker-weeknumber')) {
                        this.navigateToMonth(true, groupIndex);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    this.navigateToMonth(true, groupIndex);
                }
                event.preventDefault();
                break;
            }
            //right arrow
            case 39: {
                cellContent.tabIndex = '-1';
                var nextCell = cell.nextElementSibling;
                if (nextCell) {
                    var focusCell = nextCell.children[0];
                    if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(focusCell, 'p-disabled')) {
                        this.navigateToMonth(false, groupIndex);
                    }
                    else {
                        focusCell.tabIndex = '0';
                        focusCell.focus();
                    }
                }
                else {
                    this.navigateToMonth(false, groupIndex);
                }
                event.preventDefault();
                break;
            }
            //enter
            case 13: {
                this.onDateSelect(event, date);
                event.preventDefault();
                break;
            }
            //escape
            case 27: {
                this.overlayVisible = false;
                event.preventDefault();
                break;
            }
            //tab
            case 9: {
                if (!this.inline) {
                    this.trapFocus(event);
                }
                break;
            }
            default:
                //no op
                break;
        }
    };
    Calendar.prototype.onMonthCellKeydown = function (event, index) {
        var cell = event.currentTarget;
        switch (event.which) {
            //arrows
            case 38:
            case 40: {
                cell.tabIndex = '-1';
                var cells = cell.parentElement.children;
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(cell);
                var nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
                if (nextCell) {
                    nextCell.tabIndex = '0';
                    nextCell.focus();
                }
                event.preventDefault();
                break;
            }
            //left arrow
            case 37: {
                cell.tabIndex = '-1';
                var prevCell = cell.previousElementSibling;
                if (prevCell) {
                    prevCell.tabIndex = '0';
                    prevCell.focus();
                }
                event.preventDefault();
                break;
            }
            //right arrow
            case 39: {
                cell.tabIndex = '-1';
                var nextCell = cell.nextElementSibling;
                if (nextCell) {
                    nextCell.tabIndex = '0';
                    nextCell.focus();
                }
                event.preventDefault();
                break;
            }
            //enter
            case 13: {
                this.onMonthSelect(event, index);
                event.preventDefault();
                break;
            }
            //escape
            case 27: {
                this.overlayVisible = false;
                event.preventDefault();
                break;
            }
            //tab
            case 9: {
                if (!this.inline) {
                    this.trapFocus(event);
                }
                break;
            }
            default:
                //no op
                break;
        }
    };
    Calendar.prototype.navigateToMonth = function (prev, groupIndex) {
        if (prev) {
            if (this.numberOfMonths === 1 || (groupIndex === 0)) {
                this.navigationState = { backward: true };
                this.navBackward(event);
            }
            else {
                var prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
                var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(prevMonthContainer, '.p-datepicker-calendar td a');
                var focusCell = cells[cells.length - 1];
                focusCell.tabIndex = '0';
                focusCell.focus();
            }
        }
        else {
            if (this.numberOfMonths === 1 || (groupIndex === this.numberOfMonths - 1)) {
                this.navigationState = { backward: false };
                this.navForward(event);
            }
            else {
                var nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
                var focusCell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(nextMonthContainer, '.p-datepicker-calendar td a');
                focusCell.tabIndex = '0';
                focusCell.focus();
            }
        }
    };
    Calendar.prototype.updateFocus = function () {
        var cell;
        if (this.navigationState) {
            if (this.navigationState.button) {
                this.initFocusableCell();
                if (this.navigationState.backward)
                    primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.p-datepicker-prev').focus();
                else
                    primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.p-datepicker-next').focus();
            }
            else {
                if (this.navigationState.backward) {
                    var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.contentViewChild.nativeElement, '.p-datepicker-calendar td a');
                    cell = cells[cells.length - 1];
                }
                else {
                    cell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.p-datepicker-calendar td a');
                }
                if (cell) {
                    cell.tabIndex = '0';
                    cell.focus();
                }
            }
            this.navigationState = null;
        }
        else {
            this.initFocusableCell();
        }
    };
    Calendar.prototype.initFocusableCell = function () {
        var cell;
        if (this.view === 'month') {
            var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
            var selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month.p-highlight');
            cells.forEach(function (cell) { return cell.tabIndex = -1; });
            cell = selectedCell || cells[0];
            if (cells.length === 0) {
                var disabledCells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month.p-disabled[tabindex = "0"]');
                disabledCells.forEach(function (cell) { return cell.tabIndex = -1; });
            }
        }
        else {
            cell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, 'span.p-highlight');
            if (!cell) {
                var todayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, 'td.p-datepicker-today a:not(.p-disabled)');
                if (todayCell)
                    cell = todayCell;
                else
                    cell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.p-datepicker-calendar td a');
            }
        }
        if (cell) {
            cell.tabIndex = '0';
        }
    };
    Calendar.prototype.trapFocus = function (event) {
        var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getFocusableElements(this.contentViewChild.nativeElement);
        if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
                focusableElements[0].focus();
            }
            else {
                var focusedIndex = focusableElements.indexOf(document.activeElement);
                if (event.shiftKey) {
                    if (focusedIndex == -1 || focusedIndex === 0) {
                        if (this.focusTrap) {
                            focusableElements[focusableElements.length - 1].focus();
                        }
                        else {
                            if (focusedIndex === -1)
                                return this.hideOverlay();
                            else if (focusedIndex === 0)
                                return;
                        }
                    }
                    else {
                        focusableElements[focusedIndex - 1].focus();
                    }
                }
                else {
                    if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1)) {
                        if (!this.focusTrap && focusedIndex != -1)
                            return this.hideOverlay();
                        else
                            focusableElements[0].focus();
                    }
                    else {
                        focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
        event.preventDefault();
    };
    Calendar.prototype.onMonthDropdownChange = function (m) {
        this.currentMonth = parseInt(m);
        this.onMonthChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        this.createMonths(this.currentMonth, this.currentYear);
    };
    Calendar.prototype.onYearDropdownChange = function (y) {
        this.currentYear = parseInt(y);
        this.onYearChange.emit({ month: this.currentMonth + 1, year: this.currentYear });
        this.createMonths(this.currentMonth, this.currentYear);
    };
    Calendar.prototype.validateTime = function (hour, minute, second, pm) {
        var value = this.value;
        var convertedHour = this.convertTo24Hour(hour, pm);
        if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
        }
        var valueDateString = value ? value.toDateString() : null;
        if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (this.minDate.getHours() > convertedHour) {
                return false;
            }
            if (this.minDate.getHours() === convertedHour) {
                if (this.minDate.getMinutes() > minute) {
                    return false;
                }
                if (this.minDate.getMinutes() === minute) {
                    if (this.minDate.getSeconds() > second) {
                        return false;
                    }
                }
            }
        }
        if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (this.maxDate.getHours() < convertedHour) {
                return false;
            }
            if (this.maxDate.getHours() === convertedHour) {
                if (this.maxDate.getMinutes() < minute) {
                    return false;
                }
                if (this.maxDate.getMinutes() === minute) {
                    if (this.maxDate.getSeconds() < second) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    Calendar.prototype.incrementHour = function (event) {
        var prevHour = this.currentHour;
        var newHour = this.currentHour + this.stepHour;
        var newPM = this.pm;
        if (this.hourFormat == '24')
            newHour = (newHour >= 24) ? (newHour - 24) : newHour;
        else if (this.hourFormat == '12') {
            // Before the AM/PM break, now after
            if (prevHour < 12 && newHour > 11) {
                newPM = !this.pm;
            }
            newHour = (newHour >= 13) ? (newHour - 12) : newHour;
        }
        if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
            this.currentHour = newHour;
            this.pm = newPM;
        }
        event.preventDefault();
    };
    Calendar.prototype.onTimePickerElementMouseDown = function (event, type, direction) {
        if (!this.disabled) {
            this.repeat(event, null, type, direction);
            event.preventDefault();
        }
    };
    Calendar.prototype.onTimePickerElementMouseUp = function (event) {
        if (!this.disabled) {
            this.clearTimePickerTimer();
            this.updateTime();
        }
    };
    Calendar.prototype.onTimePickerElementMouseOut = function (event) {
        if (!this.disabled && this.timePickerTimer) {
            this.clearTimePickerTimer();
            this.updateTime();
        }
    };
    Calendar.prototype.repeat = function (event, interval, type, direction) {
        var _this = this;
        var i = interval || 500;
        this.clearTimePickerTimer();
        this.timePickerTimer = setTimeout(function () {
            _this.repeat(event, 100, type, direction);
            _this.cd.markForCheck();
        }, i);
        switch (type) {
            case 0:
                if (direction === 1)
                    this.incrementHour(event);
                else
                    this.decrementHour(event);
                break;
            case 1:
                if (direction === 1)
                    this.incrementMinute(event);
                else
                    this.decrementMinute(event);
                break;
            case 2:
                if (direction === 1)
                    this.incrementSecond(event);
                else
                    this.decrementSecond(event);
                break;
        }
        this.updateInputfield();
    };
    Calendar.prototype.clearTimePickerTimer = function () {
        if (this.timePickerTimer) {
            clearTimeout(this.timePickerTimer);
        }
    };
    Calendar.prototype.decrementHour = function (event) {
        var newHour = this.currentHour - this.stepHour;
        var newPM = this.pm;
        if (this.hourFormat == '24')
            newHour = (newHour < 0) ? (24 + newHour) : newHour;
        else if (this.hourFormat == '12') {
            // If we were at noon/midnight, then switch
            if (this.currentHour === 12) {
                newPM = !this.pm;
            }
            newHour = (newHour <= 0) ? (12 + newHour) : newHour;
        }
        if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
            this.currentHour = newHour;
            this.pm = newPM;
        }
        event.preventDefault();
    };
    Calendar.prototype.incrementMinute = function (event) {
        var newMinute = this.currentMinute + this.stepMinute;
        newMinute = (newMinute > 59) ? newMinute - 60 : newMinute;
        if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
            this.currentMinute = newMinute;
        }
        event.preventDefault();
    };
    Calendar.prototype.decrementMinute = function (event) {
        var newMinute = this.currentMinute - this.stepMinute;
        newMinute = (newMinute < 0) ? 60 + newMinute : newMinute;
        if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
            this.currentMinute = newMinute;
        }
        event.preventDefault();
    };
    Calendar.prototype.incrementSecond = function (event) {
        var newSecond = this.currentSecond + this.stepSecond;
        newSecond = (newSecond > 59) ? newSecond - 60 : newSecond;
        if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
            this.currentSecond = newSecond;
        }
        event.preventDefault();
    };
    Calendar.prototype.decrementSecond = function (event) {
        var newSecond = this.currentSecond - this.stepSecond;
        newSecond = (newSecond < 0) ? 60 + newSecond : newSecond;
        if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
            this.currentSecond = newSecond;
        }
        event.preventDefault();
    };
    Calendar.prototype.updateTime = function () {
        var value = this.value;
        if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
        }
        if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
        }
        value = value ? new Date(value.getTime()) : new Date();
        if (this.hourFormat == '12') {
            if (this.currentHour === 12)
                value.setHours(this.pm ? 12 : 0);
            else
                value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
        }
        else {
            value.setHours(this.currentHour);
        }
        value.setMinutes(this.currentMinute);
        value.setSeconds(this.currentSecond);
        if (this.isRangeSelection()) {
            if (this.value[1])
                value = [this.value[0], value];
            else
                value = [value, null];
        }
        if (this.isMultipleSelection()) {
            value = __spread(this.value.slice(0, -1), [value]);
        }
        this.updateModel(value);
        this.onSelect.emit(value);
        this.updateInputfield();
    };
    Calendar.prototype.toggleAMPM = function (event) {
        var newPM = !this.pm;
        if (this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, newPM)) {
            this.pm = newPM;
            this.updateTime();
        }
        event.preventDefault();
    };
    Calendar.prototype.onUserInput = function (event) {
        // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
        if (!this.isKeydown) {
            return;
        }
        this.isKeydown = false;
        var val = event.target.value;
        try {
            var value = this.parseValueFromString(val);
            if (this.isValidSelection(value)) {
                this.updateModel(value);
                this.updateUI();
            }
        }
        catch (err) {
            //invalid date
            this.updateModel(null);
        }
        this.filled = val != null && val.length;
        this.onInput.emit(event);
    };
    Calendar.prototype.isValidSelection = function (value) {
        var _this = this;
        var isValid = true;
        if (this.isSingleSelection()) {
            if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
                isValid = false;
            }
        }
        else if (value.every(function (v) { return _this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false); })) {
            if (this.isRangeSelection()) {
                isValid = value.length > 1 && value[1] > value[0] ? true : false;
            }
        }
        return isValid;
    };
    Calendar.prototype.parseValueFromString = function (text) {
        var e_3, _a;
        if (!text || text.trim().length === 0) {
            return null;
        }
        var value;
        if (this.isSingleSelection()) {
            value = this.parseDateTime(text);
        }
        else if (this.isMultipleSelection()) {
            var tokens = text.split(this.multipleSeparator);
            value = [];
            try {
                for (var tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
                    var token = tokens_1_1.value;
                    value.push(this.parseDateTime(token.trim()));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else if (this.isRangeSelection()) {
            var tokens = text.split(' ' + this.rangeSeparator + ' ');
            value = [];
            for (var i = 0; i < tokens.length; i++) {
                value[i] = this.parseDateTime(tokens[i].trim());
            }
        }
        return value;
    };
    Calendar.prototype.parseDateTime = function (text) {
        var date;
        var parts = text.split(' ');
        if (this.timeOnly) {
            date = new Date();
            this.populateTime(date, parts[0], parts[1]);
        }
        else {
            var dateFormat = this.getDateFormat();
            if (this.showTime) {
                var ampm = this.hourFormat == '12' ? parts.pop() : null;
                var timeString = parts.pop();
                date = this.parseDate(parts.join(' '), dateFormat);
                this.populateTime(date, timeString, ampm);
            }
            else {
                date = this.parseDate(text, dateFormat);
            }
        }
        return date;
    };
    Calendar.prototype.populateTime = function (value, timeString, ampm) {
        if (this.hourFormat == '12' && !ampm) {
            throw 'Invalid Time';
        }
        this.pm = (ampm === 'PM' || ampm === 'pm');
        var time = this.parseTime(timeString);
        value.setHours(time.hour);
        value.setMinutes(time.minute);
        value.setSeconds(time.second);
    };
    Calendar.prototype.updateUI = function () {
        var val = this.value || this.defaultDate || new Date();
        if (Array.isArray(val)) {
            val = val[0];
        }
        this.currentMonth = val.getMonth();
        this.currentYear = val.getFullYear();
        this.createMonths(this.currentMonth, this.currentYear);
        if (this.showTime || this.timeOnly) {
            this.setCurrentHourPM(val.getHours());
            this.currentMinute = val.getMinutes();
            this.currentSecond = val.getSeconds();
        }
    };
    Calendar.prototype.showOverlay = function () {
        if (!this.overlayVisible) {
            this.updateUI();
            this.overlayVisible = true;
        }
    };
    Calendar.prototype.hideOverlay = function () {
        this.overlayVisible = false;
        this.clearTimePickerTimer();
        if (this.touchUI) {
            this.disableModality();
        }
        this.cd.markForCheck();
    };
    Calendar.prototype.toggle = function () {
        if (!this.inline) {
            if (!this.overlayVisible) {
                this.showOverlay();
                this.inputfieldViewChild.nativeElement.focus();
            }
            else {
                this.hideOverlay();
            }
        }
    };
    Calendar.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
                if (!this.inline) {
                    this.overlay = event.element;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex));
                    }
                    this.alignOverlay();
                    this.onShow.emit(event);
                }
                break;
            case 'void':
                this.onOverlayHide();
                this.onClose.emit(event);
                break;
        }
    };
    Calendar.prototype.onOverlayAnimationDone = function (event) {
        switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
                if (!this.inline) {
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                }
                break;
        }
    };
    Calendar.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.overlay, this.appendTo);
        }
    };
    Calendar.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    Calendar.prototype.alignOverlay = function () {
        if (this.touchUI) {
            this.enableModality(this.overlay);
        }
        else {
            if (this.appendTo)
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].absolutePosition(this.overlay, this.inputfieldViewChild.nativeElement);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].relativePosition(this.overlay, this.inputfieldViewChild.nativeElement);
        }
    };
    Calendar.prototype.enableModality = function (element) {
        var _this = this;
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(element.style.zIndex) - 1);
            var maskStyleClass = 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker';
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addMultipleClasses(this.mask, maskStyleClass);
            this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
                _this.disableModality();
            });
            document.body.appendChild(this.mask);
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
        }
    };
    Calendar.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            var bodyChildren = document.body.children;
            var hasBlockerMasks = void 0;
            for (var i = 0; i < bodyChildren.length; i++) {
                var bodyChild = bodyChildren[i];
                if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
                    hasBlockerMasks = true;
                    break;
                }
            }
            if (!hasBlockerMasks) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
            }
            this.unbindMaskClickListener();
            this.mask = null;
        }
    };
    Calendar.prototype.unbindMaskClickListener = function () {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    };
    Calendar.prototype.writeValue = function (value) {
        this.value = value;
        if (this.value && typeof this.value === 'string') {
            this.value = this.parseValueFromString(this.value);
        }
        this.updateInputfield();
        this.updateUI();
        this.cd.markForCheck();
    };
    Calendar.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Calendar.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Calendar.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Calendar.prototype.getDateFormat = function () {
        return this.dateFormat || this.locale.dateFormat;
    };
    // Ported from jquery-ui datepicker formatDate
    Calendar.prototype.formatDate = function (date, format) {
        if (!date) {
            return '';
        }
        var iFormat;
        var lookAhead = function (match) {
            var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if (matches) {
                iFormat++;
            }
            return matches;
        }, formatNumber = function (match, value, len) {
            var num = '' + value;
            if (lookAhead(match)) {
                while (num.length < len) {
                    num = '0' + num;
                }
            }
            return num;
        }, formatName = function (match, value, shortNames, longNames) {
            return (lookAhead(match) ? longNames[value] : shortNames[value]);
        };
        var output = '';
        var literal = false;
        if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                        literal = false;
                    }
                    else {
                        output += format.charAt(iFormat);
                    }
                }
                else {
                    switch (format.charAt(iFormat)) {
                        case 'd':
                            output += formatNumber('d', date.getDate(), 2);
                            break;
                        case 'D':
                            output += formatName('D', date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
                            break;
                        case 'o':
                            output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() -
                                new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case 'm':
                            output += formatNumber('m', date.getMonth() + 1, 2);
                            break;
                        case 'M':
                            output += formatName('M', date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
                            break;
                        case 'y':
                            output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
                            break;
                        case '@':
                            output += date.getTime();
                            break;
                        case '!':
                            output += date.getTime() * 10000 + this.ticksTo1970;
                            break;
                        case '\'':
                            if (lookAhead('\'')) {
                                output += '\'';
                            }
                            else {
                                literal = true;
                            }
                            break;
                        default:
                            output += format.charAt(iFormat);
                    }
                }
            }
        }
        return output;
    };
    Calendar.prototype.formatTime = function (date) {
        if (!date) {
            return '';
        }
        var output = '';
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (this.hourFormat == '12' && hours > 11 && hours != 12) {
            hours -= 12;
        }
        if (this.hourFormat == '12') {
            output += hours === 0 ? 12 : (hours < 10) ? '0' + hours : hours;
        }
        else {
            output += (hours < 10) ? '0' + hours : hours;
        }
        output += ':';
        output += (minutes < 10) ? '0' + minutes : minutes;
        if (this.showSeconds) {
            output += ':';
            output += (seconds < 10) ? '0' + seconds : seconds;
        }
        if (this.hourFormat == '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
        }
        return output;
    };
    Calendar.prototype.parseTime = function (value) {
        var tokens = value.split(':');
        var validTokenLength = this.showSeconds ? 3 : 2;
        if (tokens.length !== validTokenLength) {
            throw "Invalid time";
        }
        var h = parseInt(tokens[0]);
        var m = parseInt(tokens[1]);
        var s = this.showSeconds ? parseInt(tokens[2]) : null;
        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12) || (this.showSeconds && (isNaN(s) || s > 59))) {
            throw "Invalid time";
        }
        else {
            if (this.hourFormat == '12') {
                if (h !== 12 && this.pm) {
                    h += 12;
                }
                else if (!this.pm && h === 12) {
                    h -= 12;
                }
            }
            return { hour: h, minute: m, second: s };
        }
    };
    // Ported from jquery-ui datepicker parseDate
    Calendar.prototype.parseDate = function (value, format) {
        if (format == null || value == null) {
            throw "Invalid arguments";
        }
        value = (typeof value === "object" ? value.toString() : value + "");
        if (value === "") {
            return null;
        }
        var iFormat, dim, extra, iValue = 0, shortYearCutoff = (typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10)), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function (match) {
            var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if (matches) {
                iFormat++;
            }
            return matches;
        }, getNumber = function (match) {
            var isDoubled = lookAhead(match), size = (match === "@" ? 14 : (match === "!" ? 20 :
                (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))), minSize = (match === "y" ? size : 1), digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
            if (!num) {
                throw "Missing number at position " + iValue;
            }
            iValue += num[0].length;
            return parseInt(num[0], 10);
        }, getName = function (match, shortNames, longNames) {
            var index = -1;
            var arr = lookAhead(match) ? longNames : shortNames;
            var names = [];
            for (var i = 0; i < arr.length; i++) {
                names.push([i, arr[i]]);
            }
            names.sort(function (a, b) {
                return -(a[1].length - b[1].length);
            });
            for (var i = 0; i < names.length; i++) {
                var name_1 = names[i][1];
                if (value.substr(iValue, name_1.length).toLowerCase() === name_1.toLowerCase()) {
                    index = names[i][0];
                    iValue += name_1.length;
                    break;
                }
            }
            if (index !== -1) {
                return index + 1;
            }
            else {
                throw "Unknown name at position " + iValue;
            }
        }, checkLiteral = function () {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
                throw "Unexpected literal at position " + iValue;
            }
            iValue++;
        };
        if (this.view === 'month') {
            day = 1;
        }
        for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                    literal = false;
                }
                else {
                    checkLiteral();
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "'":
                        if (lookAhead("'")) {
                            checkLiteral();
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default:
                        checkLiteral();
                }
            }
        }
        if (iValue < value.length) {
            extra = value.substr(iValue);
            if (!/^\s+/.test(extra)) {
                throw "Extra/unparsed characters found in date: " + extra;
            }
        }
        if (year === -1) {
            year = new Date().getFullYear();
        }
        else if (year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
        }
        if (doy > -1) {
            month = 1;
            day = doy;
            do {
                dim = this.getDaysCountInMonth(year, month - 1);
                if (day <= dim) {
                    break;
                }
                month++;
                day -= dim;
            } while (true);
        }
        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw "Invalid date"; // E.g. 31/02/00
        }
        return date;
    };
    Calendar.prototype.daylightSavingAdjust = function (date) {
        if (!date) {
            return null;
        }
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
    };
    Calendar.prototype.updateFilledState = function () {
        this.filled = this.inputFieldValue && this.inputFieldValue != '';
    };
    Calendar.prototype.onTodayButtonClick = function (event) {
        var date = new Date();
        var dateMeta = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear(), otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear, today: true, selectable: true };
        this.onDateSelect(event, dateMeta);
        this.onTodayClick.emit(event);
    };
    Calendar.prototype.onClearButtonClick = function (event) {
        this.updateModel(null);
        this.updateInputfield();
        this.hideOverlay();
        this.onClearClick.emit(event);
    };
    Calendar.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.zone.runOutsideAngular(function () {
                _this.documentClickListener = _this.renderer.listen('document', 'click', function (event) {
                    if (_this.isOutsideClicked(event) && _this.overlayVisible) {
                        _this.zone.run(function () {
                            _this.hideOverlay();
                            _this.onClickOutside.emit(event);
                            _this.cd.markForCheck();
                        });
                    }
                });
            });
        }
    };
    Calendar.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    Calendar.prototype.bindDocumentResizeListener = function () {
        if (!this.documentResizeListener && !this.touchUI) {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        }
    };
    Calendar.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    Calendar.prototype.isOutsideClicked = function (event) {
        return !(this.el.nativeElement.isSameNode(event.target) || this.isNavIconClicked(event) ||
            this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
    };
    Calendar.prototype.isNavIconClicked = function (event) {
        return (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-datepicker-prev') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-datepicker-prev-icon')
            || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-datepicker-next') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-datepicker-next-icon'));
    };
    Calendar.prototype.onWindowResize = function () {
        if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isAndroid()) {
            this.hideOverlay();
        }
    };
    Calendar.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindMaskClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
        this.disableModality();
    };
    Calendar.prototype.ngOnDestroy = function () {
        this.clearTimePickerTimer();
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    Calendar.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    Calendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'p-calendar',
                    template: "\n        <span [ngClass]=\"{'p-calendar':true, 'p-calendar-w-btn': showIcon, 'p-calendar-timeonly': timeOnly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-template [ngIf]=\"!inline\">\n                <input #inputfield type=\"text\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.required]=\"required\" [attr.aria-required]=\"required\" [value]=\"inputFieldValue\" (focus)=\"onInputFocus($event)\" (keydown)=\"onInputKeydown($event)\" (click)=\"onInputClick()\" (blur)=\"onInputBlur($event)\"\n                    [readonly]=\"readonlyInput\" (input)=\"onUserInput($event)\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [placeholder]=\"placeholder||''\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\"\n                    [ngClass]=\"'p-inputtext p-component'\" autocomplete=\"off\" [attr.aria-labelledby]=\"ariaLabelledBy\"\n                    ><button type=\"button\" [icon]=\"icon\" pButton pRipple *ngIf=\"showIcon\" (click)=\"onButtonClick($event,inputfield)\" class=\"p-datepicker-trigger\"\n                    [disabled]=\"disabled\" tabindex=\"0\"></button>\n            </ng-template>\n            <div #contentWrapper [class]=\"panelStyleClass\" [ngStyle]=\"panelStyle\" [ngClass]=\"{'p-datepicker p-component': true, 'p-datepicker-inline':inline,\n                'p-disabled':disabled,'p-datepicker-timeonly':timeOnly,'p-datepicker-multiple-month': this.numberOfMonths > 1, 'p-datepicker-monthpicker': (view === 'month'), 'p-datepicker-touch-ui': touchUI}\"\n                [@overlayAnimation]=\"touchUI ? {value: 'visibleTouchUI', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}: \n                                            {value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" \n                                            [@.disabled]=\"inline === true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationDone($event)\" *ngIf=\"inline || overlayVisible\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                <ng-container *ngIf=\"!timeOnly\">\n                    <div class=\"p-datepicker-group\" *ngFor=\"let month of months; let i = index;\">\n                        <div class=\"p-datepicker-header\">\n                            <button class=\"p-datepicker-prev p-link\" (click)=\"onPrevButtonClick($event)\" (keydown.enter)=\"onPrevButtonClick($event)\" *ngIf=\"i === 0\" type=\"button\" pRipple>\n                                <span class=\"p-datepicker-prev-icon pi pi-chevron-left\"></span>\n                            </button>\n                            <div class=\"p-datepicker-title\">\n                                <span class=\"p-datepicker-month\" *ngIf=\"!monthNavigator && (view !== 'month')\">{{locale.monthNames[month.month]}}</span>\n                                <select tabindex=\"0\" class=\"p-datepicker-month\" *ngIf=\"monthNavigator && (view !== 'month') && numberOfMonths === 1\" (change)=\"onMonthDropdownChange($event.target.value)\">\n                                    <option [value]=\"i\" *ngFor=\"let monthName of locale.monthNames;let i = index\" [selected]=\"i === month.month\">{{monthName}}</option>\n                                </select>\n                                <select tabindex=\"0\" class=\"p-datepicker-year\" *ngIf=\"yearNavigator && numberOfMonths === 1\" (change)=\"onYearDropdownChange($event.target.value)\">\n                                    <option [value]=\"year\" *ngFor=\"let year of yearOptions\" [selected]=\"year === currentYear\">{{year}}</option>\n                                </select>\n                                <span class=\"p-datepicker-year\" *ngIf=\"!yearNavigator\">{{view === 'month' ? currentYear : month.year}}</span>\n                            </div>\n                            <button  class=\"p-datepicker-next p-link\" (click)=\"onNextButtonClick($event)\" (keydown.enter)=\"onNextButtonClick($event)\" *ngIf=\"numberOfMonths === 1 ? true : (i === numberOfMonths -1)\" type=\"button\" pRipple>\n                                <span class=\"p-datepicker-next-icon pi pi-chevron-right\"></span>\n                            </button>\n                        </div>\n                        <div class=\"p-datepicker-calendar-container\" *ngIf=\"view ==='date'\">\n                            <table class=\"p-datepicker-calendar\">\n                                <thead>\n                                    <tr>\n                                        <th *ngIf=\"showWeek\" class=\"p-datepicker-weekheader p-disabled\">\n                                            <span>{{locale['weekHeader']}}</span>\n                                        </th>\n                                        <th scope=\"col\" *ngFor=\"let weekDay of weekDays;let begin = first; let end = last\">\n                                            <span>{{weekDay}}</span>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let week of month.dates; let j = index;\">\n                                        <td *ngIf=\"showWeek\" class=\"p-datepicker-weeknumber\">\n                                            <span>\n                                                {{month.weekNumbers[j]}}\n                                            </span>\n                                        </td>\n                                        <td *ngFor=\"let date of week\" [ngClass]=\"{'p-datepicker-other-month': date.otherMonth,'p-datepicker-today':date.today}\">\n                                            <ng-container *ngIf=\"date.otherMonth ? showOtherMonths : true\">\n                                                <span [ngClass]=\"{'p-highlight':isSelected(date), 'p-disabled': !date.selectable}\"\n                                                    (click)=\"onDateSelect($event,date)\" draggable=\"false\" (keydown)=\"onDateCellKeydown($event,date,i)\" pRipple>\n                                                    <ng-container *ngIf=\"!dateTemplate\">{{date.day}}</ng-container>\n                                                    <ng-container *ngTemplateOutlet=\"dateTemplate; context: {$implicit: date}\"></ng-container>\n                                                </span>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"p-monthpicker\" *ngIf=\"view === 'month'\">\n                        <span *ngFor=\"let m of monthPickerValues; let i = index\" (click)=\"onMonthSelect($event, i)\" (keydown)=\"onMonthCellKeydown($event,i)\" class=\"p-monthpicker-month\" [ngClass]=\"{'p-highlight': isMonthSelected(i), 'p-disabled':!isSelectable(1, i, this.currentYear, false)}\" pRipple>\n                            {{m}}\n                        </span>\n                    </div>\n                </ng-container>\n                <div class=\"p-timepicker\" *ngIf=\"showTime||timeOnly\">\n                    <div class=\"p-hour-picker\">\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementHour($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\" pRipple>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </button>\n                        <span [ngStyle]=\"{'display': currentHour < 10 ? 'inline': 'none'}\">0</span><span>{{currentHour}}</span>\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementHour($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </button>\n                    </div>\n                    <div class=\"p-separator\">\n                        <span>{{timeSeparator}}</span>\n                    </div>\n                    <div class=\"p-minute-picker\">\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementMinute($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </button>\n                        <span [ngStyle]=\"{'display': currentMinute < 10 ? 'inline': 'none'}\">0</span><span>{{currentMinute}}</span>\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementMinute($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </button>\n                    </div>\n                    <div class=\"p-separator\">\n                        <span>{{timeSeparator}}</span>\n                    </div>\n                    <div class=\"p-second-picker\" *ngIf=\"showSeconds\">\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementSecond($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </button>\n                        <span [ngStyle]=\"{'display': currentSecond < 10 ? 'inline': 'none'}\">0</span><span>{{currentSecond}}</span>\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementSecond($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </button>\n                    </div>\n                    <div class=\"p-ampm-picker\" *ngIf=\"hourFormat=='12'\">\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"toggleAMPM($event)\" (keydown.enter)=\"toggleAMPM($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </button>\n                        <span>{{pm ? 'PM' : 'AM'}}</span>\n                        <button class=\"p-link\" type=\"button\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"toggleAMPM($event)\" (keydown.enter)=\"toggleAMPM($event)\" pRipple>>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"p-datepicker-buttonbar\" *ngIf=\"showButtonBar\">\n                    <button type=\"button\" [label]=\"_locale.today\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"onTodayButtonClick($event)\" pButton pRipple [ngClass]=\"[todayButtonStyleClass]\"></button>\n                    <button type=\"button\" [label]=\"_locale.clear\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"onClearButtonClick($event)\" pButton pRipple [ngClass]=\"[clearButtonStyleClass]\"></button>\n                </div>\n                <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n            </div>\n        </span>\n    ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('overlayAnimation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visibleTouchUI', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translate(-50%,-50%)',
                                opacity: 1
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scaleY(0.8)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: '*' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visibleTouchUI', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translate3d(-50%, -40%, 0) scale(0.9)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{showTransitionParams}}')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visibleTouchUI => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(('{{hideTransitionParams}}'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                    opacity: 0,
                                    transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
                                }))
                            ])
                        ])
                    ],
                    host: {
                        '[class.p-inputwrapper-filled]': 'filled',
                        '[class.p-inputwrapper-focus]': 'focus'
                    },
                    providers: [CALENDAR_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".p-calendar{position:relative;display:-ms-inline-flexbox;display:inline-flex}.p-calendar .p-inputtext{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}.p-calendar-w-btn .p-inputtext{border-top-right-radius:0;border-bottom-right-radius:0}.p-calendar-w-btn .p-datepicker-trigger{border-top-left-radius:0;border-bottom-left-radius:0}.p-fluid .p-calendar{display:-ms-flexbox;display:flex}.p-fluid .p-calendar .p-inputtext{width:1%}.p-calendar .p-datepicker{min-width:100%}.p-datepicker{width:auto;position:absolute}.p-datepicker-inline{display:-ms-inline-flexbox;display:inline-flex;position:static}.p-datepicker-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.p-datepicker-header .p-datepicker-title{margin:0 auto}.p-datepicker-next,.p-datepicker-prev{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative}.p-datepicker-multiple-month{display:-ms-flexbox;display:flex}.p-datepicker table{width:100%;border-collapse:collapse}.p-datepicker td>span{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:0 auto;overflow:hidden;position:relative}.p-monthpicker-month{width:33.3%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-datepicker-buttonbar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.p-timepicker{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.p-timepicker button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-timepicker>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}.p-calendar .p-datepicker-touch-ui,.p-datepicker-touch-ui{position:fixed;top:50%;left:50%;min-width:80vw;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                },] }
    ];
    Calendar.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    Calendar.propDecorators = {
        defaultDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputStyleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multipleSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rangeSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showOtherMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectOtherMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        readonlyInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shortYearCutoff: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        monthNavigator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearNavigator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        timeOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepSecond: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dataType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDateCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showButtonBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        todayButtonStyleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearButtonStyleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        baseZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panelStyleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panelStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        keepInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideOnDateTimeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        numberOfMonths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        touchUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        timeSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusTrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTransitionOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideTransitionOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onTodayClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClearClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMonthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onYearChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"],] }],
        tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputfieldViewChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputfield', { static: false },] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper', { static: false },] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabledDates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabledDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return Calendar;
}());
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_4__["RippleModule"]],
                    exports: [Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
                    declarations: [Calendar]
                },] }
    ];
    return CalendarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-calendar.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-dom.js":
/*!***************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-dom.js ***!
  \***************************************************/
/*! exports provided: DomHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return DomHandler; });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * @dynamic is for runtime initializing DomHandler.browser
 *
 * If delete below comment, we can see this error message:
 *  Metadata collected contains an error that will be reported at runtime:
 *  Only initialized variables and constants can be referenced
 *  because the value of this variable is needed by the template compiler.
 */
// @dynamic
var DomHandler = /** @class */ (function () {
    function DomHandler() {
    }
    DomHandler.addClass = function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    };
    DomHandler.addMultipleClasses = function (element, className) {
        if (element.classList) {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }
        }
        else {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    };
    DomHandler.removeClass = function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    DomHandler.hasClass = function (element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    };
    DomHandler.siblings = function (element) {
        return Array.prototype.filter.call(element.parentNode.children, function (child) {
            return child !== element;
        });
    };
    DomHandler.find = function (element, selector) {
        return Array.from(element.querySelectorAll(selector));
    };
    DomHandler.findSingle = function (element, selector) {
        if (element) {
            return element.querySelector(selector);
        }
        return null;
    };
    DomHandler.index = function (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.indexWithinGroup = function (element, attributeName) {
        var children = element.parentNode ? element.parentNode.childNodes : [];
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.relativePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top, left;
        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            element.style.transformOrigin = 'bottom';
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
            element.style.transformOrigin = 'top';
        }
        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.absolutePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            element.style.transformOrigin = 'bottom';
            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
            element.style.transformOrigin = 'top';
        }
        if (targetOffset.left + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.getHiddenElementOuterHeight = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    };
    DomHandler.getHiddenElementOuterWidth = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    };
    DomHandler.getHiddenElementDimensions = function (element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    };
    DomHandler.scrollInView = function (container, item) {
        var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        var containerRect = container.getBoundingClientRect();
        var itemRect = item.getBoundingClientRect();
        var offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        var scroll = container.scrollTop;
        var elementHeight = container.clientHeight;
        var itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    };
    DomHandler.fadeIn = function (element, duration) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;
        var tick = function () {
            opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    };
    DomHandler.fadeOut = function (element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        var fading = setInterval(function () {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }, interval);
    };
    DomHandler.getWindowScrollTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    };
    DomHandler.getWindowScrollLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    DomHandler.matches = function (element, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(element, selector);
    };
    DomHandler.getOuterWidth = function (el, margin) {
        var width = el.offsetWidth;
        if (margin) {
            var style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    };
    DomHandler.getHorizontalPadding = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    };
    DomHandler.getHorizontalMargin = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    };
    DomHandler.innerWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.width = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.getInnerHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    };
    DomHandler.getOuterHeight = function (el, margin) {
        var height = el.offsetHeight;
        if (margin) {
            var style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    };
    DomHandler.getHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
    };
    DomHandler.getWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
    };
    DomHandler.getViewport = function () {
        var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    DomHandler.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    };
    DomHandler.replaceElementWith = function (element, replacementElement) {
        var parentNode = element.parentNode;
        if (!parentNode)
            throw "Can't replace element";
        return parentNode.replaceChild(replacementElement, element);
    };
    DomHandler.getUserAgent = function () {
        return navigator.userAgent;
    };
    DomHandler.isIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    };
    DomHandler.isIOS = function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    };
    DomHandler.isAndroid = function () {
        return /(android)/i.test(navigator.userAgent);
    };
    DomHandler.appendChild = function (element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw 'Cannot append ' + target + ' to ' + element;
    };
    DomHandler.removeChild = function (element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw 'Cannot remove ' + element + ' from ' + target;
    };
    DomHandler.isElement = function (obj) {
        return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
            obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
    };
    DomHandler.calculateScrollbarWidth = function (el) {
        if (el) {
            var style = getComputedStyle(el);
            return (el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth));
        }
        else {
            if (this.calculatedScrollbarWidth !== null)
                return this.calculatedScrollbarWidth;
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "p-scrollbar-measure";
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
        }
    };
    DomHandler.calculateScrollbarHeight = function () {
        if (this.calculatedScrollbarHeight !== null)
            return this.calculatedScrollbarHeight;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
    };
    DomHandler.invokeElementMethod = function (element, methodName, args) {
        element[methodName].apply(element, args);
    };
    DomHandler.clearSelection = function () {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            }
            catch (error) {
                //ignore IE bug
            }
        }
    };
    DomHandler.getBrowser = function () {
        if (!this.browser) {
            var matched = this.resolveUserAgent();
            this.browser = {};
            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }
            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            }
            else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }
        return this.browser;
    };
    DomHandler.resolveUserAgent = function () {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };
    DomHandler.isInteger = function (value) {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        }
    };
    DomHandler.isHidden = function (element) {
        return element.offsetParent === null;
    };
    DomHandler.getFocusableElements = function (element) {
        var e_1, _a;
        var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
        var visibleFocusableElements = [];
        try {
            for (var focusableElements_1 = __values(focusableElements), focusableElements_1_1 = focusableElements_1.next(); !focusableElements_1_1.done; focusableElements_1_1 = focusableElements_1.next()) {
                var focusableElement = focusableElements_1_1.value;
                if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
                    visibleFocusableElements.push(focusableElement);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (focusableElements_1_1 && !focusableElements_1_1.done && (_a = focusableElements_1.return)) _a.call(focusableElements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return visibleFocusableElements;
    };
    DomHandler.zindex = 1000;
    DomHandler.calculatedScrollbarWidth = null;
    DomHandler.calculatedScrollbarHeight = null;
    return DomHandler;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-dom.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-ripple.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-ripple.js ***!
  \******************************************************/
/*! exports provided: Ripple, RippleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleModule", function() { return RippleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");





var Ripple = /** @class */ (function () {
    function Ripple(el, zone, config) {
        this.el = el;
        this.zone = zone;
        this.config = config;
    }
    Ripple.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config && this.config.ripple) {
            this.zone.runOutsideAngular(function () {
                _this.create();
                _this.mouseDownListener = _this.onMouseDown.bind(_this);
                _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            });
        }
    };
    Ripple.prototype.onMouseDown = function (event) {
        var ink = this.getInk();
        if (!ink || getComputedStyle(ink, null).display === 'none') {
            return;
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(ink, 'p-ink-active');
        if (!primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getHeight(ink) && !primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWidth(ink)) {
            var d = Math.max(primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement));
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOffset(this.el.nativeElement);
        var x = event.pageX - offset.left + document.body.scrollTop - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWidth(ink) / 2;
        var y = event.pageY - offset.top + document.body.scrollLeft - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getHeight(ink) / 2;
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(ink, 'p-ink-active');
    };
    Ripple.prototype.getInk = function () {
        for (var i = 0; i < this.el.nativeElement.children.length; i++) {
            if (this.el.nativeElement.children[i].className.indexOf('p-ink') !== -1) {
                return this.el.nativeElement.children[i];
            }
        }
        return null;
    };
    Ripple.prototype.resetInk = function () {
        var ink = this.getInk();
        if (ink) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(ink, 'p-ink-active');
        }
    };
    Ripple.prototype.onAnimationEnd = function (event) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(event.currentTarget, 'p-ink-active');
    };
    Ripple.prototype.create = function () {
        var ink = document.createElement('span');
        ink.className = 'p-ink';
        this.el.nativeElement.appendChild(ink);
        this.animationListener = this.onAnimationEnd.bind(this);
        ink.addEventListener('animationend', this.animationListener);
    };
    Ripple.prototype.remove = function () {
        var ink = this.getInk();
        if (ink) {
            this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
            ink.removeEventListener('animationend', this.animationListener);
            ink.remove();
        }
    };
    Ripple.prototype.ngOnDestroy = function () {
        if (this.config && this.config.ripple) {
            this.remove();
        }
    };
    Ripple.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    Ripple.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[pRipple]',
                    host: {
                        '[class.p-ripple]': 'true'
                    }
                },] }
    ];
    Ripple.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return Ripple;
}());
var RippleModule = /** @class */ (function () {
    function RippleModule() {
    }
    RippleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [Ripple],
                    declarations: [Ripple]
                },] }
    ];
    return RippleModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-ripple.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/accessroll/accessroll.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/accessroll/accessroll.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>accessroll works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/adminusercreate/adminusercreate.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>adminusercreate works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/adminuserlist/adminuserlist.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>adminuserlist works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/appusers/appusers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/appusers/appusers.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <!--/.row-->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <i class=\"fa fa-align-justify\"></i> Doctor List\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-bordered table-striped table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>DR Name</th>\r\n                  <th>Email ID</th>\r\n                  <th>Phone Number</th>\r\n                  <th>Password</th>\r\n                  <th>Logintype</th>\r\n                  <th>Last Login</th>\r\n                 \r\n                 \r\n                 \r\n                  \r\n                  <th>Type</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let item of Doctor_List; let i = index;\">\r\n\r\n                    <tr>\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.Email}}</td>\r\n                        <td>{{item.Phone}}</td>\r\n                        <td>{{item.Password}}</td>\r\n                        <td>{{item.Logintype | date}}</td>\r\n                        <td>{{item.Lastlogin | date}}</td>\r\n                        <td *ngIf=\"item.Type == 1\">\r\n                            <span class=\"badge badge-success\">Doctor</span>\r\n                        </td>\r\n                        <td *ngIf=\"item.Type == 0\">\r\n                            <span class=\"badge badge-secondary\">Patient</span>\r\n                        </td>\r\n                        <td>\r\n                           <button (click)=\"DeleteUser(item._id)\">Delete</button>\r\n                          </td>\r\n                      </tr>\r\n                    </ng-container>\r\n              </tbody>\r\n            </table>\r\n            <nav>\r\n              <ul class=\"pagination\">\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n                <li class=\"page-item active\">\r\n                  <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/home-banner/home-banner.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/home-banner/home-banner.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <!--/.row-->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <i class=\"fa fa-align-justify\"></i> Home Banner List\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-bordered table-striped table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Specializations</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                    <td></td>\r\n                    <td><input type=\"file\" (change)=\"fileupload1($event)\"></td>\r\n                    <td><button (click)=\"addfiles1()\">Add</button></td>\r\n                </tr>\r\n              </tbody>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let item of Banner_List; let i = index;\">\r\n                  <tr>\r\n                    <td>{{i+1}}</td>\r\n                    <td><img src=\"{{item.Image_link}}\" style=\"width:40%\" ></td>\r\n                    <td><button (click)=\"Deletbanners(item._id)\">Delete</button></td>\r\n                  </tr>\r\n                  </ng-container>\r\n              </tbody>\r\n            </table>\r\n            <nav>\r\n              <ul class=\"pagination\">\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n                <li class=\"page-item active\">\r\n                  <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/specializations/specializations.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/specializations/specializations.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <!--/.row-->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <i class=\"fa fa-align-justify\"></i> Specializations List\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-bordered table-striped table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Specializations</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                    <td></td>\r\n                    <td><input type=\"text\"  [(ngModel)]=\"Specialisation\" name =\"Specialisation\"></td>\r\n                    <td><button (click)=\"addSpecialisation()\">Add</button></td>\r\n                </tr>\r\n\r\n              </tbody>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let item of Specialisation_List; let i = index;\">\r\n                  <tr>\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.Specialization}}</td>\r\n                    <td><button (click)=\"DeleteSpecialisation(item._id)\">Delete</button></td>\r\n                  </tr>\r\n                  </ng-container>\r\n              </tbody>\r\n            </table>\r\n            <nav>\r\n              <ul class=\"pagination\">\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n                <li class=\"page-item active\">\r\n                  <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/subcatdoctor/subcatdoctor.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>subcatdoctor works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/admin/symptoms/symptoms.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/admin/symptoms/symptoms.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <!--/.row-->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <i class=\"fa fa-align-justify\"></i> Symptoms List\r\n          </div>\r\n\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-bordered table-striped table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No</th>\r\n                  <th>Symptoms Icon</th>\r\n                  <th>Symptoms</th>\r\n                  <th>Specializations</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                    <td></td>\r\n                    <td><input type=\"file\" (change)=\"fileupload1($event)\"></td>\r\n                    <td><input type=\"text\"  [(ngModel)]=\"Symptoms_Shown\" name =\"Symptoms_Shown\"></td>\r\n                    <td></td>\r\n                    <td><button (click)=\"addfiles1()\">Add</button></td>\r\n                </tr>\r\n\r\n              </tbody>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let item of Symptoms_list; let i = index;\">\r\n                  <tr>\r\n                    <td>{{i+1}}</td>\r\n                    <td><img src=\"{{item.Symptoms_image}}\"></td>\r\n                    <td>{{item.Symptoms_Shown}}</td>\r\n                    \r\n                    <td>                \r\n                        <ng-container *ngFor=\"let items of item.Specializations;\">\r\n                           <p>{{items}}</p>\r\n                        </ng-container>\r\n                        <select  class=\"form-control\"  (change)=\"ChangingValue($event.target.value)\" >\r\n                            <ng-container *ngFor=\"let items of item.Specialisation_List;\">\r\n                            <option value=\"{{items.Specialization}}\">{{items.Specialization}}</option>\r\n                            </ng-container>\r\n                        </select>  \r\n                        <button (click)=\"addspecialisatin(i)\">Add</button>\r\n                    </td>\r\n\r\n                    <td><button (click)=\"DeleteSpecialisation(item._id)\">Delete</button></td>\r\n                  </tr>\r\n                  </ng-container>\r\n              </tbody>\r\n            </table>\r\n            <nav>\r\n              <ul class=\"pagination\">\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n                <li class=\"page-item active\">\r\n                  <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkin/checkin.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/checkin/checkin.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Check-In</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Model</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"VehicleModel\" disabled=\"true\" name=\"VehicleModel\" id=\"text-input\"\r\n                      class=\"form-control\" placeholder=\"Vehicle Model\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Customer Mobile No</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" disabled=\"true\" name=\"Mobile\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Phone\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Floor </label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"FloorName\" disabled=\"true\" name=\"FloorName\" id=\"text-input\"\r\n                      class=\"form-control\" placeholder=\"FloorName\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Block</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"SubFloorName\" disabled=\"true\" name=\"SubFloorName\" id=\"text-input\"\r\n                      class=\"form-control\" placeholder=\"Block Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Slot</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"SlotNumber\" disabled=\"true\" name=\"SlotNumber\" id=\"text-input\"\r\n                      class=\"form-control\" placeholder=\"Slot Number\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Booking Date</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                      [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check In date</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                      [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <!-- <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Manufacturer</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"VehicleManufacturer\" disabled=\"true\" name=\"VehicleManufacturer\"\r\n                      id=\"text-input\" class=\"form-control\" placeholder=\"Vehicle Manufacturer\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Booking Date</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                      [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Start Time</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"ActualBookingStartTime\" disabled=\"true\"\r\n                      name=\"ActualBookingStartTime\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Actual Booking Start Time\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking End Time</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"ActualBookingEndTime\" disabled=\"true\" name=\"ActualBookingEndTime\"\r\n                      id=\"text-input\" class=\"form-control\" placeholder=\"Actual Booking End Time\">\r\n                  </div>\r\n                </div> -->\r\n\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check Out date</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                      [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check In Time</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\" name=\"ActualBookingDuration\"\r\n                      id=\"text-input\" class=\"form-control\" placeholder=\"CheckIn Time\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check Out Time</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\" name=\"ActualBookingDuration\"\r\n                      id=\"text-input\" class=\"form-control\" placeholder=\"CheckIn Time\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Booking\r\n                    Amount</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\"\r\n                      disabled=\"true\" name=\"ActualBookingAmount\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Actual Booking Amount\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Final payable amount\r\n                  </label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\"\r\n                      disabled=\"true\" name=\"ActualBookingAmount\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Actual Booking Amount\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\"> Booking Duration</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\" name=\"ActualBookingDuration\"\r\n                      id=\"text-input\" class=\"form-control\" placeholder=\"Actual Booking Duration\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"text-input\">Image Upload</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"file\" style=\"display: none;\" (change)=\"fileupload($event)\" id=\"myFil\">\r\n                    <label style=\"padding: 3px;font-size: 11px;font-weight: 500; border: 1px solid #c8c6c6;width: 100%;\"for=\"myFil\">Choose image</label> \r\n                      <a *ngIf=\"Pic != undefined\"> <img   style=\"width: 50px;height: 50px;\" src=\"{{Pic}}\"\r\n                        > <i style=\"position: relative; top: -13px;color: #f41919;\" (click)=\"delete()\" class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.row-->\r\n  </div>\r\n\r\n  <!-- <div class=\"row\">                \r\n          <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <button (click)=\"createEmployees()\" class=\"btn btn-sm btn-primary float-right mt-5\" ><i class=\"fa fa-dot-circle-o\"></i> Submit</button>                \r\n                  </div>                  \r\n          </div> \r\n           <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                    <button type=\"reset\"  class=\"btn btn-sm btn-danger mt-5\"><i class=\"fa fa-ban\"></i> Reset</button>  \r\n              </div>                  \r\n          </div> \r\n      </div> -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkout/checkout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/checkout/checkout.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Check-Out</strong>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n              <div class=\"form-group row\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Model</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"VehicleModel\" disabled=\"true\" name=\"VehicleModel\" id=\"text-input\"\r\n                        class=\"form-control\" placeholder=\"Vehicle Model\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Customer Mobile No</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" disabled=\"true\" name=\"Mobile\" id=\"text-input\" class=\"form-control\"\r\n                        placeholder=\"Phone\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Floor </label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"FloorName\" disabled=\"true\" name=\"FloorName\" id=\"text-input\"\r\n                        class=\"form-control\" placeholder=\"FloorName\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Block</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"SubFloorName\" disabled=\"true\" name=\"SubFloorName\" id=\"text-input\"\r\n                        class=\"form-control\" placeholder=\"Block Name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Slot</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"SlotNumber\" disabled=\"true\" name=\"SlotNumber\" id=\"text-input\"\r\n                        class=\"form-control\" placeholder=\"Slot Number\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Booking Date</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n  \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check In date</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n  \r\n                    </div>\r\n                  </div>\r\n  \r\n  \r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <!-- <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Manufacturer</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"VehicleManufacturer\" disabled=\"true\" name=\"VehicleManufacturer\"\r\n                        id=\"text-input\" class=\"form-control\" placeholder=\"Vehicle Manufacturer\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Booking Date</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n  \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Start Time</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingStartTime\" disabled=\"true\"\r\n                        name=\"ActualBookingStartTime\" id=\"text-input\" class=\"form-control\"\r\n                        placeholder=\"Actual Booking Start Time\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking End Time</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingEndTime\" disabled=\"true\" name=\"ActualBookingEndTime\"\r\n                        id=\"text-input\" class=\"form-control\" placeholder=\"Actual Booking End Time\">\r\n                    </div>\r\n                  </div> -->\r\n  \r\n  \r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check Out date</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"date\" placeholder=\"Actual Booking\" disabled=\"true\" class=\"form-control\"\r\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\r\n  \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check In Time</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\" name=\"ActualBookingDuration\"\r\n                        id=\"text-input\" class=\"form-control\" placeholder=\"CheckIn Time\">\r\n                    </div>\r\n  \r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n  \r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check Out Time</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\" name=\"ActualBookingDuration\"\r\n                        id=\"text-input\" class=\"form-control\" placeholder=\"CheckIn Time\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Booking\r\n                      Amount</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\"\r\n                        disabled=\"true\" name=\"ActualBookingAmount\" id=\"text-input\" class=\"form-control\"\r\n                        placeholder=\"Actual Booking Amount\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Final payable amount\r\n                    </label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\"\r\n                        disabled=\"true\" name=\"ActualBookingAmount\" id=\"text-input\" class=\"form-control\"\r\n                        placeholder=\"Actual Booking Amount\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\"> Booking Duration</label>\r\n                    <div class=\"col-md-6\">\r\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingDuration\" disabled=\"true\" name=\"ActualBookingDuration\"\r\n                        id=\"text-input\" class=\"form-control\" placeholder=\"Actual Booking Duration\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Image Upload</label>\r\n                    <div class=\"col-md-6\">\r\n                     <!-- <input type=\"file\" [(ngModel)]=\"NomineePanCard\"  name =\"NomineePanCard\" id=\"text-input\"  class=\"form-control\" placeholder=\"Nominee PanCard\"> -->\r\n                     <img *ngIf=\"Pic != undefined\" src=\"{{Pic}}\"  style=\"float: right;;width: 30px;height: 30px;\">\r\n                    </div>\r\n                  </div>   \r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/.row-->\r\n    </div>\r\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/upcoming/upcoming.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/upcoming/upcoming.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>Upcoming</strong>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Model</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"VehicleModel\"  name=\"VehicleModel\" id=\"text-input\"\n                        class=\"form-control\" placeholder=\"Vehicle Model\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Customer Mobile No</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\"  name=\"Mobile\" id=\"text-input\" class=\"form-control\"\n                        placeholder=\"Phone\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Floor </label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"FloorName\"  name=\"FloorName\" id=\"text-input\"\n                        class=\"form-control\" placeholder=\"FloorName\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Block</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"SubFloorName\"  name=\"SubFloorName\" id=\"text-input\"\n                        class=\"form-control\" placeholder=\"Block Name\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Slot</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"SlotNumber\"  name=\"SlotNumber\" id=\"text-input\"\n                        class=\"form-control\" placeholder=\"Slot Number\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Booking Date</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"date\" placeholder=\"Actual Booking\"  class=\"form-control\"\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\n  \n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check In date</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"date\" placeholder=\"Actual Booking\"  class=\"form-control\"\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\n  \n                    </div>\n                  </div>\n              \n                 \n                </div>\n                <div class=\"col-md-6\">\n                  <!-- <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Vehicle Manufacturer</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"VehicleManufacturer\"  name=\"VehicleManufacturer\"\n                        id=\"text-input\" class=\"form-control\" placeholder=\"Vehicle Manufacturer\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Booking Date</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"date\" placeholder=\"Actual Booking\"  class=\"form-control\"\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\n  \n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking Start Time</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingStartTime\" \n                        name=\"ActualBookingStartTime\" id=\"text-input\" class=\"form-control\"\n                        placeholder=\"Actual Booking Start Time\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Actual Booking End Time</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingEndTime\"  name=\"ActualBookingEndTime\"\n                        id=\"text-input\" class=\"form-control\" placeholder=\"Actual Booking End Time\">\n                    </div>\n                  </div> -->\n                 \n                  \n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check Out date</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"date\" placeholder=\"Actual Booking\"  class=\"form-control\"\n                        [(ngModel)]=\"ActualBooking\" name=\"ActualBooking\">\n  \n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check In Time</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\"  name=\"ActualBookingDuration\"\n                        id=\"text-input\" class=\"form-control\" placeholder=\"CheckIn Time\">\n                    </div>\n                   \n                  </div>\n                  <div class=\"form-group row\">\n                   \n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Check Out Time</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"time\" [(ngModel)]=\"ActualBookingDuration\"  name=\"ActualBookingDuration\"\n                        id=\"text-input\" class=\"form-control\" placeholder=\"CheckIn Time\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Booking\n                      Amount</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\"\n                         name=\"ActualBookingAmount\" id=\"text-input\" class=\"form-control\"\n                        placeholder=\"Actual Booking Amount\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label style=\"font-weight: 600;\" class=\"col-md-5 col-form-label\" for=\"text-input\">Final payable amount </label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" style=\"font-weight: 600; background-color:yellow; color:red;\" value=\"500\"\n                         name=\"ActualBookingAmount\" id=\"text-input\" class=\"form-control\"\n                        placeholder=\"Actual Booking Amount\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\"> Booking Duration</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"text\" [(ngModel)]=\"ActualBookingDuration\"  name=\"ActualBookingDuration\"\n                        id=\"text-input\" class=\"form-control\" placeholder=\"Actual Booking Duration\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"form-group row\">\n                    <label class=\"col-md-5 col-form-label\" for=\"text-input\">Image Upload</label>\n                    <div class=\"col-md-6\">\n                      <input type=\"file\" [(ngModel)]=\"NomineePanCard\" name=\"NomineePanCard\" id=\"text-input\"\n                        class=\"form-control\" placeholder=\"Nominee PanCard\">\n                    </div>\n                  </div> -->\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!--/.row-->\n    </div>\n  \n    <!-- <div class=\"row\">                \n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <button (click)=\"createEmployees()\" class=\"btn btn-sm btn-primary float-right mt-5\" ><i class=\"fa fa-dot-circle-o\"></i> Submit</button>                \n                    </div>                  \n            </div> \n             <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                      <button type=\"reset\"  class=\"btn btn-sm btn-danger mt-5\"><i class=\"fa fa-ban\"></i> Reset</button>  \n                </div>                  \n            </div> \n        </div> -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <div class=\"card\">\r\n            <div class=\"card-header head-color\">\r\n                <h4 class=\"card-title\">TN09 CJ 5259</h4><h6>(REFNORMAL-602134)</h6>\r\n              </div>\r\n          </div> \r\n         </div>\r\n       </div>\r\n    <div class=\"row mt-3\">\r\n     <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Uploaded Documents</h4>\r\n            <input type=\"file\" name=\"fileupload\" id=\"fileupload\">\r\n          </div>\r\n       </div> \r\n      </div>\r\n    </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <h4 class=\"card-title\">Estimation</h4>\r\n                        <h5 class=\"card-title\">Total OLA Approved amount: Rs.0</h5>\r\n                    </div>\r\n                    <div class=\"col-md-4\">                        \r\n                <div class=\"input-group date\" id=\"reservationdate_to\" data-target-input=\"nearest\">\r\n                    <input type=\"text\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\" required/>\r\n                    <div class=\"input-group-append\" data-target=\"#reservationdate_to\" data-toggle=\"datetimepicker\">\r\n                        <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\r\n                    </div>\r\n                </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"table table-bordered table-striped table-sm\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th colspan=\"2\" style=\"text-align: center;\">Unit Price</th>\r\n                        <th></th>\r\n                        <th></th>\r\n                      </tr>\r\n                      \r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th></th>\r\n                            <th>Description</th>\r\n                            <th>Status</th>\r\n                            <th>Quantity</th>\r\n                            <th>Part</th>\r\n                            <th>Labour</th>\r\n                            <th>Total</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td>Diesel</td>\r\n                            <td><span class=\"badge badge-danger\">Rejected</span></td>\r\n                            <td>0</td>\r\n                            <td>0</td>\r\n                            <td>200.00</td>\r\n                            <td>200.00</td>\r\n                            <td><button><li class=\"fa fa-remove\"></li></button></td>\r\n                         </tr>\r\n                         <tr>\r\n                            <td></td>\r\n                            <td>Diesel</td>\r\n                            <td><span class=\"badge badge-danger\">Rejected</span></td>\r\n                            <td>0</td>\r\n                            <td>0</td>\r\n                            <td>200.00</td>\r\n                            <td>200.00</td>\r\n                            <td><button><li class=\"fa fa-remove\"></li></button></td>\r\n                         </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                          <th style=\"text-align: right;\" id=\"total\" colspan=\"6\">Total :</th>\r\n                          <td>400</td>\r\n                        </tr>\r\n                       </tfoot>\r\n                  </table>\r\n              </div>\r\n           </div> \r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Details</h4>\r\n                    <div class=\"form-group\">\r\n                        <label>ODO Reading(in kms)</label>\r\n                         <input type=\"text\" id=\"category_id\" value=\"11234\" disabled name=\"category_id\"class=\"form-control\">\r\n                        </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Select Service Advisor</label>\r\n                    <select name=\"service\" class=\"form-control\" disabled>\r\n                        <option value=\"Prabhu\">Prabhu</option>\r\n                    </select>\r\n                    </div>\r\n                    \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n   \r\n     \r\n      </div>\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/bookings/viewbookingform/viewbookingform.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <select name=\"service\" class=\"form-control\">\r\n          <option value=\"\">Vehicle_Type</option>\r\n          <option value=\"car\">Car</option>\r\n          <option value=\"bike\">Bike</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <select name=\"service\" class=\"form-control\">\r\n          <option value=\"\">Status</option>\r\n          <option value=\"Upcoming\">Upcoming</option>\r\n          <option value=\"checkin\">Check-In</option>\r\n          <option value=\"checkout\">Check-Out</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <!-- <input type=\"date\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\"\r\n          required /> -->\r\n          <p-calendar [(ngModel)]=\"rangeDates\" selectionMode=\"range\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\" placeholder=\"Select Date\" inputId=\"range\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"BookingId\" placeholder=\"Booking Id\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" name=\"VehicleNumber\" placeholder=\"Vehicle Number\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <div class=\"form-group\">\r\n        <button (click)=\"VehicleModal_save()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-search\"></i>Search</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <ng-container *ngFor=\"let item of Booking_List; let i = index;\">\r\n      <div class=\"col-sm-6 col-lg-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <button style=\"width: 100%; height:40px;\" class=\"btn btn-success\" (click)=\"upcoming_change()\">{{umpcomin_text}}</button>\r\n            <!-- <select style=\"width: 100%; height:40px;\" class=\"btn btn-success\">\r\n              <option selected>Upcoming</option>\r\n              <option>Check In</option>\r\n            </select> -->\r\n            <!-- <select style=\"width: 100%; height:40px;\" (change)=changestatus($event) class=\"form-group btn btn-primary\">\r\n          <option selected disabled class=\"hideoption\" >{{item.Booking_Status}}</option>\r\n          <option value=\"\">Booking Confirmed</option>\r\n          <option value=\"\">checkIn</option>\r\n          <option value=\"\">CheckOut</option>\r\n        </select> -->\r\n          </div>\r\n          <div class=\"card-body\" (click)=\"upcoming()\">\r\n            <h6>Booking ID : {{item.Booking_id}}</h6>\r\n            <p>Vehicle Type : Two Wheeler</p>\r\n            <h4>{{item.Vehicle_No}}</h4>\r\n            <p>{{item.Customer_Phone}}</p>\r\n            <p>Checkin Time : 02.00 PM</p>\r\n            <p>Checkout Time : 03.45 PM</p>\r\n            <p>Check in Date :12 July 2020</p>\r\n            <p>Estimated Time : 1 Hour 45m</p>\r\n            <p>\r\n              <li class=\"icon-clock\"><span>6 days ago</span></li>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <button style=\"width: 100%; height:40px;\" class=\"btn btn-success\" (click)=\"checkinpage_change()\" >CheckIn</button>\r\n          <!-- <select style=\"width: 100%; height:40px;\" class=\"btn btn-success\" >\r\n            <option>Upcoming</option>\r\n            <option>Check Out</option>\r\n            <option selected>Check In</option>\r\n          </select> -->\r\n        </div>\r\n        <div class=\"card-body\" (click)=\"checkinpage()\">\r\n          <h6>Booking ID : 123CVX</h6>\r\n          <p>Vehicle Type : Two Wheeler</p>\r\n          <h4>TN 36 X1234</h4>\r\n          <p>9988776655</p>\r\n          <p>Checkin Time : 02.00 PM</p>\r\n          <p>Checkout Time : 03.45 PM</p>\r\n\r\n          <p>Check in Date :12 July 2020</p>\r\n          <p>Estimated Time : 1 Hour 45m</p>\r\n          <p>\r\n            <li class=\"icon-clock\"><span>6 days ago</span></li>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <button style=\"width: 100%; height:40px;\" class=\"btn btn-success\" (click)=\"checkoutpage()\">CheckOut</button>\r\n          <!-- <select style=\"width: 100%; height:40px;\" class=\"btn btn-success\" (change)=\"checkoutpage()\">\r\n            <option>Upcoming</option>\r\n            <option selected>Check Out</option>\r\n            <option>Check In</option>\r\n          </select> -->\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"watermarked\">\r\n            <h6>Booking ID : 123CVX</h6>\r\n            <p>Vehicle Type : Two Wheeler</p>\r\n            <h4>TN 36 X1234</h4>\r\n            <p>9988776655</p>\r\n            <p>Checkin Time : 02.00 PM</p>\r\n            <p>Checkout Time : 03.45 PM</p>\r\n            <p>Estimated Time : 1 Hour 45m</p>\r\n            <p>Check in Date :12 July 2020</p>\r\n            <p style=\"color: red;\">Extended Time : 2 Hour</p>\r\n            <p>\r\n              <li class=\"icon-clock\"><span>6 days ago</span></li>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <button style=\"width: 100%; height:40px;\" class=\"btn btn-success\" (click)=\"checkoutpage()\">CheckOut</button>\r\n          <!-- <select style=\"width: 100%; height:40px;\" class=\"btn btn-success\" (change)=\"checkoutpage()\">\r\n            <option>Upcoming</option>\r\n            <option selected>Check Out</option>\r\n            <option>Check In</option>\r\n          </select> -->\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"watermarked\">\r\n            <h6 (click)=\"bookingacceptance(item)\">Booking ID : 123CVX</h6>\r\n            <p>Vehicle Type : Two Wheeler</p>\r\n            <h4>TN 36 X1234</h4>\r\n            <p>9988776655</p>\r\n            <p>Checkin Time : 02.00 PM</p>\r\n            <p>Checkout Time : 03.45 PM</p>\r\n            <p>Estimated Time : 1 Hour 45m</p>\r\n            <p>Check in Date :12 July 2020</p>\r\n            <p>\r\n              <li class=\"icon-clock\"><span>6 days ago</span></li>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/downloads/downloads.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/downloads/downloads.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">            \r\n            <h4 class=\"card-title pb-4\">Downloads</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Request Id\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"status\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Downlad\">\r\n      </div>\r\n      \r\n    </div>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h4 class=\"card-title pt-4\">Notifications</h4>\r\n                <table class=\"table table-bordered table-striped table-sm\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Vehicle Number</th>\r\n                        <th>Booking Id</th>\r\n                        <th>Invoice</th>\r\n                        <th>Payment Status</th>\r\n                        <th>UTR</th>\r\n                        <th>Invoice Number</th>\r\n                        <th>Invoice Date</th>\r\n                      </tr>\r\n                      \r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>TN 36 9876</td>\r\n                            <td>RE1234C</td>\r\n                            <td>Include</td>\r\n                            <td><span class=\"badge badge-success\">Success</span></td>\r\n                            <td>0</td>\r\n                            <td>IVR1234</td>\r\n                            <td>27-05-2020</td>\r\n                         </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n    </div> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/notifications/notifications.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/notifications/notifications.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">            \r\n            <h4 class=\"card-title pb-4\">Notifications</h4>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"input-group date\" id=\"reservationdate_to\" data-target-input=\"nearest\">\r\n          <input type=\"text\" class=\"form-control datetimepicker-input\" name=\"todate\" data-target=\"#reservationdate_to\" required/>\r\n          <div class=\"input-group-append\" data-target=\"#reservationdate_to\" data-toggle=\"datetimepicker\">\r\n              <div class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <select name=\"service\" class=\"form-control\">\r\n              <option value=\"\">Status</option>\r\n          </select>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <select name=\"service\" class=\"form-control\">\r\n              <option value=\"\">Booking Type</option>\r\n          </select>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <form class=\"form-inline\">\r\n            <div class=\"input-group input-group-sm\">\r\n              <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-navbar\" type=\"submit\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      </div> \r\n    </div>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h4 class=\"card-title pt-4\">Notifications</h4>\r\n                <table class=\"table table-bordered table-striped table-sm\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Vehicle Number</th>\r\n                        <th>Booking Id</th>\r\n                        <th>Invoice</th>\r\n                        <th>Payment Status</th>\r\n                        <th>UTR</th>\r\n                        <th>Invoice Number</th>\r\n                        <th>Invoice Date</th>\r\n                      </tr>\r\n                      \r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>TN 36 9876</td>\r\n                            <td>RE1234C</td>\r\n                            <td>Include</td>\r\n                            <td><span class=\"badge badge-success\">Success</span></td>\r\n                            <td>0</td>\r\n                            <td>IVR1234</td>\r\n                            <td>27-05-2020</td>\r\n                         </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n    </div> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/otplogin/otplogin.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/otplogin/otplogin.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"\">\r\n    <div class=\"\">\r\n  \r\n        <div class=\"login_box\">\r\n            <div class=\"login_box_inner\">\r\n  \r\n                <div class=\"container_login_form\">\r\n                    <!-- <div class=\"logo\">\r\n            <img\r\n              src=\"../../../assets/img/brand/logo2.png\"\r\n              alt=\"\">\r\n          </div> -->\r\n                    <div class=\"login_form\">\r\n                        <div _ngcontent-c5=\"\" class=\"col-md-12 grid-margin\">\r\n                            <div _ngcontent-c5=\"\" class=\"card\">\r\n                                \r\n                                <div _ngcontent-c5=\"\" class=\"card-body text-center\">\r\n                                    <div class=\"logo\">\r\n                                        <img src=\"../../../assets/img/brand/logo-png.png\" alt=\"\">\r\n                                    </div>\r\n  \r\n                                    <!-- <h4 _ngcontent-c5=\"\" class=\"card-title\">Login</h4> -->\r\n                                     <div >\r\n                                          <div class=\"text-danger\"></div>\r\n                                         </div>\r\n  \r\n                                         <!-- <div  *ngIf = \"loginError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                                              {{loginErrorMsg}}\r\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                                              <span aria-hidden=\"true\">&times;</span>\r\n                                            </button>\r\n                                          </div> -->\r\n                                    <form  class=\"my-form forms-sample ng-untouched ng-pristine ng-valid\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Enter Email Address or Phone number</label>\r\n                                            <input  \r\n                                                class=\"form-control\"\r\n                                                placeholder=\"Email Address or Phone number\"\r\n                                                type=\"text\" \r\n                                                \r\n                                                >\r\n                                                \r\n                                            \r\n                                        </div>\r\n                                        \r\n                                      \r\n                                        <button class=\"btn btn-success  mr-2\" >Send OTP </button>\r\n                                    </form>\r\n  \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n  \r\n            </div>\r\n        </div>\r\n  \r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"alert-msgs\" *ngIf=\"alertcon\">\r\n    <div class=\"alert-msg\">\r\n        <div class=\"alert-msg-con\">\r\n  \r\n            <div class=\"alert-img\" *ngIf=\"success\">\r\n                <img src=\"assets/img/alert/success.png\" width=\"45px\" alt=\"\">\r\n            </div>\r\n            <div class=\"alert-img\" *ngIf=\"warning\">\r\n                <img src=\"assets/img/alert/waring.png\" width=\"45px\" alt=\"\">\r\n            </div>\r\n            <h4>\r\n                {{alertmsg}}\r\n            </h4>\r\n            <p>{{alertcont}}</p>\r\n  \r\n            <button class=\"alert-btn {{button}}\" type=\"button\" (click)=\"hidealert()\"> ok </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <script>\r\n    // Automatically trigger the loading animation on click\r\n  Ladda.bind('button[type=submit]');\r\n  \r\n  // Same as the above but automatically stops after two seconds\r\n  Ladda.bind('button[type=submit]', { timeout: 2000 } );\r\n  \r\n  </script> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/payments/payments.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/payments/payments.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        \r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control\" name=\"Bookingid\" placeholder=\"Booking ID\" />\r\n          </div>\r\n      </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <ng-datepicker [(ngModel)]=\"date\" [options]=\"options\"></ng-datepicker>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <ng-datepicker [(ngModel)]=\"date_out\" [options]=\"option\"></ng-datepicker>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n              <button (click)=\"filter()\" style=\"margin-top: 4px;\" class=\"btn btn-sm btn-primary\"><i\r\n                      class=\"fa fa-search\"></i>Search</button>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"card-title pt-4\">Payments</h4>\r\n          <table class=\"table table-bordered table-striped table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th rowspan=\"2\">S.No</th>\r\n                <th rowspan=\"2\">Booking ID</th>\r\n                <th rowspan=\"2\">Vehicle No</th>\r\n                <th colspan=\"2\" style=\"text-align: center;\">Check In</th>\r\n                <th colspan=\"2\"  style=\"text-align: center;\">Check Out</th>\r\n                <th rowspan=\"2\">Total Amount Paid</th>\r\n                <th rowspan=\"2\">UTR</th>\r\n                <th rowspan=\"2\">Amount Paid Date to Vendor</th>\r\n              </tr>\r\n              <tr>\r\n                \r\n                <th>Date</th>\r\n                <th>Time</th>\r\n                <th>Date</th>\r\n                <th>Time</th>\r\n              </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>1</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TN 36 9876</td>\r\n                <td>15-07-2020</td>\r\n                <td>3.45PM</td>\r\n                <td>15-07-2020 </td>\r\n                <td>6.45PM</td>\r\n                <td>1200</td>\r\n                <td>0</td>\r\n                <td>27-05-2020</td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TN 36 9876</td>\r\n                <td>15-07-2020</td>\r\n                <td>3.45PM</td>\r\n                <td>15-07-2020 </td>\r\n                <td>6.45PM</td>\r\n                <td>1200</td>\r\n                <td>0</td>\r\n                <td>27-05-2020</td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TN 36 9876</td>\r\n                <td>15-07-2020</td>\r\n                <td>3.45PM</td>\r\n                <td>15-07-2020 </td>\r\n                <td>6.45PM</td>\r\n                <td>1200</td>\r\n                <td>0</td>\r\n                <td>27-05-2020</td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TN 36 9876</td>\r\n                <td>15-07-2020</td>\r\n                <td>3.45PM</td>\r\n                <td>15-07-2020 </td>\r\n                <td>6.45PM</td>\r\n                <td>1200</td>\r\n                <td>0</td>\r\n                <td>27-05-2020</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/qrcode/qrcodegeneration/qrcodegeneration.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>QR Code Generation </strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Vendor Id</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Vendor Id\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Vendor Name</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"VendorName\" name=\"VendorName\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"VendorName\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Parking Area Name</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Parking Area Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Block Name</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Block Name\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Latitude</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Latitude\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Longitude</label>\r\n                  <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Longitude\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Entry</label>\r\n                  <div class=\"col-md-6\">\r\n                    <select class=\"form-control\">\r\n                      <option>Select Option</option>\r\n                      <option>CehckIn</option>\r\n                      <option>CheckOut</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"text-input\">Date and Time</label>\r\n                  <div class=\"col-md-3\">\r\n                    <input type=\"date\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Longitude\">\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <input type=\"time\" [(ngModel)]=\"Title\" name=\"Title\" id=\"text-input\" class=\"form-control\"\r\n                      placeholder=\"Longitude\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group row\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                      <img height=\"300px\" width=\"300px\" src=\"../../../../../assets/img/brand/qrcode.png\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <button (click)=\"Banner_save()\" class=\"btn btn-sm btn-primary float-right mt-5\"><i\r\n                      class=\"fa fa-save\"></i>Save</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"reset\" class=\"btn btn-sm btn-danger mt-5\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form> -->\r\n          <table class=\"table table-bordered table-striped table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.No</th>\r\n                <th>Vendor Id</th>\r\n                <th>Vendor Name</th>\r\n                <th>Parking Area Name</th>\r\n                <th>Latitude</th>\r\n                <th>Longitude</th>\r\n                <th>Entry</th>\r\n                <th>Date</th>\r\n                <th>Time</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              \r\n              <tr>\r\n                <td>1</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TEST NAME</td>\r\n                <td>Chennai</td>\r\n                <td>08.235948</td>\r\n                <td>90.258455 </td>\r\n                <td>Entry</td>\r\n                <td>27-05-2020</td>\r\n                <td>3.00am</td>\r\n                <td>\r\n                  <a href=\"../../../../../assets/img/brand/qrcode.png\" download><i class=\"fa fa-download btn btn-success\" aria-hidden=\"true\"></i></a>\r\n                  <i class=\"fa fa-qrcode btn btn-warning\" (click)=\"open()\" aria-hidden=\"true\"></i>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TEST NAME</td>\r\n                <td>Chennai</td>\r\n                <td>08.235948</td>\r\n                <td>90.258455 </td>\r\n                <td>Entry</td>\r\n                <td>27-05-2020</td>\r\n                <td>3.00am</td>\r\n                <td>\r\n                  <a href=\"../../../../../assets/img/brand/qrcode.png\" download><i class=\"fa fa-download btn btn-success\" aria-hidden=\"true\"></i></a>\r\n                  <i class=\"fa fa-qrcode btn btn-warning\" (click)=\"open()\" aria-hidden=\"true\"></i>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td>SDGJ2536J</td>\r\n                <td>TEST NAME</td>\r\n                <td>Chennai</td>\r\n                <td>08.235948</td>\r\n                <td>90.258455 </td>\r\n                <td>Entry</td>\r\n                <td>27-05-2020</td>\r\n                <td>3.00am</td>\r\n                <td>\r\n                  <a href=\"../../../../../assets/img/brand/qrcode.png\" download><i class=\"fa fa-download btn btn-success\" aria-hidden=\"true\"></i></a>\r\n                  <i class=\"fa fa-qrcode btn btn-warning\" (click)=\"open()\" aria-hidden=\"true\"></i>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.row-->\r\n  \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/slotmanagement/slot-blocking/slot-blocking.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select name=\"service\" class=\"form-control\">\r\n                <option value=\"\">Status</option>\r\n                <option value=\"checkin\">Block</option>\r\n                <option value=\"checkout\">Revoke</option>\r\n            </select>\r\n            </div>\r\n        </div>\r\n        \r\n       \r\n         <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"Floor\" placeholder=\"Floor\"/>       \r\n        </div>\r\n        </div>\r\n        \r\n       <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" name=\"SubFloor\" placeholder=\"Sub Floor\"/>       \r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" name=\"SlotNumber\" placeholder=\"Slot Number\"/>       \r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <div class=\"form-group\">\r\n          <button (click)=\"VehicleModal_save()\" class=\"btn btn-sm btn-primary\" ><i class=\"fa fa-search\"></i>Search</button>               \r\n        </div> \r\n      </div>\r\n      </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <strong>Car Slot Bloking</strong>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-sm\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>S.No</th>\r\n                            <th>Area </th>\r\n                            <th>Floor</th>\r\n                            <th>Slot</th>\r\n                            <th>Action</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                \r\n                          <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\"> -->\r\n                              <tr>\r\n                            <td>1</td>\r\n                            <td>Chennai </td>\r\n                            <td>2nd Floor</td>\r\n                            <td>B-1</td>\r\n                            <td>\r\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Revoke</button></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <strong>Bike Slot Bloking</strong>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-sm\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>S.No</th>\r\n                            <th>Area </th>\r\n                            <th>Floor</th>\r\n                            <th>Slot</th>\r\n                            <th>Action</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                \r\n                          <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\"> -->\r\n                              <tr>\r\n                            <td>1</td>\r\n                            <td>Chennai </td>\r\n                            <td>2nd Floor</td>\r\n                            <td>B-1</td>\r\n                            <td>\r\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Revoke</button></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/buttons/slotmanagement/slot-booking/slot-booking.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\r\n    <div class=\"row\">\r\n        <!-- <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <select name=\"service\" class=\"form-control\">\r\n                <option value=\"\">Status</option>\r\n                <option value=\"checkin\">Block</option>\r\n                <option value=\"checkout\">Revoke</option>\r\n            </select>\r\n            </div>\r\n        </div> -->\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"Floor\" placeholder=\"Floor\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"Block\" placeholder=\"Block\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"SlotNumber\" placeholder=\"Slot\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n                <button (click)=\"filter()\" style=\"margin-top: 4px;\" class=\"btn btn-sm btn-primary\"><i\r\n                        class=\"fa fa-search\"></i>Search</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <strong>Bike Slot Booking</strong>\r\n                    <button (click)=\"showbikeslot()\" class=\"btn btn-sm btn-primary float-right\">Add More</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div *ngIf=\"bikeslot\">\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Bike Slots</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"text\" [(ngModel)]=\"bikeslots\" name=\"bikeslots\" id=\"text-input\"\r\n                                    class=\"form-control\" placeholder=\"Bike Slots\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <button (click)=\"addbikeslot()\" class=\"btn btn-primary\">Create</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <!-- <label class=\"col-md-3 col-form-label\" for=\"text-input\"></label> -->\r\n                            <div class=\"col-md-12 mt-3\">\r\n                                <table class=\"table table-bordered table-striped table-sm\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>S.No</th>\r\n                                            <th>Area </th>\r\n                                            <th>Floor</th>\r\n                                            <th>Slot</th>\r\n                                            <th>Add_Action</th>\r\n                                            <th>Delete_Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n\r\n                                        <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\">\r\n                                            <td>{{i+1}}</td>\r\n                                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\"\r\n                                                    class=\"form-control\" placeholder=\"Area\"></td>\r\n                                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\"\r\n                                                    class=\"form-control\" placeholder=\"Floor\"></td>\r\n                                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\"\r\n                                                    class=\"form-control\" placeholder=\"Slot Number\"></td>\r\n                                            <td> <button (click)=\"addcar(i)\" class=\"btn btn-sm btn-primary\">Add</button>\r\n                                            </td>\r\n                                            <td> <button (click)=\"deletcar(i)\"\r\n                                                    class=\"btn btn-sm btn-primary\">Delete</button></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"table table-bordered table-striped table-sm\">\r\n\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S.No</th>\r\n                                <th>Floor </th>\r\n                                <th>Block</th>\r\n                                <th>Slot</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>2nd Floor</td>\r\n                                <td>2 Block</td>\r\n                                <td>4</td>\r\n                                <td>\r\n                                    <button *ngIf=\"blk\" (click)=\"block()\" class=\"btn btn-sm btn-primary\">Block</button>\r\n                                    <button *ngIf=\"rvk\" (click)=\"revoke()\"\r\n                                        class=\"btn btn-sm btn-success\">Rovoke</button>\r\n                                </td>\r\n\r\n                            </tr>\r\n\r\n                            <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\">\r\n                            <td>{{i+1}}</td>\r\n                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\" class=\"form-control\"\r\n                                placeholder=\"Area\"></td>\r\n                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\" class=\"form-control\"\r\n                                placeholder=\"Floor\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\" class=\"form-control\"\r\n                                placeholder=\"Slot Number\"></td>\r\n                            <td>\r\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Block</button></td>\r\n                          </tr> -->\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <strong>Car Slot Booking</strong>\r\n                    <button (click)=\"showcarslot()\" class=\"btn btn-sm btn-primary float-right\">Add More</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div *ngIf=\"carslot\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-md-3 col-form-label\" for=\"text-input\">Car Slots</label>\r\n                            <div class=\"col-md-6\">\r\n                                <input type=\"text\" [(ngModel)]=\"carslots\" name=\"carslots\" id=\"text-input\"\r\n                                    class=\"form-control\" placeholder=\"Car Slots\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <button (click)=\"addcarslot()\" class=\"btn btn-primary\">Create</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <!-- <label class=\"col-md-3 col-form-label\" for=\"text-input\"></label> -->\r\n                            <div class=\"col-md-12 mt-3\">\r\n                                <table class=\"table table-bordered table-striped table-sm\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>S.No</th>\r\n                                            <th>Select</th>\r\n                                            <th>Area </th>\r\n                                            <th>Floor</th>\r\n                                            <th>Slot</th>\r\n                                            <th>Add_Action</th>\r\n                                            <th>Delete_Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n\r\n                                        <tr *ngFor=\"let dynamic5 of include_bike2; let i = index;\">\r\n                                            <td>{{i+1}}</td>\r\n                                            <td><input type=\"checkbox\" name=\"\" [(ngModel)]=\"name\"> </td>\r\n                                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\"\r\n                                                    class=\"form-control\" placeholder=\"Area\"></td>\r\n                                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\"\r\n                                                    class=\"form-control\" placeholder=\"Floor\"></td>\r\n                                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\"\r\n                                                    class=\"form-control\" placeholder=\"Slot Number\"></td>\r\n                                            <td> <button (click)=\"addcar(i)\" class=\"btn btn-sm btn-primary\">Add</button>\r\n                                            </td>\r\n                                            <td> <button (click)=\"deletcar(i)\"\r\n                                                    class=\"btn btn-sm btn-primary\">Delete</button></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"table table-bordered table-striped table-sm\">\r\n\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S.No</th>\r\n                                <th>Floor </th>\r\n                                <th>Block</th>\r\n                                <th>Slot</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>2nd Floor</td>\r\n                                <td>2 Block</td>\r\n                                <td>4</td>\r\n                                <td>\r\n                                    <button *ngIf=\"blkk\" (click)=\"block1()\"\r\n                                        class=\"btn btn-sm btn-primary\">Block</button>\r\n                                    <button *ngIf=\"rvkk\" (click)=\"revoke1()\"\r\n                                        class=\"btn btn-sm btn-success\">Rovoke</button>\r\n                                </td>\r\n\r\n                            </tr>\r\n\r\n                            <!-- <tr *ngFor=\"let dynamic5 of include_bike1; let i = index;\">\r\n                            <td>{{i+1}}</td>\r\n                            <td> <input type=\"text\" [(ngModel)]=\"area\" name=\"area\" id=\"text-input\" class=\"form-control\"\r\n                                placeholder=\"Area\"></td>\r\n                            <td> <input type=\"text\" [(ngModel)]=\"floor\" name=\"flooe\" id=\"text-input\" class=\"form-control\"\r\n                                placeholder=\"Floor\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"slot\" name=\"slot\" id=\"text-input\" class=\"form-control\"\r\n                                placeholder=\"Slot Number\"></td>\r\n                            <td>\r\n                              <button (click)=\"deletebike(i)\" class=\"btn btn-sm btn-primary\">Block</button></td>\r\n                          </tr> -->\r\n                        </tbody>\r\n                    </table>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.17.1
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['title', 'titleText', 'text', 'html', 'footer', 'icon', 'hideClass', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'showCloseButton', 'closeButtonHtml', 'closeButtonAriaLabel', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep', 'onClose', 'onAfterClose', 'onDestroy'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.1';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CheckinComponent = /** @class */ (function () {
    function CheckinComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    CheckinComponent.prototype.ngOnInit = function () {
    };
    CheckinComponent.prototype.fileupload = function (event) {
        this.selectedimgae1 = event.target.files[0];
        this.addfiles();
    };
    CheckinComponent.prototype.addfiles = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
        this.http.post('http://3.101.31.129:3000/upload', fd)
            .subscribe(function (res) {
            console.log(res);
            _this.Pic = res.Data;
        });
    };
    CheckinComponent.prototype.delete = function () {
        this.Pic = undefined;
    };
    CheckinComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__(/*! raw-loader!./checkin.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/checkin/checkin.component.html"),
            styles: [__webpack_require__(/*! ./checkin.component.scss */ "./src/app/views/buttons/bookings/checkin/checkin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
        this.Pic = "../../../../../assets/img/brand/qrcode.png";
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

/***/ "./src/app/views/buttons/bookings/upcoming/upcoming.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/upcoming/upcoming.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYm9va2luZ3MvdXBjb21pbmcvdXBjb21pbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/buttons/bookings/upcoming/upcoming.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/buttons/bookings/upcoming/upcoming.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingComponent", function() { return UpcomingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpcomingComponent = /** @class */ (function () {
    function UpcomingComponent() {
    }
    UpcomingComponent.prototype.ngOnInit = function () {
    };
    UpcomingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upcoming',
            template: __webpack_require__(/*! raw-loader!./upcoming.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/buttons/bookings/upcoming/upcoming.component.html"),
            styles: [__webpack_require__(/*! ./upcoming.component.scss */ "./src/app/views/buttons/bookings/upcoming/upcoming.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpcomingComponent);
    return UpcomingComponent;
}());



/***/ }),

/***/ "./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/buttons/bookings/viewbookingestimation/viewbookingestimation.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-color {\n  background-color: #45c37a;\n  text-align: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2VzdGltYXRpb24vRDpcXERvY3VtZW50c1xcbXl2YWNhbGFfcGFya2luZ2FkbWluXzIwMjAvc3JjXFxhcHBcXHZpZXdzXFxidXR0b25zXFxib29raW5nc1xcdmlld2Jvb2tpbmdlc3RpbWF0aW9uXFx2aWV3Ym9va2luZ2VzdGltYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYm9va2luZ3Mvdmlld2Jvb2tpbmdlc3RpbWF0aW9uL3ZpZXdib29raW5nZXN0aW1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2VzdGltYXRpb24vdmlld2Jvb2tpbmdlc3RpbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtY29sb3Jcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDVjMzdhIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iLCIuaGVhZC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWMzN2E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

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

module.exports = ".head-color {\n  background-color: #45c37a;\n  text-align: center;\n  font-weight: 600;\n}\n\nli {\n  list-style-type: none;\n}\n\nspan {\n  margin-left: 10px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:hover {\n  color: black;\n}\n\n.hideoption {\n  display: none;\n  visibility: hidden;\n  height: 0;\n  font-size: 0;\n}\n\n.watermarked {\n  position: relative;\n}\n\n.watermarked:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-image: url('checkout.jpg');\n  background-size: 200px 200px;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n\n:host::ng-deep .p-calendar .p-inputtext {\n  padding: 5px;\n}\n\n:host::ng-deep .p-calendar ::-webkit-input-placeholder {\n  font-size: 14px;\n  color: #333;\n  padding: 0px !important;\n}\n\n:host::ng-deep .p-calendar ::-moz-placeholder {\n  font-size: 14px;\n  color: #333;\n  padding: 0px !important;\n}\n\n:host::ng-deep .p-calendar :-ms-input-placeholder {\n  font-size: 14px;\n  color: #333;\n  padding: 0px !important;\n}\n\n:host::ng-deep .p-calendar ::-ms-input-placeholder {\n  font-size: 14px;\n  color: #333;\n  padding: 0px !important;\n}\n\n:host::ng-deep .p-calendar ::placeholder {\n  font-size: 14px;\n  color: #333;\n  padding: 0px !important;\n}\n\n.card-body h6 {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9ib29raW5ncy92aWV3Ym9va2luZ2Zvcm0vRDpcXERvY3VtZW50c1xcbXl2YWNhbGFfcGFya2luZ2FkbWluXzIwMjAvc3JjXFxhcHBcXHZpZXdzXFxidXR0b25zXFxib29raW5nc1xcdmlld2Jvb2tpbmdmb3JtXFx2aWV3Ym9va2luZ2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvYm9va2luZ3Mvdmlld2Jvb2tpbmdmb3JtL3ZpZXdib29raW5nZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUkscUJBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUVJLFlBQUE7QUNFSjs7QURBQTtFQUFjLGFBQUE7RUFBYyxrQkFBQTtFQUFtQixTQUFBO0VBQVUsWUFBQTtBQ096RDs7QUROQTtFQUNJLGtCQUFBO0FDU0o7O0FETkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNTSjs7QURQRTtFQUNFLFlBQUE7QUNVSjs7QURSRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNXTjs7QURkRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNXTjs7QURkRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNXTjs7QURkRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNXTjs7QURkRTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNXTjs7QURURTtFQUNFLGdCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9idXR0b25zL2Jvb2tpbmdzL3ZpZXdib29raW5nZm9ybS92aWV3Ym9va2luZ2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZC1jb2xvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NWMzN2EgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5saVxyXG57XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5hOmhvdmVyXHJcbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5oaWRlb3B0aW9uIHsgZGlzcGxheTpub25lOyB2aXNpYmlsaXR5OmhpZGRlbjsgaGVpZ2h0OjA7IGZvbnQtc2l6ZTowOyB9XHJcbi53YXRlcm1hcmtlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXRlcm1hcmtlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9icmFuZC9jaGVja291dC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgOmhvc3Q6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtaW5wdXR0ZXh0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgOmhvc3Q6Om5nLWRlZXAgLnAtY2FsZW5kYXIgOjpwbGFjZWhvbGRlcntcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhcmQtYm9keSBoNntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfSIsIi5oZWFkLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YzM3YTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oaWRlb3B0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBoZWlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLndhdGVybWFya2VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2F0ZXJtYXJrZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JyYW5kL2NoZWNrb3V0LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG46aG9zdDo6bmctZGVlcCAucC1jYWxlbmRhciAucC1pbnB1dHRleHQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5wLWNhbGVuZGFyIDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYm9keSBoNiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var ViewbookingformComponent = /** @class */ (function () {
    function ViewbookingformComponent(router, http, _api, storage) {
        this.router = router;
        this.http = http;
        this._api = _api;
        this.storage = storage;
        this.selectedValue = '';
        this.umpcomin_text = "Upcoming";
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
    ViewbookingformComponent.prototype.chosenDate = function ($event) {
        console.log($event);
    };
    ViewbookingformComponent.prototype.upcoming = function () {
        this.router.navigate(['Home/buttons/upcoming']);
    };
    ViewbookingformComponent.prototype.upcoming_change = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            html: "<p>You Want to change the Status to </><select style='width: 210px; height:40px; margin-top:10px' class='btn btn-success' [(ngModel)]='umpcomin_text' (change)='text()'><option value='Upcoming'>Upcoming</option><option value='Check In'>Check In</option></select> ",
            confirmButtonText: "Yes"
        });
    };
    ViewbookingformComponent.prototype.checkinpage_change = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            html: "<p>You Want to change the Status to </><select style='width: 210px; height:40px; margin-top:10px' class='btn btn-success' ><option>Upcoming</option><option>Check Out</option></select> ",
            confirmButtonText: "Yes"
        });
    };
    ViewbookingformComponent.prototype.text = function () {
        console.log(this.umpcomin_text);
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
/* harmony import */ var _bookings_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bookings/upcoming/upcoming.component */ "./src/app/views/buttons/bookings/upcoming/upcoming.component.ts");























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
                path: 'upcoming',
                component: _bookings_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_22__["UpcomingComponent"],
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
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/fesm5/primeng-calendar.js");
/* harmony import */ var _bookings_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bookings/upcoming/upcoming.component */ "./src/app/views/buttons/bookings/upcoming/upcoming.component.ts");




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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_26__["NgDatepickerModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_27__["CalendarModule"]
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
                _bookings_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_28__["UpcomingComponent"],
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

module.exports = ".login_box {\n  position: relative;\n  top: 0px;\n  width: 100%;\n  height: 100vh;\n  max-height: 100vh;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f1f1f1;\n  background-image: url('Professional-Car-Mechanic.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.login_box_inner {\n  display: contents;\n  background-color: #fff;\n  padding: 50px;\n  border-radius: 8px;\n  box-shadow: 0px 0px 10px 0px #dadada;\n}\n\n.form-control {\n  border: 1px solid #323b92;\n}\n\n.login_form {\n  margin: 10px 0px;\n}\n\n.card .card-body {\n  text-align: left !important;\n}\n\n.form-control {\n  width: 300px !important;\n}\n\n.logo img {\n  margin: 0px 0px 24px 32%;\n  width: 100px;\n}\n\n.justify-center {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9vdHBsb2dpbi9EOlxcRG9jdW1lbnRzXFxteXZhY2FsYV9wYXJraW5nYWRtaW5fMjAyMC9zcmNcXGFwcFxcdmlld3NcXGJ1dHRvbnNcXG90cGxvZ2luXFxvdHBsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYnV0dG9ucy9vdHBsb2dpbi9vdHBsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7QUNFSjs7QURBRTtFQUNFLDJCQUFBO0FDR0o7O0FEQ0U7RUFDRSx1QkFBQTtBQ0VKOztBREFFO0VBQ0Usd0JBQUE7RUFDQyxZQUFBO0FDR0w7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvb3RwbG9naW4vb3RwbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5fYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JyYW5kL1Byb2Zlc3Npb25hbC1DYXItTWVjaGFuaWMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW5fYm94X2lubmVyIHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4ICNkYWRhZGE7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyM2I5MjtcclxuICB9XHJcbiAgLmxvZ2luX2Zvcm0ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICB9XHJcbiAgLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgLy8gYm94LXNoYWRvdzogMCAwIDM2cHggI2ZmMDAwMDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxvZ28gaW1nIHtcclxuICAgIG1hcmdpbjogMHB4IDBweCAyNHB4IDMyJTtcclxuICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBcclxuICBcclxuICB9XHJcbiAgLmp1c3RpZnktY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLy8gLmxvZ28ge1xyXG4gIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgd2lkdGg6IDUwMHB4O1xyXG4gIC8vICAgaGVpZ2h0OiAyMDBweDtcclxuICAvLyAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYnJhbmQvbG9nbzEucG5nXCIpIG5vLXJlcGVhdDtcclxuICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyB9XHJcbiAgLy8gLmxvZ286aG92ZXIge1xyXG4gIC8vICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9icmFuZC9sb2dvMi5wbmdcIikgbm8tcmVwZWF0O1xyXG4gIC8vIH0iLCIubG9naW5fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9icmFuZC9Qcm9mZXNzaW9uYWwtQ2FyLU1lY2hhbmljLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmxvZ2luX2JveF9pbm5lciB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggI2RhZGFkYTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjNiOTI7XG59XG5cbi5sb2dpbl9mb3JtIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyBpbWcge1xuICBtYXJnaW46IDBweCAwcHggMjRweCAzMiU7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmp1c3RpZnktY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

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

module.exports = ":host::ng-deep .ngx-datepicker-container .ngx-datepicker-calendar-container {\n  z-index: 9;\n}\n\n:host::ng-deep .ngx-datepicker-container .ngx-datepicker-input {\n  width: 100% !important;\n  padding: 10px 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV0dG9ucy9wYXltZW50cy9EOlxcRG9jdW1lbnRzXFxteXZhY2FsYV9wYXJraW5nYWRtaW5fMjAyMC9zcmNcXGFwcFxcdmlld3NcXGJ1dHRvbnNcXHBheW1lbnRzXFxwYXltZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYnV0dG9ucy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1dHRvbnMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCAubmd4LWRhdGVwaWNrZXItY29udGFpbmVyIC5uZ3gtZGF0ZXBpY2tlci1jYWxlbmRhci1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG46aG9zdDo6bmctZGVlcCAgLm5neC1kYXRlcGlja2VyLWNvbnRhaW5lciAubmd4LWRhdGVwaWNrZXItaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCI6aG9zdDo6bmctZGVlcCAubmd4LWRhdGVwaWNrZXItY29udGFpbmVyIC5uZ3gtZGF0ZXBpY2tlci1jYWxlbmRhci1jb250YWluZXIge1xuICB6LWluZGV4OiA5O1xufVxuXG46aG9zdDo6bmctZGVlcCAubmd4LWRhdGVwaWNrZXItY29udGFpbmVyIC5uZ3gtZGF0ZXBpY2tlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

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
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'DD/MM/YYYY',
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            firstCalendarDay: 0,
            // minDate: new Date(Date.now()), 
            // maxDate: new Date(Date.now()),  
            // barTitleIfEmpty: 'Click to select a date',
            placeholder: 'Check In Date',
            useEmptyBarTitle: false,
        };
        this.option = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'DD/MM/YYYY',
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            firstCalendarDay: 0,
            // minDate: new Date(Date.now()), 
            // maxDate: new Date(Date.now()),  
            // barTitleIfEmpty: 'Click to select a date',
            placeholder: 'Check Out Date',
            useEmptyBarTitle: false,
        };
    }
    PaymentsComponent.prototype.ngOnInit = function () {
    };
    PaymentsComponent.prototype.filter = function () { };
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var QrcodegenerationComponent = /** @class */ (function () {
    function QrcodegenerationComponent() {
    }
    QrcodegenerationComponent.prototype.ngOnInit = function () {
    };
    QrcodegenerationComponent.prototype.open = function () {
        var url = "../../../../../assets/img/brand/qrcode.png";
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            imageUrl: url,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







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
        this.blk = true;
        this.rvk = false;
        this.blkk = true;
        this.rvkk = false;
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
    SlotBookingComponent.prototype.filter = function () { };
    SlotBookingComponent.prototype.block = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: 'You want to Block this slot!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.blk = false;
                _this.rvk = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Done', 
                // 'Your imaginary file has been deleted.',
                'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 
                // 'Your imaginary file is safe :)',
                'error');
            }
        });
    };
    SlotBookingComponent.prototype.revoke = function () {
        this.blk = true;
        this.rvk = false;
    };
    SlotBookingComponent.prototype.block1 = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: 'You want to Block this slot!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.blkk = false;
                _this.rvkk = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Done', 
                // 'Your imaginary file has been deleted.',
                'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 
                // 'Your imaginary file is safe :)',
                'error');
            }
        });
    };
    SlotBookingComponent.prototype.revoke1 = function () {
        this.blkk = true;
        this.rvkk = false;
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