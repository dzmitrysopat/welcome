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