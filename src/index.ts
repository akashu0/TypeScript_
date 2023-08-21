// console.log('This is typescript world');
// console.log('Winter is here');


class userData {
    email: string
    name: string
 readonly city: string = "Delhi"
    constructor(email: string,name: string){
        this.email = email,
        this.name = name
    }
}

let Vishal = new userData("v@gmai.com","Vishal kumar") 
console.log(Vishal.name);

// also can write class

class userData2 {

    // private _courseCount = 1
    protected _courseCount = 1 

    readonly city: string = "Delhi"
    constructor(
        public email: string,
        public name: string
    ){

    }

    private delete(){
        console.log("Don");
        
    }
// for getter
    get getAppleEmail(): string{
        return `apple${this.email}`
    }
    // setter
    get CourseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNum: number){
        if(courseNum <= 1) {
            throw new Error("Corse count should be more than 1")
        }
        this.courseCount = courseNum
    }
}

let Ashu = new userData2("v@gmai.com","Ashu kumar") 
console.log(Ashu.name);
// Ashu.delete() can't be access because its a private method that only can access inside the class

class subUser extends userData2 {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4 //when private change to protected the error will be gone
    }
}

// INTERFACE WITH CLASS 

interface takePhoto {
    cameraMode: string
    filter: string
    burst: number
}
interface story {
    storyTime(): string
}
class instagram implements takePhoto {

    constructor(
     public  cameraMode: string,
     public  filter: string,
     public  burst: number,
    ) {}
}

class Youtube implements takePhoto,story { //class use implements keyword to accessing interface
    constructor(
        public  cameraMode: string,
        public  filter: string,
        public  burst: number,
       ) {}

       storyTime(): string {
           return "hello everyone I am here"
       }
}