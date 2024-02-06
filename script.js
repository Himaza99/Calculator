const show=document.getElementById("show");

function display(input){
    show.value += input;
}

function calculate(){
    try{
        show.value = eval(show.value);
    }catch{
        show.value="error";
    }
}

function clearDisplay(){
    show.value= "";
}