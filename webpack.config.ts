import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/index.tsx", // 진입점
  resolve: {
    // 플러그인을 사용하는 경우
    // plugins: [new TsconfigPathsPlugin()],

    // 플러그인을 사용하지 않는 경우
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },

    // 타입스크립트 환경에서 사용할 모듈의 확장자를 추가로 지정해줍니다
    // 플러그인 사용 여부와 관계없음
    extensions: ['.ts', '.tsx', '.js'],
  }
};

export default config;
