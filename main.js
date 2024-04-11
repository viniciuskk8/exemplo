const dias_falta = document.querySelectorAll(".dias_restantes");

function calcula(){
    const tempoObjetivo1 = new Date("20234-04-30t00-00-00");
//   const tempoObjetivo = new Date("2024-04-30T23-59-59");

    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo1 - tempoAtual
    let segundos = math.floor(tempoFinal / 1000);
    let minutos = math.floor(segundos / 60);
    let horas = math.floor(minutos / 60);
    let dias = math.floor(horas / 24);

    segundos %=60;
    minutos %=60;
    horas %=24;
}