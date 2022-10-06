class Person {
    gender = 'female';
    constructor(name = 'noname', age = 0) {
        this.name = name;
        this.age = age;
    }
    toJSON() {
        const { name, age, gender } = this;
        return { name, age, gender };
    }
    toString() {
        return JSON.stringify(this);
    }
}

const a = 10;
const f = n => n * n;
//同時匯出
module.exports = {
    Person, a, f
};
