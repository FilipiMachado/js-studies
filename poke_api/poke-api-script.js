const getPokes = document.getElementById("search-button");
const pokeContainer = document.getElementById("card-container");
const pokeList = document.getElementById("card");

 function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => {
      const list = pokeList;

      data.map((item) => {
          const li = document.createElement("li");

          li.setAttribute("id", item.id);
          li.innerHTML = item.title;
          list.appendChild(li)
      })
    });
} 

/* function fetchPoke(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then((res) => res.json())
    .then((data) => {
      const list = pokeList;

      data.map((item) => {
        const li = document.createElement("li");

        li.setAttribute("id", item.id);
        li.innerHTML = item.title;
        list.appendChild(li);
      });
    });
} */

getPokes.addEventListener("click", fetchData);
