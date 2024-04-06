// Attend que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Récupère les éléments nécessaires dans le DOM
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("comment-list");
  const errorMessage = document.getElementById("error-message");

  // Écoute l'événement de soumission du formulaire
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const message = document.getElementById("message").value;

    // Vérifie si tous les champs du formulaire sont remplis
    if (firstName && lastName && message) {
      errorMessage.style.display = "none";

      // Construit la structure HTML pour le nouveau commentaire
      const newComment = `
        <div class="flex space-x-4 text-sm text-gray-500">
          <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${message}</p>
            </div>
          </div>
        </div>
      `;

      // Insère le nouveau commentaire dans la liste des commentaires existants
      commentList.insertAdjacentHTML("beforeend", newComment);

      // Efface les champs du formulaire après soumission
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("message").value = "";
    } else {
      errorMessage.style.display = "block"; // Affiche le message d'erreur si tous les champs ne sont pas remplis
    }
  });
});
