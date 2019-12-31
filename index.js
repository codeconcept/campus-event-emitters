const Programmer = require("./Programmer");

const quentin = new Programmer("Quentin");
const camille = new Programmer("Camille");

// cb must NOT be an arrow function
// as we want this to refer to quentin
quentin.on("study", function(subject) {
  console.log(`${this.name} is studying ${subject}`);
  quentin.study(subject);
});

camille.on("study", function(subject) {
  console.log(`${this.name} is studying ${subject}`);
  camille.study(subject);
});

quentin.emit("study", "JavaScript");
camille.emit("study", "TypeScript");

setTimeout(() => {
  quentin.emit("study", "C++");
  console.log(quentin.fields);
}, 2000);

quentin.emit("study", "MERN");
camille.emit("study", "NestJS");
