let introPage;
let resumePage;
let lifePage;
let contactPage;
let allPages;

function init() {
  introPage = document.querySelector('main > section[data-page="intro"]');
  resumePage = document.querySelector('main > section[data-page="resume"]');
  lifePage = document.querySelector('main > section[data-page="life"]');
  contactPage = document.querySelector('main > section[data-page="contact"]');
  allPages = document.querySelectorAll("main section");
  hideAllPages();
  revealPage(introPage);
}

function hideAllPages() {
  allPages.forEach((page) => {
    page.style.display = "none";
  });
}

function revealPage(page) {
  page.style.display = "block";
}

function addNavButtonListener() {
  const navButtons = document.querySelectorAll("header nav div ul a");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", (event) => {
      console.log(event.target);
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
      hideAllPages();
      revealPage(introPage);
      break;
    }
    case "#resume": {
      hideAllPages();
      revealPage(resumePage);
      break;
    }
    case "#life": {
      hideAllPages();
      revealPage(lifePage);
      break;
    }
    case "#contact": {
      hideAllPages();
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

window.onscroll = function () {
  stickyHeader();
};

window.onload = function () {
  init();

  window.onhashchange = pageNavigator;
  addHashOnStart();

  addNavButtonListener();
};
