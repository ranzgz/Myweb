// JavaScript untuk mengganti latar belakang dengan gambar
const background = document.getElementById('background');

// Mengubah background menjadi gambar baru yang dimasukkan oleh pengguna
function changeBackground(imageUrl) {
    background.style.backgroundImage = `url(${imageUrl})`;
}

// Fungsi untuk mengganti pesan
const changeMessageBtn = document.getElementById("changeMessageBtn");
const messages = [
    "Selamat datang di dunia pemrograman!",
    "Teknologi terus berkembang, mari kita eksplorasi!",
    "Belajar tidak pernah berhenti, ayo coba hal baru!",
    "Koding adalah seni yang penuh kreativitas."
];

// Fungsi untuk mengganti pesan
function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
    const messageElement = document.querySelector('.message-2');
    messageElement.textContent = newMessage;
}

// Menambahkan event listener ke tombol untuk mengganti pesan
changeMessageBtn.addEventListener('click', changeMessage);

// Menambahkan animasi scroll untuk item portfolio
window.addEventListener('scroll', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const itemPosition = item.offsetTop;

        if (scrollPosition > itemPosition + 100) {
            item.classList.add('visible');
        }
    });
});

// Menambahkan event listener untuk mengganti background dengan gambar baru
// Anda dapat memanggil fungsi ini dengan URL gambar yang diinginkan
changeBackground('https://s.neoxr.eu/get/fZ4nbo.jpg');

// Pemutar Musik: Fungsi untuk memutar musik
const music = document.getElementById('music');
music.play();  // Memulai pemutaran musik otomatis
