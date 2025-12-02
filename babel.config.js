module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@store': './src/store',
          '@api': './src/api',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@config': './src/config',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@config': './src/config',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
