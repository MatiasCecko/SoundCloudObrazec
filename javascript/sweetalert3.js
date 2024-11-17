document.getElementById('resetForm').addEventListener('submit', function (event) {
  event.preventDefault();

  Swal.fire({
    position: "top-right",
    icon: "success",
    title: "An E-mail was sent!",
    confirmButtonColor: "#000000",
    customClass: {
      popup: 'custom1-swal' // Apply the custom class to this specific SweetAlert
    }
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "login.html"; // Redirect to login.html
    }
  });
});
