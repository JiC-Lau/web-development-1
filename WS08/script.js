// Store your OpenWeatherMap API key.
const apiKey = "28b520d1d57a53475e975f6deecad3be";

// Find the HTML element where we display the weather data.
const weatherData = document.getElementById("weatherdata");

// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
document.getElementById("fetchdata").addEventListener("click", async () => {

     // Display a loading message.
    weatherData.textContent = "Loading weather data...";

    // Try to fetch and process the weather data.
    try {

        // Send a GET request to the weather API and wait for the response.
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=xml&appid=${apiKey}`
        );
        
        // q=Helsinki selects the city.
        
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
      

        // Check whether the API returned a successful HTTP status.
        if (!response.ok) {
         // Create an error and jump to the catch block.
            throw new Error(`HTTP error! status: ${response.status}`);
    }

        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        // Display the XML as plain text on the page.
        weatherData.textContent = xmlText;

    // Handle errors from the request or the code above.
    } catch (error) {

        // Choose an error message in the page's language.
        const errorMessage = "An error occurred while fetching weather data.";

        // Display the message and details of the error.
        weatherData.textContent = errorMessage;
        console.error("Error fetching weather data:", error);
    }
});