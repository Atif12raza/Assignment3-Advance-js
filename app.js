const arrays =[
    42,
    true,
    "Hello, World!",
    {
        name:"Muhammad Atif Raza",
        age:14,
        isStudent:false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];
// Q1
// let element =arrays.map((e,i)=>{
//    const res = typeof e == 'string' ? e : typeof e == "object" ? JSON.stringify(e) : String(e) ;
//    return res;
// });
// console.log(element);
// Q2
// let element =arrays.filter((e,i)=>{
//     return typeof e == "number" ;
// });
// console.log(element);

// Q3
// let res= arrays.forEach((e,i)=>{
//     console.log(e);
// });
// Q4

// let element = arrays.reduce((a, b) => {
//     if (typeof b === 'number') {
//         return a + b;
//     }
//     return a;
// });

// console.log(element);



// Q5
// let Arr = arrays.find((e) => typeof e === 'boolean');

// console.log(Arr);

// Q6
// let index = arrays.findIndex(element => typeof element === 'object' && element !== null);
// console.log(index);


// Q7
// let Arr = arrays.some((e,i)=>{
//   return  typeof e === 'number'
// })
// console.log(Arr);

// Q8
// let string = arrays.every((e,i)=>{
//     return typeof e === 'string';
// });
// console.log(string);
