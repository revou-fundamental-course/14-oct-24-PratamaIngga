// Ini Javascript

//fungsi tombol submit ketika field kosong
function validateForm() {
    let inputUsername = document.getElementById('input-username').value;
    if (inputUsername == '') {
        // alert('Inputan kamu masih kosong');
       
        document.getElementById('input-username').style.border = '1px solid red';
    } else {
        // document.getElementById('result').innerHTML = 'Berhasil'; // Result akan berubah menjadi 'Berhasil'
        // document.getElementById('result').innerHTML = inputUsername; //Result tidak akan berubah, tapi disamping Result akan muncul 'Berhasil'
       
        document.getElementById('result').innerHTML = '(' + inputUsername + ')' ;
        document.getElementById('input-username').style.border = '1px solid';
        console.log(inputUsername);
    }   
}

let indexSlide = 0;
nextSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('foto-banner')

    // if (n > listImage.length - 1) {
    //     indexSlide = 0;
    // }

    if (n > listImage.length - 1) {
        indexSlide = 0;
    }

    if (n < 0) {
        indexSlide = listImage.length - 1;
    }
    
    //menyembunyikan foto slide menggunakan looping
    let index = 0; 
    while (index < listImage.length) {
        
        // console.log(listImage[index]); // gunakan console.log untuk mengecek apakah fungsi index listImage telah berhasil
        
        listImage[index].style.display = 'none'; //gambar telah berhasil disembunyikan
        index++;
    }

    listImage[indexSlide].style.display = 'block';
    console.log(listImage);
    console.log(n);

}

// setInterval(() => nextSlide(1), 2000); //set timer ke next slide dengan waktu 2000 atau 2 detik