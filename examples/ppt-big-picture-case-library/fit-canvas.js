function fitCanvas() {
  const canvas = document.querySelector(".canvas");
  if (!canvas) return;
  let stage = document.querySelector(".stage");
  if (!stage) {
    stage = document.createElement("div");
    stage.className = "stage";
    canvas.parentNode.insertBefore(stage, canvas);
    stage.appendChild(canvas);
  }
  const scale = Math.max(0.1, Math.min((window.innerWidth - 32) / 1920, (window.innerHeight - 32) / 1080));
  document.documentElement.style.setProperty("--stage-scale", scale);
  document.documentElement.style.setProperty("--stage-w", `${1920 * scale}px`);
  document.documentElement.style.setProperty("--stage-h", `${1080 * scale}px`);
}
window.addEventListener("resize", fitCanvas);
fitCanvas();
