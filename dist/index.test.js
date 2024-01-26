"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const testCaseTemplate = (date, expectedResult) => {
    const { year, weekOfYear, month, weekOfMonth, } = (0, _1.getWeekOfMonth)(date);
    expect(year).toBe(expectedResult.year);
    expect(weekOfYear).toBe(expectedResult.weekOfYear);
    expect(month).toBe(expectedResult.month);
    expect(weekOfMonth).toBe(expectedResult.weekOfMonth);
};
describe('Week starts with <<Monday>> ', () => {
    test('28/12/2020 must be in week 53 of 2020, week 5 of 12/2020', () => {
        testCaseTemplate(new Date(2020, 11, 28), {
            weekOfYear: 53, year: 2020,
            weekOfMonth: 5, month: 12
        });
    });
    test('01/01/2021 must be in week 53 of 2020, week 5 of 12/2020', () => {
        testCaseTemplate(new Date(2021, 0, 1), {
            weekOfYear: 53, year: 2020,
            weekOfMonth: 5, month: 12
        });
    });
    test('01/01/2023 must be in week 52 of 2022, week 5 of 12/2022', () => {
        testCaseTemplate(new Date(2023, 0, 1), {
            weekOfYear: 52, year: 2022,
            weekOfMonth: 5, month: 12
        });
    });
    test('02/01/2023 must be in week 1 of 2023, week 1 of 01/2023', () => {
        testCaseTemplate(new Date(2023, 0, 2), {
            weekOfYear: 1, year: 2023,
            weekOfMonth: 1, month: 1
        });
    });
    test('15/01/2023 must be in week 2 of 2023, week 2 of 01/2023', () => {
        testCaseTemplate(new Date(2023, 0, 15), {
            weekOfYear: 2, year: 2023,
            weekOfMonth: 2, month: 1
        });
    });
    test('31/05/2023 must be in week 22 of 2023, week 1 of 06/2023', () => {
        testCaseTemplate(new Date(2023, 4, 31), {
            weekOfYear: 22, year: 2023,
            weekOfMonth: 1, month: 6
        });
    });
    test('04/06/2023 must be in week 22 of 2023, week 1 of 06/2023', () => {
        testCaseTemplate(new Date(2023, 5, 4), {
            weekOfYear: 22, year: 2023,
            weekOfMonth: 1, month: 6
        });
    });
    test('31/12/2023 must be in week 52 of 2023, week 4 of 12/2023', () => {
        testCaseTemplate(new Date(2023, 11, 31), {
            weekOfYear: 52, year: 2023,
            weekOfMonth: 4, month: 12
        });
    });
    test('01/01/2024 must be in week 1 of 2024, week 1 of 1/2024', () => {
        testCaseTemplate(new Date(2024, 0, 1), {
            weekOfYear: 1, year: 2024,
            weekOfMonth: 1, month: 1
        });
    });
});
describe('Week starts with <<Sunday>>', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });
});
//# sourceMappingURL=index.test.js.map