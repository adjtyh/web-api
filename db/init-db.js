// require('babel-core/register')({
//     presets: ['stage-3']
// });

const model = require('../model');
Pet = model.Pet,
User = model.User;
model.sync();

console.log('init db ok.');
process.exit(0);
