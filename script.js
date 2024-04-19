document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("bookingForm");
    var bookingSuccessMsg = document.getElementById("bookingSuccessMsg");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var fname = document.getElementById("fname").value.trim();
        var lname = document.getElementById("lname").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var email = document.getElementById("email").value.trim();
        var gender = document.getElementById("gender").value.trim();
        var destination = document.getElementById("destination").value.trim();
        var date = document.getElementById("date").value.trim();
        var age = document.getElementById("age").value.trim();
        var bookingType = document.getElementById("bookingType").value.trim();
        var noOfBookings = document.getElementById("noOfBookings").value.trim();

        var phonePattern = /^[0-9]{10}$/;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fname || !lname || !phone || !email || !gender || !destination || !date || !age || !bookingType || !noOfBookings) {
            alert("All fields are required!");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Invalid phone number!");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Invalid email address!");
            return;
        }

        // Assuming validation passed, show the success message
        showBookingSuccessMessage();
    });

    function showBookingSuccessMessage() {
        // Hide the form
        form.style.display = "none";
        // Show the booking success message
        bookingSuccessMsg.style.display = "block";
    }
});
