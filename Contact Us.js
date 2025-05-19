const form = document.getElementById('contactForm'); //for the form element
    const alertBox = document.getElementById('customAlert'); //for the alert box
    const overlay = document.getElementById('overlay'); //the background overlay
    const alertBtn = document.getElementById('alertBtn'); //button to close the alert

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //to prevent the default form submission

        //to show the overlay and alert box
        overlay.style.display = 'block';
        alertBox.style.display = 'block';

        //resets the form
        this.reset();
    });

    //when you click the button it will hide the alert box
    alertBtn.addEventListener('click', function() {
        alertBox.style.display = 'none';
        overlay.style.display = 'none';
    });