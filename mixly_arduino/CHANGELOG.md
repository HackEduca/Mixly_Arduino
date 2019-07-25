#### 更新日志

##### version:0.0.1 2018-07-15
* Mixly 添加esp8266硬件开发库，可以通过mixly代码模式给esp8266编写程序，完成初始测试工作
* Mixly 中增加Blynk中文库。

##### version:0.0.2
* Mixly添加blynk服务器信息模块，完成物联网图形化编程第一步。
* 修改Blynk中文库示例，汉化，降低难度。

##### version：0.0.3
* blynk LED组件
* Blynk 定时器、发送数据到app，从app接收数据等模块

##### version：0.0.4
* 新增blynk桥接模块，桥接授权码，桥接数字、模拟、虚拟管脚
* Blynk RTC组件
* 翻译中文字段到英文

##### version：0.0.5 2018-08-01
* 修复从app获取数据，定时器等模块，使其成为独立模块。
* 新增blynk音乐播放组件
* 新增mixly GD5800 MP3模块

##### version：0.0.6 2018-08-17
* Mixly中添加通知模块，对Blynk app notification对应。
* sample中新增示例，提高易用性。
* 修复部分小bugs

##### version：0.0.7 2018-09-22
* 新增一键配网功能，并增加一键配网使用指南二维码。
* 新增USB连接模式，让UNO连上物联网。
* 新增扫码学习模块，通过二维码引导师生学习查找相关资料。
* 同步Mixly官方更新内容，新增代码模式的主题色。

##### version：0.1.0 2018-10-15
* 更新arduino版本到1.8.7
* 更新esp8266到2.4.2
* 更新blynk库到0.5.9
* 新增终端组件、时间输入组件（简单）,视频流，光线传感器，重力传感器，加速度传感器
* 更换各组件的图标，与blynk app一致
* 修复iot版本中arduino类硬件无法重复编译的问题。

##### version:0.1.1 2018-10-20
* 修复MAX7219缺少库问题
* 添加TM1637清屏功能
* 默认服务器地址为国内服务器地址

##### version:0.1.2 2018-10-30
* 修复IIC点阵屏幕LED_ON,LED_OFF丢失定义的问题
* 修改蜂鸣器相关函数，不再使用含有定时器的蜂鸣器函数
* 更新u8g2库、esp8266 Remote库
* 修正adxl345库，解决无法编译345的问题
* 显示类别中独立IIC 点阵和MAX7219点阵。

##### version:0.1.3 2018-11-08
* 修复从App获取数据模块无法删除的问题
* 添加范例程序，路径：Mixly_For_IoT\sample
* 删除OLED库中的显示字符串模块

##### version:0.1.4 2018-11-20
* 解决无法导入其他库的问题
* 统一arduino库路径
* 修复blynk定时器、发送、获取等模块必须初始化之后的问题
* 升级esp32库

##### version:0.1.5 2018-11-20
* 更新esp8266库为2.5.0beta2
* 更新esp32库为1.0.1 
* 更新mixly到最新0.999版本
* 新增Python编程，新增掌控板

##### version:0.1.6 2019-01-07
* 更新BlynkLib.py支持掌控連接Blynk國內服務器
* 更新esp32 arduino index 为后期做准备
* 新增esp8266 index，独立esp8266，blynk只能在esp8266中使用


##### version:0.1.7 2019-01-07
* 修复UNO等开发板二次上传失败的问题
* 整理文件，减小与mixly官方库的差异
* 增加syncVirtual、BLYNK_CONNECTED BLYNK_APP_CONNECTED BLYNK_APP_DISCONNECTED 
* 修改factory自定义块
* 增加Bylnk定时器选择，共16个

##### version:0.2.0 2019-02-15
* 更新blynk-arduino库到0.6.0
* 更新BlynkLib.py库到0.2.0
* 更新u8g2库到2.25.10
* ESP8266视图新增高级视图
* 精简ESP8266 普通视图，移除部分使用频率低的功能。

##### version:0.2.1 2019-02-15
* esp32 arduino 新增蓝牙串口连接
* 支持多个DHT11

##### version:0.2.2 2019-02-28
* esp32 arduino新增OLED
* 修复mixly 代码视图中代码无法复制的问题
* 删除Mixly_For_IoT\arduino-1.8.8\libraries目录，避免出现问题
* 解决Blynk中 硬件已连接 模块与时间同步模块，桥接模块的冲突问题。

##### version:0.2.3 2019-03-02
* esp32 arduino新增Blynk
* 硬件定时器4个
* 触摸中断
* 管脚中断
* 支持掌控板，Mixgo,ESP32等设备连入Blynk
* 掌控板上传程序时要同时按住A B

##### version:0.2.4 2019-03-10
* esp32 arduino 
* 更新mixly官方版本的OLED模块，普通视图中只保留简单的文字显示
* ESP32 蜂鸣器函数
* ESP32 软串口
* ESP32 双核
* 精简ESP32的库文件，与arduino重复部分只保留arduino部分，防止后期冲突
* 更新mixly官方版本的RGB库
* esp32 arduino通讯类增加蓝牙
* 更新库，将mixly原版的库加入到iot中，防止缺少库的问题出现。


##### version:0.2.5 2019-03-13
* 修复一些已知的问题
* 增加一些范例程序
* ESP32增加Mixgo分类，并增加点阵显示模块

##### version:0.2.6 2019-03-13
* 增加一键更新.bat
* 独立arduino MixGo页面，完善MixGo传感器
* 独立arduino Handbit页面，未完善传感器
* 调试esp32 下的blynk，独立esp8266和esp32 的blynk
* 解决部分代码翻译时顺序错误的问题

##### version:0.2.7 2019-04-04
* 更新esp32 到1.0.1
* 更新arduino1.8.8到1.8.9
* 调整blynk库，给arduino也增加了blynk功能
* Blynk桥接支持多个设备

##### version:0.999 2019-04-12
* Mixly_For_IoT完全并入Mixly官方版本，以后都跟官方版一起发布

##### version:0.999 2019-04-12
* 调整OLED 库，减少字模占用内存。


##### 0.999 2019-04-25
* 修复if else 模块错误
* 增加arduino handbit高级试图
* 更新esp32库到1.0.2

##### 0.999 2019-05-05
* handbit mixgo python 高级试图新增blynk物联网

##### 0.999 2019-06-06
* 修复icon不匹配问题
* 整合max7219、HT16K33点阵屏幕块
* mixpy 高级视图中增加百度人工智能

##### 0.999 2019-06-20
* 增加MQTT协议模块
* ESP8266 ESP32增加连接wifi模块
* 修复baidu Ai
* 修复上一版本语言包问题
* 数组类型增加String类
* 输入/输出 控制 数字 类别模块 右击 帮助功能
* 修复其他用户提交的问题


##### 1.0 2019-06-30
* 增加简单定时器模块
* 增加 旋转编码器 模块
* 修复OLED中坐标值不能使用计算式和变量的问题
* 点阵屏幕旋转模块增加设置屏幕序号
* 删除多余的msg字段
* 调整esp8266 esp32 相关模块识别板卡规则
* 整理block/\*.js 文件中的换行符
* 删除mixgo预设的音乐和图形

##### 1.0 2019-07-20
* esp8266 blynk 类别新增 一键配网AP 模式，Blynk连接状态，blynk LCD组件
* mixpy 新增数据结构类别
* 新增 创建二维数组模块，二维数组赋值，获取二维数组模块
* ESP8266 新增NTP 时间服务器
* mixpy新增网页类别
* 修复部分已知bug

##### 1.0 2019-07-30
* 高级试图新增 多功能按键模块，只是一个按键检测单击、双击、长按开始、长按中、长按结束
* 修改ESP32 配置，增加程序存储空间到3MB
* 新增BME280 温度 气压传感器