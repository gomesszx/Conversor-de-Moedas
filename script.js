let quantia = document.querySelector(".quantia")
let botaoConverter = document.querySelector("button")
let resultado = document.querySelector(".resultado")

async function converterMoeda() {
    let url = `https://api.exchangerate.host/convert?from=BRL&to=USD&amount=${quanti.value}`
   let a = await fetch(requestURL);
   let b = await Response.json();
   console.log(resultado.innerHTML = b.result)
    
}

btn.addEventListener("click" , meodas)