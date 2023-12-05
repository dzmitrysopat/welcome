var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 5000,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
});

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  }
	});
  }
  let options = { threshold: [0.4] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
	observer.observe(elm);
  }

  // typing
  var typed = new Typed(".typing",{
    strings:["Добро пожаловать в нашу команду!"],
    typeSpeed: 150,
    // BackSpeed: 0.5,
    // loop:true
  })

