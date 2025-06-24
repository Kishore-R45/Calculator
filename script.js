let output=document.getElementById("display");
function display(val){
    output.value+=val;
}
function clearDisplay(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}
function equal(){
    try{
        output.value=eval(output.value);
    }catch{
        alert("Invalid Input!");
    }
}