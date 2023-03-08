function dis(val) {
    document.getElementById("edu").value += val
}

function sol() {
    let x = document.getElementById("edu").value
    let y = eval(x)
    document.getElementById("eds").value = y
}

function clr() {
    document.getElementById("edu").value = ""
    document.getElementById("eds").value = ""
}