function end(){
    let section = document.querySelector('.page')
    let loader = document.querySelector('.loader')
    loader.style.display = 'none'
    section.style.display = 'flex'
}

function loader(){
    let dot1 = document.getElementsByTagName('span')[0]
    let dot2 = document.getElementsByTagName('span')[1]
    let dot3 = document.getElementsByTagName('span')[2]
    let duraçao = Math.floor(Math.random() * 11)
    if (duraçao <= 1) {
        duraçao = 2
    }

    dot1.style.animation = `loader 1.3s linear ${duraçao}`
    dot2.style.animation = `loader 1.3s linear ${duraçao}`
    dot3.style.animation = `loader 1.3s linear ${duraçao}`

    dot1.style.animationDelay = '0.2s'
    dot2.style.animationDelay = '0.5s'
    dot3.style.animationDelay = '0.7s'

    setTimeout(end, duraçao * 1000)
}

function imgSlider(anything){
    document.querySelector('.Starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

addEventListener('load', loader)