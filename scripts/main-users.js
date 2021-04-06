'use strict';
const btn = document.querySelector('.js-btn2');
const userElement2 = document.querySelector('.js-user-result2');
const nameElement2 = document.querySelector('.js-name-result2');
const urlElement2 = document.querySelector('.js-url-result2');
const img2 = document.querySelector('.js-img2');
const repoElement2 = document.querySelector('.js-repo-result2');
const inputElement2 = document.querySelector('.js-input2');
const followersElement = document.querySelector('.js-followers-result2');
const followingElement = document.querySelector('.js-following-result2');

const form2 = document.querySelector('.js-form2');

function getGitHubUser() {
  const userName = inputElement2.value;

  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      userElement2.innerHTML = data.login + '.';
      nameElement2.innerHTML = data.name + '.';
      urlElement2.innerHTML = data.html_url;
      urlElement2.href = data.html_url;
      urlElement2.target = '_blank';
      img2.src = data.avatar_url;
      img2.alt = `${data.name}'s avatar`;
      repoElement2.innerHTML = data.public_repos + '.';
      followersElement.innerHTML = data.followers + '.';
      followingElement.innerHTML = data.following + '.';
      console.log(data);
      // console.log(data.public_repos);
    });
}

function handleForm(ev) {
  ev.preventDefault();
}
form2.addEventListener('submit', handleForm);

btn.addEventListener('click', getGitHubUser);
