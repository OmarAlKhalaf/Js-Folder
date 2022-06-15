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
        document.body.style.backgroundColor = 'yellow'
        btn.style.backgroundColor = 'white'
        console.log('On')
        btn.style.color = 'black'
        x++
    }
    else if (x == 1){
        document.body.style.backgroundColor = 'black'
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        console.log('Off')
        x-- 
    }
    
}
