//select paragrph
let random = Math.random() * 5;
random = Math.round(random);
const allP = document.getElementsByTagName("p");
allP[random].setAttribute("id", "paragraph");



//paragraph split
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
//split finish
// get all span that we create in for loop

const allSpan = document.getElementsByTagName("span").length;
document.getElementsByTagName("span")[0].style.borderLeft="2px solid #646669";

document.getElementById("user-text").addEventListener("input", function main() {

    document.getElementsByTagName("span")[0].style.animation = "none";

    const input = document.getElementById("user-text").value;
    let inputSplit = input.split('');
    var wrongKey = 0;//for wrong count

    //now start the timer
    if (input.length == 1) {
        start = new Date().getTime();
    }
    // now check wrong or right
    for (let i = 0; i < inputSplit.length; i++) {
        const element = input[i];

        const howManySpan = document.getElementsByTagName("span");
        const letter = howManySpan[i].innerText;
        howManySpan[i].style.borderColor = "transparent"; 
        howManySpan[i+1].style.borderLeft="2px solid #e2b714"; 

        if (element == letter) {
            howManySpan[i].style.color = "#fff";
            
        }
        else {
            howManySpan[i].style.color = "red"; 
            wrongKey++; 
             

        } 
        result("wrong", wrongKey); //this function is written in below

        //backspace btn press
        document.getElementById("user-text").onkeydown = function () {
            var key = event.keyCode || event.charCode;
            if (key == 8) {
                howManySpan[i].style.color = "#646669";
                howManySpan[i + 1].style.borderColor = "transparent"; 
            }
        }
    }
    //finish the para
    if (input.length == paragraph.length) { 

        var end = new Date().getTime();
        var time = end - start;

        time = time / 1000; 
        calculate(time ,wrongKey);
        animation();

        document.getElementById("user-text").value = ''; 
    }
})
//calculate wpm 
function calculate(time, wrongKey) {
    const text = document.getElementById("user-text").value;
    let count = 0;
     
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

}
function result(id, value) {
    const wpm = document.getElementById(id);
    wpm.innerText = value;
}
function animation() {
    document.getElementById("main").style.display = "none";
    document.getElementById("result").style.display = "flex";

}
