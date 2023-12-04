// Pseudocode

// auf Bildclicks reagieren/lauschen
function enlargeImage(clickedImage) {
  // angeklicktes groß darstellen
  const largePreview = document.getElementById("large-preview");

  largePreview.src = clickedImage.src;
  largePreview.alt = clickedImage.alt;

  // fokus auf geklicktes Bild verschieben
  const focusedImage = document.querySelector(".preview-active");
  focusedImage.classList.remove("preview-active");

  clickedImage.classList.add("preview-active");
}

// auf Submit Button reagieren
function openSubmitModal() {
  // modal öffnen
  const modal = document.getElementById("submit-modal");
  modal.classList.add("open");
}

// auf X clicks reagieren
function closeSubmitModal() {
  // modal schließen
  const modal = document.getElementById("submit-modal");
  modal.classList.remove("open");

  // email zurücksetzen
  const emailField = document.getElementById("email-field");
  emailField.value = "";
}

/**
 * button deaktivieren wenn nutzer email nicht valide ist
 **/

// auf button click reagieren
function validateEmail() {
  // eingabe auslesen
  const emailField = document.getElementById("email-field");
  const userInput = emailField.value;

  // nutzereingabe prüfen: valide email?
  const isValidEmail = userInput.includes("@");

  const errorMsg = document.getElementById("error-msg");

  // wenn valide, "submit"
  if (isValidEmail) {
    // reset error
    errorMsg.textContent = "";

    // "submit" durchführen (bspw. Server-Call)
    console.log("Submit with email", userInput);

    // close modal
    closeSubmitModal();
  } else {
    // sonst Fehler anzeigen
    errorMsg.textContent = "Fehlerhafte E-Mail";
  }
}
