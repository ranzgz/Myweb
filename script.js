const changeMessageBtn = document.getElementById("changeMessageBtn");
const messages = [
    "Selamat datang di dunia pemrograman!",
    "Teknologi terus berkembang, mari kita eksplorasi!",
    "Belajar tidak pernah berhenti, ayo coba hal baru!",
    "Koding adalah seni yang penuh kreativitas."
];

// Fungsi untuk mengubah latar belakang secara acak
function changeBackground() {
    const colors = [
        "linear-gradient(45deg, #ff6a00, #ee0979)",
        "linear-gradient(45deg, #56ccf2, #2f80ed)",
        "linear-gradient(45deg, #8e44ad, #f39c12)",
        "linear-gradient(45deg, #2ecc71, #e74c3c)"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.background').style.background = randomColor;
}

// Fungsi untuk mengganti pesan pada halaman
function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
    const messageElement = document.querySelector('.message-2');
    messageElement.textContent = newMessage;
}

// Menambahkan event listener ke tombol untuk mengganti latar belakang dan pesan
changeMessageBtn.addEventListener('click', () => {
    changeBackground();  // Mengubah background
    changeMessage();  // Mengubah pesan
});

// Efek scroll: Mengubah opasitas teks saat scroll
window.addEventListener('scroll', () => {
    const messages = document.querySelectorAll('.message');
    messages.forEach(message => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const messagePosition = message.offsetTop;
        
        if (scrollPosition > messagePosition + 100) {
            message.style.opacity = 1;
            message.style.transform = "translateY(0)";
        }
    });
});