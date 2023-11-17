const chalk = require("chalk");
const project = require("./package.json");

module.exports = {
  devServer: (devServerConfig) => {
    const widgetURL = "https://app.b2chat.io/agent/chat/?widgetdev=1";
    devServerConfig.open = {
      ...devServerConfig.open,
      target: [widgetURL],
    };
    devServerConfig.onListening = (server) => {
      server.compiler.hooks.done.tap("done", (stats) => {
        const statsData = stats.toJson({
          all: false,
          warnings: true,
          errors: true,
        });
        const isSuccessful =
          !statsData.errors.length && !statsData.warnings.length;

        if (isSuccessful) {
          console.clear();
          console.log(chalk.green("Compiled successfully!"));
          console.log();
          console.log(
            `You can now view ${chalk.bold(project.name)} in the browser.`
          );
          console.log();
          console.log(`  ${chalk.bold("On B2Chat console:")}  ${widgetURL}`);
          console.log();
        }
      });
    };
    return devServerConfig;
  },
};
