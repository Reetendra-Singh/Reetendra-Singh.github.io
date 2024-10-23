
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    
    // Check if the sidebar is hidden (left: -250px) and toggle its visibility
    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
        sidebar.style.left = "0"; // Show the sidebar
        overlay.style.display = "block"; // Show the overlay
    } else {
        sidebar.style.left = "-250px"; // Hide the sidebar
        overlay.style.display = "none"; // Hide the overlay
    }
}

// Close the sidebar when clicking on the overlay
function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px"; // Hide the sidebar
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
}
