interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student= {
    firstName: 'John',
    lastName: 'Smith',
    age: 15,
    location: 'Tulsa',
}

const student2: Student= {
    firstName: 'Sally',
    lastName: 'Williams',
    age: 14,
    location: 'Oklahoma City',
}

const studentsList: Array<Student> =  [student1, student2];
console.log(studentsList);
