const cats = [
  {
    name: "APOLO",
    nickname: "AU AU DAS NEVES",
    background: "#47f0ff",
    location: "Do Conde - PB",
    birthdate: "07/12/2015",
    images: [
      "/images/apolo/apolo-img-01.png",
      "/images/apolo/apolo-img-02.png",
      "/images/apolo/apolo-img-03.png",
      "/images/apolo/apolo-img-04.png"
    ],
    description: [
      "Veio do Conde junto dos irmãos, Lua e Marte. Adora dormir com a cabeça pendurada, brigar com Batatinha e carinho de Sky. Não gosta muito de ficar sozinho, se a gente aqui de casa estiver reunido, ele gosta de ficar por perto.",
      "Chamado também de “o au au da casa” porque quando fica miando para entrar em algum lugar, parece “au au”. Meio carente, mas não gosta que pegue no colo, prefere carinho só na cabeça e que ele mesmo vá atrás."
    ],
    age: "4 anos",
    weight: "4.5 kg",
    gender: "Macho",
    fur: "Médio",
    eyes: "Azul claro",
    skills: [
      { name: "Nível de paciência", rating: 2 },
      { name: "Subir nos lugares", rating: 5 },
      { name: "Voz (volume)", rating: 4 },
      { name: "Carinho", rating: 3 },
      { name: "Habiliade especial", rating: "Super sólido" }
    ],
    captionImg02: "O NOME FOI DO APOLO DE PERCY JACKSON"
  },
  {
    name: "AURORA",
    nickname: "O TESTE DE DNA",
    background: "#288891ff",
    location: "Lagoa Seca - PB",
    birthdate: "07/12/2015",
    images: [
      "/images/apolo/apolo-img-01.png",
      "/images/apolo/apolo-img-02.png",
      "/images/apolo/apolo-img-03.png",
      "/images/apolo/apolo-img-04.png"
    ],
    description: [
      "Came from Do Conde - PB with siblings, Lua and Marte. Loves to sleep with head hanging, play with Batatinha and cuddle with Sky. Likes to stay with sibling and with us when we're together in a room.",
      "Also called 'the house dog' because when meowing to enter somewhere, it sounds like 'au au'. Acts a bit stubborn but is affectionate, just doesn't like being held, prefers head pats and to go where it wants."
    ],
    age: "2 years",
    weight: "4.5 kg",
    gender: "Female",
    fur: "Short",
    eyes: "Green",
    skills: [
      { name: "Open kitchen door", rating: 3 },
      { name: "Climb on places", rating: 5 },
      { name: "Voice (volume)", rating: 4 },
      { name: "Affection", rating: 3 },
      { name: "Special skill", rating: "Super" }
    ],
    captionImg02: "Named after Apollo from Percy Jackson"
  },


];


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
