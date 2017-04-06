
const model = require('../model');

let
    Pet = model.Pet,
    User = model.User,
    text = { };

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    var now = Date.now();
    // model.sync();
    // console.log('init db ok.');

    (async () => {
    var users = await User.findAll({
        where: {
            name: 'add'
        }
    });
    console.log(`find ${users.length} users:`);
    for (let u of users) {
        console.log(JSON.stringify(u));
        text = JSON.stringify(u);
    }
})();
    
        ctx.response.body = '<h1>111'+text+'</h1>';

};

module.exports = {
    'GET /hello/:name': fn_hello
};
