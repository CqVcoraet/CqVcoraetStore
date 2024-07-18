// Background
var bg = document.createElement("div");
bg.style.width = "1000px";
bg.style.height = "1600px";
bg.style.top = "50%";
bg.style.left = "50%";
bg.style.backgroundColor = "#E8E8E8";
bg.style.transform = "translate(-50%, -50%)";
bg.style.backgroundSize = "cover";
bg.style.backgroundRepeat = "no-repeat";
bg.style.position = "absolute";
document.body.append(bg);

// Create a link element for the font stylesheet
var fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap";
fontLink.rel = "stylesheet";

// Append the link element to the document head
document.head.appendChild(fontLink);

// Title Bar
var titleBar = document.createElement("div");
titleBar.style.width = "100%";
titleBar.style.height = "10%"; // Adjust the height percentage as needed
titleBar.style.backgroundColor = "#0D2A36";
titleBar.style.backgroundImage = "url('Images/CqVcoraetStoreLogo.png')";
titleBar.style.backgroundSize = "contain";
titleBar.style.backgroundRepeat = "no-repeat";
titleBar.style.backgroundPosition = "center";
titleBar.style.position = "absolute";
titleBar.style.transform = "translateX(-50%)";
titleBar.style.top = "30%"; // Adjust the top percentage as needed
titleBar.style.left = "50%";
titleBar.style.zIndex = "1";
bg.append(titleBar);

var titleBarTop = 30; // Adjust the value as needed

// Menu Bar
var menuBar = document.createElement("div");
menuBar.style.width = "100%";
menuBar.style.height = "5%"; // Adjust the height percentage as needed
menuBar.style.backgroundColor = "#03468F"; // Set the background color of the menu bar
menuBar.style.position = "absolute";
menuBar.style.transform = "translateX(-50%)";
menuBar.style.top = (titleBarTop + 10) + "%"; // 10% below the title bar
menuBar.style.left = "50%";
menuBar.style.zIndex = "1"; // Make sure the menu bar appears above other elements
bg.append(menuBar);

// Page Links
var homeLink = document.createElement("a");
homeLink.href = "Home.js";
homeLink.style.display = "inline-block";
homeLink.style.padding = "15px";
homeLink.style.color = "#FFFFFF"; // Set the text color
homeLink.style.textDecoration = "none"; // Remove underline from the link
homeLink.style.fontFamily = "Lexend, sans-serif"; // Apply the custom font
homeLink.innerHTML = "Home";
menuBar.append(homeLink);

var productsLink = document.createElement("a");
productsLink.href = "Products.js";
productsLink.style.display = "inline-block";
productsLink.style.padding = "15px";
productsLink.style.color = "#FFFFFF"; // Set the text color
productsLink.style.textDecoration = "none"; // Remove underline from the link
productsLink.style.fontFamily = "Lexend, sans-serif"; // Apply the custom font
productsLink.innerHTML = "Products";
menuBar.append(productsLink);

// Link Button Configuration Settings
window.addEventListener('DOMContentLoaded', (event) => {
    // Load Home.js by default
    loadPage('Home.js');

    // Handle navigation
    document.getElementById('homeBtn').addEventListener('click', () => {
        loadPage('Home.js');
    });

    document.getElementById('productsBtn').addEventListener('click', () => {
        loadPage('Products.js');
    });
});

function loadPage(pageName) {
    fetch(`Scripts/${pageName}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

