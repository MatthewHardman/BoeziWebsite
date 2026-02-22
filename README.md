# Boezi Product Development Website - Implementation Guide

## Overview
This is a professional product development website for Boezi, built with plain HTML, CSS, and JavaScript for easy maintenance and modification.

## Project Structure

```
BoeziWebsite/
├── index.html              # Home page
├── adventurers.html        # Adventurers market segment
├── athletes.html           # Athletes market segment
├── builders.html           # Builders market segment
├── about.html              # About page with company info & process
├── portfolio.html          # Portfolio grid with modal
├── css/
│   └── styles.css          # All styling & responsive design
├── js/
│   └── main.js             # All JavaScript functionality
├── assets/
│   ├── images/             # All image files
│   └── icons/              # Icon files if needed
├── Boezipd.com Structure.txt     # Original requirements document
└── Brand Guide BoeziProductDevelopment.pdf  # Brand guidelines
```

## File Organization

### HTML Files
Each page is a complete, self-contained HTML file with:
- Navigation header (identical across all pages)
- Page-specific hero section
- Content sections
- Footer (identical across all pages)
- Script reference to main.js

**Pages:**
- **index.html**: Landing page with hero, three market segment cards, about preview, and CTA
- **adventurers.html**: Dedicated page for adventurers with custom theme color
- **athletes.html**: Dedicated page for athletes with custom theme color
- **builders.html**: Dedicated page for builders with custom theme color
- **about.html**: Comprehensive company information with timeline of proven process
- **portfolio.html**: Interactive project gallery with modal expansion

### CSS (styles.css)
The stylesheet uses **CSS variables for theming**, making it easy to customize:

**Default Theme Variables** (edit in `:root` section):
- `--primary-color`: Main brand color
- `--primary-dark`: Darker shade for hover states
- `--primary-light`: Light background shade
- `--accent-color`: Secondary highlight color
- Spacing, shadows, and other utilities

**Theme-Specific Overrides**:
- `body.theme-adventurers`: Warm orange/rust tones
- `body.theme-athletes`: Electric blue tones
- `body.theme-builders`: Industrial green tones

**How Theming Works**:
1. Each niche market page includes JavaScript that adds the appropriate class to `<body>`
2. CSS variables then switch to theme-specific values
3. All styled elements inherit the new colors automatically

### JavaScript (main.js)
Handles all interactive functionality:
- **Portfolio Modal**: Click portfolio items to expand and view details
- **Navigation Toggle**: Mobile menu hamburger (for small screens)
- **Smooth Scrolling**: Anchor link navigation
- **Scroll Animations**: Fade-in effects as users scroll
- **Theme Switching**: Demo functionality for testing themes (optional)

## Making Changes

### Change Colors
1. Open `css/styles.css`
2. Find the `:root` section (lines 28-60)
3. Update the color variables
4. Save and refresh browser

To customize individual themes:
- Find `body.theme-adventurers`, `body.theme-athletes`, or `body.theme-builders` sections
- Update their color variables

### Update Content
Simply edit the HTML file in any text editor:
- Text is in `<h1>`, `<h2>`, `<p>`, etc. tags
- Image paths are in `src` attributes
- Links are in `href` attributes

### Change Images
1. Save your image to `assets/images/`
2. Update the `src` attribute in the HTML file
3. Example: `<img src="assets/images/your-image.jpg" alt="Description">`

**Required Image Files**:
- `boezi-logo.png`: Company logo (referenced in navigation)
- `hero-bg.jpg`: Background for hero sections
- `adventurers-hero.jpg`, `athletes-hero.jpg`, `builders-hero.jpg`: Market segment cards
- `john-bio.jpg`: John's photo on about page
- `portfolio-1.jpg` through `portfolio-12.jpg`: Portfolio project thumbnails
- Other project images referenced in HTML files

### Add/Edit Portfolio Projects
In `js/main.js`, find the `portfolioData` array (around line 14):

```javascript
const portfolioData = [
  {
    id: 'project-1',
    title: 'Your Project Title',
    category: 'Your Category',
    image: '../assets/images/portfolio-1.jpg',
    description: 'Brief description shown in tooltip',
    details: 'Longer story shown in modal'
  },
  // Add more projects here
];
```

Then add corresponding items in `portfolio.html` with matching `data-project-id`:
```html
<div class="portfolio-item" data-project-id="project-1">
  <img src="assets/images/portfolio-1.jpg" alt="Project Title">
  <div class="portfolio-item-overlay">
    <h4>Project Title</h4>
  </div>
</div>
```

### Modify Contact Information
Replace `john@boezipd.com` throughout all files with your actual email:
1. Search for `john@boezipd.com` in all HTML files
2. Replace with your email address
3. Works with `mailto:` links for direct email sending

## Responsive Design

The website is fully responsive and works on:
- **Desktop** (1200px and above): Full multi-column layouts
- **Tablet** (768px - 1199px): Adjusted layouts, single portfolio columns
- **Mobile** (below 768px): Stacked layouts, hamburger navigation

No additional changes needed—CSS media queries handle everything.

## Color Customization Reference

### Default Colors (Used on Home & Generic Pages)
Modify in `:root` section of `css/styles.css`

### Adventurers Theme
- Primary: `#d4642f` (warm orange/rust)
- Dark: `#a84a1f`
- Light: `#fef3ed`
- Accent: `#2c5aa0` (cool blue)

### Athletes Theme
- Primary: `#1a73e8` (electric blue)
- Dark: `#0d47a1`
- Light: `#e8f0fe`
- Accent: `#ea4335` (red)

### Builders Theme
- Primary: `#34a853` (industrial green)
- Dark: `#1f7436`
- Light: `#e6f4ea`
- Accent: `#fbbc04` (yellow)

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- No external dependencies or frameworks
- Fast load times (static HTML)
- All CSS is in one file for caching
- Responsive images use `max-width: 100%` for scaling
- Smooth animations using CSS transitions

## Customization Tips

1. **Keep file paths consistent** - Images should be in `assets/images/`
2. **Update the logo** - Replace `boezi-logo.png` to rebrand
3. **Add pages** - Copy an existing page, change the content, add to navigation
4. **Change fonts** - Modify `font-family` in `css/styles.css` (currently Segoe UI)
5. **Add sections** - Copy section HTML blocks and modify content

## Deployment

This is a static website—no server needed. Can be hosted on:
- Netlify (free, drag-and-drop)
- GitHub Pages
- Any web hosting provider
- S3 + CloudFront (AWS)

Just upload all files maintaining the folder structure.

## Support Notes

All code includes comments explaining sections. If you need to modify:
- Check the comments in the HTML for section labels
- Look at similar sections to understand the pattern
- CSS is organized by component (headers, buttons, cards, etc.)
- JavaScript comments explain each function's purpose

---

**Website Complete!** All core functionality is ready. Simply add your images, update contact information, and customize colors to match your brand guide.
