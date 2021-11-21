const chalk = require("chalk");

module.exports = function () {
  async function test(name, result, expected = true) {
    await result;
    this.results.push({
      success: result === expected,
      name,
      result,
      expected,
    });
  }

  function log(any) {
    this.debuggerList.push(any);
  }
  function error(any) {
    this.errors.push(any);
  }

  function summary() {
    console.log("\033[2J");
    let success = this.results.filter((res) => res.success);
    let fail = this.results.filter((res) => !res.success);

    this.results.forEach((result) => {
      if (result.success) {
        console.log(chalk.green(`SUCCESS: ${result.name}`));
      } else {
        console.log(chalk.red(`FAIL: ${result.name}`));
      }
    });
    console.log(chalk.bold.bgCyan(`\n\n RESULTS `));
    console.log(chalk.green(`SUCCESS: ${success.length}`));
    console.log(chalk.red(`FAIL: ${fail.length}`));
    if (this.errors.length) {
      console.log(chalk.bold.bgRed("\n\n Errors catch "));
      this.errors.forEach((d) => console.log(chalk.red(d)));
    }
    
    if (this.debuggerList.length) {
      console.log(chalk.bold.bgWhite.black("\n\n Logged Data "));
      this.debuggerList.forEach((d) => console.log(d));
    }
  }

  return {
    results: [],
    debuggerList: [],
    errors:[],
    error,
    test,
    summary,
    log,
  };
};
