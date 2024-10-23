document.addEventListener("DOMContentLoaded", function () {
    const textArray = [
        "Innovating in material science with a vision to shape future technologies.",
        "Exploring metal-insulator transitions and resistive switching phenomena."
    ];
    let typingIndex = 0; // Track the current index in the array
    let textIndex = 0; // Track the current character index in the string

    function typeText() {
        if (textIndex < textArray[typingIndex].length) {
            // Append next character of the current sentence
            document.getElementById("typing-text").textContent += textArray[typingIndex].charAt(textIndex);
            textIndex++;
            setTimeout(typeText, 100); // Type the next character after 100ms
        } else {
            setTimeout(() => {
                textIndex = 0; // Reset text index
                document.getElementById("typing-text").textContent = ""; // Clear current text
                typingIndex = (typingIndex + 1) % textArray.length; // Move to next sentence or loop back
                typeText(); // Start typing the next sentence
            }, 3000); // Wait for 3 seconds before switching to the next sentence
        }
    }

    typeText(); // Initiate the typing effect
});
