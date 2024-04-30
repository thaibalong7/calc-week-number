# Week Number

[![Build Status](https://travis-ci.org/thaibalong7/week-number.svg?branch=master)](https://travis-ci.org/thaibalong7/week-number){:target="_blank"}

Gets information about the **week number** of a given date. This information includes the year and month of the week, the **week number of the year**, and the **week number of the month**. 

## Table of Contents

- [About Week Number](#intro)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Interface](#interface)
- [Contributing](#contributing)

## Intro
Week number according to the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"} standard, weeks starting on **Monday** and followed by Tuesday, Wednesday, Thursday, Friday, Saturday, and with Sunday as the seventh and final day.

To know which year or month a week belongs to, we have the following rule: 1 week will belong to the year or month containing more days belonging to that year or month than the other year or month.
**For example**: if a week has the first 3 days in March, but the next 4 days are in April, then that week belongs to April.

## Install

You can install it by running:

```sh
npm install week-number
```

or using `yarn`:
```sh
yarn add week-number
```

## Usage

```javascript
import { getWeekNumber, getSunWeekNumber } from 'week-number';

// For the week start with `Monday` (ISO-8601), get information for the week to which 2024/01/01 belongs 
getWeekNumber(new Date(2024, 0, 1)); // { "month": 1, "weekOfMonth": 1, "year": 2024, "weekOfYear": 1 }

// For the week start with `Sunday`, get information for the week to which 2024/12/01 belongs  
getSunWeekNumber(new Date(2024, 11, 1)); // { "month": 11, "weekOfMonth": 4, "year": 2024, "weekOfYear": 48 }
```

## API

##### :point_right: getWeekNumber(date: Date): WeekInfoResult
For the week start with **`Monday`** ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"}), return week number info of given date.
- `date`: given date. Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date){:target="_blank"}
- Output: [WeekInfoResult](#weekinforesult)
<br/>

##### :point_right: getSunWeekNumber(date: Date): WeekInfoResult
For the week start with **`Sunday`**, return week number info of given date.
- `date`: given date. Type: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date){:target="_blank"}
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

[@thaibalong7](https://github.com/thaibalong7){:target="_blank"}

## Contributing

Please contribute! [Look at the issues](https://github.com/thaibalong7/week-number/issues){:target="_blank"}.
