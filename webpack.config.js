const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduct = argv.mode === 'production';
  return {
    mode: isProduct ? 'production' : 'development',
    entry: './src/index.js', // 애플리케이션 진입점
    output: {
      path: path.resolve(__dirname, 'dist'), // 번들의 출력 경로
      filename: 'bundle.js', // 출력 파일 이름
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js와 .jsx 파일에 적용
          exclude: /node_modules/, // node_modules 폴더는 제외
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'] // Babel 프리셋 설정
            }
          }
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[hash][ext][query]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html' // HTML 템플릿 경로
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode),
        'API_ENDPOINT': JSON.stringify(isProduct ? 'https://api.example.com' : 'http://localhost:3000')
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'] // 확장자 명시 없이 파일 로드 가능
    },
    devtool: 'source-map',
    devServer: {
      static: path.join(__dirname, 'dist'), // 개발 서버의 콘텐츠 경로
      compress: true, 
      port: 9000 // 서버 포트
    }
  }
};
