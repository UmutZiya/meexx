/* Gallery Section */

document.addEventListener('DOMContentLoaded', function () {
  // Elementleri seç
  const galleryWrapper = document.getElementById('galleryWrapper');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Kaydırma miktarı - bir kart genişliği kadar
  const scrollAmount = 300; // Kart genişliği

  // İleri butonu tıklandığında
  nextBtn.addEventListener('click', function () {
    galleryWrapper.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Geri butonu tıklandığında
  prevBtn.addEventListener('click', function () {
    galleryWrapper.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
});

/*========================================================Gallery End====================================================================================================*/

/* Countdown */
// MEEXX fuarı tarihi - 3 Aralık 2025, 09:00
const fairDate = new Date('2025-12-03T09:00:00').getTime();

// DOM elementleri
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const timerElement = document.getElementById('countdownTimer');


// Önceki değerleri saklamak için
let previousValues = { days: '', hours: '', minutes: '', seconds: '' };

function updateCountdown() {
  const now = new Date().getTime();
  const distance = fairDate - now;

  if (distance < 0) {
    // Fuar başladı
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';

    document.querySelector('.countdown-title').innerHTML = '<span class="gear-icon">⚙️</span>MEEXX BAŞLADI!';
    document.querySelector('.countdown-subtitle').textContent = 'İyi Fuarlar Dileriz';
    document.querySelector('.countdown-call-to-action').textContent = 'Hoş Geldiniz!';

    return;
  }

  // Zaman hesaplamaları
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Değerleri formatla
  const formattedDays = days.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  // Animasyon ile güncelle
  updateElementWithAnimation(daysElement, formattedDays, 'days');
  updateElementWithAnimation(hoursElement, formattedHours, 'hours');
  updateElementWithAnimation(minutesElement, formattedMinutes, 'minutes');
  updateElementWithAnimation(secondsElement, formattedSeconds, 'seconds');

  // Özel durumlar için stil değişiklikleri
  timerElement.classList.remove('final-hours', 'final-minutes');

  if (days === 0 && hours <= 24) {
    timerElement.classList.add('final-hours');
  }

  if (days === 0 && hours === 0 && minutes <= 30) {
    timerElement.classList.add('final-minutes');
  }

  // Saniye değişiminde pulse efekti
  if (formattedSeconds !== previousValues.seconds) {
    secondsElement.parentElement.classList.add('pulse');
    setTimeout(() => {
      secondsElement.parentElement.classList.remove('pulse');
    }, 1000);
  }
}

function updateElementWithAnimation(element, newValue, key) {
  if (newValue !== previousValues[key]) {
    element.classList.add('number-change');
    element.textContent = newValue;
    previousValues[key] = newValue;

    setTimeout(() => {
      element.classList.remove('number-change');
    }, 300);
  }
}

// İlk güncelleme
updateCountdown();

// Her saniye güncelle
setInterval(updateCountdown, 1000);

// Responsive kontrol
function checkResponsive() {
  const timer = document.querySelector('.countdown-timer');
  if (window.innerWidth <= 480) {
    timer.style.minWidth = '280px';
  } else if (window.innerWidth <= 768) {
    timer.style.minWidth = '300px';
  } else {
    timer.style.minWidth = '320px';
  }
}

window.addEventListener('resize', checkResponsive);
checkResponsive();

// Buton hover efektleri
const buttons = document.querySelectorAll('.countdown-btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-2px) scale(1.02)';
  });

  button.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});


/* splash screen */
document.addEventListener('DOMContentLoaded', function () {
  const splash = document.getElementById('splash');
  const mainContent = document.getElementById('main-content');

  // Check if user has seen splash screen in this session
  const hasSeenSplashThisSession = sessionStorage.getItem('lesExpoSplashSeen');

  if (hasSeenSplashThisSession) {
    // User has seen splash in this session (navigating within site), skip splash screen
    splash.style.display = 'none';
    mainContent.style.display = 'block';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  } else {
    // New session (new tab/window or first visit), show splash screen
    setTimeout(function () {
      // Mark that user has seen splash in this session
      sessionStorage.setItem('lesExpoSplashSeen', 'true');

      // Fade out splash screen
      splash.style.opacity = '0';

      // After transition completes, hide splash and show main content
      setTimeout(function () {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 300);
    }, 2000); // Exactly 2 seconds as requested
  }
});


/* Section-1 sc */

document.addEventListener("DOMContentLoaded", () => {
  // Get all slider elements
  const slides = document.querySelectorAll(".slide-sc")
  const dots = document.querySelectorAll(".dot-sc")
  const prevArrow = document.querySelector(".prev-arrow-sc")
  const nextArrow = document.querySelector(".next-arrow-sc")
  const sliderContainer = document.querySelector(".slider-container-sc")
  const controlsContainer = document.querySelector(".controls-container-sc")

  let currentSlide = 0
  const totalSlides = slides.length
  let autoPlayInterval
  const autoPlayDuration = 5000 // 5 seconds
  let isAutoPlaying = false

  // Preload all images to prevent layout shifts
  function preloadImages() {
    slides.forEach((slide) => {
      const img = slide.querySelector("img")
      if (img) {
        const src = img.getAttribute("src")
        if (src) {
          const preloadImg = new Image()
          preloadImg.src = src
        }
      }
    })
  }

  // Initialize slider
  function initSlider() {
    // Preload images
    preloadImages()

    // Set first slide as active
    slides[0].classList.add("active-sc")
    dots[0].classList.add("active-sc")

    // Set up event listeners
    prevArrow.addEventListener("click", () => {
      pauseAutoPlay()
      showPreviousSlide()
    })

    nextArrow.addEventListener("click", () => {
      pauseAutoPlay()
      showNextSlide()
    })

    // Add click event to pagination dots
    dots.forEach((dot) => {
      dot.addEventListener("click", function () {
        pauseAutoPlay()
        const slideIndex = Number.parseInt(this.getAttribute("data-index"))
        goToSlide(slideIndex)
      })
    })

    // Handle video playback
    slides.forEach((slide) => {
      const iframe = slide.querySelector("iframe")
      if (iframe) {
        // When a slide with video becomes active
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
              if (slide.classList.contains("active-sc")) {
                // Reset iframe src to restart video when slide becomes active
                const src = iframe.getAttribute("src")
                iframe.setAttribute("src", src)
              }
            }
          })
        })

        observer.observe(slide, { attributes: true })
      }
    })

    // Start autoplay
    startAutoPlay()

    // Pause autoplay on hover
    sliderContainer.addEventListener("mouseenter", pauseAutoPlay)
    controlsContainer.addEventListener("mouseenter", pauseAutoPlay)

    // Resume autoplay on mouse leave
    sliderContainer.addEventListener("mouseleave", startAutoPlay)
    controlsContainer.addEventListener("mouseleave", startAutoPlay)
  }

  // Update slide classes for animation
  function updateSlideClasses() {
    // Remove all classes first
    slides.forEach((slide) => {
      slide.classList.remove("active-sc", "prev-sc", "next-sc")
    })

    // Add active class to current slide
    slides[currentSlide].classList.add("active-sc")

    // Add prev class to previous slide
    const prevSlide = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1
    slides[prevSlide].classList.add("prev-sc")

    // Add next class to next slide
    const nextSlide = (currentSlide + 1) % totalSlides
    slides[nextSlide].classList.add("next-sc")
  }

  // Go to specific slide
  function goToSlide(index) {
    if (index < 0) {
      index = totalSlides - 1
    } else if (index >= totalSlides) {
      index = 0
    }

    // Remove active class from current dot
    dots[currentSlide].classList.remove("active-sc")

    // Set new current slide
    currentSlide = index

    // Update slide classes for animation
    updateSlideClasses()

    // Add active class to new current dot
    dots[currentSlide].classList.add("active-sc")
  }

  // Show previous slide
  function showPreviousSlide() {
    goToSlide(currentSlide - 1)
  }

  // Show next slide
  function showNextSlide() {
    goToSlide(currentSlide + 1)
  }

  // Start auto play
  function startAutoPlay() {
    if (!isAutoPlaying) {
      isAutoPlaying = true

      autoPlayInterval = setInterval(() => {
        showNextSlide()
      }, autoPlayDuration)
    }
  }

  // Pause auto play
  function pauseAutoPlay() {
    if (isAutoPlaying) {
      isAutoPlaying = false
      clearInterval(autoPlayInterval)
    }
  }

  // Handle keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      pauseAutoPlay()
      showPreviousSlide()
    } else if (e.key === "ArrowRight") {
      pauseAutoPlay()
      showNextSlide()
    }
  })

  // Handle swipe gestures for mobile
  let touchStartX = 0
  let touchEndX = 0

  sliderContainer.addEventListener(
    "touchstart",
    (e) => {
      pauseAutoPlay()
      touchStartX = e.changedTouches[0].screenX
    },
    false,
  )

  sliderContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    },
    false,
  )

  function handleSwipe() {
    const swipeThreshold = 50 // Minimum distance required for swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left, show next slide
      showNextSlide()
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right, show previous slide
      showPreviousSlide()
    }
  }

  // Initialize the slider
  initSlider()
})

// section 1 js 
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.image-container-os');

  function checkImages() {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        img.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkImages);
  checkImages();
});


// Tab switching functionality
const tabs = document.querySelectorAll('.tab-cs');
const contentSections = document.querySelectorAll('.content-section-cs');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and content sections
    tabs.forEach(t => t.classList.remove('active-cs'));
    contentSections.forEach(section => section.classList.remove('active-cs'));

    // Add active class to clicked tab
    tab.classList.add('active-cs');

    // Show corresponding content section
    const targetTab = tab.getAttribute('data-tab');
    const targetSection = document.getElementById(targetTab);
    if (targetSection) {
      targetSection.classList.add('active-cs');
    }
  });
});



// Smooth animations on load
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});