let menu = document.querySelector('.nav-list')
let toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
   menu.classList.toggle('change')
   toggle.classList.toggle('change')
})


document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () =>{
   menu.classList.remove('change')
   toggle.classList.remove('change')
}))