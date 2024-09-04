// //this
// // console.log(this);
// // const obj1={
// //     userName:"ABC",
// //     hello1:()=>{return [this, this.userName]}, 
// //     hello2:function(){return [this, this.userName]}, 
// // }

// // console.log(obj1);
// // console.log(obj1.userName);//ABC
// // console.log(obj1.hello1);//()=>{return [this,this.userName]}
// // console.log(obj1.hello1());//window,ud
// // console.log(obj1.hello2);//function(){return [this, this.userName]}
// // console.log(obj1.hello2());//obj1,ABC

// // const obj2={
// //     userName:"XYZ",
// //     hello3:obj1.hello2
// // }
// // console.log(obj2);
// // console.log(obj2.hello3());

// //call
// // const obj1={
// //     userName:"ABC", 
// //     hello2:function(para){return [this, this.userName,para]}, 
// // }


// // const obj2={
// //     userName:"XYZ",
// // }

// // const obj3={
// //     userName:"pqr",
// // }

// // console.log(obj1.hello2());
// // console.log(obj1.hello2.call(obj2,obj3));
// // console.log(obj1.hello2.apply(obj3));

// //apply
// // const obj1={
// //     userName:"ABC",
// //     hello1:()=>{return [this, this.userName]}, 
// //     hello2:function(){return [this, this.userName]}, 
// // }


// // const obj2={
// //     userName:"XYZ",
// //     hello3:obj1.hello2
// // }

// // console.log(obj1.hello2());
// // console.log(obj1.hello2.apply(obj2));

// //call vs apply

// // const obj1={
// //     userName:"ABC",
// //     hello2:function(param){return [this, this.userName,param]}, 
// // }


// // const obj2={
// //     userName:"XYZ",
// // }

// // console.log(obj1.hello2.call(obj2,20));
// // console.log(obj1.hello2.apply(obj2,20));

// //bind
// const obj1={
//     userName:"ABC",
//     hello2:function(a,b){return [this, this.userName,a+b]}, 
// }


// const obj2={
//     userName:"XYZ",
// }

// const greet=obj1.hello2.bind(obj2,558,828)
// console.log(greet());


// <--------------------------------------------------->

// let arr=[]
// console.log(arr);
// console.log(Array.prototype);
// console.log(arr.__proto__);
// console.log(Array.prototype.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(Array.prototype.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// let obj={}
// console.log(obj);
// console.log(Object.prototype);
// console.log(obj.__proto__);
// console.log(Object.prototype.__proto__);
// console.log(obj.__proto__.__proto__);

// function func(){}
// console.log(func);
// console.log(Function.prototype);
// console.log(func.__proto__);
// console.log(Function.prototype.__proto__);
// console.log(func.__proto__.__proto__);

let obj={
    useName:"ABC"
}
console.log(obj);
obj.place="XYZ"
console.log(obj);
// obj.func1=()=> 2
// console.log(obj);
// obj.obj3={
    // pinCode:560076
// }
// console.log(obj);



// Array prototype inheritance example 
// Array.prototype.even=(arr)=>arr.filter((ele)=>ele%2===0)
// let arr=[2,3,8,123,6,54,6,5,65,41,6541,64,]
// console.log(arr.even(arr));



