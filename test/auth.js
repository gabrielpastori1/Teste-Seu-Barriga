const auth = require('./units/auth');
const { account } = require('../generators');

module.exports = async (core, driver) => {
    let acc = account(); 

    await core.test("Criar conta", await auth.signup(driver, acc.name, acc.email, acc.password));
    await core.test("Acessar conta", await auth.login(driver, acc.email, acc.password));
    core.log(acc);
}