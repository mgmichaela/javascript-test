// First example:
var firstName = 'Agnarr';
var lastName = 'Oldenburg';

function fullName() {
    return this.firstName + ' ' + this.lastName;
}

/*The output here is 'undefined undefined', which means that the object that is being used is declared but not initialized or defined, 
 so when using 'this', it is trying to access the local scope.*/
console.log(fullName());


// Second example:
var sister = {
    firstName: 'Anna',
    lastName: 'Oldenburg',
    fullName: fullName
}

/*The output here is 'Anna Oldenburg', because the reference to 'fullName' inside 'sister' will be the same as the reference outside 'sister'. */
console.log(sister.fullName());


// Third example:
var oldSister = {
    firstName: 'Else',
    lastName: 'Oldenburg'
}

const oldSisterFullName = fullName.bind(oldSister);

/*The output here is 'Else Oldenburg', because 'bind' creates a new function
that will force the 'this' inside the function to be the parameter passed to bind().*/
console.log(oldSisterFullName());