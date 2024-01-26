"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekOfMonth = exports.diffWeekOfTwoDate = void 0;
const constants_1 = require("./constants");
function diffWeekOfTwoDate(date1, date2, weekIndexed = constants_1.DEFAULT_WEEK_INDEXED) {
    const weekIndexOfDate2 = weekIndexed.findIndex((v) => v === constants_1.DAY_MAPPER[date2.getDay()]);
    return 1 + Math.trunc(((date1.getTime() - date2.getTime()) / 86400000 + weekIndexOfDate2) / 7);
}
exports.diffWeekOfTwoDate = diffWeekOfTwoDate;
function getWeekOfMonth(date, weekIndexed = constants_1.DEFAULT_WEEK_INDEXED) {
    const fDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    // Thusday(isoweek)/Wednesday in current week decides the year and month.
    const indexOfCurrDate = weekIndexed.findIndex((v) => v === constants_1.DAY_MAPPER[date.getDay()]);
    fDate.setDate(fDate.getDate() + 3 - indexOfCurrDate);
    // January 4 is always in week 1 of year.
    const week1_Of_Year = new Date(Date.UTC(fDate.getFullYear(), 0, 4));
    // 4th of month is always in week 1 of month.
    const week1_Of_Month = new Date(Date.UTC(fDate.getFullYear(), fDate.getMonth(), 4));
    const weekOfYear = diffWeekOfTwoDate(fDate, week1_Of_Year, weekIndexed);
    return {
        month: fDate.getMonth() + 1,
        weekOfMonth: weekOfYear - diffWeekOfTwoDate(week1_Of_Month, week1_Of_Year, weekIndexed) + 1,
        year: fDate.getFullYear(),
        weekOfYear,
    };
}
exports.getWeekOfMonth = getWeekOfMonth;
//# sourceMappingURL=index.js.map