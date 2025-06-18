document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.querySelector('.modal-container');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalButton = document.querySelector('.modal-button.show');
  const closeButton = document.querySelector('.close-btn');

  if (modalButton) {
    modalButton.addEventListener('click', () =>
      modalContainer.classList.add('active')
    );
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', () =>
      modalContainer.classList.remove('active')
    );
  }

  if (closeButton) {
    closeButton.addEventListener('click', () =>
      modalContainer.classList.remove('active')
    );
  }
});
