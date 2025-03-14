document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "#005bb5";
    });

    btn.addEventListener("mouseleave", function () {
        btn.style.backgroundColor = "#1e90ff";
    });

    console.log("Landing page loaded successfully!");
});
