const button = document.querySelector(".send-email-btn");
const input = document.querySelector(".email-input");
const regexp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const err = document.querySelector(".error-msg");
const errIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>'

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
  } else if(value === '') {
    err.setAttribute("visibility", "visible")
    err.innerHTML= `${errIcon}&nbsp;&nbsp;Please write your email address`
  } else {
    err.setAttribute("visibility", "visible");
    err.innerHTML= `${errIcon}&nbsp;&nbsp;Please enter a valid email`
  }
});
