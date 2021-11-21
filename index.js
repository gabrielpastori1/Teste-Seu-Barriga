const {Builder, By, Key, until} = require('selenium-webdriver');
const auth = require('./test/auth');
const account = require('./test/account');
const payment = require('./test/payment');
const Core = require('./core');


(async () => {
  let core = new Core();
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await auth(core, driver);
    await account(core, driver);
    await payment(core, driver);
  } 
  catch(err) {
    core.error(err.toString());
  } finally {
    await driver.quit();
    core.summary();
  }
})();