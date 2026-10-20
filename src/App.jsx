import React, { useEffect } from 'react';
import GhostFibers from './components/GhostFibers.jsx';
import FlexCarousel from './components/FlexCarousel.jsx';
import { mentors, programme } from './data/event.js';

const siteBase = import.meta.env.BASE_URL;
const assetHref = path => `${siteBase}${path}`;
const homeHref = hash => `${siteBase}${hash}`;
const mentorHref = slug => `${siteBase}mentors/${slug}.html`;

function useScrollDetails() {
  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    elements.forEach(element => observer.observe(element));

    const progress = document.querySelector('.scroll-progress');
    const updateProgress = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    const hashTarget = window.location.hash && document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    const hashFrame = hashTarget ? requestAnimationFrame(() => hashTarget.scrollIntoView({ behavior: 'instant', block: 'start' })) : null;
    return () => {
      observer.disconnect();
      if (hashFrame !== null) cancelAnimationFrame(hashFrame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);
}

function Header({ detail = false }) {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href={siteBase} aria-label="Founders and Futures home">
          <img className="event-logo" src={assetHref('logo/founders-futures-lockup-light.svg')} alt="" width="340" height="66" />
        </a>
        <nav aria-label="Main navigation">
          <a href={detail ? homeHref('#foreword') : '#foreword'}>Foreword</a>
          <a href={detail ? homeHref('#roadmap') : '#roadmap'}>Roadmap</a>
          <a href={detail ? homeHref('#mentors') : '#mentors'}>Mentors</a>
        </nav>
        <a className="header-date" href={detail ? homeHref('#roadmap') : '#roadmap'}>21 October 2026 <span aria-hidden="true">↗</span></a>
      </header>
    </>
  );
}

function Arrow({ diagonal = false }) {
  return <span className="link-arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-fibers" aria-hidden="true">
        <GhostFibers
          glowColor="#a97aff"
          secondaryColor="#43347c"
          lineColor="#dfd1ff"
          layers={3}
          twist={1.1}
          threads={58}
          fiberStyle="dots"
          depthOfField={0.82}
          particles={0.23}
          sparkle={0.35}
          brightness={0.75}
          vignette={0.38}
          hoverEffect="focus"
          intro
          mouseInteraction
          dpr={1.5}
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content shell">
        <div className="hero-intro"><img className="society-logo" src={assetHref('logo/esau-shield.jpeg')} alt="" width="25" height="31" /> Adelaide University Entrepreneurs Society presents</div>
        <p className="hero-welcome">Welcome to</p>
        <h1 id="hero-title"><span>Founders</span><span className="hero-second">&amp; Futures<span className="hero-period">.</span></span></h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-event">Mentors Night</p>
            <p className="hero-description">Three perspectives. One evening to question what comes next.</p>
          </div>
          <a className="round-link" href="#foreword" aria-label="Scroll to the foreword"><Arrow /></a>
        </div>
      </div>
      <div className="hero-footer shell">
        <span>Wednesday, 21 October 2026</span>
        <span>6:30–8:30 pm · Arrivals from 6:15 pm</span>
        <span>Scroll to discover <span className="scroll-chevron" aria-hidden="true">↓</span></span>
      </div>
    </section>
  );
}

function Foreword() {
  return (
    <section className="foreword section-pad" id="foreword" aria-labelledby="foreword-title">
      <div className="shell foreword-grid">
        <div className="foreword-copy" data-reveal="slide">
          <p className="section-index"><span>01</span> A note from our president</p>
          <h2 id="foreword-title">An evening built around possibility.</h2>
          <blockquote>“We deeply appreciate your presence today”</blockquote>
          <div className="foreword-signature"><span className="signature-line" /><div><strong>Muhsina</strong><span>President, Entrepreneurs Society</span></div></div>
        </div>
        <div className="foreword-portrait" data-reveal="portrait">
          <div className="portrait-arc portrait-arc-one" aria-hidden="true" />
          <div className="portrait-arc portrait-arc-two" aria-hidden="true" />
          <img src={assetHref('images/muhsina-crisp.png')} alt="Muhsina, President of the Entrepreneurs Society" />
          <div className="portrait-caption"><span>Muhsina</span><span>Society president</span></div>
        </div>
      </div>
    </section>
  );
}

function ProgrammeRow({ item, index }) {
  return (
    <li className={`programme-row ${item.mentor ? 'is-talk' : ''}`} data-reveal="roadmap" style={{ '--reveal-delay': `${Math.min(index, 7) * 45}ms` }}>
      <time>{item.time}</time>
      <span className="roadmap-node" aria-hidden="true" />
      <div className="programme-body">
        <div className="programme-title-line">
          <h3>{item.title}</h3>
          {item.mentor && <a href={mentorHref(item.mentor)} aria-label={`Explore ${item.title}'s presentation`}><Arrow diagonal /></a>}
        </div>
        <p>{item.description}</p>
        {item.detail && <span className="programme-detail">{item.detail}</span>}
      </div>
    </li>
  );
}

function Roadmap() {
  return (
    <section className="roadmap section-pad" id="roadmap" aria-labelledby="roadmap-title">
      <div className="shell">
        <div className="section-head" data-reveal="slide">
          <p className="section-index"><span>02</span> The evening</p>
          <div className="section-head-grid"><h2 id="roadmap-title">The roadmap.</h2><p>From the first question to the conversations that follow. Every moment has a purpose.</p></div>
        </div>
        <div className="roadmap-panel">
          <div className="roadmap-side"><span className="roadmap-side-title">Wednesday<br />21 October</span><span className="roadmap-side-rule" /><span>2026<br />Adelaide</span></div>
          <div className="roadmap-content">
            <ol className="programme-list">{programme.slice(0, 4).map((item, index) => <ProgrammeRow key={item.time} item={item} index={index} />)}</ol>
            <div className="programme-break" data-reveal="slide"><span>After the talks</span><h3>Dinner &amp; connections</h3></div>
            <ol className="programme-list programme-list-last">{programme.slice(4).map((item, index) => <ProgrammeRow key={item.time} item={item} index={index + 4} />)}</ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mentors() {
  const carouselItems = mentors.map(mentor => ({
    src: mentor.image,
    alt: mentor.imageAlt,
    title: mentor.name,
    subtitle: mentor.carouselTopic,
    slug: mentor.slug
  }));
  return (
    <section className="mentors section-pad" id="mentors" aria-labelledby="mentors-title">
      <div className="shell">
        <div className="mentors-heading" data-reveal="slide">
          <div><p className="section-index"><span>03</span> Meet the mentors</p><h2 id="mentors-title">Different paths.<br /><em>Shared momentum.</em></h2></div>
          <p>Explore the people behind the ideas. Select a portrait to open their presentation page.</p>
        </div>
        <div className="carousel-wrap" id="mentor-carousel" data-reveal="carousel">
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.68}
            gap={18}
            fit="portrait"
            squeeze={0.18}
            focusOnClick={false}
            captureWheel={false}
            captions
            onSelect={(_index, item) => { window.location.href = mentorHref(item.slug); }}
          />
        </div>
        <div className="mentor-directory" aria-label="Mentor presentation pages">
          {mentors.map(mentor => <a key={mentor.slug} className="mentor-directory-item" href={mentorHref(mentor.slug)} data-reveal="roadmap"><span>{mentor.number}</span><strong>{mentor.name}</strong><small>{mentor.carouselTopic}</small><Arrow diagonal /></a>)}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <footer className="closing">
      <div className="shell closing-inner" data-reveal="slide"><span className="closing-star" aria-hidden="true">✳</span><p>Ask questions.<br />Make connections.<br /><em>Take your next step.</em></p><div className="closing-meta"><span>Founders &amp; Futures</span><span>Mentors Night · 21 October 2026</span></div></div>
    </footer>
  );
}

function HomePage() {
  return <><Header /><main><Hero /><Foreword /><Roadmap /><Mentors /></main><Closing /></>;
}

function MentorPage({ mentor }) {
  return (
    <><Header detail /><main className="mentor-page" style={{ '--mentor-accent': mentor.accent }}>
      <div className="mentor-page-glow" aria-hidden="true" />
      <section className="mentor-hero shell">
        <a className="back-link" href={homeHref('#mentor-carousel')}><span aria-hidden="true">←</span> Back to mentors</a>
        <div className="mentor-hero-grid">
          <div className="mentor-hero-copy" data-reveal="slide">
            <p className="section-index"><span>{mentor.number}</span> Mentors Night speaker</p>
            <h1>{mentor.name}</h1>
            <p className="mentor-hero-lead">{mentor.lead}</p>
            <div className="mentor-session-meta"><span>21 October 2026</span><span>{mentor.time}</span></div>
          </div>
          <div className="mentor-hero-photo" data-reveal="portrait"><img src={mentor.image} alt={mentor.imageAlt} /><span className="photo-orbit" aria-hidden="true" /></div>
        </div>
      </section>
      <section className="mentor-talk section-pad" aria-labelledby="talk-title"><div className="shell mentor-talk-grid"><p className="section-index" data-reveal="slide"><span>↳</span> The presentation</p><div data-reveal="slide"><h2 id="talk-title">{mentor.topic}<span className="accent-period">.</span></h2><p>The programme includes a 15-minute presentation followed by five minutes of MC-led questions.</p><a className="text-link" href={homeHref('#roadmap')}>See the full evening roadmap <Arrow diagonal /></a></div></div></section>
      <section className="mentor-about section-pad" aria-labelledby="about-title"><div className="shell mentor-about-grid"><div data-reveal="slide"><p className="section-index"><span>01</span> The perspective</p><h2 id="about-title">A path shaped by experience.</h2></div><p className="mentor-bio" data-reveal="slide">{mentor.bio}</p></div></section>
      <section className="mentor-experience section-pad" aria-labelledby="experience-title"><div className="shell"><div className="mentor-list-head" data-reveal="slide"><p className="section-index"><span>02</span> Experience</p><h2 id="experience-title">Where that perspective comes from.</h2></div><div className="experience-list">{mentor.roles.map(([role, organisation], index) => <div className="experience-row" key={`${role}-${organisation}`} data-reveal="roadmap"><span>{String(index + 1).padStart(2, '0')}</span><strong>{role}</strong><span>{organisation}</span></div>)}</div></div></section>
      <section className="mentor-themes section-pad" aria-labelledby="themes-title"><div className="shell mentor-themes-grid"><div data-reveal="slide"><p className="section-index"><span>03</span> Questions to bring</p><h2 id="themes-title">Ideas to explore during the session.</h2></div><ul>{mentor.takeaways.map((takeaway, index) => <li key={takeaway} data-reveal="roadmap"><span>{String(index + 1).padStart(2, '0')}</span>{takeaway}</li>)}</ul></div></section>
      <section className="mentor-next shell" data-reveal="slide"><div><a href={homeHref('#mentor-carousel')}>Back to mentors <Arrow /></a></div></section>
    </main><Closing /></>
  );
}

export default function App() {
  useScrollDetails();
  const slug = window.location.pathname.match(/\/mentors\/([^/]+)\.html$/)?.[1];
  const mentor = mentors.find(item => item.slug === slug);
  return mentor ? <MentorPage mentor={mentor} /> : <HomePage />;
}
