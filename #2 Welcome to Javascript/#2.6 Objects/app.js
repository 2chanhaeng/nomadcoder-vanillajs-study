// before object
const playerName = "chomu";
const playerScore = 100;
const playerHandsome = true;
// or with array
const playerArray = ["chomu", 100, true];


// object
const player = {
    name: "chomu",
    score: 100,
    handsome: true,
}

// Get item from object
console.log(player); // {name: "chomu", score: 100, handsome: true}
console.log(player.name); // chomu
console.log(player["name"]); // chomu

// Update object item
console.log(player.score); // 100
player.score = player.score + 100;
console.log(player.score); // 200
player.score += 100;
console.log(player.score); // 300

// Add item to object
console.log(player.lastName); // undefined
player.lastName = "lee";
console.log(player.lastName); // lee
