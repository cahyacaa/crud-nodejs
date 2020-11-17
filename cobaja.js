

// let http =require("http");

const { func } = require("@hapi/joi");



// let commonResponse= function(res){
//     res.writeHead(200,{"COntent-Type": "text/html"});
//     res.write("Request Complete");
// }

// let handleApi= function(req,res){
//     if(req.method==='POST'){
//         commonResponse(res);
//         res.end();
//     }
// }

// let handleWeb=function (req,res) {
//     commonResponse(res)
//     res.end();
// }


// http.createServer(handleApi).listen(4513);
// http.createServer(handleWeb).listen(4514);


// function removeProperty(obj, prop) {
//     if (!obj){
//     delete obj.prop;
//     return true; 
//     }return false
//   }

//   var person={
//       name:"cahya",
//   }
//   console.log(removeProperty(person,name))


//   function formatDate(userDate) {
//       userDate = new Date();
//          y = userDate.getFullYear();
//          m = userDate.getMonth();
//          d = userDate.getDate();
    
//          return y + m + d;
    
//     // format from M/D/YYYY to YYYYMMDD
//   }
  
//   console.log(formatDate("12/31/2014"));



//   function getInParallel(apiCalls) {
//     // Write your code here
//   }
  
//   let promise = getInParallel([() => Promise.resolve("First API call!"),
//                                () => Promise.resolve("Second API call!")]);
//   if(promise) {
//     promise.then((result) => console.log(result)).catch((err) => console.log(err));
//   }
//   module.exports.getInParallel = getInParallel;



//   function ensure(value) {
//     if(!value){
//         return false
//     }else{
//         return true
//     }
//   }
  
//   try {
//     console.log(ensure());
//   } catch(err) {
//     console.log(err);
//   }

// function createCheckDigit(membershipId) {
//     // Write the code that goes here.\
//     var b=0;
//     var v=0;
//     for (const c of membershipId) {
        
//         var a = parseInt(c)
//         b=b+a
//        var d=b.toString();
//     }
//     for(const e of d){
//         var f = parseInt(e)
//         console.log(f)
//         v=v+f
//        var g=v.toString();
//     }
//     return d
//   }
  
//   console.log(createCheckDigit("55555"));

// function removeProperty(obj, prop) {
//     if(prop in obj){
//         delete obj[prop];
//         return true;
//       }else{
//         return false;
//        }
//   }
//   var obj= {
//     name:"John"
//   };
  
 
//   console.log( removeProperty(obj,'name'))




  const people = [["Scooby", "Velma"], ["Daphne", "Shaggy"], ["Fred","Lola"]]; //DONT TOUCH THIS LINE!
for(let i =0;i<people.length;i++){
    console.log(people[i]);
}

for(let o of people){
    console.log(o[1])
}


const numbers = [1,2,3,4,5,6,7,8,9]; 
for (let q of numbers){
    console.log(q*q)
}


function rant(message) {

    console.log((`I hate ${message}`).toUpperCase())*3
    
}
console.log(("2")*8)
rant("beets")



function isSnakeEyes(i,j) {
    if(i==j){
        console.log("Snake Eyes!")
    }else{
        console.log("Not Snake Eyes!")
    }
    
}
isSnakeEyes(1,1);
isSnakeEyes(1,5);

