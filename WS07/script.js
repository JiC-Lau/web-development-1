var data = JSON.parse(text);

var button = document.getElementById("showNames");
button.addEventListener("click", showNames);

function showNames() {
    var output = " ";
    for (var i = 0; i < data.employees.length; i++) {
        output += data.employees[i].firstName + " " + data.employees[i].lastName + "<br>";
    }
    document.getElementById("jsondata").innerHTML = output;
}