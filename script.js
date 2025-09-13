const carousel = document.querySelector('.cat-images');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const items = document.querySelectorAll('.cat-images img');
const body = document.querySelector('body');

const highlightImg = document.querySelector('.selected-cat .cat-img');
const highlightName = document.querySelector('.selected-cat .cat-name');
const highlightNickname = document.querySelector('.selected-cat .cat-nickname');
const highlightPage = document.querySelector('.selected-cat .cat-page');

let index = 0;
const totalItems = items.length;


nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalItems; 
  updateCarousel();
  updateHighlight();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalItems) % totalItems; 
  updateCarousel();
  updateHighlight();
});

function updateCarousel() {
  const width = items[0].clientWidth + 25; 
  carousel.style.transform = `translateX(${-index * width}px)`;

  body.style.backgroundColor = cats[index].color;
  
}

function updateHighlight() {
  highlightImg.src = cats[index].img;
  highlightName.textContent = cats[index].name;
  highlightNickname.textContent = cats[index].nickname;
  highlightPage.href = cats[index].link;
}

updateHighlight();
