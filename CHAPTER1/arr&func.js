// // ARRAYS

let marks = [99,97,95,98,96];
console.log(marks);
console.log(marks.length);


// using for loop

let hero =["superman","batman","spederman","hulk"];
for(i=0;i<hero.length;i++){
    console.log(hero[i]);
}

//using for of loop

let heroes =["superman","hulk","spiderman"];
for(let hero of heroes){
    console.log(hero);
}


// practice question 1

let marks = [85,97,44,37,76,60];
let sum = 0;
for (let val of marks){
sum +=val;
}
 let avg = sum/marks.length;
console.log(`this is the average marks= ${avg}`);


// practice question 2
// using for of loop

let item = [250,645,300,900,50];
let i = 0; 
for (let val of item){ 
    console.log(`value of the index ${i} =${val}`);
    let offer = val /10;
    item[i] = item[i]-offer;
    console.log(`the value after offer is ${i} = ${item[i]}`);
    i++;
}


// using for loop

let item = [250,645,300,900,50];
for ( let i=0;i<item.length;i++){
    let offer =item [i]/10;
    item[i] -= offer;
}
console.log(item);


// array methods

let foodItem = ["apple","banana","litchi","tomato"];
console.log(foodItem);
foodItem.pop();
console.log(foodItem);

// splice arrray

let arr = [1,2,3,4,5,6,7];
arr.splice(4);
console.log(arr);


//practice question

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.push("amazon");

// FUNCTION 
//function defination 

function myFunction(msg,n){
    console.log(msg,n);
}
myFunction("i love js"," 100 time more ");


 //funtion to claculate sum of two number 

function sum(a , b){
    s = a+b;
    console.log("before return");
    return s ;   
}
let val = sum (3,4);
console.log(val); 


// Arrow function
// sum function

function sum(a,b){
return a+b;
}
const arrowSum = (a,b) => {
    console.log(a+b);
};*/

//function mul (a,b){
    return a*b;
}
const arrowmul=(a,b) => {
    console.log(a*b);
} 

//practice 1

    function countVowels(str){
        let count = 0;
        for (const char of str){
            if(
                char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u" 
            ){
                count ++;
            }
        }
        console.log(count);
    }

//function countVowels(str){
    let count = 0;
    for (const char of str){
        if(
            char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u" 
        ){
            count ++;
        }
    }
    return count;
}
const countVow= (str) =>{
    let count = 0;
    for (const char of str){
        if(
            char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u" 
        ){
            count ++;
        }
    }
    return count ;

}

// for each 

let arr = [1,2,3,4];
arr.forEach (function printval (val){
    console.log (val);
});

for each using arrow 

let arr = [1,2,3,4,5,];
arr.forEach((val) =>{
    console.log(val);
})


// three parameter can be used in for each 
//value,index and arrray 

let arr = ["pune","mumbai","delhi"];
arr.forEach((val,indx,arr) =>{
    console.log(val.toUpperCase(),indx,arr);

})

//practice question 

for a given array of number print the square of each value using the 
for each loop 

let arr =[1,2,3,4,5];
arr.forEach((num)=>{
    console.log(num*num);
});

//maps 

let arr = [1,2,3,4];
arr.map((val) =>{
    console.log(val);

})

//*2 in maps 
let num = [1,3,5,7,9];
let nums = num.map((val)=>{
    return (val *2) ;
});
console.log(nums);


//filter method 

let arr =[1,2,3,4,5,6,7];
let evenArr= arr.filter((val)=>{
   return (val %2===0);
})
console.log(evenArr);

//reduce method 

let arr = [1,2,3,4];
const newarr = arr.reduce ((pre,curr)=>{
    return pre + curr;
});
console.log(newarr);

// to find the largest number in an array using reduce method 

let arr = [5,6,2,3,8,20,4];
const output = arr.reduce((prev,curr)=>{
    return prev < curr ? prev : curr; // if prev > curr ? then return prev : or else return curr
})
console.log(output);

// practice question 
//#1
let arr = [90,21,88,76,94,95];
let output = arr.filter((val)=>{
    return (val>90);
});
console.log(output);

//#2

let n = prompt(" enter a number ");
let arr = [];
for (i=1;i<=n;i++){
    arr[i-1]=i;
}console.log(arr); 

let sum = arr.reduce((res,curr)=>{
    return res + curr;
});
console.log(sum);

let mul = arr.reduce((res,curr)=>{
    return res * curr;
}); 
console.log(mul);
