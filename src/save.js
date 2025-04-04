function save() {
    localStorage.setItem("honey", honey);
    localStorage.setItem("money", money);
    localStorage.setItem("apiaries", apiaries);
    localStorage.setItem("apiactories", apiactories);
    localStorage.setItem("state", state);
    localStorage.setItem("accumulatedHoneySale", accumulatedHoneySale);
    localStorage.setItem("honeyBulk", honeyBulk);
    localStorage.setItem("purchases", JSON.stringify(purchases));
    localStorage.setItem("bees", bees);
}

function load() {
    if (localStorage.getItem("saveMarker") == null) {
        reset();
        localStorage.setItem("saveMarker", "marked");
    }

    honey = Number(localStorage.getItem("honey"));
    money = Number(localStorage.getItem("money"));
    bees = Number(localStorage.getItem("bees"));
    apiaries = Number(localStorage.getItem("apiaries"));
    apiactories = Number(localStorage.getItem("apiactories"));
    state = Number(localStorage.getItem("state"));
    accumulatedHoneySale = Number(localStorage.getItem("accumulatedHoneySale"));
    honeyBulk = Number(localStorage.getItem("honeyBulk"));
    purchases = JSON.parse(localStorage.getItem("purchases"));
}

function reset() {
    localStorage.setItem("honey", 0);
    localStorage.setItem("money", 0);
    localStorage.setItem("bees", 0);
    localStorage.setItem("apiaries", 0);
    localStorage.setItem("apiactories", 0);
    localStorage.setItem("state", 0);
    localStorage.setItem("accumulatedHoneySale", 0);
    localStorage.setItem("honeyBulk", 0);
    localStorage.setItem("purchases", JSON.stringify([0, 0]));
}