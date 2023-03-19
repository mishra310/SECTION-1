let user= { name : 'raju', email : 'raju@gmail.com' , password : '5464444'};

console.log(user.email);

console.log(user['name']);
// console.log(user['password']);

console.log(user);

user.email = 'raju@hotmail.com';

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

let smartphone = {
     brand : 'samsung',
     model : 's23 ultra',
     price : '78000',
     colour : 'white'
}
console.log(smartphone.colour)

smartphone.colour= ['white','black','blue'];

console.log(smartphone);


console.log(smartphone.colour[1]);

smartphone.colour.push('pink');


console.log(smartphone);