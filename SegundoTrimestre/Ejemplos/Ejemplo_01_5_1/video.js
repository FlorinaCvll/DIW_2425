function accionPlay()
{
    if(!medio.paused && !medio.ended)
    {
        medio.pause();
        play.value='\u25BA'; //\u25BA
        document.body.style.backgroundColor = '#fff';
    }
    else
    {
        medio.play();
        play.value='||';
        document.body.style.backgroundColor = 'grey';
    }
}
function accionReiniciar()
{
    //Usar propiedad .currentTime
    //Reproducir el vídeo
    //Cambiar el valor del botón a ||
    medio.currentTime = 0;
    medio.play();
    play.value='||';
    document.body.style.backgroundColor = 'grey';


}
function accionRetrasar()
{
    medio.currentTime =  medio.currentTime-1;
    if (medio.currentTime < 0) {
        medio.currentTime = 0;
        medio.play();
        play.value='||';
        document.body.style.backgroundColor = 'grey';
    }
    //Usar propiedad .curentTime
    //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
    //Contemplar que no existen valores mayores a medio.duration
    medio.currentTime =  medio.currentTime+1;
    if (medio.currentTime > medio.duration){
        medio.currentTime = 0;
        medio.play();
        play.value='||';
        document.body.style.backgroundColor = 'grey';
    }
}
function accionSilenciar()
{
    //Utilizar medio.muted = true; o medio.muted = false;
    if (medio.muted === false){
        medio.muted = true;
        play.value='🔊';
    } else {
        medio.muted = false;
        play.value='🔇';
    }
}
function accionMasVolumen()
{
    //Contemplar que el valor máximo de volumen es 1
    medio.volume = medio.volume + 0.1;
    if (medio.volume > 1){
        medio.volume = 1;
    }
}
function accionMenosVolumen()
{
    //Contemplar que el valor mínimo de volumen es 0
    medio.volume = medio.volume - 0.1;
    if (medio.volume < 0){
        medio.volume = 0;
    }
}

function iniciar()
{

    medio=document.getElementById('medio');
    play=document.getElementById('play');
    reiniciar=document.getElementById('reiniciar');
    retrasar=document.getElementById('retrasar');
    adelantar=document.getElementById('adelantar');
    silenciar=document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);