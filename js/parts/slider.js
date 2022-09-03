function slider() {
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next'),    
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);    

    function showSlides(n) {
                     
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;        
        slides.forEach(item => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    prev.addEventListener('click', function() {        
        showSlides(slideIndex -= 1);             
    });

    next.addEventListener('click', function() {        
        showSlides(slideIndex += 1);                
    });

    dotsWrap.addEventListener('click', function(e) {
        for (let i = 0; i < dots.length; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i]) {
                showSlides(slideIndex = i + 1);
            }
        }        
    });
}

export default slider;