
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));


output(getSentenceArr([i]))
function  getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = ""; 
    
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {S
            str += arr[i] + PUNCT;   
        } else {
            str += arr[i] + GAP;  
        }
    }
    return str; 
 }

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}