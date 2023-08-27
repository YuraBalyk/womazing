//---------------- подвійний slick slider Ініціалізація ----------------
$(document).ready(function() {
    $('.text-slider').slick({
      asNavFor: '.images-slider',
       dots: true,
       arrows: false,
    });
  
    $('.images-slider').slick({
      asNavFor: '.text-slider',
       dots: true,
       arrows: false,
    });
  });

  // добавляємо бекграунд до хедера при скролі
  window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});
  
//------------------------------------ slider team ------------------------------------
$(document).ready(function() {
    $('.slider-team').slick();
})
// -------------------------------- плавна прокрутка до наступної секції -------------------------
// Отримуємо всі елементи з класом 'text-slider__button-img'
const scrollButtons = document.querySelectorAll('.text-slider__button-img');

// Додаємо обробник кліка для кожної стрілки
scrollButtons.forEach((scrollButton) => {
    scrollButton.addEventListener('click', () => {
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        const windowHeight = window.innerHeight;
        const scrollToPosition = documentHeight - windowHeight;
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });
});

// --------------------------------------- вспливаче вікно форма показ. та приховати ---------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const telIcon = document.querySelector('.tel-header__tel-icon');
    const popupIcon = document.querySelector('.popup-tel__icon');
    const popup = document.querySelector('.popup-tel');

    telIcon.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'flex';
    });

    popupIcon.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
// --------------------------------------------------- вспливаче вікно форма2 показ. та приховати ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const popupButton = document.querySelector('.popup-tel__button');
    const popupContent = document.querySelector('.popup-tel__content');
    const contentAfter = document.querySelector('.content-after');

    popupButton.addEventListener('click', function(event) {
        event.preventDefault();
        popupContent.style.display = 'none';
        contentAfter.style.display = 'block';
    });

    const closeButton = document.querySelector('.content-after__button');
    closeButton.addEventListener('click', function() {
        contentAfter.style.display = 'none';
        popupContent.style.display = 'flex';
    });
});

    //==================================== TABS ==================================


    const tabNavItems = document.querySelectorAll('.shop-tabs__button');
    const tabItems = document.querySelectorAll('.item-tabs');
    document.addEventListener("click", function (e) {
      const targetElement = e.target;
      let currentActiveIndex = null;
      let newActiveIndex = null;
      if (targetElement.closest('.shop-tabs__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
          if (tabNavItem.classList.contains('active')) {
            currentActiveIndex = index;
            tabNavItem.classList.remove('active');
          }
          if (tabNavItem === targetElement) {
            newActiveIndex = index;
          }
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
      }
    });


    