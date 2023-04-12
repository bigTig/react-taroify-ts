## react18-taroify-ts

### 一、介绍 📖

🚀🚀🚀 react18-taroify-ts， 基于 React18.2.0、TypeScript、Taroify 开源的一套开放式跨端跨框架解决方案，开箱即用。

### 二、Git 仓库地址 (欢迎 Star⭐)

- [GitHub：仓库地址](https://github.com/bigTig/react-taroify-ts.git)

### 三、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：React18、React-Hooks、TypeScript、
- 🚀 整个项目集成了 TypeScript 🤣
- 🚀 使用 Taroify 轻量、可靠的小程序端 Taro React UI 组件库 🤣
- 🚀 使用 TypeScript 对 Taro.request 整个二次封装 （全局错误拦截、常用请求封装）
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 四、安装使用步骤 📑

- **Clone：**

```text
# GitHub
git clone https://github.com/bigTig/react-taroify-ts.git
```

- **Install：**

```text
yarn
```

- **Run：小程序开发**

```text
yarn dev:weapp
```

- **Lint：**

```text
# eslint 检测代码
yarn lint:eslint

# prettier 格式化代码
yarn lint:prettier

# stylelint 格式化样式
yarn lint:less
```

- **commit：**

```text
# 提交代码（会自动执行 lint:lint-staged 命令）
git commit
```

### 五、文件资源目录 📚

```text
react18-taroify-ts
├─ .husky                 # 添加git hooks
├─ .vscode                # vscode推荐配置
├─ config                 # 项目打包配置
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ core                # 核心库
│  ├─ hooks               # 常用 Hooks
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ pages               # 项目所有页面
│  ├─ app.less            # 全局样式处理
│  ├─ app.config.ts       # 小程序配置
│  └─ app.tsx             # 入口文件
├─ .cz-config.js          # cz-git 规范提交信息
├─ .editorconfig          # 编辑器配置（格式化）
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ stylelint.config.js    # stylelint 样式格式化配置
├─ babel.config.js        # babel 转换配置
├─ commitlint.config.js   # git 提交规范配置
├─ global.d.ts            # 全局类型
├─ LICENSE                # 开源协议文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ project.config.json    # 小程序配置json
├─ project.tt.json        # 小程序配置json
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
```

### 六、分支管理

> Gitflow 分支规范：支持 master、develop、feature/_、 release/_、hotfix/\* 分支

#### 6.1 分支类型

| 分支类型   | 分支名匹配规则 | 描述                                        |
| ---------- | -------------- | ------------------------------------------- |
| 主干分支   | master         | 与仓库设置 > 分支设置中的默认分支保持一致。 |
| 开发分支   | develop        | 平时开发用的主分支，永远是功能最全最新      |
| 功能分支   | feature/\_     | 一般一个事项卡对应一个功能分支              |
| 发布分支   | release/\_     | 一般一次新版本的发布对应一个发布分支        |
| 热修复分支 | hotfix/\*      | 从主干分支拉出，用于线上版本的 Bug 修复     |

#### 6.2 合并方向

> 规范仓库分支间的合并方向，只允许创建列表中规定方向的合并请求，列表为空则不会对仓库中的合并请求方向做限制。

| 源分支     | 目标分支 | 图示              |
| ---------- | -------- | ----------------- |
| 发布分支   | 主干分支 | release/\*master  |
| 热修复分支 | 主干分支 | hotfix/\*master   |
| 功能分支   | 开发分支 | feature/\*develop |
| 发布分支   | 开发分支 | release/\*develop |
| 热修复分支 | 开发分支 | hotfix/\*develop  |

### 七、项目截图预览

### 八、捐赠 🍵

> **如果你正在使用这个项目或者喜欢这个项目的，可以通过以下方式支持我**

- **Star、Fork、Watch** 一键三连 🚀🚀
