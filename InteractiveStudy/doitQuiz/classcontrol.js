const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

wrap.addEventListener("click", ()=>{
    wrap.classList.toggle("on");

    // let isOn = wrap.classList.contains("on");

    // isOn ? wrap.classList.remove("on") : wrap.classList.add("on");
    // box.style.backgroundColor = "hotpink";
});