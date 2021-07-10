'use strict';

//api.github.com/orgs/Adalab
const inputElement = document.querySelector('.js-input ');
const btnElement = document.querySelector('.js-btn');
const nameElement = document.querySelector('.js-org-result');
const urlElement = document.querySelector('.js-url-result');
const blogElement = document.querySelector('.js-blog-result');
const emailElement = document.querySelector('.js-email-result');
const img = document.querySelector('.js-img');
const repoElement = document.querySelector('.js-repo-result');
const listElement = document.querySelector('.js-list');

const form = document.querySelector('.js-form');

function getOrganization() {
  const orgName = inputElement.value;
  fetch(`https://api.github.com/orgs/${orgName}`)
    .then((response) => response.json())

    .then((data) => {
      if (!data.name) {
        console.log('No such organization', data);
        nameElement.innerHTML = '¯\\_(ツ)_/¯';
        urlElement.innerHTML = '¯\\_(ツ)_/¯';
        blogElement.innerHTML = '¯\\_(ツ)_/¯';
        emailElement.innerHTML = '¯\\_(ツ)_/¯';
        img.src = '../images/no-avatar.png';
        img.alt = 'No such organization in GitHub';
        repoElement.innerHTML = '¯\\_(ツ)_/¯';
      } else {
        console.log(data);
        nameElement.innerHTML = data.name;
        urlElement.innerHTML = data.html_url;
        urlElement.href = data.html_url;
        urlElement.target = '_blank';
        blogElement.innerHTML = data.blog;
        blogElement.href = data.blog;
        blogElement.target = '_blank';
        emailElement.innerHTML = data.email;
        emailElement.href = 'mailto:' + data.email;
        img.src = data.avatar_url;
        img.alt = 'Avatar';
        repoElement.innerHTML = data.public_repos + '.';
        const reposElement = data.repos_url;
        return fetch(reposElement);
      }
    })

    .then((listResponse) => listResponse.json())

    .then((listData) => {
      console.log(listData);
      for (let i = 0; i < listData.length; i++) {
        listElement.innerHTML += `<li class="list-element"> <a href="${listData[i].html_url}" class="js-url-result link" title="Link to ${listData[i].name}"  target="_blank">${listData[i].name}</a></li>`;
      }
    });
}

function handleForm(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleForm);

btnElement.addEventListener('click', getOrganization);
