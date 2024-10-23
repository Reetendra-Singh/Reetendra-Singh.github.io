function toggleAbstract(id) {
            const abstractBox = document.getElementById(id);
            if (abstractBox.style.display === "none") {
                abstractBox.style.display = "block";
            } else {
                abstractBox.style.display = "none";
            }
        }

 // Hide all abstract boxes on page load
        document.addEventListener('DOMContentLoaded', function () {
            const abstractBoxes = document.querySelectorAll('.abstract-box');
            abstractBoxes.forEach(box => box.style.display = 'none');
        });
