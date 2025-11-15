const images = [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80'
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