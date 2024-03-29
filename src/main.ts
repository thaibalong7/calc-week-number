import { DAY_MAPPER, DEFAULT_WEEK_INDEXED, ISO_WEEK_INDEXED } from "./constants";
import { IndexOfDayInWeek, WeekIndexed, WeekInfoResult } from "./types";

export function diffWeekOfTwoDate(date1: Date, date2: Date, weekIndexed: WeekIndexed = DEFAULT_WEEK_INDEXED) {
  const weekIndexOfDate2 = weekIndexed.findIndex((v) => v === DAY_MAPPER[<IndexOfDayInWeek>date2.getDay()]);

  return 1 + Math.trunc((
    (date1.getTime() - date2.getTime()) / 86400000 + weekIndexOfDate2
  ) / 7);
}

const getWeekNumberGenerator = (weekIndexed: WeekIndexed = DEFAULT_WEEK_INDEXED) => (date: Date): WeekInfoResult => {
  const fDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );

  // Thusday(isoweek)/Wednesday in current week decides the year and month.
  const indexOfCurrDate = weekIndexed.findIndex((v) => v === DAY_MAPPER[<IndexOfDayInWeek>date.getDay()]);
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
  }
}

export const getWeekNumber = getWeekNumberGenerator();
export const getIsoWeekNumber = getWeekNumberGenerator(ISO_WEEK_INDEXED);
