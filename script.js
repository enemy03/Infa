// MENU BURGER

const menu_burger = document.querySelector('.menu_burger');
const close_wrap = document.querySelector('.wrap_close');
const aside = document.querySelector('aside');


menu_burger.addEventListener('click', () => {
    aside.classList.add('active')
})

close_wrap.addEventListener('click', () => {
    aside.classList.remove('active')
})


// SECTION SECOND

const img = document.querySelector('section.second article .wrap_img');
const img_2 = document.querySelector('section.second article.second .wrap_img.bottom');
const img_third = document.querySelector('.wrap_third .wrap_img');
const img_sixth = document.querySelector('.wrap_sixth .wrap_img');
const img_fourth_2 = document.querySelectorAll('.wrap_fourth_2 .wrap_img')

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (scrollTop > img.offsetTop + img.clientHeight + window.innerHeight / 5) {
        img.classList.add('active')
    }

    if (scrollTop > img_2.offsetTop + img_2.clientHeight + window.innerHeight / 5) {
        img_2.classList.add('active')
    }

    if (scrollTop > img_third.offsetTop + img_third.clientHeight - window.innerHeight) {
        img_third.classList.add('active')
    }

    if (scrollTop > img_sixth.offsetTop + img_sixth.clientHeight - window.innerHeight) {
        img_sixth.classList.add('active')
    }

    img_fourth_2.forEach((im) => {
        if (scrollTop > im.offsetTop + im.clientHeight + 3 * window.innerHeight) {
            im.classList.add('active')
        }
    })
})


// ARROW

const div_arrow = document.querySelector('.arrow');

window.addEventListener('scroll', () => {
    let sizeOnTop = window.scrollY;
    if (sizeOnTop > 100) {
        div_arrow.classList.add('active')
    } else if (sizeOnTop < 100) {
        div_arrow.classList.remove('active')
    }

})