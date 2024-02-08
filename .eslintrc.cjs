module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/typescript',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname, //위의 project에서 지정된 tsconfig의 상대 경로에 대한 루트 디렉토리를 제공하는 옵션, 이 값이 설정되지 않으면 => 현재 디렉토리를 기준으로 해석함

    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  ignorePatterns: ['node_modules/', 'dist', '.eslintrc.cjs'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
};
