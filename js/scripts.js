const $ = selector => document.querySelector(selector);

const busqueda = $('#busqueda');
const buttonBorrar = $('.busqueda .button');

busqueda.addEventListener('keyup', () => {
  if(busqueda.value.length > 0) {
    buttonBorrar.classList.remove('d-none');
  } else {  
    buttonBorrar.classList.add('d-none');
  }
})

buttonBorrar.addEventListener('click', () => {
  busqueda.value = '';
  busqueda.focus();
  if(busqueda.value.length > 0) {
    buttonBorrar.classList.remove('d-none');
  } else {  
    buttonBorrar.classList.add('d-none');
  }
})