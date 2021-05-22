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

#### 