
const elements = document.getElementsByClassName('middlepuzzle');

for (let i = 0; i <= elements.length; i++) {
  elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('A');
  });

 elements[i].addEventListener('mouseover', function(e) {
   elements[i].classList.add('A')
 })
}