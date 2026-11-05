var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var data = JSON.parse(text);

function showNames() {
    var output = " ";
    for (var i = 0; i < data.employees.length; i++) {
        output += data.employees[i].firstName + " " + data.employees[i].lastName + "<br>";
    }
    document.getElementById("jsondata").innerHTML = output;
}

function showAll() {
    var output = " ";       
    for (var i = 0; i < data.employees.length; i++) {
        output += "First Name: " + data.employees[i].firstName + "<br>";
        output += "Last Name: " + data.employees[i].lastName + "<br><br>";
    }
    document.getElementById("jsondata").innerHTML = output;
}
