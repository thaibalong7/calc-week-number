export type DayOfTheWeek = "sun" | "mon" | "tues" | "wed" | "thus" | "fri" | "sat";
export type IndexOfDayInWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DayMapper = {
    [key in (DayOfTheWeek | IndexOfDayInWeek)]: (DayOfTheWeek | IndexOfDayInWeek);
};
export type WeekIndexed = DayOfTheWeek[];
export type WeekInfoResult = {
    month: number;
    weekOfMonth: number;
    year: number;
    weekOfYear: number;
};
