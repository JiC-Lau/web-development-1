const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function() {
    alert('You clicked me!');
});

const showTableButton = document.getElementById('showTable');
showTableButton.addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = table;
});

let animal = "Elephant";
let habitat = "Savannah";
let diet = "Herbivore";
    
let table = `
    <table>
        <tr>
        <th>Animal</th>
        <th>Habitat</th>
        <th>Diet</th>
        </tr>
        <tr>
        <td>Tiger</td>
        <td>Forest</td>
        <td>Carnivore</td>
        </tr>
        <tr>
        <td>${animal}</td>
        <td>${habitat}</td>
        <td>${diet}</td>
    </table>
`;


const exercise2Heading = document.querySelector('#exercise2');
exercise2Heading.addEventListener('mouseover', function() {
    console.log('Stepped over me with a mouse!');
});

const exercise1Heading = document.querySelector('#exercise1');
exercise1Heading.addEventListener('click', function() {
    exercise1Heading.innerHTML = 'Bye bye mouse!';
    exercise1Heading.style.color = 'red';    
});

const feedback = document.getElementById('feedback');   
    feedback.addEventListener('focus', function() {
        feedback.style.backgroundColor = 'lightblue';
    });
    feedback.addEventListener('blur', function() {
        feedback.style.backgroundColor = '';
    });
    feedback.addEventListener('input', function() { 
        const charCount = feedback.value.length;
        document.getElementById('charcount').textContent = `${charCount}/200`;
        document.getElementById('preview').textContent = feedback.value;
    });

const form = document.getElementById('feedbackForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let feedbackValue = document.getElementById('feedback').value;
    let statusElement = document.querySelector('#status');

    if (feedbackValue.length < 10 || feedbackValue.length > 200) {
        statusElement.textContent = "Feedback must contain 10-200 characters.";
    } else {
        statusElement.textContent = "Thank you for your feedback!";

        document.querySelector("#feedback").value = "";
    }
});

document.addEventListener('keydown', function(event) {  
    console.log(event);
    document.querySelector('#keyinfo').textContent = `Key: ${event.key}, Code: ${event.code}`;
    document.querySelector("#keybox").textContent = event.key;
});

function showLocation() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const url = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
            window.location.href = url;
        },
        (error) => {
            console.log("Could not get the location:", error.message);
        }
    );
}