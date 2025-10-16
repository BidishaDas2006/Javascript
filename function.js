function sum(a,b){
    x=a+b;
    return x;
}

 let val=sum(5,5);
 console.log(val);

 //arrow function


 const arrowmul=(a,b)=>{
    console.log(a*b);
 }


function countVowel(str){
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;

        }
    }
    console.log(count);
}
let arr=[1,2,3,4,5];
arr.forEach(val){
    console.log(val*val);
}
//map method

let arr1=[1,2,3,4,5];
let newArr=arr1.map((val)=>{
    return val*3;
});
console.log(newArr);
//filter method

let arr2=[1,2,3,4,5,6,7,8,9,10];
let oddArr=arr2.filter((val)=>{
    return val%2 !== 0;
});
//reduce method

let arr3=[1,2,3,4,5,6,7,8,9,10];

const output=arr3.reduce((prev,curr)=>{
    return prev < curr ? prev : curr;
});
console.log(output);

//q1:

let marksofStudents=[90,87,85,43,96,97,100,20]

let toppers=marksofStudents.filter((val) => {
    return val > 90;
});
console.log(toppers);
//q2:

let n=prompt("Enter a number:");
let arr4=[];


 for(let i=1; i<=n; i++){
    arr[i-1]=i;


 };
 console.log(arr4);
 let sumoutput=arr4.reduce((res,curr)=>{
    return res + curr;
 });
 console.log(sumoutput);


 let muloutput=arr4.reduce((res,curr)=>{
    return res * curr;
 });
 console.log(muloutput);






