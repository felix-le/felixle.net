const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(
  withSass({
    webpack: function(config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]'
          }
        }
      });
      return config;
    }
  })
)