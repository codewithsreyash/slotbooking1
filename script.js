document.addEventListener('DOMContentLoaded', function() {

    // Handle login validation
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === 'admin' && password === 'password123') {
                window.location.href = 'slot-booking.html'; // Redirect to booking page on successful login
            } else {
                loginError.style.display = 'block';
            }
        });
    }

    // Handle slot booking
    const slotForm = document.getElementById('slotForm');
    const confirmationMessage = document.getElementById('confirmation');
    
    if (slotForm) {
        slotForm.addEventListener('submit', function(event) {
            event.preventDefault();
            confirmationMessage.style.display = 'block';
        });
    }

    // Handle appointment tracking
    const trackForm = document.getElementById('trackForm');
    const trackingStatus = document.getElementById('trackingStatus');
    
    if (trackForm) {
        trackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            trackingStatus.style.display = 'block';
        });
    }

});
