const navbar = document.querySelector('.navbar');
const mobi = document.querySelector('.navbar_mobile');
const button = document.querySelector('.b')


button.addEventListener('click', function(){
    mobi.classList.toggle('active');
})



window.addEventListener('scroll', function(){
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
})