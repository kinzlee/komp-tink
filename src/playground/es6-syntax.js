var nameVar = 'kingsley';
 var nameVar = 'tunik';
console.log('nameVar', nameVar);

let nameLet = 'nido';
 nameLet = 'kinzlee';
console.log('nameLet', nameLet);

const nameConst = 'mike';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'bullet';
    return petName;
}

const petName = getPetName();
console.log(petName); 

const fullName = 'Nwoga Kingsley';
let firstName;
if(fullName) {
 firstName = fullName.split(' ')[0];
    console.log(firstName);
}

    console.log(firstName);