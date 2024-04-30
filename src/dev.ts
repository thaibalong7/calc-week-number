import { getWeekNumber } from "./index";

// Sử dụng hàm với một số ngày
const datesToTest = [
  "2024-12-01",
  // "2023-06-04",
  // "2024-01-04",
];

datesToTest.forEach(date => {
  const inputDate = new Date(date);
  const info = getWeekNumber(inputDate);
  console.log(info);
  console.log(`Ngày ${inputDate.toISOString()} thuộc tuần thứ ${info.weekOfMonth} trong tháng ${info.month}. Tuần ${info.weekOfYear} của năm ${info.year}`)
})
