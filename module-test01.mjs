//匯入
//有default  Person 不需要{}
import Person , { a , b } from './person.mjs'
const p2 = new Person('Flora',26);

console.log(p2.toString());
console.log({ a , b });
