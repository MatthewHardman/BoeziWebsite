# Quick Start - Customization Checklist

Use this checklist to quickly customize the website for your needs.

## 1. IMAGES (Required - Site won't display correctly without these)

### Logo
- [ ] Replace `assets/images/boezi-logo.png` with your company logo
- File should be PNG or JPG (around 200px height recommended)

### Hero Section Images
- [ ] `assets/images/hero-bg.jpg` - Background for all hero sections
- [ ] `assets/images/adventurers-hero.jpg` - Adventurers market card image
- [ ] `assets/images/athletes-hero.jpg` - Athletes market card image
- [ ] `assets/images/builders-hero.jpg` - Builders market card image

### About Page Images
- [ ] `assets/images/john-bio.jpg` - Photo of John for about page

### Portfolio Images
- [ ] `assets/images/portfolio-1.jpg` through `portfolio-12.jpg`
- [ ] `assets/images/adventurers-project-1.jpg`, `adventurers-project-2.jpg`, `adventurers-project-3.jpg`
- [ ] `assets/images/athletes-project-1.jpg`, `athletes-project-2.jpg`, `athletes-project-3.jpg`
- [ ] `assets/images/builders-project-1.jpg`, `builders-project-2.jpg`, `builders-project-3.jpg`

## 2. CONTACT INFORMATION

Find and replace `john@boezipd.com` with your actual email:
- [ ] `index.html` - 3 instances
- [ ] `adventurers.html` - 3 instances
- [ ] `athletes.html` - 3 instances
- [ ] `builders.html` - 3 instances
- [ ] `about.html` - 3 instances
- [ ] `portfolio.html` - 2 instances

**Tip:** Use Find & Replace in your editor (Ctrl+H):
- Find: `john@boezipd.com`
- Replace with: `your-email@domain.com`
- Replace All

## 3. COLORS

### Update Theme Colors
Edit `css/styles.css`:

1. **Home page defaults** (around line 28):
   - `--primary-color`: Main brand color
   - `--primary-dark`: Darker for hover states
   - `--primary-light`: Light background
   - `--accent-color`: Secondary color

2. **Adventurers theme** (around line 66):
   - Update all four color variables
   - Current: warm orange/rust with blue accent

3. **Athletes theme** (around line 75):
   - Update all four color variables
   - Current: electric blue with red accent

4. **Builders theme** (around line 84):
   - Update all four color variables
   - Current: industrial green with yellow accent

**Easy way:** Replace entire color sections with your brand colors

## 4. PORTFOLIO PROJECTS

### Add/Update Portfolio Items

**Step 1:** Update project data in `js/main.js` (around line 14):

```javascript
const portfolioData = [
  {
    id: 'project-1',
    title: 'Your Project Title Here',
    category: 'Category Name',
    image: '../assets/images/portfolio-1.jpg',
    description: 'Short description that appears in the tooltip',
    details: 'Longer story about the project that appears when opened'
  },
  // ... more projects
];
```

**Step 2:** Update HTML in `portfolio.html` to match:
- [ ] Update `data-project-id` to match
- [ ] Update image in `<img src>`
- [ ] Update title in overlay

## 5. PAGE CONTENT

### Home Page (index.html)
- [ ] Update hero headline and subheading
- [ ] Update segment descriptions (Adventurers, Athletes, Builders)
- [ ] Update about preview section text

### Niche Pages (adventurers.html, athletes.html, builders.html)
- [ ] Update page headline and description
- [ ] Update featured project cards (3 per page)
- [ ] Update approach/methodology sections

### About Page (about.html)
- [ ] Update John's bio section
- [ ] Update mission statement
- [ ] Update values section
- [ ] Update team/network information
- [ ] Update process timeline steps

### Portfolio Page (portfolio.html)
- [ ] Grid automatically populates from `js/main.js` data

## 6. OPTIONAL CUSTOMIZATIONS

### Fonts
Change in `css/styles.css`, find `font-family`:
- [ ] Current: 'Segoe UI'
- [ ] Try: 'Arial', 'Verdana', or Google Fonts

### Spacing
Adjust in `css/styles.css` `:root` section:
- [ ] `--spacing-*` variables control padding/margins
- [ ] Larger values = more spacious design

### Animation Speed
Adjust in `css/styles.css` `:root` section:
- [ ] `--transition-*` variables control animation speeds
- [ ] Lower values = faster animations

### Footer Text
- [ ] Update copyright year in all pages
- [ ] Update company name if needed

## 7. TESTING

### Before Launching
- [ ] Test all links work
- [ ] Test contact email link works
- [ ] View on desktop, tablet, mobile
- [ ] Test portfolio modal opens/closes
- [ ] Test navigation on mobile (hamburger menu)
- [ ] All images load correctly

### Desktop Test
- [ ] Open in Chrome, Firefox, Safari, Edge
- [ ] Check layout looks good at 1920px width

### Mobile Test
- [ ] Test at 375px (iPhone width)
- [ ] Test hamburger menu opens/closes
- [ ] Test touch interactions work
- [ ] Check text is readable

## 8. DEPLOYMENT

After customization, you can deploy to:
- [ ] **Netlify** (drag & drop, free)
- [ ] **GitHub Pages** (free, requires Git)
- [ ] **Standard web hosting** (FTP upload)
- [ ] **AWS S3 + CloudFront**

All files go together—no build process needed!

---

## Need Help?

### Common Tasks

**Q: How do I add a 4th niche market?**
A: Copy `adventurers.html`, rename it, update content, add to navigation menus

**Q: How do I change the main brand color?**
A: Edit `--primary-color` in `:root` section of `css/styles.css`

**Q: How do I make the logo bigger/smaller?**
A: Edit the `height` property on `.logo img` in `css/styles.css` (currently 50px)

**Q: Can I add a contact form instead of just email?**
A: Yes! Add a form to any page, connect to Netlify Forms or Formspree

**Q: How do I add social media links?**
A: Add links in footer section of HTML files, or add icons in header nav

---

**Website is complete and ready for customization!**
