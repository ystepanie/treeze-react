const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 애플리케이션 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들의 출력 경로
    filename: 'bundle.js' // 출력 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js와 .jsx 파일에 적용
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Babel 프리셋 설정
          }
        }
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
        include: [path.resolve(__dirname, "src/style")],
      },
      {
        test: /\.(png|jp(e*)g)$/,
        loader: 'url-loader',
        options: { 
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
        } 
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // HTML 템플릿 경로
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // 확장자 명시 없이 파일 로드 가능
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // 개발 서버의 콘텐츠 경로
    compress: true,
    port: 9000 // 서버 포트
  }
};
