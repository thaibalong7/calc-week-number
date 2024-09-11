"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSunWeekNumber = exports.getWeekNumber = exports.diffWeekOfTwoDate = void 0;
var constants_1 = require("./constants");
function diffWeekOfTwoDate(date1, date2, weekIndexed) {
    if (weekIndexed === void 0) { weekIndexed = constants_1.ISO_WEEK_INDEXED; }
    var weekIndexOfDate2 = weekIndexed.findIndex(function (v) { return v === constants_1.DAY_MAPPER[date2.getDay()]; });
    return 1 + Math.trunc(((date1.getTime() - date2.getTime()) / 86400000 + weekIndexOfDate2) / 7);
}
exports.diffWeekOfTwoDate = diffWeekOfTwoDate;
var getWeekNumberGenerator = function (weekIndexed) {
    if (weekIndexed === void 0) { weekIndexed = constants_1.ISO_WEEK_INDEXED; }
    return function (date) {
        var fDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        // Thusday(isoweek)/Wednesday in current week decides the year and month.
        var indexOfCurrDate = weekIndexed.findIndex(function (v) { return v === constants_1.DAY_MAPPER[date.getDay()]; });
        fDate.setDate(fDate.getDate() + 3 - indexOfCurrDate);
        // January 4 is always in week 1 of year.
        var week1_Of_Year = new Date(Date.UTC(fDate.getFullYear(), 0, 4));
        // 4th of month is always in week 1 of month.
        var week1_Of_Month = new Date(Date.UTC(fDate.getFullYear(), fDate.getMonth(), 4));
        var weekOfYear = diffWeekOfTwoDate(fDate, week1_Of_Year, weekIndexed);
        return {
            month: fDate.getMonth() + 1,
            weekOfMonth: weekOfYear - diffWeekOfTwoDate(week1_Of_Month, week1_Of_Year, weekIndexed) + 1,
            year: fDate.getFullYear(),
            weekOfYear: weekOfYear,
        };
    };
};
/**
 * For the week start with `Monday` ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)), return week number of given date
 * @param {Date} date
 * @returns {WeekInfoResult}
 */
exports.getWeekNumber = getWeekNumberGenerator();
/**
 * For the week start with `Sunday`, return week number of given date
 * @param {Date} date
 * @returns {WeekInfoResult}
 */
exports.getSunWeekNumber = getWeekNumberGenerator(constants_1.SUNDAY_WEEK_INDEXED);
