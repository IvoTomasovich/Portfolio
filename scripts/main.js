// Implements smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//contects email.js to submit button
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("3x4kgwM0pEZ2Xrd8d")
    document.getElementById('contact-form').addEventListener('submit',function(event) {
        event.preventDefault()
        var serviceID = 'service_qfk5gph'
        var templateID = 'template_zk0796l'
        emailjs.sendForm(serviceID, templateID, this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});