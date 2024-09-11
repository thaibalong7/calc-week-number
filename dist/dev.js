"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Sử dụng hàm với một số ngày
var datesToTest = [
    "2024-12-01",
    // "2023-06-04",
    // "2024-01-04",
];
datesToTest.forEach(function (date) {
    var inputDate = new Date(date);
    var info = (0, index_1.getWeekNumber)(inputDate);
    console.log(info);
    console.log("Ng\u00E0y ".concat(inputDate.toISOString(), " thu\u1ED9c tu\u1EA7n th\u1EE9 ").concat(info.weekOfMonth, " trong th\u00E1ng ").concat(info.month, ". Tu\u1EA7n ").concat(info.weekOfYear, " c\u1EE7a n\u0103m ").concat(info.year));
});
