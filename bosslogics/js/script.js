let mobile = document.querySelector('.mobile'),
    burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    if (burger.classList.contains('_active') && mobile.classList.contains('_active')) {
        burger.classList.remove('_active');
        mobile.classList.remove('_active');
        burger.children[0].classList.remove('_active');
        document.body.classList.remove('lock')

    }else{
        burger.classList.add('_active');
        mobile.classList.add('_active');
        burger.children[0].classList.add('_active');
        document.body.classList.add('lock');
    }
});