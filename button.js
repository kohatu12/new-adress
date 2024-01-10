const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
	  // удалим у кнопки класс btn-up_hide
	  this.el.classList.remove('btn-up_hide');
	},
	hide() {
	  // добавим к кнопке класс btn-up_hide
	  this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
	  // при прокрутке содержимого страницы
	  window.addEventListener('scroll', () => {
		// определяем величину прокрутки
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
		scrollY > 400 ? this.show() : this.hide();
	  });
	  // при нажатии на кнопку .btn-up
	  document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }
  
  btnUp.addEventListener();



  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
  }