import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // 요구되는 path경로는 절대 경로다.
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // './App'으로 import하고 있을 때 좌->우 순서로 확장자를 매치해가며 파일을 찾으
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript와 TSX 파일 처리
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // 정적 파일 경로
    },
    hot: true,
    port: 3024,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
