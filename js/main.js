/* ============================================================================
   Boezi Product Development - Shared JavaScript
   
   Handles interactive elements like portfolio modal expansion,
   navigation toggling, and smooth scrolling.
   ========================================================================== */

/* ============================================================================
   Flip Card Navigation (Expertise Section)
   ========================================================================== */

function initFlipCards() {
  const flipCards = document.querySelectorAll('.flip-card');
  
  flipCards.forEach(card => {
    card.addEventListener('click', function() {
      const targetPage = this.getAttribute('data-page');
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });
}

/* ============================================================================
   Hero Link Scroll Navigation
   ========================================================================== */

function initHeroLinks() {
  const heroLinks = document.querySelectorAll('.hero-link');
  
  heroLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================================
   Portfolio Modal Functionality
   ========================================================================== */

// Portfolio items data - customize this with your actual project information
const portfolioData = [
  {
    id: 'project-1',
    title: 'Project Title 1',
    category: 'Category',
    image: '../assets/images/portfolio-1.jpg',
    description: 'Brief description of the project and the challenge solved.',
    details: 'Longer story about the project, the process, and outcomes.'
  },
  {
    id: 'project-2',
    title: 'Project Title 2',
    category: 'Category',
    image: '../assets/images/portfolio-2.jpg',
    description: 'Brief description of the project and the challenge solved.',
    details: 'Longer story about the project, the process, and outcomes.'
  },
  {
    id: 'project-3',
    title: 'Project Title 3',
    category: 'Category',
    image: '../assets/images/portfolio-3.jpg',
    description: 'Brief description of the project and the challenge solved.',
    details: 'Longer story about the project, the process, and outcomes.'
  }
  // Add more projects as needed
];

// Initialize portfolio modal functionality
function initPortfolioModal() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('portfolio-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (!portfolioItems.length || !modal) {
    return; // Skip if portfolio section not on this page
  }

  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const projectIndex = portfolioData.findIndex(p => p.id === projectId);
      
      if (projectIndex !== -1) {
        openPortfolioModal(portfolioData[projectIndex]);
      }
    });
  });

  // Close modal when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', closePortfolioModal);
  }

  // Close modal when clicking outside content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closePortfolioModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closePortfolioModal();
    }
  });
}

function openPortfolioModal(project) {
  const modal = document.getElementById('portfolio-modal');
  const modalImage = document.querySelector('.modal-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalCategory = document.querySelector('.modal-category');
  const modalDescription = document.querySelector('.modal-description');
  const modalDetails = document.querySelector('.modal-details');

  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  modalDetails.textContent = project.details;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
  const modal = document.getElementById('portfolio-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

/* ============================================================================
   Navigation Toggle (Mobile)
   ========================================================================== */

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('nav')) {
        navMenu.classList.remove('active');
      }
    });
  }
}

/* ============================================================================
   Smooth Scrolling for Anchor Links
   ========================================================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============================================================================
   Intersection Observer for Fade-in Effects
   ========================================================================== */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Observe elements with fade-in class
  document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    observer.observe(element);
  });
}

/* ============================================================================
   Theme Switching (for demo/testing)
   ========================================================================== */

function initThemeSwitcher() {
  const themeButtons = document.querySelectorAll('[data-theme]');
  
  themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const theme = this.getAttribute('data-theme');
      const body = document.body;
      
      // Remove all theme classes
      body.classList.remove('theme-adventurers', 'theme-athletes', 'theme-builders');
      
      // Add selected theme
      if (theme !== 'default') {
        body.classList.add(`theme-${theme}`);
      }
      
      // Store preference in localStorage
      localStorage.setItem('selected-theme', theme);
    });
  });

  // Load saved theme preference
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme && savedTheme !== 'default') {
    document.body.classList.add(`theme-${savedTheme}`);
  }
}

/* ============================================================================
   Initialize All Functions on DOM Ready
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initFlipCards();
  initHeroLinks();
  initPortfolioModal();
  initSmoothScroll();
  initScrollAnimations();
  initThemeSwitcher();
});

/* ============================================================================
   Utility: Add fade-in animation style
   ========================================================================== */

const style = document.createElement('style');
style.textContent = `
  .fade-in-on-scroll {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-in-on-scroll.fade-in {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
`;
document.head.appendChild(style);
