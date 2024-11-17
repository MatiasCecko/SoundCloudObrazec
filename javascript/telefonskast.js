document.getElementById("phone").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ""); // Remove any non-digit characters
    input = input.substring(0, 9); // Limit to 9 digits

    // Add spaces every 3 digits
    input = input.replace(/(\d{3})(?=\d)/g, "$1 ");

    e.target.value = input;
});
