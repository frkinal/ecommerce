module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@store': './src/store/store.ts',
          '@components': './src/components/index.ts',
          '@assets': './src/assets/index.ts',
          '@screens': './src/screens/index.ts',
          '@navigators': './src/navigators/index.ts',
          '@navigators/types': './src/navigators/types/index.ts',
          '@theme': './src/theme/theme.ts',
          '@components/types': './src/components/types/index.ts',
        },
      },
    ],
  ],
};
