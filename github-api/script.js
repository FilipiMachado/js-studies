/* const searchBtn = document.getElementById("repos-btn");
const repoList = document.getElementById("repos-results");

const getRepos = async (e) => {
  e.preventDefault();
  clearList();
  const url = "https://api.github.com/users/FilipiMachado/repos";
  const response = await fetch(url);
  const results = await response.json();

  results.forEach((item) => {
    const anchor = document.createElement("a");
    anchor.href = item.html_url;
    anchor.textContent = item.full_name;

    repoList.appendChild(anchor);
    repoList.appendChild(document.createElement("br"));
  });
};

const clearList = () => {
  repoList.innerHTML = "";
};

searchBtn.addEventListener("click", getRepos);

 */

/* const searchBtn = document.getElementById("repos-btn");
const repoList = document.getElementById("repos-results");

function fetchData() {
  clearList();
  fetch("https://api.github.com/users/FilipiMachado/repos")
    .then((response) => response.json())
    .then((data) => {
      const list = repoList;

      data.map((item) => {
        const li = document.createElement("li");

        li.setAttribute("id", item.id);
        li.innerHTML = item.full_name;
        list.appendChild(li);
      });
    });
}

const clearList = () => {
  repoList.innerHTML = "";
};

searchBtn.addEventListener("click", fetchData);
 */

/* const repoBtn = document.getElementById("repos-btn");
const results = document.getElementById("repos-results");

function fetchData() {
  fetch("https://api.github.com/users/FilipiMachado/repos")
    .then((response) => response.json())
    .then((data) => {
      const list = results;

      data.map((item) => {
        const anchor = document.createElement("a");

        anchor.setAttribute("id", item.id);
        anchor.innerHTML = item.full_name;
        list.appendChild(anchor);
        list.appendChild(document.createElement("br"));
      });
    });
}

fetchData();
 */

const repoBtn = document.getElementById("repos-btn");
const result = document.getElementById("repos-results");

function fetchData() {
  clearData()
  fetch("https://api.github.com/users/FilipiMachado/repos")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //console.log(data);
      const list = result;

      data.map((item) => {
        const anchor = document.createElement("a");

        anchor.setAttribute("id", item.id);
        anchor.innerHTML = item.full_name;

        list.appendChild(anchor);
        list.appendChild(document.createElement("br"));
      });
    });
}

const clearData = () => {
  result.innerHTML = ""
};

repoBtn.addEventListener("click", fetchData);
