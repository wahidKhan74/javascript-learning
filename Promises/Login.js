let userName = "xyz123";
let password = "abc@123";

let loginPromise = new Promise(function(resolve, reject){

    if(userName==="xyz123" && password==="abc@123"){
        resolve("Login Successfull, Welcome user "+userName);
    } else {
        reject("User not found !");
    }

});

loginPromise.then(function(message) {
    console.log(message);
}).catch(function(error) {
    console.log("Error :"+error);
})