const popup = document.querySelector('.popup')
const popupImage = popup.querySelector('.popup__image');
const images = document.querySelectorAll('.image');
const articles = document.querySelectorAll('.article')

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscButton);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscButton);
}

// Close popup by pressing Escape button
const handleEscButton = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

function handlePhotoClick(item) {
  popupImage.src = item.alt;

  openPopup(popup);
}

images.forEach((item) => {
  item.addEventListener('click', () => {
    handlePhotoClick(item)
    console.log(item.alt)
  });
})

// Close popup by click on wrapper
popup.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popup)
  }
  if (evt.target.classList.contains('popup__close-icon')) {
    closePopup(popup)
  }
})


articles.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    const articleContent = item.querySelector('.article__content')
    if (evt.target.classList.contains('article__title')) {
      articleContent.classList.toggle('article__content_active')
    }
  })
})
