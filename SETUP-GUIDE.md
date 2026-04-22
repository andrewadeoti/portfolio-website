# Portfolio Website - Setup Guide

## Quick Start

Your portfolio has been completely redesigned with a focus on clarity, simplicity, and credibility. Here's what's been done:

### ✅ Completed Changes

1. **Simplified Homepage** - Clean hero section with clear CTAs, featured projects preview, skills overview, and contact
2. **New Pages Created**:
   - `/about.html` - Professional intro, specializations, tech stack
   - `/cv.html` - Scannable CV/resume with downloadable section
   - `/projects.html` - Detailed project case studies (4 best projects)
   - `/skills.html` - Comprehensive skill breakdown with proficiency levels

3. **Refactored Design**:
   - Simple, clean color system (1 primary color + neutrals)
   - Removed excessive animations (typing effect, parallax, excessive hovers)
   - Dark mode support (toggle in navbar)
   - Mobile-responsive throughout

4. **Simplified Code**:
   - Removed 70+ lines of unnecessary JavaScript
   - Clean, maintainable CSS with CSS variables
   - Focus on performance and readability

---

## Email Integration (Contact Form)

The contact form on the homepage is ready to use with **EmailJS** (free, no backend needed).

### Setup Instructions

#### 1. Sign Up for EmailJS
- Go to https://www.emailjs.com/
- Click "Sign Up Free"
- Verify your email

#### 2. Add Your Email Inbox
- In EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- Copy your **Service ID**

#### 3. Create an Email Template
- Go to **Email Templates**
- Click **Create New Template**
- Set up a template with these variables:
  - `{{name}}` - Visitor's name
  - `{{email}}` - Visitor's email
  - `{{message}}` - Visitor's message
- The template will send to your email address
- Copy your **Template ID**

#### 4. Get Your Public Key
- Go to **Account**
- Copy your **Public Key**

#### 5. Update Your Code
Replace the placeholders in `script.js`:

```javascript
// Line 5
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

// Lines 96-100
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    name: name,
    email: email,
    message: message,
    to_email: 'AndrewAdeoti11@gmail.com' // Your email
});
```

That's it! Your contact form will now send emails.

---

## File Structure

```
portfolio-website-main/
├── index.html           # Homepage
├── about.html           # About page
├── cv.html              # CV/Resume page
├── projects.html        # Projects showcase
├── skills.html          # Skills breakdown
├── styles.css           # Main stylesheet (dark mode support)
├── script.js            # JavaScript (EmailJS integration)
├── styles-old.css       # Old styles (backup)
└── script-old.js        # Old script (backup)
```

---

## Navigation Structure

All pages have the same navbar with links:
- **Home** (`/` or `index.html`)
- **Projects** (`/projects.html`)
- **About** (`/about.html`)
- **CV** (`/cv.html`)
- **Contact** (direct to homepage contact section)
- **Dark Mode Toggle** (top right)

---

## Key Features

### Homepage
- **Hero Section**: Name, role, value proposition, 2 CTAs
- **Skills Preview**: 3-column summary of tech stack
- **Featured Projects**: 3 best projects with preview, description, tech stack, links
- **About Teaser**: Short intro + CTA to full about page
- **Contact Section**: Email + social links + simple form

### About Page
- Professional introduction
- Specializations (4 key areas)
- Tech stack breakdown (languages, frameworks, methods)
- Links to GitHub and LinkedIn

### CV Page
- Scannable resume format
- Print to PDF support (Ctrl+P or Cmd+P)
- Sections: Education, Experience, Key Projects, Skills, Certifications
- Professional formatting for recruiters

### Projects Page
- 4 detailed project case studies
- **For each project**:
  - The problem it solves
  - Your solution approach
  - Key accomplishments
  - Tech stack used
  - Impact/results
  - GitHub link

### Skills Page
- **Categorized skills**:
  - Programming Languages (with proficiency)
  - Frameworks & Libraries
  - Databases & Storage
  - Cloud & DevOps
  - AI & Machine Learning
  - Methodologies & Best Practices
- Visual skill bars for each technology
- Practice cards for methodologies

---

## Dark Mode Implementation

Dark mode is built into the CSS using CSS variables and works automatically:

**Automatic Detection**:
If you want to detect system preference, add this to `script.js`:

```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark && !localStorage.getItem('theme')) {
    htmlElement.setAttribute('data-theme', 'dark');
}
```

**Manual Toggle**: Click the sun/moon icon in the top right

---

## Customization Tips

### Change Primary Color
Open `styles.css` and change:
```css
:root {
    --primary: #2563eb; /* Change this color */
}
```
Use any hex color you prefer.

### Add Project Images
To add project previews:
1. Create an `images/` folder
2. Add project screenshots
3. In `projects.html`, replace the detailed project section with:
```html
<img src="images/project-name.jpg" alt="Project preview" style="width: 100%; border-radius: 0.75rem; margin: 1.5rem 0;">
```

### Update Your Info
Search and replace in all HTML files:
- `Andrew Adeoti` → Your name
- `AndrewAdeoti11@gmail.com` → Your email
- `github.com/andrewadeoti` → Your GitHub
- `linkedin.com/in/andrewadeoti` → Your LinkedIn
- Project descriptions with your actual projects

---

## Performance Notes

✅ **What's Fast**:
- No heavy libraries (pure CSS for dark mode)
- Minimal JavaScript (only essential functionality)
- CSS variables for efficient theming
- Clean, optimized HTML

⚠️ **If Adding Images**:
- Optimize before uploading (use tinypng.com)
- Use modern formats (WebP with fallbacks)
- Consider lazy loading for performance

---

## Browser Compatibility

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Deployment

### GitHub Pages (Free)
1. Create a GitHub repo: `yourusername.github.io`
2. Push all files to main branch
3. Your site goes live at `yourusername.github.io`

### Netlify (Free)
1. Connect your GitHub repo to Netlify
2. Set build command: (leave blank - static site)
3. Deploy!

### Custom Domain
- After deploying, add a custom domain in your hosting provider settings

---

## What's Different from Old Design

| Old | New |
|-----|-----|
| Multiple competing sections | Focused homepage → dedicated pages |
| Excessive animations | Smooth, purposeful animations |
| Typing effect | Clean, direct content |
| Parallax scrolling | Standard scrolling |
| Too many projects | 4 carefully curated projects |
| No dark mode | Full dark mode support |
| Complex CSS | Simple, maintainable CSS |
| Heavy JavaScript | Minimal, essential JavaScript |

---

## Next Steps

1. ✅ Sign up for EmailJS (free)
2. ✅ Update `script.js` with your credentials
3. ✅ Customize your info in all HTML files
4. ✅ Add project images to `/images/` folder
5. ✅ Test contact form
6. ✅ Deploy to GitHub Pages or Netlify

---

## Questions?

Refer to:
- **EmailJS Docs**: https://www.emailjs.com/docs/
- **HTML**: Each page has clear structure
- **CSS**: Check `styles.css` for variables and sections
- **JavaScript**: Minimal and well-commented

Your portfolio is now **minimal, clear, and credible** — exactly what gets you hired! 🚀
