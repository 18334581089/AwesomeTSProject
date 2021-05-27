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