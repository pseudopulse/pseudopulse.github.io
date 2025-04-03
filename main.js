"use strict";

const TICKRATE = 0.025;
const FRAMERATE = 0.033;

let honey = 0;
let money = 0;
let bees = 0;

let state = 0;

setInterval(renderLoop, FRAMERATE * 1000);
setInterval(gameLoop, TICKRATE * 1000);

function gameLoop() {
    if (bees <= 0) return;

    honey += getProduction() * (TICKRATE);
}

function renderLoop() {
    switch (state) {
        case 0:
            tabApiary();
            break;
        default:
            break;
    }
}

function getProduction() {
    return bees * 0.2;
}

function clickProduceBee() {
    bees++;
}

function tabApiary() {
    let headerHoney = document.getElementById("honeyText");
    let headerMoney = document.getElementById("moneyText");
    let headerBee = document.getElementById("beeText");
    let headerProduce = document.getElementById("beeProduceText");

    headerHoney.textContent = `You have ${honey.toFixed(2)} honey.`;
    headerMoney.textContent = `You have $${money.toFixed(2)} in funding.`
    headerBee.textContent = `There are ${bees.toFixed(0)} bees.`;
    headerProduce.textContent = `Your bees are producing ${getProduction().toFixed(2)} honey/sec.`
}