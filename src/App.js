import React, { useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Works from './components/Works';
import Numbers from './components/Numbers';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const html = document.documentElement;
    const siteBody = document.querySelector('body');
    const preloader = document.getElementById('preloader');

    // Simulate what original main.js ssPreloader does:
    // Add ss-preload while loading, then ss-loaded + ss-show after React mounts
    html.classList.add('ss-preload');

    const showSite = () => {
      html.classList.remove('ss-preload');
      html.classList.add('ss-loaded');

      if (preloader) {
        preloader.addEventListener('transitionend', function afterTransition(e) {
          if (e.target.matches('#preloader')) {
            siteBody.classList.add('ss-show');
            e.target.style.display = 'none';
            preloader.removeEventListener(e.type, afterTransition);
          }
        });
      } else {
        siteBody.classList.add('ss-show');
      }

      // Init all other JS features after React renders
      if (window.ssInit) {
        window.ssInit();
      }
    };

    // Short timeout to let React fully render DOM before showing
    const timer = setTimeout(showSite, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="page" className="s-pagewrap">
      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Header />
      <Intro />
      <About />
      <Works />
      <Numbers />
      <Footer />
    </div>
  );
}

export default App;
