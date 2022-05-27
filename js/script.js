//location.pathname не поддержмвается оперой, нужно заменить

var loginButton = document.querySelector('.login-button');
var userName = document.querySelector('.user-login');
var logoutButton = document.querySelector('.logout-button');

var loginButtonFooter = document.querySelector('.login-button-footer');
var logoutButtonFooter = document.querySelector('.logout-button-footer');

loginButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  userName.classList.remove('display-none');
  logoutButton.classList.remove('display-none');
  loginButton.classList.add('display-none');
  logoutButtonFooter.classList.remove('display-none');
  loginButtonFooter.classList.add('display-none');
});

logoutButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  userName.classList.add('display-none');
  logoutButton.classList.add('display-none');
  loginButton.classList.remove('display-none');
  logoutButtonFooter.classList.add('display-none');
  loginButtonFooter.classList.remove('display-none');
});

loginButtonFooter.addEventListener('click', function(evt) {
  evt.preventDefault();
  userName.classList.remove('display-none');
  logoutButton.classList.remove('display-none');
  loginButton.classList.add('display-none');
  logoutButtonFooter.classList.remove('display-none');
  loginButtonFooter.classList.add('display-none');
});

logoutButtonFooter.addEventListener('click', function(evt) {
  evt.preventDefault();
  userName.classList.add('display-none');
  logoutButton.classList.add('display-none');
  loginButton.classList.remove('display-none');
  logoutButtonFooter.classList.add('display-none');
    loginButtonFooter.classList.remove('display-none');
  });
  
  
if (document.querySelector('#index')) {
  //оживляем модалку
  var modalButton = document.querySelector('.write-us-button');
  var popup = document.querySelector('.modal-contact-us');
  var modalCloseWriteUs = popup.querySelector('#close-modal-write-us');
  var inputName = popup.querySelector('#user-name');
  var inputEmail = popup.querySelector('#user-email');
  var inputMessage =popup.querySelector('#user-message');
  var modalForm = popup.querySelector('.modal-form');
  var modalOverlay = document.querySelector('.modal-overlay');
  
  var isStorage = true;
  var storageName = '';
  var storageEmail = '';
  
  try {
    storageName = localStorage.getItem('login');
    storageEmail = localStorage.getItem('email');
  } catch(err) {
    isStorage = false;
  }
  
  modalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('display-none');
    popup.classList.add('modal-show');
    modalOverlay.classList.remove('display-none');
    if (storageName && storageEmail) {
      inputName.value = storageName;
      inputEmail.value = storageEmail;
      inputMessage.focus();
    } else if (storageEmail) {
      inputEmail.value = storageEmail;
      inputName.focus();
    } else if (storageName) {
      inputName.value = storageName;
      inputEmail.focus();
    } else {
      inputName.focus();
    }
  });
  
  modalCloseWriteUs.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('display-none');
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    modalOverlay.classList.add('display-none');
  });
  
  modalForm.addEventListener('submit', function(evt) {
    inputName.classList.remove('input-invalid');
    inputEmail.classList.remove('input-invalid');
    inputMessage.classList.remove('input-invalid');
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      void popup.offsetWidth;
      popup.classList.add('modal-error');
      if (!inputName.value) {
        inputName.classList.remove('input-invalid');
        void inputName.offsetWidth;
        inputName.classList.add('input-invalid');
      }
      if (!inputEmail.value) {
        inputEmail.classList.remove('input-invalid');
        void inputEmail.offsetWidth;
        inputEmail.classList.add('input-invalid');
      }
      if (!inputMessage.value) {
        inputMessage.classList.remove('input-invalid');
        void inputMessage.offsetWidth;
        inputMessage.classList.add('input-invalid');
      }
    } else {
      if (isStorage) {
        localStorage.setItem('login', inputName.value);
        localStorage.setItem('email', inputEmail.value);
      }
    }
  });
  
  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!popup.classList.contains('display-none')) {
        popup.classList.add('display-none');
        popup.classList.remove('modal-error');
        modalOverlay.classList.add('display-none');
      }
      if (!popupMap.classList.contains('display-none')) {
        popupMap.classList.add('display-none');
        popupMap.classList.remove('modal-show');
        modalOverlay.classList.add('display-none');
      }
    }
  });
  
  modalOverlay.addEventListener('click', function(evt) {
    if (!popup.classList.contains('display-none')) {
      evt.preventDefault();
      popup.classList.add('display-none');
      popup.classList.remove('modal-error');
      modalOverlay.classList.add('display-none');
    }
    if (!popupMap.classList.contains('display-none')) {
      evt.preventDefault();
      popupMap.classList.add('display-none');
      modalOverlay.classList.add('display-none');
    }
  });
  
  
  //оживляем карту
  var popupMap = document.querySelector('.modal-map');
  var map = document.querySelector('#map');
  var modalCloseMap = popupMap.querySelector('#close-modal-map');
  
  map.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupMap.classList.remove('display-none');
    modalOverlay.classList.remove('display-none');
    popupMap.classList.add('modal-show');
  });
  
  modalCloseMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupMap.classList.add('display-none');
    popupMap.classList.remove('modal-show');
    modalOverlay.classList.add('display-none');
  });
  
  
  //оживляем главный сладйер
  var buttonsSLidesArray = document.querySelectorAll('.slide-button');
  var slidesArray = document.querySelectorAll('.slide');
  
  [].forEach.call(buttonsSLidesArray, function(el, i) {
    el.addEventListener('click', function(evt) {
      evt.preventDefault();
      slideChange(this.valueOf(), buttonsSLidesArray.length);
    }.bind(i));
  });
  
  
  //оживляем слайдер сервиса
  var buttonsServicesSlidesArray = document.querySelectorAll('.services-button');
  var slidesServicesArray = document.querySelectorAll('.slide-service');
  
  [].forEach.call(buttonsServicesSlidesArray, function(el, i) {
    el.addEventListener('click', function(evt) {
      evt.preventDefault();
      slideServicesChange(this.valueOf(), buttonsServicesSlidesArray.length);
    }.bind(i));
  });
} 
  
//функции
function slideChange(indexSlideOn, slideLength) {
  if (indexSlideOn >= slideLength) return;
  for (var i = 0; i < slideLength; i++) {
    if (i === indexSlideOn) {
      buttonsSLidesArray[i].classList.add('slide-button-current');
      slidesArray[i].classList.remove('display-none');
    } else {
      buttonsSLidesArray[i].classList.remove('slide-button-current');
      slidesArray[i].classList.add('display-none');
    }
  }
}

function slideServicesChange(indexSlideOn, slideLength) {
  if (indexSlideOn >= slideLength) return;
  for (var i = 0; i < slideLength; i++) {
    if (i === indexSlideOn) {
      buttonsServicesSlidesArray[i].classList.add('services-button-active');
      slidesServicesArray[i].classList.remove('display-none');
    } else {
      buttonsServicesSlidesArray[i].classList.remove('services-button-active');
      slidesServicesArray[i].classList.add('display-none');
    }
  }
}
























