# 数值转换工具

大写中文转数字，数字转中文

## 安装
`npm install @myc/number`

## 用法
使用require
```
const { numToWord, wordToNum } = require('@myc/number');
```
使用import
```
import { numToWord, wordToNum } from '@myc/number';
```
## 例子
```js
import { numToWord, wordToNum } from '@myc/number';

const result = numToWord(1) // 壹
const result = wordToNum('玖') // 9
```
## API
numToWord(number)

wordToNum(string)
