const path = require('path'); //node模块
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',//当前项目入口文件
  output: {					//出口
    filename: 'bundle.js',	//输出的文件名
    // publicPath: 'js/' //设置为index.html提供资源服务的时候带有强制性
    path: path.resolve(__dirname, 'dist/js/') //输出目录
  },
   module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
	    {
	       test: /\.(png|svg|jpg|gif)$/,
	       use: [
	         'file-loader'
	       ]
	    }
    ]
   },
   devServer: {
	     contentBase: './dist'
	},
	plugins:[
		new HtmlWebpackPlugin({template: './index.html'}),
		new CleanWebpackPlugin(['dist'])
	]
};