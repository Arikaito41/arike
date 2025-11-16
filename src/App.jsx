import React, { useMemo, useState } from 'react';

import Gallery from './components/Gallery.jsx';
import Lightbox from './components/Lightbox.jsx';

const BRAND_LOGO = '/img/brand-logo.png'; // place your logo in public/img/brand-logo.png
const WHATSAPP_LINK = 'https://wa.me/2347032686308';
const PHONE_NUMBER = '07032686308';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);

  const images = useMemo(() => [
    '5812262857113013057.jpg','5812262857113013058.jpg','5812262857113013059.jpg','5812262857113013060.jpg','5812262857113013061.jpg','5812262857113013062.jpg','5812262857113013063.jpg','5812262857113013064.jpg','5812262857113013065.jpg','5812262857113013066.jpg','5812262857113013067.jpg','5812262857113013068.jpg','5812262857113013069.jpg','5812262857113013076.jpg','5812262857113013077.jpg','5812262857113013078.jpg','5812262857113013079.jpg','5812262857113013080.jpg','5812262857113013081.jpg','5812262857113013082.jpg','5812262857113013083.jpg','5812262857113013084.jpg','5812262857113013085.jpg','5812262857113013086.jpg','5812262857113013088.jpg','5812262857113013089.jpg','5812262857113013090.jpg','5812262857113013091.jpg','5812262857113013092.jpg','5812262857113013093.jpg','5812262857113013094.jpg','5812262857113013096.jpg','5812262857113013097.jpg','5812262857113013098.jpg','5812262857113013099.jpg','5812262857113013100.jpg','5812262857113013101.jpg','5812262857113013102.jpg','5812262857113013103.jpg','5812262857113013104.jpg','5812262857113013105.jpg','5812262857113013106.jpg','5812262857113013107.jpg','5812262857113013108.jpg','5812262857113013109.jpg','5812262857113013110.jpg','5812262857113013111.jpg','5812262857113013112.jpg','5812262857113013113.jpg','5812262857113013114.jpg','5812262857113013115.jpg','5812419945541864637.jpg'
  ], []);

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a href="#" className="brand" aria-label="K Smart Luxury Home">
            <img className="brand-logo" src={BRAND_LOGO} alt="K Smart Luxury logo" onError={(e)=>{e.currentTarget.style.display='none';}} />
            <span className="brand-name">K Smart Luxury</span>
          </a>
          <ul className="nav-links">
            <li><a href="#gallery">Collections</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="cta whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener">WhatsApp</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1>K Smart Luxury</h1>
            <p className="tagline">Collections crafted for modern elegance</p>
            <div className="hero-actions">
              <a className="cta primary" href="#gallery">Shop Collections</a>
              <a className="cta" href={`tel:${PHONE_NUMBER}`}>Call {formatPhone(PHONE_NUMBER)}</a>
            </div>
          </div>
          <div className="hero-decor">
            <span className="orb orb-1"></span>
            <span className="orb orb-2"></span>
            <span className="orb orb-3"></span>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section-header">
            <h2>Featured Collections</h2>
            <p>Explore our handpicked looks and premium pieces.</p>
          </div>
          <Gallery images={images} onOpen={setLightboxItem} />
        </section>

        <section className="section" id="about">
          <div className="about">
            <div className="about-text">
              <h2>About K Smart Luxury</h2>
              <p>
                We curate standout fashion with refined details—from everyday essentials to show-stopping pieces.
                Our mission is simple: deliver luxury that feels personal, expressive, and effortless.
              </p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Contact</h2>
          <div className="contact-cards">
            <a className="contact-card" href={WHATSAPP_LINK} target="_blank" rel="noopener">
              <div className="icon">💬</div>
              <div>
                <div className="label">WhatsApp</div>
                <div className="value">Chat with us</div>
              </div>
            </a>
            <a className="contact-card" href={`tel:${PHONE_NUMBER}`}>
              <div className="icon">📞</div>
              <div>
                <div className="label">Phone</div>
                <div className="value">{formatPhone(PHONE_NUMBER)}</div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} K Smart Luxury — All rights reserved.</p>
      </footer>

      <a href={WHATSAPP_LINK} className="floating-whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <span>WhatsApp</span>
      </a>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}

function formatPhone(num) {
  return '0703 268 6308';
}