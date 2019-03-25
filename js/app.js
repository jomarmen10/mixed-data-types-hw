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
// console.log(raindow[4]);

const jomar = {
  food: "kbbq",
  hobby: "video games",
  location: "la puente",
  favoriteDataType: "boolean"
}

// console.log(jomar.hobby)


const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}


// "omg my mouth is burning"
// "Pretty pretty prettayyyyy good"
// "Swearing at Larry and Jeff"
// "Chicken Teriyaki Boyyyyyy"
// The object the contains the name funkhauser

// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0])
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);


const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

// Change the value of limbo to null

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)
