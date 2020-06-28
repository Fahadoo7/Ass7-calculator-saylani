




function getNum(num){
    
    var res = document.getElementById('textinput')
    res.value+=num;
    
}
function cleartext(){
    var res = document.getElementById('textinput')
    res.value='';
}

function getRes(){
    var res = document.getElementById('textinput')
    res.value=eval(res.value)
}