var ctx=null, canvas=null;
function iniciar(){ /*Canvas con los elementos vistos en clase*/
    var myCanvas = document.getElementById("miCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    // 2*Math.PI es la manera corta de expresar 360 grados
    // en radianes.
    // var radianes = (Math.PI / 180) * grados;
    ctx.arc(150, 150, 50, 0,Math.PI);
    ctx.lineWith = 10;
    ctx.fillStyle = "brown";
    ctx.fill();
}
window.addEventListener("load", iniciar, false);