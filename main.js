document.getElementById("toggleMessage").onclick = () => {
  document.getElementById("message").classList.toggle("hidden");
};

document.getElementById("toggleDark").onclick = () => {
  document.body.classList.toggle("dark");
};

document.getElementById("cake").onclick = function () {
  this.classList.toggle("blow");
};

document.getElementById("toggleMusic").onclick = () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
};

function kirimUcapan() {
  const nama = document.getElementById("nama").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  if (!nama || !pesan) return alert("Tolong isi nama dan ucapannya ya!");
  const li = document.createElement("li");
  li.textContent = `${nama}: ${pesan}`;
  document.getElementById("listUcapan").appendChild(li);
  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
}

// Efek salju
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let snowflakes = [];

function makeFlake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    s: Math.random() * 1 + 0.5
  };
}

for (let i = 0; i < 100; i++) {
  snowflakes.push(makeFlake());
}

function updateFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(flake => {
    flake.y += flake.s;
    if (flake.y > canvas.height) flake.y = 0;
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });
  requestAnimationFrame(updateFlakes);
}
updateFlakes();

// Countdown ulang tahun (misal 17 Mei)
const countdown = document.getElementById("countdown");
const targetDate = new Date(new Date().getFullYear(), 4, 17);

function updateCountdown() {
  const now = new Date();
  let diff = targetDate - now;
  if (diff < 0) {
    // Kalau sudah lewat, hitung ke tahun depan
    targetDate.setFullYear(targetDate.getFullYear() + 1);
    diff = targetDate - now;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdown.textContent = `Menuju ulang tahun berikutnya: ${days}h ${hours}j ${minutes}m ${seconds}d`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Efek bunga dan love saat klik body
document.body.addEventListener("click", e => {
  const emoji = document.createElement("div");
  emoji.textContent = Math.random() > 0.5 ? "💖" : "🌸";
  emoji.style.position = "absolute";
  emoji.style.left = e.pageX + "px";
  emoji.style.top = e.pageY + "px";
  emoji.style.fontSize = "24px";
  emoji.style.opacity = 1;
  emoji.style.transition = "all 1s ease-out";
  document.body.appendChild(emoji);
  setTimeout(() => {
    emoji.style.top = e.pageY - 100 + "px";
    emoji.style.opacity = 0;
  }, 10);
  setTimeout(() => emoji.remove(), 1000);
});

// Efek Hujan Hati (Love Fall)
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

