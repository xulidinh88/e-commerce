const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, '.src/'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@enums': path.resolve(__dirname, './src/enums'),
      '@types': path.resolve(__dirname, './src/types'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@styled': path.resolve(__dirname, './src/styled'),
      '@constants': path.resolve(__dirname, './src/constants')
    }
  }
};
