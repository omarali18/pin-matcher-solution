function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinValue = pin + "";
    if (pinValue.length == 4) {
        return pin;
    }
    else {
        return getPin()
    };
}

function generateBtn() {
    const pin = getPin()
    document.getElementById("display-pin").value = pin;
};



document.getElementById("key-pad").addEventListener("click", function (event) {
    // debugger;
    const number = event.target.innerText;
    const inputPin = document.getElementById("input-pin");
    if (isNaN(number)) {
        if (number == "C") {
            inputPin.value = '';
        }
    }
    else {
        const getInputPin = inputPin.value;
        const newPin = getInputPin + number;
        inputPin.value = newPin
    }

});
function verifyPin() {
    const generatePin = document.getElementById("display-pin").value
    const inputPin = document.getElementById("input-pin").value
    if (generatePin == inputPin) {
        // document.getElementById("currect-match").style.visibility = "visible";
        document.getElementById("currect-match").style.display = "block";
        document.getElementById("incurrect-match").style.display = "none";
    }
    else {
        document.getElementById("incurrect-match").style.display = "block";
        document.getElementById("currect-match").style.display = "none";
    }

}