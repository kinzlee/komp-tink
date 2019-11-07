//in es6 argument object is no longer in bound with the arrow function

const multiplication =(x, y) => {
    //console.log(arguments);
    return x * y;
}
console.log(multiplication(5, 9, 234));

//in es6 the this keyword is no longer boundd

const user = {
    name:'nwoga kingsley',
    cities:['lagos', 'enugu', 'umuahia'],
    printCitiesLived(){
        console.log(this.name);
        console.log(this.cities);

     return this.cities.map((place) => (this.name + ' lived in ' + place));

    }
};
console.log(user.printCitiesLived());

// challenge

const multiplier = {
    numbers : [2, 3, 4],
    multiplyBy : 5,
    multiply() {
        return this.numbers.map((ans) => (this.multiplyBy * ans)); 
    }
};
console.log(multiplier.multiply());