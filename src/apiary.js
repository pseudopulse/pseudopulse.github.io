function tabApiary() {
    let headerBee = document.getElementById("beeText");
    let headerProduce = document.getElementById("beeProduceText");
    let headerApiary = document.getElementById("apiaryText");
    let apiaryProduce = document.getElementById("apiaryProduceText");
    let headerApiactory = document.getElementById("apiactoryText");
    let apiactoryProduce = document.getElementById("apiactoryProduceText");

    headerBee.textContent = `There are ${bees.toFixed(0)} bees.`;
    headerProduce.textContent = `Your bees are producing ${getProduction().toFixed(2)} honey/sec.`
    headerApiary.textContent = `You have ${apiaries.toFixed(0)} apiaries.`
    apiaryProduce.textContent = `Your apiaries are producing ${getApiaryProducton().toFixed(2)} bees/sec.`;
    headerApiactory.textContent = `You have ${apiactories.toFixed(0)} apiactories.`;
    apiactoryProduce.textContent = `Your apiactories are producing ${getApiactoryProduction().toFixed(2)} apiaries/sec.`

    let buyApiaryButton = document.getElementById("buyApiary");
    let buyApiactoryButton = document.getElementById("buyApiactory");

    buyApiaryButton.disabled = money < getCost(baseCosts[0], costScaling[0], purchases[0]) ? "disabled" : "";
    buyApiactoryButton.disabled = money < getCost(baseCosts[1], costScaling[1], purchases[1]) ? "disabled" : "";

    buyApiaryButton.textContent = `Buy Apiary: $${getCost(baseCosts[0], costScaling[0], purchases[0]).toFixed(2)}`
    buyApiactoryButton.textContent = `Buy Apiactory: $${getCost(baseCosts[1], costScaling[1], purchases[1]).toFixed(2)}`
}