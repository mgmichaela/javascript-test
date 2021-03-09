const obj1 = {
    c: 'c'
};

const obj2 = {
    a: 1,
    b: [1],
    c: obj1
};

const obj3 = {
    a: 1,
    b: [1],
    c: obj1
};

console.log(obj2 === obj3);
// false: obj2 does not equal obj3, they do not have the same reference, when it comes to objects, JavaScript compares references

console.log(obj2.a === obj3.a);
// true: for primitive types the actual value is compared, in this case 1 equals 1

console.log(obj2.b === obj3.b);
// false: arrays are objects, thus references are compared, these arrays have different references so they are not equal

console.log(obj2.c === obj3.c);
// true: obj2 and obj3 share the same reference to obj1