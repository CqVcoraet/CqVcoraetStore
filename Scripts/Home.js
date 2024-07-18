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
titleBar.style.height = "100px";
titleBar.style.backgroundColor = "#0D2A36";
titleBar.style.backgroundImage = "url('Images/CqVcoraetStoreLogo.png')";
titleBar.style.backgroundSize = "contain";
titleBar.style.backgroundRepeat = "no-repeat";
titleBar.style.backgroundPosition = "center";
titleBar.style.position = "absolute";
titleBar.style.transform = "translateX(-50%)";
titleBar.style.top = "24.5%";
titleBar.style.left = "50%";
titleBar.style.zIndex = "1";
bg.append(titleBar);

// Menu Bar
var menuBar = document.createElement("div");
menuBar.style.width = "100%";
menuBar.style.height = "50px";
menuBar.style.backgroundColor = "#03468F"; // Set the background color of the menu bar
menuBar.style.position = "absolute";
menuBar.style.transform = "translateX(-50%)";
menuBar.style.top = "30%";
menuBar.style.left = "50%";
menuBar.style.zIndex = "1"; // Make sure the menu bar appears above other elements
bg.append(menuBar);

// Add Home menu item to the menu bar
var home = document.createElement("div");
home.innerHTML = "Home";
home.style.display = "inline-block";
home.style.padding = "15px";
home.style.color = "#1DC6F5"; // Set the text color
home.style.fontFamily = "Lexend, sans-serif"; // Set the font
menuBar.append(home);

// Add Products menu item to the menu bar
var products = document.createElement("div");
products.innerHTML = "Products";
products.style.display = "inline-block";
products.style.padding = "15px";
products.style.color = "#FFFFFF"; // Set the text color
products.style.fontFamily = "Lexend, sans-serif"; // Set the font
menuBar.append(products);

// Page Links
var homeLink = document.createElement("a");
homeLink.href = "Home.js";
homeLink.style.display = "inline-block";
homeLink.style.padding = "15px";
homeLink.style.color = "#FFFFFF"; // Set the text color
homeLink.style.textDecoration = "none"; // Remove underline from the link
homeLink.style.fontFamily = "Lexend, sans-serif"; // Apply the custom font
homeLink.innerHTML = "FAQ";
menuBar.append(homeLink);

var productsLink = document.createElement("a");
productsLink.href = "Products.js";
productsLink.style.display = "inline-block";
productsLink.style.padding = "15px";
productsLink.style.color = "#FFFFFF"; // Set the text color
productsLink.style.textDecoration = "none"; // Remove underline from the link
productsLink.style.fontFamily = "Lexend, sans-serif"; // Apply the custom font
productsLink.innerHTML = "Contact Us";
menuBar.append(productsLink);

// To Products Page
products.addEventListener("click", function() {
    window.location.href = "products.html";
})

// Motto
var motto = document.createElement("div");
motto.style.width = "550px";
motto.style.height = "100px";
motto.style.top = "40%";
motto.style.left = "50%";
motto.style.position = "absolute";
motto.style.transform = "translate(-50%, -50%)";
motto.style.color = "#000000"; // Set the text color
motto.style.fontFamily = "Lexend, sans-serif"; // Set the font
motto.style.textAlign = "center";
motto.style.fontSize = "40px";
motto.style.fontWeight = "bold";
motto.style.zIndex = "1";
motto.innerHTML = "New Products, Reimagined";
bg.append(motto);

// Motto Image
var mottoImage = document.createElement("div");
mottoImage.style.backgroundImage = "url('Images/3D_Printed_Shoe.jpg')";
mottoImage.style.width = "750px";
mottoImage.style.height = "500px";
mottoImage.style.position = "absolute";
mottoImage.style.transform = "translateX(-50%)";
mottoImage.style.top = "42%";
mottoImage.style.left = "50%";
mottoImage.style.zIndex = "1";
mottoImage.style.backgroundSize = "contain"; // This ensures the background image fits within the div
mottoImage.style.backgroundRepeat = "no-repeat"; // Prevents repeating the image
bg.append(mottoImage);
