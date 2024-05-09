const currentPage = JSON.parse(localStorage.getItem('current-page'));

function appendContent(url, targetSelector) {
    fetch(url)
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
  
  appendContent('./components/topbar.html', '.main-wrapper');
  appendContent('./components/header.html', '.main-wrapper');
  appendContent('./components/home-slider.html', '.main-wrapper');
  appendContent('./components/footer.html', '.main-wrapper');

  if (!currentPage || currentPage === 'home') {
    appendContent('./pages/home.html', '.main-wrapper');
  }
  