let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

// count = 3
// 0, 1, 2
//

let count = list.length
let ativo = 0

next.onclick = () => {
    let activeOLD = document.querySelector('.ativo')
    activeOLD.classList.remove('ativo')

    ativo = ativo >= count - 1 ? 0 : ativo + 1
    list[ativo].classList.add('ativo')
}



prev.onclick = () => {
    let activeOLD = document.querySelector('.ativo')
    activeOLD.classList.remove('ativo')

    ativo = ativo <= 0 ? count - 1 : ativo - 1
    list[ativo].classList.add('ativo')
}