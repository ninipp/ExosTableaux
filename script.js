// Length

let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];
  function myAlphabetLength() {
    console.log(myAlphabet.length);
  }
  myAlphabetLength()

// Ceate a arrey
  let planets = ["Jupiter", "Terre", "Mars", "Saturne", "Wakanda"];
  planets.forEach((p, i) => {
    console.log(p, i);
    // const index = (planet) => planet >=0
    // console.log(planets.findIndex(index));
  });

//   Manipulate data types


// // const someDataTypes = ["Parfait", true, undefined, null, 1996];
// // for (let i = 0; i < someDataTypes.length; i++) {
// //     console.log(`Index ${i} : ${someDataTypes[i]}, Type : ${typeof someDataTypes[i]}`);
    
// };

// const birthYear = 1996;
// const someDataTypes = ["Parfait", true, undefined, null, ${birthYear}];
// for (let i = 0; i < someDataTypes.length; i++) {
//     console.log(`Index ${i} : ${someDataTypes[i]}, Type : ${typeof someDataTypes[i]}`);
    
// };

const someDataTypes = ["Parfait", true, undefined, null, 1996];
for (let i = 0; i < someDataTypes.length; i++) {
    console.log(`Index ${i} : ${someDataTypes[i]}, Type : ${typeof someDataTypes[i]}`);
    
};

// Empty Array

const students = [];

let copyStudents = students.slice();
copyStudents.push("André", "Serges", "Poke", "Nik", "Clara");
copyStudents[2] = "Sarah";

console.log(copyStudents);

let copy2Students = copyStudents.slice();
copy2Students.push("Minani", "Jara", "kabura", "Venant", "Misago");
console.log(copy2Students);



console.log(students);












  
