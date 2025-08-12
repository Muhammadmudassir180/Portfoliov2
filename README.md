# Professional React Portfolio

A modern, responsive portfolio website built with React, featuring a professional dark theme and comprehensive sections for showcasing your skills, experience, and projects.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Dark Theme**: Modern and eye-catching design
- **Easy Customization**: Data-driven approach for easy content updates
- **Multiple Sections**: Home, About, Experience, Education, Projects, Contact, and Resume
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **Project Filtering**: Filter projects by category
- **Downloadable Resume**: Professional resume layout
- **SEO Optimized**: Meta tags and proper structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   └── Footer/
│       ├── Footer.js
│       └── Footer.css
├── pages/
│   ├── Home/
│   │   ├── Home.js
│   │   └── Home.css
│   ├── About/
│   │   ├── About.js
│   │   └── About.css
│   ├── Experience/
│   │   ├── Experience.js
│   │   └── Experience.css
│   ├── Education/
│   │   ├── Education.js
│   │   └── Education.css
│   ├── Projects/
│   │   ├── Projects.js
│   │   └── Projects.css
│   ├── Contact/
│   │   ├── Contact.js
│   │   └── Contact.css
│   └── Resume/
│       ├── Resume.js
│       └── Resume.css
├── App.js
├── App.css
└── index.js
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio_cursor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### 1. Personal Information

Update your personal information in the following files:

**Home Page** (`src/pages/Home/Home.js`):
```javascript
// Update the hero section
<h1 className="hero-title">
  Hi, I'm <span className="text-accent">Your Name</span>
</h1>
<h2 className="hero-subtitle">Full Stack Developer</h2>
```

**About Page** (`src/pages/About/About.js`):
```javascript
const personalInfo = {
  name: 'Your Name',
  age: '25',
  location: 'Your City, Country',
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  website: 'www.yourwebsite.com',
  freelance: 'Available'
};
```

**Contact Page** (`src/pages/Contact/Contact.js`):
```javascript
const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  // ... other contact info
];
```

### 2. Experience

Update your work experience in `src/pages/Experience/Experience.js`:

```javascript
const experiences = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    period: 'January 2023 - Present',
    type: 'Full-time',
    description: 'Your job description here.',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      // Add more achievements
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    logo: '🏢'
  },
  // Add more experiences
];
```

### 3. Education

Update your education in `src/pages/Education/Education.js`:

```javascript
const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    period: '2021 - 2023',
    gpa: '3.9/4.0',
    description: 'Your degree description.',
    achievements: [
      'Graduated with Distinction',
      'Research Assistant',
      // Add more achievements
    ],
    courses: ['Advanced Algorithms', 'Machine Learning'],
    logo: '🎓'
  },
  // Add more education entries
];
```

### 4. Projects

Update your projects in `src/pages/Projects/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description here.',
    image: '🛒', // Use emoji or add image URL
    category: 'fullstack', // frontend, backend, fullstack
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://project-url.com',
    githubUrl: 'https://github.com/username/project',
    features: [
      'Feature 1',
      'Feature 2',
      // Add more features
    ],
    status: 'completed' // completed or in-progress
  },
  // Add more projects
];
```

### 5. Skills

Update your skills in multiple locations:

**Home Page Skills** (`src/pages/Home/Home.js`):
```javascript
const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  // Add more skills with proficiency levels
];
```

**About Page Skills** (`src/pages/About/About.js`):
```javascript
const skills = [
  { 
    category: 'Frontend', 
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'] 
  },
  // Add more skill categories
];
```

### 6. Social Links

Update social media links in `src/components/Footer/Footer.js`:

```javascript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'fab fa-linkedin' },
  // Add more social links
];
```

### 7. Colors and Theme

Customize the color scheme in `src/App.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --text-primary: #ecf0f1;
  --text-secondary: #bdc3c7;
  --background-dark: #1a252f;
  --background-light: #2c3e50;
  --card-bg: #34495e;
  --border-color: #465c71;
  --hover-color: #2980b9;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --danger-color: #e74c3c;
}
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- **Mobile-first approach**
- **Bootstrap grid system**
- **Custom media queries**
- **Touch-friendly navigation**
- **Optimized typography for all screen sizes**

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `build` folder to Netlify

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Additional Features

### Contact Form Integration

To make the contact form functional, you can:

1. **Use EmailJS** (Client-side)
2. **Use Netlify Forms** (Serverless)
3. **Use a backend service** (Node.js, Python, etc.)

### Resume Download

To enable PDF download functionality:

1. **Install jsPDF**
   ```bash
   npm install jspdf html2canvas
   ```

2. **Implement PDF generation** in the Resume component

### Analytics

Add Google Analytics or other tracking:

1. **Install react-ga**
   ```bash
   npm install react-ga
   ```

2. **Initialize in App.js**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.

---

**Happy coding! 🎉**
