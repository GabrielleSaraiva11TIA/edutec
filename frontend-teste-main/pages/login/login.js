const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    //login
    signIn()
}


async function signIn(){
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if(email === "" || password === ""){
        alert("Erro: preencha todas as informações de login!")
        return
    }

    const user = {
        email,
        password
    }

    const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    //se existir um message significa que o usuário ou a senha estão incorretos
    if(response.message) {
        alert(response.message)
        return
    }

    //desestruturação do id e do name
    const { id, name } = response

    //converto o objeto para JSON e guardo no sessionStorage
    sessionStorage.setItem("user", JSON.stringify({id, name}))
    alert("Login realizado com sucesso!")
    window.location.href = "../../../index.html"
}