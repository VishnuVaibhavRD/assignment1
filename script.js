var count = 0;

document.getElementById('inc-btn').onclick = function(){
    count++;
    document.getElementById('total').innerHTML = count;
}

document.getElementById('dec-btn').onclick = function(){
    count--;
    document.getElementById('total').innerHTML = count;
}

document.getElementById('reset-btn').onclick = function(){
    count=0;
    document.getElementById('total').innerHTML = count;
}
