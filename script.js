// Change button color when clicked
document.getElementById('learnMore').addEventListener('click', function () {
    this.style.backgroundColor = 'blue';
});

// Show a greeting alert based on time
const hours = new Date().getHours();
const greeting = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
alert(greeting);

// Functionality for "Learn More" Button
document.getElementById('learnMore').addEventListener('click', function () {
    document.getElementById('learnMoreSection').style.display = 'block';
});

// Functionality for "Close" Button
document.getElementById('closeLearnMore').addEventListener('click', function () {
    document.getElementById('learnMoreSection').style.display = 'none';
});
