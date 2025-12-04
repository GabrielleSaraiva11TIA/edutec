// Add JS hereconst userData = sessionStorage.getItem("user");

// Se não estiver logado, redireciona
if (!userData) {
    window.location.href = "./src/pages/login/login.html"; 
}

const user = JSON.parse(userData);

// Mostra o nome do usuário
document.getElementById("nome-usuario").textContent = `Olá, ${user.name}!`;