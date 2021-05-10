module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
          const tsxRule = oneOfRule.oneOf.find((rule) => rule.test && rule.test.toString().includes('ts|tsx'));
          tsxRule.include = undefined;
          tsxRule.exclude = /node_modules/;
          return webpackConfig;
        },
      },
    },
  ],
};
