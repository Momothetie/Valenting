const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;

noBtn.addEventListener("click", () => {
    scale += 0.3;

    // Le bouton YES grossit
    yesBtn.style.transform = `scale(${scale})`;

    // Le bouton NO rétrécit
    noBtn.style.transform = `scale(${1 - scale / 5})`;

    // Quand NON devient trop petit → disparaît
    if (scale > 3) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 class="final-text">
      Bonne réponse ! On dirait pas mais j'ai vraiment passé 4h à faire ce petit truc de con là PTDRRR🤣💀
    </h1>
  `;
});
