const btn = document.querySelector('#no')

btn.addEventListener('mouseover', function () {
    const x = Math.floor(Math.random()*500)
    const y = Math.floor(Math.random()*500)
    btn.style.transform = `translate(${x}px, ${y}px)`
    btn.style.transition = `0.8s`
})

btn.addEventListener('click', function() {
    alert('EDI WOW')
})



