// CommonJs, every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum 'what we want')

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// sayHi('suzan');
// sayHi(names.john);
// sayHi(names.petter);
