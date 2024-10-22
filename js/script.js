function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        overlay.style.display = 'none';
        mainContent.style.marginLeft = '0'; // Reset margin on close
    } else {
        sidebar.style.left = '0px';
        overlay.style.display = 'block';
        mainContent.style.marginLeft = '0px'; // Adjust main content when menu is open
    }
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
    mainContent.style.marginLeft = '0'; // Reset margin when closing
}
