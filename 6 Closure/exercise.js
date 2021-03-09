/*for (var i = 0; i < 10; i++) {
    setTimeout( () => console.log(i), 1000 * i)
}*/

//the console prints '10' ten times every second, because of 'var' usage (var contains function scope), which means following:
// i=0 f(c:i(10))
// i=1 f(c:i(10)) 
// i=2 f(c:i(10)) etc...
//and because of the function scope, it does not create a new variable, it just changes the variable's 'i' value

/*for (let i = 0; i < 10; i++) {
    setTimeout( () => console.log(i), 1000 * i)
}*/

//the console prints 0-9 every second thanks to 'let' variable
// i=0 f(c:i(0))
// i=1 f(c:i(1))
// i=2 f(c:i(2)) etc...