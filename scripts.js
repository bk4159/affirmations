
const affirmations = ["I'm worth it", "I like myself", "Tomorrow presents another chance", "I love myself",
                        "These hard times happen", "It's ok to let yourself smile", "Life is funny sometimes"];
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

//add an affirmation to the list of affirmations
function addAffirmation() {
    const affirmationInput = document.getElementById("newAffirmation");
    const affirmation = document.getElementById("newAffirmation").value;
    const successAdd = document.getElementById("successAdd");
    
    affirmations.push(affirmationInput.value);
    affirmationInput.value = "";
    successAdd.textContent = "The new affirmation was added";

    //add to local storage so the new affirmations stay across browser sessions
    localStorage.setItem("newAff" + localStorage.length, affirmation);
}

document.addEventListener('DOMContentLoaded', (event) => {
    //allow pressing enter to be equivalent to submitting affirmation
    document.getElementById("newAffirmation").addEventListener("keyup", function(event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        if (event.key === "Enter") {
            addAffirmation();
        }
    });

    //add user-given affirmations in local storage to initial list
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.includes("newAff")) {
            affirmations.push(localStorage.getItem(key));
        }
    }
});
