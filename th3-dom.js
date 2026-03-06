const txt = document.getElementById("txt");
const inp = document.getElementById("inp");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.onclick = () => {
  alert("Chào");
};

btn2.onclick = () => {
  document.body.style.backgroundColor = "red";
};

inp.oninput = (e) => {
  txt.innerText = "Chào bạn, " + e.target.value;
};
