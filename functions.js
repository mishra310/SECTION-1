// defining the function

function adddnums(a,b){
 c= a+b;

console.log(c);

}

//calling the function 
adddnums(25,55);
//console.log(c);

const getAvg=function(m1,m2,m3){
    console.log(m1, m2, m3);
    let avg=(m1+m2+m3)/3;

    console.log(avg);
}
getAvg(25,55);

const prodNums = (a,b) => {
    let p = a*b;

    
     console.log(p);
    return p;
}

let res = prodNums(532,235);

console.log(res);
