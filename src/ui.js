let states = ["apiaryTab", "fundingTab", "loadingTab"];
let buttons = ["menuApiary", "menuIncome", "dummyThisDoesntExist"];

let state = 2;

setState(2);

function renderTick() {
    switch (state) {
        case 0:
            tabApiary();
            break;
        case 1:
            tabFunding();
            break;
        case 2:
            tabLoading();
            break;
        default:
            break;
    }

    if (state != 2) tabShared();
}

function setState(newState) {
    state = newState;

    switch (state) {
        case 2:
            disableOtherStates("loadingTab");
            break;
        case 0:
            disableOtherStates("apiaryTab");
            break;
        case 1:
            disableOtherStates("fundingTab");
            break;
    }
}

function disableOtherStates(currentState) {
    document.getElementById(currentState).hidden = false;
    
    for (let i = 0; i < states.length; i++) {
        if (states[i] != currentState) {
            document.getElementById(states[i]).hidden = true;
            if (states[i] != "loadingTab") document.getElementById(buttons[i]).style.backgroundColor = "grey";
        }
        else {
            if (currentState != "loadingTab") document.getElementById(buttons[i]).style.backgroundColor = "yellow";
        }
    }
}

function tabShared() {
    let headerHoney = document.querySelectorAll("[id='honeyText']");
    let headerMoney = document.querySelectorAll("[id='moneyText']");

    for (let i = 0; i < headerHoney.length; i++) {
        headerHoney[i].textContent = `You have ${honey.toFixed(0)} honey.`;
    }

    for (let i = 0; i < headerMoney.length; i++) {
        headerMoney[i].textContent = `You have $${money.toFixed(2)} in funding.`
    }
}
