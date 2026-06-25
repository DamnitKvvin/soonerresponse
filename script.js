// script.js - Sooner Response Photography

const media = [
    { type: "image", src: "https://ibb.co/qMGQGL3s", thumb: "https://ibb.co/qMGQGL3s", caption: "" },
    { type: "image", src: "https://ibb.co/W4bmZcQS", thumb: "https://ibb.co/W4bmZcQS", caption: "" },
    { type: "image", src: "https://ibb.co/1G4cKrTw", thumb: "https://ibb.co/1G4cKrTw", caption: "" },
    { type: "image", src: "https://ibb.co/CKMtmywp", thumb: "https://ibb.co/CKMtmywp", caption: "" },
    { type: "image", src: "https://ibb.co/fdrPNhkg", thumb: "https://ibb.co/fdrPNhkg", caption: "" },
    { type: "image", src: "https://ibb.co/ynr37rFd", thumb: "https://ibb.co/ynr37rFd", caption: "" },
    { type: "image", src: "https://ibb.co/SXPQqqQ2", thumb: "https://ibb.co/SXPQqqQ2", caption: "" },
    { type: "image", src: "https://ibb.co/1GqKNJnc", thumb: "https://ibb.co/1GqKNJnc", caption: "" },
    { type: "image", src: "https://ibb.co/xS06bVHb", thumb: "https://ibb.co/xS06bVHb", caption: "" },
    { type: "image", src: "https://ibb.co/wt5ycNS", thumb: "https://ibb.co/wt5ycNS", caption: "" },
    { type: "image", src: "https://ibb.co/8gXjzBT0", thumb: "https://ibb.co/8gXjzBT0", caption: "" },
    { type: "image", src: "https://ibb.co/kVB8cWtB", thumb: "https://ibb.co/kVB8cWtB", caption: "" },
    { type: "image", src: "https://ibb.co/B2zsSm8C", thumb: "https://ibb.co/B2zsSm8C", caption: "" },
    { type: "image", src: "https://ibb.co/My3B8M2x", thumb: "https://ibb.co/My3B8M2x", caption: "" },
    { type: "image", src: "https://ibb.co/2Y3Bh2jy", thumb: "https://ibb.co/2Y3Bh2jy", caption: "" },
    { type: "image", src: "https://ibb.co/j9XQfbyL", thumb: "https://ibb.co/j9XQfbyL", caption: "" },
    { type: "image", src: "https://ibb.co/LXFTLsWk", thumb: "https://ibb.co/LXFTLsWk", caption: "" },
    { type: "image", src: "https://ibb.co/Jj8R4yzD", thumb: "https://ibb.co/Jj8R4yzD", caption: "" },
    { type: "image", src: "https://ibb.co/CKrS4s4M", thumb: "https://ibb.co/CKrS4s4M", caption: "" },
    { type: "image", src: "https://ibb.co/nMmhW11n", thumb: "https://ibb.co/nMmhW11n", caption: "" },
    { type: "image", src: "https://ibb.co/tpQ3hhkY", thumb: "https://ibb.co/tpQ3hhkY", caption: "" },
    { type: "image", src: "https://ibb.co/DP8s4QDN", thumb: "https://ibb.co/DP8s4QDN", caption: "" },
    { type: "image", src: "https://ibb.co/206J6zrB", thumb: "https://ibb.co/206J6zrB", caption: "" },
    { type: "image", src: "https://ibb.co/HDLKCMK5", thumb: "https://ibb.co/HDLKCMK5", caption: "" },
    { type: "image", src: "https://ibb.co/S4J75QG7", thumb: "https://ibb.co/S4J75QG7", caption: "" },
    { type: "image", src: "https://ibb.co/dJ2HCTYd", thumb: "https://ibb.co/dJ2HCTYd", caption: "" },
    { type: "image", src: "https://ibb.co/nMWPKvYF", thumb: "https://ibb.co/nMWPKvYF", caption: "" },
    { type: "image", src: "https://ibb.co/8CN97ty", thumb: "https://ibb.co/8CN97ty", caption: "" },
    { type: "image", src: "https://ibb.co/HD4nS1zw", thumb: "https://ibb.co/HD4nS1zw", caption: "" },
    { type: "image", src: "https://ibb.co/gFzM272s", thumb: "https://ibb.co/gFzM272s", caption: "" },
    { type: "image", src: "https://ibb.co/5XB3JScB", thumb: "https://ibb.co/5XB3JScB", caption: "" },
    { type: "image", src: "https://ibb.co/4g0rkW41", thumb: "https://ibb.co/4g0rkW41", caption: "" },
    { type: "image", src: "https://ibb.co/RGRzDMLV", thumb: "https://ibb.co/RGRzDMLV", caption: "" },
    { type: "image", src: "https://ibb.co/Mkb4W5zz", thumb: "https://ibb.co/Mkb4W5zz", caption: "" },
    { type: "image", src: "https://ibb.co/bj6kY47N", thumb: "https://ibb.co/bj6kY47N", caption: "" },
    { type: "image", src: "https://ibb.co/VYy4TRtZ", thumb: "https://ibb.co/VYy4TRtZ", caption: "" },
    { type: "image", src: "https://ibb.co/JWQK5Rnn", thumb: "https://ibb.co/JWQK5Rnn", caption: "" },
    { type: "image", src: "https://ibb.co/0RsLwh2x", thumb: "https://ibb.co/0RsLwh2x", caption: "" }
];

function renderMedia() {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    media.forEach(item => {
        const div = document.createElement('div');
        div.className = 'break-inside-avoid cursor-pointer';
        div.innerHTML = `
            <div class="relative overflow-hidden rounded-3xl bg-zinc-900">
                <img src="${item.thumb}" alt="${item.caption}" 
                     class="w-full h-auto object-cover masonry-img">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <p class="text-sm">${item.caption}</p>
                </div>
            </div>
        `;
        div.onclick = () => openLightbox(item);
        grid.appendChild(div);
    });
}

function openLightbox(item) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    const captionEl = document.getElementById('lightbox-caption');
    
    if (!lightbox || !content) return;
    
    content.innerHTML = `<img src="${item.src}" alt="${item.caption}" class="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-2xl">`;
    captionEl.textContent = item.caption;
    
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    renderMedia();
    
    // Lightbox close on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    
    // Simple form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been received. I'll get back to you soon.");
            form.reset();
        });
    }
    
    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
    });
});
