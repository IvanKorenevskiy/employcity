const Burger = () => {
    let burger = document.querySelector('.header__burger-wrapper');
    let menu = document.querySelector('.header__menu');
    let cross = document.querySelector('.header__cross-wrapper');

    burger.addEventListener('click', function () {
        menu.classList.add('header__menu_show');
    })

    cross.addEventListener('click', function () {
        menu.classList.remove('header__menu_show');
    })
}

export default Burger;