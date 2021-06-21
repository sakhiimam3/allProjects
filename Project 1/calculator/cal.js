
function getNum(num){
    var result=document.getElementById("result");
    result.value +=num
}
function clearRes(num){
    var result=document.getElementById("result");
    result.value=""
}
function abc(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}