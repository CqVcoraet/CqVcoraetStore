// Background
var bg = document.createElement("div");
bg.style.width = "800px";
bg.style.height = "1600px";
bg.style.top = "50%";
bg.style.left = "50%";
bg.style.transform = "translate(-50%, -50%)";
bg.style.backgroundSize = "cover";
bg.style.backgroundRepeat = "no-repeat";
bg.style.position = "absolute";
document.body.append(bg);

// Menu Bar
var menuBar = document.createElement("div");
menuBar.style.width = "100%";
menuBar.style.height = "50px";
menuBar.style.backgroundColor = "#03468F"; // Set the background color of the menu bar
menuBar.style.position = "absolute";
menuBar.style.transform = "translateX(-50%)";
menuBar.style.top = "0";
menuBar.style.left = "0";
menuBar.style.zIndex = "1"; // Make sure the menu bar appears above other elements
bg.append(menuBar);

// Add Home menu item to the menu bar
var home = document.createElement("div");
home.innerHTML = "Home";
home.style.display = "inline-block";
home.style.padding = "15px";
home.style.color = "#FFFFFF"; // Set the text color
menuBar.append(home);

// Add Products menu item to the menu bar
var products = document.createElement("div");
products.innerHTML = "Products";
products.style.display = "inline-block";
products.style.padding = "15px";
products.style.color = "#FFFFFF"; // Set the text color
menuBar.append(products);

// Add more menu items as needed
