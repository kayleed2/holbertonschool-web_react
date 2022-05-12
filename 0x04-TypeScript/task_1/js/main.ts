interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [extra: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string): string {
        return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string,
    lastName: string): string;
}

interface studentConstructorInter {
    firstName: string;
    lastName: string;
}

interface studentClassInter {
    firstName: string;
    lastName: string;
    workOnHomework: () => void;
    displayName: () => void;
}

class StudentClass implements studentClassInter {
    firstName: string;
    lastName: string;
    
    constructor(names: studentConstructorInter) {
        this.firstName = names.firstName;
        this.lastName = names.lastName;
    }

    workOnHomework() {
        return 'Currently Working';
    }

    displayName() {
        return this.firstName;
    }
}
