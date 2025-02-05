const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];
let meltedSnow = [];
const numFlakes = 75;

class Snowflake {
    constructor(layer) {
        this.layer = layer;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height; // Empezar desde fuera de la vista
        this.size = Math.random() * 4 + 2;
        this.speedY = (Math.random() * 1.5 + 0.5) * (layer + 1);
        this.speedX = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = Math.random() * 0.05 - 0.025;
        this.isMelted = false;
    }

    update() {
        if (!this.isMelted) {
            this.y += this.speedY;
            this.x += this.speedX;

            if (this.y > canvas.height - this.size) {
                this.isMelted = true;
                meltedSnow.push(this);
            }

            this.rotation += this.rotationSpeed;
            this.opacity = 0.3 + Math.sin(this.y / 100) * 0.4;
        }
    }

    draw() {
        if (!this.isMelted) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(0, this.size);
            ctx.moveTo(-this.size, 0);
            ctx.lineTo(this.size, 0);
            ctx.moveTo(-this.size * 0.7, -this.size * 0.7);
            ctx.lineTo(this.size * 0.7, this.size * 0.7);
            ctx.moveTo(this.size * 0.7, -this.size * 0.7);
            ctx.lineTo(-this.size * 0.7, this.size * 0.7);

            for (let i = 0; i < 6; i++) {
                ctx.moveTo(0, 0);
                ctx.lineTo(this.size * 0.5, 0);
                ctx.stroke();
                ctx.rotate(Math.PI / 3);
            }

            ctx.stroke();
            ctx.restore();
        }
    }
}

function initSnow() {
    for (let i = 0; i < numFlakes; i++) {
        let layer = Math.floor(Math.random() * 3);
        snowflakes.push(new Snowflake(layer));
    }
}

function meltSnow() {
    meltedSnow.forEach(flake => {
        flake.opacity -= 0.01;
        if (flake.opacity <= 0) {
            let index = meltedSnow.indexOf(flake);
            meltedSnow.splice(index, 1);
        }
    });
}

function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    });
    meltSnow();
    requestAnimationFrame(animateSnow);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    snowflakes = [];
    initSnow();
});

initSnow();
animateSnow();
