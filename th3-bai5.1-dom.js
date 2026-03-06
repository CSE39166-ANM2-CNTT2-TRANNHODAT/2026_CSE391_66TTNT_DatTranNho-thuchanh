/*const welcomeEl = document.getElementById("welcome");
const runBtn = document.getElementById("runBtn");
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");
const nameInput = document.getElementById("nameInput");
const greetingEl = document.getElementById("greeting");

runBtn.addEventListener("click", function () {
  welcomeEl.textContent = "JavaScript đã sẵn sàng hoạt động!";
  welcomeEl.style.color = "green";
});

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Nội dung đã thay đổi thành công.";
});

btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

nameInput.addEventListener("input", function () {
  greetingEl.textContent = "Xin chào, " + nameInput.value + "!";
});

const btnlightblue = document.getElementById("btnlightblue");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "lightblue";
});
*/
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", () => {
  const value = nameInput.value.trim();
  greeting.textContent = value ? `Xin chào, ${value}!` : "";
});
