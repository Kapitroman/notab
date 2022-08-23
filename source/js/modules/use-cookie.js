const useCookie = () => {
  const modalPanel = document.querySelector('.use-cookie');

  if (!modalPanel) {
    return;
  }

  const buttonCookie = modalPanel.querySelector('.use-cookie__button');

  const clickOkButton = () => {
    modalPanel.style.display = 'none';
  }

  buttonCookie.addEventListener('click', clickOkButton);

  modalPanel.style.display = 'block';
};

export {useCookie};
