const productImages= document.querySelectorAll(".product-imges img");
const productImagesSlide = document.querySelector(".imge-sliders");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove("acttive");
        item.classList.add('active');
        productImagesSlide.style.background = `url('${item.src}')`;
        activeImageSlide = i;
    });
});

// toggle btn

const sizeBtns = document.querySelectorAll('.size-btn');
let checkeBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkeBtn].classList.remove('check');
        item.classList.add('check');
        checkeBtn = i;
    })
})