function mudarTema(tema) {
  const link = document.getElementById("estilo-tema");
  link.href = `${tema}.css`;
  localStorage.setItem("temaPreferido", tema);
}

window.addEventListener("DOMContentLoaded", () => {
  const tema = localStorage.getItem("temaPreferido") || "light";
  document.getElementById("estilo-tema").href = `${tema}.css`;
});
