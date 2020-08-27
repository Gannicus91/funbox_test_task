const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/funbox_test_task/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': path.join(__dirname, 'src/assets'),
        '@images': path.join(__dirname, 'src/assets/images'),
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      'stylus': {
        import: '~assets/styl/_global.styl',
      },
    },
  },
  chainWebpack: config => {
    // удаляем prefetch плагин:
    config.plugins.delete('prefetch');
  },
};
