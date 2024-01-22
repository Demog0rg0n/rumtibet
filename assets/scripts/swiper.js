const popularSwiper = new Swiper(".popular-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
})


const blogSwiper = new Swiper(".blog__swiper", {
    slidesPerView: 2,
    spaceBetween: 24,

    grid: {
        rows: 2,
    }
})