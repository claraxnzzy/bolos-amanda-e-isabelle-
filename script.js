 
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("ativo");

  menuBotao.textContent = aberto ? "✕" : "☰";
  menuBotao.setAttribute("aria-expanded", String(aberto));
});

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
    menuBotao.textContent = "☰";
    menuBotao.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("ano").textContent =
  new Date().getFullYear();
