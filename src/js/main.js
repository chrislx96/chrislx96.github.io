import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react_components/App/App.jsx';

let introPage;
let resumePage;
let lifePage;
let contactPage;
let allPages;

ReactDOM.render((<App />),document.querySelector('#root'));

function init() {
  introPage = document.querySelector('main > section[data-page="intro"]');
  resumePage = document.querySelector('main > section[data-page="resume"]');
  lifePage = document.querySelector('main > section[data-page="hobby"]');
  contactPage = document.querySelector('main > section[data-page="contact"]');
  allPages = document.querySelectorAll("main section");
  revealPage(introPage);
}

function hideAllPages() {
  allPages.forEach((page) => {
    page.style.display = "none";
  });
}

function revealPage(page) {
  hideAllPages();
  page.style.display = "block";
}

function addNavButtonsListener() {
  const navButtons = document.querySelectorAll("header nav div ul a");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", (event) => {
      navButtons.forEach((navButton) => {
        navButton.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });
}

function addHashOnStart() {
  if (location.hash === "") {
    location.hash = "#home";
  }
}

function pageNavigator() {
  switch (location.hash) {
    case "#intro": {
      revealPage(introPage);
      break;
    }
    case "#resume": {
      revealPage(resumePage);
      break;
    }
    case "#hobby": {
      revealPage(lifePage);
      break;
    }
    case "#contact": {
      revealPage(contactPage);
      break;
    }
    default: {
    }
  }
}

function stickyHeader() {
  let header = document.querySelector("header");
  let sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = stickyHeader;


window.onload = function () {
  init();
  window.onhashchange = pageNavigator;
  addHashOnStart();
  addNavButtonsListener();
};
