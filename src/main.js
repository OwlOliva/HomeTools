import './style.css'
import {validateHandler} from './components/Form/form';

const modal = document.querySelector(".modal");

const overlay =  document.querySelector('.overlay');
const button = document.querySelector('.buttonModal');
const buttonSubmit = document.querySelector('.buttonSubmit');

const CloseModal = (modal,overlay) => {
  modal.classList.remove('modalOpened');
  overlay.classList.remove('modalOpened');
  document.body.style.overflow = '';
}

const OpenModal = (modal,overlay) => {
  modal.classList.add('modalOpened');
  
  overlay.classList.add('modalOpened');
  document.body.style.overflow = 'hidden';
}

button.addEventListener("click",()=> {
  OpenModal(modal,overlay)
} );

overlay.addEventListener('click',()=> {
  CloseModal(modal,overlay)
});
const closeButton = document.querySelector('.closeButton');
closeButton?.addEventListener('click',()=> {
  CloseModal(modal,overlay)
});


buttonSubmit.addEventListener('click',validateHandler);
export {CloseModal, OpenModal}