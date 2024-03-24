function uploadFile() {
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
    
    if (file) {
        window.location.href = "visualisation.html";
    } else {
        alert("Veuillez sélectionner un fichier Excel.");
    }
}

// nibghouha :


// Function to display the optimal route
function displayOptimalRoute(route) {
    document.getElementById("RO").innerText = route;
}

// Event listener for changing algorithm or visualization selection
document.getElementById("algorithm").addEventListener("change", function() {
    var selectedAlgorithm = document.getElementById("algorithm").value;
    // Update display based on selected algorithm
});

document.getElementById("visualization").addEventListener("change", function() {
    var selectedVisualization = document.getElementById("visualization").value;
    // Update display based on selected visualization
});

// Example: Displaying the optimal route when the page is loaded
var exampleOptimalRoute = "1 - 2 - 3 - 4 - 5"; // Example optimal route
displayOptimalRoute(exampleOptimalRoute);

// JavaScript to handle interactions with visualization.html page

// Function to display the optimal route and map button
function displayOptimalRouteAndMap() {
    var solutionDiv = document.getElementById("solution");
    var mapButton = document.getElementById("show-map");

    // Display optimal solution by changing the style of the element to make it visible
    solutionDiv.style.display = "block";

    // Display map button
    mapButton.style.display = "block";
}

// Event listener for clicking "Afficher la Solution" button
document.getElementById("show-solution").addEventListener("click", displayOptimalRouteAndMap);

// Event listener for clicking "Afficher la Carte de Mauritanie" button
document.getElementById("show-map").addEventListener("click", function() {
    // Redirect to Mauritania map page
    window.location.href = 'mauritania_map.html';
});
