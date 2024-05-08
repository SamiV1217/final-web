$(document).ready(function() {
     $('#volunteerBtn').on('click', function() {
       $('#contact-form').removeClass('hidden');
     });

     $('#prev-arrow').hover( function() {
      $('.prev-charity').fadeIn('slow');
    },
    function() {
      $('.prev-charity').fadeOut('slow');
    }
  );
   $('#next-arrow').hover( function() {
    $('.next-charity').fadeIn('slow');
  },
  function() {
    $('.next-charity').fadeOut('slow');
  }
);
   });

document.getElementById('form').addEventListener("submit", validateForm);

function validateForm(evt) {
  var phoneValidate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //https://www.w3resource.com/javascript/form/phone-no-validation.php
  let phone = document.getElementById("phoneInput").value;
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let isValid = true;

  if(name == "") {
    alert("Name cannot be empty");
    isValid = false;
  }
  if (!phone.match(phoneValidate) || phone == "") {
      alert("Please enter a valid phone number");  
      isValid = false;
  }

  if(email == "") {
      alert("Email cannot be empty");
      isValid = false;
  }

  if (!isValid) {
    evt.preventDefault(); // Prevent the form submission if validation fails
  }
}