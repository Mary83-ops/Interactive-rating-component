const ratings = document.querySelectorAll('.ratings span');
const cardBtn = document.getElementById('card-btn');
const cardRating = document.querySelector('.card-rating');
const cardThankyou = document.querySelector('.card-thankyou');
const rateValue = document.getElementById('rate');

let selectedRating = null;

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    selectedRating = rating;
    ratings.forEach(r => r.classList.remove('checked'));
    rating.classList.add('checked');
  });
});

cardBtn.addEventListener('click', () => {
  if (selectedRating) {
    cardRating.classList.add('hidden');
    cardThankyou.classList.remove('hidden');
    rateValue.innerText = selectedRating.innerText;
  }
});
