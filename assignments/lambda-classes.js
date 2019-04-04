// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location,
            this.gender = attributes.gender
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const testDummy = new Person({
    name: 'test',
    location: 'notBedrock',
    age: 5555,
    gender: "male"
})

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score in ${subject}`;
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects() {
        // Outputting a vanilla array looked ugly, small fix

        // Initializes variable with assignment of 'one white space'
        let dangerousVar = ' ';

        // Takes each element of the array, assigns it a value of a string, comma, and some white space. Finally, adds it to dangerousVar
        let butts = this.favSubjects.forEach(function(currentItem){
           dangerousVar += `${currentItem}, `
        })

        // Slices the two characters off of dangerousVar because the loop ends with 'currentItem, ', making the entire string look ugly
        let newString = dangerousVar.slice(1, (dangerousVar.length-2));

        return `You are taking ${newString}.`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name} code on ${subject}`
    }
}

const testInstuctor = new Instructor({
    name: 'test',
    location: 'notBedrock',
    age: 5555,
    gender: "male",
    specialty: "spanish",
    favLanguage: "elm",
    catchPhrase: "what"
})

const testStudent = new Student({
    name: 'test',
    location: 'notBedrock',
    age: 5555,
    gender: "male",
    specialty: "spanish",
    favLanguage: "elm",
    catchPhrase: "what",
    previousBackground: "notStudent",
    className: "cs10000",
    favSubjects: ['reading', 'books', 'more books', 'more reading']
})

const testPR = new ProjectManager({
    name: 'test',
    location: 'notBedrock',
    age: 5555,
    gender: "male",
    specialty: "spanish",
    favLanguage: "elm",
    catchPhrase: "what",
    gradClassName: "CS!",
    favInstructor: "aaaa"
})

