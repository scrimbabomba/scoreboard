let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

let countHome = 0;
let countGuest = 0;

function homePlus(points) {
    countHome += points;
    scoreHomeEl.textContent = countHome;
}

function guestPlus(points) {
    countGuest += points;
    scoreGuestEl.textContent = countGuest;
}
