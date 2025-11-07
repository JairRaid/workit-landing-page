import React from "react";

function App() {
  return (
    <>
      <header>
        <h1>
          <img src="assets/images/logo-light.svg" alt="" />
        </h1>
        <nav>
          <a href="#">Apply for access</a>
        </nav>
      </header>
      <main className="home-page">
        <section className="hero">
          <h2 className="hero-title">
            Data <span className=" border-b-[3px] border-green">tailored</span>{" "}
            to
            <br /> your needs.
          </h2>
          <a href="#" className="hero-button">
            Learn more
          </a>
          <figure className="hero-image">
            <img
              src="assets/images/image-hero.webp"
              alt="Phone with data chart"
            />
          </figure>
          <div className="hero-ornamental">
            <img src="assets/images/ornamental.svg" alt="ornamental" />
          </div>
          <div className="hero-bg-pattern1">
            <img
              src="assets/images/bg-pattern-1.svg"
              alt="background pattern"
            />
          </div>
          <div className="hero-bg-pattern2">
            <img
              src="assets/images/bg-pattern-2.svg"
              alt="background pattern"
            />
          </div>
        </section>

        <section className="features">
          <article className="feature">
            <h3>1</h3>
            <div className="feature-content">
              <h4>Actionable insights</h4>
              <p>
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </p>
            </div>
          </article>
          <article className="feature">
            <h3>2</h3>
            <div className="feature-content">
              <h4>Data-driven decisions</h4>
              <p>
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </p>
            </div>
          </article>
          <article className="feature">
            <h3>3</h3>
            <div className="feature-content">
              <h4>Always affordable</h4>
              <p>
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </p>
            </div>
          </article>
        </section>

        <section className="founder">
          <figure className="founder-image">
            <img src="assets/images/image-founder.webp" alt="founder image" />
          </figure>
          <div className="founder-text">
            <h2>Be the firts to test</h2>
            <p>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
            <a href="#" className="founder-button">
              Apply for access
            </a>
            <div className="hero-bg-pattern3">
              <img
                src="assets/images/bg-pattern-3.svg"
                alt="background pattern"
              />
            </div>
          </div>
        </section>

        <footer className="footer">
          <h2>
            <img src="assets/images/logo-dark.svg" alt="" />
          </h2>
          <nav className="footer-nav">
            <a href="#" className="footer-link">
              <img src="assets/images/icon-facebook.svg" alt="facebook icon" />
            </a>
            <a href="#" className="footer-link">
              <img src="assets/images/icon-twitter.svg" alt="twitter icon" />
            </a>
            <a href="#" className="footer-link">
              <img
                src="assets/images/icon-instagram.svg"
                alt="instagram icon"
              />
            </a>
          </nav>
        </footer>
      </main>
    </>
  );
}

export default App;
