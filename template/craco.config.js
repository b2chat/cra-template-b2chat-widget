module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.open = {
      ...devServerConfig.open,
      target: ["http://app.b2chat.io/agent/chat/?widgetdev=1"],
    };
    return devServerConfig;
  },
};
