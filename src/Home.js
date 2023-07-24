import React from 'react';
import './Home.css'
import Header from './Header.js';
import Footer from './Footer.js';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Company Name</h1>
            <p>We are a leading company that provides top-notch services to our clients.</p>
          </div>
        </section>

        <section className="mission-vision">
          <div className="container">
            <div className="mission">
              <h2>Mission</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt justo ut ultrices aliquet.</p>
            </div>
            <div className="vision">
              <h2>Vision</h2>
              <p>Phasellus rhoncus ipsum eget fermentum tempus. In hac habitasse platea dictumst.</p>
            </div>
          </div>
        </section>

        <section className="featured-services">
          <div className="container">
            <h2>Featured Services</h2>
            <div className="service">
              <h3>Service 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service">
              <h3>Service 2</h3>
              <p>Phasellus rhoncus ipsum eget fermentum tempus.</p>
            </div>
            {/* Add more featured services as needed */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
