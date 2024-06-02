//Daftar sekarang fungsi
function redirectToDaftar() {
    window.location.href = "https://www.google.com";
}


var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
    }
});

video.addEventListener("play", function() {
    playButton.style.display = "none";
});

video.addEventListener("pause", function() {
    playButton.style.display = "block";
});


//Login
function login() {
    // Ambil nilai input dari form login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Ambil nilai input dari form register
    var registerUsername = document.getElementById('registerUsername').value;
    var registerPassword = document.getElementById('registerPassword').value;

    // Bandingkan data login dengan data register
    if (username === registerUsername && password === registerPassword) {
        // Redirect pengguna ke halaman berikutnya
        window.location.href = 'dashboard.html';
    } else {
        alert('Username atau password salah. Silahkan coba lagi.');
    }
}

//Register
function register() {
    // Ambil nilai input dari form pendaftaran
    var fullname = document.getElementById('fullname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simpan data pendaftaran (dapat disimpan di local storage atau server database)
    // Contoh menggunakan local storage
    var userData = {
        fullname: fullname,
        username: username,
        email: email,
        password: password
    };

    // Simpan data pendaftaran ke local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect pengguna ke halaman login setelah pendaftaran berhasil
    window.location.href = 'login.html';
}