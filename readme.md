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