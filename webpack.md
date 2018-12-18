## Webpack

#### 介绍

​	**webpack**是一个模块打包器（bundler），在webpack中，前端的所有资源文件（js/json/css/img/...）都会作为模块处理；它将根据模块的依赖关系进行静态分析，生成对应的静态资源

​	webpack只能本身只能加载js/json模块，要加载其他类型的文件（模块），需要使用对应的**loader**；loader时运行在node.js环境中的avascript模块；loader本身时一个函数，接受源文件作为参数，返回装换结果；它一般以xxx-loader的方式命名

​	`webpack.config.js`是一个node模块，返回一个json格式的配置信息对象

​	webpack中，插件可以完成一些loader不能完成的功能；一般在webpack的配置信息**plugins**选项中指定

​		`CleanWebpackPlugin`：自动清除指定文件夹资源

​		`HtmlWebpackPlugin`：自动生成HTML文件

​		`UglifyJSPlugin`：压缩js文件

#### 安装

​	`npm init`	在执行目录下初始化项目包配置的json文件，下面的module安装会在该json文件中记录

​	`npm install webpack -g`	全局安装

​	`npm install webpack --save-dev`	局部安装

#### 基本构建

​	**入口**： src/js/app.js

​	**主界面**：dist/index.html

​	**编译**：npx webpack src/js/app.js --output-filename bundle.js --output-path dist/ --mode development

![](C:\Users\Administrator\Desktop\Web\Webpack\npx webpack.png)	

​	**使用webpack.config.js**：直接通过命令npx webpack打包项目，在该命令执行时，直接读取webpack.config.js进行参数执行

```javascript
const path = require('path'); //node模块

module.exports = {
  entry: './src/js/app.js',//当前项目入口文件
  output: {					//出口
    filename: 'bundle.js',	//输出的文件名
    path: path.resolve(__dirname, 'dist/js/') //输出目录
  }
};
```

#### 打包css与图片文件

安装loader

​	`npm install css-loader style-loader --save-dev`

​	`npm install file-loader url-loader --save-dev`

在webpack.config.js中加入模块脚本

```javascript
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
   }
```

入口文件app.js中直接导入

```javascript
import '../css/test.css'
```

```css
body{
	background: skyblue;
}

#ico{
	width: 100px;
	height: 100px;
	background: url('../image/1.jpg');
}
```

#### 自动编译打包（热加载）

​	**webpack-dev-server**

​	该模块直接服务于当前项目根目录index.html文件，跟其他资源无关

​	`npm install --save-dev webpack-dev-server`	安装

​	在webpack.config.js中加入所服务的index.html目录，否则直接服务根目录下index.html

```javascript
 devServer: {
	     contentBase: './dist'
	}
```

​	在package.json中加入`"start": "webpack-dev-server --open"`后，可直接以npm run start运行

![](C:\Users\Administrator\Desktop\Web\Webpack\dev-server.png)

#### webpack插件

​	以clean-webpack-plugin，html-webpack-plugin为例

`npm install --save-dev html-webpack-plugin clean-webpack-plugin`

​	在webpack.config.js中引入模块并配置

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
--------------------------------------------------------
plugins:[
		new HtmlWebpackPlugin({template: './index.html'}),
		new CleanWebpackPlugin(['dist'])
	]
```

