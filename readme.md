#### 5/20
- 接着
- 执行 `yarn android` 或者 `yarn react-native run-android`
1. 启动Metro服务: 对 js 代码进行实时打包处理（类似 webpack）
2. 应用自动安装到本机android设备上并开始运行


#### 5/21
- 将代码拉到笔记本上，
- 继续查看官方文档

#### 5/22
- 在设备上运行（android 和 window设备）
- android
1. 开启设备 usb 调试
> 打开usb才能安装开发版本的app，默认只能从应用商店安装
2. 连接设备
> `adb devices`
> 控制台打印右边那列： 看到device说明你的设备已经被正确连接
3. 运行应用
> `npx react-native run-android`
> > `If you get a "bridge configuration isn't available" error, see Using adb reverse.`
> > 提示：你还可以运行npx react-native run-android --variant=release来安装 release 版的应用。当然你需要先配置好签名，且此时无法再开启开发者菜单。注意在 debug 和 release 版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。
- 从设备上访问开发服务器
1. android 5.0以下需要操作（通过无线网链接）（5.0，15年的拉吧）
- 接下来快速刷新（应该就是热更新吧）（上面的还没有实操）

#### 5/23
- 快速刷新
> 就是react的快速刷新机制（热更新）
1. 编辑组件（刷新当前组件）
2. 编辑非组件（刷新关联的所有组件，文件）
3. 编辑非组件并且，没有被组件树引用， （完全刷新）
- 快速刷新（本地的 state 被重置的情况）
1. class组件的state被重置（函数组件和hooks会保持）
2. 当前模块有其他导出（非react组件）
3. 返回一个class组件的情况
- 强制重置
> 在文件中添加`@refresh reset`

#### 5/25
- 试验:连接手机
1. **手机确认打开开发者模式,并且usb可以进行文件管理,但是无法通过`adb devices` 获取**

- 使用强制刷新
1. **使用失败,无法证实使用方法正确**
> > 已经添加了`// @refresh reset`

- 接下来进入*调试*
1. `To reload the app press "r"`(刷新)
2. `To open developer menu press "d"`(打开开发者菜单)
3. `LogBox`: 生产环境自动禁用
```
  import { LogBox } form 'react-native';
  LogBox.ignoreLogs(['warning: ...']); // Ignore log notification by message: 忽略指定的日志
  LogBox.ignoreAllLogs(); // Ignore all log notifications(忽略所有日志)
```
4. Chrome 开发者工具
> 开发者菜单中选择`Debug JS Remotely`,开启谷歌开发调试(最好是localhost不是ip)
5. `React Developer Tools`
> 安装`react-devtools`
> `npm install -g react -devools` 依赖electron
> 安装完成后在命令行中执行react-devtools即可启动此工具：`react-devtools`
> > 提示：如果你不想全局安装react-devtools，可以把它单独加入项目中。
> > 用npm install --save-dev react-devtools命令把react-devtools包安装到你的项目中，
> > 并在package.json的scripts中添加 "react-devtools": "react-devtools"，
> > 接着在项目根目录下运行npm run react-devtools命令即可。

- 看了调试,但是很多不是特别理解,也没有去做.

#### 5/26
- 使用第三方库
> 大部分是英文，不是很了解，如果需要使用第三方，自行百度
- 使用ts (已有项目添加ts)
1. 
```
yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer
# or for npm
npm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```
2. 根目录添加tsconfig.json
```
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```
3. 创建jest.config.js
```
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```
4. js改名ts（保留./index.js入口文件）
5. 类型检验`yarn tsc`

####　5/27
- 第三方库
> `npm install react-native-webview`
1. 尝试使用webview
2. 发现无法启动项目(回复到昨天,重新启动)
> > 报错内容:
`Unable to load script.Make sure you're either running a metro server（ run 'react-native start' ） or that your bundle 'index.android.bundle' is packaged correctly for release.`
***无法加载脚本。请确保您运行的是Metro服务器（运行'react-native start'）或者 您的软件包'index.android.bundle'已正确打包以供发布。***
3. `https://blog.csdn.net/qq_36228442/article/details/92799579`
> > 应该是版本问题
> > 直接使用方法2不行(可能是因为版本问题, 原文是`0.59.4`版本)
> > 方法1,本地无法把react-native作为可运行程序
> > > 在前面增加yarn 才能执行(但也报错了,微博并没有解释这种情况)
4. 过了
- `npx react-native info`,查看当前版本的信息
- 更新
1. `React Native CLI`
> > https://www.react-native.cn/docs/upgrading

#### 5/28
- 重新启动 发现并无异常
> 没有上次的报错
1. 尝试再次安装 `webview` 包
> `yarn add react-native-webview`
> 再次执行`yarn android` 出现上次报错
2. 关闭vs code,重新启动尝试
> 通过 `npm scripts` 快速启动成功(没有报错)
> 通过 `yarn android` 
> > 启动成功没有报错
> > 和启动没有太大关系看来就是需要vscode重新起动就好了
- 记性
> *index.android.bundle* 报错解决办法
> > 再次确认,遇到这样的问题,需要重新启动vscode就可以
> yarn 比 npm 要快一些
- 更新
2. 博客更新文章
> `https://www.jianshu.com/p/ba0d68380906`
> 通过官方推荐的升级助手
> 最好不要直接在package中修改版本号,引起很多问题
3. 手动升级
> 已有的项目进行升级,可以init一个新项目,把代码拷过去
> 可以省去很多第三方库的升级问题
- 设计-样式
> 当作react来写
1. 行内样式建议写法
> 使用`StyleSheet.creact`来写组件的样式
> 疑问: 引入样式文件不好么?
> 文档: react native 的样式都是写在js文件里面的
> 文档: 和css有区别,不能使用'background-color'要使用驼峰
2. 宽高
> 文档: 宽高都是无单位的
> 文档: `Dimensions` 这个对象用来获取设备宽高
3. 布局
> `Flexbox` 不同设备下的统一布局结构
> > flexbox直接使用,flex的常用属性
> > 默认值不同1:direction默认colum 2: flex只能赋值数字
> > 和flex布局相似,
> > 使用 Align Self
4. 图片
> 使用方法`require(./xxx.jpg)`
> 和flutter一样,会对 文件后缀进行区别引入
> > my-icon.ios.png和my-icon.android.png
**webview 还没用**

#### 5/29
- 图片
> Packager 会大保所有图片,并且根据屏幕精度提供对应资源
> iphone7会使用`check@2x.png`,7 plus会使用`check@3x.png`
> 如果没有图片恰好满足屏幕分辨率,则会自动选中最接近的一个图片
> 注意
1. `require(string)`括号里面的值必须是字符串,不能写表达式
2. 只有实际被require到的图片才会被打包
3. 如果需要动态缩放图片,必须设置width:null和height:null(不理解)
4. 网络图片需要设置宽高(加style)
5. base64数据,`使用'data:'格式来显示图片`,并且手动设置图片的尺寸
6. 背景图片组件`<ImageBackground source={...} style={{width: '100%', height: '100%'}}>`
*metro(即packager)配置文件*
*require可以引入的其他文件: 声音、视频或者文档文件*

#### 5/31
- 颜色
> React Native 支持 rgb() 和 rgba() 两种十六进制与函数方法
> 支持 hsl() 和 hsla() 函数方法：
> transparent
- 交互
***终于要开始写组件了***
1. `Button`
2. `Touchable`系列组件
> 特点: 样式固定(如果需要自定义使用: `TouchableOpacity`/`TouchableNativeFeedback`)
> 
> > `TouchableHighlight` 点击背景变色
> > `TouchableOpacity` 点击字体变色
> > `TouchableWithoutFeedback` 不显示任何视觉反馈
> > `TouchableNativeFeedback` 安卓下涟漪效果
> > `onLongPress` 属性上述组件都可以用

#### 6/1
- 导航
> React Navigation
> > 原生视图
> > 性能优秀
> > 动画方便
> 并没有说明用法,需要自己去官方查看
> > 地址: https://reactnavigation.org/
- 动画
1. 必要性: 流畅有意义的动画对于移动端用户体验非常重要.现实生活中的惯性,可以通过动画实现
2. 介绍: react native 提供了两个互补的系统
> 用于精细动画的Animated
> 全局动画的LayoutAnmated
3. 复制第一个示例,
** 报错: Delete `␍`**
> 表示 行尾换行符不正确`手动把CRLF换成LF`就好了
> > 使用`yarn run lint --fix`(或者全局替换:目前没有找到替换的方法,需要学习editorconfig)
> > 动画还差一点就实现了

#### 6/2
- 继续动画
1. 警告解除
> > **`useNativeDriver` is not supported **
> > 简单实现了渐变效果,
> > toValue设置最终值(Animated.Value(x),x为初始值),
> > duration为持续时间
> > Easing 它的作用是来设置我们要动画改变的value要以什么状态来改变
> > > 默认: easeInOut 曲线传达一个对象的逐渐加速到全速，最后逐渐减速到停止。