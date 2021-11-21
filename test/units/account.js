const { By, Key, until } = require("selenium-webdriver");

module.exports.add = async function (driver, accountName) {
  await driver.get("https://seubarriga.wcaquino.me/addConta");
  await driver
    .findElement(By.name("nome"))
    .sendKeys(accountName, Key.RETURN);
  return await driver
    .wait(until.titleIs("Seu Barriga - Contas"), 2000)
    .then(() => true)
    .catch(() => false);
};

module.exports.length = async function (driver) {
  await driver.get("https://seubarriga.wcaquino.me/contas");
  let elem = await driver.findElement(By.css('tbody')).findElements(By.css('tr'));
  return elem.length;
};

module.exports.delete = async function (driver) {
  await driver.get("https://seubarriga.wcaquino.me/contas");
  let elem = await driver.findElement(By.css('tbody')).findElement(By.css('tr')).findElement(By.css('span.glyphicon.glyphicon-remove-circle'));
  await elem.click();
  return true;
};