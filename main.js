"use strict";

window.addEventListener("load", () => {
  const announcement = document.querySelector(".announcement");

  setInterval(() => {
    const bgIndex = Math.floor(Math.random() * 5);

    switch (bgIndex) {
      default:
      case 0:
        announcement.style.backgroundColor = "rgb(60, 176, 203)";
        break;
      case 1:
        announcement.style.backgroundColor = "rgb(80, 186, 168)";
        break;
      case 2:
        announcement.style.backgroundColor = "rgb(111, 193, 122)";
        break;
      case 3:
        announcement.style.backgroundColor = "rgb(133, 118, 225)";
        break;
      case 4:
        announcement.style.backgroundColor = "rgb(178, 183, 70)";
        break;
    }
  }, 2000);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.style.top = "-4rem";
    navList.style.top = "60px";
  } else {
    header.style.top = "0";
    navList.style.top = "96px";
  }

  const screenPos = window.innerHeight / 1.15;

  const featureTextList = document.querySelector(".feature__text__list");
  const featureTextListPos = featureTextList.getBoundingClientRect().top;

  if (screenPos > featureTextListPos) {
    featureTextList.classList.add("animate");
  }

  const stepTitle = document.querySelector(".step__title");
  const stepTitlePos = stepTitle.getBoundingClientRect().top;

  if (screenPos > stepTitlePos) {
    stepTitle.classList.add("animate");
  }

  const stepContainer = document.querySelector(".step__container");
  const stepContainerPos = stepContainer.getBoundingClientRect().top;

  if (screenPos > stepContainerPos) {
    stepContainer.classList.add("animate");
  }

  const shop = document.querySelector(".shop");
  const shopPos = shop.getBoundingClientRect().top;

  if (screenPos > shopPos) {
    shop.classList.add("animate");
  }

  const product = document.querySelector(".product");
  const productPos = product.getBoundingClientRect().top;

  if (screenPos > productPos) {
    product.classList.add("animate");
  }
});

const searchBtn = document.querySelector(".nav__option__item__search");
const searchForm = document.querySelector(".nav__search");
const searchInput = document.querySelector(".nav__search__form__input");

searchBtn.addEventListener("click", () => {
  searchForm.classList.add("active");
  searchInput.focus();
});

const searchCloseBtn = document.querySelector(".nav__search__btn-close");

searchCloseBtn.addEventListener("click", () => {
  searchForm.classList.remove("active");
  searchInput.value = "";
});

const navBtn = document.querySelector(".nav__option__item__btn");
const navList = document.querySelector(".nav__list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  body.classList.toggle("hidden");
});

const videoBtn = document.querySelector(".video__btn");
const videoModal = document.querySelector(".video__modal");

videoBtn.addEventListener("click", () => {
  videoModal.classList.add("active");
});

const videoCloseBtn = document.querySelector(".video__modal__btn");

videoCloseBtn.addEventListener("click", () => {
  videoModal.classList.remove("active");
});

const body = document.querySelector("body");
const reviewContainer = document.querySelectorAll(".review__container");
const reviewModal1 = document.querySelector(".review__modal-1");

reviewContainer.forEach((review) => {
  review.addEventListener("click", () => {
    readReview(
      review.children[0].src,
      review.children[1].children[1].innerText,
      review.children[1].children[2].innerText,
      review.children[1].children[3].innerText,
      review.children[2].value,
      review.children[2].name
    );
  });
});

const reviewModal1CloseBtn = document.querySelector(
  ".review__modal-1__container__btn"
);

reviewModal1CloseBtn.addEventListener("click", () => {
  reviewModal1.classList.remove("active");

  if (!reviewModal2.classList[1]) {
    body.classList.remove("hidden");
  }
});

const reviewMore = document.querySelector(".review__more");
const reviewModal2 = document.querySelector(".review__modal-2");

reviewMore.addEventListener("click", () => {
  body.classList.add("hidden");
  reviewModal2.classList.add("active");
});

const reviewModal2CloseBtn = document.querySelector(
  ".review__modal-2__wrap__btn"
);

reviewModal2CloseBtn.addEventListener("click", () => {
  body.classList.remove("hidden");
  reviewModal2.classList.remove("active");
});

const reviewModal2Content = document.querySelectorAll(
  ".review__modal-2__wrap__container__content"
);

reviewModal2Content.forEach((review) => {
  review.addEventListener("click", () => {
    readReview(
      review.children[0].src,
      review.children[1].children[0].innerText,
      review.children[1].children[1].innerText,
      review.children[1].children[3].innerText,
      review.children[2].children[0].src,
      review.children[2].children[1].innerText
    );
  });
});

function readReview(picture, name, data, text, productPicture, productTitle) {
  body.classList.add("hidden");
  reviewModal1.classList.add("active");

  const reviewModal1Picture = document.querySelector(
    ".review__modal-1__container > img"
  );
  const reviewModal1Name = document.querySelector(
    ".review__modal-1__right__top__name"
  );
  const reviewModal1Data = document.querySelector(
    ".review__modal-1__right__top__data"
  );
  const reviewModal1Text = document.querySelector(
    ".review__modal-1__right__top__text"
  );
  const reviewModal1ProductPicture = document.querySelector(
    ".review__modal-1__right__bottom > img"
  );
  const reviewModal1ProductTitle = document.querySelector(
    ".review__modal-1__right__bottom__text__title"
  );

  reviewModal1Picture.src = picture;
  reviewModal1Name.innerText = name;
  reviewModal1Data.innerText = data;
  reviewModal1Text.innerText = text;
  reviewModal1ProductPicture.src = productPicture;
  reviewModal1ProductTitle.innerText = productTitle;
}

const faqBtn = document.querySelectorAll(".faq__container__content");

faqBtn.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.children[1].classList.toggle("active");
    faq.parentElement.children[1].classList.toggle("active");
  });
});
