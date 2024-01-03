let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}, 3000);


function showHomeSection() {
  const homeSection = document.getElementById('home-section');
  homeSection.innerHTML = '';

  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  for (let i = 1; i <= 10; i++) {
    const img = document.createElement('img');
    img.src = `image${i}.jpg`;
    img.alt = `Image ${i}`;
    img.className = 'carousel-item';
    carousel.appendChild(img);
  }

  homeSection.appendChild(carousel);
  homeSection.style.display = 'block';

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showLoginModal() {
  const loginModal = document.getElementById('login-modal');
  loginModal.style.display = 'block';
}

function closeLoginModal() {
  const loginModal = document.getElementById('login-modal');
  loginModal.style.display = 'none';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

if (username === 'your_username' && password === 'your_password') {
    alert('Login successful!');
    closeLoginModal();
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

function showContactSection() {
  const contactSection = document.getElementById('contact-section');
  contactSection.style.display = 'block';
}

function closeContactSection() {
  const contactSection = document.getElementById('contact-section');
  contactSection.style.display = 'none';
}


function showAboutSection() {
  const aboutSection = document.getElementById('about-section');
  aboutSection.style.display = 'block';
}

function closeAboutSection() {
  const aboutSection = document.getElementById('about-section');
  aboutSection.style.display = 'none';
}

function showServicesSection() {
  const servicesSection = document.getElementById('services-section');
  servicesSection.style.display = 'block';
}

function closeServicesSection() {
  const servicesSection = document.getElementById('services-section');
  servicesSection.style.display = 'none';
}

function showGallerySection() {
  hideAllSections();
  const gallerySection = document.getElementById('gallery-section');
  gallerySection.style.display = 'block';
}

const nav = document.querySelector('nav');
const navOffset = nav.offsetTop;

function fixNavbar() {
  if (window.scrollY >= navOffset) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add('fixed');
  } else {
    document.body.style.paddingTop = '0';
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixNavbar);
