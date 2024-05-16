console.log("See the Strength of Paassword");

let pass = document.getElementById("pass");
let msg = document.getElementById("msg");
let show = document.getElementById("show");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (pass.value.length < 4) {
        show.innerHTML = "weak";
        pass.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        show.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (pass.value.length >= 8) {
        show.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});