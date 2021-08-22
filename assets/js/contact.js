// handleblur
var form = document.getElementById("contact-form");
form &&
  form.subject.addEventListener("blur", function (event) {
    validateField(this);
  });
form &&
  form.message.addEventListener("blur", function (event) {
    validateField(this);
  });

function validateField(field) {
  var isOk = false;
  if (field.type === "text") {
    if (field.value.length < 3) {
      onInvalid(field, "Subject should contain at least 3 characters");
    } else if (field.value.length > 60) {
      onInvalid(field, "Subject should be at most 60 characters");
    } else {
      onValid(field);
      isOk = true;
    }
  } else {
    if (field.value === "") {
      onInvalid(field, "Please enter a message");
    } else {
      onValid(field);
      isOk = true;
    }
  }
  return isOk;
}

function onInvalid(field, feedback) {
  field.style.border = "1px solid tomato";
  field.nextElementSibling.innerHTML = feedback;
  field.nextElementSibling.style.display = "block";
}

function onValid(field) {
  field.style.border = "1px solid rgb(61, 164, 233)";
  field.nextElementSibling.style.display = "none";
}

function validateAll(form) {
  validateField(form.subject) &&
    validateField(form.message) &&
    gotoMail({
      subject: form.subject.value,
      message: form.message.value,
    });
}

// function submit(e) {
//   e.preventDefault();
//   // console.log(e.form)
// }

// submitForm
function submitForm(btn) {
  var form = btn.previousElementSibling;
  var values = {
    subject: form.subject.value,
    message: form.message.value,
  };
  validateAll(form);
}
// reset form

function resetForm() {
  document.getElementById("contact-form").reset();
}

// go to mail
function gotoMail(values) {
  resetForm();
  window.open(
    `mailto:jkt@gmail.com?subject=${values.subject}&body=${values.message}`
  );
}
