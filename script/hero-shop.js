const images = [
    'images/ext2.jpg'

];

let currentIndex = 0;
const heroImage = document.getElementById('heroImage');

function changeImage() {
    heroImage.classList.add('fade-out');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.src = images[currentIndex];
        heroImage.classList.remove('fade-out');
    }, 500);
}

setInterval(changeImage, 4000);