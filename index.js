let modname = document.getElementById("modname");
let moddesc = document.getElementById("moddesc");
let modvers = document.getElementById("modvers");
let moddeps = document.getElementById("moddeps");
let output = document.getElementById("output");
let button = document.getElementById("enter");
let modurl = document.getElementById("modwebsite");

window.addEventListener('load', () => {
    modname = document.getElementById("modname");
    moddesc = document.getElementById("moddesc");
    modvers = document.getElementById("modvers");
    moddeps = document.getElementById("moddeps");
    output = document.getElementById("output");
    button = document.getElementById("enter");
    modurl = document.getElementById("modwebsite");

    modname.value = "";
    modvers.value = "";
    moddesc.value = "";
    modurl.value = "";
    moddeps.value = "";
})

function onClick(event) {
    console.log("clicked");
    if (checkIfAnyEmpty()) {
        output.value = "No fields except Mod URL can be empty. Try again."
        return;
    }

    let deps = moddeps.value.split('\n');

    var body = {
        name: modname.value,
        version_number: modvers.value,
        website_url: modurl.value,
        description: moddesc.value,
        dependencies: deps
    }

    output.value = JSON.stringify(body, null, 4);

}

function checkIfAnyEmpty() {
    if (
        modname.value == "" ||
        moddesc.value == "" ||
        modvers.value == "" ||
        moddeps.value == ""
    ) {
        return true;
    }

    return false;
}