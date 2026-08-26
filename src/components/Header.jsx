import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="s-header">
      <div className="row s-header__inner">
        <div className="s-header__block">
          <div className="s-header__logo">
            <a className="logo" href="#top">
              <img src="/images/logo.png" width="30" height="30" alt="" />
              <strong>hubham</strong>
            </a>
          </div>
          <a
            className={`s-header__menu-toggle ${menuOpen ? 'is-clicked' : ''}`}
            href="#0"
            onClick={(e) => { e.preventDefault(); setMenuOpen(!menuOpen); }}
          >
            <span>Menu</span>
          </a>
        </div>

        <nav className={`s-header__nav ${menuOpen ? 'is-open' : ''}`}>
          <ul className="s-header__menu-links">
            <li className="current"><a className="smoothscroll" href="#intro" onClick={() => setMenuOpen(false)}>Intro</a></li>
            <li><a className="smoothscroll" href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a className="smoothscroll" href="#works" onClick={() => setMenuOpen(false)}>My Works</a></li>
            <li><a className="smoothscroll" href="#footer" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
