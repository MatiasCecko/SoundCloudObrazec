document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "matias" && password === "cecko") {
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: "You have successfully logged in!",
      confirmButtonColor: "#000000"

    });
  } else {
    Swal.fire({
      position: "top-right",
      icon: "warning",
      title: "Wrong password!",
      confirmButtonColor: "#000000",
      customClass: {
        popup: 'custom-swal' // Apply the custom class to this specific SweetAlert
      }
    });
  }

});





