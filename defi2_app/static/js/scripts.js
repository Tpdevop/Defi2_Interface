// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    var button1 = document.querySelector('#button1');
    var button2 = document.querySelector('#button2');

    // Add click event listeners to the buttons
    button1.addEventListener('click', function() {
        // Add functionality for button 1 click
        alert('Button 1 clicked!');
    });

    button2.addEventListener('click', function() {
        // Add functionality for button 2 click
        alert('Button 2 clicked!');
    });
});
