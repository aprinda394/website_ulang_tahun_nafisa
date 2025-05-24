setInterval(() => {
  const b = document.createElement("div");
  b.textContent = "🎈";
  b.style.position = "absolute";
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.top = "100%";
  b.style.fontSize = "24px";
  b.style.transition = "top 5s ease-out";
  document.body.appendChild(b);
  setTimeout(() => {
    b.style.top = "-50px";
  }, 100);
  setTimeout(() => {
    b.remove();
  }, 5000);
}, 3000);
