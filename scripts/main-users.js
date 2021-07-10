'use strict';
const btn = document.querySelector('.js-btn2');
const userElement2 = document.querySelector('.js-user-result2');
const nameElement2 = document.querySelector('.js-name-result2');
const locationElement2 = document.querySelector('.js-location-result2');
const urlElement2 = document.querySelector('.js-url-result2');
const img2 = document.querySelector('.js-img2');
const bio = document.querySelector('.js-bio-result2');
const repoElement2 = document.querySelector('.js-repo-result2');
const inputElement2 = document.querySelector('.js-input2');
const followersElement = document.querySelector('.js-followers-result2');
const followingElement = document.querySelector('.js-following-result2');
const twitter = document.querySelector('.js-twitter-result2');

const form2 = document.querySelector('.js-form2');

function getGitHubUser() {
  const userName = inputElement2.value;

  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'Not Found') {
        console.log(data);
        userElement2.innerHTML = '¯\\_(ツ)_/¯';
        nameElement2.innerHTML = '¯\\_(ツ)_/¯';
        locationElement2.innerHTML = '¯\\_(ツ)_/¯';
        urlElement2.innerHTML = '¯\\_(ツ)_/¯';
        img2.src = '../images/no-avatar.png';
        img2.alt = `No such user in GitHub`;
        bio.innerHTML = '¯\\_(ツ)_/¯';
        repoElement2.innerHTML = '¯\\_(ツ)_/¯';
        followersElement.innerHTML = '¯\\_(ツ)_/¯';
        followingElement.innerHTML = '¯\\_(ツ)_/¯';
        twitter.innerHTML = '¯\\_(ツ)_/¯';
      } else {
        userElement2.innerHTML = data.login + '.';
        nameElement2.innerHTML = data.name + '.';
        locationElement2.innerHTML = data.location + '.';
        urlElement2.innerHTML = data.html_url;
        urlElement2.href = data.html_url;
        urlElement2.target = '_blank';
        img2.src = data.avatar_url;
        img2.alt = `${data.name}'s avatar`;
        bio.innerHTML = data.bio;
        repoElement2.innerHTML = data.public_repos + '.';
        followersElement.innerHTML = data.followers + '.';
        followingElement.innerHTML = data.following + '.';
        twitter.href = 'https://twitter.com/' + data.twitter_username;
        twitter.innerHTML = '<i class="fab fa-twitter twitter"></i> ';
        twitter.innerHTML += '@' + data.twitter_username;
      }
    });
}

function handleForm(ev) {
  ev.preventDefault();
}
form2.addEventListener('submit', handleForm);

btn.addEventListener('click', getGitHubUser);
