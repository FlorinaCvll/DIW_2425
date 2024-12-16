var ctx=null, canvas=null;
function iniciar(){ /*Canvas con los elementos vistos en clase*/
    var myCanvas = document.getElementById("miCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; //Color
    ctx.fillRect(100, 10, 60, 50); //Ractángulo relleno
    ctx.lineWidth = 5 //ancho de contorno
    ctx.strokeStyle = "red"; //COlor
    ctx.strokeRect(200, 70, 60, 50); //Rectángulo de solo contorno
}
window.addEventListener("load", iniciar, false);