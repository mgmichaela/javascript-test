var a = 0;

function counter() {
    return () => {
        return a++
    }
}

var c1 = counter();

console.log(c1());
console.log(c1());
console.log(c1());