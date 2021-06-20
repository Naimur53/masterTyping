//select paragrph
let random = Math.random()*5;
random = Math.round(random);
const allP = document.getElementsByTagName("p");
allP[random].setAttribute("id","paragraph");




const paragraph = document.getElementById("paragraph").innerText;
const splitPara = paragraph.split('');
document.getElementById("user-text").setAttribute("maxlength", splitPara.length);
console.log(splitPara);
for (let i = 0; i < splitPara.length; i++) {
    const element = splitPara[i];
    const span = document.createElement('span');
    span.innerText = element;
    console.log(span);
    document.getElementById("paraContainer").appendChild(span);
}
document.getElementById("paragraph").style.display = "none";
const allSpan = document.getElementsByTagName("span").length;
var wrongKey = 0;

document.getElementById("user-text").addEventListener("input", function main() {
    const input = document.getElementById("user-text").value;
    let inputSplit = input.split('');
    if (input.length == 1) {
        start = new Date().getTime();
        console.log(start);

    }
    for (let i = 0; i < inputSplit.length; i++) {
        const element = input[i];
        console.log(element);
        const howManySpan = document.getElementsByTagName("span");
        console.log(howManySpan[i]);
        const letter = howManySpan[i].innerText;
        console.log(letter);

        if (element == letter) {
            howManySpan[i].style.color = "#646669";
        }
        else {
            howManySpan[i].style.color = "red";
            wrongKey++;
            result("wrong", wrongKey);


        }
        document.getElementById("user-text").onkeydown = function () {
            var key = event.keyCode || event.charCode;
            if (key == 8) {
                howManySpan[i].style.color = "#fff";

            }
        }
    }
    if (input.length == paragraph.length) {
        console.log("done");
        var end = new Date().getTime();
        var time = end - start;
        time = time / 1000;
        console.log(time);
        calculate(time);
        animation();
        document.getElementById("user-text").value = '';

    }
})
function calculate(time) {
    const text = document.getElementById("user-text").value;
    let count = 0;
    console.log(text);
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        if (element == " ") {
            count++;
        }
    }
    count = text.length - count;

    time = time / 60;
    let word = count / 5;
    wrongKey = wrongKey / 5;
    word = word - wrongKey;
    word = word / time;
    word = Math.round(word);
    if (word > 0) {
        result("wpm", word);
    }
    else {
        word = 0;
        result("wpm", word); 
    }
    console.log("speed", word);

}
function result(id, value) {
    const wpm = document.getElementById(id);
    wpm.innerText = value;
}
function animation() {
    document.getElementById("main").style.display = "none";
    document.getElementById("result").style.display = "flex";

}
