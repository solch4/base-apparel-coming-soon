const button = document.querySelector(".send-email-btn");
const input = document.querySelector(".email-input");
const regexp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const err = document.querySelector(".error-msg");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let value = input.value;

  if (regexp.test(value)) {
    err.setAttribute("visibility", "hidden");
    Swal.fire({
      icon: "success",
      title: "Email address sent!",
      text: "We'll keep you updated.",
      color: "hsl(0, 6%, 24%)",
      confirmButtonText: "Ok!",
      confirmButtonColor: "hsl(0, 74%, 74%)",
      iconColor: 'hsl(0, 74%, 74%)',
    });
    input.value = "";
  } else err.setAttribute("visibility", "visible");
});
