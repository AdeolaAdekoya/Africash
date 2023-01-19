import React from "react";
import logo from "../assets/africashlogo.svg";
import download from "../assets/downlaod.svg";
import hero from "../assets/btfimg.svg";
import sd1 from "../assets/sd1.svg";
import sd2 from "../assets/sd2.svg";
import sd3 from "../assets/sd3.svg";
import sd4 from "../assets/sd4.svg";
import firstimg from "../assets/img1.svg";
import secondimg from "../assets/img2.svg";
import arrow from "../assets/arrow-right.svg";
import whitearrow from "../assets/white-arrow-right.svg";
import imagestate from "../assets/Group 14.svg";
import check from "../assets/check.svg";
import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
import test3 from "../assets/test3.svg";
import test4 from "../assets/test4.svg";
import test5 from "../assets/test5.svg";
import "../css/LandingPage.css";

const Landingpage = () => {
  return (
    <div>
      <section>
        <header>
          <nav>
            <div>
              <img src={logo} alt="" />
            </div>

            <div id="navelements">
              <ul className="nav-lists">
                <li>About</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>

              <button className="Login">Login</button>

              <button className="Signup">Sign up</button>
            </div>
          </nav>
        </header>

        <div id="hero-section">
          <div id="hero-text">
            <h1>AFRICA IN ONE FINANCIAL PLATFORM</h1>
            <p>
              Africash is a digital ecosystem designed to make Africa one. It’s
              goal is to bring the dream of financial inclusion to all people
              across the continent.
            </p>
            <button>
              <img src={download} alt="" /> Get started- It’s free
            </button>
          </div>
          <div id="hero-img">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
      <section id="rows">
        <div id="row-details">
          <div>
            <img src={sd1} alt="" />
          </div>
          <div>
            <img src={sd2} alt="" />
          </div>
          <div>
            <img src={sd3} alt="" />
          </div>
          <div>
            <img src={sd4} alt="" />
          </div>
        </div>
      </section>
      <section id="features">
        <h3 className="text-aligned">
          Trusted by <span className="span-green">200 Million+</span> active
          users across 54 countries
        </h3>

        <div id="padding-section">
          <div id="image-one">
            <div id="image-features">
              <img src={firstimg} alt="" />
            </div>
            <div className="features-copy">
              <h3>Travel every country in Africa without hopping on a plane</h3>
              <p>
                We are building a digital community that will empower you to
                take control of your money and make it work for you.
              </p>
              <button>
                Learn More <img src={arrow} alt="" />
              </button>
            </div>
          </div>

          <div id="image-one">
            <div className="features-copy">
              <h3>Earn rewards as you spend </h3>
              <p>
                We are building a digital community that will empower you to
                take control of your money and make it work for you.
              </p>
              <button>
                Learn More <img src={arrow} alt="" />
              </button>
            </div>
            <div id="image-featuress">
              <img src={secondimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="shared-screen-pic">
        <div id="shared-screen">
          <div className="image-one">
            <div className="text-container">
              <div className="image-one-content">
                <h3>Perks of using us?</h3>
                <ul>
                  <li>
                    {" "}
                    <img src={check} alt="" /> No monthly fees
                  </li>
                  <li>
                    {" "}
                    <img src={check} alt="" /> Shop internationally, no fees
                    added
                  </li>
                  <li>
                    {" "}
                    <img src={check} alt="" /> Instant Reversals
                  </li>
                  <li>
                    {" "}
                    <img src={check} alt="" /> Continental debit card
                  </li>
                </ul>
                <button>
                  Learn More <img src={whitearrow} alt="" />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="image-two">
            <div className="image-body">
              <img src={imagestate} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h3>
          Still on the fence, here’s what{" "}
          <span className="span-green">our users </span>
          are saying
        </h3>
        <div id="card-containers">
          <div className="testimonial-cards">
            <div className="card-content">
              <p>
                Africash is a really good app and it has made my life easier. I
                can now order as many things as I want to from Ghana and have
                them delivered to my doorstep. It's safe, easy and secure.
              </p>
            </div>
            <div className="test-line"></div>
            <div className="card-image">
              <div>
                <img src={test1} alt="" />
              </div>
              <p>
                <span>Laura Koffi</span>
              </p>
              <p>Entrepreneur</p>
            </div>
          </div>

          
          <div className="testimonial-cards">
            <div className="card-content">
              <p>
                With Africash, it's so easy to buy goods in Africa and have them
                sent directly to my home. It’s my go to app.
              </p>
            </div>
            <div className="test-line"></div>
            <div className="card-image">
              <div>
                <img src={test2} alt="" />
              </div>
              <p>
                <span>Lamin Njie</span>
              </p>
              <p>Student</p>
            </div>
          </div>
          <div className="testimonial-cards">
            <div className="card-content">
              <p>
                The service is amazing and i will be using it again in the
                future. Thank you Africash for making international trading
                easier with your service.
              </p>
            </div>
            <div className="test-line"></div>
            <div className="card-image">
              <div>
                <img src={test3} alt="" />
              </div>
              <p>
                <span>Ayobami Sobowale</span>
              </p>
              <p>Teacher</p>
            </div>
          </div>
          <div className="testimonial-cards">
            <div className="card-content">
              <p>
                Africash has been one of the best services i found so far and i
                have used it for over three months now, its fast and reliable.
              </p>
            </div>
            <div className="test-line"></div>
            <div className="card-image">
              <div>
                <img src={test4} alt="" />
              </div>
              <p>
                <span>Amal Deng</span>
              </p>
              <p>Stylist</p>
            </div>
          </div>
          <div className="testimonial-cards">
            <div className="card-content">
              <p>
                Africash has made sending money to my family in Namibia very
                convenient. I just have to go on their website and make the
                transfer. It's really easy and fast.
              </p>
            </div>
            <div className="test-line"></div>
            <div className="card-image">
              <div>
                <img src={test5} alt="" />
              </div>
              <p>
                <span>Dinari Shikongo</span>
              </p>
              <p>Software tester</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
