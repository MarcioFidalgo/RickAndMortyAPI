import "./styles.css";

document.getElementById("app").innerHTML = `
<div id="ativo"></div>`;

const personagemid = document.getElementById("personagemId");
const btnGo = document.getElementById("btn-go");
const content = document.getElementById("content");
const imagem = document.getElementById("img");

btnGo.addEventListener("click", () => {
  const id = personagemid.value;
  fetchApi(id);
});

const fetchApi = (value) => {
  fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      content.innerHTML = `<h2> Nome: ${data.name}</h2><h3> Status: ${data.status}</h3><h3> Gender: ${data.gender}  <h3> Espécie: ${data.species} </h3></h3> `;
      imagem.src = data.image;
    });
};
