const seccionSeguimientoATuConsumo = document.getElementById("seccionSeguimientoATuConsumo");
const seccionRealizarUnDiagnostico = document.getElementById("seccionRealizarUnDiagnostico");
const seccionVerDashboard          = document.getElementById("seccionVerDashboard");
const seccionNuestraTecnologia     = document.getElementById("seccionNuestraTecnologia");

// botones del Menu - navBar
const btnSeguimientoATuconsumo = document.getElementById("btn-seguimientoATuconsumo");
const btnMenuRealizarUnDiagnostico = document.getElementById("btn-menuRealizarUnDiagnostico");
const btnMenuVerDashboard = document.getElementById("btn-menuVerDashboard");
const btnMenuNuestraTecnologia = document.getElementById("btn-menuNuestraTecnologia");
const btnIniciemosJuntos = document.getElementById("btn-iniciemosjuntos");

// Formularios de secciones del menu NavBar
const seccionSidebar = document.getElementById("seccionSidebar");
const slideout = document.getElementById("slide-out");
const seccionBotonMenu = document.getElementById("seccionBotonMenu");
const seccionPrincipalLoginRegistro = document.getElementById("seccionPrincipalLoginRegistro");
const seccionBienvenidaALaPlataforma = document.getElementById("seccionBienvenidaALaPlataforma");


btnIniciemosJuntos.addEventListener('click', ()=>{
    seccionBienvenidaALaPlataforma.classList.replace('show','hidden');
    seccionSeguimientoATuConsumo.classList.replace('hidden','show');
    seccionRealizarUnDiagnostico.classList.replace('show','hidden');
    seccionVerDashboard.classList.replace('show','hidden');
    seccionNuestraTecnologia.classList.replace('show','hidden');
});

btnSeguimientoATuconsumo.addEventListener('click', ()=>{
    seccionBienvenidaALaPlataforma.classList.replace('show','hidden');
    seccionSeguimientoATuConsumo.classList.replace('hidden','show');
    seccionRealizarUnDiagnostico.classList.replace('show','hidden');
    seccionVerDashboard.classList.replace('show','hidden');
    seccionNuestraTecnologia.classList.replace('show','hidden');
});

btnMenuRealizarUnDiagnostico.addEventListener('click', ()=>{
    seccionBienvenidaALaPlataforma.classList.replace('show','hidden');
    seccionSeguimientoATuConsumo.classList.replace('show','hidden');
    seccionRealizarUnDiagnostico.classList.replace('hidden','show');
    seccionVerDashboard.classList.replace('show','hidden');
    seccionNuestraTecnologia.classList.replace('show','hidden');
});

btnMenuVerDashboard.addEventListener('click', ()=>{
    seccionBienvenidaALaPlataforma.classList.replace('show','hidden');
    seccionSeguimientoATuConsumo.classList.replace('show','hidden');
    seccionRealizarUnDiagnostico.classList.replace('show','hidden');
    seccionVerDashboard.classList.replace('hidden','show');
    seccionNuestraTecnologia.classList.replace('show','hidden');
});

btnMenuNuestraTecnologia.addEventListener('click', ()=>{
    seccionBienvenidaALaPlataforma.classList.replace('show','hidden');
    seccionSeguimientoATuConsumo.classList.replace('show','hidden');
    seccionRealizarUnDiagnostico.classList.replace('show','hidden');
    seccionVerDashboard.classList.replace('show','hidden');
    seccionNuestraTecnologia.classList.replace('hidden','show');
});
