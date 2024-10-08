"use strict";

const getYears = function (year, endYear) {

    console.log('--------------------------------')
    for (var year; year <= endYear; year++) {
        const d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            console.log(`1st January is bieng Sunday ${year}`);
        }
    }
    console.log('--------------------------------')
};

getYears(2014, 2050);