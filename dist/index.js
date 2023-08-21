"use strict";
// console.log('This is typescript world');
// console.log('Winter is here');
class userData {
    constructor(email, name) {
        this.city = "Delhi";
        this.email = email,
            this.name = name;
    }
}
let Vishal = new userData("v@gmai.com", "Vishal kumar");
console.log(Vishal.name);
// also can write class
class userData2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1
        this._courseCount = 1;
        this.city = "Delhi";
    }
    delete() {
        console.log("Don");
    }
    // for getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // setter
    get CourseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Corse count should be more than 1");
        }
        this.courseCount = courseNum;
    }
}
let Ashu = new userData2("v@gmai.com", "Ashu kumar");
console.log(Ashu.name);
// Ashu.delete() can't be access because its a private method that only can access inside the class
class subUser extends userData2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; //when private change to protected the error will be gone
    }
}
class instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    storyTime() {
        return "hello everyone I am here";
    }
}
