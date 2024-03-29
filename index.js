// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
 function showPlayers(){
    const player = data.getPlayers();
    for(let i = 0; i < player.length; i++){
        console.log("PLAYER " + (i + 1));
        console.log("NAME: " + player[i].name);
        console.log("LASTNAME: " + player[i].lastname);
    }

 }showPlayers();


/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
function playerNameLength(){
    const player = data.getPlayers();
    let names = [];
    for(let i = 0; i < player.length; i++){
        names.push(player[i].name);
    }
    names.sort(function(a, b){
        return b.length - a.length;
    });
    console.log(names);

}playerNameLength();




/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average 
 * Output example -> Goals per match: 2.19
 */

// Your code
function averageGoals(){
    const player = data.getPlayers();
    let totalScoringChance = 0;
    for(let i = 0; i < player.length; i++){
        totalScoringChance += player[i].scoringChance;
    }
    averageGoals = totalScoringChance/100;
    console.log("The average goals in a match are: " + averageGoals);
}averageGoals();



/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code
function findPlayer(name){
    const player = data.getPlayers();
    for(let i = 0; i < player.length; i++){
        if(player[i].name == name){
            console.log(player[i].name + "'s position is: " + player[i].position);
        }
    }

}findPlayer("Tammy");


/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
/**
 * Without researching or cheating i am honestly not sure on the method
 * For creating this function but generally here is how i would go about it:
 * Create function
 * Collect data from getPlayers
 * Create array teamA = 0;
 * Create array teamB = 0;
 * Count number of players and every second player = teamA.push else teamB.push
 * Caluclate the average scores of TeamA and B
 * Log the match scores and output to console.
 */