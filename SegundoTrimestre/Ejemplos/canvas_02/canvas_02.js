var ctx=null, canvas=null;
function iniciar(){ /*Canvas con los elementos vistos en clase*/
    var myCanvas = document.getElementById("miCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(5, 5);
    ctx.lineTo(5, 295);
    ctx.moveTo(295, 5);
    ctx.lineTo(295, 295);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#CC0000";
    ctx.stroke();
}
window.addEventListener("load", iniciar, false);