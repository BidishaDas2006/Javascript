//template literal
 /*let obj={
    cost:10,
    name:"pen",
};

let object=`the cost of the ${obj.name} is ${obj.cost} rupees`

console.log(object);*/

/*let str="012345678";
console.log(str.slice(1,7));*/

/*
let fullName=prompt("Enter your full name: ");
let length=fullName.length;
let username="@"+fullName+length;
console.log(username);*/

//array
/*let cities=["delhi","bombay","kolkata","pune","hydearbad"];
for(let city of cities){
    console.log(city.toUpperCase());
}*/
 //question 1
/*let marks=[85,97,44,37,76,60];
let total = marks.length;
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];

}
let average=sum/total;
console.log("the average marks of the students is= ",average);*/


//question 2
/*
let prices=[250,645,300,900,50];
  for(let i=0;i<prices.length;i++){
     let offer=prices[i]/10;
    prices[i]=prices[i]-offer;
  
  console.log(prices[i]);}*/

  //array methods
/*
  let foods=["apple","banana","strawberry","mango","pinedapple"];
  let chinese=["choemein","chilichicken","friedrice"];
  let newfood=foods.concat(chinese);


  console.log(foods);
  console.log(newfood);
  let poped=newfood.shift();
  console.log("deleted= ",poped);*/

  let companies=["Bloomerg","Microsoft","Uber","Google","IBM","Netflix"];
  console.log(companies);
 
  console.log(companies.splice(2,0,"Ola"));
  console.log(companies.push("Amazon"));
