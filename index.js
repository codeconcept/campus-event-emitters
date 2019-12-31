const Programmer = require("./Programmer");

const quentin = new Programmer("Quentin");

// cb must NOT be an arrow function
// as we want this to refer to quentin
quentin.on("study", function(subject) {
  console.log(`${this.name} is studying ${subject}`);
  quentin.study(subject);
});

quentin.emit("study", "JavaScript");

setTimeout(() => {
  quentin.emit("study", "C++");
  console.log(quentin.fields);
}, 2000);

quentin.emit("study", "MERN");
