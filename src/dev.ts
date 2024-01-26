import { getWeekOfMonth } from ".";

// Sử dụng hàm với một số ngày
const datesToTest = [
  "2023-01-01",
  // "2023-06-04",
  // "2024-01-04",
];

datesToTest.forEach(date => {
  const inputDate = new Date(date);
  const info = getWeekOfMonth(inputDate);
  console.log(`Ngày ${inputDate.toISOString()} thuộc tuần thứ ${info.weekOfMonth} trong tháng ${info.month}. Tuần ${info.weekOfYear} của năm ${info.year}`)
})