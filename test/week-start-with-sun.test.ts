import { getWeekOfMonth } from "../src";
import { ISO_WEEK_INDEXED } from "../src/constants";
import { WeekInfoResult } from "../src/types";

const testCaseTemplate = (date: Date, expectedResult: WeekInfoResult) => {
  const { year, weekOfYear, month, weekOfMonth, } = getWeekOfMonth(date, ISO_WEEK_INDEXED);

  expect(year).toBe(expectedResult.year);
  expect(weekOfYear).toBe(expectedResult.weekOfYear);
  expect(month).toBe(expectedResult.month);
  expect(weekOfMonth).toBe(expectedResult.weekOfMonth);
}

describe('Week starts with <<Sunday>> (ISO week)', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});
