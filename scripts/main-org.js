'use strict';

//api.github.com/orgs/Adalab
const inputElement = document.querySelector('.js-input ');
const btnElement = document.querySelector('.js-btn');
const nameElement = document.querySelector('.js-org-result');
const urlElement = document.querySelector('.js-url-result');
const img = document.querySelector('.js-img');
const repoElement = document.querySelector('.js-repo-result');
const listElement = document.querySelector('.js-list');

const form = document.querySelector('.js-form');

function getOrganization() {
  const orgname = inputElement.value;
  fetch(`https://api.github.com/orgs/${orgname}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      nameElement.innerHTML = data.name;
      urlElement.innerHTML = data.html_url;
      urlElement.href = data.html_url;
      urlElement.target = '_blank';
      img.src = data.avatar_url;
      img.alt = 'Avatar';
      repoElement.innerHTML = data.public_repos + '.';
      const reposElement = data.repos_url;
      console.log(data.repos_url);
      return fetch(reposElement);
    })
    .then((listResponse) => listResponse.json())
    .then((listData) => {
      console.log(listData);
      for (let i = 0; i < listData.length; i++) {
        listElement.innerHTML += `<li> <a href="${listData[i].html_url}" class="js-url-result link"  target="_blank">${listData[i].name}</a></li>`;
      }
    });
}

function handleForm(ev) {
  ev.preventDefault();
}
form.addEventListener('submit', handleForm);

btnElement.addEventListener('click', getOrganization);
