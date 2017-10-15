// scripts.js
"use strict;"

const input = document.querySelector("input");
input.addEventListener("change", updateValue);
input.addEventListener("mousemove", updateValue);

function updateValue() {
    var percent = document.querySelector("span");
    // console.log(this.value);
    // console.log(percent.textContent);
    percent.textContent = this.value;
    document.documentElement.style.setProperty('--light', this.value/100);
    document.documentElement.style.setProperty('--glow', this.value/5 + 'px');
};
