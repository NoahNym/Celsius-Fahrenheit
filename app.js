let fahrenheitInput = document.getElementById("fahrenheit")
let celsiusInput = document.getElementById("celsius")
let cH1 = document.getElementById("celsiush1")
let fH1 = document.getElementById("fahrenheith1")

function convertF() {

    let fahrenheit = celsiusInput.value * 1.8 + 32
    fahrenheitInput.value = ""
    fH1.innerText = fahrenheit + "°"


}
function convertC() {
    let celsius = (fahrenheitInput.value - 32) * 0.5556
    cH1.innerText = celsius + "°"
    celsiusInput.value = ""
}