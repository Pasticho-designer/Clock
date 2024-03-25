window.addEventListener("load",Tiempo)
function Tiempo(){
    var date = new Date();
    var dia = date.getDay();
    var hora = date.getHours();
    var minute = date.getMinutes();
    var horario = hora >= 12 ? 'PM' : 'AM';
    var nombresdias = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    hora = hora % 12;
    hora = hora < 10 ? '0' + hora : hora;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("dia").innerHTML = nombresdias[dia];
    document.getElementById("horas").innerHTML = hora;
    document.getElementById("minutos").innerHTML = minute;
    document.getElementById("horario").innerHTML = horario;
    
  setTimeout(Tiempo, 200);
}