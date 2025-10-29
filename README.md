# 🚀 Modern Portfolio Website

A modern, responsive portfolio website built with React 18, featuring smooth animations, glassmorphism design, and an easy-to-manage project system.

## ✨ Features

- **Modern Design**: Glassmorphism effects, smooth animations, and contemporary UI
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Navigation**: Floating navigation with scroll progress indicator
- **Project Management**: Easy-to-use system for adding and managing projects
- **Performance Optimized**: Lazy loading, modern React patterns, and optimized assets
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 🛠️ Tech Stack

- **React 18** - Latest React with concurrent features
- **Framer Motion** - Smooth animations and interactions
- **Swiper** - Modern touch slider for image galleries
- **CSS Variables** - Modern CSS with custom properties
- **React Intersection Observer** - Efficient scroll-triggered animations

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/camilolaiton/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Hero section with profile
│   ├── About.js        # About section
│   ├── Projects.js     # Featured projects showcase
│   ├── Navigation.js   # Floating navigation
│   ├── Skills.js       # Technical skills grid
│   └── ...
├── css/                # Component-specific styles
│   ├── variables.css   # CSS custom properties
│   ├── Header.css      # Header styling
│   ├── Projects.css    # Projects styling
│   └── ...
└── imgs/               # Static images

public/
├── personal_information.json  # Personal data
├── projects.json              # Project data
└── images/                    # Project images
```

## 🎨 Adding New Projects

### Method 1: Using the Project Configuration (Recommended)

Edit `/public/projects.json` to add new projects:

```json
{
  "featured_projects": [
    {
      "id": "unique-project-id",
      "title": "Project Title",
      "category": "deep-learning", // or web-development, research, etc.
      "featured": true,
      "status": "completed", // or in-progress
      "start_date": "2023-01",
      "end_date": "2023-12",
      "short_description": "Brief project description for cards",
      "technologies": ["react", "python", "tensorflow"],
      "github_url": "https://github.com/username/repo",
      "demo_url": "https://demo-link.com",
      "paper_url": "https://paper-link.com",
      "images": [
        {
          "url": "images/project-folder/image1.jpg",
          "title": "Image Title",
          "description": "Image description",
          "is_featured": true // This image will be shown on project cards
        }
      ],
      "highlights": [
        "Key achievement 1",
        "Key achievement 2",
        "Key achievement 3"
      ]
    }
  ]
}
```

### Method 2: Step-by-Step Guide

1. **Add project images**
   - Create a folder in `/public/images/` (e.g., `/public/images/my-new-project/`)
   - Add your project images (JPG, PNG, GIF supported)

2. **Update projects.json**
   - Open `/public/projects.json`
   - Add your project to the `featured_projects` array
   - Use the template above as reference

3. **Add new technologies (if needed)**
   - Add new entries to the `technology_stack` object in `projects.json`
   - Use [Iconify](https://iconify.design) for technology icons

4. **Add new categories (if needed)**
   - Add new entries to the `project_categories` object
   - Choose appropriate icons and colors

### Project Categories

Available categories:
- `deep-learning` - AI/ML projects
- `computer-vision` - Computer vision projects  
- `web-development` - Web applications
- `research` - Research papers/studies
- `data-science` - Data analysis projects

### Technology Stack

Pre-configured technologies include:
- **Languages**: Python, JavaScript, TypeScript
- **Frameworks**: React, TensorFlow, PyTorch
- **Tools**: Docker, Git, AWS
- **Research**: Systematic reviews, medical imaging

## 🎨 Customizing Design

### Colors and Themes

Edit `/src/css/variables.css` to customize:

```css
:root {
  /* Primary colors */
  --color-primary: #2563eb;
  --color-accent: #f59e0b;
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* Spacing */
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-family-heading: 'Inter', sans-serif;
}
```

### Adding Custom Animations

Use Framer Motion for animations:

```jsx
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

## 🔧 Configuration

### Personal Information

Edit `/public/personal_information.json`:

```json
{
  "name": "Your Name",
  "titles": ["Title 1", "Title 2"],
  "social": [
    {
      "name": "github",
      "url": "https://github.com/username",
      "class": "akar-icons:github-fill",
      "color": "white"
    }
  ],
  "skills": [...],
  "experience": [...],
  "research": [...]
}
```

### Site Metadata

Update `/public/index.html`:
- Title, description, meta tags
- Favicon and app icons
- Google Fonts imports

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Set homepage in package.json**
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Vercel**: Connect GitHub repo
- **Netlify**: Drag & drop build folder
- **Custom Server**: Upload build folder contents

## 🔍 SEO Optimization

- Update meta tags in `/public/index.html`
- Add structured data for projects
- Optimize images (use WebP when possible)
- Add alt text for all images

## 📊 Analytics

Add Google Analytics or other tracking:

1. Add tracking script to `/public/index.html`
2. Update privacy policy if needed
3. Consider GDPR compliance for EU visitors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Iconify](https://iconify.design) for icons
- [Swiper](https://swiperjs.com/) for image galleries
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) for scroll animations

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review example projects in the repo

---

**Built with ❤️ by [Camilo Laiton](https://github.com/camilolaiton)**
