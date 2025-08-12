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


// SPLASH
