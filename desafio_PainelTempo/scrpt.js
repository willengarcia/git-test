const botoes = [...document.querySelectorAll('.botoes')]
const p = [...document.querySelectorAll('.previsao')]
const h3 = [...document.querySelectorAll('.horas')]

let work = p[0]
let play = p[1]
let study = p[2]
let exercice = p[3]
let social = p[4]
let self = p[5]


botoes.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(res=>{
            const botao = evt.target.innerHTML
            if(botao.toUpperCase() == res[0].title.toUpperCase()){
                console.log('oi')
            }
        })
    })
})