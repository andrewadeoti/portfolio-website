// ====== EMAILJS INITIALIZATION ======
// NOTE: Sign up at https://www.emailjs.com/
// After signing up:
// 1. Create an email service (e.g., Gmail)
// 2. Create an email template with variables: name, email, message
// 3. Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY below

emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

// ====== DARK MODE ======
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Load theme preference
function loadTheme() {
    const saved = localStorage.getItem('theme');
    const preference = saved || 'light';
    htmlElement.setAttribute('data-theme', preference);
    updateThemeIcon(preference);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

themeToggle?.addEventListener('click', () => {
    const current = htmlElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

loadTheme();

// ====== MOBILE NAVIGATION ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu?.classList.remove('active');
    }
});

// ====== CONTACT FORM ======
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        try {
            // Replace SERVICE_ID and TEMPLATE_ID with your EmailJS credentials
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                name: name,
                email: email,
                message: message,
                to_email: 'AndrewAdeoti11@gmail.com' // Your email
            });

            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Error sending message. Please try again or email me directly at AndrewAdeoti11@gmail.com');
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
}

// ====== KEYBOARD SHORTCUTS ======
document.addEventListener('keydown', (e) => {
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        navMenu?.classList.remove('active');
    }
});

// ====== SMOOTH SCROLLING (FALLBACK for older browsers) ======
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '/#') {
            e.preventDefault();
        }
    });
});
