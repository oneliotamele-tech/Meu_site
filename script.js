document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createFirework(x, y, colors) {
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: x,
        y: y,
        radius: random(2, 4),
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: random(-4, 4),
        speedY: random(-4, 4),
        life: 100
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;
      if (p.life <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }

  animate();

  // Fogos diferentes para cada botão
  const buttons = document.querySelectorAll("button, .btn");
  const