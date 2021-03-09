function constantly(n) {
    return () => n;
}

const fn1 = constantly(1);
const fn2 = constantly(1);

console.log(fn1 === fn2);
// false: is not the same reference

console.log(fn1() === fn2());
// true: for numbers, values are compared, in this case 1 equals 1

