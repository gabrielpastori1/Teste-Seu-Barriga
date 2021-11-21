const payment = require('./units/payment');
const { payment: paymentGenerator } = require('../generators');

module.exports = async (core, driver) => {
    let p1 = paymentGenerator(); 
    let p2 = paymentGenerator(); 
    let p3 = paymentGenerator(); 

    await core.test("Cria Pagamento", await payment.add(driver, p1));
    await core.test("Itens extrato igual 1", await payment.length(driver), 1);
    await core.test("Cria Pagamento", await payment.add(driver, p2));
    await core.test("Cria Pagamento", await payment.add(driver, p3));
    await core.test("Itens extrato igual 3", await payment.length(driver), 3);
    await core.test("Apaga Pagamento", await payment.delete(driver));
    await core.test("Itens extrato igual 2", await payment.length(driver), 2);
    await core.test("Apaga Pagamento", await payment.delete(driver));
    await core.test("Apaga Pagamento", await payment.delete(driver));
    await core.test("Itens extrato igual 0", await payment.length(driver), 0);
}