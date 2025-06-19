// WAP for super hero team members.

let avengers = [];

// Adding team members to the Avengers
avengers.push({name:"Spiderman", power:"Web-slinging", gender:"male"});
avengers.push({name: "Hulk", power: "Super strength" , gender:"male"});
avengers.push({name: "Ironman", power: "Genius-level intellect and powered armor", gender:"male"});
avengers.push({name: "Thor", power: "God of Thunder", gender:"male"});
avengers.push({name: "Captain America", power: "Super soldier serum and enhanced abilities", gender:"male"});
avengers.push({name: "Black Widow", power: "Expert martial artist and spy", gender:"female"});
avengers.push({name: "Doctor Strange", power: "Master of the mystic arts", gender:"male"});
avengers.push({name: "Hawkeye", power: "Expert marksman and archer", gender:"male"});
avengers.push({name: "Black Panther", power: "Enhanced abilities from the Heart-Shaped Herb and Vibranium suit", gender:"male"});

//displaying the Avengers team
console.log("Avengers Team Members:", avengers);

console.log('----------------------------------');

//iterating over the Avengers team
for ( let member of avengers) {
    console.log(`Name: ${member.name}, Power: ${member.power}`);
}

// Check weather ironman is in the team
for ( let member of avengers) {
    if (member.name === "Ironman") {
        console.log("Ironman is in the Avengers team.");
        break; // Exit the loop once Ironman is found
    }
}

// Check weather Hulk is in the team
avengers.some(member => {
    if (member.name === "Hulk") {
        console.log("Hulk is in the Avengers team.");
        return true; // Exit the loop once Hulk is found
    }
});

// Check weather Captain America is in the team
let isCaptainAmericaInTeam = avengers.some(member => member.name === "Captain America");
console.log(isCaptainAmericaInTeam);


// Filter members based on gender
let femaleSuperHeroes = avengers.filter(member => member.gender === "female");
console.log(femaleSuperHeroes);

let maleSuperHeroes = avengers.filter(member => member.gender === "male");
console.log(maleSuperHeroes);


