// work on html and CSS first then JS it up
// create functions for the 6 buttons add1Home(), add2Home(), add3Home(), add1Guest(), add2Guest(), add3Guest(), 
//Make sure to console.log to see if they work when you press it.
// make sure to add ID to the scoreboard in html and DOM the element so that it displays the correct number. I.E: scoreEl = document.getElementById("score-el")
// you can do the increments by creating variable let homeScore = 0, let guestScore = 0
// then in the corresponding functions homeScore += 1, homeScore+= 2, etc. scoreEl.textContent = homeScore
// Should work but play around and see if it doesn't lol

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let home = 0
let guest = 0

function add1Home() {
    home = home + 1
    homeEl.textContent = home
}

function add2Home() {
    home = home + 2
    homeEl.textContent = home
}

function add3Home() {
    home = home + 3
    homeEl.textContent = home
}

function add1Guest() {
    guest = guest + 1
    guestEl.textContent = guest
}

function add2Guest() {
    guest = guest + 2
    guestEl.textContent = guest
}

function add3Guest() {
    guest = guest + 3
    guestEl.textContent = guest
}
