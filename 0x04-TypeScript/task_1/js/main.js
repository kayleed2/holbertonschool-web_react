"use strict";
exports.__esModule = true;
var teacher1 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
function printTeacher(firstName, lastName) {
    console.log(firstName[0] + ". " + lastName);
}
exports["default"] = printTeacher;
printTeacher("Kaylee", "Dao");
