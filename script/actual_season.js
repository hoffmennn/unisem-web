(() => {
        
    const seasons = {
        spring: {
            name: 'Jar',
            title: 'Jar je tu!',
            description: 'Začína obdobie sadenia a prípravy záhrady. Nájdeš u nás všetko pre prvé práce na záhone aj veľkonočnú výzdobu.',
            offers: [
                'veľkonočné dekorácie a ozdoby',
                'sadenice a priesady',
                'záhradnícke náradie',
                'substráty a hnojivá',
            ],
            images: [
                'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
                'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80',
                'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80'
            ]
        },
        summer: {
            name: 'Leto',
            title: 'Letná ponuka',
            description: 'Leto je v plnom prúde. Doplníme vašu záhradu o nové kvety a všetko, čo potrebujete na údržbu a starostlivosť.',
            offers: [
                'Zavlažovacie systémy a hadice',
                'Letničky a balkónové rastliny',
                'Záhradný nábytok a dekorácie',
                'Grilovanie a vonkajšie vybavenie'
            ],
            images: [
                'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
                'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
            ]
        },
        autumn: {
            name: 'Jeseň',
            title: 'Jesenná ponuka',
            description: 'Pripravte sa na chladnejšie dni. Ponúkame sezónne plodiny a jesenné dekorácie.',
            offers: [
                'Nakladaná kapusta',
                'Zemiaky a sezónna zelenina',
                'Jesenné ozdoby',
                'Dekorácie a vence na Dušičky'
            ],
            images: [
                'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=800&q=80',
                'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=80',
                'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80'
            ]
        },
        winter: {
            name: 'Zima',
            title: 'Vianoce sú tu!',
            description: 'Vianočná sezóna prináša tradičné stromčeky, výzdobu a doplnky pre útulnú zimu.',
            offers: [
                'Živé vianočné stromčeky',
                'Vianočné dekorácie a ozdoby',
                'Darčeky pre vašich blízkych',
                'Izbové rastliny'
            ],
            images: [
                'images/shop/xmas-tree.jpg',
            ]
        }
    };

    function getCurrentSeason() {
        const month = new Date().getMonth() + 1;
        
        if (month >= 2 && month <= 4) return 'spring';
        if (month >= 5 && month <= 8) return 'summer';
        if (month >= 9 && month <= 10) return 'autumn';
        return 'winter';
    }

    function updateSeasonalContent() {
        const currentSeason = getCurrentSeason();
        const seasonData = seasons[currentSeason];
        
        document.getElementById('seasonTitle').textContent = seasonData.title;
        document.getElementById('seasonDescription').textContent = seasonData.description;
        
        const offerList = document.getElementById('offerList');
        offerList.innerHTML = '';
        seasonData.offers.forEach(offer => {
            const li = document.createElement('li');
            li.textContent = offer;
            offerList.appendChild(li);
        });
        
        return seasonData.images;
    }

    let currentImageIndex = 0;
    let seasonImages = updateSeasonalContent();
    const imageElement = document.getElementById('seasonalImage');
    imageElement.src = seasonImages[0];

    function changeImage() {
        imageElement.classList.add('fade-out');
        
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % seasonImages.length;
            imageElement.src = seasonImages[currentImageIndex];
            imageElement.classList.remove('fade-out');
        }, 1200);
    }

    setInterval(changeImage, 10000);
})();