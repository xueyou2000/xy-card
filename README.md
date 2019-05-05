| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-card.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-card.svg?style=flat-square)

[![xy-card](https://nodei.co/npm/xy-card.png)](https://npmjs.org/package/xy-card)

# xy-card

卡片组件

## 安装

```bash
# yarn
yarn add xy-card xy-skeleton xy-grid utils-hooks xy-grid classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Card, CardMeta } from "xy-card";
ReactDOM.render(
    <Card title="卡片标题">
        <CardMeta title="Europe Street beat">www.instagram.com</CardMeta>
    </Card>,
    container
);
```

## API

### Card

| 属性      | 说明                                   | 类型                | 默认值 |
| --------- | -------------------------------------- | ------------------- | ------ |
| children  | 卡片内容                               | React.ReactNode     | -      |
| actions   | 卡片操作按钮, 在卡片底部的操作按钮集合 | React.ReactNode[]   | -      |
| bordered  | 是否有边框                             | boolean             | true   |
| cover     | 卡片封面                               | React.ReactNode     | -      |
| loading   | 是否加载中                             | boolean             | false  |
| title     | 卡片标题                               | React.ReactNode     | -      |
| type      | 卡片类型, 可用值"inner"或不设          | string              | -      |
| hoverable | 鼠标移入悬浮                           | boolean             | false  |
| bodyStyle | 卡片内容样式                           | React.CSSProperties | 无     |

### CardMeta

| 属性     | 说明     | 类型            | 默认值 |
| -------- | -------- | --------------- | ------ |
| avatar   | 头像     | React.ReactNode | -      |
| children | 描述内容 | React.ReactNode | -      |
| title    | 标题     | React.ReactNode | -      |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-card is released under the MIT license.
