// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('.content-section');
    let found = false;

    sections.forEach(section => {
        const destinations = section.querySelectorAll('.destination');
        let sectionFound = false;

        destinations.forEach(destination => {
            const title = destination.querySelector('h3').textContent.toLowerCase();
            if (title.includes(input)) {
                destination.style.display = 'block';
                sectionFound = true;
                found = true;
            } else {
                destination.style.display = 'none';
            }
        });

        section.style.display = sectionFound ? 'block' : 'none';
    });

    if (!found) {
        alert('No destinations found.');
    }
}

