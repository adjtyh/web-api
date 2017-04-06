const models = require('../model');

let User = models.User;


var fn_user = async (ctx, next) => {
    var
        name = ctx.request.body.name || 'add',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);

    var users = await getUsersByName(name);

    ctx.response.body = users;
};

var fn_signin2 = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);

    var user = await getUsersByName(name);


    if (name === user.JSON().name && password === user.dataValues.passwd) {
        ctx.response.body = `<h1>Welcome11, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/user">Try again</a></p>`;
    }
};

async function getUsersByName(name) {

    var users = await User.findAll({
        where: {
            name: name
        }
    });
    console.log(`find ${users.length} users:`);

    return users;
    // for (let user of users) {
    //     console.log(JSON.stringify(user));
    //     return user;
    // }
}

module.exports = {
    'GET /user': fn_user,
    'POST /signin2': fn_signin2
};
