let homePoints = document.getElementById("homepoints")
let awayPoints = document.getElementById("awaypoints")
let homePenalties = document.getElementById("homepenalties")
let awayPenalties = document.getElementById("awaypenalties")

let periods = document.getElementById("period")


let homeGoals = 0
let awayGoals = 0
let homePen = 0
let awayPen = 0


function homeGoalIncrement() {
    homeGoals += 1
    homePoints.textContent = homeGoals
}
function homeGoalDecrement() {
    homeGoals -= 1
    homePoints.textContent = homeGoals
}

function awayGoalIncrement() {
    awayGoals += 1
    awayPoints.textContent = awayGoals
}
function awayGoalDecrement() {
    awayGoals -= 1
    awayPoints.textContent = awayGoals
}
function homePenIncrement() {
    homePen += 1
    homePenalties.textContent = homePen
}
function homePenDecrement() {
    homePen -= 1
    homePenalties.textContent = homePen
}

function awayPenIncrement() {
    awayPen += 1
    awayPenalties.textContent = awayPen
}
function awayPenDecrement() {
    awayPen -= 1
    awayPenalties.textContent = awayPen
}

function period1() {
    periods = 1
    period.textContent = periods
}
function period2() {
    periods = 2
    period.textContent = periods
}
function period3() {
    periods = 3
    period.textContent = periods
}
