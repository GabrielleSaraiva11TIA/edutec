const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUp()
}

async function signUp() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value
    const password = document.querySelector("#password").value

    if(name === "" || email === "" || age === "" || password === ""){
        alert("Erro: preencha todas as informações, por favor!")
        return
    }

    const user = {
        name,
        email,
        age,
        password
    }

    const response = await fetch("http://localhost:3333/cadastrar", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    const { message } = response

    alert(message)

    window.location.href = "../../../index.html"
}

