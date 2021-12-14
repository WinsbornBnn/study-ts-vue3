//! 1、 我的第一个typescript程序
let hello: any = 'Hello '
hello += 'World!'
console.log(hello)
//! 2、TypeScript 基础类型
/**
 *1、任意类型： any 可以赋以任何的值
 *2、数字类型：number
 *3、字符串类型：string
 *4、布尔类型：Boolean
 *5、数组类型：[]
 在元素类型后面加上[]
 let arr: number[] = [1,2]
 或者使用数组泛型
 let arr Array<number> = [1,2]
 *6、元组：用来表示一直元素数量和类型的数组，各元素的类型不必相同，但对应位置的类型必须相同
 let x: [string,number]
 x = ['age',12]
 *7、枚举：enum
 用于定义数值集合
 enum Color { red,blue,green }
 let c: Color = Color.green // 2
 *7、void 用于标识方法返回值的类型，表示该方法没有返回值。
 *8、null表示对象值缺失，undefined用于初始化变量为一个未定义的值，never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
 */
const getColor = () => {
  return 0
}
enum list {
  a = getColor(),
  b = 2,
  c
}
console.log(list.a)
console.log(list.b)
console.log(list.c)
//! TypeScript 变量声明
// var [变量名] : [类型] = 值
let name
console.log(name)

export {
  hello
}
