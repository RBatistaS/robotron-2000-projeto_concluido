//COMENTÁRIOS
//aqui estamos selecionando o elemento e armazenando dependendo do tipo do elemento do html.
//const subtrair = document.querySelector("#subtrair");
//const somar = document.querySelector("#somar");
//const braco = document.querySelector("#braco");

//aqui temos um ARRAY com uma const que  armazena varios elementos de uma "class" por exemplo ou varios elementos que possui o msm nome.
//este array esta buscando o elemento dentro dos data atributes que tem um efeitos semelhantes as class e os id no html so que voltados para o JS
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatisticas]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//COMENTÁRIOS
//aqui recbemos um elemento de cada x e executamos o codigo a depender do parametros que estamos recebemos sem o foreach e impossivel esplorar cada elemento do arrey um a um.
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        //aqui estamos recebendo o tipo de texto que esta dentro das tags
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca);
    })
    
})

//COMENTÁRIOS
//este metodo foi substituido pelo do  foreach
//aqui estamos recebendo os parametros para ativar a function 
//somar.addEventListener("click", ()=> {manipulaDados("somar")});
//subtrair.addEventListener("click", ()=> {manipulaDados("subtrair")});

//operacao esta recebendo os parametros "subtrair ou somar" a partir do escutador de eventos acima
function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if (operacao ==="-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    })
}
