//Landing page Intro, Gallery, News
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pic1 from "/src/Images/TechNova1.jpeg";
import Pic2 from "/src/Images/TechNova2.jpeg";
import Pic3 from "/src/Images/TechNova3.jpeg";

import Carousel from "react-bootstrap/Carousel";

const MainPage: React.FC = () => {
  return (
    <div>
      <div className="container mt-4">
        <h1 className="text-center text-primary display-3 fw-bold">TechNova</h1>
        <h4 className="text-center text-muted">
          Innovate. Elevate. Illuminate.
        </h4>

        <div className="my-4">
          <h2>Bringing Innovation to Your World</h2>
          <p className="fs-4">
            TechNova is a leading global technology company dedicated to
            transforming the way people live, work, and interact with the world.
            With a strong commitment to innovation, cutting-edge technology, and
            user-centric design, TechNova has become a trusted name in the tech
            industry, making a lasting impact on our daily lives. At TechNova,
            our mission is to create innovative solutions that enhance and
            simplify everyday experiences. We are passionate about pushing the
            boundaries of technology to empower individuals, businesses, and
            communities across the globe.
          </p>
        </div>

        <div className="my-4">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Pic1} alt="First slide" />
              <Carousel.Caption>
                <h3 className="fw-bold">Cutting-Edge Technology, Always</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Pic2} className="d-block w-100" alt="Second slide" />
              <Carousel.Caption>
                <h3 className="fw-bold">Cutting-Edge Technology, Always</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Pic3} alt="Third slide" />
              <Carousel.Caption>
                <h3 className="fw-bold">Cutting-Edge Technology, Always</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="my-4">
          <h2>News</h2>
          <p>
            Stay updated with the latest news and achievements of our business.
          </p>
          <Carousel>
            <Carousel.Item className="mb-4">
              <div className="row justify-content-center">
                <div className="card text-center col-sm-3 m-2">
                  <div className="card-header">Quantum X Pro Unveiled</div>
                  <div className="card-body">
                    <h5 className="card-title">The Future of Smartphones</h5>
                    <p className="card-text">
                      TechNova is thrilled to announce the launch of Quantum X
                      Pro, our latest flagship smartphone. Packed with
                      groundbreaking features and a sleek design, Quantum X Pro
                      sets a new standard for mobile innovation.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "33%",
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary">today</div>
                </div>
                <div className="card text-center col-sm-3 m-2">
                  <div className="card-header">NovaCloud Upgrade</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      More Storage, Enhanced Security
                    </h5>
                    <p className="card-text">
                      Exciting news for NovaCloud users! We've upgraded our
                      cloud storage solution to offer more space and enhanced
                      security features. Now you can store, share, and access
                      your files with even greater peace of mind.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "33%",
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary">
                    2 days ago
                  </div>
                </div>
                <div
                  className="card text-center col-sm-3 m-2"
                  style={{ height: "26rem" }}
                >
                  <div className="card-header">Enviorment</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      TechNova Joins Sustainable Tech Initiative
                    </h5>
                    <p className="card-text">
                      TechNova is proud to be part of the Sustainable Tech
                      Initiative, reinforcing our commitment to environmentally
                      responsible practices. Learn more about our initiatives to
                      reduce our carbon footprint and promote a greener future.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "33%",
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary">
                    2 days ago
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="mb-4">
              <div className="row justify-content-center">
                <div className="card text-center col-sm-3 m-2">
                  <div className="card-header">TechNova Assist 2.0</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Your Digital Companion Evolved
                    </h5>
                    <p className="card-text">
                      Say hello to TechNova Assist 2.0! Our digital assistant
                      has evolved with new features, improved voice recognition,
                      and seamless integration with your daily tasks. Elevate
                      your productivity with the latest Assist update.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "33%",
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary">
                    5 days ago
                  </div>
                </div>
                <div className="card text-center col-sm-3 m-2">
                  <div className="card-header">Awards</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      TechNova Wins Innovation Award
                    </h5>
                    <p className="card-text">
                      We're excited to share that TechNova has been honored with
                      the Innovation Excellence Award for our contributions to
                      advancing technology. This recognition motivates us to
                      continue pushing the boundaries of innovation.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "33%",
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary">
                    1 week ago
                  </div>
                </div>
                <div
                  className="card text-center col-sm-3 m-2"
                  style={{ height: "24rem" }}
                >
                  <div className="card-header">
                    TechNova Community Spotlight
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Celebrating Our Users</h5>
                    <p className="card-text">
                      In this edition of TechNova Community Spotlight, we
                      celebrate the achievements and stories of our incredible
                      users. Your experiences drive us to create technology that
                      makes a positive impact.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "33%",
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary">
                    2 weeks ago
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <h4 className="text-center text-muted m-3">
        Innovate. Elevate. Illuminate.
      </h4>
    </div>
  );
};

export default MainPage;
