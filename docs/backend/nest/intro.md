# Nestjs

Nest (NestJS) 是一个用于构建高效、可扩展的 `Node.js 服务器端应用`的框架。它使用渐进式 JavaScript，构建并完全支持 TypeScript（但仍然允许开发者使用纯 JavaScript 进行编码）并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式反应式编程）的元素。

在幕后，Nest 使用强大的 `HTTP 服务器`框架，如 Express（默认），也可以选择配置为使用 Fastify！

Nest 在这些常见的 Node.js 框架（Express/Fastify）之上提供了一个抽象级别，但也直接向开发者公开了它们的 API。这使开发者可以自由使用可用于底层平台的无数第三方模块。

## 快速开始

> nodejs >= 16

```shell
# 安装
npm install -g @nestjs/cli

# 创建项目
nest new project-name

# 启动
cd project-name
npm run start
```

## 推荐目录结构

```shell
src/ #源码
├── common/ #公共模块
│   ├── decorators/ #通用装饰器
│   ├── filters/ #过滤器
│   ├── guards/ #守卫
│   ├── interceptors/ #拦截器
│   ├── middleware/ #中间件
│   └── pipes/ #管道
├── config/ #配置
├── database/ #数据库相关
├── modules/ #业务模块
├── constants/ #常量定义
│   └── common.constants.ts
├── utils/ #工具类
│   └── http.util.ts
├── app.controller.spec.ts #控制器的单元测试
├── app.controller.ts #具有单一路由的基本控制器
├── app.module.ts #应用的根模块
├── app.service.ts #具有单一方法的基本服务
└── main.ts #使用核心函数 NestFactory 创建 Nest 应用实例的应用入口文件
```

## `main.ts` 包含一个异步函数，它将引导我们的应用

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

NestFactory 公开了一些允许创建应用实例的静态方法。create() 方法返回一个应用对象，它实现了 INestApplication 接口。启动应用实例时，调用 listen() 方法，监听入站 HTTP 请求。
