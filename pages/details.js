
const params = new URLSearchParams(window.location.search);
const catName = params.get("cat");


const selectedCat = cats.find(c => c.name.toUpperCase() === catName?.toUpperCase()) || cats[0];


document.getElementById("cat-name").textContent = selectedCat.name;
document.getElementById("nickname").textContent = selectedCat.nickname;
document.getElementById("location").textContent = selectedCat.location;
document.getElementById("birthdate").textContent = selectedCat.birthdate;
document.getElementById("description-01").textContent = selectedCat.description[0];
document.getElementById("description-02").textContent = selectedCat.description[1];
document.getElementById("img-01").src = selectedCat.images[0];
document.getElementById("img-02").src = selectedCat.images[1];
document.getElementById("img-03").src = selectedCat.images[2];
document.getElementById("img-04").src = selectedCat.images[3];
document.getElementById("caption-img-02").textContent = selectedCat.captionImg02;
document.getElementById("age").textContent = selectedCat.age;
document.getElementById("weight").textContent = selectedCat.weight;
document.getElementById("gender").textContent = selectedCat.gender;
document.getElementById("fur").textContent = selectedCat.fur;
document.getElementById("eyes").textContent = selectedCat.eyes;
document.body.style.backgroundColor = selectedCat.background;
document.body.style.color = selectedCat.textColor;


const colorDivs = document.querySelectorAll(".colors div");
if (selectedCat.colors) {
  colorDivs.forEach((div, i) => {
    if (selectedCat.colors[i]) {
      div.style.backgroundColor = selectedCat.colors[i];
    }
  });
}


const skillsTable = document.getElementById("skills-table");
selectedCat.skills.forEach(skill => {
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  tdName.textContent = skill.name;
  const tdRating = document.createElement("td");
  tdRating.textContent = typeof skill.rating === "number" ? "⭐".repeat(skill.rating) : skill.rating;
  tr.appendChild(tdName);
  tr.appendChild(tdRating);
  skillsTable.appendChild(tr);
});

const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

const catsNames = cats.map(c => c.name);


let currentIndex = catsNames.findIndex(name => name.toUpperCase() === catName?.toUpperCase());
if (currentIndex === -1) currentIndex = 0;


function goToCat(index) {
  const nextCatName = cats[index].name; 
  const params = new URLSearchParams();
  params.set("cat", nextCatName);
  window.location.href = `/pages/details.html?${params.toString()}`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= catsNames.length) currentIndex = 0; 
  goToCat(currentIndex);
});


prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = catsNames.length - 1; 
  goToCat(currentIndex);
});


