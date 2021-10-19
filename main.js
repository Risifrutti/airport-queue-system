let nameInput = document.querySelector("#nameInput");
let checkbox = document.querySelector("#VIP");
let submitButton = document.querySelector("#submitButton");

let queueList = document.querySelector("#queueList");
let container = document.querySelector("#container");
let emptyMessage = document.querySelector("#emptyMessage");

let deleteButton = document.querySelector("#deleteButton");

submitButton.addEventListener("click", () => {

    if (nameInput.value === "") {

        alert("Text field is empty, please enter your name.");

    } else {

        let traveller = document.createElement("li"); // Lägger till en person i kön
        traveller.innerText = nameInput.value;
        queueList.appendChild(traveller);
        nameInput.value = "";

        let checkInButton = document.createElement("button"); // check-in button
        checkInButton.type = "button";
        checkInButton.id = "checkIn";
        checkInButton.innerText = "Check-In";
        traveller.appendChild(checkInButton);

        checkInButton.addEventListener("click", () => { // vid click ändras check-in knappen till checked in!
            let buttonPressed = true;
            if (buttonPressed === true) {
                checkInButton.style.backgroundColor = "#16B64E";
                checkInButton.style.color = "white";
                checkInButton.innerText = "Checked in!";
            }
        })

        let fastTrack = document.createElement("button") // fast track button för att placera en person längst fram
        fastTrack.type = "button";
        fastTrack.id = "fastTrack";
        fastTrack.innerText = "FastTrack";
        traveller.appendChild(fastTrack);

        fastTrack.addEventListener("click", () => {
            queueList.prepend(traveller);
        })

        deleteButton.addEventListener("click", () => { // delete button tar bort en checked in person från kön
            if (checkInButton.innerText === "Checked in!") {
                queueList.removeChild(queueList.firstChild);
            }
            else {
                alert("First person in line must be checked in before being removed from queue!");
            }
        })

        container.removeChild(emptyMessage);
    }
})