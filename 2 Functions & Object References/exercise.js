function clone(obj) {
    let result = {};
    for (let k in obj) {
        result[k] = obj[k];
    }
    return result;
};

const obj1 = { a: 1 };
const copyObj1 = clone(obj1);
copyObj1.a = 5;
console.log(obj1.a === copyObj1.a);
// false: even though copyObj1 was successfully cloned, the value of its key 'a' was then changed to 5


const obj2 = { a: 1, b: { value: 1 } };
const copyObj2 = clone(obj2);
copyObj2.b.value = 5;
console.log(obj2.b.value === copyObj2.b.value);
// true: obj2 and copyObj2 share the same reference to 'b'