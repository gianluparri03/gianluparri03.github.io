// Sets color schemes
let schemes = [
    ["Dark", "#121212", "#BDBDBD", "#616161"],
    ["Light", "#EEEEEE", "#000000", "#757575"],
    ["Ocean", "#E3F2FD", "#01579B", "#03A9F4"],
    ["Nature", "#E8F5E9", "#2E7D32", "#4CAF50"],
    ["Pony", "#FCE4EC", "#AD1457", "#E91E63"],
];
    
// Gets current color scheme
let current = (localStorage.getItem("scheme") || 0) - 1;
changePalette(true);


// Adds the palette button once the page is loaded
window.onload = function () {
    let paletteButton = document.createElement("i");
    paletteButton.classList.add("fas");
    paletteButton.classList.add("fa-palette");
    paletteButton.onclick = () => changePalette(false);
    document.getElementsByTagName("main")[0].appendChild(paletteButton);
}


function changePalette(silent) {
    // Increments the schemes counter
    current = (current + 1) % schemes.length;
    localStorage.setItem("scheme", current);

    // Gets color scheme
    let scheme = schemes[current];

    // Sets colors
    let style = document.documentElement.style;
    style.setProperty("--background", scheme[1]);
    style.setProperty("--text", scheme[2]);
    style.setProperty("--link", scheme[3]);

    // Gives a feedback
    if (!silent) {
        alert(scheme[0] + " theme plugged in!");
    }
}
