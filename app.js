'use strict';

const showMenu = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.hide-mobile-menu');

const previewBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const personImage = document.getElementById('person');
const personTitle = document.querySelector('.review-title');
const personDesc = document.querySelector('.review-description');
const reviews = [
  {
    img: '/assets/icons/avatar.png',
    title: 'Abdullahi Ahmd',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
  },
  {
    img: '/assets/icons/person1.png',
    title: 'Ibrahim',
    desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,',
  },
  {
    img: '/assets/icons/person2.png',
    title: 'Maryam Musa',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
  },
];
//Initial review value
let firstReviewValue = 0;
//Mobile Menu Toggle
showMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('hide-mobile-menu');

  console.log(reviews[0].img);
});

function reviewItem(item) {
  const items = reviews[item];
  personImage.src = items.img;
  personTitle.textContent = items.title;
  personDesc.textContent = items.desc;
}
//Testimonial navigation

window.addEventListener('DOMContentLoaded', function () {
  reviewItem(firstReviewValue);
});
previewBtn.addEventListener('click', function () {
  firstReviewValue--;
  if (firstReviewValue < 0) {
    firstReviewValue = reviews.length - 1;
  }
  reviewItem(firstReviewValue);
});

nextBtn.addEventListener('click', function () {
  firstReviewValue++;
  if (firstReviewValue > reviews.length - 1) {
    firstReviewValue = 0;
  }
  reviewItem(firstReviewValue);
});
