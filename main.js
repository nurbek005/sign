let username = document.getElementById('ema')
let pasword = document.getElementById('password')
let btn = document.getElementById('btn')

btn.addEventListener('click', () =>{
    if(username.value == 'admin' || pasword.value == 'admin1'){
        alert('ma`lumotlar to`gri')
    }
    else{
        alert(false)
    }
})