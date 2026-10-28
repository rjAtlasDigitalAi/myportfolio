import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollObserver from '@/components/ScrollObserver';
import HeroTypewriter from '@/components/HeroTypewriter';

const techTools = [
  { name: "React", image: "/skills-tools/react_P.png" },
  { name: "Next.js", image: "/skills-tools/nextjs_P.png" },
  { name: "Node.js", image: "/skills-tools/nodejs_P.webp" },
  { name: "Express.js", image: "/skills-tools/express_P.png" },
  { name: "MongoDB", image: "/skills-tools/mongodb_P.webp" },
  { name: "PostgreSQL", image: "/skills-tools/postgreysql_P.webp" },
  { name: "Firebase", image: "/skills-tools/firebase_P.png" },
  { name: "Postman", image: "/skills-tools/postman_P.png" },
  { name: "GitHub", image: "/skills-tools/github_P.png" },
  { name: "VS Code", image: "/skills-tools/visualstudio_P.webp" },
  { name: "Vercel", image: "/skills-tools/vercel_P.webp" },
  { name: "Netlify", image: "/skills-tools/netlify_P.webp" },
  { name: "Render", image: "/skills-tools/render_P.png" },
  { name: "AWS", image: "/skills-tools/aws_P.webp" },
  { name: "GoDaddy", image: "/skills-tools/godaddy_P.webp" },
  { name: "Google Business", image: "/skills-tools/googlebusiness_P.jfif" },
  { name: "Search Console", image: "/skills-tools/googleconsole_P.png" },
  { name: "Antigravity", image: "/skills-tools/antigravity_P.jfif" },
  { name: "ChatGPT", image: "/skills-tools/chatgpt_P.webp" },
  { name: "Claude AI", image: "/skills-tools/claude_P.webp" },
  { name: "Gemini AI", image: "/skills-tools/gemini_P.webp" },
];

export default function Home() {
  return (
    <>
      <ScrollObserver />

      <header id="home" className="container pt-8 md:pt-14">
        <h1 className="display-name">Thanseeh</h1>

        <div className="hero-meta">
          <p>Web Developer</p>
        </div>

        <HeroTypewriter />
      </header>

      {/* Portrait section */}
      <div className="portrait reveal">
        <img
          src="/myprofile.webp"
          alt="Portrait of Thanseeh - Web Developer"
          fetchPriority="high"
        />
      </div>

      <main>
        {/* Selected Works */}
        <section id="projects" className="section container">
          <div className="section-heading reveal">
            <h2>Latest Works</h2>

          </div>

          <div className="work-grid">
            <article className="project reveal">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85"
                  alt="Minimal laptop product photography"
                  loading="lazy"
                />
              </div>
              <div className="project-caption">
                <h3>LittleHope Fashion</h3>
                <p>E-commerce / React / Node.js</p>
              </div>
            </article>

            <article className="project reveal reveal-delay-1">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85"
                  alt="MacBook on a minimal workspace"
                  loading="lazy"
                />
              </div>
              <div className="project-caption">
                <h3>Thanaf Watches</h3>
                <p>Online Store / Express / MongoDB</p>
              </div>
            </article>

            <article className="project reveal">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85"
                  alt="Smartphone product detail"
                  loading="lazy"
                />
              </div>
              <div className="project-caption">
                <h3>Crypto Price Tracker</h3>
                <p>Real-Time API / Node.js / Dashboard</p>
              </div>
            </article>

            <article className="project reveal reveal-delay-1">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern smartphone presentation"
                  loading="lazy"
                />
              </div>
              <div className="project-caption">
                <h3>Casio Simulator</h3>
                <p>Interactive Web App / Tailwind CSS</p>
              </div>
            </article>

            <article className="project reveal">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85"
                  alt="Desktop monitor and creative workspace"
                  loading="lazy"
                />
              </div>
              <div className="project-caption">
                <h3>Operations Dashboard</h3>
                <p>Custom Business Software / Next.js</p>
              </div>
            </article>

            <article className="project reveal reveal-delay-1">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85"
                  alt="Automotive campaign photography"
                  loading="lazy"
                />
              </div>
              <div className="project-caption">
                <h3>Local Business Portal</h3>
                <p>SEO / Google Maps / Web Presence</p>
              </div>
            </article>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section container services">
          <div className="section-heading reveal">
            <h2>Services</h2>

          </div>

          <div className="service-row reveal">
            <span className="service-number">1</span>
            <div className="service-content">
              <h3>Website Development</h3>
              <p>
                Modern, mobile-friendly websites that help businesses showcase their services and reach more customers.
              </p>
            </div>
            <div className="service-image">
              <img src="/service-image/website-devolopment.webp" alt="Website Development" loading="lazy" />
            </div>
          </div>

          <div className="service-row reveal">
            <span className="service-number">2</span>
            <div className="service-content">
              <h3>Custom Business Software</h3>
              <p>
                Software built around your business needs to simplify daily tasks and manage operations more efficiently.
              </p>
            </div>
            <div className="service-image">
              <img src="/service-image/custom-software.webp" alt="Custom Business Software" loading="lazy" />
            </div>
          </div>

          <div className="service-row reveal">
            <span className="service-number">3</span>
            <div className="service-content">
              <h3>Basic SEO</h3>
              <p>
                Improve your website's visibility on Google and help potential customers find your business online.
              </p>
            </div>
            <div className="service-image">
              <img src="/service-image/seo.webp" alt="Basic SEO" loading="lazy" />
            </div>
          </div>

          <div className="service-row reveal">
            <span className="service-number">4</span>
            <div className="service-content">
              <h3>Google Business Profile & Maps Setup</h3>
              <p>
                Help customers find your business on Google Search and Google Maps with a properly set up business profile.
              </p>
            </div>
            <div className="service-image">
              <img src="/service-image/googlebusiness.webp" alt="Google Business Profile & Maps Setup" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Tech & Tools */}
        <section id="tech" className="section container">
          <div className="section-heading reveal">
            <h2>Tech & Tools<br />That I Use</h2>
          </div>

          <div className="tech-spread-grid reveal" aria-label="Technologies and tools">
            {techTools.map((tool) => (
              <div key={tool.name} className="tech-tool-card">
                <div className="tech-tool-icon">
                  <img src={tool.image} alt={tool.name} loading="lazy" />
                </div>
                <span className="tech-tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-top">
            <div className="footer-cta reveal">
              <h3>
                Have any project<br />idea in your mind!
              </h3>

              <a
                className="button"
                href="https://wa.me/919074827805?text=Hi%2C%20I%20have%20a%20project%20idea%20and%20would%20like%20to%20work%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s create something <span>↗</span>
              </a>



              <div className="socials">
                <a
                  href="https://wa.me/919074827805"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  WhatsApp ↗
                </a>
                <a href="https://www.instagram.com/thanseeh.___/" target="_blank" rel="noopener noreferrer">
                  Instagram ↗
                </a>
                <a href="https://github.com/thanseehdev" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a href="https://linkedin.com/in/thanseeh-7aa934305" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <a className="email" href="mailto:thanseehdev@gmail.com">thanseehdev@gmail.com↗</a>

              <div className="footer-contact-phone">
                <a
                  href="https://wa.me/919074827805"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gray)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                  <FaWhatsapp style={{ color: '#25D366', fontSize: '1.2em' }} />
                  <span>+91 9074827805 ↗</span>
                </a>
              </div>

              <div className="footer-links">
                <div>
                  <h4>Main Pages</h4>
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#services">Services</a>
                  <a href="#tech">Tech & Tools</a>
                </div>

                <div>
                  <h4>Services</h4>
                  <a href="#services">Website Development</a>
                  <a href="#services">Business Software</a>
                  <a href="#services">Basic SEO</a>
                  <a href="#services">Google Maps Setup</a>
                </div>

                <div>
                  <h4>Connect</h4>
                  <a href="mailto:thanseehdev@gmail.com">thanseehdev@gmail.com</a>
                  <a
                    href="https://wa.me/919074827805"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <FaWhatsapp style={{ color: '#25D366' }} />
                    <span>+91 9074827805</span>
                  </a>
                  <a href="https://www.instagram.com/thanseeh.___/" target="_blank" rel="noopener noreferrer">@thanseeh.___</a>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '13px', fontSize: '12px', color: 'var(--gray)' }}>
                    <FaMapMarkerAlt style={{ color: '#e94b35', flexShrink: 0 }} />
                    <span>Mokeri, Kuttiady, Kozhikode</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
