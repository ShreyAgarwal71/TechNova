//Page of why one works at the company and availble jobs
import React from "react";
import JobCard from "./JobCard";
import { Container, Row, Col } from "react-bootstrap";

const Career: React.FC = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="text-center text-primary display-3 fw-bold">
          Join TechNova: Where Your Career Thrives
        </h1>

        <Row>
          <Col>
            <p className="fs-4">
              At TechNova, we believe that our greatest asset is our people. We
              are not just a company; we are a community of innovators,
              collaborators, and visionaries who are shaping the future of
              technology. Join us and discover a workplace that values your
              talents, nurtures your growth, and celebrates your success.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h2>Why Choose TechNova:</h2>
            <ol>
              <li>
                <p className="fs-5">
                  Innovative Environment: Immerse yourself in a culture that
                  thrives on innovation. At TechNova, we encourage
                  out-of-the-box thinking and provide the tools and resources to
                  turn ideas into reality.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Professional Development: We invest in our employees' growth.
                  Whether through workshops, training programs, or mentorship
                  opportunities, we are committed to helping you reach your full
                  potential.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Collaborative Teams: Join dynamic and diverse teams where
                  collaboration is not just encouraged but celebrated. At
                  TechNova, we believe that great ideas emerge from the
                  collective brilliance of our talented teams.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Cutting-Edge Technology: Be at the forefront of technological
                  evolution. Work with the latest tools and technologies, and
                  contribute to projects that shape the future of the tech
                  industry.
                </p>
              </li>
            </ol>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h2>Positive Work Culture:</h2>
            <ol>
              <li>
                <p className="fs-5">
                  Open Communication: Your voice matters. We believe in
                  transparent and open communication, ensuring that every team
                  member's perspective is heard and respected.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Diversity and Inclusion: Embrace a workplace where diversity
                  is not just welcomed but celebrated. We believe that a diverse
                  team brings varied perspectives and fosters creativity.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Work-Life Balance: Achieve your best when you have a healthy
                  balance between work and life. We prioritize well-being and
                  understand the importance of a fulfilling personal and
                  professional life.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Recognition and Appreciation: Your hard work doesn't go
                  unnoticed. TechNova recognizes and appreciates the dedication
                  and contributions of every team member, fostering a culture of
                  mutual appreciation.
                </p>
              </li>
            </ol>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h2>Perks and Programs:</h2>
            <ol>
              <li>
                <p className="fs-5">
                  Competitive Compensation: We believe in rewarding talent.
                  Enjoy a competitive salary that reflects your skills and
                  contributions.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Comprehensive Benefits: Your well-being is our priority.
                  Benefit from a comprehensive health and wellness package,
                  including medical, dental, and vision coverage.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Flexible Work Arrangements: Achieve a work-life balance that
                  suits you. TechNova offers flexible work arrangements to
                  accommodate your unique needs.
                </p>
              </li>
              <li>
                <p className="fs-5">
                  Social and Recreational Activities: Connect with colleagues
                  beyond the workspace. TechNova organizes social events,
                  team-building activities, and recreational programs to foster
                  a sense of community.
                </p>
              </li>
            </ol>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h1 className="text-center">Join the TechNova Family</h1>
            <p className="fs-4">
              TechNova is not just a workplace; it's a community of passionate
              individuals working together to redefine what's possible. Join us
              on this exciting journey, where your career thrives, and
              innovation knows no bounds.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="row m-3">
        <h1 className="text-center text-primary display-3 fw-bold">Careers</h1>
        <p className="text-center fs-3">
          Explore our current openings and embark on a rewarding career with
          TechNova.
        </p>

        <JobCard
          name={"Software Engineer"}
          description={
            "Description: As a Software Engineer, you will be responsible for designing, developing, and maintaining high-quality software solutions. Collaborate with cross-functional teams to implement cutting-edge technologies and contribute to the full software development lifecycle."
          }
          qualification={
            "Qualification: Bachelor's degree in Computer Science or related field"
          }
          salaryRange={"Salary Range: $70,000 - $100,000 per year"}
        ></JobCard>
        <JobCard
          name={"Digital Marketing Specialist"}
          description={
            "Description: As a Digital Marketing Specialist, you will develop and execute digital marketing strategies to enhance online presence. Manage social media, SEO, and online advertising campaigns. Analyze data to optimize campaigns and drive brand engagement."
          }
          qualification={
            "Qualification: Bachelor's degree in Marketing, Communications, or a related field"
          }
          salaryRange={"Salary Range: $55,000 - $75,000 per year"}
        ></JobCard>
        <JobCard
          name={"UX/UI Designer"}
          description={
            "Description: Join our team as a UX/UI Designer to create visually appealing and user-friendly interfaces. Collaborate with product managers and developers to understand user requirements and design intuitive experiences. Proficiency in design tools is a must."
          }
          qualification={
            "Qualification: Degree in Graphic Design, HCI, or a related field"
          }
          salaryRange={"Salary Range: $65,000 - $90,000 per year"}
        ></JobCard>
        <JobCard
          name={"Data Scientist"}
          description={
            "Description: As a Data Scientist, you'll analyze complex datasets to extract valuable insights. Develop machine learning models and algorithms to drive business decisions. Strong programming and statistical skills are essential for this role."
          }
          qualification={
            "Qualification: Master's degree in Data Science, Statistics, or a related field"
          }
          salaryRange={"Salary Range: $80,000 - $110,000 per year"}
        ></JobCard>
        <JobCard
          name={"Customer Support Specialist"}
          description={
            "Description: Join our customer support team to provide exceptional service to our clients. Respond to inquiries, troubleshoot issues, and ensure customer satisfaction. Excellent communication and problem-solving skills are essential."
          }
          qualification={
            "Qualification: Associate degree or equivalent experience"
          }
          salaryRange={"Salary Range: $40,000 - $55,000 per year"}
        ></JobCard>
        <JobCard
          name={"Sustainability Analyst"}
          description={
            "Description: As a Sustainability Analyst, you will assess and report on the environmental impact of our operations. Implement sustainable practices, conduct research, and collaborate with teams to drive eco-friendly initiatives."
          }
          qualification={
            "Qualification: Bachelor's degree in Environmental Science, Sustainability, or related field"
          }
          salaryRange={"Salary Range: $60,000 - $80,000 per year"}
        ></JobCard>
        <h4 className="text-center text-muted">
          Innovate. Elevate. Illuminate your career with TechNova
        </h4>
      </div>
    </>
  );
};

export default Career;
