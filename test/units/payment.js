const { By, Key, until } = require("selenium-webdriver");

module.exports.add = async function (driver, payment) {
  await driver.get("https://seubarriga.wcaquino.me/movimentacao");

  let situacao = payment.status_pago;
  delete payment.status_pago;

  Object.entries(payment).forEach(async (p) => {
    await driver.findElement(By.name(p[0])).sendKeys(p[1], Key.TAB);
  });
  await driver.findElement(By.id(situacao)).click();
  await driver.findElement(By.css("button.btn.btn-primary")).click();

  let alert = await driver
    .wait(until.elementLocated(By.css("div.alert")))
    .getText();

  return alert.includes("Movimentação adicionada com sucesso!");
};

module.exports.length = async function (driver) {
    await driver.get("https://seubarriga.wcaquino.me/extrato");
    
    let elems = await driver.findElement(By.css("tbody")).findElements(By.css("tr"));
    return elems.length;
};

module.exports.delete = async function (driver, index = 0) {
    await driver.get("https://seubarriga.wcaquino.me/extrato");
    
    let elems = await driver.findElement(By.css("tbody")).findElements(By.css("tr"));
    let elem = elems[index];
    elem.findElement(By.css("span.glyphicon.glyphicon-remove-circle")).click();
    let alert = await driver
      .wait(until.elementLocated(By.css("div.alert")))
      .getText();
    
    return alert.includes("Movimentação removida com sucesso!");
};