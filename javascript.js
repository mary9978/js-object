//the first function check whether the key and value of each object is the same or not
function isEqual(obj1,obj2){
   return obj1.key0 === obj2.key0 && obj1.key1 === obj2.key1 && obj1.key2 === obj2.key2 && obj1.key3[0] === obj2.key3[0]
       && obj1.key3[1] === obj2.key3[1] && obj1.key3[2] === obj2.key3[2] && obj1.key4.name === obj2.key4.name;
}
const obj1= {
    key0 : false ,
    key1 : 'val1',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name: 'maryam'},
}
const obj2= {
    key0 : false ,
    key1 : 'val1',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name: 'maryam'},
}
console.log("output of isEqual function : ",isEqual(obj1,obj2));
//the function isSame check whether if two object address are the same or not
function isSame(obj3,obj4){
    return Object.is(obj3,obj4);
}
const obj3= {
    key0 : false ,
    key1 : 'val1',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name: 'maryam'},
}
let obj4 =obj3;
console.log("output of isSame function : ",isSame(obj3,obj4));
//***************************************************************************************
//the factory function print the food
function factoryFunction(food,comment,rate,myorder){
    addcomment(comment,food);
    return {
        name : food.name,
        type : food.type,
        price : food.price*order(myorder),
        deliverTime: food.deliverTime,
        rate:(food.rate+setRate(rate)/2),
        comments :food.comments,
        isReady: food.isReady
    }
}
function constructorFunction(food,comment,rate,myorder){
       addcomment(comment,food);
       return [
           this.name= food.name,
           this.type = food.type,
           this.price = food.price* order(myorder),
            this.deliverTime= food.deliverTime,
            this.rate=(food.rate+setRate(rate)/2),
           this.comments =food.comments,
           this.isReady= food.isReady,
       ]

}
function order(n){
    if (n%5 === 0) return 0.8;
    else return 1;
}
function addcomment(comment,food){
    food.comments.push(comment.text)
    // return comment;
}
function setRate(rate){
    return rate;
}
const comment= {
    author : 'maryam rezaei',
    data : '24/10/2021',
    rate: 5,
    text: 'this is the best pizza I have tried'
}
const food= {
    name : 'pizza',
    type : 'fast food',
    price : 80000,
    deliverTime: 40,
    rate:3,
    comments : ['very delicious','not satisfactory'],
    isReady: false
}
let rate=3.2;
myorder=25;
console.log("this is the output of factory function",factoryFunction(food,comment,rate,myorder))
console.log("this is the output of constructor function",constructorFunction(food,comment,rate,myorder))

