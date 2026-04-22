# 🚀 Project Deployment Guide

## Making Your Projects Accessible Online

### **1. GitHub Pages (Free & Easy)**

For web-based projects like your portfolio website:

```bash
# Navigate to your project directory
cd your-project-folder

# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub
# Then push your code
git remote add origin https://github.com/andrewadeoti/your-project-name.git
git branch -M main
git push -u origin main

# Enable GitHub Pages:
# 1. Go to your repository on GitHub
# 2. Click Settings > Pages
# 3. Select "Deploy from a branch"
# 4. Choose "main" branch
# 5. Your site will be available at: https://andrewadeoti.github.io/your-project-name/
```

### **2. Netlify (Free & Professional)**

For any web project:

1. **Connect GitHub Repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository

2. **Deploy Settings:**
   - Build command: (leave empty for static sites)
   - Publish directory: `./` (or your build folder)
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - You'll get a free `.netlify.app` domain
   - Can add custom domain later

### **3. Vercel (Free & Fast)**

Similar to Netlify:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Automatic deployment on every push
4. Free SSL and global CDN

### **4. Heroku (For Backend Projects)**

For your Java/Spring Boot projects:

```bash
# Install Heroku CLI
# Create Procfile in your project root:
echo "web: java -jar target/your-app.jar" > Procfile

# Deploy
heroku create your-app-name
git push heroku main
```

### **5. Railway (Alternative to Heroku)**

- Go to [railway.app](https://railway.app)
- Connect GitHub repository
- Automatic deployment
- Free tier available

## 📱 **Mobile App Deployment**

### **Android Apps:**
1. **Google Play Store:**
   - Create developer account ($25 one-time fee)
   - Build APK or AAB file
   - Upload to Play Console
   - Publish for public access

2. **Alternative - Direct APK:**
   - Build APK file
   - Upload to GitHub Releases
   - Share download link

### **iOS Apps:**
1. **App Store:**
   - Apple Developer Account ($99/year)
   - Build and upload via Xcode
   - Submit for review

2. **TestFlight:**
   - Free beta testing platform
   - Share with up to 10,000 testers

## 🤖 **AI Chatbot Deployment**

### **For Python Chatbots:**

1. **Streamlit (Easiest):**
```python
# app.py
import streamlit as st

st.title("AI Food Chatbot")
user_input = st.text_input("Ask me about food!")

if user_input:
    # Your chatbot logic here
    response = your_chatbot_function(user_input)
    st.write(f"Bot: {response}")
```

2. **Deploy to Streamlit Cloud:**
   - Push code to GitHub
   - Go to [share.streamlit.io](https://share.streamlit.io)
   - Connect repository
   - Deploy automatically

3. **Alternative - Hugging Face Spaces:**
   - Free hosting for ML models
   - Easy deployment from GitHub

## 🌐 **Update Your Website Links**

Once deployed, update your portfolio links:

```html
<!-- Replace placeholder links with actual deployed URLs -->
<div class="project-links">
    <a href="https://your-chatbot-app.netlify.app" class="project-link">
        <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
    <a href="https://github.com/andrewadeoti/ai-chatbot" class="project-link">
        <i class="fab fa-github"></i> Code
    </a>
</div>
```

## 📋 **Recommended Deployment Strategy**

### **Priority 1 (Easy Wins):**
1. **Portfolio Website** → GitHub Pages or Netlify
2. **AI Chatbot** → Streamlit Cloud
3. **Weather App** → Netlify (if web-based)

### **Priority 2 (Backend Projects):**
1. **DormRoom System** → Railway or Heroku
2. **Mobile App** → APK download link

### **Priority 3 (Advanced):**
1. **Livestock Tracking** → Deploy ML model to Hugging Face
2. **Custom domains** for professional branding

## 🔗 **Quick Start Commands**

```bash
# For a simple HTML/CSS/JS project
# 1. Create repository on GitHub
# 2. Push your code
git add .
git commit -m "Initial commit"
git push origin main

# 3. Enable GitHub Pages in repository settings
# 4. Your site will be live in 5 minutes!
```

## 📞 **Need Help?**

- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Netlify Support**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Streamlit**: [docs.streamlit.io](https://docs.streamlit.io)

---

**Pro Tip:** Start with GitHub Pages for your portfolio website - it's the easiest way to get your projects online quickly! 🚀 