// handleblur
var form = document.getElementById("comment-form");
form && form.comment.addEventListener("blur", function (event) {
    event.preventDefault();
    validateField(this);
});

function validateField(field) {
  var isOk = false;
  if (field.value === "") {
    onInvalid(field, "Please enter a some text to send.");
  } else {
    onValid(field);
    isOk = true;
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

function validateCommentForJPSchool(form) {
  validateField(form.comment) &&
    gotoMail({
      subject: "Feedback for JKT Japanese School Services",
      comment: form.comment.value,
    });
}

// submitForm
function submitCommentForJPSchool(btn) {
    btn.preventDefault();
  form = btn.previousElementSibling;
  var values = {
    comment: form.comment.value,
  };
  validateCommentForJPSchool(form);
}

// reset form
function resetForm() {
  document.getElementById("comment-form").reset();
}

// go to mail
function gotoMail(values) {
  resetForm();
  window.open(
    `mailto:jkt.mm.int@gmail.com?subject=${values.subject}&body=${values.comment}`
  );
}
