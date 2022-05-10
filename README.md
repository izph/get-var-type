# getVarType

这是一个非常简单的获取js变量类型的库，发布该库旨在学习如何运用webpack打包基础库，并发布到npm。

## 安装

```bash
npm install get-var-type -d
```

## 使用
```js
import getVarType from 'get-var-type';
```

## getVarType

```js
/**
 * value: 需要判断的变量类型的变量
 * return: 返回变量类型
 * 'number', 'string', 'boolean', 'object', 'array', 'symbol', 'regexp', 'date', 'function', 'null', 'undefined'等等
*/
getVarType(value)
```

