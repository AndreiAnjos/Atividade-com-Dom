function mudarCor() {
    let p = document.querySelector('p')
    p.style.color = '#' + Math.floor(Math.random()*16777215).toString(16)
}