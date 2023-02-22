let selectBox = document.getElementById("select-box")
selectBox.addEventListener("change", function () {
    if (selectBox.validity.valueMissing) {
        selectBox.setCustomValidity("Please select a date and time. ")
    } else {
        selectBox.setCustomValidity("")
    }
})