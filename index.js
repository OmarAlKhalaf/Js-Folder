var btn = document.createElement('button');
btn.style.margin = '50px';
btn.innerHTML = 'Start';
document.body.appendChild(btn);

// Code.
var x = 0 
btn.addEventListener('click',func)
// func here onder.
function func(){
    if(x == 0){
        document.body.style.backgroundColor = 'blue'
        btn.style.backgroundColor = 'white'
        console.log('On')
        btn.style.color = 'white'
        x++
    }
    else if (x == 1){
        document.body.style.backgroundColor = 'red'
        btn.style.backgroundColor = 'white'
        btn.style.color = 'white'
        console.log('Off')
        x-- 
    }
    
}
