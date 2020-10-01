let cards = document.querySelectorAll('.main__item');

for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  card.onclick = function () {
    this.classList.toggle('main__item--active');
    changeTextOnMouseLeave();
  }
  getDisabled(card);
}

function getDisabled(item) {
  if (item.classList.contains('main__item--disabled')) {
    let taste = item.querySelector('.item__text-descr').textContent;
    let moto = item.querySelector('.item__text-moto');
    moto.textContent = `Печалька, ${taste} закончился.`;
  }
}

function changeTextOnMouseLeave() {

  for (let i = 0; i < cards.length; i++) {
    let item = cards[i];
    let catApprove = item.querySelector('.item__text-top');
    let moto = item.querySelector('.item__text-moto');

    if (item.classList.contains('main__item--active')) {
      moto.textContent = item.getAttribute('data-select');

      function setMouseHover() {
        if (item.classList.contains('main__item--active')) {
          catApprove.textContent = `Котэ не одобряет?`;
          catApprove.style.color = '#e62e7a';
        }
      };

      function delMouseHover() {
        catApprove.textContent = 'Сказочное заморское яство';
        catApprove.style.color = null;
      };

      item.addEventListener('mouseenter', setMouseHover);
      item.addEventListener('mouseleave', delMouseHover);

    }

    if (!cards[i].classList.contains('main__item--active') && !cards[i].classList.contains('main__item--disabled')) {
      moto.innerHTML = `Чего сидишь? Порадуй котэ, <span>
      <a href="#">купи</a>.</span>`;
      // item.removeEventListener('mouseenter', setMouseHover);
      // item.removeEventListener('mouseleave', delMouseHover);
    }
  }
}
