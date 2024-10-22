
const typingText = "I am Reetendra, a dedicated Material Science Researcher with over 7 years of experience in advancing the field. With more than 4 years focused on the growth of thin films and nanomaterials, my work spans 2D materials and oxide materials, aiming for breakthroughs in clean energy production and sensing applications. I am passionate about bridging the gap between lab research and industry applications, driving innovations that can be readily adopted.Recently, my curiosity has expanded to quantum materials, exploring their potential for neuromorphic device applications.My journey has been profoundly shaped by the invaluable guidance of my mentors and seniors, who have inspired me to persevere through every challenge.Beyond my academic pursuits, I am actively enhancing my expertise in data analytics and data science to further contribute to interdisciplinary advancements.";
let index = 0; // Initialize index for typing effect

function type() {
    const typingElement = document.getElementById('typing-text'); // Get the typing text element
    if (index < typingText.length) { // Check if there are more characters to type
        typingElement.textContent += typingText.charAt(index); // Add next character
        index++; // Increment index
        setTimeout(type, 20); // Call type function again after delay
    }
}

// Start typing effect when the page loads
document.addEventListener('DOMContentLoaded', type); // Add event listener for page load
