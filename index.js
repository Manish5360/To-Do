
function selectText() {
    const input = document.getElementById('task').value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var button = document.createElement("button")
    button.appendChild(document.createTextNode("Done"));
    button.setAttribute("onClick", "taskDelete(this);");
    button.setAttribute("class", "taskbtn");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    li.appendChild(button);
    document.getElementById('task').value = '';
}

function taskDelete(el) {
    el.parentNode.parentNode.removeChild(el.parentNode);
}

