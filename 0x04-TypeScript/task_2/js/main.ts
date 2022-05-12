interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director implements DirectorInterface{
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface{
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string) {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher();
    } else if (typeof(salary) === 'number' && salary >= 500) {
        return new Director();
    }
}

export function isDirector(employee: any) {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}

export function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        employee = new Director;
        console.log(employee.workDirectorTasks());
    } else {
        employee = new Teacher();
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        console.log('Teaching Math');
    } else if (todayClass === 'History') {
        console.log('Teaching History');
    }
}
