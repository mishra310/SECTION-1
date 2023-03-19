for(let i=0; i<10; i++){
    console.log(i);
}

//WAP to print all the numbers either divisible by 7 or 13 from 1 to 100
/// and &&
// or  ||
// not !
for(let i =1; i<=100; i++){

    if(i%7==0 ||i%13==0){
        console.log(i);
    }
}
//-------fibonacci series-----------

let [a,b] = [0,1];
console.log(a);
console.log(b);

for (let i=0;i<=10;i++){
    let c=a+b;
    console.log(c);
    [a,b]=[b,c];
}
//WAP to find factorial of a number 
console.log('factorial');

let num=6;
let f=1;


for (let i=2;i<=num;i++){
    console.log(f);
    f=f*i
    }
    console.log(f);
console.log('-------prime number----------');

let mynum = 7;
let prime = true;

for(let i=2; i<mynum/2; i++)
{
    if(mynum % i ==0){
        prime=false;
        console.log('not prime');
        break;
    }
}

if(prime) console.log('prime');


//WAP to revrse a number

console.log('---------reverse number----------');

let n1 = 34622;
let reverse = 0;

