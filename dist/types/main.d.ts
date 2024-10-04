import { WeekIndexed, WeekInfoResult } from "./types";
export declare function diffWeekOfTwoDate(date1: Date, date2: Date, weekIndexed?: WeekIndexed): number;
/**
 * For the week start with `Monday` ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)), return week number of given date
 * @param {Date} date
 * @returns {WeekInfoResult}
 */
export declare const getWeekNumber: (date: Date) => WeekInfoResult;
/**
 * For the week start with `Sunday`, return week number of given date
 * @param {Date} date
 * @returns {WeekInfoResult}
 */
export declare const getSunWeekNumber: (date: Date) => WeekInfoResult;
