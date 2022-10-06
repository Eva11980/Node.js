//匯出
export default class Person {
    gender = 'female';
    //Personu 變數 
    constructor(name = 'noname', age = 0) {
        this.name = name;
        this.age = age;
    }
    toJOSON() {
        const { name, age, gender } = this;
        return { name, age, gender: 'male' };
    }
    toString() {
        return JSON.stringify(this);
    }
}

//做定義
const p1 = new Person('Davide', 25);
console.log(p1 + '');

//不可以用  let 或是宣告  一開始使用設定值