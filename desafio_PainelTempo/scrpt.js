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
            const botao = evt.target
            botao.classList.toggle('ativo')
            if(botao.innerHTML == 'Daily'){
                botoes[1].classList.remove('ativo')
                botoes[2].classList.remove('ativo')
                // work
                work.innerHTML = `Previous - ${res[0].timeframes.daily.previous}hrs daily`
                h3[0].innerHTML = `${res[0].timeframes.daily.current}hrs`
                // play
                play.innerHTML = `Previous - ${res[1].timeframes.daily.previous}hrs daily`
                h3[1].innerHTML = `${res[1].timeframes.daily.current}hrs`
                // study
                study.innerHTML = `Previous - ${res[2].timeframes.daily.previous}hrs daily`
                h3[2].innerHTML = `${res[2].timeframes.daily.current}hrs`
                // exercice
                exercice.innerHTML = `Previous - ${res[3].timeframes.daily.previous}hrs daily`
                h3[3].innerHTML = `${res[3].timeframes.daily.current}hrs`
                // social
                social.innerHTML = `Previous - ${res[4].timeframes.daily.previous}hrs daily`
                h3[4].innerHTML = `${res[4].timeframes.daily.current}hrs`
                // self
                self.innerHTML = `Previous - ${res[5].timeframes.daily.previous}hrs daily`
                h3[5].innerHTML = `${res[5].timeframes.daily.current}hrs`
            }else if(botao.innerHTML == 'Weekly'){
                botoes[0].classList.remove('ativo')
                botoes[2].classList.remove('ativo')
                // work
                work.innerHTML = `Previous - ${res[0].timeframes.weekly.previous}hrs weekly`
                h3[0].innerHTML = `${res[0].timeframes.weekly.current}hrs`
                // play
                play.innerHTML = `Previous - ${res[1].timeframes.weekly.previous}hrs weekly`
                h3[1].innerHTML = `${res[1].timeframes.weekly.current}hrs`
                // study
                study.innerHTML = `Previous - ${res[2].timeframes.weekly.previous}hrs weekly`
                h3[2].innerHTML = `${res[2].timeframes.weekly.current}hrs`
                // exercice
                exercice.innerHTML = `Previous - ${res[3].timeframes.weekly.previous}hrs weekly`
                h3[3].innerHTML = `${res[3].timeframes.weekly.current}hrs`
                // social
                social.innerHTML = `Previous - ${res[4].timeframes.weekly.previous}hrs weekly`
                h3[4].innerHTML = `${res[4].timeframes.weekly.current}hrs`
                // self
                self.innerHTML = `Previous - ${res[5].timeframes.weekly.previous}hrs weekly`
                h3[5].innerHTML = `${res[5].timeframes.weekly.current}hrs`
            }else if(botao.innerHTML == 'Monthly'){
                botoes[1].classList.remove('ativo')
                botoes[0].classList.remove('ativo')
                // work
                work.innerHTML = `Previous - ${res[0].timeframes.monthly.previous}hrs monthly`
                h3[0].innerHTML = `${res[0].timeframes.monthly.current}hrs`
                // play
                play.innerHTML = `Previous - ${res[1].timeframes.monthly.previous}hrs monthly`
                h3[1].innerHTML = `${res[1].timeframes.monthly.current}hrs`
                // study
                study.innerHTML = `Previous - ${res[2].timeframes.monthly.previous}hrs monthly`
                h3[2].innerHTML = `${res[2].timeframes.monthly.current}hrs`
                // exercice
                exercice.innerHTML = `Previous - ${res[3].timeframes.monthly.previous}hrs monthly`
                h3[3].innerHTML = `${res[3].timeframes.monthly.current}hrs`
                // social
                social.innerHTML = `Previous - ${res[4].timeframes.monthly.previous}hrs monthly`
                h3[4].innerHTML = `${res[4].timeframes.monthly.current}hrs`
                // self
                self.innerHTML = `Previous - ${res[5].timeframes.monthly.previous}hrs monthly`
                h3[5].innerHTML = `${res[5].timeframes.monthly.current}hrs`
            }
        })
    })
})