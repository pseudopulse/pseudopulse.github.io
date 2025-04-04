let accumulatedHoneySale = 0;
let baseMaxScale = 1e4;

let honeyBulk = 0.2;

function sellRate(pending) {
    let honeyPrice = 1;
    let baseline = honeyPrice * Math.max(Math.min(1 - ((accumulatedHoneySale + pending) / baseMaxScale), 1), 0);

    return baseline;
}

function sellHoney() {
    if (honey < 1) return;

    let toSell = honey * honeyBulk;

    money += (honey * toSell) * ((sellRate(0) + sellRate(toSell)) / 2);
    honey -= toSell;
    accumulatedHoneySale += toSell;
}

function drySellHoney() {
    let profit = (honey * honeyBulk) * ((sellRate(0) + sellRate(honey * honeyBulk)) / 2);
    return profit;
}

function tabFunding() {
    let sellInfo = document.getElementById("sellInfo");
    let sellRateInfo = document.getElementById("sellRate");
    let sellPercent = document.getElementById("sellPercent");
    
    honeyBulk = Number(sellPercent.value) / 100;

    sellRateInfo.textContent = `Honey sells for $${sellRate(0).toFixed(2)}/unit.`
    sellInfo.textContent = `You will sell ${(honey * honeyBulk).toFixed(0)} for $${drySellHoney().toFixed(2)} currently.`
}