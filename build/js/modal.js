document.getElementById('add-info').addEventListener('click', function() {
  document.querySelector('.overlay').classList.add('is-visible');
  document.querySelector('.modal').classList.add('is-visible');
});

document.getElementById('modal-close').addEventListener('click', function() {
  document.querySelector('.overlay').classList.remove('is-visible');
  document.querySelector('.modal').classList.remove('is-visible');

  });

