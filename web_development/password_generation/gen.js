function randomString() {
    var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    var length=document.getElementById("len").value;

    if (! length) {
        length = Math.floor(Math.random() * charset.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += charset[Math.floor(Math.random() * charset.length)];
    }

    alert("Your Password: "+str);
}