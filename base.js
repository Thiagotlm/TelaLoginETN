// Espera o DOM ser completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do formulário
    const form = document.querySelector(".box form");
    const usernameInput = document.querySelector(
      '.box form input[type="text"]:nth-of-type(1)'
    );
    const passwordInput = document.querySelector(
      '.box form input[type="password"]:nth-of-type(2)'
    );
  
    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário
  
      // Valida os campos do formulário
      if (usernameInput.value.trim() === "") {
        alert("Por favor, insira o nome de usuário.");
        return;
      }
  
      if (passwordInput.value.trim() === "") {
        alert("Por favor, insira a senha.");
        return;
      }
  
      // Realiza alguma ação com os dados do formulário
      alert("Login realizado com sucesso!");
    });
  });