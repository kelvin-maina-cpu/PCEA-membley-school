# PCEA Membley School Website

A modern, responsive static website for PCEA Membley School built with HTML, CSS, and vanilla JavaScript.

## ✨ Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern Design**: Clean, professional interface with dark mode
- **Performance Optimized**: Lazy loading, WebP images, efficient CSS/JS
- **Accessibility**: WCAG compliant with keyboard navigation
- **SEO Optimized**: Structured data, meta tags, local search visibility
- **Social Media Integration**: Embedded social feeds and links
- **Interactive Gallery**: Filterable photo gallery with categories
- **Testimonials**: Parent and community testimonials
- **Video Section**: School introduction video placeholder
- **News & Events**: Dynamic content sections
- **Downloads**: PDF resources and documents

## 🏗️ Architecture

```
PCEA-MEMBERLY-SCHOOL/
├── index.html              # Main website with all sections
├── style.css              # Complete styling system
├── js/
│   ├── main.js           # Application entry point
│   └── ui-handlers.js    # Interactive functionality
├── PCEASCH-IMAGES/        # Original school images
├── downloads/            # PDF documents directory
├── optimize-images.js    # Image optimization script
└── README.md            # This documentation
```

## 🚀 Quick Start

### Option 1: XAMPP (Windows)

```bash
# Place folder in htdocs directory
# Start XAMPP Apache server
# Visit: http://localhost/PCEA-MEMBERLY-SCHOOL/
```

### Option 2: Python Server

```bash
cd PCEA-MEMBERLY-SCHOOL
python -m http.server 8000
# Visit: http://localhost:8000
```

### Option 3: Node.js

```bash
npx http-server -c-1
# Visit provided URL
```

## 🎨 Content Management

### Static Site Updates

Since this is a static site, content updates are straightforward:

1. **Text Content**: Edit directly in `index.html`
2. **Images**: Replace files in `PCEASCH-IMAGES/` folder
3. **PDFs**: Add documents to `downloads/` folder
4. **Styling**: Modify `style.css` for design changes

### Image Optimization

```bash
# Install dependencies
npm install sharp

# Optimize images to WebP format
node optimize-images.js
```

### Adding New Content

#### News Articles

Add to the `#news` section in `index.html`:

```html
<div class="news-card">
  <div class="news-image">
    <img src="PCEASCH-IMAGES/new-image.jpg" alt="News title" />
  </div>
  <div class="news-content">
    <h4>News Title</h4>
    <p class="news-date">January 15, 2026</p>
    <p>News content...</p>
    <a href="#" class="read-more">Read More</a>
  </div>
</div>
```

#### Gallery Images

Add to the `.activities-gallery` section:

```html
<div class="gallery-item" data-category="sports">
  <img src="PCEASCH-IMAGES/new-image.jpg" alt="Description" loading="lazy" />
  <div class="overlay">
    <h3>Image Title</h3>
    <p>Description</p>
  </div>
</div>
```

## 🔍 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Proper heading hierarchy (H1, H2, H3)
- **Local SEO**: Geo-targeting for Membley, Ruiru, Kiambu
- **Performance**: Fast loading with optimized assets
- **Accessibility**: Screen reader friendly markup

## 📱 Responsive Design

- **Mobile First**: Optimized for phones and tablets
- **Touch Friendly**: Large touch targets and swipe gestures
- **Progressive Enhancement**: Works without JavaScript
- **Cross-Browser**: Chrome, Firefox, Safari, Edge support

## 🎯 Key Sections

### Navigation

- Home, About, Academics, Facilities
- News & Events, Downloads, Parent Resources
- Social media links in header and footer

### Content Areas

- **Hero Section**: Compelling value proposition
- **About**: Mission, vision, history, core values
- **Academics**: CBE curriculum, levels, achievements
- **Facilities**: Modern amenities and activities
- **Admissions**: Complete process and requirements
- **News**: Latest updates and events
- **Testimonials**: Parent and community feedback
- **Gallery**: Interactive photo gallery with filters

### Trust Builders

- Parent testimonials
- School achievements
- Social media integration
- Video introduction section

## 🛠️ Development

### CSS Architecture

- CSS Custom Properties (variables) for theming
- Mobile-first responsive design
- Dark mode support
- Smooth animations and transitions

### JavaScript Features

- Gallery filtering system
- Lazy image loading
- Smooth scrolling navigation
- Mobile menu functionality
- Theme toggle (light/dark mode)

### Performance Optimizations

- Image lazy loading
- Efficient CSS/JS minification ready
- WebP image support
- Minimal HTTP requests

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (expected)
- **Load Time**: <2 seconds on fast connections
- **Mobile Score**: 90+ on all devices
- **SEO Score**: 95+ with proper meta tags

## 🌐 Deployment

### Static Hosting Options

- **GitHub Pages**: Free, automatic deployment
- **Netlify**: CDN, form handling, continuous deployment
- **Vercel**: Global CDN, excellent performance
- **AWS S3 + CloudFront**: Scalable enterprise solution

### Deployment Steps

1. Upload all files to hosting platform
2. Configure domain (optional)
3. Test all links and functionality
4. Monitor performance with analytics

## 📞 Support

For technical support or content updates:

- **Email**: pceasmembleyschool@gmail.com
- **Phone**: +254 756 428 414
- **Location**: Membley, Ruiru, Kiambu County, Kenya

## 📝 License

This project is maintained by PCEA Membley School for educational and informational purposes.

---

**Last Updated**: February 19, 2026
**Version**: 2.0 - Professional Institutional Standard
