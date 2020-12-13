/*
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.title').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});
*/
function swapper() {
alert("dfdfdf")
}

const select = document.querySelector('.seleccionado');
const hiddenInput = document.querySelector('#language');


document.querySelectorAll('.dropdown-menu > .dropdown-item > .lang').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		select.innerHTML = e.currentTarget.innerHTML;

		hiddenInput.value = e.currentTarget.querySelector('.vlang').innerText;
	});
});

/* const destination = document.getElementById("inputDestination");

const arrive = document.getElementById("inputArrive");

const departure = document.getElementById("inputDeparture");

document.getElementById("frmSearch").addEventListener('submit', function(e)
{

	if(destination.value === "")
	{
		destination.classList.add("bg-dark");
	}
	
	e.preventDefault();
	
}

) */


(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form) {
		form.addEventListener('submit', function (event) {
		  if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
			
		  }
		  else
		  {
			/* const destination = document.getElementById("inputDestination");

			const arrive = document.getElementById("inputArrive");
			
			const departure = document.getElementById("inputDeparture");

			const guest = document.getElementById("inputGuest");

			alert("Destino: " + destination.value + " Arriba: " + arrive.value +" Salida: " + departure.value + " Guest: " + guest.value);
		  */ }
  
		  form.classList.add('was-validated')
		  event.preventDefault()
		}, false)
	  })
  })()