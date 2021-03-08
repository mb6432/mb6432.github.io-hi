window.onload = e => {
    let loader = document.getElementById('loader')
    console.log('loaded')
    loader.classList.add('fading')
    setTimeout(() => {

        loader.style.display = 'none'
        loader.textContent = ''
    }, 1000)


}