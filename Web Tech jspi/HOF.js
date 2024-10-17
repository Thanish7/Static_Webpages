let arr = [10,20,30,40,50]
// console.warn('Using Map Method');
// let add = arr.map((ele)=>{
//     return(ele)
// })
// console.log(add);

//using loop
console.warn('Using Loop Method');
let res = []
for (let index = 0; index < arr.length; index++) {
    res.push(arr[index]+5)
}
console.log(res);

let ar = [1,2,3,4,5,6,7,8,9,10]
console.log(ar);

let mul = ar.map((ele)=>{
    return(ele*ele)
})
console.log(mul)
let mul1 = []
for (let index = 0; index < ar.length; index++) {
    mul1.push(ar[index]*ar[index])
}

//Filter HOF
let arr1 = [10,15,20,25,30,35]
console.log(arr1);
let even = arr1.filter((ele)=>{
    return ele%2==0
})
console.log(even);
