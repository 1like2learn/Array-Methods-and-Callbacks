import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing 
the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//a

let find2014 = fifaData.filter(function(item){
    return item['Year'] === 2014;
});
// console.log(find2014);
let findFinal = find2014.filter(function(array){
    return array['Stage'] === 'Final';
});
// console.log(findFinal)''
console.log(findFinal[0]["Home Team Name"]);

//b

console.log(findFinal[0]["Away Team Name"]);

//c

console.log(findFinal[0]["Home Team Goals"]);

//d

console.log(findFinal[0]["Away Team Goals"]);

//e

if (findFinal[0]["Home Team Goals"]>findFinal[0]["Away Team Goals"]){
    console.log(findFinal[0]["Home Team Name"]);
}else if (findFinal[0]["Home Team Goals"]>findFinal[0]["Away Team Goals"]){
    console.log(findFinal[0]["Away Team Name"]);
} else{
    console.log('It was a tie.')
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument 
and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(function(array){
        return array['Stage'] === 'Final'
    });

};

console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the 
callback function `getFinals`, and returns an array called `years` containing all 
of the years in the dataset */

function getYears(callback) {
 let years = []
 callback.forEach(element => {
    years.push(element['Year']);
    // console.log(element['Year']);
 });
    return years;

};

console.log(getYears(getFinals(fifaData)))

/* Task 5: Implement a higher-order function called `getWinners`, that accepts 
the callback function `getFinals()` and determine the winner (home or away) of 
each `finals` game. Return the name of all winning countries in an array called 
`winners` */ 

function getWinners(cb) {

    // let winners = cb.map(function(item){
    //     if(item["Home Team Goals"]>item["Away Team Goals"]){
    //         return item["Home Team Name"];
    //     }else {
    //         return item["Away Team Name"]
    //     }
    // })

    // cb.forEach(element => {
    //     if (element["Home Team Goals"]>element["Away Team Goals"]){
    //         winners.push(element["Home Team Name"]);
    //     }else {//if
    //         winners.push(element["Away Team Name"])
    //     }//else
    // }//forEachFunction
    // )//forEach
   
    // return winners
    return cb.map(function(item){
        if(item["Home Team Goals"]>item["Away Team Goals"]){
            return item["Home Team Name"];
        }else {
            return item["Away Team Name"]
        }
    });

};//function

console.log(getWinners(getFinals(fifaData)))

/* Task 6: Implement a higher-order function called `getWinnersByYear` that 
accepts the following parameters and returns a set of strings "In {year}, 
{country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
    let output = []
    cbWinners.forEach(function(item, index){
        
        output.push(`In ${cbYears[index]}, ${item} won the world cup!`)
    })
    return output

    // let output = [
    //     {'winners': '','years':''},

    // ]
        
    // cbWinners.forEach(function(item, index){
    //     output.index
    // });
    // cbYears.forEach(function(item, index){
    //     output.index.years = item;
    // });
    // console.log(output)
};
// `In ${years}, ${winners} won the world cup!`;
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))))

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter 
`data` and returns the the average number of home team goals and away team goals 
scored per match (Hint: use .reduce and do this in 2 steps) */
function getAverageGoals(data) {

    let homeGoals = (data.reduce(function(accu, item){
        return +item['Away Team Goals'] + +accu
    }));
    let awayGoals = (data.reduce(function(accu, item){
        return +item['Away Team Goals'] + +accu
    }));
    return `The average number of home goals are ${homeGoals} and the average number of away goals are ${awayGoals}`
};

console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters 
`data` and `team initials` and returns the number of world cup wins that country 
has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` 
and returns the team with the most goals score per appearance (average goals for) 
in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` 
and calculates the team with the most goals scored against them per appearance 
(average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of 
your chosing as listed in the README file. */
