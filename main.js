function NewLine(key,cmd) {
    if (key == undefined) {
        key = ""
    }
    if (cmd == undefined) {
        cmd = ""
    }
    var total = document.getElementsByClassName("line").length

    var tempLine = document.createElement('div')
    tempLine.className = 'line'
    tempLine.id = String(total)
    var ihtml = `
    <input type="text" id="key" placeholder="key" value="` + String(key) + `">
    <input type="text" id="cmd" placeholder="command" value="` + String(cmd) + `">
    <input type="button" id="rem" value="-">
    <br>
    `
    tempLine.innerHTML = ihtml
    tempLine.children[2].onclick = function() {
        tempLine.remove()
    }
    document.getElementById("lines").appendChild(tempLine)
}

NewLine()

document.getElementById("add").onclick = function() {
    NewLine()
};

document.getElementById("del").onclick = function() {
    document.getElementById("lines").lastChild.remove()
};

document.getElementById("rem").onclick = function() {
    var parent = this.parentNode
    document.getElementById(parent.id).remove()
};

document.getElementById("togui").onclick = function() {
    document.getElementById("lines").innerHTML = ''

    var inp = document.getElementById("inp").value
    var lines = inp.split('\n')
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        var splitted = line.split('"')
        NewLine(splitted[1], splitted[3])
    }
};

document.getElementById("totxt").onclick = function() {
    var kids = document.getElementById("lines").children
    var out = ""
    for (var i = 0; i < kids.length; i++) {
        var kid = kids[i]
        out += 'bind "' + kid.children[0].value + '" "' + kid.children[1].value + '"\n'
    }
    document.getElementById("out").innerHTML = out
};
