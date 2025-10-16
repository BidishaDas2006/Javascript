//for-of loop 
 /*let str="tomandjerry";
let size=0;

for (let element of str) {
   
    console.log("element = ", element);
    size++;
    
}
console.log("the size of the string is ",size);*/



//for -in loop

/*let student={
    age:20,
    name:"Bidisha",
    isPass:true,
    cgpa:8.8,



};
for(let key in student){
    console.log("key= ",key,"value= ",student[key]);
}*/
//Q1
/*for(let i=0;i<=100;i++){
    if(i%2!==0){
        console.log("odd= ",i);
    }

}*/

//Q2
/*
let gameNumber=60;

let user=prompt("enter the game number:");

while(user!=gameNumber){
   user= prompt(" you entered the  wrong game number:");
}
console.log("Done.you've guessed the correct number");*/
/*
let headings = document.getElementsByClassName("Heading");
console.dir(headings);

let buttons =  document.querySelectorAll("button");
console.dir(buttons);*/

let divs =document.querySelectorAll(".Box");
console.dir(divs);
divs[0].innerText = divs[0].innerText + "one";
