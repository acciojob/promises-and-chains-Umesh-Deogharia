let ageInput = document.querySelector("#age");
let nameInput = document.getElementById("name");
let submitButton = document.querySelector("#btn");
let ageValidate = document.querySelector("#ageValidate");
let nameValidate = document.querySelector("#nameValidate");

ageValidate.style.display = "none";
nameValidate.style.display = "none";

submitButton.addEventListener("click", Validation);

function Validation(e) {
  let isValid = true;
  e.preventDefault();
  if ((ageInput.value.trim() ==="")) {
    ageValidate.style.display = "block";
    isValid = false;
  } else {
    ageValidate.style.display = "none";
  }

  if ((nameInput.value.trim() === "")) {
    nameValidate.style.display = "block";
    isValid = false;
  } else {
    nameValidate.style.display = "none";
  }

  if (isValid) {
    Result();
  }
}

function Result() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (parseInt(ageInput.value) > 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then((message) => {
      alert(message);
    })
    .catch((err) => {
      alert(err);
    });
}
