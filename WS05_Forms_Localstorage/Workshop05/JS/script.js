// WS05 student starter 
// Complete the TODOs. This file is intentionally unfinished.


const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.
    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    animalName.classList.remove("invalid");
    animalSpecies.classList.remove("invalid");
    careNote.classList.remove("invalid");

    let isValid = true;
    // TODO: Validate and show errors / Validoi ja näytä virheet.
    if (name === "") {
        nameError.textContent = "Name is required.";
        animalName.classList.add("invalid");
        isValid = false;
    }
    if (species === "") {
        speciesError.textContent = "Species is required.";
        animalSpecies.classList.add("invalid");
        isValid = false;
    }
    if (note.length < 1 || note.length > 150) {
        noteError.textContent = "Care note must contain 1–150 characters.";
        careNote.classList.add("invalid");
        isValid = false;
    }
    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    if (isValid) {
        formResult.textContent = name + " / " + species + " / " + note;
        
        console.log(name);
        console.log(species);
        console.log(note);
    
    // TODO: Create { name, species, note } and save it as JSON.
    
        const animalData = { name, species, note };
        localStorage.setItem("ws05Animal", JSON.stringify(animalData));
        console.log(animalData);
    }
});

// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().
    const annualFee = Number(animalType.value);
    const numberOfYears = Number(yearsInput.value);

    // TODO: Calculate the price and apply discounts.
    let total = annualFee * numberOfYears;
   
    if (numberOfYears >= 5) {
        total = total * 0.8;
        total = total - 5;
        discountMessage.textContent = "20% discount and €5 additional discount applied.";
    } else if (numberOfYears > 2) {
        total = total * 0.8;
        discountMessage.textContent = "20% discount applied.";
    } else {
        discountMessage.textContent = "No discount applied.";
    }

    // TODO: Show the result.
    cost.textContent = "Total: €" + total.toFixed(2);

});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    // TODO: Display name, species and note with textContent.
    const animalData = localStorage.getItem("ws05Animal");
    if (animalData) {
        const animal = JSON.parse(animalData);
        savedAnimal.textContent = animal.name + " / " + animal.species + " / " + animal.note;
    } else {
        savedAnimal.textContent = "No saved animal yet.";
    }    
}

loadButton.addEventListener("click", loadAnimal);

// TODO: Remove ws05Animal and update the displayed result.
clearButton.addEventListener("click", function () {
    localStorage.removeItem("ws05Animal");
    loadAnimal();
});

// TODO: Call loadAnimal() here to restore data when the page opens.
loadAnimal();

