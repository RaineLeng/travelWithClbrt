# 名人一起旅行 App 原型

这是一个"名人一起旅行"的文化导览类 App 的高保真原型，基于HTML、Tailwind CSS和FontAwesome构建。

## 项目概述

"名人一起旅行"是一款文化导览类App，主要提供两大核心功能：
1. **跟着名人去旅行** - 基于兴趣定制长周期文化旅行计划
2. **名人带你逛景点** - 在景区现场体验名人语音讲解

App特点包括用户画像分析、行程规划、实时定位、AI语音互动、数字徽章、旅行记录和社交互动等功能。

## 原型界面

本原型包含以下主要界面：
- 登录/注册页面
- 用户画像设置
- 首页（两大核心功能入口）
- 个人中心（旅行记录、数字徽章、社交信息）
- 设置页面
- 旅行计划页面
- 现场讲解页面

## 如何使用

本原型提供两种浏览模式：

### 展示模式
在单一页面上显示所有App界面，方便设计评审和整体查看。
- 访问 `index.html` 查看所有页面的平铺展示

### 交互模式
模拟真实App使用体验，支持页面间导航、动效和交互。
- 访问 `app.html` 体验完整的用户旅程，如同使用真实App

### 选择器页面
- 访问 `start.html` 可以选择进入哪种模式

## 本地部署

有多种方式可以在本地部署本原型：

### 1. 使用提供的Node.js服务器

```bash
# 确保已安装Node.js
node server.js
```

然后访问 http://localhost:8080

### 2. 使用Python内置HTTP服务器

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

然后访问 http://localhost:8080

### 3. 使用Node.js的http-server

```bash
# 安装http-server
npm install -g http-server

# 运行服务器
http-server -p 8080
```

然后访问 http://localhost:8080

### 4. 使用PHP内置服务器

```bash
php -S localhost:8080
```

然后访问 http://localhost:8080

## 技术栈

- HTML5
- Tailwind CSS 2.2.19
- Font Awesome 6.4.0
- 原生JavaScript

## 适配设备

本原型按照 iPhone 15 Pro 尺寸设计（约 430px x 932px），采用圆角容器模拟真实设备外观。交互模式下更提供了逼真的设备模型。

## 交互特性

交互模式下支持以下特性：
- 页面间导航
- 实时状态栏时间显示
- 触摸反馈效果
- 语音播放模拟
- 位置服务模拟
- 通知系统模拟
- 过渡动画效果

## 后续开发

本原型可直接用于实际App的开发参考，设计遵循iOS/Android设计规范，UI元素现代化、界面圆角化、图文并茂，提升真实感。

## 注意事项

- 展示模式适合设计评审和概览
- 交互模式适合用户测试和体验
- 图片来源于Unsplash和占位符图片
- 实际开发中需要替换为真实API调用和数据交互 