// Referencias básicas
const form = document.getElementById("postForm");
const feed = document.getElementById("feed");

// Manejar el envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");

  // Si no hay archivo, no hace nada
  if (!imageInput.files[0]) {
    return;
  }

  const title = titleInput.value;
  const description = descriptionInput.value;
  const file = imageInput.files[0];

  // Crear URL temporal para previsualizar la imagen
  const imageURL = URL.createObjectURL(file);

  // Crear elementos de la card
  const card = document.createElement("article");
  card.className = "post-card";

  const img = document.createElement("img");
  img.src = imageURL;
  img.alt = "Imagen de la publicación";

  const titleEl = document.createElement("h2");
  titleEl.className = "post-title";
  titleEl.textContent = title;

  const descEl = document.createElement("p");
  descEl.className = "post-description";
  descEl.textContent = description;

  // Sección de likes
  const likeSection = document.createElement("div");
  likeSection.className = "like-section";

  const likeButton = document.createElement("button");
  likeButton.className = "like-button";
  likeButton.textContent = "❤";

  const likeCount = document.createElement("span");
  let likes = 0;
  likeCount.textContent = "Likes: " + likes;

  // Evento para el botón de like
  likeButton.addEventListener("click", function () {
    likes = likes + 1;
    likeCount.textContent = "Likes: " + likes;
    likeButton.classList.add("liked");
  });

  likeSection.appendChild(likeButton);
  likeSection.appendChild(likeCount);

  // Armar la card
  card.appendChild(img);
  card.appendChild(titleEl);
  card.appendChild(descEl);
  card.appendChild(likeSection);

  // Agregar al feed
  feed.prepend(card);

  // Limpiar formulario
  form.reset();
});
