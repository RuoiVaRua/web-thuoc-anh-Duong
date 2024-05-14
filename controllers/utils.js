const currentPage = JSON.parse(localStorage.getItem('current-page'));

  async function appendContent(url, targetSelector) {
    await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) {
          throw new Error(`Target element ${targetSelector} not found`);
        }
        targetElement.innerHTML += html;
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  }

  function clearContent() {
    const targetElement = document.querySelector('.main-wrapper');
    if (targetElement) {
        targetElement.innerHTML = '';
    }
  }
  
  (async () => {
    await appendContent('./components/topbar.html', '.main-wrapper');
    await appendContent('./components/header.html', '.main-wrapper');
    
    if (!currentPage || currentPage === 'home') {
      // await appendContent('./pages/home.html', '.main-wrapper');
      await appendContent('./components/home-sections/home-slider.html', '.main-wrapper');
      await appendContent('./components/home-sections/general-introduction.html', '.main-wrapper');
      await appendContent('./components/home-sections/hometown-specialties.html', '.main-wrapper');
      await appendContent('./components/home-sections/products-categories.html', '.main-wrapper');
      await appendContent('./components/home-sections/two-banners.html', '.main-wrapper');
      await appendContent('./components/home-sections/selling-products-header.html', '.main-wrapper');
      await appendContent('./components/home-sections/selling-products-content.html', '.main-wrapper');
      await appendContent('./components/home-sections/customer-reviews.html', '.main-wrapper');
      await appendContent('./components/home-sections/footer-banner.html', '.main-wrapper');
      await appendContent('./components/home-sections/event-news.html', '.main-wrapper');
      await appendContent('./components/home-sections/certificate-header.html', '.main-wrapper');
      await appendContent('./components/home-sections/certificate-content.html', '.main-wrapper');
    }
    else if (['about', 'contact', 'products'].includes(currentPage)) {
      await appendContent(`./pages/${currentPage}.html`, '.main-wrapper');
    }
    
    await appendContent('./components/footer.html', '.main-wrapper');
  })()