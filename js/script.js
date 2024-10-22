function toggleMenu() {
    const sidebar = document.getElementById('sidebar'); // Get the sidebar element
    const overlay = document.getElementById('overlay'); // Get the overlay element
    const isOpen = sidebar.style.left === '0px'; // Check if sidebar is open

    if (isOpen) {
        sidebar.style.left = '-250px'; // Close the sidebar
        overlay.style.display = 'none'; // Hide the overlay
    } else {
        sidebar.style.left = '0px'; // Open the sidebar
        overlay.style.display = 'block'; // Show the overlay
    }
}

// Function to close the sidebar menu when overlay is clicked
function closeMenu() {
    const sidebar = document.getElementById('sidebar'); // Get the sidebar element
    const overlay = document.getElementById('overlay'); // Get the overlay element
    sidebar.style.left = '-250px'; // Close the sidebar
    overlay.style.display = 'none'; // Hide the overlay
}
