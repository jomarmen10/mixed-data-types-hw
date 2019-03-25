console.log("mixed-data-types")

// A light switch that can be either on or off.
// A user's email address.
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// A list of student names from our class.
// A list of student names from our class, each with a location.
// A list of student names from our class, each with a location and each with a list of favorite tv shows.

const swittch = (trueOrFalse) => {
  if (!trueOrFalse){
    console.log("false")
  }else {
    console.log('true')
  }
};

let userEmail = "sample@gmail." //prompt("enter email")

const spaceShip = {
  name: "spaceRocket",
  laserBlaster: 2,
  waspDrive: true
}

const gaSei = {
  online: ["chicago", "denver"],
  losAngeles: ["jeff", "tom"],
  instrutor: true
}

const seiClass = {
  student: {name: "tom", location: "dtla"},
  student1: {name: "jeff", location: "litle tokyo"},
  losAngeles: true
}

seiClass.student.favoriteTv = "big bang"
seiClass.student1.favoriteTv = "broklyn 99"

// console.log(seiClass)


// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.
// Make an object that is called your name and holds the information about your favorite food, a hobby,
// the name of the town that you live in currently, and your favorite datatype.

// Write code that will access your hobby from the object that you just created.

const raindow = ["red","orange","yellow","green","blue","indigo","violet"]
console.log(raindow[4]);

const jomar = {
  food: "kbbq",
  hobby: "video games",
  location: "la puente",
  favoriteDataType: "boolean"
}

console.log(jomar.hobby)
