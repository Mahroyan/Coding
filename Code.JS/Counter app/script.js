var value = 0

function Increase() {
    value += 1;
    Result();
}

function Decrease() {
    value -= 1;
    Result();
}

function Reset() {
    value = 0;
    Result();
}

function Result() {
    document.getElementById('value').innerHTML = value;
}