var ctx=null, canvas=null;
function iniciar(){ /*Canvas con los elementos vistos en clase*/
    var myCanvas = document.getElementById("miCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.font = 'Bold 20px Tahoma';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'pink';
    ctx.fillText('Flor', 50, 50);
}
window.addEventListener("load", iniciar, false);