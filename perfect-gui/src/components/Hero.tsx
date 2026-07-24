import { lazy, Suspense, useState } from 'react';

const GuiDemoPanel = lazy(() => import('./GuiDemoPanel'));

const SUBTITLES = ['probably not', 'maybe not so', 'almost', 'nearly'];

const GUI_VERSION_SHORT = __GUI_VERSION__.split('.').slice(0, 2).join('.');

export default function Hero() {
  const [subtitle] = useState(() => SUBTITLES[Math.floor(Math.random() * SUBTITLES.length)]);

  return (
    <section id="hero" className="section hero">
      <div className="hero__badge">
        <span>v{GUI_VERSION_SHORT}</span>
        <span className="hero__badge-sep">·</span>
        <span className="hero__badge-note">zero dependencies</span>
      </div>

      <h1 className="hero__title">
        A nice, simple
        <br />
        and <em>({subtitle}) perfect</em> GUI.
      </h1>

      <p className="hero__lede">
        A lightweight control panel for tuning parameters in your JavaScript projects — three.js,
        canvas experiments, and beyond.
      </p>

      <div className="hero__actions">
        <div className="hero__install">npm install perfect-gui</div>
        <a className="btn-primary" href="https://github.com/thibka/perfect-gui" target="_blank">
          View on GitHub
        </a>
      </div>

      <Suspense fallback={<div className="demo-stage" />}>
        <GuiDemoPanel />
      </Suspense>
    </section>
  );
}
