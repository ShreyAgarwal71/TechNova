//About Us Page: Description about the company
import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const AboutUs: React.FC = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center text-primary display-3 fw-bold">
        About TechNova
      </h1>

      <Row>
        <Col>
          <p className="fs-3">
            Welcome to TechNova, where innovation meets excellence in the world
            of technology. At TechNova, we are not just a tech company; we are
            architects of the future, dedicated to shaping a world where
            technology seamlessly integrates into every aspect of our lives.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Our Story</h3>
          <p className="fs-5">
            Founded in 2003, TechNova emerged with a vision to redefine the
            technological landscape. From our humble beginnings, we have grown
            into a global force, pioneering advancements that go beyond the
            ordinary. Our journey has been marked by a relentless pursuit of
            innovation and a commitment to delivering products and services that
            elevate the human experience.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Mission and Values</h3>
          <h4>Mission:</h4>
          <p className="fs-5">
            At TechNova, our mission is to empower individuals, businesses, and
            communities through technology. We strive to create solutions that
            inspire, simplify, and enhance daily experiences, fostering a
            connected and digitally enriched world.
          </p>
          <h4>Values:</h4>
          <ul className="fs-5">
            <li>
              <strong>Innovation:</strong> We believe in pushing the boundaries,
              embracing creativity, and staying ahead of the technological
              curve.
            </li>
            <li>
              <strong>User-Centricity:</strong> Our users are at the heart of
              everything we do. We design with empathy, ensuring our technology
              is intuitive and enriching.
            </li>
            <li>
              <strong>Quality:</strong> Excellence is non-negotiable. We are
              committed to delivering products and services that meet the
              highest standards of quality and reliability.
            </li>
            <li>
              <strong>Sustainability:</strong> TechNova is dedicated to
              environmental responsibility. We integrate sustainable practices
              into our operations, contributing to a greener and more
              sustainable future.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Our Leadership</h3>
          <ul className="fs-5">
            <li>
              <strong>CEO - [John Harrison]:</strong> A [industry]-veteran with
              a track record of transformative leadership, John leads the
              company with a vision that blends business acumen with a deep
              understanding of emerging technologies.
            </li>
            <li>
              <strong>CTO - [Blake Jackson]:</strong> As our Chief Technology
              Officer, Blake drives the technological strategy, ensuring that
              TechNova remains at the forefront of innovation in a rapidly
              evolving landscape.
            </li>
            <li>
              <strong>Head of Design - [Amy Leeds]:</strong> Amy leads our
              design team, infusing our products with a perfect blend of
              aesthetics and functionality.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Milestones</h3>
          <ul className="fs-5">
            <li>
              <strong>[2004]:</strong> TechNova launches its first product,
              marking the beginning of a journey dedicated to innovation and
              excellence.
            </li>
            <li>
              <strong>[2007]:</strong> Introduction of the Nova System, a
              groundbreaking solution that revolutionized the industry.
            </li>
            <li>
              <strong>[2012]:</strong> TechNova establishes a global presence,
              with offices in over 100 countries, creating a diverse and
              interconnected network.
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3>Our Promise</h3>
          <p className="fs-5">
            TechNova is more than a brand; it's a promise. A promise to
            continuously innovate, to prioritize user satisfaction, and to
            contribute to a sustainable and connected future. Join us on this
            exciting journey as we redefine what's possible in the world of
            technology.
          </p>
          <h4 className="text-center text-muted">
            Innovate. Elevate. Illuminate.
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
