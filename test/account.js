const account = require('./units/account');
const { bank_account } = require('../generators');

module.exports = async (core, driver) => {
    let ba1 = bank_account();
    let ba2 = bank_account();

    await core.test("Criar conta banco", await account.add(driver, ba1));
    await core.test("Número de contas igual 1", await account.length(driver), 1);
    await core.test("Criar outra conta banco", await account.add(driver, ba2));
    await core.test("Número de contas igual 2", await account.length(driver), 2);
    await core.test("Apaga uma conta", await account.delete(driver));
    await core.test("Número de contas igual 1", await account.length(driver), 1);
}