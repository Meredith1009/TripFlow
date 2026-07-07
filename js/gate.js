// TripFlow v2.0 Journey Gate
const JOURNEY_PASSWORD = "ICAZM5451838";

const startJourney = document.getElementById("startJourney");
const gate = document.getElementById("gate");
const gateClose = document.getElementById("gateClose");
const journeyPassword = document.getElementById("journeyPassword");
const journeyUnlock = document.getElementById("journeyUnlock");
const journeyError = document.getElementById("journeyError");

function openGate(event) {
  event.preventDefault();
  gate.classList.remove("hidden");
  journeyPassword.focus();
}

function closeGate() {
  gate.classList.add("hidden");
  journeyPassword.value = "";
  journeyError.textContent = "";
}

function unlockJourney() {
  if (journeyPassword.value === JOURNEY_PASSWORD) {
    window.location.href = "trip.html";
  } else {
    journeyError.textContent = "Wrong password. Please try again.";
  }
}

startJourney.addEventListener("click", openGate);
gateClose.addEventListener("click", closeGate);
journeyUnlock.addEventListener("click", unlockJourney);

journeyPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockJourney();
});

gate.addEventListener("click", (event) => {
  if (event.target === gate) closeGate();
});
