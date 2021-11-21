const { By, Key, until } = require("selenium-webdriver");

module.exports.login = async function (driver, email, password) {
  await driver.get("https://seubarriga.wcaquino.me/login");
  await driver
    .findElement(By.name("email"))
    .sendKeys(email, Key.TAB, password, Key.RETURN);
  return await driver
    .wait(until.titleIs("Seu Barriga - Home"), 2000)
    .then(() => true)
    .catch(() => false);
};

module.exports.signup = async function (driver, name, email, password) {
  await driver.get("https://seubarriga.wcaquino.me/cadastro");
  await driver
    .findElement(By.name("nome"))
    .sendKeys(name, Key.TAB, email, Key.TAB, password, Key.RETURN);
  let success = await driver
    .wait(until.titleIs("Seu Barriga - Log in"), 2000)
    .then(() => true)
    .catch(() => false);
  return success;
};
