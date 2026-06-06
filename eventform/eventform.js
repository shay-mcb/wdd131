const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const idContainer = document.querySelector("#idContainer");
const accessContainer = document.querySelector("#accessContainer");
const studentId = document.querySelector("#studentId");
const access = document.querySelector("#access");
const output = document.querySelector("#output");

function updateType() {
  const value = type.value;
  
  if(value === "student") {
    idContainer.hidden = false;
    studentId.required = true;
  } else {
    idContainer.hidden = true;
    studentId.required = false;
  }
  if(value === "guest") {
    accessContainer.hidden = false;
    access.required = true;
  } else {
    accessContainer.hidden = true;
    access.required = false;
  }
}

type.addEventListener("change", updateType);
updateType();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const eventDate = form.eventDate.value;
  const idValue = form.studentId.value.trim();
  const accessValue = form.access.value.trim();

  if(type.value === "student" && idValue.length < 9) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

  if(type.value === "guest" && accessValue !== "EVENT131") {
    output.textContent = "Enter valid access code";
    return;
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type.value}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateType();
});
          