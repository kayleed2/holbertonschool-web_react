"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof (salary) === 'number' && salary < 500) {
        return new Teacher();
    }
    else if (typeof (salary) === 'number' && salary >= 500) {
        return new Director();
    }
}
exports.createEmployee = createEmployee;
function isDirector(employee) {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        employee = new Director;
        console.log(employee.workDirectorTasks());
    }
    else {
        employee = new Teacher();
        console.log(employee.workTeacherTasks());
    }
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        console.log('Teaching Math');
    }
    else if (todayClass === 'History') {
        console.log('Teaching History');
    }
}
exports.teachClass = teachClass;
teachClass('Math');
teachClass('History');
