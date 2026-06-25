// 25 de julho de 2021 10:18
// 27 de junho de 2021 06:09

const temaDoSite = localStorage.getItem('tema')
const html = document.querySelector('html')
const portfolio_cards = document.querySelector('.portfolio_cards')
const navbar = document.getElementById('navbar')
const portfolio = [
    { titulo: "Seniores Online", texto: "Seniores Online é um projeto do qual foi criado para ajudar os seniores que estão nos lares.", img: "img/Capture.PNG", site: "https://senioresonline.netlify.app/" },
    { titulo: "Meu Perfil", texto: "Meu perfil foi o meu primeiro site a ser postado, é basico.", img: "img/meuperfil.PNG", site: "https://rafandradex.github.io/meuperfil/" },
    { titulo: "Portfolio", texto: "Site aleatorio que criei a uns anos atras", img: "img/portfolio.PNG", site: "https://rafandradex.github.io/portefolio/" },

]

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open_menu')
    if(!btn) return;

    if(navbar.classList.contains('hidden_menu')) {
        navbar.classList.remove('hidden_menu')
    } else {
        navbar.classList.add('hidden_menu')
    }
})

const tema_site = document.querySelector('.tema_site')

if (!temaDoSite) {
    localStorage.setItem('tema', "dark")
} else {
    if (temaDoSite === 'light') {
        html.classList.add('light-theme')
    }
}

temaDoSite === 'dark' ? tema_site.innerHTML = `<i class="bi bi-brightness-high-fill"></i>` : tema_site.innerHTML = `<i class="bi bi-moon-stars"></i>`


document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tema_site')
    const temaDoSite = localStorage.getItem('tema')
    if (!btn) return;

    if (temaDoSite === 'dark') {
        html.classList.add('light-theme')
        tema_site.innerHTML = `<i class="bi bi-moon-stars"></i>`
        localStorage.setItem('tema', 'light')

    } else {
        html.classList.remove('light-theme')
        tema_site.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
        localStorage.setItem('tema', 'dark')
    }

})


if (portfolio.length > 0) {
    portfolio.forEach(card => {
        portfolio_cards.innerHTML += `   
        <div class="card">
            <img src=${card.img} class="card-img-top" alt="Print do site Seniores Online">
            <div class="card-body">
                <h5 class="card-title">${card.titulo}</h5>
                <p class="card-text">${card.texto}</p>
                <a href=${card.site} class="btn" target="_blank">Ver
                    site</a>
            </div>
        </div>
        `
    })
} else {
    portfolio_cards.innerHTML = `Não tenho nenhum trabalho disponivel`
}


function numeroDeProj() {
    const numeroDeProjetos = document.getElementById('numeroDeProjetos')
    const projetos = portfolio.length

    const duracao = 750

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
}

function numeroDeAnosEx() {
    const numeroDeAnos = document.getElementById('numeroDeAnos')
    const dataAtual = new Date().getFullYear()
    const dataQueComecei = new Date('2024').getFullYear()
    const anosDeExperiencia = dataAtual - dataQueComecei
    const duracao = 750

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
}

function numeroDeLinguagensUt(params) {
    const numeroDeLinguagens = document.getElementById('numeroDeLinguagens')
    const numeroDeLinguagensUtilizadas = 7
    const duracao = 750

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
}


const scrollSiteNumber = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

const obverver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            numeroDeLinguagensUt()
            numeroDeAnosEx()
            numeroDeProj()
            observer.unobserve(entry.target)
        }
    })
}, scrollSiteNumber)

const estatistica_lista = document.querySelector('.estatistica_lista')
obverver.observe(estatistica_lista)
