# 🌱 Digital Garden & Portfolio Website

A beautiful, modern personal website that grows like a garden — showcasing your skills, thoughts, and projects in an organic, evolving way.

## ✨ Features

### 🧠 Digital Garden Blog
- **Evergreen Notes**: Short, focused articles on topics you're learning
- **Interconnected Content**: Notes can link to each other like a personal wiki
- **Knowledge Evolution**: Shows how your understanding grows over time
- **Categories & Tags**: Organized by topics and technologies

### 💼 Interactive Portfolio
- **Project Cards**: Beautiful showcase of your work
- **Technology Stack**: Clear display of tools and technologies used
- **Live Demos**: Links to working projects
- **GitHub Integration**: Direct links to source code

### 🎨 Modern Design
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Engaging hover effects and transitions
- **Custom Theme**: Easy to customize colors and styling
- **Accessibility**: Built with accessibility best practices

### 🛠️ Toolbox Section
- **Technology Stack**: Showcase your skills and tools
- **Learning Resources**: Share what you're currently studying
- **Interactive Elements**: Hover effects and tooltips

### 📇 Contact & Resume
- **Contact Form**: Easy way for visitors to reach you
- **Social Links**: Connect your professional profiles
- **Resume Download**: Professional PDF download option

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Local Development
For the best development experience:
1. Use a local server (like Live Server in VS Code)
2. Open the project in your preferred code editor
3. Make changes and see them update in real-time

## 🎨 Customization Guide

### Personal Information
Update the following in `index.html`:

```html
<!-- Update your name -->
<span class="logo-text">Your Name</span>

<!-- Update hero section -->
<h1 class="hero-title">Welcome to My <span class="highlight">Digital Garden</span></h1>

<!-- Update contact information -->
<p>your.email@example.com</p>
<p>Your Location</p>
```

### Colors & Theme
Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #10b981;    /* Main brand color */
    --secondary-color: #3b82f6;  /* Secondary color */
    --accent-color: #f59e0b;     /* Accent color */
    --text-primary: #1f2937;     /* Main text color */
    --text-secondary: #6b7280;   /* Secondary text color */
    /* ... more variables */
}
```

### Adding Garden Notes
Add new notes in the Digital Garden section:

```html
<article class="garden-note">
    <div class="note-header">
        <span class="note-category">Your Category</span>
        <span class="note-date">2024</span>
    </div>
    <h3 class="note-title">Your Note Title</h3>
    <p class="note-excerpt">Brief description of your note...</p>
    <div class="note-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
    <div class="note-links">
        <a href="#" class="note-link">Read More →</a>
    </div>
</article>
```

### Adding Portfolio Projects
Add new projects in the Portfolio section:

```html
<div class="portfolio-card">
    <div class="card-image">
        <!-- Add your project preview image here -->
    </div>
    <div class="card-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology1</span>
            <span class="tech-tag">Technology2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### Updating Toolbox
Modify the toolbox categories and tools in the Toolbox section:

```html
<div class="toolbox-category">
    <h3 class="category-title">Your Category</h3>
    <div class="tools-list">
        <div class="tool-item">
            <span class="tool-icon">🔧</span>
            <span class="tool-name">Your Tool</span>
        </div>
        <!-- Add more tools -->
    </div>
</div>
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎯 Performance Features

- **Optimized Images**: Fast loading times
- **Smooth Animations**: 60fps animations
- **Lazy Loading**: Content loads as needed
- **Minimal Dependencies**: Only essential external resources

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as source
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Get a custom domain (optional)

### Vercel
1. Import your repository to Vercel
2. Automatic deployments
3. Global CDN for fast loading

## 🎨 Design Inspiration

This website draws inspiration from:
- **Digital Gardens**: Personal knowledge management systems
- **Modern Portfolios**: Clean, professional design
- **Nature-Inspired UI**: Organic growth and evolution
- **Minimalist Design**: Focus on content and usability

## 🤝 Contributing

Feel free to:
- Fork this project
- Create feature branches
- Submit pull requests
- Report issues
- Suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- The digital garden community for inspiration
- All contributors and supporters

## 📞 Support

If you need help customizing or deploying your website:
1. Check the customization guide above
2. Look at the code comments for guidance
3. Open an issue on GitHub
4. Reach out to the community

---

**Happy coding! 🌱✨**

*Built with ❤️ and lots of ☕* 