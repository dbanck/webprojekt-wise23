let likeCount = 0; // Globale Variable zum Like Zahl zu speichern

function like() {
  const likeElement = document.getElementById("likeCount"); // Element aus Dokument auslesen

  likeCount = likeCount + 1; // neue Like Zahl "berechnen"

  likeElement.textContent = likeCount; // Like Zahl ins Dokument zurückschreiben
}

/**
 * Alternative Lösung ohne Variable im JS
 */

function likeTwo() {
  const likeElement = document.getElementById("likeCount"); // Element aus Dokument auslesen

  const likeCountAsNumber = parseInt(likeElement.textContent); // Aktuelle Like-Zahl auslesen
  const newLikeCount = likeCountAsNumber + 1; // neue Like Zahl "berechnen"

  likeElement.textContent = newLikeCount; // Like Zahl ins Dokument zurückschreiben
}
