//your JS code here. If required.
let ageInput = document.querySelector("#age");
let nameInput = document.getElementById("name");
let submitButton = document.querySelector("#btn");
let ageValidate = document.querySelector("#ageValidate");
let nameValidate = document.querySelector("#nameValidate");


ageValidate.style.display = "none";
nameValidate.style.display = "none";


submitButton.addEventListener("click", Validation);
function Validation(e){
    e.preventDefault();
    if (ageInput.value.length == 0) {
      ageValidate.style.display = "block";
    }
     if (nameInput.value.length == 0) {
      nameValidate.style.display = "block";
    }
    else {
      Result();
    }

}




function Result(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageInput.value > 18) {
        resolve(`Welcome, ${nameInput.value} You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value} You aren't old enough.`);
      }
    }, 40);
  });

  promise
    .then((message) => {
      alert(message);
    })
    .catch((err) => {
      alert(err);
    });
}