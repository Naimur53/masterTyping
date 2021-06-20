 

const paragraph = document.getElementById("paragraph").innerText;
var start; 
var wrong = 0;
 
document.getElementById("user-text").addEventListener("input", function () {
    const input = document.getElementById("user-text").value;
    if(input.length == 1){
        start = new Date().getTime();  
       }
   
    else {

        let text = '';

        for (let i = 0; i < input.length; i++) {
            var element = paragraph[i];
            text = text + element;
        }
        console.log('text', text);

        if (text == input) {
            this.style.color = 'white';
        }
        else {
            this.style.color = "red";
            wrong++;
        }
        console.log("input", input);

       
    }
    if (input.length == paragraph.length) {
        console.log("done");
        var end = new Date().getTime();
        var time = end - start;
        time = time / 1000;
        console.log("wrong",wrong);
        wrong = (wrong/5);
        const speed = ((input.length/5)-wrong)/(1/time);
        console.log('speed',speed);
        console.log('Execution time: ' + time);
        document.getElementById("user-text").value = ""; 
    }
  
})

 