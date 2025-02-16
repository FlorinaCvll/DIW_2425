var ctx=null, canvas=null;
function iniciar(){ /*Canvas con los elementos vistos en clase*/
    var myCanvas = document.getElementById("miCanvas");
    var context = myCanvas.getContext("2d");
    //Cuadrados
    context.fillStyle = "rgb(186,85,211)";
    context.fillRect(5, 5, 100, 100);
    context.fillStyle = "rgb(0, 162, 232)";
    context.fillRect(40, 55, 100, 100);
    context.fillStyle = "rgba(255, 0, 0, 0.2)";
    context.fillRect(75, 105, 100, 100);
    //Circulo
    context.beginPath();
    context.fillStyle = "rgba(85,107,47, 0.5)";
    context.arc(200, 40, 40, 0, 2 * Math.PI, true);
    context.fill();
    context.beginPath();
    context.fillStyle = "rgba(0,139,139, 0.5)";
    context.arc(200, 70, 40, 0, 2 * Math.PI, true);
    context.fill();
    //Contorno Círculo
    context.beginPath();
    context.strokeStyle = "rgba(255, 0, 0, 0.5)";
    context.arc(200, 90, 40, 0, 2 * Math.PI, true);
    context.lineWidth = 3;
    context.stroke();
    //Línea
    context.beginPath();
    context.moveTo(550, 0);
    context.lineTo(0, 550);
    context.lineWidth = 2;
    context.strokeStyle = "#008080";
    context.stroke();
    //Imagen
    var img = new Image();
    img.src = 'images/eniun.png';
    img.onload = function(){
        context.drawImage(img, 110, 10);
        context.drawImage(img, 150, 40);
        context.drawImage(img, 180, 100);
        context.drawImage(img, 300, 10);
        context.drawImage(img, 350, 80);
        context.drawImage(img, 210, 300);
        context.drawImage(img, 210, 10);
        context.drawImage(img, 250, 400);
        context.drawImage(img, 280, 100);
        context.drawImage(img, 400, 350);
        context.drawImage(img, 450, 80);
        context.drawImage(img, 10, 300);
    };
    //Arcos
    context.beginPath();
    context.arc(450,150,50,Math.PI,Math.PI*0.5,false);
    context.arc(450,150,20,Math.PI*0.5,Math.PI*1,false);
    context.closePath()
    context.fill();
    context.beginPath();
    //Rectángulo
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.fillRect(300, 10, 60, 50);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.strokeRect(400, 70, 60, 50);
    //Gradiente lineal
    var grad = context.createLinearGradient(0,0,300,0);
    grad.addColorStop(0.2, 'red');
    grad.addColorStop(0.8, 'blue');
    grad.addColorStop(1, 'pink');
    context.fillStyle = grad;
    context.fillRect(250, 200, 180, 50);
    //Texto
    context.font = 'Bold 28px Tahoma';
    context.textAlign = 'center';
    context.fillStyle = 'grey';
    context.fillText('Canvas', 360, 235);
    //Sombras y arcos
    context.beginPath();
    context.shadowBlur=50;
    context.shadowColor="blue";
    context.fillStyle="black";
    context.arc(180,150,100,0,0.5*Math.PI);
    context.fill();
}
window.addEventListener("load", iniciar, false);