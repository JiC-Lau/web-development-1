// Task 1.1 The first button changes the Task 1 heading to Updated heading!
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});

// Task 1.2 The second button adds or removes the CSS class highlight from the heading. Use classList.toggle().
const changeStyleButton = document.querySelector("#changeStyleButton"); 
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

// Task 1.3 The third button changes the animal text below. Use the textContent property.
// Add a new sentence to the end of the animal text without replacing the existing text.
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent += " They can use their trunks to grab objects and drink water.";
});

// Task 1.3 The third button changes the animal text below. Use the textContent property.
// Add a button that changes the background colour of the page.
const changeBackgroundButton = document.querySelector("#changeBackgroundButton");
changeBackgroundButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

// Task 2 Creating elements with JavaScript. Select the element below with the ID animalContent.
// Task 2.1 Select the element below with the ID animalContent. 
const animalContent = document.querySelector("#animalContent");

// Task 2.2 Create an h3 element containing the text Animal of the Day.
const animalOfTheDayHeading = document.createElement("h3");
animalOfTheDayHeading.textContent = "Animal of the Day";

// Task 2.3 Create a paragraph describing an animal of your choice.
const animalDescriptionTask2 = document.createElement("p");
animalDescriptionTask2.textContent = "Elephants are intelligent animals with excellent memory and strong social bonds.";

// Task 2.4 Create an img element and set its src and alt values.
const animalImageTask2 = document.createElement("img");
animalImageTask2.src = "images/elephant.png";
animalImageTask2.alt = "Elephant";

// Task 2.5 Attach the elements to the page with append().
animalContent.append(animalOfTheDayHeading);
animalContent.append(animalDescriptionTask2);
animalContent.append(animalImageTask2);

// Task 2.6 Add the CSS class animal-heading to the heading you created.
animalOfTheDayHeading.classList.add("animal-heading");

// Add event listeners to the buttons. The first button hides the animalContent element and the second button shows it again.
const hideAnimalButton = document.querySelector("#hideAnimalButton");
hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

const showAnimalButton = document.querySelector("#showAnimalButton");
showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});

// Task 3. Selecting an animal. Select an animal from the drop-down menu. Change the animal's name, image and description based on the selection.
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// Task 3.5 Add a mouseenter event listener to the image. It should add the CSS class image-highlight.
animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

// Task 3.6 Add a mouseleave event listener that removes the same CSS class.
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent = "Elephants are intelligent animals with excellent memory and strong social bonds.";
    }

    else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent = "Tigers are powerful predators with distinctive orange and black stripes.";
    }

    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent = "Penguins are flightless birds that are excellent swimmers and live in cold climates.";
    }

    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent = "Pandas are cute and cuddly bears that are native to China.";
    }
});

//Task 4 Adding animal observations
//Task 4.1-3 Add a listener for the form's submit event.Prevent the form's default action with event.preventDefault(). Check that none of the fields are empty.
const observationForm = document.querySelector("#animalForm");
const observationAnimalName = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

observationForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const animalNameValue = observationAnimalName.value;
    const locationValue = observationLocation.value;
    const dateValue = observationDate.value;
    
    if (!animalNameValue || !locationValue || !dateValue) {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");
    const animalCell = document.createElement("td");
    animalCell.textContent = animalNameValue;
    const locationCell = document.createElement("td");
    locationCell.textContent = locationValue;
    const dateCell = document.createElement("td");
    dateCell.textContent = dateValue;
 
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
 
    deleteButton.addEventListener("click", function () {
    row.remove();
  });
 
    deleteCell.append(deleteButton);

    row.append(animalCell, locationCell, dateCell, deleteCell);
    observationTableBody.append(row);

    observationForm.reset();
 
});
