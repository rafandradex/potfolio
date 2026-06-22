// 25 de julho de 2021 10:18
// 27 de junho de 2021 06:09

const temaDoSite = localStorage.getItem('tema')
const body = document.querySelector('body')
const portfolio_cards = document.querySelector('.portfolio_cards')
const portfolio = [
    { titulo: "Seniores Online", texto: "Seniores Online é um projeto do qual foi criado para ajudar os seniores que estão nos lares.", img: "img/Capture.PNG", site: "https://senioresonline.netlify.app/" },
    { titulo: "Meu Perfil", texto: "Meu perfil foi o meu primeiro site a ser postado, é basico.", img: "img/meuperfil.PNG", site: "https://rafandradex.github.io/meuperfil/" },
    { titulo: "Portfolio", texto: "Site aleatorio que criei a uns anos atras", img: "img/portfolio.PNG", site: "https://rafandradex.github.io/portefolio/" },

]
const tema_site = document.querySelector('.tema_site')

if (!temaDoSite) {
    localStorage.setItem('tema', body.getAttribute('data-bs-theme'))
} else {
    body.setAttribute('data-bs-theme', temaDoSite)
}

temaDoSite === 'dark' ? tema_site.innerHTML = `<i class="bi bi-brightness-high-fill"></i>` : tema_site.innerHTML = `<i class="bi bi-moon-stars"></i>`


document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tema_site')
    const temaDoSite = localStorage.getItem('tema')
    if (!btn) return;

    if (temaDoSite === 'dark') {
        body.setAttribute('data-bs-theme', 'light')
        tema_site.innerHTML = `<i class="bi bi-moon-stars"></i>`
        localStorage.setItem('tema', 'light')
        console.log(btn);

    } else {
        body.setAttribute('data-bs-theme', 'dark')
        tema_site.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
        localStorage.setItem('tema', 'dark')
    }

})


if (portfolio.length > 0) {
    portfolio.forEach(card => {
        portfolio_cards.innerHTML += `
        <div class="col-lg-3">    
            <div class="card">
                <img src=${card.img} class="card-img-top" alt="Print do site Seniores Online">
                <div class="card-body">
                    <h5 class="card-title">${card.titulo}</h5>
                    <p class="card-text">${card.texto}</p>
                    <a href=${card.site} class="btn btn-primary" target="_blank">Ver
                        site</a>
                </div>
            </div>
        </div>
        `
    })
} else {
    portfolio_cards.innerHTML = `Não tenho nenhum trabalho disponivel`
}


document.addEventListener('DOMContentLoaded', () => {
    const numeroDeProjetos = document.getElementById('numeroDeProjetos')
    const projetos = portfolio.length

    const duracao = 650

    let inicio = 0
    const incremento = 1;
    const intervaloDeTempo = duracao / projetos

    const timer = setInterval(() => {
        inicio += incremento

        if (inicio >= projetos) {
            numeroDeProjetos.textContent = projetos
            clearInterval(timer)
        } else {
            numeroDeProjetos.textContent = Math.floor(inicio)
        }
    }, intervaloDeTempo)
})

document.addEventListener('DOMContentLoaded', () => {
    const numeroDeAnos = document.getElementById('numeroDeAnos')
    const dataAtual = new Date().getFullYear()
    const dataQueComecei = new Date('2024').getFullYear()
    const anosDeExperiencia = dataAtual - dataQueComecei
    const duracao = 1000

    let inicio = 0
    const incremento = 1;
    const intervaloDeTempo = duracao / anosDeExperiencia;
    const timer = setInterval(() => {
        inicio += incremento

        if (inicio >= anosDeExperiencia) {
            numeroDeAnos.textContent = anosDeExperiencia
            clearInterval(timer)
        } else {
            numeroDeAnos.textContent = Math.floor(inicio)
        }
    }, intervaloDeTempo)
})

document.addEventListener('DOMContentLoaded', () => {
    const numeroDeLinguagens = document.getElementById('numeroDeLinguagens')
    const numeroDeLinguagensUtilizadas = 7
    const duracao = 1000

    let inicio = 0
    const incremento = 1;
    const intervaloDeTempo = duracao / numeroDeLinguagensUtilizadas;
    const timer = setInterval(() => {
        inicio += incremento

        if (inicio >= numeroDeLinguagensUtilizadas) {
            numeroDeLinguagens.textContent = numeroDeLinguagensUtilizadas
            clearInterval(timer)
        } else {
            numeroDeLinguagens.textContent = Math.floor(inicio)
        }
    }, intervaloDeTempo)
})
