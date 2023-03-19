const movies = ['rrr','pk','run','kgf','365days','mard'];

//Indexing

console.log(movies[4]);
console.log(movies.indexOf('run'));

console.log(movies.at(-1));
console.log(movies.length);

//slicing
console.log(movies.slice(2,5));

//Adding elements

console.log([...movies,'barfi']);

console.log(['batman',...movies,'barfi']);