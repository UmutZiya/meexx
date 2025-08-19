// Splash screen gösterim kontrolü
function shouldShowSplash() {
    // Sadece sekme/uygulama ilk açıldığında göster, sessionStorage ile kontrol
    if (sessionStorage.getItem('meexx-splash-shown')) {
        return false;
    }
    sessionStorage.setItem('meexx-splash-shown', 'true');
    return true;
}

        // Particle animation
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = window.innerWidth < 768 ? 20 : 40;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 6 + 's';
                
                // Random size variation
                const size = Math.random() * 3 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                particlesContainer.appendChild(particle);
            }
        }

// Auto-redirect function
function autoRedirect() {
    setTimeout(() => {
        // Splash ekranını gizle, ana içeriği göster
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.transition = 'opacity 0.7s ease-out';
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                // Ana sayfa içeriğini göster
                document.body.style.overflow = '';
                const mainContent = document.querySelectorAll('body > *:not(#splash-screen):not(script)');
                mainContent.forEach(el => {
                    el.style.display = '';
                });
                // Eğer başka bir sayfaya yönlendirme isteniyorsa aşağıdaki satırı açın:
                // window.location.href = 'main.html';
            }, 700);
        }
    }, 2500); // 2.5 saniye bekle
}

        // Responsive particle adjustment
        function adjustParticles() {
            const particlesContainer = document.getElementById('particles');
            particlesContainer.innerHTML = '';
            createParticles();
        }

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Splash ekranı dışında kalan ana içeriği başta gizle
    const splash = document.getElementById('splash-screen');
    const mainContent = document.querySelectorAll('body > *:not(#splash-screen):not(script)');
    if (splash) {
        mainContent.forEach(el => {
            el.style.display = 'none';
        });
        document.body.style.overflow = 'hidden';
    }

    // İlk ziyaret kontrolü

    if (!shouldShowSplash()) {
        // Splash ekranını hiç gösterme, direkt ana içeriği göster
        if (splash) splash.style.display = 'none';
        mainContent.forEach(el => {
            el.style.display = '';
        });
        document.body.style.overflow = '';
        return;
    }

    createParticles();
    autoRedirect();
    // Adjust particles on resize
    window.addEventListener('resize', adjustParticles);
});

        // Accessibility improvements
        document.querySelector('.main-title').setAttribute('role', 'banner');