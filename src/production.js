function productionTick() {
    honey += getProduction() * (TICKRATE);
    apiaries += getApiactoryProduction() * TICKRATE;
    bees += getApiaryProducton() * TICKRATE;
}

function getProduction() {
    return Math.floor(bees) * 0.1;
}

function getCost(base, scaling, purchases) {
    if (purchases == 0) return base;

    return base * (scaling ^ purchases);
}

function getApiaryProducton() {
    return Math.floor(apiaries) * 0.1;
}

function getApiactoryProduction() {
    return Math.floor(apiactories) * 0.05;
}

function clickProduceBee() {
    bees++;
}

function buyApiary() {
    if (money < getCost(baseCosts[0], costScaling[0], purchases[0])) {
        return;
    }

    apiaries++;
    money -= getCost(baseCosts[0], costScaling[0], purchases[0]);
    purchases[0]++;
}

function buyApiactory() {
    if (money < getCost(baseCosts[1], costScaling[1], purchases[1])) {
        return;
    }

    apiactories++;
    money -= getCost(baseCosts[1], costScaling[1], purchases[1]);
    purchases[1]++;
}