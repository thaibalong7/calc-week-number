# Calculate Week Number

[![install size](https://packagephobia.com/badge?p=calc-week-number)](https://packagephobia.com/result?p=calc-week-number)
[![Coverage Status](https://coveralls.io/repos/github/thaibalong7/calc-week-number/badge.svg?branch=master)](https://coveralls.io/github/thaibalong7/calc-week-number?branch=master)
![NPM Downloads](https://img.shields.io/npm/dm/calc-week-number?style=flat)
![GitHub License](https://img.shields.io/github/license/thaibalong7/calc-week-number)

Gets information about the **week number** of a given date. This information includes the year and month of the week, the **week number of the year**, and the **week number of the month**. 

## Table of Contents

- [About Week Number](#intro)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Interface](#interface)
- [Contributing](#contributing)

## Intro
Week number according to the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard, weeks starting on **Monday** and followed by Tuesday, Wednesday, Thursday, Friday, Saturday, and with Sunday as the seventh and final day.

To know which year or month a week belongs to, we have the following rule: 1 week will belong to the year or month containing more days belonging to that year or month than the other year or month.
**For example**: if a week has the first 3 days in March, but the next 4 days are in April, then that week belongs to April.

## Install

You can install it by running:

```sh
npm install calc-week-number
```

or using `yarn`:
```sh
yarn add calc-week-number
```

## Usage

```javascript
import { getWeekNumber, getSunWeekNumber } from 'calc-week-number';

// For the week start with `Monday` (ISO-8601), get information for the week to which 2024/01/01 belongs 
getWeekNumber(new Date(2024, 0, 1)); 
// { "month": 1, "weekOfMonth": 1, "year": 2024, "weekOfYear": 1 }

// For the week start with `Sunday`, get information for the week to which 2024/12/01 belongs  
getSunWeekNumber(new Date(2024, 11, 1)); 
// { "month": 11, "weekOfMonth": 4, "year": 2024, "weekOfYear": 48 }
```

## API

##### :point_right: getWeekNumber(date: Date): WeekInfoResult
For the week start with **`Monday`** ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)), return week number info of given date.
- `date`: given date. Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Output: [WeekInfoResult](#weekinforesult)
<br/>

##### :point_right: getSunWeekNumber(date: Date): WeekInfoResult
For the week start with **`Sunday`**, return week number info of given date.
- `date`: given date. Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Output: [WeekInfoResult](#weekinforesult)

## Interface

##### WeekInfoResult
|               | Type        | Description
| -----------   | ----------- | -----------
| `year`        | **Number**  | Year of the week
| `weekOfYear`  | **Number**  | Week number of the year
| `month`       | **Number**  | Month of the week
| `weekOfMonth` | **Number**  | Number of the week in the month


## Maintainer

[@thaibalong7](https://github.com/thaibalong7)

## Contributing

Please contribute! [Look at the issues](https://github.com/thaibalong7/calc-week-number/issues).
