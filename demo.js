
function validatePin(pin) {
    var reg = /^\d{4,6}\b/g
    if(pin.length == 4 || pin.length == 6) {
        return pin.test(pin)
    }
    return false;
}