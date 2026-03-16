// Data
const moments = [
    {
        title: "Your proposal",
        date: "May Holidays",
        location: "straight into my heart",
        description: "The moment I knew you were something special. The way you made me adore you made the whole world fade away.",
        image: "https://media.discordapp.net/attachments/1261311956049203333/1483082035860996186/552308969_1148944383817013_8779871374706653354_n.jpg?ex=69b94b47&is=69b7f9c7&hm=97c00543d0a92bf3477ce9a4316df19724bf6e95c0a2dc9ace547f470522764b&=&format=webp&width=266&height=590"
    },
    {
        title: "Our First Date",
        date: "February",
        location: "Mimic",
        description: "Watching you use 100% fo ur brain was the most adorable I've ever seen. Just us.",
        image: "https://media.discordapp.net/attachments/1261311956049203333/1483083004820586576/Screenshot_2026-02-14_174729.png?ex=69b94c2e&is=69b7faae&hm=2b7d724bb88428a0b797eb25dfdda866ddc91140e1f1f446a78d641978d2941e&=&format=webp&quality=lossless&width=1006&height=590"
    },
    {
        title: "The day we met",
        date: "Every day in may, 2025",
        location: "Our favorite game :3",
        description: "Out of millions of games, and millions of servers, I joined yours, and I talked with you, this wasn't a coincidence",
        image: "https://media.discordapp.net/attachments/1261311956049203333/1483083005361918147/Screenshot_2026-02-14_192033.png?ex=69b94c2e&is=69b7faae&hm=15a9b04d83a085c7f591720dbd32790f8b1bacb94f16ba03acc3f2a45696a29d&=&format=webp&quality=lossless"
    }
];

const reasons = [
    "The way talk, it makes me ask, 'how does something so beautiful exist?'",
    "How you make the most ordinary days feel extraordinary.",
    "Your laugh that makes everyone around you disapear.",
    "The way you remember the smallest details about us.",
    "The gossips we share, and laugh together :3",
    "How you believe in me even when I don't believe in myself."
];

const playlist = [
    { name: "Ordinary", url: "https://open.spotify.com/track/6qqrTXSdwiJaq8SO0X2lSe?si=32f1262a3ef34aa1" },
    { name: "Those Eyes", url: "https://open.spotify.com/track/50x1Ic8CaXkYNvjmxe3WXy?si=74d28fa3b4334e50" },
    { name: "Dance Partner", url: "https://open.spotify.com/track/6pERLwGg6WN0MvQ7YujWsG?si=3f548cf1b4a34eab" },
    { name: "Lover like you", url: "https://open.spotify.com/track/2ArLfwU02n5xHpvT1Na1j8?si=751ebf64d2f54d31" },
    { name: "crush", url: "https://open.spotify.com/track/0havv7ozSTF6wMHEDKdibs?si=213a07c4ae224889" },
    { name: "Boy in Love", url: "https://open.spotify.com/track/19TlagHWD2YdNCOoZc1Fjp?si=4c625113da944d7f" },
    { name: "When you say my name", url: "https://open.spotify.com/track/3a8b6uo4vnQSJroGhaNhgG?si=2f457d54bedf4336" }
];

// Initialize Lucide Icons
lucide.createIcons();

// Custom Cursor
const cursorOuter = document.getElementById('cursor-outer');
const cursorInner = document.getElementById('cursor-inner');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    cursorInner.style.left = x + 'px';
    cursorInner.style.top = y + 'px';
    
    // Smooth delay for outer cursor
    setTimeout(() => {
        cursorOuter.style.left = x + 'px';
        cursorOuter.style.top = y + 'px';
    }, 50);
});

// Floating Hearts
const heartsContainer = document.getElementById('hearts-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '<i data-lucide="heart" fill="currentColor"></i>';
    
    const size = Math.random() * 30 + 10;
    const startX = Math.random() * 100;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 5;
    
    heart.style.left = startX + '%';
    heart.style.bottom = '-10%';
    heart.style.fontSize = size + 'px';
    heart.style.transition = `all ${duration}s linear ${delay}s`;
    
    heartsContainer.appendChild(heart);
    lucide.createIcons();

    // Trigger animation
    setTimeout(() => {
        heart.style.bottom = '110%';
        heart.style.transform = `rotate(${Math.random() * 360 + 360}deg)`;
    }, 100);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

setInterval(createHeart, 1000);

// Dynamic Content Injection
const momentsGrid = document.getElementById('moments-grid');
moments.forEach((moment, idx) => {
    const card = document.createElement('div');
    card.className = 'moment-card reveal group relative bg-[#0f0a08] p-4 rounded-[32px] border border-stone-800/50';
    card.style.transitionDelay = (idx * 0.15) + 's';
    card.innerHTML = `
        <div class="relative overflow-hidden rounded-[24px] aspect-[4/5] mb-6">
            <img src="${moment.image}" alt="${moment.title}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerpolicy="no-referrer">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div class="space-y-3 px-2">
            <div class="flex items-center gap-2 text-rose-400/60 text-[10px] font-sans uppercase tracking-[0.2em]">
                <i data-lucide="calendar" class="w-2.5 h-2.5"></i>
                <span>${moment.date}</span>
            </div>
            <h3 class="text-xl font-light group-hover:text-rose-300 transition-colors">${moment.title}</h3>
            <p class="text-stone-500 text-sm leading-relaxed line-clamp-3">
                ${moment.description}
            </p>
        </div>
    `;
    momentsGrid.appendChild(card);
});

const reasonsGrid = document.getElementById('reasons-grid');
reasons.forEach((reason, idx) => {
    const item = document.createElement('div');
    item.className = 'reveal flex gap-4 items-start p-6 rounded-2xl bg-stone-900/20 border border-stone-800/30';
    item.style.transitionDelay = (idx * 0.1) + 's';
    item.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 text-rose-400">
            <i data-lucide="heart" class="w-3.5 h-3.5" fill="currentColor"></i>
        </div>
        <p class="text-stone-300 italic leading-relaxed">${reason}</p>
    `;
    reasonsGrid.appendChild(item);
});

const playlistContainer = document.getElementById('playlist-container');
playlist.forEach((song, idx) => {
    const link = document.createElement('a');
    link.href = song.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'reveal px-6 py-3 rounded-full bg-stone-900/40 border border-stone-800 text-stone-400 italic hover:text-rose-300 hover:border-rose-400/30 transition-all block';
    link.style.transitionDelay = (idx * 0.05) + 's';
    link.innerText = song.name;
    playlistContainer.appendChild(link);
});

// Re-initialize icons for dynamic content
lucide.createIcons();

// Scroll Animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(reveal => observer.observe(reveal));

// Opening Animation Logic
const leftFlap = document.getElementById('left-flap');
const rightFlap = document.getElementById('right-flap');
const contentWrapper = document.getElementById('content-wrapper');
const coverOverlay = document.getElementById('cover-overlay');
const centralHeart = document.getElementById('central-heart');

function interpolate(value, x1, x2, y1, y2) {
    if (value <= x1) return y1;
    if (value >= x2) return y2;
    return y1 + (y2 - y1) * (value - x1) / (x2 - x1);
}

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = window.scrollY / scrollHeight;

    // Left Flap: [0, 0.15] -> [0, -110]
    const leftRotate = interpolate(progress, 0, 0.15, 0, -110);
    leftFlap.style.transform = `rotateY(${leftRotate}deg)`;

    // Right Flap: [0, 0.15] -> [0, 110]
    const rightRotate = interpolate(progress, 0, 0.15, 0, 110);
    rightFlap.style.transform = `rotateY(${rightRotate}deg)`;

    // Content Scale: [0, 0.15, 0.25] -> [0.8, 0.9, 1]
    let scale = 0.8;
    if (progress <= 0.15) {
        scale = interpolate(progress, 0, 0.15, 0.8, 0.9);
    } else {
        scale = interpolate(progress, 0.15, 0.25, 0.9, 1);
    }
    contentWrapper.style.transform = `scale(${scale})`;

    // Content Opacity: [0.05, 0.15] -> [0, 1]
    const opacity = interpolate(progress, 0.05, 0.15, 0, 1);
    contentWrapper.style.opacity = opacity;

    // Cover Opacity: [0.1, 0.2] -> [1, 0]
    const coverOpacity = interpolate(progress, 0.1, 0.2, 1, 0);
    coverOverlay.style.opacity = coverOpacity;
    if (coverOpacity <= 0) {
        coverOverlay.style.pointerEvents = 'none';
    } else {
        coverOverlay.style.pointerEvents = 'auto';
    }

    // Heart Scale: [0, 0.1] -> [1, 15]
    const hScale = interpolate(progress, 0, 0.1, 1, 15);
    centralHeart.style.transform = `scale(${hScale})`;

    // Heart Opacity: [0.08, 0.12] -> [1, 0]
    const hOpacity = interpolate(progress, 0.08, 0.12, 1, 0);
    centralHeart.style.opacity = hOpacity;
});

// Set current year
document.getElementById('year').innerText = new Date().getFullYear();
