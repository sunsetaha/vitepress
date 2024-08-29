# 数据基础结构

## JavaScript 数据类型

### **原始数据类型**:
- **Undefined**: 未赋值的变量默认的数据类型。
- **Null**: 表示无或空的对象。
- **Boolean**: 逻辑类型，只有两个值 `true` 或 `false`。
- **Number**: 表示数值，包括整数和小数。
- **BigInt**: 表示大于 `2^53 - 1` 的整数。
- **String**: 文本数据，由字符组成的序列。
- **Symbol**: 唯一的、不可变的原始数据类型，通常用于作为对象属性的键。

### **引用数据类型**:
- **Object**: 包括普通对象、数组、函数、日期对象等。
- **Array**: 特殊的对象，用于存储有序的数据集合。
- **Function**: 表示可执行的代码块。

### **特殊值**:
- **NaN**: 非数值，如 `0/0` 的结果。
- **Infinity** 或 **-Infinity**: 表示无限大或无限小的数值。

## 类型判断方法
- typeof 操作符（常用）：返回除了 null 之外的所有原始数据类型的字符串表示。
> 需要注意的是，`typeof`对于数组、对象以及null的判断结果都是"object"，而对于函数的判断结果是"function"。
```js
let num = 42; // Number
let str = "Hello"; // String
let isTrue = true; // Boolean
let undef; // Undefined
let nothing = null; // Null
let big = 1234567890123456789012345678901234567890n; // BigInt
let sym = Symbol('mySymbol'); // Symbol

let obj = {}; // Object
let arr = [1, 2, 3]; // Array
let func = function() {}; // Function

console.log(typeof num); // "number"
console.log(typeof isTrue); // "boolean"
console.log(typeof str); // "string"
console.log(typeof undef); // "undefined"
console.log(typeof nothing); // "object" (null is an object)
console.log(typeof big); // "bigint"
console.log(typeof sym); // "symbol"

console.log(typeof obj); // "object"
console.log(typeof arr); // "object" (arrays are objects in JavaScript)
console.log(typeof func); // "function"
```

- instanceof 操作符：用于检测构造函数的 prototype 属性是否出现在对象的原型链上。
>需要注意的是，`instanceof`操作符只能用于判断对象的类型，不能用于判断原始值的类型。
```js
const arr = [];
arr instanceof Array; // true

const obj = {};
obj instanceof Object; // true

const func = function() {};
func instanceof Function; // true
```

- Array.isArray(arr)：用于确定一个值是否是一个数组。
- Object.prototype.toString.call(arg)：方法返回的是一个字符串,其中包含了具体的类型信息。

## 类型转换
### 转换成Number
- **parseInt(str)**：将字符串转换为整数，并返回第一个有效的整数。
- **parseFloat(str)**：将字符串转换为浮点数，并返回第一个有效的浮点数。
- **Number(value)**：将任意值转换为数字。
- **+value**：一元操作符，将任意值转换为数字。
- **Number.parseInt(str)**：将字符串转换为整数，并返回第一个有效的整数。
- **Number.parseFloat(str)**：将字符串转换为浮点数，并返回第一个有效的浮点数。
- **valueOf(str)**：返回一个对象的原始值。
 
### 转化成字符串
> 任意对象转化为字符串都是[object Object]；null NaN undefined true false 转换成字符串类型，都是原样转换；
- **任意值+字符串**：拼接字符串，返回字符串；一般使用 `+ ''` 快速转换成字符串
- **toString(value)**：将任意值转换为字符串。
- **String(value)**：将任意值转换为字符串。

### Boolean转换
- **Boolean(value)**：将任意值转换为布尔值。
- **!!value**：将任意值转换为布尔值。

**会返回false 的值: `0`、`""`、`null`、`undefined`、`NaN`、`false`**

**其他值（包括对象、数组、函数等）在转换为布尔值时都会返回 true**

## 隐式转换
- 相同类型比较
```js
null == null; // true
+0 == -0; // true
{} == {}; // false
```
- null 和 undefined 的比较
```js
null == undefined; // true
```
- NaN
```js
NaN == NaN; // false
```
- 字符串和数字的比较
```js
'5' == 5;   // true，将字符串 '5' 转换为数字 5 进行比较
```
- 对象与原始类型的比较
>如果其中一个是对象，另一个是原始类型， 将对象通过 ToPrimitive 转换为原始类型，然后进行比较。 (即如果原始类型为字符串，则对象转换成字符串再比较； 如果原始类为布尔值，则将布尔值与对象都转换成数字进行比较； 如果原始类为数字，则将对象转换成数字进行比较。)

```js
{} == 1;  //false
// 首先{}先被ToPrimitive转换成字符串"[object Object]"，
// 就相当于直接判断 "[object Object]" == 1，
// 字符串与数字的比较中，又要将字符串转换成数字，
// "[object Object]"转换成数字为 NaN，
// 而NaN 与任何值比较都为 false。
```

