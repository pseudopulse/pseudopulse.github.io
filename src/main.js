"use strict";

const TICKRATE = 0.025;
const FRAMERATE = 0.033;

let honey = 0;
let money = 0;
let bees = 0;

let apiaries = 0;
let apiactories = 0;

let purchases = [0, 0];

let costScaling = [2, 10];
let baseCosts = [100, 5000];

setInterval(renderLoop, FRAMERATE * 1000);
setInterval(gameLoop, TICKRATE * 1000);
setInterval(saveGame, 30 * 1000);


function gameLoop() {
    productionTick();
}

function renderLoop() {
    renderTick();
}

function saveGame() {
    save();
}
