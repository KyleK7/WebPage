document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        console.log('Name:', name, 'Email:', email);
        alert('Thank you for contacting us!');
    });
});

function showMore() {
    alert('Here is more information about our website!');
}
