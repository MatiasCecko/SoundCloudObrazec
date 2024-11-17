document.getElementById('Form').addEventListener('submit', function (event) {
  event.preventDefault();

  Swal.fire({
    position: "top-right",
    icon: "success",
    title: "Your account was successfully created!",
    confirmButtonColor: "#000000"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "login.html"; // Redirect to login.html
    }
  });
});
