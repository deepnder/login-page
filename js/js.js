


function login() {
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (uname==="" && pass ==="") {
        // location.assign('http://127.0.0.1:5500/home.html')
        window.alert('login failed')
    }
   
    else{
        location.assign('http://127.0.0.1:5500/home.html')

    }
}

    
