//const xyz = require('./people');
const { people, ages } = require('./people')// destructure

//console.log(xyz.people, xyz.ages);
console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());