// Variales globales:
let formSede;
let refSede;
let tbodyTablaSede;
const CREATE = "Insertar Sede";
const UPDATE = "Modificar Sede";
let modo = CREATE;
let refSedeAEditar;

function enviarSedeAFirebase(event) {
	event.preventDefault();
	switch (modo) {
		case CREATE:
			// Insertando datos de Sede, al FIrebase
			refSede.push({
				sedeNombre: event.target.sedeNombre.value,
				sedeUbicacion: event.target.sedeUbicacion.value,
				sedeSuministro: event.target.sedeSuministro.value,
			});
			break;

		case UPDATE:
			// Guardando o actualizando las Sede editadas, en Firebase
			refSedeAEditar.update({
				sedeNombre: event.target.sedeNombre.value,
				sedeUbicacion: event.target.sedeUbicacion.value,
				sedeSuministro: event.target.sedeSuministro.value,
			});   
			modo = CREATE;
			document.getElementById("btn-insertar-sede").value = CREATE;
			break;
	}
	// Despues de insertar y guardar los datos, Reseteamos (limpiamos) los campos del formulario
	formSede.reset();
}


// los datos que fueron insertados en Firebase, mostrarlos en la Tabla Diagnostico
const mostrarSedeDeFirebase = () => {
	refSede.on("value", function (snap) {
		let datos = snap.val();
		let filasSedeAMostrar = "";
		for (let key in datos) {
			filasSedeAMostrar += "<tr>" +
													"<td>" + datos[key].sedeNombre + "</td>" +
													"<td>" + datos[key].sedeUbicacion + "</td>" +
													"<td>" + datos[key].sedeSuministro + "</td>" +
													"<td>" + (`${datos[key].sedeSuministro}+ ${2}`) + "</td>" +
													"<td> --- </td>" +
													"<td>" +
													'<button class="btn btn-danger blue darken-2 completar" onclick="completarSedeDeFirebase(this)" data-sede ="' + key + '">' +
													'<ion-icon src="../IMG/write.svg" size="small"></ion-icon>' +
													'</button>' +
													"</td>" +
													"<td>" +
													'<button class="btn btn-danger blue darken-2 borrar" onclick="borrarSedeDeFirebase(this)" data-sede ="' + key + '">' +
													'<ion-icon src="../IMG/trash.svg" size="small"></ion-icon>' +
													'</button>' +
													"</td>" +
													"</tr>";
		}
		tbodyTablaSede.innerHTML = filasSedeAMostrar;
		if (filasSedeAMostrar != "") {
			let elementosEditablesSede = document.getElementsByClassName("completar");
			for (let i = 0; i < elementosEditablesSede.length; i++) {
				elementosEditablesSede[i].addEventListener("click", completarSedeDeFirebase, false);
			}

			let elementosBorrablesSede = document.getElementsByClassName("borrar");
			for (let i = 0; i < elementosBorrablesSede.length; i++) {
				elementosBorrablesSede[i].addEventListener("click", borrarSedeDeFirebase, false);
			}
		}
	});
}

const completarSedeDeFirebase = (e) => {
	let keySedeAEditar = e.getAttribute("data-sede");
	refSedeAEditar = refSede.child(keySedeAEditar);
	refSedeAEditar.once("value", function (snap) {
		let datos = snap.val();
		document.getElementById("sede-nombre").value = datos.sedeNombre;
		document.getElementById("sede-ubicacion").value = datos.sedeUbicacion;
		document.getElementById("sede-suministro").value = datos.sedeSuministro;
	});
	document.getElementById("btn-insertar-sede").value = UPDATE;
	modo = UPDATE;
}

const borrarSedeDeFirebase = (e) => {
	let keySedeABorrar = e.getAttribute("data-sede");
	let refSedeABorrar = refSede.child(keySedeABorrar);
	refSedeABorrar.remove();
}

const inicializarSede = () => {
	formSede = document.getElementById("form-sede");
	tbodyTablaSede = document.getElementById("tbody-tabla-sede");

	formSede.addEventListener("submit", enviarSedeAFirebase, false);
	// document.getElementById("btn-insertar-sede").addEventListener("click", () =>{
	//     enviarSedeAFirebase()
	// });

	refSede = firebase.database().ref().child("RegistroDeSedePorEmpresa");
	mostrarSedeDeFirebase();
}


window.onload = inicializarSede;
