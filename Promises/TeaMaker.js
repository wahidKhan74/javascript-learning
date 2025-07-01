// WAP for tea maker 
// Boil Water => return Promise
// Add Tea => return Promise
// Add Suggar and Milk => return Promise

function boilWater() {
    return new Promise((resolve, reject)=> {
        // console.log("Boiling water...");
        setTimeout(()=>{
            let kettleOn = true;
            if(kettleOn) {
                resolve("Hot water + ");
            } else {
                reject("Kettle is broken");
            }
        }, 2000);

    });
}


function addTeaLeaves(water) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            let teaLeaveAvailable = true;
            if(teaLeaveAvailable) {
                resolve(water +" Added Tea +");
            } else {
                reject("No Tea");
            }
        }, 2000);
    });
}

function addSugarAndMilk(tea) {
    return new Promise((resolve, reject)=> {
         setTimeout(()=>{
            let sugarAndMilkAvailable = true;
            if(sugarAndMilkAvailable) {
                resolve(tea +" Added Sugar and Milk");
            } else {
                reject("No Sugar and No Milk");
            }
        }, 2000);
    });
}


// Let's make tea!
// boilWater().then(message=>{
//     console.log(message);
// }).catch(error=>{
//  console.log(error);
// });


boilWater().then(addTeaLeaves).then(addSugarAndMilk).then(message=>{
    console.log(message +" = Tea is ready..");
}).catch(error=>{
 console.log(error);
});