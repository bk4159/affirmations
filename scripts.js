
const affirmations = ["I'm worth it", "I like myself", "Tomorrow presents another chance", "I love myself",
                        "These hard times happen", "It's ok to let yourself smile", "Life is funny"];
let prevAffirmationNum = 0;

//set visible affirmation to a random affirmation from the the array of affirmations    
function getAffirmation() {
    let affirmationNum = Math.floor(Math.random() * affirmations.length);
    //get non-repeated random num
    while (affirmationNum === prevAffirmationNum) {
        prevAffirmationNum = affirmationNum;
        affirmationNum = Math.floor(Math.random() * affirmations.length);
    }
    
    prevAffirmationNum = affirmationNum;
    document.getElementById("affirmation").textContent = affirmations[affirmationNum];
}

